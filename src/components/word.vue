<template>
  <div>    
    <div v-if="word.wordText">
      {{ word }}
    </div>
    <v-progress-circular indeterminate color="primary" v-else></v-progress-circular>
  </div>
</template>

<script>
import db from '@/database'

export default {
  props: [ 'id' ],
  firebase: function () {
    return {
      word: { // can use keys, but v-for doesn't loop
        source: db.ref('words').child(this.$route.params.id),
        asObject: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>