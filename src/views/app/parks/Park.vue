<script lang="ts">
import Header from '../../../components/app/AppHeader.vue'
import Sidebar from '../../../components/app/AppSidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      park: {
        name: 'Europa Park',
        location: 'Rust, Deutschland',
        averageVisitorsPerMonth: 450000,
        averageTicketPrice: 57.5,
        area: '95 Hektar',
        openingYear: 1975
      },
      coasters: [
        { name: 'Silver Star' },
        { name: 'Blue Fire Megacoaster' },
        { name: 'Wodan Timburcoaster' },
        { name: 'Eurosat - CanCan Coaster' }
      ]
    }
  }
}
</script>

<template>
  <title>{{ park.name }} - CoasterDB</title>

  <Header />

  <div class="flex pt-[63px] h-screen overflow-hidden">
    <Sidebar />

    <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
      <div style="margin-top: 63px;"></div>
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <!-- Park Info -->
        <div class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6 mb-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ park.name }}</h1>
          <p class="text-gray-700 dark:text-gray-300 mb-2">
            <span class="font-semibold">Ort:</span> {{ park.location }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mt-4">
            <div>
              <span class="font-semibold">Ø Besucher / Monat:</span>
              {{ park.averageVisitorsPerMonth.toLocaleString() }}
            </div>
            <div>
              <span class="font-semibold">Ø Ticketpreis:</span>
              {{ park.averageTicketPrice.toFixed(2) }} €
            </div>
            <div>
              <span class="font-semibold">Fläche:</span>
              {{ park.area }}
            </div>
            <div>
              <span class="font-semibold">Eröffnet:</span>
              {{ park.openingYear }}
            </div>
          </div>
        </div>

        <!-- Achterbahnen -->
        <div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Achterbahnen in diesem Park:</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              v-for="coaster in coasters"
              :key="coaster.name"
              class="bg-white dark:bg-gray-800 shadow p-4 rounded-lg hover:shadow-lg transition-shadow"
              :href="`/app/coaster/${coaster.name.replace(' ', '_')}`"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.name }}</h3>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<style scoped>
</style>
