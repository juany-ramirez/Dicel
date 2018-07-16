<template>
  <div class="footer">
      <section>
        <v-container dark color="primary">
          <v-layout row>
            <v-flex xs12 >
              <v-card dark tile flat color="secondary">
                  <v-card-title primary-title >
                  <div class="header-theme">Información General</div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout wrap row>
            <v-flex flat xs12 md6>
              <v-card flat class="transparent">
                <v-card-text>
                  <v-icon class="blue-grey-text text-lighten-2">place</v-icon>
                  Colonia Las Mercedes, 10 avenida, 10 y 12 calle C, B8.
                  San Pedro Sula, Honduras, C.A.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex flat xs12 md6>
              <v-card flat class="transparent">
                <v-card-text>
                  <v-icon class="blue-grey-text text-lighten-2">query_builder</v-icon>
                  Lunes-Viernes
                  7:00am-5:00pm
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 flat>
              <v-card flat class="transparent">
                <v-card-text>
                  <v-icon class="blue-grey-text text-lighten-2">phone</v-icon>
                  2551-7576 / 9553-0236
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 flat>
              <v-card flat class="transparent">
                <v-card-text>
                  <v-icon class="blue-grey-text text-lighten-2">email</v-icon>
                  dicel_sdrl@yahoo.com
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    <v-footer class="pa-3" dark color="primary">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>

export default {
  name: 'HSectionFooter',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.footer{
  background-color: #37474F;
}
div .header-theme{
  font-size: 23px;
}
</style>
