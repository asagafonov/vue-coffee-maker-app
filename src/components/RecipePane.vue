<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  import { useRecipesStore } from '@/stores/recipes';
  import data from '../data/cards';

  const router = useRouter();
  const route = useRoute();

  const recipeId = Number(route.params.id);
  const recipe = data.find((el) => el.id === recipeId);

  const store = useRecipesStore();
  const { setActiveRecipeId } = store;

  const closePane = () => {
    setActiveRecipeId(null);
    router.push('/');
  }

  onMounted(() => {
    setActiveRecipeId(recipeId);
  });
</script>

<template>
  <div v-if="recipe" class="recipe_pane">
    <button
      type="button"
      class="recipe_pane__close_btn"
      @click="closePane"
    >
      X
    </button>
    <p class="recipe_pane__title">{{ recipe.title }}</p>
    <img class="recipe_pane__image" :src="recipe.img" />
    <p class="recipe_pane__description">{{ recipe.description }}</p>
  </div>
</template>

<style scoped>
  .recipe_pane {
    position: relative;
  }

  .recipe_pane__close_btn {
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: 100;
    cursor: pointer;
  }

  .recipe_pane__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .recipe_pane__image {
    width: 100%;
    border-radius: 8px;
  }
</style>