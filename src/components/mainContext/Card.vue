<template>
    <v-card
        outlined
        height="173px"
        tile

    >
      <div class="card">
        <h2 class="pointer ContentItem-title" ref="CardTitle" @click="goTOQUest(item.id)">{{item.auther}}
        </h2>
        <div class="RichContent-inner">
          <span class="ContextT">
            {{item.auther}}:{{item.context}}
          </span>
        </div>
      </div>
    </v-card>

</template>

<script type="javascript">
export default {
name: "Card",
  props:["item"],
  methods:{
  goTOQUest(id){
    const tod = this.$router.resolve({
          path:'/question',
          name:'question',
          query:{
            id:id
          }
    }
    )
    window.open(tod.href,'_blank')
  }
  }
}
</script>

<style scoped>
 .pointer{
   cursor: pointer;
 }
 .card{
   margin-top: 20px;
   margin-bottom: 20px;
   margin-right: 20px;
   margin-left: 20px;
 }
 .ContentItem-title{
   font-size: 18px;
   font-weight: 600;
   line-height: 28.8px;
   text-decoration: none solid rgb(23,81,153);
   word-spacing: 0px;
 }
 .RichContent-inner{
   margin-top: 9px;
   margin-bottom: -4px;
   overflow: hidden;
 }
 .ContextT{
   font-size: 15px;
   line-height: 25.05px;
   text-decoration: none solid rgb(100,100,100);
   word-spacing: 0px;
   height: 50px;
   width: 100%;
   margin: 9px 0 -4px 0;
   max-height: 100px;
   overflow: hidden;
   cursor: pointer;
 }
</style>