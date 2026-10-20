<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  const isi = muat() // VERSI diperiksa di dalam muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <KepalaProfil :profil="profil" />
  <TombolFilter />
  <DaftarProyek />
  <FormKontak />
  <button @click="aturUlangPilihan">Atur ulang</button>
</template>
