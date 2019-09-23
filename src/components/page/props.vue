<template>
  <div>
  <props :propa="4564" :propb="'sdf'" :propc="'sdfsdf'" :propd='23423' :prope="{a:'a'}" :propf='100'></props>
  <Menu :inputName="checkedNames" @childByValue="childValue" :inputValue='username'></Menu>
  </div>
</template>
<script>
import props from './common/props'
import Menu from './common/Menu'
export default {
  components:{
    props,
    Menu
  },
  data(){
    return{
      username:'',
      checkedNames:[],
    }

  },
  methods:{
    childValue(value,value2,value3) {
      this.checkedNames.push(value)
      console.log(value,value2,value3);//接收子组件的数据然后你想干嘛就干嘛
    },
  },
}
</script>