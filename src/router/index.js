import Vue from 'vue'
import Home from '../view/Home.vue'
import AddBook from '../components/AddBook.vue'
import ListBooks from '../components/ListBooks.vue'
import EditBook from '../components/EditBook.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'ListBooks', path: '/ListBooks', component: ListBooks },
  { name: 'AddBook', path: '/AddBook', component: AddBook },
  { name: 'EditBook', path: '/EditBook/:id', component: EditBook },
]
/* 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
 */
export default routes
