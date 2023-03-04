
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'brandcolors', component: () => import('pages/BrandColor.vue') },
      { path: 'flexbox', component: () => import('pages/Flexbox.vue') },
      { path: 'cloneyoutube', component: () => import('pages/CloneYoutube.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
