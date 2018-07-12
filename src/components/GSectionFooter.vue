<template>
  <div>
    <v-content dark color="primary">
      <section>
        <v-layout row>
          <v-flex xs12 >
            <v-card dark tile flat color="secondary">
                <v-card-title primary-title >
                <div class="headline">Informacion General</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-card dark tile flat color="secondary">
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Colonia Las Mercedes, 10 avenida, 10 y 12 calle C, B8.
                    </v-list-tile-title>
                    <v-list-tile-title>
                      San Pedro Sula, Honduras, C.A.
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">query_builder</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Lunes-Viernes
                      7:00am-5:00pm
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card dark tile flat color="secondary">
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>2551-7576 / 9553-0236</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>dicel_sdrl@yahoo.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
      <v-footer class="pa-3" dark color="primary">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'GSectionFooter',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.headline, .transparent{
  padding-left: 5rem;
}
</style>
