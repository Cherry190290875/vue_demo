<template>
    <div id="my">
      <div class="information border">
        <div class="information-left">
          <div class="imgs"></div>
        </div>
        <div class="information-middle">
          <p>苏****</p>
          <p>KJ456812458</p>
        </div>
        <div class="information-right">
          <div class="grade" v-model="msg">
            {{msg}} 我的等级 >
          </div>
        </div>
      </div>
      <div class="red line ">
        <p>0.00</p>
        <p>累计赚的红包（元）</p>
      </div>
      <div class="money border border-top">
        <div class="left" >
          <p>100</p>
          <p>账户余额(元)</p>
        </div>
        <div class="right">
          <p>1000</p>
          <p>竞拍额度(元)</p>
        </div>
      </div>

      <mt-cell title="我的拍卖" icon="more" class="mint-cell-allow-right border border-top line"   is-link :to="{ name: 'Auction' }">
        <img slot="icon" src="../assets/1.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="我的征集"  class="mint-cell-allow-right border"  ></mt-cell>
      <mt-cell title="我的委托"  class="mint-cell-allow-right border"  ></mt-cell>
      <mt-cell title="拍卖法则"  class="mint-cell-allow-right border"  ></mt-cell>
      <mt-cell title="联系客服"  class="mint-cell-allow-right border"  ></mt-cell>
      <mt-cell title="优惠券"  class="mint-cell-allow-right border line border-top"  ></mt-cell>
      <mt-cell title="设置"  class="mint-cell-allow-right border line border-top"  ></mt-cell>
    </div>
</template>

<script>
    export default {
      name: 'my',
      data () {
        return {
            msg: 'v'
        }
      },
      method: {
        click () {
          this.$router.push('/my/auction')
        }
      }
    }
</script>

<style>
  #my {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .information {
    display: flex;
    height:5em;
    position: relative;
  }
  .information-left {
    display: flex;
    flex:1;
  }
  .information-middle {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 0.5em;
  }
  .information-right {
    display: flex;
    flex: 1;
  }
  .imgs {
    width: 60%;
    height: 4em;
    margin: auto;
    background-color: red;
  }
  .grade {
    position: absolute;
    right:0;
    top: 1em;
    border:0.01em solid #DDD;
    height: 2em;
    line-height: 2em;
    padding:0.2em 2em;
    margin:auto;
  }
  .mint-cell-wrapper {
    text-align: left;
  }
  .line {
    margin-top: 2em;
  }
  .border {
    border-bottom: 0.01em solid #ddd;
  }
  .border-top {
    border-top:0.01em solid #ddd;
  }
  .money {
    display: flex;
  }
  .left {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 0.5em;
  }
  .right{
    display: flex;
    flex:1;
    flex-direction: column;
    line-height: 0.5em;
  }
  .red {
    display: flex;
    flex-direction: column;
    line-height: 0.5em;
    border-top: 0.01em solid #ddd;
  }

</style>
