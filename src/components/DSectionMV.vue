<template>
  <div class="theme-four">
    <v-content dark color="primary">
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6 >
                  <v-card class="elevation-0 transparent" dark color="secondary" >
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="accent">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Mision</div>
                    </v-card-title>
                    <v-card-text>
                      Ofrecer soluciones a nuestros clientes proporcionando servicios
                      en energía eléctrica; garantizando la seguridad
                      y calidad de nuestro trabajo basados en las normas eléctricas.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent" dark color="secondary" >
                    <v-card-text class="text-xs-center" >
                      <v-icon x-large color="accent">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Vision</div>
                    </v-card-title>
                    <v-card-text>
                      Ser la empresa líder en la región, en servicios y proyectos
                      de energía eléctrica, ofreciendo a nuestros
                      clientes obras con calidad integral.
                      <br>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'DSectionMV',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.theme-four{
  background-color: #37474F;
}

</style>
