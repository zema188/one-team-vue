<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="slide">
      <div class="slide__block">
        <img class="pic" src="@/assets/images/1_6.webp">
        <div class="info">
          <div class="subtitle">
            Turkey
          </div>
          <button class="btn btn-catalog">
            Перейти к каталогу
            <icons-base
              class=""
              width="25"
              height="25"
              icon-name="earth"
            ><icons-earth /></icons-base>
          </button>
          <p>
            Побережье Средиземного моря, уютные бухты Эгейского моря. В нашей актуальной базе более 5000 объектов для жизни и инвестиций.
          </p>
        </div>
      </div>
      <div class="slide__block">
        <img class="pic" src="@/assets/images/1_6.webp">
        <div class="info">
          <div class="subtitle">
            New book
            <span>
              Для инвестиций и жизни в Турции
            </span>
          </div>
          <div class="action">
            <button class="btn-download">
              <span>Скачать</span>
            </button>
            <icons-base
              class=""
              width="70"
              height="40"
              icon-name="pdf"
            ><icons-pdf /></icons-base>
          </div>
          <div class="lists">
            <ul>
              <span class="list-subtitle">
                Популярные места:
              </span>
              <li>
                Анталья
              </li>
              <li>
                Аланья
              </li>
            </ul>
            <ul>
              <span class="list-subtitle">
                Остальные места:
              </span>
              <li>
                Фетхие
              </li>
              <li>
                Калкан
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.slide__block {
  position: relative;
  border-radius: 15px;
  padding: 50px 30px 90px;
  flex: 0 0 calc(50% - 10px);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    border-radius: 15px;
  }
}
.swiper {
  border-radius: 15px !important;
}
.slide {
  display: flex;
  gap: 20px;
}
.pic {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  left: 0;
  top: 0;
}
.subtitle {
  font-size: 36px;
  line-height: 2;
  letter-spacing: -0.02em;
  color: rgb(242, 242, 242);
  opacity: 1;
  margin-bottom: 30px;
  & span {
    font-size: 15px;
    line-height: 1.6;
    display: block;
  }
}
.info {
  position: relative;
  z-index: 1;
}
.btn-catalog {
  display: flex;
  gap: 10px;
  color: rgb(242, 242, 242);
  border: 2px solid rgb(211, 206, 206) !important;
  background-color: rgba(0, 0, 0, 0.31);
  border: 20px;
  font-size: 15px;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.5);
  padding: 10px 14px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(3, 41, 105, 0);
    border-color: rgb(204, 204, 204);
    color: rgb(255, 255, 255)!important;
  }
  & svg {
      fill: #fff;
  }
}
p {
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0em;
  color: rgb(242, 242, 242);
  opacity: 1;
  max-width: 500px;
}

.btn-download{
  display: block;
  padding: 2px 10px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
}

.btn-download span{
  position: relative;
  z-index: 2;
}

.btn-download:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--var-blue);
  transition: all .35s;
}

.btn-download:hover{
  color: #fff;
}

.btn-download:hover:after{
  width: 100%;
}

.list-subtitle {
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0em;
  color: rgb(242, 242, 242);
  opacity: 1;
  text-decoration: underline;
  margin-bottom: 5px;
}
.lists {
  display: flex;
  column-gap: 50px;
  row-gap: 10px;
  flex-wrap: wrap;
}
ul {
  display: flex;
  gap: 10px;
  flex-direction: column;
  li {
    color: rgb(242, 242, 242);
  }
}

.action {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}
</style>