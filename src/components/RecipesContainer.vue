<script setup lang="ts">
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRecipesStore } from '@/stores/recipes';

  import RecipeCard from './RecipeCard.vue';

  const store = useRecipesStore();
  const { getRecipes } = store;
  const { recipes, activeRecipeId } = storeToRefs(store);

  onMounted(() => {
    getRecipes();
  })
</script>

<template>
  <div v-if="activeRecipeId" class="shader" @click="() => { return; }" />
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
    width: calc(100% - 220px);
  }

  .shader {
    position: fixed;
    z-index: 300;
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
</style>