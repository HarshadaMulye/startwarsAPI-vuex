<template>
  <div>PeopleList
    hello
  
<ul>
  <li v-for="(p,i) in people" :key="i">
    {{p.name}}
  </li>
</ul>
<button @click="next(num)">next</button>
</div>
</template>

<script>
import {INIT_DATA,SET_NEXT} from "@/store/module/people.js"

import {mapState} from 'vuex'
export default {
created:function(){
  this.$store.dispatch(INIT_DATA)
},
data(){
  return{
    num:2
  }
},
computed:{
...mapState({
  people:state=>state.people.results
  
  
  })
},
  methods:{
    next(num){
       this.$people.commit(SET_NEXT,num)
    }
  }


}
</script>

<style>

</style>