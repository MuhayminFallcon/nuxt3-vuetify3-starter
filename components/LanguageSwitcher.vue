<template>
  <v-menu
    offset-y
    bottom
    transition="slide-x-reverse-transition"
    v-model:menu="menu"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        variant="text"
        base-color="text"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        @click="switchLanguage(lang.code)"
      >
        <v-list-item-icon>
          <v-icon>{{ lang.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ lang.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const menu = ref(false);

const switchLanguage = (lang: string) => {
  locale.value = lang;
  document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  menu.value = false; // Close the menu after selecting
};

const languages = [
  { code: 'en', name: 'English', icon: 'mdi-flag-uk' },
  { code: 'ar', name: 'Arabic', icon: 'mdi-flag-sa' }
];
</script>

<style scoped>

</style>
