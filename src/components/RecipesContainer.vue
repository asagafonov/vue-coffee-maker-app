<script setup lang="ts">
  import { onMounted, ref, watchEffect } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useRecipesStore } from '@/stores/recipes';

  import RecipeCard from './RecipeCard.vue';

  const store = useRecipesStore();
  const { getRecipes } = store;
  const { recipes, activeRecipeId } = storeToRefs(store);
  const { setActiveRecipeId } = store;

  const router = useRouter();
  const route = useRoute();

  const isNewPage = ref(false);

  onMounted(() => {
    getRecipes();
  })

  watchEffect(() => {
    if (route.path.includes('/recipes/new')) {
      isNewPage.value = true;
    }
  });

  const handleCloseShader = () => {
    setActiveRecipeId(null);
    isNewPage.value = false;
    router.push('/');
  };
</script>

<template>
  <Transition appear>
    <div v-if="activeRecipeId || isNewPage" class="shader" @click="handleCloseShader" />
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