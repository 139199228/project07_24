<template>
  <div id="app">
    <transition name="from" appear mode="out-in">
    <router-view></router-view>
    </transition>
  </div>

</template>

<script>

export default {
  name: 'app',

}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .from-enter-active,.from-leave-active{
    transition: all .5s;
  }
  .from-enter,.from-leave-to{
    opacity: 0;
  }
</style>

