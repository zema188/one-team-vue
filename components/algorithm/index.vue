<script setup>

</script>

<template>
    <div class="algorithm container">
        <p class="algorithm__title title title_black">
            Алгоритм нашей работы
        </p>
        <div class="algorithm__list">
            <div class="algorithm__item">
                <p class="algorithm__item-step">
                    1
                </p>
                <p class="algorithm__item-subtitle">
                    Знакомимся и консультируем
                </p>
                <div class="algorithm__item-line _blue"></div>
                <p class="algorithm__item-desc">
                    Выясняем ваши пожелания, потребности, возможности.
                </p>
            </div>
            <div class="algorithm__item">
                <p class="algorithm__item-step">
                    2
                </p>
                <p class="algorithm__item-subtitle">
                    Подбираем объект с экспертизой
                </p>
                <div class="algorithm__item-line"></div>
                <p class="algorithm__item-desc _blue">
                    Делаем экспертизу и сравнение.
                </p>
                <p class="algorithm__item-desc _blue">
                    Предлагаем лучшее под ваш запрос.
                </p>
            </div>
            <div class="algorithm__item">
                <p class="algorithm__item-step">
                    3
                </p>
                <p class="algorithm__item-subtitle">
                    Оформление
                </p>
                <div class="algorithm__item-line"></div>
                <p class="algorithm__item-desc">
                    Устанавливаем вашу дальнейшую коммуникацию. Оформление.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.algorithm {
    padding-top: 50px;
    &__title {

    }

    &__list {
        display: flex;
        gap: 15px;
    }

    &__item {
        color: #333;
        padding: 25px 30px;
        background-color: rgb(247, 247, 247);
        border-radius: 15px;
        box-shadow: 0px 0px 14px -5px rgba(28, 111, 255, 0.72);
        flex: 0 0 calc(33.33% - 10px);
    }

    &__item-step {
        margin-bottom: 20px;
        padding: 6px 21px;
        background-color: rgb(6, 62, 156);
        color: rgb(255, 255, 255);
        border-radius: 12px;
        display: inline-block;
    }

    &__item-subtitle {
        margin-bottom: 15px;
        font-size: 18px;
        line-height: 1.6;
        letter-spacing: 0em;
        font-weight: 500;
    }

    &__item-line {
        margin-bottom: 15px;
        width: 100%;
        height: 2px;
        background: rgba(3, 47, 117, 0.6);
        &._blue {
            background: rgba(28, 111, 255, 0.6);;
        }
    }

    &__item-desc {
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: 0em;
        &._blue {
            color: rgb(0, 84, 165);
        }
    }
}


</style>