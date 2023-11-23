<script setup>

</script>

<template>
    <div class="text">
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
    <div class="text">
        <p>К продаже представлены роскошные виллы премиум-класса с чистовой отделкой, предлагающие будущим владельцам все удобства и комфорт. Объекты недвижимости не меблированы, но оснащены встроенным кухонным гарнитуром высокого качества и полным комплектом сантехники. Ванные комнаты оборудованы стильными и функциональными решениями, включая джакузи, что позволит наслаждаться расслабляющим отдыхом после напряженного дня. Эстетика и стиль в каждой детали.</p>
        <p>Проект включает в себя 16 персональных вилл 5-х типов:<br>
        Тип 1: 3+1 всего 7 вилл площадью 309,50 м² (лифт, три гаражных места, въезд в подвальный этаж)<br>
        Тип 2: 4+1 всего 2 виллы площадью 377,60 м² (два гаражных места, въезд на наземный этаж)<br>
        Тип 3: 4+1 всего 2 виллы площадью 268,70 м² (два гаражных места, въезд на наземный этаж)<br>
        Тип 4: 5+1 всего 2 виллы площадью 364,90 м² (два гаражных места, въезд на высокий первый этаж)<br>
        Тип 5: 4+1 всего 3 виллы площадью 268,70 м² (два гаражных места, въезд на высокий первый этаж).</p>
    </div>
    <button class="btn-get">
        <span>
            Получить свежий прайс-лист и график оплаты
        </span>
        <p>
            ТМ
        </p>
    </button>
</template>

<style lang="scss" scoped>
.details__text-footer {
    width: fit-content;
    margin: 0 auto;
    & p {
        font-size: 20px;
        color: rgb(45, 121, 254);
        text-align: center;
        margin-top: 20px;
    }
    & span {
        color: rgb(45, 121, 254);
        text-align: center;
        display: block;
    }
    & button {
        margin: 20px auto 20px;
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

.btn-get {
    margin: 20px auto 0;
    color: var(--var-blue);
    background-color: rgba(3, 41, 105, 0);
    border-color: rgb(235, 235, 235);
    color: rgb(45, 121, 254)!important;
    display: flex;
    background-color: rgba(3, 41, 105, 0);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
    border-color: rgb(235, 235, 235);
    padding: 35px 35px;
    font-size: 15px;
    color: rgb(8, 88, 226);
    box-shadow: 0px 0px 14px -5px rgba(8, 88, 226, 0.72);
    width: max-content;
    transition: .2s;
    align-items: center;
    gap: 7px;
    &:hover {
        transform: scale(1.1);
    }
    & p {
        font-weight: 700;
        font-size: 20px;
    }
}
</style>