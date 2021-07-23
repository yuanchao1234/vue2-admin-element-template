<template>
  <main class="main">
    <el-card>
      <router-view></router-view>
    </el-card>
  </main>
</template>
<script>
export default {
  name: "Main"
}
</script>
<style lang="scss" scoped>
.main{
  padding: 10px;
}
</style>