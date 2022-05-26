<script setup lang="ts">
import { ALinkProps } from './ALink.props';

const props = defineProps<ALinkProps>()
</script>

<template>
  <a v-if="href" :href="href">
    {{ text }}
  </a>
  <template v-else>
    {{ text }}
  </template>
</template>
