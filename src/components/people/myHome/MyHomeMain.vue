<template>
<v-main class="grey lighten-3">
  <v-container>
    <v-row justify="center">
      <v-col cols="8" sm="8">
        <v-sheet rounded="lg" min-height="20vh">我的id是{{id}}</v-sheet>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
export default {
name: "MyHomeMain",
  props:['id']
}
</script>

<style scoped>

</style>