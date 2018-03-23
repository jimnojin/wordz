<template>
        <v-list two-line subheader>
          <v-list-tile avatar v-for="word in wordz" :key="word['.key']">
            <v-list-tile-content @click="$router.push({ name: 'word', params: { id: word['.key'] } })">
              <v-list-tile-title>{{ word.wordText }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ word.meanings }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>          
        </v-list>       
</template>

<script>
import db from '@/database'
// import Word from '@/models/word'

export default {
  name: 'hello',
  firebase: {
    wordz: {
      source: db.ref('words'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  mounted () {
    // const postData = {
    //   langFrom: 'de',
    //   langTo: 'en',
    //   wordText: 'hallo',
    //   meanings: ['hello', 'hi']
    // }

    // this.$firebaseRefs.wordz.push(postData)
  }
}
</script>

<style scoped>

</style>