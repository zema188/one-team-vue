<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
let slidePerView = ref(4)
let spaceBetween = ref(30)
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

defineProps({
  name: {
    type: String,
    required: true
  },
});
onMounted(() => {
  window.addEventListener('resize', function(e) {
    const widthWindow = window.innerWidth
    if(widthWindow > 1023) {
      slidePerView.value = 4
    }
    if(widthWindow <= 1023) {
      slidePerView.value = 3
    }
    if(widthWindow <= 767) {
      slidePerView.value = 2
      spaceBetween.value = 15
    }
    if(widthWindow <= 539) {
      slidePerView.value = 1
    }
  });
})
</script>

<template>
  <swiper
    :slides-per-view="slidePerView"
    :space-between="spaceBetween"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="slide slide_text">
      <p class="title">
        Инструкция
        <span>
          по покупке
        </span>
      </p>
      <p class="desc">
        Правильные шаги по покупке в {{ name }}
      </p>
      <layouts-button
          class="header__bottom-get-catalog"
          :styles="['btn_white']"
          :type="'button'"
      >
          Подробнее
      </layouts-button>
    </swiper-slide>
    <swiper-slide class="slide slide_text">
      <p class="title">
        Инструкция
        <span>
          по районам
        </span>
      </p>
      <p class="desc">
        Сравнение локаций и районов по {{ name }}
      </p>
      <layouts-button
          class="header__bottom-get-catalog"
          :styles="['btn_white']"
          :type="'button'"
      >
          Подробнее
      </layouts-button>
    </swiper-slide>
    <swiper-slide class="slide slide_text">
      <p class="title">
        Чек-лист
        <span>
          {{ name }}
        </span>
      </p>
      <p class="desc">
        Алгоритм подбора и проверки объекта
      </p>
      <layouts-button
          class="header__bottom-get-catalog"
          :styles="['btn_white']"
          :type="'button'"
      >
          Подробнее
      </layouts-button>
    </swiper-slide>
    <swiper-slide class="slide slide_btn">
      <button class="download">
        <icons-base
          width="25"
          height="25"
          icon-name="arrow-white"
        ><icons-arrow-white /></icons-base>
      </button>
      <span>
        Скачать все файлы по {{ name }}
      </span>
    </swiper-slide>
  </swiper>
</template>


    
<style lang="scss" scoped>
.swiper {
  border-radius: 20px;
}

.slide {
  cursor: pointer;
  &_text{
    background-image: linear-gradient(to bottom, rgba(233, 226, 226, 0.8) 0%, rgba(164, 141, 76, 0.2) 100%);
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    box-shadow: 0px 0px 2px 0px rgba(186, 154, 128, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    padding: 50px 20px 30px;
    @media (max-width: 767px) {
      padding: 20px 20px;
    }
    @media (max-width: 539px) {
      min-height: 250px;
      padding: 20px 20px;
    }
  }
  &_btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    & span {
      color: var(--var-blue);
      text-align: center;
    }
  }

}
.title {
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  color: rgb(186, 156, 128);
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
  & span {
    display: block;
    margin-top: 10px;
    color: #000;
    @media (max-width: 767px) {
      margin-top: 0px;
    }
  }
}
.desc {
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}
.download {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--var-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 3px;
  opacity: 0.8;
  transition: .2s;
  &:hover {
    opacity: 1;
  }
}

</style>