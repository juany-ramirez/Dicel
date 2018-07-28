<template>
  <div class="theme-one">
    <div class="box">
      <div class="bgimg-1">
        <div class="caption text-md-center">
          <img src="../assets/dicelPro-03.png" height="180px;" width="120px;"><br><br>
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
  font-size: 28px;
  letter-spacing: 10px;
}
@media only screen and (max-device-width: 1024px) {
  .slogan{
    font-size: 3vw;
  }
}
.caption {
  position: absolute;
  top: 15vh;
  width: 100%;
  text-align: center;
  color: #000;
}
.box {
  height: 95vh;
}
@media only screen and (max-device-width: 1024px) {
  .bgimg-1{
    background-attachment: scroll;
  }
}

</style>
