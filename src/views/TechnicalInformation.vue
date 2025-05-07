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
            techStats: {
                framework: 'Vue.js',
                language: 'TypeScript',
                backend: 'Node.js (Express)',
                database: 'SQLite',
                hosting: 'Contabo VPS',
                apiVersion: 'v1.0',
                buildTool: 'Webpack'
            }
        }
    }
}
</script>

<template>
  <title>Technische Infos - CoasterDB</title>

  <Header />

  <div class="flex pt-[63px] h-screen overflow-hidden">
    <Sidebar />

    <main class="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
        <div style="margin-top: 63px;"></div>
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6 mb-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Technische Informationen</h1>
          <p class="text-gray-700 dark:text-gray-300 mb-4">Daten und Details zum Projekt:</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Frontend Framework:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.framework }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Programmiersprache:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.language }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Backend Technologie:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.backend }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Datenbank:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.database }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Hosting-Plattform:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.hosting }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">API Version:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.apiVersion }}</p>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <p class="text-gray-600 dark:text-gray-300">Build Tool:</p>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ techStats.buildTool }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
