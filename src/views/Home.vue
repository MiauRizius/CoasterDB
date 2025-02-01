<script lang="ts">

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<template>
    <title>Home - CoasterDB</title>
    <Navbar />
        <main class="content">
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Entdecke CoasterDB!</h2>
                        <p class="mb-4 font-light">Finde interessante Fakten und on-board Videos von deutschen Achterbahnen.</p>
                        <p class="mb-4 font-medium">In dieser Web-Anwendung findest du viele Fakten, technische Daten und anderes Material zu verschiedene Achterbahnen und Parks in Deutschland.</p>
                        <a href="/app" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            Öffne die Web-App
                            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">27</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Parks</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">400</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Achterbahnen</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">785</dt>
                            <dd class="font-light text-gray-500 dark:text-gray-400">Datenbankeinträge</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </main>
    <Footer />
</template>