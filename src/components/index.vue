<template>
  <div>
  	<div class="sidemenu">
  		<p @click="$router.push({path:'/menu1'})">菜单一</p>
  		<p @click="$router.push({path:'/menu2'})">菜单二</p>
      <!-- 权限控制组件 Authorized-->
      <Authorized :authority="['admin','user']">
        <p @click="$router.push({path:'/menu3'})">菜单三</p>
      </Authorized>
  	</div>
  	<div class="content"><router-view/></div>
  </div>
</template>
<script>


export default {
  name:'index',
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.sidemenu{
	width:300px;
	height: 700px;
	background-color: #d8d8d8;
	float: left;
}
.content{
	width: 900px;
	min-height: 700px;
	float: left;
}
.sidemenu p{
	height: 30px;
	line-height: 30px;
	cursor: pointer;
}

</style>