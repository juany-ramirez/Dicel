<template>
  <div class="theme-three" >
    <section>
      <v-content class="container" dark color="primary">
        <v-layout
          column
          class="my-5"
          align-center
        >
          <v-flex class="my-3" xs12 sm4>
            <div class="text-md-center font-weight-thin subheader-theme">
              Contacto
            </div>
          </v-flex>
        </v-layout>
      </v-content>
    </section>
  </div>
</template>

<script>

export default {
  name: 'GSectionContacto',
  props: {
    id: String,
  },
};
</script>

<style scoped>
</style>
