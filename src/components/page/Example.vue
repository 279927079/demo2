<template>
  <div>
	<div v-if='seen'>
		<div>原字符串：{{msg}}</div>
		<div>计算后反转字串：{{reversedMsg}}</div>
		<div>计算后反转字串：{{reversedMsg}}</div>
		<div>使用方法后反转字符串:{{reversedMsg2()}}</div>
		<p>原始数据：{{text}}</p>
		<p>变化后数据：{{reversedText()}}</p>
	</div>
	<div v-if='ok'>
		千米：<input type='text' v-model='kilometers'>
		米： <input type='text' v-model='meters'>
	</div> 
	<div>修改前值为: {{kilometers}}</div>
	<div>修改后值为{{meters}}</div>
	<div v-if='Math.random()>0.5'>
		11,{{Math.random()}}
	</div>
	<div v-else>
		222,{{Math.random()}}
	</div>

	<div>{{Num}}</div>
	<input type='text' class='edit' placeholder='长度' v-model='inp'>
	<p v-if='calLen(inp)>10'>输入的字符长度大于10</p>
	<p v-else-if='calLen(inp)>5'>输入的字符长度大于5</p>
	<p v-else-if='calLen(inp)>0'>输入了字符</p>
	<p v-else>没有输入</p>
	
	 <img src="https://static.runoob.com/images/mix/Vue-c1404f26d2d428847a0dbbfe214914c207716c77/asset/img/ic_user.png" v-show="calLen(inp)<=0">
     <img src="https://static.runoob.com/images/mix/Vue-c1404f26d2d428847a0dbbfe214914c207716c77/asset/img/ic_question.png" v-show="calLen(inp)>0">
	 <img src="https://static.runoob.com/images/mix/Vue-c1404f26d2d428847a0dbbfe214914c207716c77/asset/img/ic_stop.png" v-show="calLen(inp)>5">

	<div v-if="type>= 90">A</div>
	<div v-else-if="type <90&type>=80">B</div>
	<div v-else-if="type<80&type>=60">C</div>
	<div v-else-if="type<60">D</div>
	<div>{{type}}</div>
	
	<ol>
		<li v-for='site in sites' :key="site.id">{{site.name}}</li>
	</ol>
	<ul>
		<li v-for='n in [1,3,5]' :key='n.id'>{{n}}</li>
	</ul>
	<ul>
		<li v-for='(value,key,index) in object' :key='index'>
			<p v-if="typeof value !='object'">{{value}}....{{index}}</p>
			<p v-else>{{key}}....{{index}}</p>
			<ul v-if="typeof value =='object'">
				<li v-for='(value,key,index) in value' :key='index'>
					{{key}}:{{value}}...{{index}}
				</li>
			</ul>
		</li>
	</ul>
	  <div v-for="n in 9" :key='n'>
		<b v-for="m in n" :key='m'>
			{{m}}*{{n}}={{m*n}}
		</b>
    </div>
	<table>
		<tr>
			<th>序号</th>
			<th>商品名称</th>
			<th>商品价格</th>
			<th>购买数量</th>
			<th>操作</th>
		</tr>
		<tr v-for="iphone in ipJson">
			<td>{{iphone.id}}</td>
			<td>{{iphone.name}}</td>
			<td>{{iphone.price}}</td>
			<td>
			<button v-bind:disabled='iphone.count ===0' v-on:click='iphone.count-=1'>1</button>
			{{iphone.count}}
			<button v-on:click='iphone.count+=1'>+</button>
			<td>
			<td>
				<button v-on:click='iphone.count=0'>移除</button>
			</td>
		</tr>
	</table>
	<div>总价：${{totalPrice()}}</div>
	 <div v-bind:class='{active:isActive}'></div>
	 <button @click='greet'>Greet</button>
	 <button @click="say('hi',$event)"> say hi</button>
	 <button @click="say('what',$event)"> say what</button>
	 <div>
		 <input type='button' value='单击后增加' @click='m+=1'>
		 <input type='button' value='绑定函数的按钮' @click='add'>
		 <input type='button' value='绑定可传值函数的按钮' @click='add2(3,4)'>
	 </div>
	 <div>这个按钮被点击了{{m}}</div>
	 <div>
		<p>{{message}}</p>
		<input v-model='message'><br>
		<textarea v-model='message'></textarea>
	 </div>
	 <div>
		<p>单个复选框
		<input type='checkbox' id='checkbox' v-model='checked' @change='changeAllChecked()'>
		<label for='checkbox'>{{checked}}</label>
		</p>
	 </div>
	 <div>
		<p>多个复先框</p>
		<input type='checkbox' id='runoob' value='Runoob' v-model='checkedNames'>
		<label for='runoob'>Runoob</label>
		<input type='checkbox' id='google' value='Google' v-model='checkedNames'>
		<label for='google'>Google</label>
		<input type='checkbox' id='taobao' value='Taobao' v-model='checkedNames'>
		<label for='taobao'>taobao</label>
		<br>
		<span>选择的值为：{{checkedNames}}</span>
	 </div>
	 <div>
		<input type='radio' id='Lee' value='Lee' v-model='picked'>
		<label for='Lee'>Lee</label>
		<br>
		<input type='radio' id='Live' value='Live' v-model='picked'>
		<label for='Live'>Live</label>
		<br>
		选择的值为：{{picked}}
	 </div>
	 <div>
		<p>{{selected}}</p>
		<select v-model="selected" name="fruit">
			<option v-for="option in optionsList" :value="option.value" :key='option.key'>{{option.key}}</option>
		</select>
	 </div>
	 <div>
		<p>全选<input type='checkbox' v-model='checks' @change='Numlist()'>{{checks}}</p>
		<p>
			<label v-for='(list,index) in checkList' :key='index'>
				<input type='checkbox' v-model='checksListOn' :value='list.name'>{{list.name}}
			</label>
		</p>
		<p>{{checksListOn}}</p>
	 </div>
  </div>     

  
  
</template>
<script>
export default {
    name: 'Home',
    data () {
		return {
			checks:false,
			checkList:[
				{id:1,name:'苹果'},
				{id:2,name:'香蕉'},
				{id:3,name:'栗子'},
				{id:4,name:'椰子'}
			],
			checksListOn:[],
			selected:'',
			optionsList:[{
				key:'选择',
				value:'Select'
			},{
				key:'微讯',
				value:'taobao'
			},{
				key:'京东',
				value:'jingd'
			}],
			picked:'Lee',
			checked:false,
			checkedNames:[],
			checkedArr:["Runoob", "Taobao", "Google"],
			message:'0',
			m:0,
			msg:'PAUL',
			isActive:true,
			name:'weixun',
			url:'http://weixun.com',
			text:'123,456',
			kilometers:0,
			meters:0,
			seen:false,
			ok:true,
			type: Math.random()*100,
			Num:Math.random(),
			inp:'',
			sites:[
				{name:'Run'},
				{name:'QQ'},
				{name:'taobao'}
			],
			object: {
			  name: '菜鸟教程',
			  url: 'http://www.runoob.com',
			  slogan: '学的不仅是技术，更是梦想！',
			  obj2:{y:"嵌套对象的属性1",z:"嵌套对象的属性2"}
			},
			ipJson:[
				{
					id:1,
					name:'iphone 8',
					price:5099,
					count:1
				},
				{
					id:2,
					name:'iphone xs',
					price:8699,
					count:1
				},
				{
					id:3,
					name:'iphone xr',
					price:6499,
					count:1
				}
			]
		}
	},
	watch:{
		kilometers:function(val){
			this.kilometers = val;
			this.meters = this.kilometers*1000
		},
		meters:function(val){
			this.meters =val;
			this.kilometers = val/1000;
		},
		checkedNames:function(){
			console.log(this.checkedNames.length,'000')
			if(this.checkedNames.length == this.checkedArr.length){
				this.checked = true
			}else{
				this.checked=false
			}
			
		},
		checksListOn:function(){
			if(this.checksListOn.length == this.checkList.length){
				this.checks = true
			}else{
				this.checks=false
			}
		}
	},
	computed:{
		reversedMsg:function(){
			return this.msg.split('').reverse().join('')
		}
	},
	methods:{
		Numlist:function(){
			if(this.checks){
				var listArr=[];
				for(var i=0;i<this.checkList.length;i++){
					listArr.push(this.checkList[i].name);
			
				}
					
				this.checksListOn=listArr;
			}else{
				this.checksListOn=[]
					console.log(this.checksListOn,'0000')
			}
		},
		changeAllChecked:function(){
			console.log(this.checkedNames,'012')
			if(this.checked){
				this.checkedNames = this.checkedArr
			}else{
				this.checkedNames=[]
			}
		},
		calLen:function(n){
			if(!n){
				return 0;       
			}else{
				return n.split('').length;
			} 
		},
		reversedText:function(){
			return this.text.split(',').reverse().join(',')
		},
		reversedMsg2:function(){
			return this.msg.split('').reverse().join('')
		},
		totalPrice:function(){
			var totalP=0;
			for(var i =0,len=this.ipJson.length;i<len;i++){
				totalP+=this.ipJson[i].price*this.ipJson[i].count;
			}
			return totalP;
		},
		greet:function(event){
			alert('Hello' + this.msg + '!')
			if(event){
				alert(event.target.tagName)
			}
		},
		say:function(message,e){
			alert(message);
			console.log(e.currentTarget);
		},
		add:function(e){
			e.stopPropagation();
			this.m +=2;
		},
		add2:function(m,n){
			this.m=m+n;
		}
	},

}
</script>
<style>
img{
  width: 80px;
  height: 80px;
}
.active {
	width: 100px;
	height: 100px;
	background: green;
}
</style>