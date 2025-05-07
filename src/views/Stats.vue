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
        totalParks: 0,
        totalCoasters: 0,
        totalVisitorsPerMonth: 0,
        averageTicketPrice: 0,
        totalInversions: 0,
        databaseSize: 0
      }
    };
  },
  async mounted() {
  try {
    const parksRes = await fetch('http://localhost:3000/api/parks');
    const parks = await parksRes.json();
    this.stats.totalParks = parks.length;

    const totalVisitors = parks.reduce((sum: number, park: any) => sum + Number(park.average_visitor_count), 0);
    this.stats.totalVisitorsPerMonth = Math.round(totalVisitors / parks.length);

    const totalPrice = parks.reduce((sum: number, park: any) => {
      const price = parseFloat(park.ticket_price);
      return sum + price;
    }, 0);
    this.stats.averageTicketPrice = parseFloat((totalPrice / parks.length).toFixed(2));

    const coastersRes = await fetch('http://localhost:3000/api/coasters');
    const coasters = await coastersRes.json();
    this.stats.totalCoasters = coasters.length;
    this.stats.totalInversions = coasters.reduce((sum: number, coaster: any) => sum + coaster.inversions, 0);

    const sizeRes = await fetch('http://localhost:3000/api/filesize');
    const size = await sizeRes.json();
    this.stats.databaseSize = size.sizeMB;

  } catch (err) {
    console.error('Fehler beim Laden der Statistiken:', err);
  }
}

};
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
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Größe der Datenbank:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ stats.databaseSize }} MB</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
