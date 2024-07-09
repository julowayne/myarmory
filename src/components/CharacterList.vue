<template>
  <div></div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { WowAPI } from '@/components/services/wow.ts'

const VITE_WOW_PROFILE_NAMESPACE = import.meta.env.VITE_WOW_PROFILE_NAMESPACE
const VITE_WOW_LOCALE = import.meta.env.VITE_WOW_LOCALE
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

interface Character {
  name: string
  race: string
  level: number
}

// const name = ref('Jules')
// const reverseName = computed(() => {
//   return name.value.toUpperCase()
// })

const props = defineProps<{
  characters: Character[]
}>()

// setTimeout(() => {
//   name.value = 'toto'
// }, 3_000)

WowAPI.get('profile/user/wow', {
  namespace: VITE_WOW_PROFILE_NAMESPACE,
  locale: VITE_WOW_LOCALE,
  access_token: VITE_API_TOKEN
})

// watch(name, (newName, oldName) => {
//   console.log(newName, oldName)
// })
</script>
