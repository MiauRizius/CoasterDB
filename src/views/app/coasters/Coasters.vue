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
            coasters: [
                { name: 'Blue Fire', park: 'Europa Park' },
                { name: 'Taron', park: 'Phantasialand' },
                { name: 'Silver Star', park: 'Europa Park' },
                { name: 'Karacho', park: 'Erlebnispark Tripsdrill' }
            ]
        }
    }
}
</script>

<template>
    <title>Coaster Übersicht – CoasterDB</title>
    <Header />
    <div style="margin-top: 63px;">
        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div v-for="coaster in coasters" :key="coaster.name" class="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg p-6">
                        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ coaster.name }}</h2>
                        <p class="text-gray-700 dark:text-gray-300">
                            <span class="font-semibold">Park:</span> {{ coaster.park }}
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
