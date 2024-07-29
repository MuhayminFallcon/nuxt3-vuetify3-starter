<template>
  <v-container>
    <h1>{{$t('welcome')}}</h1>
    <v-sheet
      class="mx-auto"
      max-width="800"
    >
      <v-slide-group
        v-model="model"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item
          v-for="item in state"
          class="text-center p-5"
          :key="item.id"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :class="selectedClass"
            @click="toggle"
          >
            <v-card-title>
              <h2 class="headline mb-0">{{ item.name }}</h2>
            </v-card-title>
            <v-card-text>
              <p>{{ textTrack(item.description, 100) }}</p>
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <v-btn>hello world</v-btn>
  <v-text-field>hello</v-text-field>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const state = ref([])
const error = ref(null)

const fetchitems = async () => {
  try {
    const res = await fetch('http://100.42.190.178:3387/api/items')
    if (!res.ok) {
      throw new Error('An error occurred')
    }
    const data = await res.json()
    state.value = data.data
    console.log('data are:', state.value)
  } catch (err) {
    error.value = err.message
  }
};
onMounted(fetchitems)
const textTrack = (text, length)=>{
  return text.length > length ? text.substring(0, length) + '...' : text
}
</script>

<style scoped>
.v-card {
  margin: 16px 0;
}
</style>
