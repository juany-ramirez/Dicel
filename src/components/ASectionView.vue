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
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ASectionView",
  props: {
    id: String
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

</style>
