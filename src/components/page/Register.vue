<template>
  <div id='form'>
    <div>
      <label for='username'>用户：</label>
      <input type='text' id='username' v-model.trim='username'>
    </div>
    <div>
      <label for='password'>密码：</label>
      <input type='password' id='password' v-model='password'>
    </div>
    <div>
      <label for='age'>年龄：</label>
      <input type='number' id='age' v-model.number='age'>
    </div>
    <div>
      <label for='checkbox'>单身：</label>
      <input type='checkbox' id='checkbox' v-model='checked'>
      <label for='checkbox'>{{checked}}</label>
    </div>
    <div>
      <label>爱好：</label>
      <input type='checkbox' id='Runoob' value='欢乐谷' v-model='checkedNames'>
      <label for='Runoob'>Runoob</label>
      <input type='checkbox' id='google' value='世界之窗' v-model='checkedNames'>
      <label for='google'>google</label>
      <input type='checkbox' id='taobao' value='华侨城' v-model='checkedNames'>
      <label for='taobao'>taobao</label>
    </div>
    <div><input type='submit' @click='submit'></div>
    <div>
      <p>用户：{{username}}</p>
      <p>密码：{{password}}</p>
      <p>年龄：{{age}}</p>
      <p>单身：{{checked}}</p>
      <p>爱好：{{checkedNames}}</p>
    </div>
    <Menu  :inputName="checkedNames" @childByValue="childByValue" :inputValue='username'></Menu>
    <Counter v-on:increment="incrementTotal" v-for='n in 2' :key='n'    ></Counter>
    <!-- <Counter v-on:increment="incrementTotal"></Counter> -->
    <p>{{ total }}</p>
    <br>
    <Example :propa="4564" :propb="'sdf'" :propc="'sdfsdf'" :propd='23423' :prope="{a:'a'}" :propf='100'></Example>
    <div v-runoob:hello.a.b="{message}"></div>
    <button v-on:click = "show = !show">点我</button>
    <transition name = "fade">
    <p v-show="show" v-bind:style = "styleobj">动画实例</p>
	</transition>
	<div v-for='site in info'>{{site.info}}</div>
  <div>{{infoPost}}001122</div>
  <div><input type='button' @click='get()' value='获取get'></div>
  <div v-html="infoString"></div>
  <div><input type="button" @click="post()" value="点我异步获取数据(Post)"></div>
  <div>{{inofRes}}</div>
  <div class="amap-wrapper">
    <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
  </div>
	
  </div>  

</template>
<script>
import Menu from './common/Menu'
import Counter from './common/Counter'
import Example from './common/Example'
export default {
  name:'Register',
  components:{
    Menu,
    Counter,
	Example
  },
  data(){
    return{
      username:'',
      password:'',
      age:'',
      checked:false,
      checkedNames:[],
      total: 0,
      message: 'weixun!',
      show:true,
      styleobj :{
          fontSize:'12px',
          color:'blue'
      },
      info:null,
      infoPost:null,
      infoString:'',
      inofRes:''

    }
  },
  directives:{
		focus:{
			inserted:function(el){
				el.focus()
			}
		},
		runoob:{
			bind:function(el,binding,vnode){
        var s = JSON.stringify
				el.innerHTML =
				'name:' +s(binding.name) +'<br>'+
				'value:' +s(binding.value) +'<br>'+
				'expression:' + s(binding.expression) +'<br>'+
				'argument:' + s(binding.arg) +'<br>'+
				'modifiers:' + s(binding.modifiers) + '<br>'+
        'vnode keys:' + Object.keys(vnode).join(',')
				el.style.backgroundColor = binding.value.color
				
				
			}
		}
  },
  mounted(){
    this.$ajax.get('/ajax/json_demo.json')
      .then(response => {
        console.log(response,'0123')
        this.info = response.data.sites
        
        })
      .catch(function(){
        console.log(error)
      })
    this.$ajax.post('/ajax/demo_axios_post.php',{firstName: 'Fred',oldName: 'red'})
    .then(response => {
      console.log(response,'321')
      this.infoPost = response
    })
    .catch(function (error) { // 请求失败处理
      console.log(error);
    });
  },
  methods:{
    submit:function(){
      var params =new Object();
      params.username=this.username;
      params.password=this.password;
      params.age=this.age;
      params.checked=this.checked;
      params.checkedNames=this.checkedNames;
      console.log('formdata:'+ JSON.stringify(params, null, 4));
      // this.checkedNames=params
    },
    childByValue(value,value2,value3) {
      console.log(value,value2,value3);//接收子组件的数据然后你想干嘛就干嘛
    },
    incrementTotal: function (d) {
      if(d==1){
        this.total-=1
      }else{
        this.total+=1
      }
    },
    get:function(){
      var that =this
      this.$ajax.get('/ajax/ajax_info.txt',{params : {a:1,b:2}}).then(function(res){
         console.log(res.config.params,'123')
        that.infoString=res.data
        console.log(that.infoString,'00114477')
      }).catch(function (error) { // 请求失败处理
            console.log(error)
      });
    },
    post:function(){
      var that =this
      this.$ajax.post('/ajax/demo_test_post.php',{name:'微讯',url:'http://weixun.com'})
      .then(function(inofRes){
       that.inofRes=inofRes.config.data  
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>