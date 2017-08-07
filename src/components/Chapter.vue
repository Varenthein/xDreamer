<template>
  <div class="chapter">
      <h2 v-if="!chapter">Loading chapter...</h2>
      <div v-if="chapter" class="chapter__content">
        <div class="chapter__image">
        </div>
        <div class="chapter__story">
          <div class="chapter__story__title">{{ chapterTitle }}</div>
          <div class="chapter__story__text">{{ chapterText }}</div>
          <div class="chapter__story__options"></div>
        </div>
      </div>
  </div>
</template>

<script>
 export default {
  props: ["chapter"],
  data () {
    return {
       chapterData: this.chapter,
       chapterTitle: '',
       chapterText: '',
       chapterOptions: [],
    }
  },
  methods: {
    prepareChapter: function() {
      //TO DO---> validate chapter before running it

      /* Set default settings */
      this.chapterTitle = this.chapterData.title;
      this.chapterText = '';
      this.chapterOptions = [];

      /* Run chapter */
      this.runChapter();
    },
    runChapter: function() {

        var story = this.chapterData.text;
        var self = this;

        (function iterate() {
                if(story[self.chapterText.length] != undefined) {
                  self.chapterText += story[self.chapterText.length];
                  setTimeout(iterate,200);
                } else console.log("KONIEC");
         })();

    }
  },
  watch: {
     chapter: function (chapterChanged) {
       this.chapterData = chapterChanged;
       this.prepareChapter();
     }
   },
}
</script>

<style>
body {
    background: url(../assets/img/game__back-wood.jpg) no-repeat fixed center center;
    background-size: cover;
}
</style>

<style scoped>

</style>
