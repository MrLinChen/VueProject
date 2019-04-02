<template>
  <div id="app" :style="{'height':clientHeight+'px','width':clientWidth+'px'}">
  <!--  <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth
    }
  }
}
</script>

<style>
  body{
    margin: 0px;
    border: 0px;
    padding: 0px;
    font-size: 0px;
  }
#app {
  margin: 0px;
}
</style>
