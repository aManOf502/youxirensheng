<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="9" sm="2"></v-col>

        <v-col cols="9" sm="6">
          <v-sheet min-height="70vh" rounded="lg">
            <v-tabs>
              <v-tab>推荐</v-tab>
              <v-tab>热榜</v-tab>
            </v-tabs>
            <CardList></CardList>
          </v-sheet>
        </v-col>
        <v-col cols="9" sm="2">
          <v-sheet rounded="lg" min-height="268"></v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CardList from "@/components/mainContext/CardList";

export default {
  name: "Context",
  components: {CardList},
}
</script>

<style scoped>

</style>