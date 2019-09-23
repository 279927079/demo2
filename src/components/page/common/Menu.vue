<template>
    <div class="menu">
      <p>爱好：{{inputName}}</p>
      <p>{{inputValue}}</p>
      <input @click="search" type="button" value="点击">
    </div>
</template>
<script>
export default {
  name:'Menu',
  props: ['inputName','inputValue','tood'],
  data(){
    return{
      childData:[
        {id:1,name:'地王广场'},
				{id:2,name:'野生动物园'},
				{id:3,name:'小梅沙海洋世界'},
				{id:4,name:'海上田园'}
      ],
      childChecked:false,
      count:0
    }
  },
  // watch: {
  //     inputName: function(newValue) {
  //         console.log(newValue,'0000');  //可以看到数据已经拿到
  //     }
  // },
  methods:{
    search:function(){
      this.count++;
      this.childChecked=true;
      this.$emit('childByValue', this.childData,this.childChecked,this.count)
    }
  }
}
</script>