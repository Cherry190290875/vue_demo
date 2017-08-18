<template>
    <div id="header_top">
      <mt-header title="天力商城">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
      <!--<section class="header_left" v-if="goBack()" @click="$router.go(-1)">
        <img src="../assets/3.png" alt="">
      </section>
      <section class="header_middle" v-if="headTitle">
        <span class="title_text">{{headTitle}}</span>
      </section>-->
    </div>

</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'header_top',
    data () {
      return {
      }
    },
    /*props: ['headTitle', 'goBack'],
    methods: {
      ...mapActions([''])
    }*/
  }
</script>

<style>
  #header_top {
    position: fixed;
    top:0;
    left: 0;
    right:0;
    z-index:10;
    background-color: dodgerblue;
  }
  .mint-header.is-fixed {
    z-index: 10;
  }
</style>
