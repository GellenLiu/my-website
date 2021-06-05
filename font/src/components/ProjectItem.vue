<template>
	<div class="project-item">
		<div class="name">项目名称：{{name}}</div>
		<div class="label">标签：{{label}}</div>
		<div class="company">公司：{{company}}</div>
		<div class="role">担任角色：{{role}}</div>
		<div class="introduction">项目简介：{{introduction}}</div>
		<div class="time">{{time}}</div>
	</div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    name: String,
	label: String,
	company: String,
	role: String,
	introduction: String,
	time: String
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
  width: 400px;
  margin: 0 0 0 30px;
}

.time{
  height: 30px;
  width: 160px;
  position: absolute;
  right: -10px;
  top: 20px;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 30px;
  color: #000000;
  text-align: center;
  transform: skew(-30deg,0);
  background-color: #ffaa00;
}
</style>
