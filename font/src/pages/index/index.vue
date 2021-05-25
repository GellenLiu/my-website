<template>
	<div class="page">
		<div class="content">
			<div class="title">HI , I AM Gellen Liu</div>
		    <div class="sub-title">welcome to my world</div>
		    <div class="link" @click="more">learn more</div>
		</div>
		<div class="img-box">
			<!-- <img /> -->
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
		    this.$router.push('/education')
		}
	}
}
</script>

<style scoped>
.page{
  display: flex;	
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../../assets/bg1.jpg);
  overflow: hidden;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 600px;
  width: 600px;	
  
}

.title{
  height: 80px;
  margin: 30px 0 0 100px;
  font-family: "arial rounded mt bold";
  font-size: 60px;
  color: white;
  text-align: left;
}

.sub-title{
  height: 50px;
  margin: 0 0 0 100px;
  font-size: 30px;
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

.img-box{
  height: 600px;
  width: 300px;	
}
</style>
