<template>
  <header class="pt-7 pb-7 w-full flex justify-center">
    <div class="container w-full justify-between">
      <div class="flex items-center">
        <font-awesome-icon icon="fa-solid fa-bars" class="text-xl"/>
        <span class="pl-2 text-lg font-barlow cursor-pointer">MENU</span>
      </div>
      <NuxtLink to="/" class="font-barlow font-medium text-xl flex"
        >FOLSTEN SERVICES</NuxtLink
      >
      <div class="flex items-center">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-xl pr-4 cursor-pointer"/>
        <font-awesome-icon icon="fa-solid fa-user" class="text-xl pl-4 cursor-pointer"/>
      </div>
    </div>
  </header>
</template>