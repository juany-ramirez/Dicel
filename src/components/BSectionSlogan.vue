<template>
  <div class="theme-two" >
    <v-content class="container" dark color="primary">
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
</style>
