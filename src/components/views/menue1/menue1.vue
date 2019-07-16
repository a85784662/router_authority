<template>
  <div>
  	菜单一！！！！！！！！
  	<button v-auth="['user','admin']" @click="$router.push({path:'/menu1/form'})">click</button>
  	<router-view/>
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped>

</style>