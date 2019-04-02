<template>
  <div class="login">
    <div>用户信息</div>
    <button @click="changePage">登录</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    changePage () {
      this.$router.push({path: '/index'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    text-align: center;
    font-size: 16px;
  }
</style>
