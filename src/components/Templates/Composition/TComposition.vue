<script setup lang="ts">
import { TCompositionProps } from './TComposition.props';
import AAppLayout from '@/components/Atoms/AppLayout';
import ALogo from '@/components/Atoms/Logo';
import MNavigation from '@/components/Molecules/Navigation';

const props = defineProps<TCompositionProps>()
</script>

<template>
  <AAppLayout>
    <template #header>
      <ALogo />
    </template>
    <template #nav>
      <MNavigation v-bind.prop="navigationSide" />
    </template>
    <template #main>
      <MNavigation v-bind.prop="navigationTop" />
      <p>More stuff. Probably other components.</p>
    </template>
  </AAppLayout>
</template>
