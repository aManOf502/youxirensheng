<template>
  <v-app id="inspire">
    <Header></Header>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: { Header},
  data: () => ({
    links: [
      '首页',
      '技术论坛',
      '知识点',
      'Updates',
    ],
  }),
}
</script>
<style>
</style>