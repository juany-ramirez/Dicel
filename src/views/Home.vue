<template>
  <div id="home">
    <v-app color="primary" dark>
      <ASectionView id="View"/>
      <BSectionSlogan id="Slogan"/>
      <CSectionNosotros id="Nosotros"/>
      <DSectionMV id="MV"/>
      <ESectionServicios id="Servicios"/>
      <FSectionClientes id="Clientes"/>
      <GSectionContacto id="Contacto"/>
      <HSectionFooter id="Footer"/>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import ASectionView from '@/components/ASectionView.vue';
import BSectionSlogan from '@/components/BSectionSlogan.vue';
import CSectionNosotros from '@/components/CSectionNosotros.vue';
import DSectionMV from '@/components/DSectionMV.vue';
import ESectionServicios from '@/components/ESectionServicios.vue';
import FSectionClientes from '@/components/FSectionClientes.vue';
import GSectionContacto from '@/components/GSectionContacto.vue';
import HSectionFooter from '@/components/HSectionFooter.vue';

export default {
  name: 'home',
  components: {
    ASectionView,
    BSectionSlogan,
    CSectionNosotros,
    DSectionMV,
    ESectionServicios,
    FSectionClientes,
    GSectionContacto,
    HSectionFooter,
  },
  props: ['scroll'],
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
