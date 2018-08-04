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
            <img
            alt="dicel-img"
            class="bg"
            src="../assets/dusk-electric-1800C.jpg"
            height="auto;"
            srcset="../assets/dusk-electric-400C.jpg 400w,
                    ../assets/dusk-electric-1000C.jpg 1000w,
                    ../assets/dusk-electric-1800C.jpg 1800w"
            width="100%;">
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
