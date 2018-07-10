<template>
  <primaryView msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import primaryView from '@/components/primaryView.vue';
import introSlogan from '@/components/introSlogan.vue';
import clientes from '@/components/clientes.vue';
import footerInfo from '@/components/footerInfo.vue';
import servicios from '@/components/servicios.vue';
import misionVision from '@/components/misionVision.vue';

export default {
  name: 'home',
  components: {
    primaryView,
    introSlogan,
    clientes,
    footerInfo,
    servicios,
    misionVision,
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
