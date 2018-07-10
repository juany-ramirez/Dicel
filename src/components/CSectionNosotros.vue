<template>
  <div>
    <v-content dark color="primary">
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
.sobre-nosotros{
  background-color:white;
  text-align:center;
  padding:50px 80px;
  text-align: justify;
}
</style>
