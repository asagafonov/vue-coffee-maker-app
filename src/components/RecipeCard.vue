<script setup lang="ts">
  import { watchEffect, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import { storeToRefs } from 'pinia';

  import { useRecipesStore } from '@/stores/recipes';
  import type { RecipeCard } from '../data/cards';

  const props = defineProps<{
    recipe: RecipeCard,
  }>()

  const store = useRecipesStore();
  const { activeRecipeId } = storeToRefs(store);

  const isActive = ref(activeRecipeId.value === props.recipe.id);

  watchEffect(() => {
    isActive.value = activeRecipeId.value === props.recipe.id;
  });
</script>

<template>
  <RouterLink :to="`/recipes/${props.recipe.id}`">
    <div :class="['recipe_card', { active: isActive }]">
      <p class="recipe_card__title">{{ recipe.title }}</p>
      <img class="recipe_card__image" :src="recipe.img" />
      <p class="recipe_card__description">{{ recipe.description }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
  .recipe_card {
    width: 220px;
    height: 280px;
    padding: 12px;
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    overflow: hidden;
  }

  .recipe_card__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .recipe_card__image {
    width: 100%;
    border-radius: 8px;
  }

  .recipe_card__description {
    height: 78px;
    overflow: hidden;
  }

  .active {
    border: 1.2px solid #42b883;
  }
</style>