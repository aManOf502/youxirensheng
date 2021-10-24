<template>
    <v-card
        elevation="1"
        outlined
        tile
        height="173px"
        color="yellow"
    >
      <div class="card">
        <h1 class="pointer">{{item.id}}</h1>
        {{item.auther}}:{{item.context}}

      </div>
    </v-card>

</template>

<script>
export default {
name: "Card",
  props:["item"]
}
</script>

<style scoped>
 .card{
   margin: 10px;
 }
 .pointer{
   cursor: pointer;
 }
</style>