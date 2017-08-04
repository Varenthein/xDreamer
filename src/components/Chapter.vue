<template>
  <div class="chapter">
      TEST {{chapter}}
  </div>
</template>

<script>
 export default {
  props: ["chapter"],
  data () {
    return {
       chapterData: this.chapter
    }
  },
  watch: {
     chapter: function (chapterChanged) {
       this.chapterData = chapterChanged;
     }
   },
}
</script>

<style scoped>

</style>
