<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useRecipesStore } from '@/stores/recipes';
  import { usePopupsStore } from '@/stores/popups';

  import RecipeCard from './RecipeCard.vue';

  const recipesState = useRecipesStore();
  const popupsState = usePopupsStore();

  const { getRecipes } = recipesState;
  const { recipes } = storeToRefs(recipesState);
  const { setActiveRecipeId } = recipesState;

  const { isPopupActive } = storeToRefs(popupsState);
  const { setIsPopupActive } = popupsState;

  const router = useRouter();

  onMounted(() => {
    getRecipes();
  });

  const handleCloseShader = () => {
    setIsPopupActive(false);
    setActiveRecipeId(null);
    router.push('/');
  };
</script>

<template>
  <Transition appear>
    <div v-if="isPopupActive" class="shader" @click="handleCloseShader" />
  </Transition>
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

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>