<template>
  <div id="webpage">
    <v-app color="primary" dark id="inspire">
      <v-navigation-drawer
        clipped
        v-model="drawer"
        class="blue-grey lighten-2"
        dark
        right
        mobile-break-point800
        app>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link class="white--text" to="/">Nosotros</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                <router-link class="white--text" to="/about">Servicios</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>email</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                <router-link class="white--text" to="/about">Contáctanos</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left color="primary">
        <a >
          <img src="./assets/dicelPro-02.png" height="56px;" width="38px;">
        </a>
        <v-toolbar-title class="nav-title">DICEL</v-toolbar-title>
          <v-divider
            class="mx-3"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn @click="$vuetify.goTo('#first', { offset: -100 })" flat>
              Nosotros
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn flat>
              Servicios
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn @click="$vuetify.goTo('GSectionContacto', { offset: -100 })" flat>
              Contáctanos
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar-items>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>

      <ASectionView id="View"/>
      <BSectionSlogan id="Slogan"/>
      <CSectionNosotros id="Nosotros"/>
      <DSectionMV id="MV"/>
      <ESectionServicios id="Servicios"/>
      <FSectionClientes id="Clientes"/>
      <GSectionContacto id="Contacto"/>
      <HSectionFooter id="Footer"/>

    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import ASectionView from '@/components/ASectionView.vue';
import BSectionSlogan from '@/components/BSectionSlogan.vue';
import CSectionNosotros from '@/components/CSectionNosotros.vue';
import DSectionMV from '@/components/DSectionMV.vue';
import ESectionServicios from '@/components/ESectionServicios.vue';
import FSectionClientes from '@/components/FSectionClientes.vue';
import GSectionContacto from '@/components/GSectionContacto.vue';
import HSectionFooter from '@/components/HSectionFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    ASectionView,
    BSectionSlogan,
    CSectionNosotros,
    DSectionMV,
    ESectionServicios,
    FSectionClientes,
    GSectionContacto,
    HSectionFooter,
  },
};
</script>

<style>
.logo{
  background-image: url("./assets/dicelPro-02.png");
  height: 38px;
  width: 38px;
}
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
.nav-title{
  font-size: 25px;
  letter-spacing: 5px;
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
  background:#EDF0F2;
  background: linear-gradient(to right bottom, #37474F 50%, #EDF0F2 50%);
  height: 20em;
}
.diagonal-divider-two {
  background:#EDF0F2;
  background: linear-gradient(to right bottom, #EDF0F2 50%, #90A4AE 50%);
  height: 20em;
}

</style>

