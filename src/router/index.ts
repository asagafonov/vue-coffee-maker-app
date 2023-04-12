import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'settings',
      props: true,
      component: () => import('../components/SettingsPane.vue'),
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: () => import('../components/RecipePane.vue'),
    },
    // {
    //   new: '/recipes/new',
    //   name: 'new recipe',
    //   component: () => import('../components/NewRecipe.vue'),
    // },
            // {
    //   new: '/sign_in',
    //   name: 'sign in',
    //   component: () => import('../components/AuthPane.vue'),
    // },
    {
      path: '/:catchall(.*)*',
      name: 'page not found',
      component: () => import('../components/NotFoundPage.vue'),
    },
  ],
});

export default router
