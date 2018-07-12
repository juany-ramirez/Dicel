<template>
  <div class="theme-one">
    <div class="box">
      <div class="bgimg-1">
        <div class="caption">
          <span class="headline-theme">
            DICEL
          </span>
          <div class="slogan">Diseños y Construcciones Eléctricas</div>
        </div>
      </div>
    </div>
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

<style scoped>
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
