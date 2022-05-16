export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Products',
    icon: 'folder',
    items: [
      {
        text: 'Add Product',
        path: '/pages/add-product',
      },
      {
        text: 'List Products',
        path: '/pages/products',
      }
    ]
  },
  {
    text: 'Sales',
    path: '/pages/sales',
    icon: 'folder'
  },
  {
    text: 'Customers',
    path: '/pages/customers',
    icon: 'folder'
  }
];
