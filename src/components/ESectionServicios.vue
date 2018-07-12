<template>
  <div class="theme-five">
    <section>
      <div class="diagonal-divider-one"></div>
    </section>
    <section>
      <v-content dark color="primary">
        <v-layout column align-center justify-center>
          <div class="headline-theme white--text mb-3 text-xs-center">
            Servicios
          </div>
        </v-layout>
      </v-content>
    </section>
    <section>
      <div class="diagonal-divider-two"></div>
    </section>
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
.theme-five{
  background-color: #263238;
}
</style>
