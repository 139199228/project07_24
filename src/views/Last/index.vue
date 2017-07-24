<template>
    <div class="ganxie">
      <div class="container">
          <div>
            <p>{{data[$route.params.id].title}}</p>
          </div>
          <div class="text">
            <img src="../../images/ganxie1.png" alt="">

            <p class="title">{{data[$route.params.id].cont}}</p>
            <p>{{data[$route.params.id].text}}</p>
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name:'last',
        computed:{
            data(){
                return this.$store.state.dataList.dataganxie
            }
        }
    }
</script>
<style scope>
    .ganxie{
      padding-top: 20%;
      width: 100%;
      height: 100%;
      background: url(../../images/3.png)no-repeat;
      background-size: 100% 100%;
      color: #FE6A1F;
    }
    img{
      width: 100%;
    }
    .container{
      border-radius: 12px;
      padding: 10px 0;
      width: 80%;
      margin-left: 10%;
      background: #F7D8A1;
    }
    .container>div>p{
      padding: 0 10px;
      width: 100%;
      text-align: center;
    }
    .text{
      line-height:1.5;
    }
    .title{
     font-weight: 800;
    }

</style>
