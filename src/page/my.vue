<template>
    <div id="my">
      <common-header></common-header>
      <div class="information border">
        <div class="information-left">
          <div class="imgs"></div>
        </div>
        <div class="information-middle">
          <p>苏****</p>
          <p>KJ456812458</p>
        </div>
        <div class="information-right">
          <div class="grade">
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
      <section class="cell margin-20" @click="gotoAdress('/auction')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>我的拍卖</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell" @click="gotoAdress('/my_collect')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>我的征集</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell " @click="gotoAdress('/entrust')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>我的委托</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell " @click="gotoAdress('/auction')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>拍卖法则</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell border" @click="gotoAdress('/auction')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>联系客服</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell border margin-20" @click="gotoAdress('/auction')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>优惠券</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <section class="cell border margin-20" @click="gotoAdress('/auction')">
        <div class="cell_left">
          <img src="../assets/1.png" alt=""><span>设置</span>
        </div>
        <div class="cell_right">
          <img src="../assets/2.png" alt="">
        </div>
      </section>
      <common-footer></common-footer>
    </div>
</template>

<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'my',
    data () {
      return {
        msg: 'v'
      }
    },
    methods: {
      gotoAdress (path) {
        this.$router.push(path)
      }
    },
    components: {
      commonHeader,
      commonFooter
    }
  }
</script>

<style>
  #my {
    margin-top: 40px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
  .information {
    display: flex;
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
    font-size: 0.5rem;
    line-height: 0.1rem;
  }
  .information-right {
    display: flex;
    flex: 1;
  }
  .imgs {
    width: 60%;
    height: 2rem;
    margin: auto;
    background-color: red;
  }
  .grade {
    position: absolute;
    right: -0.11rem;
    top: 25%;
    border: 0.01em solid #DDD;
    height: 1rem;
    padding: 0.1rem 0.3rem;
    margin: auto;
    font-size: 0.5rem;
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
    font-size: 0.5rem;
    line-height: 0.01rem;
  }
  .left {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 0.5rem;
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
    line-height: 0.1rem;
    font-size: 0.5rem;
    border-top: 0.01em solid #ddd;
  }

  .cell {
    border-top:0.01rem solid #DDD;
    display: flex;
    font-size: 0.5rem;
    padding-top:2%;
    padding-bottom: 2%;
    position: relative;
    line-height: 1.5rem;
  }
  .cell_left img {
    width: 10%;
    height: 100%;
    margin-right: 1%;
    padding-left: 3%;
  }
  .cell_left {
    display: flex;
    flex:3;
  }
  .cell_right {
    display: flex;
    flex: 1;
  }
  .cell_right img {
    width: 2%;
    height: 30%;
    position: absolute;
    right:5%;
    top:30%;
  }
  .margin-20 {
    margin-top: 10%;
  }
</style>
