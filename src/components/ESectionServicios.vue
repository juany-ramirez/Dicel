<template>
  <div class="theme-five">
    <section>
      <div class="diagonal-divider-one"></div>
    </section>
    <section>
      <v-content dark color="primary">
        <div class="text-xs-center">
          <span class="headline-theme white--text mb-3">
            Servicios
          </span>
        </div>
        <v-layout row align-center justify-center>

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
