<template>
  <div class="chapter">
      TEST
  </div>
</template>

<script>
 var Dexie = require('Dexie')

 export default {
  name: 'chapter',
  props: ['data'],
  data () {
    return {
      chapter: {},
      db: {}
    }
  }
}
</script>

<style scoped>

</style>
