<template lang="pug">
  #app
   .left
    <NavMenu />
   .right
    <ListMyProjects />
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import ListMyProjects from './components/ListMyProjekts.vue'
export default {
  name: 'App',
  components: {
    NavMenu,
    ListMyProjects
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
