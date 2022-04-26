const menu = [
  {
    id: '101',
    authName: '用户管理',
    path: 'users',
    order: 1,
    icon: '',
    children: [
      {
        id: '1011',
        authName: '用户列表',
        path: 'users',
        order: null,
        icon: '',
        children: []
      }
    ]
  },
  {
    id: '102',
    authName: '权限管理',
    path: 'rights',
    order: 2,
    icon: '',
    children: [
      {
        id: '1021',
        authName: '角色列表',
        path: 'roles',
        order: null,
        icon: '',
        children: []
      },
      {
        id: '1022',
        authName: '权限列表',
        path: 'rights',
        order: null,
        icon: '',
        children: []
      }
    ]
  },
  {
    id: '103',
    authName: '商品管理',
    path: 'goods',
    order: 3,
    icon: '',
    children: [
      {
        id: '1031',
        authName: '商品列表',
        path: 'goods',
        order: null,
        icon: '',
        children: []
      },
      {
        id: '1032',
        authName: '分类参数',
        path: 'params',
        order: null,
        icon: '',
        children: []
      },
      {
        id: '1033',
        authName: '商品分类',
        path: 'categories',
        order: null,
        icon: '',
        children: []
      }
    ]
  },
  {
    id: '104',
    authName: '订单管理',
    path: 'orders',
    order: 4,
    icon: '',
    children: [
      {
        id: '1041',
        authName: '订单列表',
        path: 'orders',
        order: null,
        icon: '',
        children: []
      }
    ]
  },
  {
    id: '105',
    authName: '数据统计',
    path: 'reports',
    order: 5,
    icon: '',
    children: [
      {
        id: '1051',
        authName: '数据列表',
        path: 'reports',
        order: null,
        icon: '',
        children: []
      }
    ]
  }
]

export default menu
