<template>
	<div class="page">
		<div class="options">
			<div>技术博客</div>
		    <div>娱乐博客</div>
		    <div>日常动态</div>
		</div>
		<div class="article-list">
			<div class="article" v-for="article in articles">
				<img src="../assets/logo.png"/>
				<div>
					<div class="title">{{article.title}}</div>
					<div class="describe">{{article.describe}}</div>
				</div>
				<div class="data">
					<div><img src="../assets/点赞.png"></div>
					<div><img src="../assets/问答.png"/></div>
					<div><img src="../assets/分享.png"/></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			articles: [
				{
					title: '我是大灰狼',
					describe: '我爱吃小羊'
				},
				{
					title: '我是大灰狼',
					describe: '我爱吃小羊'
				},
				{
					title: '我是大灰狼',
					describe: '我爱吃小羊'
				}
			]
		}
	},
	methods:{
		
	}
}	
</script>

<style>
.page{
  display: flex;	
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../assets/bg1.jpg);
  overflow: hidden;
}

.options{
  position: fixed;
  top: 100px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 120px;
  text-align: center;
  background-color: #aaffff;
}

.options div{
  height: 50px;
  width: 100%;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  color: #000000;
}

.options div:hover{
  background-color: #FFAA00;
}

.article-list{
  width: 800px;
  margin: 0 auto;
  background-color: #f4f5f5;
}

.article{
  position: relative;
  display: flex;
  height: 200px;
  width: 600px;
  margin: 10px auto 0 auto;
  background-color: #FFFFFF;
  overflow: hidden;
}

.article > img{
  height: 180px;
  width: 180px;
  margin: 20px 20px 20px 20px;
}

.title{
  height: 50px;
  width: 400px;
  margin: 50px 0 0 20px;
  font-size: 25px;
  text-align: left;
  overflow: hidden;
}

.describe{
  height: 30px;
  width: 400px;
  margin: 0 0 0 20px;
  color: #000;
  opacity: .5;
  text-align: left;
}

.data{
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
}

.data > div{
  height: 20px;
  width: 20px;
  margin: 0 25px 10px 0;
}

.data img{
  height: 20px;
  width: 20px;
}
</style>
