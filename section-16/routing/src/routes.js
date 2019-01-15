import Home from './components/view/Home'
import User from './components/view/User'

import UserDetails from './components/user/UserDetails'
import UserEdit from './components/user/UserEdit'

export default [
  { path: '', component: Home },
  { path: '/user', component: User, children: [
    { path: ':id', component: UserDetails, name: 'userRoot' },
    { path: ':id/edit', component: UserEdit }
  ]},
  { path: '*', redirect: '/' }
];
