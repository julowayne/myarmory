<template>
  <div class="character-data">
    <div class="avatar">
      <img :src="character.media" alt="" />
      <h2 class="name">{{ character.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['character'])
</script>

<style scoped>
.character-data {
  padding: 1rem;
}

.avatar {
  display: flex;
}

.avatar img {
  border-radius: 50%;
}

.name {
  color: white;
  margin-left: 1rem;
}
</style>
