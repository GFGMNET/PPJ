<template lang="pug">
  #app
   .left
    <NavMenu />
   .right
    
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
  width: 20%;
  float: left;
}
.right {
  width: 75%;
  float: left;
}

</style>
