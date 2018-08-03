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
                      <v-icon x-large color="accent">lightbulb_outline</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="header-theme">Misión</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="content-group">
                        Ofrecer soluciones a nuestros clientes proporcionando servicios
                        en energía eléctrica; garantizando la seguridad
                        y calidad de nuestro trabajo basados en las normas eléctricas.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent" dark color="secondary" >
                    <v-card-text class="text-xs-center" >
                      <v-icon x-large color="accent">visibility</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="header-theme text-xs-center">Visión</div>
                    </v-card-title>
                    <v-card-text>
                      <p class="content-group">
                        Ser la empresa líder en la región, en servicios y proyectos
                        de energía eléctrica, ofreciendo a nuestros
                        clientes obras con calidad integral.
                      </p>
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
    <section>
      <div class="diagonal-divider"></div>
    </section>
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
.content-group{
  font-weight: 300;
  line-height: 1.7;
  font-size: 17px;
  color: #EDF0F2;
  padding: 1.4em;
}
</style>
