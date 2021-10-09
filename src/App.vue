<template>
  <div id="app">
    <loader></loader> 
    <router-view/>
  </div>
</template>
<script>
import loader from '@/components/loader'
export default {
  name: 'App',
  // beforeCreate() {
  //     this.$nextTick(function () {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://emr-vuejs.dreamguystech.com/static/css/style.css';
  //           head.appendChild(link);
          
  //     })
  //   },
  components: {
    loader
  },
}
</script>


