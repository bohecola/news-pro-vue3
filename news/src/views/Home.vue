<template>
  <div
    class="container"
  >
    <nav-bar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Store, useStore } from "vuex";
  import { useNewsList } from "../compositions";
  import NavBar from '../components/NavBar/index.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      NavBar
    },
    setup () {
      const store: Store<any> = useStore();
      const newsList = useNewsList(store);
      
      return {
        newsList
      }
    }
  })
</script>
