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
            coasters: [] as { id: number; name: string; location: string; average_visitor_count: number; ticket_price: string, park_id: number, park_name?: string }[]
        }
    },
    async mounted() {
        try {
            const response = await fetch('http://localhost:3000/api/coasters');
            if (response.ok) {
                const data = await response.json();
                this.coasters = await Promise.all(data.map(async (coaster: { [x: string]: any; id: number; name: string; location: string; average_visitor_count: number; ticket_price: string, park_id: number }) => {
                    // Hole den Parknamen anhand der park_id
                    const parkResponse = await fetch(`http://localhost:3000/api/parks/${coaster.park_id}`);
                    if (parkResponse.ok) {
                        const parkData = await parkResponse.json();
                        coaster.park_name = parkData.name; // Füge den Parknamen zum Coaster hinzu
                    } else {
                        console.error(`Fehler beim Laden des Parks mit ID ${coaster.park_id}`);
                    }
                    return coaster;
                }));
            } else {
                console.error('Fehler beim Laden der Achterbahnen:', response.statusText);
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der Achterbahnen:', error);
        }
    }
}
</script>

<template>
    <title>Coaster Übersicht - CoasterDB</title>
  
    <Header />
  
    <div class="flex pt-[63px] h-screen overflow-hidden">
      <Sidebar />
  
      <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
        <div style="margin-top: 63px;"></div>
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <a
              v-for="coaster in coasters"
              :key="coaster.id"
              :href="`/app/coaster/${coaster.id}`"
              class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {{ coaster.name }}
              </h2>
              <p class="text-gray-700 dark:text-gray-300">
                <span class="font-semibold">Park:</span> {{ coaster.park_name || 'Unbekannt' }}
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
</template>

<style scoped>
</style>
