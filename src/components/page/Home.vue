<template>
	<div class="homePage" v-cloak v-on:click="hideToolTip">
		<nav :class="active">
				<a v-for='(item,index) in menu' :class="item.name" @click="makeActive(item.name)" :key='index'>{{item.des}}</a>
		</nav>
		<div>您选择了 <b>{{active}} 菜单</b></div>
		<div class='tooltip' v-on:click.stop v-if='showTooltip'>
			<input type='text' v-model='textContent' />
		</div>
		<div  v-on:click.stop="toggleToolTip">{{textContent}}</div>
	</div>
</template>
<script>   
export default {
	data(){
		return{
			active: 'home',
			isCur: true,
			menu:[
				{
					name:'home',
					des:'首页'
				},
				{
					name:'about',
					des:'关于我们'
				},
				{
					name:'news',
					des:'公司新闻'
				},
				{
					name:'contact',
					des:'联系我们'
				}
			],
			showTooltip:false,
			textContent:'点击并编辑内容'
		}
	},
	methods:{
		makeActive:function(item){
			this.active=item;	
		},
		hideToolTip:function(){
			this.showTooltip = false;
			console.log(this.showTooltip)
		},
		toggleToolTip:function(){
			this.showTooltip = !this.showTooltip
			console.log(this.showTooltip)
		}
	}
}
</script>
<style scoped>
.homePage{
	height: 100%;
}
	nav{
		display:block;
		margin:0 auto;
		background-color:#5597b4;
		box-shadow:0 1px 1px #ccc;
		border-radius:2px;
	}
	nav a{
		display:inline-block;
		padding: 18px 30px;
		color:#fff !important;
		font-weight:bold;
		font-size:16px;
		text-decoration:none !important;
		line-height:1;
		text-transform: uppercase;
		background-color:transparent;
		-webkit-transition:background-color 0.25s;
		-moz-transition:background-color 0.25s;
		transition:background-color 0.25s;
	}
	nav a:first-child{
		border-radius:2px 0 0 2px;
	}
	nav a:last-child{
		border-radius:0 2px 2px 0;
	}
	nav.home .home,
	nav.about .about,
	nav.news .news,
	nav.contact .contact{
		background-color:#e35885;
	}
 /*-------------------------
        编辑框
    --------------------------*/

    .tooltip{
        background-color:#5c9bb7;

        background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:linear-gradient(top, #5c9bb7, #5392ad);

        box-shadow: 0 1px 1px #ccc;
        border-radius:3px;
        width: 290px;
        padding: 10px;

        position: absolute;
        left:50%;
        margin-left:-150px;
        top: 80px;
    }

    .tooltip:after{
        /* 提示信息 */
        content:'';
        position:absolute;
        border:6px solid #5190ac;
        border-color:#5190ac transparent transparent;
        width:0;
        height:0;
        bottom:-12px;
        left:50%;
        margin-left:-6px;
    }

    .tooltip input{
        border: none;
        width: 100%;
        line-height: 34px;
        border-radius: 3px;
        box-shadow: 0 2px 6px #bbb inset;
        text-align: center;
        font-size: 16px;
        font-family: inherit;
        color: #8d9395;
        font-weight: bold;
        outline: none;
    }
</style>