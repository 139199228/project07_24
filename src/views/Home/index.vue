<template>

    <div class="main">
        <a class="wenjuan" @click="clickLoad()">问卷</a>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        name:'Home',
        methods:{
        clickLoad(){
                this.$router.push('/first/0')
            }
      }
    }
</script>

<style scope>

  .main{
    width: 100%;
    height: 100%;
    background: url(../../images/1.png)no-repeat;
    background-size: 100% 100%;
  }
  .wenjuan{
    display: inline-block;
    background: red;
    width: 110px;
    height: 35px;
    position: absolute;
    bottom: 19%;
    left: 33%;
    opacity: 0;
    z-index: 9999;
  }
</style>
