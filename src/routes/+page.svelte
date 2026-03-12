
<script lang="ts">
    import Teachers from "$lib/components/teachers.svelte";
    import Testimonails from "$lib/components/testimonails.svelte";
</script>

<svelte:head>
    <title>Shalom Ivrit - Курсы иврита онлайн | Изучение иврита с нуля</title>
    <meta name="description" content="Изучение иврита онлайн с профессиональными преподавателями. Стандартные и интенсивные курсы, индивидуальные занятия. Начните говорить на иврите уже через 5 месяцев!" />
    <meta name="keywords" content="иврит, курсы иврита, изучение иврита, иврит онлайн, уроки иврита, Hebrew courses, учить иврит" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://shalomivrit.ru/" />
    <meta property="og:title" content="Shalom Ivrit - Курсы иврита онлайн" />
    <meta property="og:description" content="Изучение иврита онлайн с профессиональными преподавателями. Начните говорить на иврите уже через 5 месяцев!" />
    <meta property="og:image" content="https://shalomivrit.ru/shalomivrit-home-hero-1.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://shalomivrit.ru/" />
    <meta property="twitter:title" content="Shalom Ivrit - Курсы иврита онлайн" />
    <meta property="twitter:description" content="Изучение иврита онлайн с профессиональными преподавателями. Начните говорить на иврите уже через 5 месяцев!" />
    <meta property="twitter:image" content="https://shalomivrit.ru/shalomivrit-home-hero-1.png" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Russian" />
    <link rel="canonical" href="https://shalomivrit.ru/" />
</svelte:head>

    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="text-2xl font-extrabold tracking-tight text-blue-600">
                Shalom<span class="text-gray-800">Ivrit</span>
            </div>
            <nav class="hidden w-full max-w-md md:flex md:justify-between">
                <a href="#benefits" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Преимущества</a>
                <a href="#teachers" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Преподаватели</a>
                <a href="#pricing" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">Цены</a>
                <a href="#faq" class="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQ</a>
            </nav>
            <div class="flex space-x-4 items-center">
                <a href="https://wa.me/79859317601" class="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors" aria-label="Contact on WhatsApp">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    <span class="hidden sm:inline">WhatsApp</span>
                </a>
                <a href="tel:+79859317601" class="flex items-center hover:opacity-80 transition-opacity" aria-label="Contact on imo">
                    <img src="/imo-logo.png" alt="imo" class="w-5 h-5" />
                </a>
            </div>
        </div>
    </header>

    <main>
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div class="flex-1 space-y-8 text-center lg:text-left">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Выучить Иврит <span class="text-blue-600">Быстро</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Изучение иврита — это увлекательный и полезный процесс. С нашими методиками вас ждет быстрое продвижение в языке, и уже через несколько уроков вы будете читать и писать, а через 5 месяцев и разговаривать.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#pricing" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-center">
                        Начать обучение
                    </a>
                    <a href="#faq" class="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors text-center">
                        Узнать больше
                    </a>
                </div>
            </div>
            <div class="flex-1 w-full max-w-lg lg:max-w-full">
                <img src="/shalomivrit-home-hero-1.png" alt="Students learning online illustration" class="w-full">
            </div>
        </section>

        <section id="benefits" class="bg-white border-y border-gray-100 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Почему выбирают нас</h2>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div class="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Пока все чего-то ждут</h3>
                        <p class="text-gray-600 leading-relaxed">Не теряйте время и начинайте учить иврит! Это полезно для мозга и поможет сохранить психику в карантине. Подключите к изучению иврита друзей.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Удобное для вас время</h3>
                        <p class="text-gray-600 leading-relaxed">Есть утренние, дневные и вечерние группы (5-7 человек), а также группы по выходным.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Все уровни</h3>
                        <p class="text-gray-600 leading-relaxed">С нуля и для продолжающих изучение. Подберем подходящую группу для вашего уровня знания языка.</p>
                    </div>
                    <div class="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Быстрый результат</h3>
                        <p class="text-gray-600 leading-relaxed">Через 1 месяц вы сможете читать и писать на иврите, а через 5 месяцев — разговаривать сами и понимать других.</p>
                    </div>
                </div>
            </div>
        </section>

        <Teachers />

        <section id="pricing" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Наши цены</h2>
                    <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Выберите подходящий формат обучения</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-blue-600 hover:shadow-xl transition-all relative">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Стандартный курс</h3>
                        <p class="text-gray-500 mb-6 text-sm flex-grow">Один раз в неделю по 2,5-3 часа</p>
                        <div class="text-3xl font-extrabold text-gray-900 mb-6">
                            от 6 950 ₽<span class="text-base font-normal text-gray-500"> / мес</span>
                        </div>
                        <a href="/payment?payment_value=6950" class="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block">Оплатить</a>
                    </div>

                    <div class="border-2 border-blue-600 bg-blue-50 rounded-2xl p-8 flex flex-col shadow-lg relative transform lg:-translate-y-4">
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Популярный
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Интенсивный курс</h3>
                        <p class="text-gray-600 mb-6 text-sm flex-grow">Два раза в неделю по 2 часа</p>
                        <div class="text-3xl font-extrabold text-blue-600 mb-6">
                            7 500 ₽<span class="text-base font-normal text-gray-500"> / мес</span>
                        </div>
                        <a href="/payment?payment_value=7500" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md text-center block">Оплатить</a>
                    </div>

                    <div class="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-blue-600 hover:shadow-xl transition-all relative">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Индивидуальный</h3>
                        <p class="text-gray-500 mb-6 text-sm flex-grow">По вашему личному расписанию</p>
                        <div class="text-3xl font-extrabold text-gray-900 mb-6">
                            от 2 500 ₽<span class="text-base font-normal text-gray-500"> / час</span>
                        </div>
                        <a href="/payment?payment_value=2500" class="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block">Оплатить</a>
                    </div>

                    <div class="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-blue-600 hover:shadow-xl transition-all relative">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Пробный урок</h3>
                        <p class="text-gray-500 mb-6 text-sm flex-grow">Разовое занятие для оценки уровня</p>
                        <div class="text-3xl font-extrabold text-gray-900 mb-6">
                            1 700 ₽<span class="text-base font-normal text-gray-500"> / час</span>
                        </div>
                        <a href="/payment?payment_value=1700" class="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block">Оплатить</a>
                    </div>
                </div>
            </div>
        </section>

        <Testimonails />

        <section id="faq" class="py-20 bg-white border-b border-gray-100">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Часто задаваемые вопросы</h2>
                </div>
                <div class="space-y-6">
                    <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Сколько времени занимает обучение?</h4>
                        <p class="text-gray-600 leading-relaxed">Базово читать и писать начинают уже после 1 месяца. Разговаривать через 5 месяцев.</p>
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Сколько человек в группе?</h4>
                        <p class="text-gray-600 leading-relaxed">Обычно группа состоит из 5-7 человек, одинакового уровня знания языка и степени усваеваемости материала.</p>
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Возможно ли заниматься индивидуально и по какой цене?</h4>
                        <p class="text-gray-600 leading-relaxed">Да, возможно, 2500р за полтора часа.</p>
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Я хочу только разговорный иврит без углублений в грамматику, есть такое?</h4>
                        <p class="text-gray-600 leading-relaxed">Да, есть группы с акцентом на разговорный иврит.</p>
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Если уже есть какие-то знания иврита, есть ли группы для продолжающих изучение?</h4>
                        <p class="text-gray-600 leading-relaxed">Есть, и можно подобрать группу с любого уровня изучения (Алеф начало/середина/конец, Бэт начало/продолжение, Гимел и т.д.).</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-900 text-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">Готовы Записаться?</h2>
            <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Регистрируйтесь прямо сейчас, и наш координатор свяжется с вами в ближайшее время для подбора группы.</p>
            
            <a href="https://forms.gle/YxSTnB6YzUabtMuC6" class="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50 mb-12">
                Записаться на курс
            </a>

            <div class="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg mt-24">
                <a href="tel:+79859317601" class="flex items-center text-gray-300 hover:text-white transition-colors">
                    <svg class="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    +7 985 931-76-01
                </a>
                <span class="hidden sm:inline text-gray-600">|</span>
                <a href="tel:+79859317601" class="flex items-center text-gray-300 hover:text-white transition-colors" aria-label="Contact on imo">
                    <img src="/imo-logo.png" alt="imo" class="w-6 h-6 mr-3" />
                    imo
                </a>
                <span class="hidden sm:inline text-gray-600">|</span>
                <a href="https://wa.me/79859317601" class="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <svg class="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    Whatsapp
                </a>
            </div>
        </div>

        <div class="border-t border-gray-800 py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                <div class="flex flex-col md:flex-row gap-4 text-center md:text-left">
                    <span>ИП Нахшина Тамара Алексеевна</span>
                    <span class="hidden md:inline">•</span>
                    <span>ИНН: 781307406309</span>
                </div>
                <div>
                    <a href="#" class="hover:text-gray-300 transition-colors underline decoration-gray-700">Договор Оферты</a>
                </div>
            </div>
        </div>
    </footer>
