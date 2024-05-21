<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const paramsId = route.params.id;
</script>

<template>
    <main>
        <h1>{{ paramsId }} Fight!</h1>
    </main>
</template>
