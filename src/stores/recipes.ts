import { ref } from 'vue';
import { defineStore } from 'pinia';

import data from '../data/cards';
import type { RecipeCard } from '../data/cards';

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref<RecipeCard[]>([]);
  const activeRecipeId = ref<number | null>(null);

  async function getRecipes() {
    try {
      const fetchedData = data;
      recipes.value = fetchedData;
    } catch {
      console.log('Error fetching recipes');
    }
  }

  function setActiveRecipeId(id: number | null) {
    activeRecipeId.value = id;
  }

  return {
    recipes,
    getRecipes,
    activeRecipeId,
    setActiveRecipeId,
  };
})
