<template>
  <div class="login">
    <!--<div>用户信息</div>
    <button @click="changePage">登录</button>-->
    <div style="margin: 20px 10px 0 10px;">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="message">
      </el-input>
      <el-button style="margin-top: 10px;" @click="handleSendMessage">发送</el-button>
    </div>

    <div style="text-align: left; padding-left: 10px;padding-right: 10px">
      <p>聊天内容:</p>
      <div id="content">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: '',
      websocket: ''
    }
  },
  created () {
    this.initWebSocket()
  },
  methods: {
    initWebSocket () {
      this.websocket = new WebSocket('ws://192.168.3.52:8900/ws')
      this.websocket.onopen = this.handleOpen
      this.websocket.onmessage = this.handleMessage
      this.websocket.onerror = this.handleError
      this.websocket.onclose = this.handleClose
    },
    handleOpen () {
      console.log('与服务器连接成功....')
    },
    handleMessage (e) {
      console.log(e)
      const content = document.getElementById('content')
      content.innerHTML = content.innerHTML + '<p style="text-align: left">' + e.data + '</p>'
    },
    handleError () {
      console.log('连接错误')
    },
    handleClose () {
      console.log('连接关闭')
    },
    handleSendMessage () {
      const content = document.getElementById('content')
      content.innerHTML = content.innerHTML + '<p style="text-align: right">' + this.message + ':[我]</p>'
      this.websocket.send(this.message)
    },
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
