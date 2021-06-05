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
<!-- 	<div class="ball-box">
			<div class="ball"></div>
		</div> -->
		<!-- <div class="trans">
			
		</div> -->
		 
 
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
  position: relative;
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
  z-index: 1;
}

.fly{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  animation-name: move;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes move{
	0%{
		top: 150px;
		left: 750px;
		z-index: 2;
	}
	5%{
		top: 200px;
		left: 800px;
		z-index: 2;
	}
	10%{
		top: 220px;
		left: 855px;
		z-index: 2;
	}
	20%{
		top: 230px;
		left: 905px;
		z-index: 2;
	}
	25%{
		top: 250px;
		left: 950px;
		z-index: 2;
	}
	30%{
		top: 240px;
		left: 1000px;
		z-index: 2;
	}
	40%{
		top: 200px;
		left: 1050px;
		z-index: 2;
	}
		
	45%{
		top: 180px;
		left: 1100px;
		z-index: 2;
	}
	50%{
		top: 150px;
		left: 1150px;
		z-index: 2;
		/* transform: rotateY(60deg); */
	}
	60%{
		top: 130px;
		left: 1100px;
		z-index: 0;
	}
	70%{
		top: 120px;
		left: 1050px;
		z-index: 0;
	}
	75%{
		top: 100px;
		left: 1000px;
		z-index: 0;
	}
	80%{
		top: 110px;
		left: 950px;
		z-index: 0;
	}
	85%{
		top: 120px;
		left: 900px;
		z-index: 0;
	}
	90%{
		top: 130px;
		left: 850px;
		z-index: 0;
	}
	95%{
		top: 140px;
		left: 800px;
		z-index: 0;
	}
	100%{
		top: 150px;
		left: 750px;
	}
	to{}
}
	
.fly img{
  height: 33px;
  width: 33px;
}


.left-wing{
 position: relative;
  left: 4px;
  width: 2px;
  height: 2px;
   /* border-radius: 50% 20% 20% 50%; */
   /* transform: scale(1.5,.5); */
   /* background-color: #FFFFFF; */
  border-top: 10px solid transparent;
   border-right: 40px solid white;
   border-bottom: 10px solid transparent;
   transform-origin: right;
   animation-name: fly;
   animation-duration: 0.002s;
   animation-iteration-count: infinite;
}

.right-wing{
   width: 2px;
   height: 2px;
   border-top: 10px solid transparent;
   border-left: 40px solid white;
   border-bottom: 10px solid transparent;
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
		border-bottom: 5px solid transparent;
		border-top: 5px solid transparent;
	}
	50%{
		transform: rotate(0deg);
		
	}
	75%{
		transform: rotate(-30deg);
		border-bottom: 5px solid transparent;
		border-top: 5px solid transparent;
	}
	100%{
		transform: rotate(0deg);
	}
}

.ball-box{
	position: absolute;
	left: 900px;
	top: 500px;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	animation: movey 4s infinite linear;
	/* transform-origin: 100px 0 0; */
}

.ball{
  
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-image: url(../../assets/ball.png);
  animation: circle 4s infinite linear;
  transform-origin: 100px 50%;
  transform-style: preserve-3d;
}


/* 平面旋转 */
@keyframes circle{
	from{
		transform: rotate(0);
	}
	25%{
		z-index: 0;
	}
	50%{
		z-index: 0;
	}
	75%{
		z-index: 2;
	}
	to{
		z-index: 2;
		transform: rotate(360deg) ;
	}
}
/* 3D旋转 */
@keyframes circle3d{
	from{
		transform: rotateY(0);

	}
	25%{
		z-index: 2;
	
	}
	50%{
		z-index: 2;
	
	}
	75%{
		z-index: 0;
	}
	to{
		z-index: 0;
		transform: rotateY(360deg);
	}
}


@keyframes movey{
		
	0%{
		transform: translate(0,0);
	}
	25%{
		transform: translate(0,50px);
	}
	50%{
		transform: translate(0,0);
	}
	75%{
		transform: translate(0,-50px);
	}
	100%{
		transform: translate(0,0);
	}
}


	
.trans{
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-color: #F4F5F5;
	animation: scale 2s infinite linear;
}

@keyframes scale{
	from{
		transform: scale(1,1);
	}
	50%{
		transform: scale(.5,.5);
	}
	to{
		transform: scale(1.5,1.5);
	}
}
</style>
