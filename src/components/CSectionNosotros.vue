<template>
  <div class="theme-five">
    <section>
        <v-layout
          row
          wrap
          align-center
        >
          <v-flex xs12 md4 offset-xs0 offset-md1>
            <v-content>
              <div>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="text-lg-left">
                      <div class="headline-theme white--text pr-5">
                        ¿Quiénes Somos?
                      </div>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-once="true"
                        class="sobre-nosotros">
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
                        <br><br>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-content>
          </v-flex>
          <v-flex xs12 offset-md1 md5>
            <img class="bg" src="../assets/dusk-electric.jpg" height="auto;" width="100%;">
          </v-flex>
        </v-layout>
    </section>
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
.headline-theme{
  background-color: #C62828;
  width: auto;
}

img.bg{
  background-repeat: no-repeat;
  background-size: contain;
}

.box {
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
}

.parallax {
  background-image: url("../assets/dusk-electric.jpg");
  width: 100%;
  height: auto;
  opacity: .85;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.sobre-nosotros{
  font-weight: 300;
  line-height: 1.7;
  font-size: 17px;
  color: #EDF0F2;
}

.theme-content{
  padding-bottom:5em;
  padding-top:5em;
}

</style>
