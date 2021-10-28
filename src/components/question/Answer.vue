<template>
<v-container>
  <v-card class="card" v-for="item in answ" :key="item.id">
    <v-card>
      <v-list-item two-line>
        <v-list-item-avatar tile size="56" color="orange">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{item.auther}}
          </v-list-item-title>
          <div>
            {{item.readme}}
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card min-height="400px">
      <div>
        {{item.answer}}
      </div>
    </v-card>

    <v-card>
      <v-row>
          <v-btn>{{item.agree}}</v-btn>

          <v-btn>{{item.aginst}}</v-btn>
        <v-icon
            large
            color="blue darken-2"
        >
          {{item.comme.length}}
        </v-icon>
      </v-row>

    </v-card>

  </v-card>
</v-container>
</template>

<script>
export default {
name: "Answer",
  data(){
  return{
    answ:[
      {
        id:1,
        auther:'Hello Tree',
        readme:'My name is Hello Tree',
        answer:'Microsoft Translator 将使用你的提交信息来提高翻译质量. 非常感谢! 其他表达方式. 如何使用. 示例是自动生成的。. 结果可能不准确，也可能包含错误。. 广泛使用的短语. 选择时，新内容将添加到焦点当前区域上方. 广泛使用的短语.',
        agree:50,
        aginst:50,
        comme:[{id:1,com:'Test'}],
      },
      {
        id:2,
        auther:'Hello Tree',
        readme:'My name is Hello Tree',
        answer:'Microsoft Translator 将使用你的提交信息来提高翻译质量. 非常感谢! 其他表达方式. 如何使用. 示例是自动生成的。. 结果可能不准确，也可能包含错误。. 广泛使用的短语. 选择时，新内容将添加到焦点当前区域上方. 广泛使用的短语.',
        agree:50,
        aginst:50,
        comme:[{id:1,com:'Test'}],
      },
      {
        id:3,
        auther:'Hello Tree',
        readme:'My name is Hello Tree',
        answer:'Microsoft Translator 将使用你的提交信息来提高翻译质量. 非常感谢! 其他表达方式. 如何使用. 示例是自动生成的。. 结果可能不准确，也可能包含错误。. 广泛使用的短语. 选择时，新内容将添加到焦点当前区域上方. 广泛使用的短语.',
        agree:50,
        aginst:50,
        comme:[{id:1,com:'Test'}],
      },
      {
        id:4,
        auther:'Hello Tree',
        readme:'My name is Hello Tree',
        answer:'Microsoft Translator 将使用你的提交信息来提高翻译质量. 非常感谢! 其他表达方式. 如何使用. 示例是自动生成的。. 结果可能不准确，也可能包含错误。. 广泛使用的短语. 选择时，新内容将添加到焦点当前区域上方. 广泛使用的短语.',
        agree:50,
        aginst:50,
        comme:[{id:1,com:'Test'}],
      },
    ]
  }
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 20px;
}
</style>