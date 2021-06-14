<template>
	<div class="page">
		<div class="flex-box">
			<div>
				<img src="../assets/img/company.jpg" />
				<div>公司相册</div>
			</div>
			<div>
				<img src="../assets/img/company.jpg" />
				<div>学校相册</div>
			</div>
			<div>
				<img src="../assets/img/company.jpg" />
				<div>生活相册</div>
			</div>
			<div>
				<img src="../assets/img/company.jpg" />
				<div>荣誉奖项</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	methods:{
		more(){
			console.log("more")
		}
	}
}	
</script>

<style scoped>
.page{
  display: flex;
  justify-content: center; 
  align-items: center;
  overflow: hidden;
}
.flex-box{
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  width: 700px;
  margin: 50px auto 0 auto;
}

.flex-box div{
  height: 300px;
  width: 350px;
  color: #F4F5F5;
}

img{
  height: 180px;
  width: 220px;
}

.flex-box > div:hover{
  transition: transform .5s;
  transform: translateY(-20px);
}
</style>
