<template>
    <div class="main" >

      <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
      <div class="container" v-show="show">
        <div>
          <p class="titleCk" v-if="data[$route.params.id].check">{{data[$route.params.id].title}}</p>
          <p v-else="data[$route.params.id].check">{{data[$route.params.id].title}}</p>
        </div>
        <div>
          <ul>
            <transition-group name="list">
            <li v-for="(i,index) in data[$route.params.id].option" :key="i">
              <label>
                <input type="checkbox" v-if="data[$route.params.id].check">
                <input type="radio" name="radio" v-else="data[$route.params.id].check">
              </label>
              <p class="checks" v-if="data[$route.params.id].check">{{i}}</p>
              <p v-else="data[$route.params.id].check">{{i}}</p>
            </li>
            </transition-group>
            <transition>
            <li v-if="$route.params.id==4">
              <p ><input type="text" class="text" placeholder="请输入金额"></p>
            </li>
            </transition>

          </ul>
        </div>
      </div>
      </transition>
      <button class="btn" @click="eventClick()">下一页</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
          return {
              page:0,
              show:true
          }
        },
       computed:{
          data(){
            return this.$store.state.dataList.dataList
          }

       },
      methods:{
        eventClick(){

          if(this.page>this.data.length-2){
              this.$router.push('/last/'+this.random())
            return
          }
          this.page++
//          console.log(this.show)
//          console.log(this.page)
//          for(var i=0;i<this.data.length;i++){
//            this.show=false
//
//            if(i==this.page){
//              this.show=true
//            }
//        }
          this.$router.push('/first/'+this.page)

        },
        random(){
            return Math.random()>0.5?0:1
        }
      }
    }
</script>

<style scope>
  .main{
    padding-top: 10%;
    width: 100%;
    height: 100%;
    background: url(../../images/bg.png)no-repeat;
    background-size: 100% 100%;
    color: #FE6A1F;
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
  }
  .text{
    border: 0;
    outline: none;
    background: #FCE8C4;

  }
  .titleCk{
    padding: 0 10px;
    font-size:13px;
    font-weight: 700;
    width: 100%;
  }
  .checks{
    padding: 0 10px;
    text-indent: 10px;
    margin: 5px 0;
    width: 100%;
    font-size:12px;
    line-height:1.5;
    display: flex;
    background: #FCE8C4;
  }
  ul{
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-flow: wrap;
  }
  ul>span{
    width: 100%;
  }
  li{
    width: 100%;
    display: block;
    transition:all 1s;
    padding: 0 10px;
    text-indent: 10px;
    margin: 5px 0;
    line-height:44px;
    display: flex;
    background: #FCE8C4;
    border-bottom: 1px solid orange;
  }
  .btn{
    z-index: 999;
    opacity: 0;
    position: absolute;
    bottom: 24%;
    left: 48%;
    width: 106px;
    height: 40px;
    margin-left: -50px;
  }
  .list-enter,.list-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .list-leave-active{
    position: absolute;
  }
</style>
