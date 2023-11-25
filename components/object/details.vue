<script setup>

</script>

<template>
    <div class="details ">
        <div class="details__content">
            <div class="details__content-text-blocks">
                <div class="details__text">
                    <p class="details__text-title">
                        Описание Richmond Villas
                    </p>
                    <p>Новый элитный жилой комплекс Richmond Villas расположен в популярном курортном районе Каргыджак в 10 километрах от центра Алании, одного из красивейших городов Турции. Комплекс предлагает собственную инфраструктуру, включающую всю необходимую для комфортного проживания и отдыха.</p>
                    <p>Район Каргыджак известен своими прекрасными пляжами, чистым воздухом и живописными видами. Здесь находятся многочисленные кафе, рестораны, бары, магазины, торговые центры и другие объекты городской инфраструктуры. В непосредственной близости от комплекса расположены больницы, аптеки и парки, а банки и остановки общественного транспорта позволяют легко и быстро добраться до нужного места.</p>
                    <p>Здания жилого комплекса Richmond Villas выполнены в современном архитектурном стиле. Это 2-3-этажные строения, предлагающие роскошные условия для жизни и отдыха своих обитателей. Уникальное расположение комплекса позволяет наслаждаться захватывающими дух пейзажами с видом на синее море и величественные горы.</p>
                    <p>Инфраструктура комплекса включает все необходимое для комфортного проживания. К услугам жителей и гостей Richmond Villas – бассейн, сауна, фитнес-центр, зоны для отдыха и развлечений, а также услуги профессионального и дружелюбного персонала. Все это позволяет в полной мере насладиться жизнью и отдыхом на средиземноморском побережье.</p>
                    <p>КАЖДАЯ ВИЛЛА ИМЕЕТ:<br>
                    • свою приватную территорию;<br>
                    • частный бассейн с подогревом;<br>
                    • крытый гараж;<br>
                    • систему безопасности (камеры + сигнализация);<br>
                    • систему центрального отопления и кондиционирования;<br>
                    • генератор электроэнергии;<br>
                    • автоматические гаражные ворота;<br>
                    • центральную систему управления;<br>
                    • систему автоматического полива.</p>
                </div>
                <div class="details__text">
                    <p class="details__text-title">
                        Описание Richmond Villas
                    </p>
                    <p>
                        К продаже представлены роскошные виллы премиум-класса с чистовой отделкой, предлагающие будущим владельцам все удобства и комфорт. Объекты недвижимости не меблированы, но оснащены встроенным кухонным гарнитуром высокого качества и полным комплектом сантехники. Ванные комнаты оборудованы стильными и функциональными решениями, включая джакузи, что позволит наслаждаться расслабляющим отдыхом после напряженного дня. Эстетика и стиль в каждой детали.
                    </p>
                    <p>Проект включает в себя 16 персональных вилл 5-х типов:<br>
                        Тип 1: 3+1 всего 7 вилл площадью 309,50 м² (лифт, три гаражных места, въезд в подвальный этаж)<br>
                        Тип 2: 4+1 всего 2 виллы площадью 377,60 м² (два гаражных места, въезд на наземный этаж)<br>
                        Тип 3: 4+1 всего 2 виллы площадью 268,70 м² (два гаражных места, въезд на наземный этаж)<br>
                        Тип 4: 5+1 всего 2 виллы площадью 364,90 м² (два гаражных места, въезд на высокий первый этаж)<br>
                        Тип 5: 4+1 всего 3 виллы площадью 268,70 м² (два гаражных места, въезд на высокий первый этаж).
                    </p>
                    <div class="details__text-footer">
                        <p>
                            Полный комплект
                        </p>
                        <span>
                            Richmond Villas
                        </span>
                        <button>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="details__photos">
                <div class="details__pic">
                    <img src="@/assets/images/obj-1.webp">
                </div>
                <div class="details__pic">
                    <img src="@/assets/images/obj-2.webp">
                </div>
                <div class="details__pic">
                    <img src="@/assets/images/obj-3.webp">
                </div>
                <div class="details__pic">
                    <img src="@/assets/images/obj-4.webp">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.details {
    &__content {
        display: flex;
        gap: 20px;
    }

    &__content-text-blocks {
        flex: 0 0 59%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: 899px) {
            flex: 0 0 100%;
        }
    }

    &__text {
        background-image: linear-gradient(to bottom, rgba(243, 244, 249, 0.9) 0%, rgba(243, 244, 249, 0.8) 100%);
        border-radius: 20px;
        height: 574px;
        overflow: auto;
        padding: 20px;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE и Edge */
        scrollbar-width: none;  /* Firefox */
    }

    &__text-title {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 32px;
        line-height: 1;
        letter-spacing: 0.03em;
        @media (max-width: 899px) {
            font-size: 28px;
        }
        @media (max-width: 767px) {
            font-size: 25px;
        }
        @media (max-width: 539px) {
            font-size: 23px;
        }
    }

    &__text-footer {
        & p {
            font-size: 20px;
            color: rgb(45, 121, 254);
            margin-top: 20px;
        }
        & span {
            color: rgb(45, 121, 254);
            margin-top: 20px;
        }
        & button {
            margin-top: 20px;
            background-color: rgba(51, 99, 198, 0.6);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-style: solid;
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-color: rgb(138, 183, 247);
            box-shadow: 0px 0px 15px 0px rgba(45, 121, 254, 0.72);
            width: 65px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            & svg {
                width: 30px;
                height: 30px;
            }
        }
    }

    &__photos {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @media (max-width: 899px) {
            display: none;
        }
    }

    &__pic {
        height: 276px;
        border-radius: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(210, 210, 210);
        & img {
            height: 100%;
            width: 100%;
            border-radius: 20px;
            object-fit: cover;
        }
    }
}


</style>