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
    <!--
    <section class="dark:bg-gray-900 sm:p-60">
      <Documentation id="docs-container" class="hidden" />
      <Help id="help-container" class="hidden" />
    </section>
-->
    <Sidebar />
</template>