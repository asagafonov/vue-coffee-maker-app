import { onMounted, onUnmounted } from 'vue';

export function usePreventScroll() {
  onMounted(() => {
    document.body.style.overflow = 'hidden';
  });

  onUnmounted(() => {
    document.body.style.overflow = 'visible';
  });
}