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
            parks: [
                { name: 'Europa Park', location: 'Rust, Deutschland' },
                { name: 'Phantasialand', location: 'Brühl, Deutschland' },
                { name: 'Erlebnispark Tripsdrill', location: 'Cleebronn, Deutschland' },
                { name: 'Heide Park', location: 'Soltau, Deutschland' }
            ]
        }
    }
}
</script>

<template>
    <title>Park Übersicht – CoasterDB</title>
    <Header />
    <div style="margin-top: 63px;">
        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div v-for="park in parks" :key="park.name" class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ park.name }}</h2>
                        <p class="text-gray-700 dark:text-gray-300">
                            <span class="font-semibold">Ort:</span> {{ park.location }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Sidebar />
</template>

<style scoped>
</style>
