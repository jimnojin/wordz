<template>
<v-card>
  <v-card-text v-if="loading">
    <v-progress-circular indeterminate color="primary" ></v-progress-circular>
  </v-card-text>
  

  <v-list two-line subheader v-else>
    <v-list-tile avatar v-for="word in wordz" :key="word['.key']">
      <v-list-tile-content @click="$router.push({ name: 'word', params: { id: word['.key'] } })">
        <v-list-tile-title>{{ word.wordText }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ word.meanings }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
  
  <v-card-text style="height: 100px; position: relative">
    <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="pink"
        @click="add()"
      >
        <v-icon>add</v-icon>
      </v-btn>
  </v-card-text>
</v-card>
</template>

<script>
import db from '@/database'
// import Word from '@/models/word'

export default {
  name: 'hello',
  data () {
    return {
      loading: true
    }
  },
  firebase: {
    wordz: {
      source: db.ref('words').limitToLast(10),
      readyCallback () {
        this.loading = false
      }
    }
  },
  methods: {
    add () {
      const postData = {
        langFrom: 'de',
        langTo: 'en',
        wordText: 'Bier',
        meanings: ['beer']
      }

      this.$firebaseRefs.wordz.push(postData)
    }
  }
}
</script>

<style scoped>

</style>