<template>
  <div class="theme-two" >
    <v-content class="container" dark color="primary">
      <!-- <section>
        <v-parallax src="@/assets/hero.jpeg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text">
            <img src="@/assets/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">DICEL</h1>
            <div class="subheading mb-3 text-xs-center">Diseños y Construcciones Eléctricas</div>
          </v-layout>
        </v-parallax>
      </section> -->

      <section>
        <v-layout
          column
          class="my-5"
          align-center
        >
          <v-flex class="my-3" xs12 sm4>
            <div class="text-md-center font-weight-thin subheader-theme">
              DICEL tiene una permanente actitud enfocada en el respeto y responsabilidad
              en cuanto a las demandas de nuestros clientes internos y externos.
              Innovamos para mejorar nuestro servicio.
              Nos centramos en la búsqueda de soluciones eficientes para nuestros
              clientes con los mejores precios del mercado.
            </div>
          </v-flex>
        </v-layout>
      </section>

    </v-content>
  </div>
</template>

<script>

export default {
  name: 'BSectionSlogan',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.theme-two{
  background-color: #90A4AE;
}

</style>
