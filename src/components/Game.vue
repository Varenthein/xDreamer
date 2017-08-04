<template>
  <div class="game">
    <h1 class="game__loader" v-if="!chapter">Loading...</h1>
    <chapter ng-if="chapter" :chapter="chapter"></chapter>
  </div>
</template>

<script>

 /* load db starting structure */
 import { _DB, dbService, chapterService, dataService } from '@/assets/db/services.js'
 import Chapter from './Chapter'

 export default {
  name: 'game',
  data () {
    return {
      chapter: {},
      chaptersDB: {},
      dataDB: {}
    }
  },
  created: function () {

      var conn = new dbService();
      conn.prepareDB().then(() => {

              //run services
              this.chaptersDB = new chapterService();
              this.dataDB = new dataService();

              /* get active chapter */

              this.dataDB.getVar("activeChapter", (variable) => {
                  this.loadChapter(variable.val);
              });

         }).catch((error) => { console.error("Couldn't connect to DataBase", error) });

  },
  components: {
    'chapter': Chapter
  },
  methods: {
    loadChapter: function(chapterId) {

      this.chaptersDB.getById(chapterId, (chapter) => {
          this.chapter = chapter;
      });

    }
  }
}
</script>

<style scoped>

.game {
  width: 100%;
  height: 100vh;
}
.game__loader {
  font-family: "Stay Writer";
  color: #37240d;
  font-size: 10em;
  text-shadow: 0 0 5px #fff;
  font-weight: bold;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0px;
}
</style>
