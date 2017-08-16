<template>
    <div>
      <mt-header title="天力商城">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
    </div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
        }
      }
    }
</script>

<style>
  .mint-header.is-fixed {
    z-index: 10;
  }
</style>
