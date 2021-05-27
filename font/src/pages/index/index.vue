<template>
	<div class="page">
		<div class="content">
			<div class="title">HI , I AM Gellen Liu</div>
		    <div class="sub-title">welcome to my world</div>
		    <div class="link" @click="more">learn more</div>
		</div>
		<div class="img-box">
			<img src="../../../public/man.png"/>
		</div>
		<div class="fly">
			<div class="left-wing"></div>
			<img src="../../../public/qihang.png"/>
			<div class="right-wing"></div>
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
  height: 668px;
  width: 1366px;
  margin: 0 auto;
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
  width: 800px;	
  
}

.title{
  height: 80px;
  width: 100%;
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

.img-box,.img-box img{
  height: 600px;
  width: 380px;	
  margin: 40px 0 0 0;
}

.fly{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  animation-name: move;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@keyframes move{
	0%{
		top: 10px;
		left: 100px;
	}
	100%{
		top: 100px;
		left: 300px;
	}
	to{}
}
	
.fly img{
  height: 33px;
  width: 24px;
}

.left-wing{
   width: 0;
   height: 0;
   border-top: 5px solid transparent;
   border-right: 40px solid white;
   border-bottom: 5px solid transparent;
   transform-origin: right;
   animation-name: fly;
   animation-duration: 0.002s;
   animation-iteration-count: infinite;
}

.right-wing{
   width: 0;
   height: 0;
   border-top: 5px solid transparent;
   border-left: 40px solid white;
   border-bottom: 5px solid transparent;
   transform-origin: left;
   animation-name: fly;
   animation-duration: 0.002s;
   animation-iteration-count: infinite;
}

@keyframes fly{
	0%{
		transform: rotate(0deg);
	}
	25%{
		transform: rotate(30deg);
	}
	50%{
		transform: rotate(0deg);
	}
	75%{
		transform: rotate(-30deg);
	}
	100%{
		transform: rotate(0deg);
	}
}

</style>
