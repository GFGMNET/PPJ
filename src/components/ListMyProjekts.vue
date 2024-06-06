<template>
  <v-card>
      h1 Hardware Form
    <form @submit.prevent="createPost">
        <v-text-field label="Vendor" type="text" id="vendor" v-model="postData.vendor"></v-text-field>
        <v-text-field label="Department" type="text" id="department" v-model="postData.department"></v-text-field>
        <v-text-field label="Key User" type="text" id="KeyUser" v-model="postData.keyuser"></v-text-field>
        <v-text-field label="Go Live" type="text" id="Golive" v-model="postData.golive"></v-text-field>
        <v-textarea label="Description" type="text" id="userId" v-model="postData.desc"></v-textarea>
        <v-file-input label="Technical Dokumentation" v-model="postData.file"></v-file-input>
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
        keyuser: '',
        vendor: '',
        type: 'Hardware',
        golive:  '',
        department:  '',
        file: '',
        desc:   ''
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
</style>