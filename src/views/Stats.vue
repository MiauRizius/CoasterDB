<script lang="ts">
import Header from '../components/app/AppHeader.vue'
import Sidebar from '../components/app/AppSidebar.vue'

export default {
    components: {
        Header,
        Sidebar
    },
    data() {
        return {
            stats: {
                totalParks: 10,
                totalCoasters: 25,
                totalVisitorsPerMonth: 500000,
                averageTicketPrice: 45.99,
                totalInversions: 120
            }
        }
    }
}
</script>

<template>
  <title>Datenbank-Statistiken - CoasterDB</title>

  <Header />

  <div class="flex pt-[63px] h-screen overflow-hidden">
    <Sidebar />

    <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
    <div style="margin-top: 63px;"></div>
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6 mb-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Datenbank Statistiken</h1>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Informationen zur aktuellen Datenbank:</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Anzahl der Parks:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.totalParks }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Anzahl der Achterbahnen:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.totalCoasters }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Ø Besucher / Monat:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.totalVisitorsPerMonth.toLocaleString() }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Ø Ticketpreis:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.averageTicketPrice.toFixed(2) }} €</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Anzahl der Inversionen:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.totalInversions }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
