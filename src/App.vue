<template>
  <v-app id="inspire">
<!--    <v-app-bar-->
<!--        app-->
<!--        color="white"-->
<!--        flat-->
<!--    >-->
<!--      <v-avatar-->
<!--          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"-->
<!--          size="32"-->
<!--      ></v-avatar>-->

<!--      <v-tabs-->
<!--          centered-->
<!--          class="ml-n9"-->
<!--          color="grey darken-1"-->
<!--      >-->
<!--        <v-tab-->
<!--            v-for="link in links"-->
<!--            :key="link"-->
<!--        >-->
<!--          {{ link }}-->
<!--        </v-tab>-->
<!--      </v-tabs>-->

<!--      <v-avatar-->
<!--          class="hidden-sm-and-down"-->
<!--          color="grey darken-1 shrink"-->
<!--          size="32"-->
<!--      ></v-avatar>-->
<!--    </v-app-bar>-->
    <Header></Header>
    <Context></Context>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Context from "@/components/Context";
export default {
  components: {Context, Header},
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