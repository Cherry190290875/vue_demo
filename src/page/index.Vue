<template>
    <div id="index">
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
      <p>10:20:25</p>
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
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
              texts:[
                  {
                    Num:'111111',
                    Name:'荧光之王PMG评级66分',
                    Price:'500',
                    starPri:'100'
                  },
                  {
                    Num:'2222',
                    Name:'荧光之王PMG评级66分',
                    Price:'500',
                    starPri:'100'
                  },
                  {
                    Num:'333333',
                    Name:'荧光之王PMG评级66分',
                    Price:'500',
                    starPri:'100'
                  }
                ]

            }
        }
    }
</script>

<style>
#index {
  margin-top: 40px;
  margin-bottom: 40px;
}
  .item-left {
    display: flex;
    flex: 1;
    background: red;
  }
  .img {
    width: 90%;
    height:8em;
    margin: auto;
    background: pink;
  }
  .item-right {
    display: flex;
    background: yellow;
    height: 10em;
    flex: 3;
    flex-flow: column;
    padding-left: 2%;
  }
  .item {
    display: flex;
    height: 10em;
    text-align: left;
    margin-top: 1%;
  }
  .p_text {
    line-height: 0.1em;
  }
  .mint-searchbar-inner {
    border-radius: 28px;
  }
.mint-search {
  height:auto;
}
  .bg_item {
    height: 15em;
    width: 100%;
    background-color: antiquewhite;
  }
.mint-searchbar {
  margin: auto;
  margin-top: 10em;
  width: 80%;
}
.time_item {
  display: flex;
  margin: auto 10em ;
}
  .time {
    flex: 2;
    border:1px solid #666;
    color:#666;
    background: #fafafa;
    padding: 1em 1em;
    border-radius: 2em;
  }
  .active {
    background: red;
    color:#fff;
    border:none;
  }
  .fgx {
    flex: 1;
    line-height: 3em;
  }
  .ccc {
    background-color: #fff;
    border:none;
  }
</style>
