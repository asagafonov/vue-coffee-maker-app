<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  import { useRecipesStore } from '@/stores/recipes';
  import { usePopupsStore } from '@/stores/popups';
  import { usePreventScroll } from './composables/usePreventScroll';
  import data from '../data/cards';

  usePreventScroll();

  const router = useRouter();
  const route = useRoute();

  const recipeId = Number(route.params.id);
  const recipe = data.find((el) => el.id === recipeId);

  const recipesState = useRecipesStore();
  const popupsState = usePopupsStore();
  const { setActiveRecipeId } = recipesState;
  const { setIsPopupActive } = popupsState;

  const closePane = () => {
    setActiveRecipeId(null);
    setIsPopupActive(false);
    router.push('/');
  }

  onMounted(() => {
    setActiveRecipeId(recipeId);
    setIsPopupActive(true);
  });
</script>

<template>
  <Transition appear>
    <div v-if="recipe" class="recipe_pane">
      <div class="recipe_pane__header">
        <p class="recipe_pane__title">{{ recipe.title }}</p>
        <button
        type="button"
        class="recipe_pane__close_btn"
        @click="closePane"
      >
        Close
      </button>
      </div>
      <img class="recipe_pane__image" :src="recipe.img" />
      <p class="recipe_pane__description">{{ recipe.description }}</p>
      <div v-if="recipe.recipe?.length" class="recipe_pane__steps_container">
        <h3 class="recipe_pane__separator_text">Preparation steps</h3>
        <div class="recipe_pane__description" v-for="step in recipe.recipe" :key="step.order">
          <p class="recipe_pane__subheader">Step {{ step.order }}</p>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .recipe_pane {
    z-index: 900;
    position: fixed;
    background: #FFFFFF;
    top: 0;
    right: 0;
    height: 100%;
    width: 520px;
    padding: 56px 20px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .recipe_pane__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 520px;
    padding: 12px 20px;
    background-color: #FFFFFF;
    z-index: 120;
  }

  .recipe_pane__close_btn {
    padding: 2px 12px;
    z-index: 100;
    cursor: pointer;
    outline: none;
    border: none;
    height: 24px;
    color: #FFFFFF;
    background: #42b883;
    border-radius: 6px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recipe_pane__close_btn:hover {
    background: #FFFFFF;
    color: #000000;
    border: 1px solid #42b883;
  }

  .recipe_pane__title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6px;
  }

  .recipe_pane__image {
    width: 100%;
    border-radius: 8px;
    margin: 12px 0;
  }

  .recipe_pane__separator_text {
    font-weight: bold;
    margin-top: 12px;
  }

  .recipe_pane__steps_container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .recipe_pane__subheader {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 6px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>