<script lang="ts">
import { onMount, onDestroy } from 'svelte';

const testimonails = [
  {
    "name": "Анна Камынина",
    "description": "Выражает благодарность Исраэлю за его терпение и оригинальную методику, которая позволяет понимать материал любому человеку. Отмечает, что спустя 8 месяцев занятий группа могла вести диалоги, разбиралась в грамматике и обладала приличным словарным запасом, что помогло в адаптации в Израиле.",
    "initials": "АК",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Мира Элельман",
    "description": "Подчеркивает важность культурного погружения и гибкость обучения. Отмечает пользу работы с разными преподавателями и комфортный переход на онлайн-формат во время изоляции. Считает занятия отличной мотивацией для изучения связи языка и культуры.",
    "initials": "МЭ",
    "role": "Ученица интенсивного курса"
  },
  {
    "name": "Екатерина Мордовская",
    "description": "Начала учить иврит с нуля и зачитала уже на втором уроке. Благодарна за энтузиазм педагога и поддержку во время пандемии. Описывает изучение иврита как «ниточку, удерживающую на плаву» и дающую опору в сложные времена.",
    "initials": "ЕМ",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Евгения Яковлева",
    "description": "Благодарна Исраэлю за возможность узнать о традициях еврейского народа и истории языка. Отмечает, что преподаватель уделял внимание этимологии слов и их связи с культурой. Считает курсы спасением для тех, кто не знает своего родного языка.",
    "initials": "ЕЯ",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Татьяна Сергиени",
    "description": "Отмечает важность курсов для личного прогресса и самоидентификации. Несмотря на сложности с документами в других местах, здесь нашла поддержку и возможность успешно изучать язык, культуру и религию.",
    "initials": "ТС",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Далия Шахова",
    "description": "Искала особый подход к преподаванию и нашла его в методике Исраэля Минасянца. Ценит возможность обсуждать аспекты жизни в Израиле в разновозрастной группе и отмечает, что именно здесь поняла свои цели в обучении.",
    "initials": "ДШ",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Каминская Ирина",
    "description": "Занималась год с Исраэлем. Особенно впечатлена тем, что выучила алфавит за один урок. Считает обучение живым и доходчивым, выражает желание пройти курс повторно для закрепления знаний.",
    "initials": "КИ",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Лукацкая Алла",
    "description": "Пришла с нулевым уровнем и получила отличную базу по грамматике и разговорной речи. В возрасте 63 лет успешно использует знания при поездках к родным в Израиль. Подчеркивает важность правильного старта.",
    "initials": "ЛА",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Ольга Копыт",
    "description": "Считает курсы лучшими в Москве по соотношению цена/польза. Даже после двухлетнего перерыва обнаружила, что помнит многие вещи благодаря качественному подходу и хорошим учебным материалам.",
    "initials": "ОК",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Дина Гузовская",
    "description": "Описывает необычную систему Исраэля Минасянца, которая помогла заговорить с первых уроков. Благодарна за глубокое погружение в обычаи и историю страны. Поддерживает связь с одногруппниками, многие из которых успешно репатриировались.",
    "initials": "ДГ",
    "role": "Ученица стандартного курса"
  },
  {
    "name": "Михаил Марьяхин",
    "description": "Прошел первую ступень у Исраэля по рекомендации знакомых. Полученные базовые знания позволили в дальнейшем изучать язык самостоятельно. Высоко оценивает компетентность преподавателя и его рассказы о жизни в Израиле.",
    "initials": "ММ",
    "role": "Ученик стандартного курса"
  },
  {
    "name": "Борис и Александра Самолюбовы",
    "description": "Занимались полгода, пришли без знания алфавита, а ушли с навыками чтения и письма. Отмечают, что отсутствие языкового барьера по приезде в Израиль дало им отличный старт в новую жизнь.",
    "initials": "БС",
    "role": "Ученики стандартного курса"
  },
  {
    "name": "Аня Самородницкая",
    "description": "За год обучения прошла путь от незнания алфавита до свободного просмотра передач и сериалов на иврите. Отмечает понятную структуру курса и постоянную готовность преподавателя помочь.",
    "initials": "АС",
    "role": "Ученица стандартного курса"
  }
];

let currentIndex = $state(0);
let autoScrollInterval: ReturnType<typeof setInterval> | null = null;
let touchStartX = 0;
let touchEndX = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonails.length;
  resetAutoScroll();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + testimonails.length) % testimonails.length;
  resetAutoScroll();
}

function resetAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }
  startAutoScroll();
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonails.length;
  }, 5000);
}

function handleTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e: TouchEvent) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

onMount(() => {
  startAutoScroll();
});

onDestroy(() => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }
});
</script>

<section class="py-20 bg-blue-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Отзывы учеников</h2>
                </div>
                <div class="relative max-w-4xl mx-auto">
                    <div 
                        class="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                        role="region"
                        aria-label="Testimonial carousel"
                        ontouchstart={handleTouchStart}
                        ontouchend={handleTouchEnd}
                    >
                        <div class="flex text-yellow-400 mb-6">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <p class="text-gray-700 italic mb-8 leading-relaxed text-lg min-h-[120px]">
                            «{testimonails[currentIndex].description}»
                        </p>
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-4">
                                {testimonails[currentIndex].initials}
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900">{testimonails[currentIndex].name}</h4>
                                <span class="text-sm text-gray-500">{testimonails[currentIndex].role}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onclick={prevSlide}
                        class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Previous testimonial"
                    >
                        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <button
                        onclick={nextSlide}
                        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Next testimonial"
                    >
                        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <div class="flex justify-center gap-2 mt-8">
                        {#each testimonails as testimonial, index (testimonial.name)}
                        <button
                            onclick={() => { currentIndex = index; resetAutoScroll(); }}
                            class="w-2 h-2 rounded-full transition-all {index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}"
                            aria-label="Go to testimonial {index + 1}"
                        ></button>
                        {/each}
                    </div>
                </div>
            </div>
        </section>