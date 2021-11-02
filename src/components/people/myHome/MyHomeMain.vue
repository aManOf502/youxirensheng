<template>
<v-main class="grey lighten-3">
  <v-container>
    <v-row justify="center">
      <v-col cols="8" sm="8">
        <v-sheet rounded="lg" min-height="20vh">
            <v-list-item two-line>
              <v-list-item-avatar tile size="125" color="orange">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  Name
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-sheet>
      </v-col>

    </v-row>
    <v-row justify="center">
      <v-col cols="8" sm="5">
        <v-sheet min-height="500vh">
          <v-tabs color="grey darken-1"  cols="6">
            <v-tab>
              动态
            </v-tab>
            <v-tab>
              回答
            </v-tab>
            <v-tab>
              提问
            </v-tab>
            <v-tab>
              收藏
            </v-tab>
            <v-tab>
              关注
            </v-tab>
          </v-tabs>
        </v-sheet>
      </v-col>
      <v-col cols="8" sm="3">
        <v-sheet class="grey lighten-3 pa-1">
          <v-card min-height="25vh" >
            个人中心
          </v-card>
        </v-sheet >
        <v-sheet class="grey lighten-3 pa-1">
          <v-card min-height="30vh">
            个人成就
          </v-card>
        </v-sheet>
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