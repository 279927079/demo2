<template>
<div>
	<button :disabled='counter===0' @click='incrementHandler(1)'>-</button>{{ counter }}
	<button @click='incrementHandler(2)'>+</button>
  </div>
</template>
<script>
export default {
  name:'Counter',
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    incrementHandler: function (v) {
		if(v==1){
			this.counter -=1
			this.$emit('increment',1)
		}else{
			this.counter += 1
			this.$emit('increment',2)
		}
      
      
    }
  }
}
</script>