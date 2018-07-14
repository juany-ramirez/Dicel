<template>
  <div class="theme-two">
    <div class="text-xs-center">
      <span class="headline-theme white--text mb-3">
        Clientes
      </span>
    </div>
    <br><br><br>
    <div class=""></div>
    <v-carousel hide-delimiters>
      <v-carousel-item>
        <v-container class="text-xs-center">
          <span class="header-theme white--text mb-3">
            Sistema Eléctrico
          </span>
          <br>
          <div class="container text-xs-center">
            <v-content>
              <v-chip v-for="(item, index) in electricos" :key="index">
                <v-avatar color="primary"></v-avatar>
                {{item.nombre}}
                <span>{{item.lugar}}</span>
              </v-chip>
            </v-content>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>

export default {
  name: 'FSectionClientes',
  props: {
    id: String,
    item: {
      nombre: '',
      lugar: '',
      descripcion: '',
    },
    electricos: [
      {
        nombre: 'HIPER ANTORCHA',
        lugar: '',
        descripcion: 'Sistema eléctrico primario y secundario',
      },
      {
        nombre: 'SUPERMERCADO SUPER BARATO',
        lugar: 'Centro, Pto. Cortés',
        descripcion: 'Sistema eléctrico primario y secundario',
      },
      {
        nombre: 'SUPERMERCADO SUPER BARATO 2',
        lugar: 'Salida a Omoa',
        descripcion: 'Sistema eléctrico primario y secundario',
      },
      {
        nombre: 'SUPERMERCADO LA ANTORCHA',
        lugar: 'Villanueva',
        descripcion: 'Sistema eléctrico primario y secundario',
      },
      {
        nombre: 'SUPERMERCADO EL ÉXITO',
        lugar: 'Villanueva',
        descripcion: 'Sistema eléctrico primario y secundario',
      },
      {
        nombre: 'HOTEL CLARION',
        lugar: 'SPS',
        descripcion: 'Sistema eléctrico para unidades de aire acondicionado',
      },
      {
        nombre: 'AGENCIA LA MUNDIAL TONCONTÍN',
        lugar: 'Puerto Cortés',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'AGENCIA LA MUNDIAL PUERTO CORTÉS',
        lugar: 'Toncontín, Tegucigalpa',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'AGENCIA LA MUNDIAL SUYAPA',
        lugar: 'Suyapa, Tegucigalpa',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'AGENCIA LA MUNDIAL PEDREGAL',
        lugar: 'Pedregal, SPS',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'AGENCIA LA MUNDIAL',
        lugar: 'Pedregal, SPS',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'Micro Torre II Panorama',
        lugar: 'Toncontín, Tegucigalpa',
        descripcion: 'Sistema eléctrico en niveles 5, 8, 11, 14, 17, 20, 23, 27 y 31 ',
      },
      {
        nombre: 'SUPERMALL',
        lugar: 'Puerto Cortés',
        descripcion: 'Sistema eléctrico',
      },
      {
        nombre: 'ALUTECH',
        lugar: 'Río Nance',
        descripcion: 'Sistema eléctrico Máquina de tubo 6”',
      },
      {
        nombre: 'ALUTECH',
        lugar: 'Choluteca',
        descripcion: 'Sistema eléctrico Planta proceso de metálicos ”',
      },
      {
        nombre: 'ALUTECH',
        lugar: 'Río Nance III',
        descripcion: 'Sistema eléctrico Planta proceso de metálicos ',
      },
    ],
  },
  data() {
  },
};
</script>

<style scoped>
span.header-theme{
  color: #263238;
}
</style>
