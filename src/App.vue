<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- <Demo /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo
  },
}
</script>

<style>

</style>
