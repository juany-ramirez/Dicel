<template>
  <div class="bg-image">
    <section>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md8 lg6 offset-xs0 offset-md2 offset-lg3>
            <v-content class="container" dark color="primary">
              <!-- Begin MailChimp Signup Form -->
              <div elevation-24 id="mc_embed_signup">
                <form
                  action="https://facebook.us18.list-manage.com/subscribe/post?u=a32938d41cc2dd8809f9c0a90&amp;id=3c4b3dcf62"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate>
                    <div id="mc_embed_signup_scroll">
                      <h2 class="">CONÉCTATE CON DICEL</h2>
                      <div class="indicates-required">
                        <span class="asterisk">*</span>indica que es obligatorio
                      </div>
                      <div class="mc-field-group">
                        <label for="mce-EMAIL">
                          Correo Electrónico
                          <span class="asterisk">*</span>
                        </label>
                        <input
                        type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                      </div>
                      <div class="mc-field-group">
                        <label for="mce-FNAME">
                          Nombre Completo
                          <span class="asterisk">*</span>
                        </label>
                        <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
                      </div>
                      <div class="mc-field-group size1of2">
                        <label for="mce-PHONE">Teléfono</label>
                        <input type="text" name="PHONE" class="" value="" id="mce-PHONE">
                      </div>
                      <div class="mc-field-group">
                        <label for="mce-MESSAGE">Mensaje </label>
                        <input type="text" value="" name="MESSAGE" class="" id="mce-MESSAGE">
                      </div>
                      <!-- real people should not fill this in and
                      expect good things - do not remove this or risk form bot signups-->
                      <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                      </div>
                      <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text"
                        name="b_a32938d41cc2dd8809f9c0a90_3c4b3dcf62"
                        tabindex="-1"
                        value="">
                      </div>
                      <div>
                        <input type="submit"
                        value="Subscribirse"
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
  background: #101518;
  color: white;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  filter: alpha(opacity=80);
  /* Modern Browsers */
  opacity: 0.80;
  border-radius: 10px;
}
.bg-image {
  background:url("../assets/brick-brickwall.jpg") top right no-repeat;
  background-attachment:fixed;
  background-size: cover;
}
@media only screen and (max-device-width: 1024px) {
  .bg-image {
    background-attachment: scroll;
  }
}
</style>
