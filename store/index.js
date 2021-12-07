const state = () => {
  return {
    routes: [{
      path: '/square',
      name: '首页'
    }, {
      name: '分区',
      child: [
        {
          path: '/subarea',
          name: '分区'
        },
        {
          path: '/subarea',
          name: '分区'
        },
        {
          path: '/subarea',
          name: '分区'
        },
        {
          path: '/subarea',
          name: '分区'
        },
        {
          path: '/subarea',
          name: '分区'
        },
        {
          path: '/subarea',
          name: '分区'
        }
      ]
    },{
      path: '/square',
      name: '首页'
    },
  ]
  }
}

export default {
  state
}