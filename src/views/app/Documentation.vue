<script lang="ts">

import Header from '../../components/app/AppHeader.vue'
import Sidebar from '../../components/app/AppSidebar.vue'

export default {
    components: {
        Header,
        Sidebar,
    }
  }

</script>

<template>
  <title>App - CoasterDB</title>

  <!-- Fester Header -->
  <Header />

  <!-- Flex-Layout für Sidebar + Hauptinhalt -->
  <div class="flex pt-[63px] h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Hauptinhalt -->
    <main class="flex-1 overflow-y-auto p-10 bg-gray-900 text-white">
      <div style="margin-top: 63px;"></div>
      <section class="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Dokumentation</h2>
            <p class="mb-6 text-lg">
                Hier könnte theoretisch recht viel stehen...<br>
                Da die Seite allerdings nur ein Schulprojekt ist, ist es nicht nötig hier viel zu schreiben.<br>
                Wenn du Fragen hast, kannst du dich gerne an mich wenden!<br>
                <br>
                Weitere Informationen und Links findest du hier:
                <ul class="list-disc pl-5">
                  <li><a href="https://github.com/MiauRizius/CoasterDB" target="_blank" class="text-blue-400 hover:underline">GitHub Repository</a></li>
                  <li><a href="https://flowbite.com/" target="_blank" class="text-blue-400 hover:underline">Flowbite Documentation</a></li>
                  <li><a href="https://vuejs.org/" target="_blank" class="text-blue-400 hover:underline">Vue.js Official Website</a></li>
                  <li><a href="https://tailwindcss.com/" target="_blank" class="text-blue-400 hover:underline">Tailwind CSS Documentation</a></li>
                </ul>
            </p>
      </section>
    </main>
  </div>
</template>