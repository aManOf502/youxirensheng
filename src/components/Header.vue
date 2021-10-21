<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-tabs
        class="ml-n9 margin-left"
        color="grey darken-1"
        centered
    >
      <v-tab
          v-for="link in links"
          :key="link"
      >
        {{ link }}
      </v-tab>

    </v-tabs>

    <v-input>message</v-input>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
            color="orange"
            size="62"
            v-bind="attrs"
            v-on="on"
        >
          <span class="white--text text-h5">62</span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
export default {
name: "Header",
  data: () => ({
    links: [
      '首页',
      '技术论坛',
      '知识点',
      'Updates',
    ],
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>

<style scoped>
 .headerTags{
   margin-left: 500px;
 }
</style>