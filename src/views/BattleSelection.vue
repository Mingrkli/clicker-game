<script setup>
import router from "../routes/routes";

const testingBattle = (number) => {
    router.push({ path: `/battle/${number}` });
};
</script>

<template>
    <main>
        <button class="btn" type="button" @click="testingBattle(1)">
            Random Battle
        </button>
    </main>
</template>
