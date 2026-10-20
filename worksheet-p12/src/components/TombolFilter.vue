<script setup>
import { state, pilihKategori } from '../state.js'

const kategori = ['semua', 'web', 'desain', 'aplikasi']
</script>

<template>
  <button
    v-for="k in kategori"
    :key="k"
    :class="{ aktif: state.kategoriAktif === k }"
    @click="pilihKategori(k)"
  >
    {{ k }}
  </button>
</template>