<template>
  <div class="content-padding">
    <div class="wow">
      <div class="form">
        <h1 class="title">Find your character</h1>
        <div class="form-info">
          <form @submit.prevent="getCharacterInformations">
            <div class="inputs">
              <div>
                <label for="characterName">Character name</label>
              </div>
              <input
                v-model="characterName"
                type="text"
                placeholder="ex: hypea"
                id="characterName"
                required
              />
            </div>
            <div>
              <div>
                <label for="realm">Realm name</label>
              </div>
              <input v-model="realm" type="text" placeholder="ex: hyjal" id="realm" required />
            </div>
            <div class="request">
              <button class="send-btn" type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="character.name">
        <Results :character="character" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue'
import { WowAPI } from '@/components/services/wow.ts'
import Results from '@/components/Results.vue'
const VITE_WOW_PROFILE_NAMESPACE = import.meta.env.VITE_WOW_PROFILE_NAMESPACE
const VITE_WOW_LOCALE = import.meta.env.VITE_WOW_LOCALE
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

const characterName = ref('')
const realm = ref('')

interface Character {
  media: string
  name: string
  id: Number
  realmName: string
  realmId: Number
  primaryProfession: []
  secondaryProfession: []
}

const props = defineProps<Character>()

const character = reactive({
  media: props.media,
  name: props.name,
  id: props.id,
  realmName: props.realmName,
  realmId: props.realmId,
  primaryProfession: props.primaryProfession,
  secondaryProfession: props.secondaryProfession
})

async function getCharacterInformations() {
  const data = await WowAPI.get(
    `profile/wow/character/${realm.value}/${characterName.value}/character-media`,
    {
      namespace: VITE_WOW_PROFILE_NAMESPACE,
      locale: VITE_WOW_LOCALE,
      access_token: VITE_API_TOKEN
    }
  )

  character.media = data.assets[0].value
  character.name = data.character.name
  character.id = data.character.id
  character.realmName = data.character.realm.slug
  character.realmId = data.character.realm.id

  
  getCharacterProfessions()
}

async function getCharacterProfessions(){

  const professions = await WowAPI.get(
    `profile/wow/character/${realm.value}/${characterName.value}/professions`,
    {
      namespace: VITE_WOW_PROFILE_NAMESPACE,
      locale: VITE_WOW_LOCALE,
      access_token: VITE_API_TOKEN
    }
  )

  character.primaryProfession = professions.primaries
  character.secondaryProfession = professions.secondaries
      
  console.log(professions)
}
</script>

<style scoped>
.wow {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #0074e0;
}
.title {
  text-align: center;
}
.form {
  min-width: 50%;
  padding: 30px;
  background-color: #e9ecef;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 4px;
}
.form-info {
  display: flex;
  justify-content: center;
  min-width: 50%;
}
form {
  min-width: 50%;
}
input {
  min-width: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border: none;
  border-radius: 4px;
  height: 30px;
  padding: 10px;
}
input:focus {
  outline: none;
  border: 1px solid hsla(160, 100%, 37%, 1);
  box-shadow: 0 0 10px #719ece;
}
button {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background: #495057;
  color: hsla(160, 100%, 37%, 1);
  border: none;
  padding: 5px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.avatar {
  max-width: 50%;
  background-color: #212529;
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.render {
  text-align: center;
}
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
