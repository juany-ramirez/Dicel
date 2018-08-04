<template>
  <div class="theme-one">
    <div class="box">
      <div class="background-image">
        <div
          class="caption text-sm-center">
          <span
          data-aos="zoom-out"
          data-aos-delay="300"
          data-aos-once="true"
          class="headline-theme">
            DICEL
          </span>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            class="slogan">
            Diseños y Construcciones Eléctricas
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ASectionView',
  props: {
    id: String,
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../assets/architecture-building-1800C.jpg");
  min-height: 100%;
  opacity: .85;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 1000px) {
    .background-image {
        background-image: url("../assets/architecture-building-1000C.jpg");
    }
}

@media screen and (max-width: 400px) {
    .background-image {
        background-image: url("../assets/architecture-building-400C.jpg");
    }
    .slogan {
      font-size: 20px;
    }
}

@media only screen and (max-device-width: 1024px) {
  .background-image {
    background-attachment: scroll;
  }
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
  top: 40%;
  width: 100%;
  text-align: center;
  color: #000;
}

.box {
  height: 95vh;
}

</style>
