<template>
	<div class="page">
		<!-- project页面 -->
		<div class="id-card" :class="fold? '':'id-card-fold'">
			<div class="avator"><img src="../assets/img/avator.jpg"/></div>
			<div class="name">刘国林</div>
			<div class="card-text">
				<img src="../assets/img/年龄.svg"/>
				21岁
			</div>
			<div class="card-text">
				<img src="../assets/img/岗位.svg"/>
				前端开发
			</div>
			<div class="card-text">
				<img src="../assets/img/圆电话.svg"/>
                19840175925 				
			</div>
			<div class="card-text">
				<img src="../assets/img/邮箱.svg"/>
				<span>1042382110@qq.com</span>
			</div>
			<!-- 侧边收起 -->
			<div class="fold" @click="folds"><img src="../assets/img/收起.svg"/></div>
		</div>
		<!-- 项目 -->
		<div class="project-list">
			<ProjectItme 
			v-for="(item,index) in projectList"
			:key="index"
			class="project-item"
			:name="item.name"
			:company="item.company"
			:role="item.role"
			:introduction="item.introduction"
			:time="item.time"
			></ProjectItme>
		</div>
		<!-- 底部 -->
	    <BaseFoot></BaseFoot>
	</div>
</template>

<script>
import ProjectItme from '../components/ProjectItem.vue'
import BaseFoot from '../components/BaseFoot.vue'
import projectList from '../assets/data/projectList.json'
export default{
	data(){
		return{
			fold: true,
			projectList: projectList
		}
	},
	components:{
		ProjectItme
	},
	methods:{
		folds(){
			this.fold = !this.fold;
		}
	}
}
</script>

<style scoped>
.page{
  background-color: #161616;
}

.id-card{
  position: fixed;
  left: 0;
  top: 100px;
  height: 320px;
  width: 250px;
  border-radius: 10px;
  background-color: #FFFFFF;
  transition: width 1s ,height 1s;
  overflow: hidden;
}

.id-card-fold{
	width: 30px;
	height: 100px;
}

.avator{
  height: 100px;
  width: 100px;
  margin: 20px auto 20px auto;
  border-radius: 50%;
  border: #FFFFFF 1px solid;
  overflow: hidden;
}

.avator img{
  height: 100%;
  width: 100%;
}
.name{
  height: 30px;
  width: 100px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
}

.card-text{
  display: flex;
  align-items: center;
  height: 30px;
  width: 200px;
  text-align: left;
  line-height: 30px;
  margin: 4px auto 0 10px;
}

img{
  height: 20px;
  width: 20px;
  margin-right: 8px;
}

.fold{
  position: absolute;
  right: 4px;
  top: 45%;
  height: 25px;
  width: 25px;
}

.fold img{
  height: 100%;
  width: 100%;
}

.project-list{
  margin: 0 auto;
}

.project-item{
  margin: 20px auto 0 auto;
}
</style>
