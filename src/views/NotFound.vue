<script setup lang="ts">

</script>

<template>
    <div class="bg-gray-900 text-white font-sans h-screen flex justify-center items-center">
      <div class="text-center bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 class="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <p class="text-xl mb-6">Die Seite, die du suchst, wurde nicht gefunden.</p>
        <router-link
          to="/"
          class="bg-orange-500 hover:bg-orange-400 text-white py-2 px-6 rounded-md text-lg transition-all duration-200"
        >
          Zurück zur Startseite
        </router-link>
      </div>
    </div>
</template>