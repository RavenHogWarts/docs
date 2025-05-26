<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { CalendarClockIcon } from 'lucide-vue-next'

const { page } = useData()

const date = computed(
  () => new Date(page.value.lastUpdated!)
)
</script>

<template>
  <div class="LastUpdated">
    <CalendarClockIcon :size="20" />
    <p> {{ date.toLocaleDateString() }}</p>
  </div>
</template>

<style>
.LastUpdated {
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1em;
}
</style>