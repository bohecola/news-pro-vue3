<template>
  <div id="container">
    <my-header />
    <router-link to="/">首页</router-link>
    <router-link to="detail">详情页</router-link>
    <router-link to="mynews">收藏页</router-link>
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
  import MyHeader from './components/Header/index.vue';
  export default {
    name: 'App',
    components: {
      MyHeader
    }
  }
</script>
