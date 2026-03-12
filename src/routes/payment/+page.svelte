<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";

  let email = $state("");
  let fullName = $state("");
  let amount = $state("");

  onMount(() => {
    const paymentValue = page.url.searchParams.get("payment_value");
    if (paymentValue) {
      amount = paymentValue;
    }
  });

  function handleSubmit(e: Event) {
    e.preventDefault();

    if (!email || !fullName || !amount) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const params = new URLSearchParams({
      Email: email,
      Description: fullName,
      OutSum: amount,
    });

    window.location.href = `/api/payment?${params.toString()}`;
  }
</script>

<svelte:head>
  <title>Оплата курса - Shalom Ivrit | Безопасная оплата через Robokassa</title>
  <meta name="description" content="Оплата курсов иврита онлайн. Безопасная оплата через Robokassa. Стандартные и интенсивные курсы, индивидуальные занятия." />
  <meta name="keywords" content="оплата курса иврита, оплатить иврит, robokassa, оплата онлайн" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://shalomivrit.ru/payment" />
  <meta property="og:title" content="Оплата курса - Shalom Ivrit" />
  <meta property="og:description" content="Безопасная оплата курсов иврита онлайн через Robokassa" />
  <meta property="og:image" content="https://shalomivrit.ru/shalomivrit-home-hero-1.png" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://shalomivrit.ru/payment" />
  <meta property="twitter:title" content="Оплата курса - Shalom Ivrit" />
  <meta property="twitter:description" content="Безопасная оплата курсов иврита онлайн через Robokassa" />
  <meta property="twitter:image" content="https://shalomivrit.ru/shalomivrit-home-hero-1.png" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://shalomivrit.ru/payment" />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Оплатить курс</h1>
      <p class="text-gray-600 leading-relaxed">
        Пожалуйста аккуратно введите данные в форму и нажмите кнопку "перейти к
        оплате", по информации формы мы сможем найти вас в нашей базе учеников и
        зарегистрировать Ваш платеж. Подтверждение об оплате будет выслано вам.
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <form onsubmit={handleSubmit}>
        <div class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Ваш Email
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              for="fullName"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Имя и Фамилия
            </label>
            <input
              id="fullName"
              type="text"
              bind:value={fullName}
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label
              for="amount"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Сумма в рублях
            </label>
            <input
              id="amount"
              type="number"
              bind:value={amount}
              required
              min="1"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="5000"
            />
            <p class="mt-2 text-sm text-gray-500">
              Комиссия 3%, будет добавлена к сумме
            </p>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Перейти к оплате
          </button>
        </div>
      </form>
    </div>

    <div class="mt-6 text-center">
      <a href="/" class="text-blue-600 hover:text-blue-700 font-medium">
        ← Вернуться на главную
      </a>
    </div>

    <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div class="flex">
        <svg
          class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class="text-sm text-blue-800">
          <p class="font-medium mb-1">Безопасная оплата</p>
          <p>
            Оплата производится через защищенный сервис Robokassa. Мы не храним
            данные ваших банковских карт.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
