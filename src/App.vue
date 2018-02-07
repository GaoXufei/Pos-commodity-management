<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from '@/components/commons/toolbar'

export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>
body,html{
  width:100%;
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height:100%;
  height:100%;

}

</style>
