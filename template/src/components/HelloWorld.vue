<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'a micro-app template'
    }
  },
  mounted () {
    // 单独运行时进行模拟登陆获取工号信息
    if (!window.__POWERED_BY_QIANKUN__) {
       console.log('micro-app standalone running');
    }
  },
};
</script>

<style scoped>

</style>
