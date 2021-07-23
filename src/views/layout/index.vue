<template>
  <div class="layout">
    <el-container class="container">
      <Aside />
      <el-container 
        class="content"
        v-loading="isLoading"
      >
        <Header />
        <Main />
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
import Aside from './Aside.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  computed:{
    ...mapState(['isLoading'])
  },
  components:{
    Aside,
    Header,
    Main,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.layout{
  .container{
    height: 100%;
    .content{
      flex-direction: column;
      position: relative;
    }
  }
}
</style>