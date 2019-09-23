<template>
  <div>
	<input type='text' v-model='keyword' @keyup='sendJsonP(keyword)'>
	<ul>
		<li v-for=' r in result' :key='r.id'>{{r}}</li>
	</ul>
  </div>
</template>
<script>
export default {
  data(){
	return{
		keyword:'',
		result:''
	}
  },
  methods:{
    sendJsonP(keyword){
      let url ='https://http://www.weixun.cn/api/V1?RequestType=GetTickets'
       this.$http.jsonp(url,{
         params:{wd:keyword},
         jsonp:'cb'
      }).then(res=>{
         console.log(res)
        if(res.data.g){
          this.result = res.data.g.map(x=>x['q']);
        }else{
          this.result=[]
        }
      }).catch(function (error) { // 请求失败处理
        console.log(error);
      });
    }
  }
  
}
</script>