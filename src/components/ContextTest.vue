<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            sm="2"
        >
          <v-sheet
              rounded="lg"
              min-height="268"
          >
            <!--  -->
          </v-sheet>
        </v-col>

        <v-col
            cols="12"
            sm="8"

        >
          <v-sheet
              min-height="70vh"
              rounded="lg"
          >
              <v-tabs>
                <v-tab>我是测试号</v-tab>
                <v-tab>你好</v-tab>
              </v-tabs>


            <CardList></CardList>
            <!--  -->
          </v-sheet>
        </v-col>

        <v-col
            cols="12"
            sm="2"
        >
          <v-sheet
              rounded="lg"
              min-height="268"
          >
            <!--  -->
          </v-sheet>
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