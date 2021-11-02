<template>
  <v-main class="grey lighten-3" >
    <v-container>
      <v-row justify="center">
        <v-col cols="8" sm="8">
          <v-sheet rounded="lg" min-height="15vh">
              <h1>我是各种页签</h1>
              <h1>我是问题</h1>
              <h4>我是问题描述</h4>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8"  sm="8">
          <v-sheet>
            <v-list-item>
              <v-btn>
                关注问题
              </v-btn>
              <v-btn>
                写回答
              </v-btn>
            </v-list-item>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" sm="6">
          <v-sheet rounded="lg">
            <Answer></Answer>
          </v-sheet>
        </v-col>
        <v-col cols="8" sm="2">
          <v-sheet rounded="lg">
            <h1>我是广告</h1>
            <h1>222</h1>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>

  </v-main>
</template>

<script>
import Answer from "@/components/question/Answer";
export default {
name: "Question",
  components: {Answer},
  props:['id']
}
</script>

<style scoped>
.bg{
  background-color: #ffffff;
}
</style>