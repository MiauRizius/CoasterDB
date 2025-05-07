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
            parks: [] as { id: number; name: string; location: string; average_visitor_count: number; ticket_price: string }[]
        }
    },
    async mounted() {
        try {
            const response = await fetch('http://localhost:3000/api/parks');
            if (response.ok) {
                const data = await response.json();
                this.parks = data;
            } else {
                console.error('Fehler beim Laden der Parks:', response.statusText);
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der Parks:', error);
        }
    }
}
</script>

<template>
    <title>Park Übersicht - CoasterDB</title>
  
    <Header />
  
    <div class="flex pt-[63px] h-screen overflow-hidden">
      <Sidebar />
  
      <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
        <div style="margin-top: 63px;"></div>
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <a
              v-for="park in parks"
              :key="park.name"
              :href="`/app/park/${park.id}`"
              class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ park.name }}</h2>
              <p class="text-gray-700 dark:text-gray-300">
                <span class="font-semibold">Ort:</span> {{ park.location }}
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
</template>

<style scoped>
</style>
