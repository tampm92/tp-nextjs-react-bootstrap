const routes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    isProtected: false,
    isShowed: true
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: 'pe-7s-user',
    isProtected: true,
    isShowed: true
  },
  {
    path: '/login',
    name: 'User Profile',
    icon: 'pe-7s-user',
    isProtected: false,
    isShowed: false
  }
]

export default routes