<script>
import {RouterView } from 'vue-router'
import navigasiContent from './components/navigasi.vue'
export default{
  components:{
    navigasiContent
  }
}
</script>

<template>
  <div class="container">
    <navigasiContent></navigasiContent>
  <RouterView />
    </div>
</template>

<style>
*{
  padding: 0;
  box-sizing: border-box;
}
.contianer{
  width: 100%;
  height: 100%;
  padding: 20px 0;
}
</style>
