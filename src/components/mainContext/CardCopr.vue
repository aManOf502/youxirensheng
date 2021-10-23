<template>
    <v-card
        elevation="10"
        outlined
        tile
        height="173px"
        color="green"
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
  props:['item']
}
</script>

<style scoped>
 .card{
   margin: 10px;
 }
</style>