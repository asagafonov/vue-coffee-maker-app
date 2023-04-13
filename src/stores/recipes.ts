import { ref } from 'vue';
import { defineStore } from 'pinia';

import data from '../data/cards';
import type { RecipeCard } from '../data/cards';

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref<RecipeCard[]>([]);
  const activeRecipeId = ref<number | null>(null);

  async function getRecipes() {
    // TODO: fetch from backend
    try {
      const fetchedData = data;
      recipes.value = fetchedData;
    } catch {
      console.log('Error fetching recipes');
    }
  }

  async function addRecipe(recipe: RecipeCard) {
    // TODO: post to backend
    try {
      if (!recipe?.id) {
        recipe.id = recipes.value.length + 1;
      }
      recipes.value.push(recipe);
    } catch {
      console.log('Error adding recipe');
    }
  }

  function setActiveRecipeId(id: number | null) {
    activeRecipeId.value = id;
  }

  return {
    recipes,
    getRecipes,
    activeRecipeId,
    addRecipe,
    setActiveRecipeId,
  };
})
