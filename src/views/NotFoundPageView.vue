<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { usePreventScroll } from '../components/composables/usePreventScroll';

  usePreventScroll();

  const router = useRouter();
</script>

<template>
  <div class="not_found">
    <p class="not_found__header">404</p>
    <p class="not_found__message">Page not found</p>
    <button id="back_to_root" type="button" @click="router.push('/')" class="btn">Back to main</button>
  </div>
</template>

<style scoped>
  .not_found {
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
    justify-content: center;
    align-items: center;
  }

  .not_found__header {
    font-size: 64px;
    color: red;
  }

  button {
    margin-top: 24px;
  }
</style>