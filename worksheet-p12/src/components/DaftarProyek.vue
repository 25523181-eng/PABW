<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const tampil = computed(() =>
  state.kategoriAktif === 'semua'
    ? state.daftarProyek
    : state.daftarProyek.filter(p => p.jenis === state.kategoriAktif)
)
</script>

<template>
  <article v-for="proyek in tampil" :key="proyek.id">
    <h3>{{ proyek.judul }}</h3>
    <p>{{ proyek.jenis }} · {{ proyek.tahun }}</p>
    <p>{{ proyek.selesai ? 'Selesai' : 'Dalam pengerjaan' }}</p>
  </article>
</template>