<template>
  <div>Characters</div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import { WowAPI } from '@/components/services/wow.ts'

const VITE_WOW_PROFILE_NAMESPACE = import.meta.env.VITE_WOW_PROFILE_NAMESPACE
const VITE_WOW_LOCALE = import.meta.env.VITE_WOW_LOCALE
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

interface Character {
  name: string,
  race: string,
  level: number
}

// const props = defineProps<Character>()


onMounted(() => {
  WowAPI.get('profile/user/wow', {
    namespace: VITE_WOW_PROFILE_NAMESPACE,
    locale: VITE_WOW_LOCALE,
    access_token: VITE_API_TOKEN
  })
})
</script>
