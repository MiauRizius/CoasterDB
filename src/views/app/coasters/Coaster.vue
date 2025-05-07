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
                name: "Blue Fire",
                park: "Europa Park",
                length: "1050 m",
                height: "38 m",
                speed: "100 km/h",
                launch: "LSM-Launch",
                inversions: 4,
                duration: "2:30 min",
                manufacturer: "MACK Rides",
                opened: "2009"
            }
        };
    }
};
</script>

<template>
    <title>{{ coaster.name }} - CoasterDB</title>
    <Header />
    <div style="margin-top: 63px;">
        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="p-6">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ coaster.name }}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Park: <span class="font-medium text-gray-900 dark:text-white">{{ coaster.park }}</span></p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Streckenlänge:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.length }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Maximale Höhe:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.height }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Maximale Geschwindigkeit:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.speed }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Launch-System:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.launch }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Anzahl Inversionen:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.inversions }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Fahrtdauer:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.duration }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Hersteller:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.manufacturer }}</p>
                            </div>
                            <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                <p class="text-gray-600 dark:text-gray-300">Eröffnet:</p>
                                <p class="text-lg font-semibold text-gray-900 dark:text-white">{{ coaster.opened }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Sidebar />
</template>

<style scoped>
</style>
