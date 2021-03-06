import VueRouter from "vue-router";
import Context from "@/components/Context";
import ContextTest from "@/components/ContextTest";
import Question from "@/components/question/Question";
import MyHomeMain from "@/components/people/myHome/MyHomeMain";
const  router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/home',
            component:Context
        },
        {
            path:'/pss',
            component:ContextTest
        },

        {
            path:'/question',
            component:Question,
            props($route){
                return{
                    id:$route.query.id
                }
            }
        },
        {
            path:'/people',
            component:MyHomeMain,
            props($route){
                return{
                    id:$route.query.id
                }
            }
        },
        {
            path:'*',
            redirect:'/home'
        },
    ]
})

export default router