<template>
  <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Words</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
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
  computed: {
    de () {
      return this.wordz.q
    }
  },
  mounted () {
    console.log(this.wordz)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
