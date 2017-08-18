<template>
    <div id="footer_guide">
      <section class="guide_item" @click="gotoAdress('/')">
          <i><img src="../assets/logo.png" alt=""></i>
          <span>捡漏</span>
      </section>
      <section class="guide_item" @click="gotoAdress('/collect')">
        <i><img src="../assets/logo.png" alt=""></i>
        <span>征集</span>
      </section>
      <section class="guide_item" @click="gotoAdress('/my')">
        <i><img src="../assets/logo.png" alt=""></i>
        <span>我</span>
      </section>
    </div>
</template>

<script>
    export default {
      name: 'footer_guide',
      methods: {
        gotoAdress (path) {
          this.$router.push(path)
        }
      }
    }
</script>

<style>
  #footer_guide {
    position: fixed;
    left:0;
    right:0;
    z-index:10;
    bottom:0;
    background-color: #f5f5f5;
    display: flex;
  }
.guide_item {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.guide_item img {
  height: 0.5rem;
}
  .guide_item span  {
    font-size: 0.5rem;
  }
</style>
