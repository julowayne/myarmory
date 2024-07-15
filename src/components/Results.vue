<template>
  <div class="character-data">
    <div class="avatar">
      <img :src="character.media" alt="" />
      <h2 class="name">{{ character.name }} - {{ character.realmName }}</h2>
    </div>
    <div class="informations">
      <div>{{ character.primaryProfession[0].profession.name }}</div>
      <div>{{ character.primaryProfession[1].profession.name }}</div>
      <div>{{ character.secondaryProfession[0].profession.name }}</div>
      <div>{{ character.secondaryProfession[1].profession.name }}</div>
      <div ref="progressContainer" style="width: 100%; height: 10px"></div>
      <div>yo</div>
      <div>yo</div>
      <div>yo</div>
      <div>yo</div>
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

.informations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 450px;
  margin-top: 1rem;
}

.informations div {
  padding: 0.7rem;
  border: 1px solid black;
}
</style>
