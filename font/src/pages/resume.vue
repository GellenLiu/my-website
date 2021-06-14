<template>
	<div class="page">
		<div class="resume">
			<img src="" alt="简历"/>
			<!-- <div class="title">个人简历</div>
		    <div class="subtitle">基本信息</div>
		    <div class="content-box">
				<span>姓名：</span>{{name}}
				<span>性别：</span>{{sex}}
				<div>年龄：21</div>
				<div>求职意向：前端开发</div>
				<div>民族：汉族</div>
				<div>邮箱：1042382110@qq.com</div>
				<div class="avator"><img src="../assets/avator.jpg"/></div>
			</div>
		    <div class="subtitle">教育背景</div>
	    	<div class="content-box">
				<div>2018.9-2022.7  合肥工业大学  本科</div>
				<div>主修课程：</div>
				<div>查看更多></div>
			</div>
		    <div class="subtitle">工作经历</div>
		    <div class="content-box"></div>
		    <div class="subtitle">项目经历</div>
		    <div class="content-box"></div>
		    <div class="subtitle">技能特长</div>
		    <div class="content-box"></div>
		    <div class="subtitle">自我评价</div> -->
		</div>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
			name: '刘国林',
			sex: '男'
		}
	}
}
</script>

<style scoped>
.page{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.resume{
  /* height: ; */
  height: 1000px;
  width: 700px;
  background-color: #FFFFFF;
  margin: 0 auto;
  overflow: hidden;
}

.resume img{
  height: 100%;
  width: 100%;
}

.title{
  text-align: left;
  font-size: 50px;
  color: #4e7282;
}

.subtitle{
  height: 30px;
  width: 200px;
  text-align: left;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #4e7282;
}

.content-box{
  height: 200px;
  width: 596px;
  border: #4e7282 2px solid;
}

.avator,.avator img{
  height: 150px;
  width: 100px;
}
</style>
