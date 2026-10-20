<script setup>
import { ref } from 'vue'

const pesan = ref('')

function kirim() {
  pesan.value = ''
}
</script>

<template>
  <form @submit.prevent="kirim">
    <input v-model="pesan" type="text" />
    <button type="submit">Kirim</button>
  </form>
</template>