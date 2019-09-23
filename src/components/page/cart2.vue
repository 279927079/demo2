<template>
	<form>
		<div v-for="item in goods" :key='item.id' @click='toggleActive(item)' class="card-goods__item van-checkbox" :class="{'active':item.active}" >
			<div class="card-goods__item van-checkbox__icon">
				<input :id='item.id' type="checkbox" v-model="item.active" />
			</div>
			<div class="van-card">
				<div class="van-card__header">
					<div class="van-card__thumb">
							<div class="van-image" style="width: 100%; height: 100%;">
								<img class="van-image__img" :src='item.thumb' />
							</div>
					</div>
					<div class="van-card__content">
						<div class="van-card__title">{{item.title}}</div>
						<div class="van-card__desc van-ellipsis">{{item.desc}}</div>
						<div class="van-card__bottom">
							<div class="van-card__num">x{{item.num}}</div>
							<div class="van-card__price">{{item.price | currency}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='total'>
				Totao:<span>{{total()| currency}}</span>
		</div>
		<!-- <ul>
			<li v-for='service in services' @click='toggleActive(service)' :class="{'active':service.active}" :key='service.id'>
				{{service.name}}<span>{{service.price | currency}}</span>
			</li>
		</ul>
		<div class='total'>
				Totao:<span>{{total()| currency}}</span>
		</div> -->
	</form>
</template>
<script>
export default {
  data(){
    return{
			checked : '',
      services:[
        {
          name:'Web Development',
          price:300,
          active:false
        },{
          name:'Design',
          price:400,
          active:false
        },{
          name:'Integration',
          price:250,
          active:false
        },{
          name:'Training',
          price:220,
          active:false
        }
			],
			goods: [{
        id: '1',
        title: '深圳欢乐谷',
        desc: '深圳欢乐谷是欢乐的起点，走进独具异域风情的西班牙广场，身临其',
        price: 59,
        num: 1,
				thumb: 'http://img1.qunarzz.com/sight/p0/1904/1e/1e51b5ea32ee8033a3.water.jpg_710x360_66e72b4d.jpg',
				active:false
      }, {
        id: '2',
        title: '深圳锦绣中华民俗村',
        desc: '锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中',
        price: 69,
        num: 1,
				thumb: 'http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg',
				active:false
      }, {
        id: '3',
        title: '深圳东部华侨城双谷游',
        desc: '东部华侨城坐落于中国深圳大梅沙，占地近9平方公里，由华侨城集',
        price: 198,
        num: 1,
				thumb: 'http://pic.lvmama.com//uploads/pc/place2/2016-09-28/794531ac-0ee1-42aa-ad5c-fbf19dc8b7df.jpg',
				active:false
      }]
    }
	},
	mounted(){

	},
	watch:{

	},
	computed:{
		isSelectedAll:function(){

		}
	},
  filters:{
    currency:function(value){
      return '￥' + value.toFixed(2);
    }
	},
	methods:{
		toggleActive:function(n){
			n.active = !n.active;
       console.log(n.price,'111')
		},
		total:function(){
			let total=0;
			this.goods.forEach(function(n){
				if(n.active){
					total+=n.price;
				}
			});
			return total;
		}
	}
}
</script>
<style scoped>
 form{
    	/* background-color: #61a1bc; */
    	border-radius: 2px;
    	box-shadow: 0 1px 1px #ccc;
    	/* width: 400px; */
    	padding: 35px 60px;
    	margin: 50px auto;
    }

    form h1{
    	color:#fff;
    	font-size:64px;
    	font-family:'Cookie', cursive;
    	font-weight: normal;
    	line-height:1;
    	text-shadow:0 3px 0 rgba(0,0,0,0.1);
    }

    form ul{
    	list-style:none;
    	color:#fff;
    	font-size:20px;
    	font-weight:bold;
    	text-align: left;
    	margin:20px 0 15px;
    }

    form ul li{
    	padding:20px 30px;
    	background-color:#e35885;
    	margin-bottom:8px;
    	box-shadow:0 1px 1px rgba(0,0,0,0.1);
    	cursor:pointer;
    }

    form ul li span{
    	float:right;
    }

    form ul li.active{
    	background-color:#8ec16d;
    }

    div.total{
    	border-top:1px solid rgba(255,255,255,0.5);
    	padding:15px 30px;
    	font-size:20px;
    	font-weight:bold;
    	text-align: left;
    	color:#333;
    }

    div.total span{
    	float:right;
    }
		/**/
		.van-checkbox {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
				overflow: hidden;
				-webkit-user-select: none;
				user-select: none;
		}
		.card-goods__item {
				position: relative;
				background-color: #fafafa;
		}
		.van-checkbox__icon {
			-webkit-box-flex: 0;
			-webkit-flex: none;
			flex: none;
			height: 1em;
			font-size: 20px;
			line-height: 1em;
	}
		.card-goods__item .van-checkbox__icon {
				top: 50%;
				left: 10px;
				z-index: 1;
				position: absolute;
				margin-top: -10px;
		}
		.van-card{
			position: relative;
			box-sizing: border-box;
			padding: 8px 16px;
			color: #323233;
			font-size: 12px;
			background-color: #fafafa;
			text-align: left;
			padding-left: 50px;
		}
		.van-card__header{
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
		}
		.van-card__thumb{
			position: relative;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 90px;
    height: 90px;
    margin-right: 8px;
		}
		.van-image{
			position: relative;
    	display: inline-block;
		}
		.van-image__img{
			display: block;
    	width: 100%;
    	height: 100%;
		}
		.van-card__content{
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			flex: 1;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			flex-direction: column;
			min-width: 0;
			min-height: 90px;
		}
		.van-card__desc, .van-card__title {
    word-break: break-all;
}
		.van-card__title{
			max-height: 32px;
    font-weight: 500;
    line-height: 16px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
		}
		.van-card__desc {
				max-height: 20px;
				color: #7d7e80;
		}
		.van-ellipsis {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
		}
	.van-card__num {
    float: right;
}
</style>