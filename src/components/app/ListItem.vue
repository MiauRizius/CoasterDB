<script lang="ts">

export default {
    props: {
        prop1: String,
        prop2: String,
        prop3: String,
        prop4: String,
        prop5: String
    },
    components: {

    }
}

</script>

<template>
    <tr class="border-b dark:border-gray-700">
        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ prop1 }}</th>
        <td class="px-4 py-3">{{ prop2 }}</td>
        <td class="px-4 py-3">{{ prop3 }}</td>
        <td class="px-4 py-3">{{ prop4 }}</td>
        <td class="px-4 py-3">{{ prop5 }}</td>
    </tr>
</template>