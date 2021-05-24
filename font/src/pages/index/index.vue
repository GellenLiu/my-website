<template>
	<div class="page">
		<div class="navigation-bar">
			<div class="tabbar active">首页</div>
			<div class="tabbar">教育经历</div>
			<div class="tabbar">项目经历</div>
			<div class="tabbar">个人博客</div>
			<div class="tabbar">愿景</div>
		</div>
		<div class="title">Hello , I AM Gellen Liu</div>
		<div class="sub-title">welcome to my world</div>
		<div class="link" @click="more">learn more</div>
	</div>
</template>

<script>
</script>

<style scoped>
.page{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../../assets/bg1.jpg);
  overflow: hidden;
}

.navigation-bar{
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  margin: 0 auto;
}

.tabbar{
  height: 50px;
  width: 200px;
  margin: 10px 0 0 0;
  border-radius: 10px;
  font-size: 25px;
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

.title{
  height: 100px;
  margin: 300px 0 0 100px;
  font-family: "arial rounded mt bold";
  font-size: 50px;
  color: white;
  text-align: left;
}

.sub-title{
  height: 50px;
  margin: 10px 0 0 100px;
  font-size: 25px;
  opacity: 0.5;
  text-align: left;
  color: white;
}

.link{
  height: 60px;
  margin: 10px 0 0 100px;
  font-size: 30px;
  color: #fff;
  text-align: left;
}
</style>
