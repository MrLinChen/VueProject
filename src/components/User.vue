<template>
  <div>
    aaaaaaaaaaaaaaaaaaaaa
    用户信息{{id}}
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      id: null
    }
  },
  created () {
    // this.id = this.$router.params.userId
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>
