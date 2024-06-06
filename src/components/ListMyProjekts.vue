<template>
  <v-card>
    <form @submit.prevent="createPost">

        <v-text-field label="UserID" type="text" id="userId" v-model="postData.userId"></v-text-field>
        <v-text-field label="UserID" type="text" id="userId" v-model="postData.title"></v-text-field>
        <v-text-field label="UserID" type="text" id="userId" v-model="postData.Body"></v-text-field>
      <button>Create Post</button>
    </form>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: {
        userId: '',
        title:  '',
        body:   ''
      }
    }
  },
  methods: {
    createPost() {
     axios
      .post('http://localhost:3000/PPJ', this.postData)
      .then((response) => console.log(response))
	}
  }
}
</script>

<style>
html,body{margin:0;padding:0}
section{height:100vh;display:grid;justify-items:center;padding-top:40px}
div{margin:24px auto}
label{font-weight:bolder;display:block;margin-bottom:4px}
</style>