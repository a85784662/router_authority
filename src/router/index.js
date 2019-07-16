import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import RenderRouter from '@/components/RenderRouter'
import {check,isLogin} from '@/utils/auth'
/*import findLast from "lodash/findLast";*/
import _ from "lodash"


Vue.use(Router)

const router =  new Router({
  routes: [
  	{
  		path:'/user',
  		component:RenderRouter,
  		children:[
  			{
  				path:'/user',
  				redirect:'/user/login'
  			},
  			{
  				path:'/user/login',
  				component:() => import('@/components/views/user/login')
  			},
			{
				path:'/user/register',
  				component:() => import('@/components/views/user/register')
			}
  		]
  	},
  	{
  		path:'/',
  		component:index,
  		meta:{authority:["user","admin"]},
  		children:[
  			{
  				path:'/menu1',
  				meta:{authority:["admin"]},
  				component:() => import('@/components/views/menue1/menue1'),
  				children:[{
  					path:'/menu1/form',
            meta:{authority:["user"]},
  					component:() => import('@/components/views/menue4/menue4'),
  				}]
  			},
  			{
  				path:'/menu2',
  				component:() => import('@/components/views/menue2/menue2')
  			},
  			{
  				path:'/menu3',
  				component:() => import('@/components/views/menue3/menue3')
  			},
  		]
  	},
  	{
  		path:'*',
  		component: () => import('@/components/error')
  	}
  ]
});

//对全局进行路由的权限控制

/*next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 
之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。*/

router.beforeEach((to,from,next) => {
	console.log(to.matched);
  const record = _.findLast(to.matched, record => record.meta.authority);
  if(record && !check(record.meta.authority)){
      if(!isLogin() && to.path !== '/user/login'){
          next({
            path:'/user/login'
          })
      }else if(to.path !== '/err'){
        alert('你没有权限访问')
        next(false)
      }
  }else{
    next()
  }
	//next()
})


export default router;














