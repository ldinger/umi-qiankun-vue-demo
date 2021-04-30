<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 style="color:red"> global data from main app & {{ info }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){

      return  {

          info : ''
      }
  },
   created(){

       console.info( this);
       this.info =   this.$store.state.k12
   }
};
</script>
