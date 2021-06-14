<template>
	<div class="project-item">
		<div class="name">项目名称：{{name}}</div>
		<div class="label"><span>标签：</span>{{label}}</div>
		<div class="company"><span>公司：</span>{{company}}</div>
		<div class="role"><span>担任角色：</span>{{role}}</div>
		<div class="introduction"><span>项目简介：</span>{{introduction}}</div>
		<div class="time">{{time}}</div>
		<div class="learn-more" @click="more">查看更多></div>
	</div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    name: String,
	label: [],
	company: String,
	role: String,
	introduction: String,
	time: String
  },
  methods:{
	  more(){
		  console.log("more")
	  }
  }
}
</script>

<style scoped>
.project-item{
  position: relative;
  height: 200px;
  width: 600px;
  border-radius: 10px;
  background-color: #F4F5F5;
  overflow: hidden;
  text-align: left;
}

.name{
  height: 30px;
  width: 400px;
  margin: 20px 0 5px 30px;
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  overflow: hidden;
}

.label{
  height: 30px;
  width: 40px;
  margin: 0 0 0 30px;
  /* border: #FDE98F 1px solid; */
  /* border-radius: 5px; */
}

.company,.role,.introduction{
  height: 30px;
  width: 560px;
  margin: 0 0 0 30px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.company span,.role span,.introduction span,.label span{
  color: #797979;
  font-weight: bold;
}

.time{
  height: 30px;
  width: 180px;
  position: absolute;
  right: -10px;
  top: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 30px;
  color: #000000;
  text-align: center;
  transform: skew(-30deg,0);
  background-color: #ffaa00;
}

.learn-more{
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #0084c6;
}

	
.learn-more:hover{
  color: #0055ff;
  text-decoration: underline;
}
</style>
