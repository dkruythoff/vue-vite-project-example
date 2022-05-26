<script setup lang="ts">
import { computed } from 'vue'
import { MNavigationProps } from './MNavigation.props';
import ALink from '@/components/Atoms/Link'

const props = defineProps<MNavigationProps>()
const componentClasses = computed(() => ({
  navigation: true,
  column: props.direction && props.direction === 'column'
}))
</script>

<template>
  <ul :class="componentClasses">
    <li class="navigation__item" v-for="item in items">
      <ALink v-bind.prop="item" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;

  &.column {
    flex-direction: column;
  }

  &__item {
    margin: 0;
    padding: 0.5rem;
  }
}
</style>