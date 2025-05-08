<script lang="ts">
import Header from '../../components/app/AppHeader.vue'
import Sidebar from '../../components/app/AppSidebar.vue'

export default {
    components: {
        Header,
        Sidebar
    },
    data() {
        return {
            sidebarOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
            const sidebar = document.getElementById('drawer-navigation');
            if (sidebar) {
                sidebar.classList.toggle('-translate-x-full', !this.sidebarOpen);
            }
        }
    }
}
</script>

<template>
  <title>App - CoasterDB</title>

  <Header @toggle-sidebar="toggleSidebar" />
  
  <div class="flex pt-[63px] h-screen overflow-hidden">
    <Sidebar :class="{'translate-x-0': sidebarOpen, '-translate-x-full': !sidebarOpen}" />
    
    <main class="flex-1 overflow-y-auto p-4 md:p-10 bg-gray-900 text-white">
      <div style="margin-top: 63px;"></div>
      <section class="max-w-4xl mx-auto bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Willkommen auf CoasterDB!</h2>
            <p class="mb-6 text-lg">
                Um mit CoasterDB zu arbeiten, kannst du in der Sidebar unter <strong>Kategorien -> Parks/Attraktionen</strong> wählen, um Informationen zu verschiedenen Freizeitparks und deren Attraktionen zu erhalten.
                Wähle einfach den gewünschten Park oder die Attraktion aus, um mehr Details zu sehen!
            </p>
            <p class="text-lg">
                Viel Spaß beim Entdecken der spannendsten Freizeitparks und Achterbahnen!
            </p>
      </section>
    </main>
  </div>
</template>