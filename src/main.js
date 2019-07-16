// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'
/*import 'ant-design-vue/dist/antd.css'*/
import Auth from './directives/auth'
import Authorized from './components/Authorized'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Antd);

//全局注册权限指令（指令方式）
Vue.use(Auth);
//全局注册权限组件（组件方式）
Vue.component('Authorized',Authorized);

const store = new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		incremen(state,n){
			state.count += n
		}
	},
	actions:{
		/*incremen({state}){
			setTimeout(()=>{
				state.count++
			},2000)
			
		}*/

		incremen({commit}) {	
			setTimeout(()=>{
				commit('incremen',2)
			}, 3000)
		}




	},
	getters:{
		doubleCount(state){
			return state.count * 2
		}
	}

})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
