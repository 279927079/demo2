<template>
  <table border='1px'>
	<tr>
		<th>propA</th>
		<th>propB</th>
		<th>propC</th>
		<th>propD</th>
		<th>propE</th>
		<th>propF</th>
	</tr>
	<tr>
		<td>{{propa}}</td>
		<td>{{propb}}</td>
		<td>{{propc}}</td>
		<td>{{propd}}</td>
		<td>{{prope}}</td>
		<td>{{propf}}</td>
	</tr>
  </table>
</template>
<script>
export default {
	props:{
		propa: Number,
		propb: [String,Number],
		propc:{
			type:String,
			required:true
		},
		propd:{
			type:Number,
			default:1000
		},
		prope:{
			type:Object,
			default:function(){
				return {message:'hello'}
			}
		},
		propf:{
			type:Number,
			validator:function(value){
				return value>0?-1:1
			},
			defalut:12
		}
	},
	data(){
		return{
		  
		}
	}
}
</script>