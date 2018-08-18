<template>
  <div class="theme-two">
    <div
      data-aos="zoom-out"
      data-aos-delay="500"
      data-aos-once="true"
      class="text-xs-center">
      <div class="font-weight-thin subheader-theme">Algunos de nuestros</div><br>
      <span class="headline-theme white--text mb-3">
        Proyectos
      </span>
    </div>
    <br><br><br>
    <v-carousel
      id="carousel"
      lazy
      elevation-0
      delimiter-icon="flash_on">
      <v-carousel-item class="text-lg-center" v-for="(item, index) in items" :key="index">
        <v-container>
          <v-content class="text-xs-center">
            <a class="header-theme white--text mb-3">
              {{item.title}}
            </a>
            <br>
            <div class="container text-xs-center">
              <v-chip class="chip-content" v-for="(detail, ind) in item.details" :key="ind">
                <v-avatar color="primary"></v-avatar>
                {{detail.nombre}} -
                <span class="chip-detail hidden-sm-and-down">{{detail.lugar}}</span>
              </v-chip>
            </div>
            <br><br>
          </v-content>
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
  },
  data() {
    return {
      item: {
        nombre: '',
        lugar: '',
        descripcion: '',
      },
      items: [
        {
          title: 'Sistema Eléctrico',
          details: [
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
              nombre: 'AGENCIA LA MUNDIAL',
              lugar: 'Pedregal, SPS',
              descripcion: 'Sistema eléctrico',
            },
            {
              nombre: 'Micro Torre II Panorama',
              lugar: 'Toncontín, Tegucigalpa',
              descripcion: 'Sistema eléctrico en niveles 5, 8, 11, 14, 17, 20, 23, 27 y 31',
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
              descripcion: 'Sistema eléctrico Planta proceso de metálicos',
            },
            {
              nombre: 'ALUTECH',
              lugar: 'Río Nance III',
              descripcion: 'Sistema eléctrico Planta proceso de metálicos',
            },
            {
              nombre: 'GREEN VALLEY INDUSTRIAL PARK ',
              lugar: 'Edificio Administrativo y Clínicas',
              descripcion: 'Instalaciones eléctricas primarias y secundarias',
            },
          ],
        },
        {
          title: 'Circuito Primario',
          details: [
            {
              nombre: 'PROYECTO HIDROELÉCTRICO [12KM]',
              lugar: 'La Vegona, Enersa',
              descripcion: 'Circuito primario 34.5KV, Servicio de construcción',
            },
            {
              nombre: 'PROYECTO HIDROELÉCTRICO [8.5KM]',
              lugar: 'Chamelecón-Chiquila, Cohersa',
              descripcion: 'Circuito primario 34.5KV, entrega ENEE',
            },
            {
              nombre: 'PLANTA ELCOSA-SUBESTACIÓN ZULTZER [1KM]',
              lugar: 'Pto. Cortés, Elcosa',
              descripcion: 'Circuito primario 34.5KV, interconexión 5 hilos 3/0 por fase',
            },
            {
              nombre: 'HIDROELÉCTRICA COHCUY-ENEE [10KM]',
              lugar: 'Omoa-Pto. Cortés',
              descripcion: 'Circuito primario 34.5KV',
            },
            {
              nombre: 'PROYECTO HIDROELÉCTRICO [12.6KM]',
              lugar: 'Potrerillos-El Tornillito, Hidrovolcán',
              descripcion: 'Circuito primario 34.5KV, servicio de construcción',
            },
          ],
        },
        {
          title: 'Obra Civil',
          details: [
            {
              nombre: 'PROYECTO HIDROELÉCTRICO [12KM]',
              lugar: 'La Vegona, Enersa',
              descripcion: 'Circuito primario 34.5KV, Servicio de construcción',
            },
            {
              nombre: 'EDIFICIO PLAZA LA SALLE',
              lugar: 'San Pedro Sula',
              descripcion: 'Obra civil y sistema eléctrico',
            },
            {
              nombre: 'EDIFICIO CENTRO QUIRURGICO CODATEC',
              lugar: 'San Pedro Sula',
              descripcion: 'Obra civil y sistema eléctrico',
            },
          ],
        },
        {
          title: 'Electrificación de urbanización',
          details: [
            {
              nombre: 'VARAGAS CANALES Y ASOCIADOS',
              lugar: 'Col. Las Palmeras II Y III, Azacualpa, S.B.',
              descripcion: 'Electrificación de urbanización',
            },
            {
              nombre: 'VARAGAS CANALES Y ASOCIADOS',
              lugar: 'Col. San Ramón IV etapa, Villanueva',
              descripcion: 'Electrificación de urbanización',
            },
          ],
        },
        {
          title: 'Red telefónica',
          details: [
            {
              nombre: 'CERVECERÍA HONDUREÑA',
              lugar: 'Planta de Refrescos',
              descripcion: 'Red telefónica de 100 pares.',
            },
          ],
        },
        {
          title: 'Alimentador Eléctrico',
          details: [
            {
              nombre: 'TABACALERA HONDUREÑA',
              lugar: '',
              descripcion: 'Alimentador eléctrico SHILLER 200CV',
            },
          ],
        },
        {
          title: 'Cableado de Control',
          details: [
            {
              nombre: 'Subestación BIJAO',
              lugar: '',
              descripcion: 'Cableado de Control',
            },
          ],
        },
        {
          title: 'Red de tierra',
          details: [
            {
              nombre: 'GAS DEL CARIBE',
              lugar: 'Omoa, Cortés',
              descripcion: 'Red de tierra para sistema depósito gas',
            },
          ],
        },
        {
          title: 'Sistema de Iluminación',
          details: [
            {
              nombre: 'ESTADIO LAS AMÉRICAS',
              lugar: 'Trinidad, S.B.',
              descripcion: 'Sistema de Iluminación',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
span.header-theme{
  color: #263238;
}
.chip-detail{
  color: #C62828;
}
#carousel{
  height:auto;
  min-height: 80vh;
}
@media screen and (max-width: 400px) {
    #carousel{
      min-height: 95vh;
    }
    .chip-content{
      font-size: 10px;
    }
    .header-theme{
      line-height: 2;
    }
}
</style>
