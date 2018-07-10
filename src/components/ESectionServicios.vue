<template>
  <div>
    <v-content dark color="primary">

      <section>
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">
              Servicios
            </div>
          </v-layout>
          <v-jumbotron
            :gradient="gradient"
            dark
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          >
            <v-container fill-height>
              <v-layout align-center>
                <v-flex text-xs-center>
                  <h3 class="display-3">Gradient over Image</h3>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
      </section>

    </v-content>
  </div>
</template>

<script>

export default {
  name: 'ESectionServicios',
  props: {
    id: String,
  },
};
</script>

<style scoped>

</style>
