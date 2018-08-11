<template>
  <div ref="ap" id="webpage">
    <v-app color="secondary" dark id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        class="blue-grey lighten-2"
        dark
        right
        disable-resize-watcher
        temporary
        floating
        hide-overlay
        mobile-break-point="400"
        app>
        <v-list dense>
          <v-list-tile v-on:click="scroll(2)">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Nosotros
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="scroll(4)">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                Servicios
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-on:click="scroll(6)">
            <v-list-tile-action>
              <v-icon>email</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >
                Contáctanos
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar class="nav-bar" app fixed clipped-left color="primary">
        <a class="logo" v-on:click="scroll(0)" >
          <img
            class="dicel-logo"
            alt="dicel-logo"
            src=".\\assets\\dicel-original.png"
            height="64px;"
            width="auto;">
        </a>
          <v-divider
            class="mx-3"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn  v-on:click="scroll(2)" flat>
              Nosotros
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn   @click="scroll(4)" flat>
              Servicios
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn  @click="scroll(6)" flat>
              Contáctanos
            </v-btn>
          </v-toolbar-items>
          <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer">
          </v-toolbar-side-icon>
      </v-toolbar>
      <transition class="animated swing delay-5s" mode="out-in">
        <div v-if="!loader"><router-view></router-view></div>
        <div id="prueba" ref="prueba" v-if="loader" class = "prueba theme-three loader-background">
          <v-card
            color="primary"
            dark>
            <v-card-text>
              Cargando
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </div>
      </transition>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      loader: true,
      options: {
        duration: 600,
        offset: 20,
        easing: 'easeInOutCubic',
      },
    };
  },
  mounted() {
    this.loader = false;
  },
  methods: {
    scroll(number) {
      const target = this.$children[0].$children[2].$children[0].$children[number].$el.offsetTop;
      this.$vuetify.goTo(target, this.options);
      this.drawer = false;
    },
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
.loader-background{
  height: 100vh;
  width: 100vw;
  padding-top: 50vh;
  padding-left: 25vw;
  padding-right: 25vw;
}
.nav-bar{
  height: 64px;
}
.nav-title{
  font-size: 25px;
  letter-spacing: 5px;
}
.dicel-logo{
  position: absolute;
  top: 0;
  left: 0;
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
@media screen and (max-width: 400px) {
    .headline-theme{
      font-size:10vw;
    }
    .header-theme{
      font-size:10vw;
    }
}
@media screen and (max-width: 900px) {
    .logo img{
      height: 54px;
    }
    .nav-bar{
      height: 54px;
    }
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
.animated {
    visibility: visible;
}
</style>

