var geoMap = {
  // 卫星
  'E10A-卫星': [30, 61],
  'E8WB-卫星': [60, 61],
  'SES5-卫星': [90, 61],
  // 北京总部
  '北京-总部': [116, 39.5],
  '爱尔兰-亚马逊云': [-6, 52],
  'Startimes-VPN': [80, -3],
  // 上星站
  '南非-上星站': [21, -30],
  '南非(第二颗)-上星站': [23, -30],
  '南非-上星节点': [21, -33.5],
  '斯洛文尼亚-上星站': [14.6, 45.95],
  '斯洛文尼亚(第二颗)-上星站': [12, 45.95],
  '斯洛文尼亚-上星节点': [14.6, 43],
  '德国-上星站': [8, 50],
  '尼日利亚(阿布贾)-上星站': [8.1738, 11],
  '尼日利亚(拉各斯)-上星站': [13.095, 12.039],
  '尼日利亚(第三颗)-上星站': [11, 14],
  '喀麦隆-上星站': [10, 5.12],
  '刚果金-上星站': [18, -3],
  '乌干达-上星站': [33.75, 4.33],
  '肯尼亚-上星站': [36.65, -0.5],
  '布隆迪-上星站': [28.1, -5.1],
  '坦桑尼亚-上星站': [33.2, -3],
  '赞比亚-上星站': [30.827, -11.049],
  '莫桑比克-上星站': [33.31, -23.72],
  //发射塔
  '几内亚-发射塔': [-12, 10],
  '尼日利亚-发射塔': [11, 9],
  '喀麦隆-发射塔': [13.5, 5.12],
  '中非-发射塔': [21, 8],
  '刚果金-发射塔': [16, 0],
  '刚果布-发射塔': [21, -0.2],
  '乌干达-发射塔': [31.6, 2.55],
  '卢旺达-发射塔': [29.4, -1.7],
  '肯尼亚-发射塔': [37.44, 3.03],
  '布隆迪-发射塔': [30.1, -5.1],
  '坦桑尼亚-发射塔': [37, -6],
  '赞比亚-发射塔': [24.52, -14.17],
  '莫桑比克-发射塔': [39.199, -13.068],
  '马达-发射塔': [46.84, -18.72],
  //发射塔中心
  '几内亚-发射塔中心': [-12, 10],
  '尼日利亚-发射塔中心': [11, 9],
  '喀麦隆-发射塔中心': [13.5, 5.12],
  '中非-发射塔中心': [21, 8],
  '刚果金-发射塔中心': [16, 0],
  '刚果布-发射塔中心': [21, -0.2],
  '乌干达-发射塔中心': [31.6, 2.55],
  '卢旺达-发射塔中心': [29.4, -1.7],
  '肯尼亚-发射塔中心': [37.44, 3.03],
  '布隆迪-发射塔中心': [30.1, -5.1],
  '坦桑尼亚-发射塔中心': [37, -6],
  '赞比亚-发射塔中心': [24.52, -14.17],
  '莫桑比克-发射塔中心': [39.199, -13.068],
  '马达-发射塔中心': [46.84, -18.72],
  // 播控中心
  '北京-播控中心': [112, 39.36],
  '肯尼亚-播控中心': [40.42, 2],
  '尼日利亚-播控中心': [5, 10.74],
  '坦桑尼亚-播控中心': [32.56,-5.96],
  '南非-播控中心': [26, -30],
  // CDN
  '塞内加尔-CDN': [-15.64, 14.98],
  '几内亚-CDN': [-9, 9],
  '加纳-CDN': [-1, 7.88],
  '科特迪瓦-CDN': [-5.53, 6.31],
  '尼日利亚-CDN': [6, 6],
  '刚果金-CDN': [14, -3],
  '刚果布-CDN': [25, -5],
  '乌干达-CDN': [32, -0.4],
  '卢旺达-CDN': [27, -2.7],
  '肯尼亚-CDN': [39.15,-3.5],
  '布隆迪-CDN': [29,-4.5],
  '坦桑尼亚-CDN': [36.16, -9.49],
  '赞比亚-CDN': [26.36, -16.8],
  '莫桑比克-CDN': [34.18, -19.51],
  '南非-CDN': [28, -27],
  '马达-CDN': [45.439, -23.966],
  // 路由
  '肯尼亚-路由': [40, -1.5],
  '坦桑尼亚-路由': [34.5, -7.8],
  '乌干达-路由': [33.27, 1.537],
  '赞比亚-路由': [29.7, -14.349],
  '莫桑比克-路由': [38.18, -16.04],
  '尼日利亚-路由': [8, 8],
  '南非-路由': [24, -28],
  // 拓展中
  '土耳其-拓展中': [35.2, 38.96],
  '哈塞克斯坦-拓展中': [66.9, 48],
  '巴基斯坦-拓展中': [69.34, 30.37],
  '尼泊尔-拓展中': [84.12, 28.39],
  '印度-拓展中': [78.96, 20.59],
  '孟加拉-拓展中': [90.35, 23.68],
  '缅甸-拓展中': [95.9, 21.9],
  '柬埔寨-拓展中': [104.99, 12.56],
  '马来西亚-拓展中': [101.97, 4.21],
  '菲律宾-拓展中': [121.77, 12.87],
  '萨摩亚-拓展中': [135, 5]
}

var worldCount = {
  ku: 1,
  c: 2,
  bo: 5,
  xing: 16,
  cdn: 20,
  ta: 324,
  live: 480,
  country: 45,
  person: 9.7,
  fst: {
    '几内亚-发射塔': 2,
    '尼日利亚-发射塔': 82,
    '喀麦隆-发射塔': 2,
    '中非-发射塔': 1,
    '刚果金-发射塔': 4,
    '刚果布-发射塔': 5,
    '乌干达-发射塔': 8,
    '卢旺达-发射塔': 6,
    '肯尼亚-发射塔': 23,
    '布隆迪-发射塔': 12,
    '坦桑尼亚-发射塔': 19,
    '赞比亚-发射塔': 72,
    '莫桑比克-发射塔': 87,
    '马达-发射塔': 1,
  },
}

var wei = 'image://./img/world/wei.png',
bo = 'image://./img/world/bo.png',
ta = 'image://./img/world/ta.png',
xing = 'image://./img/world/xing.png',
startimes = 'image://./img/world/beijing.png',
aws = 'image://./img/world/aws.png',
dian = 'image://./img/world/dian.png',
vpn = 'image://./img/world/vpn.png',
route = 'image://./img/world/route.png',
cdn = 'image://./img/world/cdn.png',
build = 'image://./img/world/build.png'

// var lineColor = ['#6efa01', '#0da1ed', '#9c26b5', '#ffffff']
var lineColor = ['#0da1ed', '#0da1ed', '#0da1ed', '#0da1ed']

var coverData = function(data, name) {
  var res = []
  for(var x in data) {
    var type = x.split('-')
    if (name === type[1]) {
      switch(type[1]) {
        case '上星站':
          res.push({ name: x, value: data[x], symbol: xing, symbolSize: 30 })
          break;
        case '发射塔':
          res.push({ name: x, value: data[x].concat(worldCount.fst[x]), symbol: ta, symbolSize: 60, label: {show: true, offset: [0, -21], formatter: '{@[2]}', textStyle: {color: '#fff', fontSize: 12}} })
          break;
        case '播控中心':
          res.push({ name: x, value: data[x], symbol: bo, symbolSize: [27, 25] })
          break;
        case 'CDN':
          res.push({ name: x, value: data[x], symbol: cdn, symbolSize: 15  })
          break;
        case '发射塔中心':
          res.push({ name: x, value: [data[x][0], data[x][1] + 0.6] })
          break;
        case '路由':
          res.push({ name: x, value: data[x], symbol: route, symbolSize: [20, 17] })
          break;
        case '拓展中':
          res.push({ name: x, value: data[x], symbol: build, symbolSize: 20, label: {show: true, position: 'right', formatter: function(param){return param.name.replace('-拓展中', '')}, textStyle: {color: '#fff', fontSize: 12}} })
          break;
      }
    }
  }
  return res
}

var coverLines = function(name, x, y, color) {
  var line = {
    name: name,
    type: 'lines',
    coordinateSystem: 'geo',
    z: 5,
    effect: {
      show: true,
      constantSpeed: 30,
      symbol: 'arrow',
      symbolSize: 5,
      trailLength: 0,
    },
    lineStyle: {
      normal: {
        color: color,
        width: 0.5,
        opacity: 1,
        curveness: 0
      }
    },
    data: []
  }

  if (x instanceof Array) {
    for(var i=0,len=x.length;i<len;i++){
      var from = geoMap[x[i]], to = geoMap[y]
      if (x[i].indexOf('卫星') >= 0) {
        from = [from[0] - 2.5, from[1] - 2]
      }
      if (y.indexOf('卫星') >= 0) {
        to = [to[0] - 2.5, to[1] - 2]
      }
      line.data.push({name: y, coords: [from, to]})
    }
  } else {
    for(var i=0,len=y.length;i<len;i++){
      var from = geoMap[x], to = geoMap[y[i]]
      if (x.indexOf('卫星') >= 0) {
        from = [from[0] - 2.5, from[1] - 2]
      }
      if (y[i].indexOf('卫星') >= 0) {
        to = [to[0] - 2.5, to[1] - 2]
      }
      line.data.push({name: x, coords: [from, to]})
    }
  }
  if (name == 'VPN') {
    line.lineStyle.normal.curveness = 0
    line.lineStyle.normal.width = 1
    line.lineStyle.normal.opacity = 0.8
    line.effect.symbol = 'pin'
    line.effect.symbolSize = 7
  }
  return line
}

var ignoreCountry = ['Russia', 'Norway', 'Greenland', 'Australia', 'Sweden', 'Finland', 'Iceland', 'Mongolia', 'Canada',
 'United States', 'Mexico', 'Brazil', 'Cuba', 'Haiti','Guatemala', 'Belize', 'Nicaragua', 'Panama', 'Bahamas', 'Barbados', 'Dominica',
  'Honduras', 'Dominican Rep.', 'El Salvador', 'Costa Rica', 'Jamaica', 'Paraguay', 'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Ecuador',
   'Guyana', 'Peru', 'Suriname', 'Uruguay', 'Venezuela', 'Puerto Rico', 'Trinidad and Tobago']
var regions= [].concat.apply([], ignoreCountry.map(function (item) {
  return {
    name: item,
    itemStyle: {
      opacity: 0.3,
    },
    emphasis: {
      itemStyle: {
        opacity: 0.3,
      },
      label: {
        show: false
      }
    }
  }
}))
var regionsBg= [].concat.apply([], ignoreCountry.map(function (item) {
  return {
    name: item,
    itemStyle: {
      opacity: 0,
    },
    emphasis: {
      itemStyle: {
        opacity: 0,
      },
      label: {
        show: false
      }
    }
  }
}))

var options = {
  legend: {show: false},
  geo: [
    {
      id: 0,
      name: '非洲地图',
      map: 'world',
      zoom: 2.4,
      center: [50, 13],
      aspectScale: 1.1,
      // roam: true,
      z: 2,
      itemStyle: {
        opacity: 1,
        color: '#151515',
        borderWidth: 1,
        borderColor: '#222222'
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
          color: '#353535',
          borderWidth: 1,
          borderColor: '#555555'
        },
        label: {
          show: false,
          color: '#fff',
          fontSize: 14
        }
      },
      regions: regions
    },
    {
      id: 1,
      name: '非洲地图-阴影',
      map: 'world',
      zoom: 2.4,
      center: [48.5, 14],
      aspectScale: 1.1,
      z: 1,
      itemStyle: {
        opacity: 1,
        borderWidth: 0,
        color: '#000',
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
          color: '#000',
          borderWidth: 0
        },
        label: {
          show: false
        }
      },
      regions: regionsBg
    },
    {
      id: 2,
      name: 'SES5卫星覆盖范围',
      map: 'ses5',
      zoom: 0.63,
      center: [49, 12],
      aspectScale: 1.1,
      z: 1,
      itemStyle: {
        opacity: 0,
        borderWidth: 1,
        color: '#0da1ed',
      },
      emphasis: {
        itemStyle: {
          opacity: 0,
          color: '#0da1ed',
          borderWidth: 1
        },
        label: {
          show: false
        }
      },
      regions: regionsBg
    }
  ],
  series: [{
      name: '卫星',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: [
        { name: 'E10A-卫星', value: geoMap['E10A-卫星'], symbol: wei.replace('wei', 'E10A'), symbolSize: [120, 103] },
        { name: 'E8WB-卫星', value: geoMap['E8WB-卫星'], symbol: wei.replace('wei', 'E8WB'), symbolSize: [120, 103] },
        { name: 'SES5-卫星', value: geoMap['SES5-卫星'], symbol: wei.replace('wei', 'SES5'), symbolSize: [120, 103] }
      ]
    },
    {
      name: '总部',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: [{ name: '北京-总部', value: geoMap['北京-总部'], symbol: startimes, symbolSize: 55, label: {show: true, position: 'top', formatter: '四达总部云平台', textStyle: {color: '#fff', fontSize: 12}} }]
    },
    {
      name: '亚马逊云',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: [{ name: '爱尔兰-亚马逊云', value: geoMap['爱尔兰-亚马逊云'], symbol: aws, symbolSize: 55, label: {show: true, position: 'top', formatter: '四达海外云平台', textStyle: {color: '#fff', fontSize: 12} }}]
    },
    {
      name: 'VPN',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 15,
      itemStyle: {
        opacity: 1
      },

      data: [{ name: 'Startimes-VPN', value: geoMap['Startimes-VPN'], symbol: vpn, symbolSize: [160, 115] }]
    },
    {
      name: '播控中心',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      data: coverData(geoMap, '播控中心')
    },
    {
      name: '拓展中国家',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      data: coverData(geoMap, '拓展中')
    },
    {
      name: 'DTT',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: coverData(geoMap, '发射塔')
    },
    {
      name: 'DTT',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      z: 10,
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#ffffff'
        }
      },
      rippleEffect: {
        period: 5,
        scale: 15,
        brushType: 'stroke'
      },
      data: coverData(geoMap, '发射塔中心')
    },
    {
      name: '节目中继',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: coverData(geoMap, '上星站')
    },
    {
      name: '节目中继',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 5,
      z: 10,
      itemStyle: {
        normal: {
          color: lineColor[0]
        }
      },
      data: [
        { name: '南非-上星节点', value: geoMap['南非-上星节点'] },
        { name: '斯洛文尼亚-上星节点', value: geoMap['斯洛文尼亚-上星节点'] }
      ]
    },
    {
      name: 'OTT',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 5,
      z: 10,
      itemStyle: {
        normal: {
          color: lineColor[0]
        }
      },
      data: [
        { name: '南非-上星节点', value: geoMap['南非-上星节点'] }
      ]
    },
    {
      name: 'OTT',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      itemStyle: {
        opacity: 1
      },
      data: [{ name: '南非-上星站', value: geoMap['南非-上星站'], symbol: xing, symbolSize: 30 }]
    },
    // {
    //   name: 'OTT',
    //   type: 'effectScatter',
    //   coordinateSystem: 'geo',
    //   z: 10,
    //   symbolSize: 4,
    //   showEffectOn: 'render',
    //   itemStyle: {
    //     normal: {
    //       color: lineColor[2]
    //     }
    //   },
    //   rippleEffect: {
    //     period: 4,
    //     scale: 8,
    //     brushType: 'fill'
    //   },
    //   data: coverData(geoMap, 'CDN')
    // },
    {
      name: 'OTT',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 10,
      data: coverData(geoMap, 'CDN')
    },
    {
      name: 'VPN',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 30,
      z: 8,
      data: coverData(geoMap, '路由')
    }
  ]
}

var wxSvg = 'path://M934.603,157.663l-139.784-139.784c-19.505-19.505-50.387-19.505-68.267,0l-203.175,203.175c-19.505,19.505-19.505,50.387,0,68.267l55.263,55.263-27.632,27.632-17.879-17.879c-26.006-26.006-60.14-37.384-92.648-37.384-43.886-35.759-100.775-40.635-133.283-8.127-32.508,32.508-27.632,89.397,8.127,133.283,0,34.133,11.378,66.641,37.384,92.648l17.879,17.879-27.632,27.632-55.263-55.263c-19.505-19.505-50.387-19.505-68.267,0l-203.175,203.175c-19.505,19.505-19.505,50.387,0,68.267l139.784,139.784c19.505,19.505,50.387,19.505,68.267,0l203.175-203.175c19.505-19.505,19.505-50.387,0-68.267l-47.137-47.137,27.632-27.632,61.765,61.765c16.254-37.384,42.26-74.768,74.768-107.276,32.508-32.508,69.892-58.514,107.276-74.768l-61.765-61.765,27.632-27.632,47.137,47.137c19.505,19.505,50.387,19.505,68.267,0l203.175-203.175c17.879-17.879,17.879-48.762-1.625-66.641z,M887.467,508.749c-3.251-3.251-8.127-6.502-11.378-8.127,0,0-1.625,0-1.625-1.625-3.251-1.625-4.876-3.251-8.127-4.876h-1.625c-79.644-43.886-203.175-13.003-294.197,78.019-92.648,92.648-121.905,214.552-78.019,294.197,1.625,3.251,3.251,4.876,4.876,8.127,0,0,0,1.625,1.625,1.625,3.251,4.876,6.502,8.127,8.127,11.378,34.133,22.756,110.527-6.502,191.797-71.517l-40.635-32.508c-48.762,39.010-87.771,60.14-99.149,50.387-14.629-14.629,34.133-87.771,108.902-162.54s147.911-123.53,162.54-108.902c9.752,9.752-8.127,43.886-42.26,87.771l32.508,40.635c61.765-78.019,89.397-149.537,66.641-182.044z,M692.419,726.552c-13.003-9.752-13.003-27.632-1.625-39.010l4.876-4.876c11.378-11.378,29.257-9.752,39.010,1.625l43.886,53.638c9.752,13.003,9.752,32.508-1.625,43.886l14.629-14.629c-11.378,11.378-30.883,13.003-43.886,1.625l-55.263-42.26z,M797.615,748.463c-20.691,0-37.921,17.229-39.075,36.783,0,20.691,16.091,36.783,39.075,36.783,20.691,0,39.075-16.091,39.075-36.783-1.138-21.845-18.383-36.783-39.075-36.783z,M894.163,748.463c0,34.491-13.8,66.658-40.229,90.795-25.291,25.291-58.612,37.937-95.411,37.937v52.874c105.748,0,189.651-81.595,190.805-181.606h-55.166z,M991.85,747.325c0,121.823-104.594,221.818-233.309,221.818v52.858c158.606,0,288.475-122.978,288.475-274.692h-55.166z'

var sxzSvg = 'path://M198.106,829.473c-177.257-177.257-176.812-465.091,0.993-642.897l641.903,641.903c-177.805,177.805-465.64,178.25-642.896,0.994z,M277.844,737.507l12.227,12.226c33.763,33.763,33.678,88.589-0.19,122.457l-49.058,49.058c-33.868,33.868-88.694,33.953-122.457,0.19l-12.227-12.227c-33.763-33.763-33.678-88.589,0.19-122.456l49.058-49.058c33.868-33.869,88.694-33.953,122.457-0.19zM708.846,318.733c29.195,29.195,29.195,76.53,0,105.725-29.196,29.195-76.53,29.195-105.725,0-29.195-29.196-29.195-76.53,0-105.725,29.194-29.196,76.529-29.196,105.725,0z,M606.896,375.371l45.31,45.311-158.587,158.587-45.311-45.31,158.588-158.588zM906.895,383.903c0-147.458-119.539-266.996-266.996-266.996V63.508c176.949,0,320.396,143.446,320.396,320.396h-53.4zM639.899,175.646c115.017,0,208.257,93.24,208.257,208.257h-48.059c0-88.475-71.723-160.198-160.198-160.198v-48.059z'

var fstSvg = 'path://M876.8,953.6l-19.2-12.8c-25.6-12.8-44.8-32-64-44.8-64-51.2-102.4-121.6-140.8-192-44.8-83.2-83.2-217.6-108.8-345.6,32-12.8,57.6-38.4,57.6-76.8,0-44.8-38.4-76.8-83.2-76.8-44.8,0-83.2,38.4-83.2,76.8,0,32,25.6,64,51.2,76.8-19.2,128-64,262.4-108.8,339.2-44.8,76.8-89.6,140.8-153.6,192-19.2,19.2-44.8,32-70.4,44.8l-19.2,12.8c-12.8,0-25.6,12.8-25.6,25.6s12.8,25.6,25.6,25.6h217.6c12.8,0,25.6-12.8,25.6-25.6s-6.4-19.2-19.2-25.6v-6.4-25.6c0-44.8,19.2-76.8,38.4-102.4,25.6-25.6,64-51.2,115.2-51.2,25.6,0,51.2,6.4,64,19.2,19.2,12.8,32,19.2,44.8,38.4,19.2,25.6,38.4,57.6,38.4,102.4v25.6c-12.8,0-25.6,12.8-25.6,25.6s12.8,25.6,25.6,25.6h211.2c12.8,0,25.6-12.8,25.6-25.6,6.4-12.8-6.4-19.2-19.2-19.2z,m-358.4-230.4c-19.2,0-32-12.8-32-32s12.8-32,32-32,32,12.8,32,32-12.8,32-32,32z,m0-102.4c-19.2,0-32-12.8-32-32s12.8-32,32-32,32,12.8,32,32-12.8,32-32,32z,m0-102.4c-19.2,0-32-12.8-32-32s12.8-32,32-32,32,12.8,32,32-12.8,32-32,32z,M441.6,403.2c-6.4-6.4-12.8-12.8-25.6-19.2-25.6-25.6-38.4-64-38.4-102.4,0-38.4,12.8-70.4,38.4-102.4,6.4-6.4,19.2-12.8,25.6-19.2,12.8-6.4,12.8-19.2,6.4-32-6.4-6.4-19.2-12.8-32-6.4s-19.2,19.2-32,25.6c-38.4,38.4-57.6,83.2-57.6,134.4S345.6,384,384,416c12.8,12.8,19.2,19.2,32,25.6,6.4,6.4,12.8,6.4,12.8,6.4,12.8,0,19.2-6.4,25.6-12.8,6.4-12.8,0-25.6-12.8-32zM352,499.2c-12.8-6.4-19.2-12.8-25.6-19.2-51.2-51.2-83.2-121.6-83.2-192,0-76.8,32-140.8,83.2-198.4,6.4-6.4,12.8-12.8,25.6-19.2,12.8-6.4,12.8-25.6,6.4-32C345.6,25.6,332.8,25.6,320,32l-25.6,25.6C230.4,115.2,192,198.4,192,288s38.4,166.4,102.4,230.4c6.4,6.4,19.2,12.8,25.6,19.2,6.4,6.4,6.4,6.4,12.8,6.4s12.8,0,19.2-6.4c12.8-12.8,6.4-25.6,0-38.4z,m307.2-352c-6.4-6.4-19.2-19.2-32-25.6-12.8-6.4-25.6,0-32,12.8-6.4,6.4-6.4,25.6,6.4,32,6.4,6.4,19.2,12.8,25.6,19.2,25.6,25.6,38.4,64,38.4,102.4,0,38.4-12.8,70.4-38.4,102.4-6.4,0-19.2,6.4-25.6,12.8-12.8,6.4-12.8,19.2-6.4,32,0,6.4,12.8,12.8,19.2,12.8,6.4,0,6.4,0,12.8-6.4,12.8-6.4,25.6-19.2,32-25.6,38.4-38.4,57.6-83.2,57.6-134.4s-19.2-96-57.6-134.4zM748.8,57.6c-6.4-6.4-19.2-12.8-25.6-25.6-12.8-6.4-25.6-6.4-32,6.4-6.4,12.8-6.4,25.6,6.4,32,6.4,6.4,19.2,12.8,25.6,19.2,57.6,51.2,83.2,121.6,83.2,198.4s-32,140.8-83.2,198.4l-19.2,19.2c-12.8,6.4-12.8,25.6-6.4,32,6.4,6.4,12.8,6.4,19.2,6.4,6.4,0,12.8,0,12.8-6.4,6.4-6.4,19.2-12.8,25.6-19.2,64-64,102.4-140.8,102.4-230.4-6.4-89.6-38.4-172.8-108.8-230.4z'

var bkzxSvg = 'path://M67,709.3l470,212,420-210-494.4-166.6z,M431.8,809.3l-230-99v-561l230,60z,M431.8,809.3l220-100v-551l-220,51z,M201.8,149.3l230,60,220-51-234.4-55.6z,M201.8,254.2l230,70.5v-20.9l-230-70.5zM431.8,423.7l-230-77.6v21.1l230,77.6zM431.8,660.2l-230-84.7v21.3l230,84.7zM431.8,541.6l-230-80.4v21.2l230,80.4z,M651.8,571.9l-219.9,88.3v21.3l219.9-88.7zM431.9,541.6v21.2l219.9-81.2v-21.1zM431.9,423.7v21.1l219.9-73.5v-21.1zM431.9,303.8v20.9l219.9-64.5v-21.3z,M675.5,817.2l-140-55v-311l140,6z,M675.4,817.2l120-58v-314l-120,39z,M535.5,451.2l139.9,41,120-47L651,411.6z,M630,605.8l-60-18.2v-21.1l60,18.2v21.1z,m-60-76.6l60,17.9v-20.9l-60-17.9v20.9z,m60,170.7l-60-21.5v21.3l60,21.5v-21.3z,m0-57.8l-60-20v21.2l60,20v-21.2z'
