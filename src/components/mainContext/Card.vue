<template>
    <v-card
        elevation="1"
        outlined
        tile
        height="173px"
        color="yellow"
    >
      <div class="card">
        {{item.id}}
        {{item.context}}
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
</style>