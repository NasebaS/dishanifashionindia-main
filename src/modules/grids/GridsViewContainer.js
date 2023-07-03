import { compose, withState } from 'recompose';

import GridView from './GridsView';
const getMoviesFromApi = () => {
  return fetch(global.apiurl+'getproductdetails')
    .then((response) => response.json())
    .then((json) => {
      return json;
     // console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
};

const listDatas = getMoviesFromApi();
//console.log(listDatas)
const listData = [
  {
    id: 1,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
  {
    id: 2,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
  },
  {
    id: 3,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-30360.jpg',
  },
  {
    id: 4,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-37839.jpg',
  },
  {
    id: 5,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
  },
  {
    id: 6,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-108061.jpg',
  },
  {
    id: 7,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-126371.jpg',
  },
  {
    id: 8,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-165888.jpg',
  },
  {
    id: 9,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-167854.jpg',
  },
  {
    id: 10,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
  },
  {
    id: 11,
    brand: 'Weeknight',
    title: 'NEXT-LEVEL WEAR',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-175696.jpg',
  },
  {
    id: 12,
    brand: 'Mad Perry',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Office, prom or special parties is all dressed up',
    price: '$29.99',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-175733.jpg',
  },
];

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Grid', 'List 1', 'List 2']),
  withState('data', 'setData', listDatas),
)(GridView);
