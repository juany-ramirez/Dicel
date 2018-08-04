<template>
  <div class="background-image">
    <section>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md8 lg6 offset-xs0 offset-md2 offset-lg3>
            <v-content class="container" dark color="primary">
              <!-- Begin MailChimp Signup Form -->
              <div id="mc_embed_signup">
                <form
                  data-aos="zoom-out"
                  data-aos-delay="500"
                  data-aos-once="true"
                  action="https://dicelhn.us18.list-manage.com/subscribe/post?u=8604a82a8053406718668b1bf&amp;id=1f416478e8"
                  method="post" id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate>
                  <div id="mc_embed_signup_scroll header-theme white--text">
                    <h2>Conéctate con Nosotros</h2>
                  <div class="indicates-required">
                    <span class="asterisk">*</span>
                    indica obligatorio
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Correo Electrónico
                      <span class="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">
                      Nombre Completo
                      <span class="asterisk">*</span>
                    </label>
                    <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
                  </div>
                  <div class="mc-field-group size1of2">
                    <label for="mce-PHONE">
                      Teléfono
                    </label>
                    <input type="text" name="PHONE" class="" value="" id="mce-PHONE">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-MMERGE2">Mensaje </label>
                    <input type="text" value="" name="MMERGE2" class="" id="mce-MMERGE2">
                  </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                      <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input
                        type="text"
                        name="b_8604a82a8053406718668b1bf_1f416478e8"
                        tabindex="-1"
                        value="">
                      </div>
                      <div class="clear">
                        <input
                        type="submit"
                        value="Enviar Información"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button">
                      </div>
                    </div>
                  </form>
                </div>
              <!--End mc_embed_signup-->
              </v-content>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GSectionContacto',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.button{
  background-color: #C62828 important!;
}
#mc_embed_signup {
  background: #263238;
  color: white;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  filter: alpha(opacity=80);
  /* Modern Browsers */
  opacity: 0.80;
  border-radius: 10px;
}
.background-image {
  background:url("../assets/beach-clouds-1800C.jpg") top right no-repeat;
  background-attachment:fixed;
  background-size: cover;
}

@media screen and (max-width: 1000px) {
    .background-image {
        background-image: url("../assets/beach-clouds-1000C.jpg");
    }
}

@media screen and (max-width: 400px) {
    .background-image {
        background-image: url("../assets/beach-clouds-400C.jpg");
    }
}

@media only screen and (max-device-width: 1024px) {
  .background-image {
    background-attachment: scroll;
  }
}
</style>
