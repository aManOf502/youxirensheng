<template>
<div>
  <v-list
      v-for="item in news"
      :key="item.id"
      dense

      >
    <Card v-if="item.isAD" :item="item"></Card>
    <card-copr v-else :item="item" ></card-copr>

  </v-list>
</div>



</template>

<script>
import Card from "@/components/mainContext/Card";
import CardCopr from "@/components/mainContext/CardCopr";
export default {
name: "CardList",
  components: {Card,CardCopr},
  data: () => ({
    news:[
      {id:1,title:'出大事儿了',auther:'git revert -n sha-1（某次提交的sha-1值），这样囧很空洞港口该桑就跟桑吉干和看森海精华',isAD:true,context:'在使用小乌龟进ha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:2,title:'出大事儿了',auther:'王五',isAD:false,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:3,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:4,title:'出大事儿了',auther:'王五',isAD:false,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:5,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:6,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:7,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:8,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
      {id:9,title:'出大事儿了',auther:'王五',isAD:true,context:'在使用小乌龟进行回滚时，我们发现通常是用git revert -n sha-1（某次提交的sha-1值），这样就不会自动生成一次提交了；对于revert会导致冲突的文件及其有效'},
    ]
}),
}
</script>

<style scoped>

</style>