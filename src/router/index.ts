import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'settings',
      props: true,
      component: () => import('../views/SettingsPaneView.vue'),
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: () => import('../views/RecipePaneView.vue'),
    },
    {
      path: '/recipes/new',
      name: 'new recipe',
      component: () => import('../views/NewRecipeView.vue'),
    },
    // {
    //   new: '/sign_in',
    //   name: 'sign in',
    //   component: () => import('../components/AuthPane.vue'),
    // },
    {
      path: '/:catchall(.*)*',
      name: 'page not found',
      component: () => import('../views/NotFoundPageView.vue'),
    },
  ],
});

export default router
