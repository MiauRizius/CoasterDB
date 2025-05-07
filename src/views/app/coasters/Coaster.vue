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
      coaster: {
        name: '',
        park: '',
        length: '',
        height: '',
        speed: '',
        launch: '',
        inversions: 0,
        duration: '',
        manufacturer: '',
        opened: '',
        video_key: '',
        park_id: 0
      }
    };
  },
  async mounted() {
    const coasterId = this.$route.params.id;

    try {
      // Coaster-Daten laden
      const coasterRes = await fetch(`http://localhost:3000/api/coasters/${coasterId}`);
      if (!coasterRes.ok) throw new Error('Fehler beim Laden des Coasters');
      const coasterData = await coasterRes.json();

      // Parkname holen
      const parkRes = await fetch(`http://localhost:3000/api/parks/${coasterData.park_id}`);
      if (!parkRes.ok) throw new Error('Fehler beim Laden des Parks');
      const parkData = await parkRes.json();

      this.coaster = {
        name: coasterData.name,
        park: parkData.name,
        length: `${coasterData.length?.toLocaleString('de-DE')} m`,
        height: `${coasterData.height?.toLocaleString('de-DE')} m`,
        speed: `${coasterData.velocity} km/h`,
        launch: coasterData.type,
        inversions: coasterData.inversions,
        duration: `${coasterData.duration} min`,
        manufacturer: coasterData.manufacturer,
        opened: `${coasterData.release_year}`,
        video_key: coasterData.video_key,
        park_id: coasterData.park_id
      };
    } catch (err) {
      console.error(err);
    }
  }
};
</script>


<template>
    <title>{{ coaster.name }} - CoasterDB</title>
  
    <!-- Fester Header -->
    <Header />
  
    <!-- Flex-Layout für Sidebar + Inhalt -->
    <div class="flex pt-[63px] h-screen overflow-hidden">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Hauptinhalt -->
      <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
        <div style="margin-top: 63px;"></div>
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="p-6">
              <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ coaster.name }}</h1>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Park:
                <span class="font-medium text-gray-900 dark:text-white">
                  <a :href="`/app/park/${coaster.park_id}`">{{ coaster.park }}</a>
                </span>
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(value, label) in {
                    'Streckenlänge': coaster.length,
                    'Maximale Höhe': coaster.height,
                    'Maximale Geschwindigkeit': coaster.speed,
                    'Launch-System': coaster.launch,
                    'Anzahl Inversionen': coaster.inversions,
                    'Fahrtdauer': coaster.duration,
                    'Hersteller': coaster.manufacturer,
                    'Eröffnet': coaster.opened
                  }"
                  :key="label"
                  class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                >
                  <p class="text-gray-600 dark:text-gray-300">{{ label }}:</p>
                  <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ value }}</p>
                </div>
              </div>
              <!-- Embedded YouTube Video -->
              <div class="mt-6">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">On-Ride Video</h2>
                <div class="aspect-w-16 aspect-h-9">
                  <iframe 
                    width="560" 
                    height="315" 
                    :src="`https://www.youtube.com/embed/${ coaster.video_key }`" 
                    title="Blue Fire On-Ride Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>