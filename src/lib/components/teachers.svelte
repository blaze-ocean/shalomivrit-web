<script lang="ts">
  const teachers =  [
  {
    "name": "Илья Животовский",
    "description": "Учился на филологическом факультете ГЕА им. Маймонида (2-й выпуск), проходил академические программы Еврейского университета в Иерусалиме. Преподает иврит, еврейскую историю и традицию с 1999г. в рамках формального и неформального образования в еврейских школах Москвы (ОРТ, Эц-хаим), Общинах и на курсах. Соавтор учебных пособий по ивриту. Его кредо – «просто и доступно о сложном»!",
    "imageUrl": "/teachers/ilya-zhivotovski.jpg"
  },
  {
    "name": "Марк Таловский",
    "description": "Преподает иврит с 1990 года - уже более 30 лет! Преподавал на курсах, организованных им в Новосибирске, Новокузнецке, в ульпанах Сохнута и Натива с 1992 года. Проходил обучение на разных семинарах повышения квалификации преподавателей в Москве и Израиле. На уроках также знакомятся с традициями и праздниками еврейского народа, так как язык иврит очень тесно связан со всеми аспектами жизни израильтян - скучно не бывает!",
    "imageUrl": "/teachers/mark-talovski.jpg"
  },
  {
    "name": "Лола Гильбо",
    "description": "Преподает иврит с 1993 года. Работала на курсах Сохнута, Культурного центра, в ХаБаДской школе (средние и старшие классы), в Общинном центре, на еврейских штудиях, курсах и семинарах для преподавателей иврита. Умеет объяснить, озадачить, насмешить, удивить, научить, показать, разговорить и не только!",
    "imageUrl": "/teachers/lola-gilbo.jpg"
  },
  {
    "name": "Лея Анисимова",
    "description": "С 2013 по 2022 годы преподавала иврит в еврейской школе в России. С сентября 2021 года работает в отделе гиюра Московской Хоральной Синагоги с проходящими гиюр, обучая их ивриту.",
    "imageUrl": "/teachers/leya_anisimova.jpg"
  },
  {
    "name": "Игорь Княжицкий",
    "description": "Имеет большой опыт преподавания иврита на всех уровнях: от начального (\"алеф\") до заключительного (\"птор\"), автор учебника по ивриту.",
    "imageUrl": "/teachers/igor_knyazhitsky.jpg"
  },
  {
    "name": "Ольга Подобрянская",
    "description": "Опыт преподавания – более 25 лет, многократно проводила как академические, так и интенсивные курсы.",
    "imageUrl": "/teachers/olga_podobryanskaya.jpg"
  },
  {
    "name": "Исраэль Минасянц",
    "description": "За 30 лет преподавал иврит в различных еврейских школах, ешивах и других организациях г. Москвы",
    "imageUrl": "/teachers/israel_minasyants.jpg"
  }
]
</script>
<section id="teachers" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                Наши преподаватели
            </h2>
            <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Занятия проходят в психологически комфортной атмосфере,
                подбирается индивидуальный подход к каждому ученику.
            </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each teachers as teacher (teacher.name)}
            <article
                class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
                <img
                    src="{teacher.imageUrl}"
                    alt="Фото {teacher.name}"
                    class="w-full h-80 object-cover object-top"
                />
                <div class="p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                        {teacher.name}
                    </h3>
                    <p
                        class="text-blue-600 font-medium mb-4 text-sm uppercase tracking-wide"
                    >
                        Преподаватель Иврита
                    </p>
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                        {teacher.description}
                    </p>
                </div>
            </article>
            {/each}
        </div>
    </div>
</section>
