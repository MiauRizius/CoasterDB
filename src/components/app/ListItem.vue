<script lang="ts">

export default {
    props: {
        name: String,
        park: String,
        length: String,
        height: String,
        speed: String
    },
    components: {

    }
}

</script>

<template>
    <tr class="border-b dark:border-gray-700">
        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ name }}</th>
        <td class="px-4 py-3">{{ park }}</td>
        <td class="px-4 py-3">{{ length }}</td>
        <td class="px-4 py-3">{{ height }}</td>
        <td class="px-4 py-3">{{ speed }}</td>
    </tr>
</template>