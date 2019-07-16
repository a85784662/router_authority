<script>
/*
*2019-07-01
*根据获取的权限控制某一个按钮或者一段html是否显示的组件
*相对比较灵活，如果权限从没有权限再次动态的改为有权限了会实时的显示出HTML
*/
import { check } from "../utils/auth";
export default {
  name: "Authorized",
  props:{
  	authority:{
  		type:Array,
  		required:true
  	}
  },
  functional:true,
  render(h,context){
  	const {props,scopedSlots} = context;
    console.log(scopedSlots.default())
  	return check(props.authority) ? scopedSlots.default():null
  }
};
</script>