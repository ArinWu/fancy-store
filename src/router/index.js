import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Category from '@/components/category/Category'
import Cart from '@/components/cart/Cart'
import Member from '@/components/member/Member'
import Info from '@/components/member/Info'
import Order from '@/components/order/Order'
import Address from '@/components/address/Address'
import AddAddress from '@/components/address/AddAddress'
import Detail from '@/components/detail/Detail'
import OrderWait from '@/components/order/OrderWait'
import WaitPay from '@/components/order/WaitPay'
import WaitDeliver from '@/components/order/WaitDeliver'
import WaitReceive from '@/components/order/WaitReceive'
import OrderDown from '@/components/order/OrderDown'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/addaddress',
      component: AddAddress
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/orderwait',
      component: OrderWait
    },
    {
      path: '/waitpay',
      component: WaitPay
    },
    {
      path: '/waitdeliver',
      component: WaitDeliver
    },
    {
      path: '/waitreceive',
      component: WaitReceive
    },
    {
      path: '/orderdown',
      component: OrderDown
    },
  ]
})
