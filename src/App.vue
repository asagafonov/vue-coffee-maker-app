<script setup lang="ts">
  import { RouterView } from 'vue-router';

  import RecipesContainer from './components/RecipesContainer.vue';
</script>

<template>
  <!-- <header>
    The Coffee Maker
  </header> -->
  <div class="main_screen">
    <RecipesContainer />
    <div class="content_container">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
  header {
    padding: 12px 20px 12px 24px;
    font-weight: bold;
    font-size: 24px;
    background-color: #000000;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;
  }
  .main_screen {
    width: 100%;
  }

  .content_container {
    padding: 12px 40px 12px 0;
  }
</style>
