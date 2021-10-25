<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-tabs
        class="ml-n9"
        color="grey darken-1"
        centered
        cols="6"
    >
      <v-tab
          v-for="link in links"
          :key="link.name"
          @click="howToGo(link.address)"
      >
        {{ link.name }}

      </v-tab>

    </v-tabs>

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
      {name: '首页', address: 'home'},
      {name: '论坛', address: 'pss'},

    ],
    items: [
      {title: '个人中心'},
      {title: '退出'},
    ],
  }),
  methods: {
    howToGo(address) {
      if (this.$router.currentRoute.path != '/' + address) {
        console.log(this.$router)
        this.$router.push({
          path: `/${address}`
        })
      }

    }
  }
}
</script>

<style scoped>
.headerTags {
  margin-left: 500px;
}
</style>