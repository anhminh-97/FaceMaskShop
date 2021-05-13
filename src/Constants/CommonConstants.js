import Image1 from 'Assets/Images/01.jpg'
import Image2 from 'Assets/Images/02.jpg'
import Image3 from 'Assets/Images/03.jpg'
import Image4 from 'Assets/Images/04.jpg'
import Image5 from 'Assets/Images/05.jpg'
import Image6 from 'Assets/Images/06.jpg'
import Image7 from 'Assets/Images/07.jpg'
import Image8 from 'Assets/Images/08.jpg'
import Product3 from 'Assets/Images/10.jpg'
import Product2 from 'Assets/Images/11.jpg'
import Product4 from 'Assets/Images/15.jpg'
import Product1 from 'Assets/Images/16.jpg'
import Product6 from 'Assets/Images/12.jpg'
import Product7 from 'Assets/Images/13.jpg'
import Intro2 from 'Assets/Icons/ic-3-layers.svg'
import Intro1 from 'Assets/Icons/ic-fits-all.svg'
import Intro3 from 'Assets/Icons/ic-washable.svg'

export const COLORS = {
  blue: '#0A1FDB',
  light_gray: '#dcdcdc',
  light_pink: 'rgb(253 248 236)',
  pink: 'rgb(254 156 122)',
}
export const ROUTER = {
  Home: '/',
  Login: '/login',
  Register: '/register',
  Forbidden: '/forbidden',
  ProductDetail: '/product-detail',
  Shop: '/shop',
  FAQ: '/faq',
  Contact: '/contact',
  Checkout: '/checkout',
  Payment: '/payment',
  Profile: '/profile',
  OrderSuccess: '/orderSuccess',
  AddProduct: '/add-product',
  AllProducts: '/all-products',
  Dashboard: '/dashboard',
  AllOrders: '/all-orders',
  AddOrder: '/add-order',
  OrderDetail: '/order-detail',
}

export const LAYOUT_WIDTH = {
  SM: 'max-width: 576px',
  MD: 'min-width: 720px',
  LG: 'min-width: 960px',
  XL: 'min-width: 1140px',
}

export const tagItem = [
  {
    image: Image1,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image2,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image3,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image4,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image5,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image6,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image7,
    tag: '@wix #clothing #masks',
  },
  {
    image: Image8,
    tag: '@wix #clothing #masks',
  },
]

export const products = [
  {
    id: 1,
    name: "I'm a Product",
    price: '10.00',
    color: 'pink',
    image: [Product1, Product6, Product7],
  },
  {
    id: 2,
    name: "I'm a Product",
    price: '10.00',
    color: 'red',
    image: [Product2, Product6, Product7],
  },
  {
    id: 3,
    name: "I'm a Product",
    price: '10.00',
    color: 'yellow',
    image: [Product3, Product6, Product7],
  },
  {
    id: 4,
    name: "I'm a Product",
    price: '10.00',
    color: 'gray',
    image: [Product4, Product6, Product7],
  },
]

export const shopProduct = [
  {
    id: 1,
    name: "I'm a Product",
    price: '10.00',
    color: 'pink',
    image:
      'https://static.wixstatic.com/media/84770f_4fd1c929921046e1acee5520f78ff44d~mv2.jpg/v1/fill/w_96,h_96,q_85,usm_0.66_1.00_0.01/84770f_4fd1c929921046e1acee5520f78ff44d~mv2.webp',
  },
  {
    id: 2,
    name: "I'm a Product",
    price: '10.00',
    color: 'red',
    image: [
      'https://static.wixstatic.com/media/84770f_32b5174906e746039427179b9e077cae~mv2.jpg/v1/fill/w_96,h_96,q_85,usm_0.66_1.00_0.01/84770f_32b5174906e746039427179b9e077cae~mv2.webp',
    ],
  },
  {
    id: 3,
    name: "I'm a Product",
    price: '10.00',
    color: 'yellow',
    image: [
      'https://static.wixstatic.com/media/84770f_96be5e3c9bbd4ad8b10decf2d1aa80b7~mv2.jpg/v1/fill/w_96,h_96,q_85,usm_0.66_1.00_0.01/84770f_96be5e3c9bbd4ad8b10decf2d1aa80b7~mv2.webp',
    ],
  },
  {
    id: 4,
    name: "I'm a Product",
    price: '10.00',
    color: 'gray',
    image: [
      'https://static.wixstatic.com/media/84770f_03564240a45d424688bbb43d83063992~mv2.jpg/v1/fill/w_96,h_96,q_85,usm_0.66_1.00_0.01/84770f_03564240a45d424688bbb43d83063992~mv2.webp',
    ],
  },
]

export const introItem = [
  {
    image: Intro1,
    title: 'Fits All',
    content: "I'm a paragraph. Click here to add your own text and edit me.",
  },
  {
    image: Intro2,
    title: '3 Fabric Layers',
    content: "I'm a paragraph. Click here to add your own text and edit me.",
  },
  {
    image: Intro3,
    title: 'Washable',
    content: "I'm a paragraph. Click here to add your own text and edit me.",
  },
]

export const URL = 'http://localhost:3000'

export const API = {
  PRODUCT: `${URL}/products`,
  SHOP: `${URL}/shop`,
  USER: `${URL}/userProfile`,
  ORDER: `${URL}/order`,
}
