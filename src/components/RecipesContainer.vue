<script setup lang="ts">
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRecipesStore } from '@/stores/recipes';

  import RecipeCard from './RecipeCard.vue';

  const store = useRecipesStore();
  const { getRecipes } = store;
  const { recipes } = storeToRefs(store);

  onMounted(() => {
    getRecipes();
  })
</script>

<template>
  <div class="recipes_container">
    <RecipeCard
      v-for="recipe of recipes"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>

<style scoped>
  .recipes_container {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>