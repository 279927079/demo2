<template>
  <div>
	<p>计数器：{{products.id}}</p>
	<button @click='products.id++'>点我</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter:1,
      products:{
        id:1,
        name:'book',  
        price:20
      }
    }
  },
  watch:{
    counter:function(value,value2){
      console.log('变化:' + value2 + '变为' + value)
    },
  },
   mounted() {
    console.log(this.products)
    this.$set(this.products, 'name', 'English')
    this.$delete(this.products, 'price');
    setTimeout(() => console.log(this.counter += 20),10000)
   },
}

</script>