<template lang="pug">
  #app
   .left
    <NavMenu />
   .right
    h1 test
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
 width: 100%;

}
.left {
  width: 30%;
  float: left;
}
.right {
  width: 65%;
  float: left;
}

</style>
