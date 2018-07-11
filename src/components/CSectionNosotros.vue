<template>
  <div class="theme-three">
    <v-content light color="primary">
      <section>
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 md6>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline-theme">Quienes Somos?</div>
                </v-card-title>
                <v-card-text>
                 <div class="sobre-nosotros">
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
                 </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 class="parallax" >
              <div >

              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'CSectionNosotros',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.theme-three{
  background-color: #EDF0F2;
}


.parallax {
  /* The image used */
  background-image: url("../assets/clouds-current.jpg");

  /* Set a specific height */
  min-height: 500px;
  width: auto;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.sobre-nosotros{
  line-height: 2;
  color: #263238;
}

</style>
