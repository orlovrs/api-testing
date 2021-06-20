<template>
  <div class="container">
    <b-nav pills class="my-3">
      <b-nav-item to="/requests" exact-active-class="active">
        Запросы
      </b-nav-item>
      <b-nav-item to="/tests" exact-active-class="active">Тесты</b-nav-item>
    </b-nav>
    <Nuxt />
  </div>
</template>
