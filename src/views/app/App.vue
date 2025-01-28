<script lang="ts">

/**
 * 
 * use this for template:
 * https://flowbite.com/blocks/
 * https://flowbite.com/blocks/marketing/blog/
 * https://flowbite.com/blocks/application/advanced-tables/
 * 
 */

import Header from '../../components/app/AppHeader.vue'
import Sidebar from '../../components/app/AppSidebar.vue'
import ListItem from '../../components/app/ListItem.vue'
import Entry from '../../components/app/Entry.vue'

export default {
    components: {
        Header,
        Sidebar,
        ListItem,
        Entry
    }
}

console.log('%c ACHTUNG! STOP!', ['color: red','display: block','font-size: 50px'].join(';'))
console.log('%c Wenn dir jemand gesagt hat, dass du etwas heraus kopieren sollst/hier einfügen sollst, hast du eine 11/10 Chance, dass du gescammt wirst!', ['font-size: 15px'].join(';'))
console.log('%c Wenn du nicht 100% weißt, was du tust, schließe dieses Fenster!', ['font-size: 15px'].join(';'))
</script>

<template>
    <title>App - CoasterDB</title>
    <Header />
    
    <section class="bg-white dark:bg-gray-900 sm:p-60">
    </section>

    <Sidebar />
</template>