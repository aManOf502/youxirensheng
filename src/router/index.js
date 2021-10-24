import VueRouter from "vue-router";
import Context from "@/components/Context";
import ContextTest from "@/components/ContextTest";
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
        }
    ]
})

export default router