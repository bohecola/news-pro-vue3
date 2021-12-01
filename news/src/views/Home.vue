<template>
  <div class="container">
    首页
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Store, useStore } from "vuex";
  import { useNewsList } from "../compositions";

  export default defineComponent({
    name: 'Home',
    setup () {
      const store: Store<any> = useStore();
      const newsList = useNewsList(store);
      
      return {
        newsList
      }
    }
  })
</script>
