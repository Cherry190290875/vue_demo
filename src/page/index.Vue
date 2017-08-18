<template>
  <div id="index">
    <common-header go-back="true" :head-title="indextitle"></common-header>
    <div class="bg_item">
      <mt-search :value.sync="value">
        <mt-cell v-for="item in result" :title="item"></mt-cell>
      </mt-search>
    </div>

    <h3>闪电拍</h3>
    <div class="time_item">
      <p class="time active">12:00</p>
      <p class="fgx">——</p>
      <p class="time">14:00</p>
      <p class="fgx">——</p>
      <p class="time">16:00</p>
      <p class="fgx">——</p>
      <p class="time">18:00</p>
      <p class="fgx">——</p>
      <p class="time">20:00</p>
    </div>
    <div class="time_item">
      <p class="time ccc ">竞拍中</p>
      <p class="fgx"></p>
      <p class="time ccc">即将开始</p>
      <p class="fgx "></p>
      <p class="time ccc">即将开始</p>
      <p class="fgx"></p>
      <p class="time ccc">即将开始</p>
      <p class="fgx"></p>
      <p class="time ccc">即将开始</p>
    </div>
    <h4>距离本场结束</h4>
    <p class="title_time">10:20:25</p>
    <div class="item" v-for="text in texts">
      <div class="item-left">
        <div class="img"></div>
      </div>
      <div class="item-right">
        <p class="p_text">藏品编号：{{text.Num}}</p>
        <p class="p_text">藏品名称：{{text.Name}}</p>
        <p class="p_text">当前价:{{text.Price}}</p>
        <p class="p_text">起拍价：{{text.starPri}}</p>
      </div>
    </div>
    <!--<div ref="wrapper" :style="{height:wrapperHeight+'px'}" class="wrapper">
      <mt-loadmore :bottom-method = "loadBottom" @bottom-status-change = "handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="list in lists">{{list}}</li>
        </ul>
        <div slot="bottom" >
          <span v-show="bottomStatus !== 'loading'"  >↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>-->

    <common-footer></common-footer>
  </div>
</template>
<script>
  import commonHeader from '../components/header'
  import commonFooter from '../components/footer'
  export default {
    name: 'index',
    data () {
      return {
        indextitle: '天力商城',
        texts: [
          {
            Num: '111111',
            Name: '荧光之王PMG评级66分',
            Price: '500',
            starPri: '100'
          },
          {
            Num: '2222',
            Name: '荧光之王PMG评级66分',
            Price: '500',
            starPri: '100'
          },
          {
            Num: '333333',
            Name: '荧光之王PMG评级66分',
            Price: '500',
            starPri: '100'
          }
        ]
       /* list: [],
        bottomStatus: '',
        wrapperHeight: 0*/
      }
    },
    components: {
      commonHeader,
      commonFooter
    }
   /* methods: {
      handleBottomChage (status) {
        this.bottomStatus = status
      },
      loadBottom () {
        setTimeout(() => {
          let lastValue = this.lists[this.lists.length - 1]
          if (lastValue < 40) {
            for (let i = 0; i < 10; i++) {
              this.lists.push(lastValue + i)
            }
          } else {
            this.allLoaded = true
          }
          this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      }
    },
    created () {
      for (let i = 1; i <= 20; i++) {
        this.lists.push[i]
      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$ref.wrapper.getBoundingClientRect().top
    }*/
  }
</script>

<style>
  #index {
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;
  }
  .title_time {
    font-size: 0.6rem;
  }
  .item-left {
    display: flex;
    flex: 1;
    background: red;
  }
  .img {
    width: 90%;
    height:80%;
    margin: auto;
    background: pink;
  }
  h4 {
    font-size: 0.7rem;
  }
  h3 {
    font-size: 0.8rem;
  }
  .item-right {
    display: flex;
    background: yellow;
    height: 100%;
    flex: 3;
    flex-flow: column;
    padding-left: 2%;
  }
  .item {
    display: flex;
    height: 20%;
    text-align: left;
    margin-top: 1%;
  }
  .p_text {
    font-size: 0.5rem;
    line-height: 0.5rem;
  }
  .mint-searchbar-inner {
    border-radius: 28px;
  }
  .mint-search {
    height:auto;
  }
  .bg_item {
    height: 10rem;
    width: 100%;
    background-color: antiquewhite;
  }
  .mint-searchbar {
    margin: auto;
    margin-top: 6rem;
    width: 80%;
  }
  .time_item {
    display: flex;
    margin: auto 0.2rem ;
  }
  .time {
    flex: 2;
    border:1px solid #666;
    color:#666;
    background: #fafafa;
    border-radius: 1.5rem;
    line-height: 3rem;
    font-size: 0.7rem;
  }
  .active {
    background: red;
    color:#fff;
    border:none;
  }
  .fgx {
    flex: 1;
    line-height: 3rem;
    width: 0.8rem;
  }
  .ccc {
    background-color: #fff;
    border:none;
    font-size: 0.5rem;
  }
</style>
