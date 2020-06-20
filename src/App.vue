<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100%;
  background-color: rgba(242, 242, 242, 1);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  color: #2c3e50;
  margin-top: 45px;
}

.stencil{
  width: 100%;
  height: 100%;
  padding: 0 10px;
}


.tr{
  width: 375px;
  height: 20px;
  background: forestgreen;
}
</style>
