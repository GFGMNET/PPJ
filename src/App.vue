<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" v-model="name" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="greeting">{{ greeting }}</p>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
