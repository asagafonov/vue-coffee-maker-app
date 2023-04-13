import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePopupsStore = defineStore('popups', () => {
  const isPopupActive = ref<boolean>(false);

  function setIsPopupActive(newValue: boolean) {
    isPopupActive.value = newValue;
  }

  return {
    isPopupActive,
    setIsPopupActive,
  };
})
