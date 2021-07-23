<template>
  <el-aside class="aside">
    <div class="head">
        <span>vue3 admin template</span>
    </div>
    <div class="line" />
    <el-menu
      background-color="#222832"
      text-color="#fff"
      :router="true"
    >
      <el-submenu index="1">
        <template #title>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/"><i class="el-icon-data-line" />系统介绍</el-menu-item>
          <el-menu-item index="/about"><i class="el-icon-odometer" />Dashboard</el-menu-item>
          <el-menu-item index="/mine"><i class="el-icon-plus" />添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <span>首页配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/swiper"><i class="el-icon-picture" />轮播图配置</el-menu-item>
          <el-menu-item index="/hot"><i class="el-icon-star-on" />热销商品配置</el-menu-item>
          <el-menu-item index="/new"><i class="el-icon-sell" />新品上线配置</el-menu-item>
          <el-menu-item index="/recommend"><i class="el-icon-thumb" />为你推荐配置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <span>模块管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/category"><i class="el-icon-menu" />分类管理</el-menu-item>
          <el-menu-item index="/good"><i class="el-icon-s-goods" />商品管理</el-menu-item>
          <el-menu-item index="/guest"><i class="el-icon-user-solid" />会员管理</el-menu-item>
          <el-menu-item index="/order"><i class="el-icon-s-order" />订单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template #title>
          <span>页面管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/account"><i class="el-icon-lock" />修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template #title>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/account"><i class="el-icon-lock" />修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .aside{
    width: 200px!important;
    background-color: #222832;
    color: #ffffff;
    .head{
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .line{
      border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
    .el-menu {
      border-right: none;
      .el-submenu {
        border-top: 1px solid hsla(0, 0%, 100%, .05);
        border-bottom: 1px solid rgba(0, 0, 0, .2);
      }
    }
  }
</style>