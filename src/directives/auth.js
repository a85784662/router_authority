/*
*2019年7月1日
*根据获取的权限控制某一个按钮或者一段html是否显示的指令
*注册一个全局的指令
*弊端就是执行一次后，如果权限从没有权限再次动态的改为有权限了也不会显示HTML，因为已经删除了
*/

import {check} from '../utils/auth'

function install(Vue,options = {}){
	Vue.directive(options.name || "auth",{
		inserted(el,binding){
			if(!check(binding.value)){
				el.parentNode && el.parentNode.removeChild(el);
			}
		}
	})
}

export default { install };




