<template>
  <div id="app">
	  <div class="navigation-bar">
	  	<div class="tabbar" :class="{'active': tab==0}" @click="switchtab(0)">首页</div>
	  	<div class="tabbar" :class="{'active': tab==1}" @click="switchtab(1)">项目经历</div>
	  	<div class="tabbar" :class="{'active': tab==2}" @click="switchtab(2)">个人博客</div>
	  	<div class="tabbar" :class="{'active': tab==3}" @click="switchtab(3)">个人简历</div>
	  	<div class="tabbar" :class="{'active': tab==4}" @click="switchtab(4)">我的相册</div>
	  </div>
	  <div class="bar-position"></div>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
        tab: 0
	  }
  },
  methods:{
	  switchtab(tab){
		 this.tab = tab
		 if(tab==0){
			this.$router.push('/')
		 }
		 if(tab==1){
		 	this.$router.push('/project')
		 }
		 if(tab==2){
		 	this.$router.push('/blog')
		 }
		 if(tab==3){
		 	this.$router.push('/resume')
		 }
		 if(tab==4){
		 	this.$router.push('/photo')
		 }
	  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
  /* background-image: url(./assets/black.png); */
  /* overflow: hidden; */
}

*{
	margin: 0;
	padding: 0;
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  white-space: nowrap; 
}


.navigation-bar{
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, .6);
  z-index: 3;
}

.bar-position{
  height: 60px;
  width: 100%;
}

.tabbar{
  height: 50px;
  width: 200px;
  margin: 10px 0 0 0;
  font-size: 25px;
  text-decoration: blink;
  line-height: 50px;
  color: #FFFFFF;
}

.tabbar:hover{
  background-color: rgba(255, 179, 55, 0.5);
}

.active{
  color: rgb(255,179,55);
  border-bottom: 2px solid #ffaa00;
}

</style>
