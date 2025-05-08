<script lang="ts">

import Discord from './icons/Discord.vue';

export default {
    components: {
        Discord
    }
}

</script>

<template>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
                <img src="https://www.hwg-wadern.de/fileadmin/hwg/lay/favicons/favicon-96x96.png" class="mr-3 h-6 sm:h-9 rounded-full" alt="MaukiLogo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CoasterDB</span>
            </a>
            <div class="flex items-center lg:order-2">
                <p href="/authorize" class="text-gray-800 dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"><Discord></Discord></p>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Über das Projekt
                        </a>
                    </li>
                    <li>
                        <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                            Dokumentation
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>