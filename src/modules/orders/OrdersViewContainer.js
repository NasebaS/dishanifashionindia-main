// @flow
import { compose,withState } from 'recompose';

import OrdersScreen from './OrdersView';

const listData = [
  {
    id: 1,
    brand: 'Delivery by oct 25',
    title: 'Heavy Banarasi Soft Silk saree',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
    require('../../../assets/images/category/chudi.png'),
  },
  {
    id: 2,
    brand: 'Out for delivery',
    title: 'Chitrarekha Fashionable Sarees',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: require('../../../assets/images/category/saree.png'),
  },
  {
    id: 3,
    brand: 'Delivered on Wed Oct 20',
    title: 'printed mulmul cotton saree',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: require('../../../assets/images/category/kurta.png'),
  },
  {
    id: 4,
    brand: 'Delivered on Wed Oct 20',
    title: 'Aishani Graceful Kurtis',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: require('../../../assets/images/category/kurti.png'),
  },
  {
    id: 5,
    brand: 'Cancelled on Wed Oct 20',
    title: 'Chitrarekha Graceful Women Churidars',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: require('../../../assets/images/category/chudi.png'),
  },
  {
    id: 6,
    brand: 'Delivered on Sat Sep 25',
    title: 'Lehenga Choli',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: require('../../../assets/images/category/lehenga.png'),
  },
  {
    id: 7,
    brand: 'Delivered on Sat Sep 25',
    title: 'Classy Graceful Women Jeans',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image: require('../../../assets/images/category/bra.png'),
  },
  {
    id: 8,
    brand: 'Delivered on Fri Sep 24',
    title: 'GRAY JACKLINE PRINTED GOWN WITH JACKET',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: require('../../../assets/images/category/top.png'),
  },
  {
    id: 9,
    brand: 'Delivered on Fri Sep 24',
    title: 'Classic Retro Women Tops & Tunics',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: require('../../../assets/images/category/bottom.png'),
  },
  {
    id: 10,
    brand: 'Delivered on Mon Sep 13',
    title: 'Pure Cotton Nighty',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: require('../../../assets/images/category/saree.png'),
  },
  {
    id: 11,
    brand: 'Delivered on Mon Sep 13',
    title: 'Lehenga Choli',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: require('../../../assets/images/category/top.png'),
  },
  {
    id: 12,
    brand: 'Cancelled on Wed Sep 8',
    title: 'Fancy bra',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: require('../../../assets/images/category/bottom.png'),
  },
];
  
  export default compose(
    withState('tabIndex', 'setTabIndex', 0),
    withState('data', 'setData', listData),
  )(OrdersScreen);