<template>
  <div id="webpage">
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
.theme-two{
  background-color: #90A4AE;
}
.theme-three{
  background-color: #EDF0F2;
}
.theme-four{
  background-color: #37474F;
}
.theme-five{
  background-color: #263238;
}
.theme-six{
  background-color: #C62828;
}
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
.header-theme{
  color: #fff;
  font-size: 50px;
  letter-spacing: 10px;
  border-bottom: 10px solid #C62828;
  padding-bottom: 0.25em;
}
.diagonal-divider-one {
  background:#263238;
  background: linear-gradient(to right bottom, #37474F 50%, #263238 50%);
  height: 20em;
}
.diagonal-divider-two {
  background:#263238;
  background: linear-gradient(to right bottom, #263238 50%, #90A4AE 50%);
  height: 20em;
}

</style>

