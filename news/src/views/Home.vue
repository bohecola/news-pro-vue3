<template>
  <div
    class="container"
  >
    <nav-bar
      @setCurrentType="setCurrentType"
    />
    <news-list
      :newsData="newsList"
      :top="82"
    />
  </div>
</template>

<script lang="ts">
  import { ComputedRef, defineComponent } from "vue";
  import { Store, useStore } from "vuex";
  import { useNavType, useNewsList } from "../compositions";
  import NavBar from '../components/NavBar/index.vue';
  import NewsList from '../components/NewsList/index.vue';
  import { INewsInfo, NAV_TYPES } from "../typings";

  export default defineComponent({
    name: 'Home',
    components: {
      NavBar,
      NewsList
    },
    setup () {
      const store: Store<any> = useStore();
      // 返回列表数据
      const newsList: ComputedRef<INewsInfo[]> = useNewsList(store);
      // 返回一个更改类型的方法 / function, 给navBar 点击用
      const setCurrentType: (type: NAV_TYPES) => void = useNavType(store);
      
      return {
        newsList,
        setCurrentType
      }
    }
  })
</script>
