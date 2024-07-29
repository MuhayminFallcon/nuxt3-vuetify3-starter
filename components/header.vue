<template>
  <v-card>
    <ul class="m-5 flex gap-6">
      <li >
        <a href="/">{{ $t('welcome') }}</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <modeToggle />
    <LanguageSwitcher />
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>