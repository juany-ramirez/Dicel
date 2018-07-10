<template>
  <div class="hello">
    <div class="box">
      <div class="bgimg-1">
        <div class="caption">
          <span class="border">
            DICEL
          </span>
          <div class="slogan">Diseños y Construcciones Eléctricas</div>
        </div>
      </div>
    </div>
    <div class="parallax"></div>
    <v-app dark color="primary">
      <v-content dark color="primary">
        <!-- <section>
          <v-parallax src="@/assets/hero.jpeg" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text">
              <img src="@/assets/vuetify.png" alt="Vuetify.js" height="200">
              <h1 class="white--text mb-2 display-1 text-xs-center">DICEL</h1>
              <div class="subheading mb-3 text-xs-center">Diseños y Construcciones Eléctricas</div>
            </v-layout>
          </v-parallax>
        </section> -->

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex class="sobre-nosotros my-3" xs12 sm4>
              <div>
                DICEL tiene una permanente actitud enfocada en el respeto y responsabilidad
                en cuanto a las demandas de nuestros clientes internos y externos.
                Innovamos para mejorar nuestro servicio.
                Nos centramos en la búsqueda de soluciones eficientes para nuestros
                clientes con los mejores precios del mercado.
              </div>
            </v-flex>
          </v-layout>
        </section>

        <section>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Quienes Somos?</div>
                  </v-card-title>
                  <v-card-text>
                    DICEL es una empresa de ingeniería de diseño y construcción en
                    la rama de ingeniería electromecánica, comprometidos con el
                    bienestar de nuestros clientes, personal y comunidad; para
                    lo cual trabajamos bajo principios de calidad, seguridad y beneficio mutuo.
                    Procuramos maximizar la inversión de nuestros clientes
                    con los mejores técnicos de la región; cuidamos la seguridad de
                    nuestro personal y respetamos el entorno natural de la comunidad.
                    Las principales líneas de negocio son construcción de
                    redes eléctricas ern media tensión aéreas y subterráneas,
                    instalaciones eléctricas comerciales e industriales,
                    infraestructura y vivienda; con clientes
                    tanto en el sector público como en el sector privado.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md6 >
                    <v-card class="elevation-0 transparent" dark color="primary" >
                      <v-card-text class="text-xs-center">
                        <v-icon x-large color="accent">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Mision</div>
                      </v-card-title>
                      <v-card-text>
                        Ofrecer soluciones a nuestros clientes proporcionando servicios
                        en energía eléctrica; garantizando la seguridad
                        y calidad de nuestro trabajo basados en las normas eléctricas.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-card class="elevation-0 transparent" dark color="primary" >
                      <v-card-text class="text-xs-center" >
                        <v-icon x-large color="accent">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Vision</div>
                      </v-card-title>
                      <v-card-text>
                        Ser la empresa líder en la región, en servicios y proyectos
                        de energía eléctrica, ofreciendo a nuestros
                        clientes obras con calidad integral.
                        <br>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

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

        <section>
          <v-layout row>
            <v-flex xs12 >
              <v-card dark tile flat color="secondary">
                 <v-card-title primary-title>
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
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
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
          <v-layout row>
            <v-flex xs12 >
              <v-card dark tile flat color="primary">
                 <v-card-title secondary-title>
                  <span>&copy; 2018</span>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </section>
      </v-content>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "primaryView",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.general-information {
  color: #ff6d00;
}

.parallax {
  /* The image used */
  background-image: url("../assets/architecture-building.jpg");

  /* Set a specific height */
  min-height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bgimg-1 {
  background-image: url("../assets/architecture-building.jpg");
  min-height: 100%;
  opacity: .85;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.caption span.border {
  background-color: #C62828;
  color: #fff;
  padding: 18px;
  font-size: 50px;
  letter-spacing: 10px;
}

.slogan {
  color: #fff;
  padding: 18px;
  font-size: 30px;
  letter-spacing: 10px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.box {
  height: 95vh;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1,
  .bgimg-2,
  .bgimg-3 {
    background-attachment: scroll;
  }
}

.sobre-nosotros{
  color: #777;
  background-color:white;
  text-align:center;
  padding:50px 80px;
  text-align: justify;
}
</style>
