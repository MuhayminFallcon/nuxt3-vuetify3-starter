<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';
import { LIGHT_THEME, DARK_THEME } from '~/utils/themes';

const theme = useTheme();
const isDark = ref(theme.global.name.value === DARK_THEME);

// Watch for changes in isDark to ensure reactivity
watch(isDark, (newVal) => {
  theme.global.name.value = newVal ? DARK_THEME : LIGHT_THEME;
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <v-btn icon @click="toggleTheme" variant="text">
    <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
  </v-btn>
</template>