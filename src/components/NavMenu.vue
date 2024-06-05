<template lang="pug">
    v-card
      ul 
       li.projectname 
        | PPJ 
       li.username 
        | Peterson, Mike
       li
        a(href="/") Home
       li
        a(href="/mycases") Meine Projekte
       li
        a(href="/help") Hilfe

</template>
<style scoped>
.projectname {
  background-color: lightgray;
  padding: 5px;
  font-size: medium;
}
.username {
  background-color: lightgray;
  font-size: medium;
  padding: 5px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;    
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color:crimson ;
}




</style>