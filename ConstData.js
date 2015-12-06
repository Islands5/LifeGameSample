var ConstData = {
  random: function(areaSize) {
    var data = []
    for(var i=0; i < areaSize + 2; i++) {
      var ary = [];
      for(var j=0; j < areaSize + 2; j++) {
        ary.push(Math.random() < 0.5 ? 1 : 0);
      }
      data.push(ary);
    }

    return data;
  },
  octagon: function(areaSize) {
    //途中
    if(areaSize < 8) {
      alert('サイズが小さいため、ランダムパターンを返します');
      var data = []
      for(var i=0; i < areaSize + 2; i++) {
        var ary = [];
        for(var j=0; j < areaSize + 2; j++) {
          ary.push(Math.random() < 0.5 ? 1 : 0);
        }
        data.push(ary);
      }
      return data;
    }

    var data = []
    for(var i=0; i < areaSize + 2; i++) {
      var ary = [];
      for(var j=0; j < areaSize + 2; j++) {
        ary.push(Math.random() < 0.5 ? 1 : 0);
      }
      data.push(ary);
    }

  },
  glider: function(areaSize) {
    var data = []
    for(var i=0; i < areaSize + 2; i++) {
      var ary = [];
      for(var j=0; j < areaSize + 2; j++) {
        ary.push(0);
      }
      data.push(ary);
    }
    data[2][1] = 1;
    data[3][2] = 1;
    data[3][3] = 1;
    data[2][3] = 1;
    data[1][3] = 1;

    return data;
  }
}

module.exports = ConstData;
