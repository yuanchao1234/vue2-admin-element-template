<template>
  <div class="home">
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
    <p>home</p>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$http.get('data.json' ,{ }, true )
    // this.isLoading = true;
    // console.log(this);
    // this.$isServer = true
    // this.$message('这是一条消息提示');

    // let loading = this.$loading();
    // setTimeout(()=>{
    //   loading.close();
    // },5000)

    // this.$alert('这是一段内容', '标题名称', {
    //   confirmButtonText: '确定',
    //   callback: (action) => {
    //     console.log(action);
    //   }
    // });

    // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //   confirmButtonText: '确定',
    //   cancelButtonText: '取消',
    //   type: 'warning'
    // }).then(() => {
    // }).catch(() => {
    // });

    // this.$notify({
    //   title: '标题名称',
    //   message: this.$createElement('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
    // });
  }
}
</script>
<style lang="scss" scoped>

</style>
