<template>
    <v-card
        outlined
        height="173px"
        tile
    >
      <div>
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
</style>