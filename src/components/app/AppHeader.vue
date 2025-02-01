<script lang="ts">

export default {
  components: {

  },
  mounted() {
  }
}

</script>

<template>
<div class="antialiased bg-gray-50 dark:bg-gray-900">
    <nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
          <a href="#" class="flex items-center justify-between mr-4">
            <img
              src="https://raw.githubusercontent.com/MaukiNet/.github/main/assets/4542221e59746b200f7d3d2c96cf9210.png"
              class="mr-3 h-8 rounded-full"
              alt="CoasterDB Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoasterDB</span>
          </a>
          <form action="#" method="GET" class="hidden md:block md:pl-2">
            <label for="topbar-search" class="sr-only">Suchen</label>
            <div class="relative md:w-64 md:w-96">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Suchen"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
</div>
</template>