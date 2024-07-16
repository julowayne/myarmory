<template>
  <div v-if="character" class="character-data">
    <div class="avatar">
      <img :src="character.media" alt="" />
      <h2 class="name">{{ character.name }} - {{ character.realmName }}</h2>
    </div>
    <div class="informations">
      <div>
        <div>
          {{ character.primaryProfession[0].profession.name }} -
          {{ character.primaryProfession[0].tiers[1].skill_points }}/{{
            character.primaryProfession[0].tiers[1].max_skill_points
          }}
        </div>
        <div>
          <progress
            class="profession-progress"
            max="100"
            :value="character.primaryProfession[0].tiers[1].skill_points"
          >
            {{ character.primaryProfession[0].tiers[1].skill_points }}%
          </progress>
          <!-- <progress max="100" value="50"></progress> -->
        </div>
      </div>
      <div>{{ character.primaryProfession[1].profession.name }}</div>
      <div>{{ character.secondaryProfession[0].profession.name }}</div>
      <div>{{ character.secondaryProfession[1].profession.name }}</div>
      <div>Mythic plus rating</div>
      <div>Logs</div>
      <div>Active title</div>
      <div>Mounts collected</div>
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

progress {
  width: 150px;
  height: 15px;
}
progress::-webkit-progress-bar {
  background-color: rgb(178, 255, 255);
  border-radius: 10px;
}

progress[value]::-webkit-progress-value {
  background-color: #04af2f;
}
</style>
