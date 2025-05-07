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
import Documentation from "../../views/app/Documentation.vue"
import Help from "../../views/app/Help.vue"

export default {
    components: {
        Header,
        Sidebar,
        ListItem,
        Entry,
        Documentation,
        Help
    },
  mounted() {
    var current_page = "";
    setInterval(() => {
      const docs = document.getElementById("docs-container");
      const help = document.getElementById("docs-container");

      if (current_page == window.location.href.replace("https://", "").split("/")[4]) return;
      current_page = window.location.href.replace("https://", "").split("/")[4];

      switch (window.location.href.replace("https://", "").split("/")[4]) {
        case "docs":
          if (docs?.classList.contains('hidden')) docs?.classList.remove('hidden'); else help?.classList.add('hidden');
          break;

        case "help":
          if (help?.classList.contains('hidden')) help?.classList.remove('hidden'); else docs?.classList.add('hidden');
          break;

        default:
          break;
      }
    }, 1000);
  }
}

</script>

<template>
    <title>App - CoasterDB</title>
    <Header />

    <!-- Neue Anleitung -->
    <div style="margin-top: 63px;">
    <section class="dark:bg-gray-900 sm:p-10">
        <div class="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 class="text-2xl font-semibold mb-4">Willkommen auf CoasterDB!</h2>
            <p class="mb-6 text-lg">
                Um mit CoasterDB zu arbeiten, kannst du in der Sidebar unter <strong>Kategorien -> Parks/Attraktionen</strong> wählen, um Informationen zu verschiedenen Freizeitparks und deren Attraktionen zu erhalten.
                Wähle einfach den gewünschten Park oder die Attraktion aus, um mehr Details zu sehen!
            </p>
            <p class="text-lg">
                Viel Spaß beim Entdecken der spannendsten Freizeitparks und Achterbahnen!
            </p>
        </div>
    </section>
    </div>

    <!-- Sidebar -->
    <Sidebar />
</template>
