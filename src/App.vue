<template>
  <div id="app">
    <v-app color="secondary" dark id="inspire">
      <v-navigation-drawer
        clipped
        v-model="drawer"
        color="secondary"
        right app>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link class="white--text" to="/">Home</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                <router-link class="white--text" to="/about">About</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left color="primary">
        <v-toolbar-title>Dicel</v-toolbar-title>
          <v-divider
            class="mx-3"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn flat>
              Nosotros
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn flat>
              Servicios
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn flat>
              Contactanos
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar-items>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
.headline-theme{
  color: #fff;
  background-color: #C62828;
  padding: 18px;
  font-size: 50px;
  letter-spacing: 10px;
}

.subheader-theme{
  padding: 18px;
  font-size: 1.875em;
  letter-spacing: 8px;
  color: #fff;
}

</style>

