<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';

  import { useRecipesStore } from '@/stores/recipes';

  const store = useRecipesStore();
  const { recipes } = storeToRefs(store);

  const router = useRouter();

  const handleRandomRecipeClick = () => {
    const randomRecipeId = Math.floor(Math.random() * recipes.value?.length);
    router.push(`/recipes/${randomRecipeId}`);
  };
</script>

<template>
  <div class="settings_pane">
    <p class="settings_pane__text">Choose any recipe from the list of use controls</p>
    <button type="button" @click="handleRandomRecipeClick">Choose random recipe</button>
    <button type="button">Add your recipe</button>
  </div>
</template>

<style scoped>
  .settings_pane {
    position: fixed;
    background: #FFFFFF;
    top: 0;
    right: 0;
    height: 100%;
    width: 220px;
    padding: 60px 20px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .settings_pane__text {
    text-align: center;
    margin-bottom: 32px;
  }

  .settings_pane button {
    border-radius: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    height: 32px;
    background-color: #42b883;
    color: #FFFFFF;
    font-weight: bold;
  }

  .settings_pane button:hover {
    background-color: #FFFFFF;
    color: #000;
    border: 1px solid #42b883;
  }
</style>