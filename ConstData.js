var ConstData = {
  random: function(areaSize) {
    var data = []
    for(var i=0; i < areaSize; i++) {
      var ary = [];
      for(var j=0; j < areaSize; j++) {
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
      for(var i=0; i < areaSize; i++) {
        var ary = [];
        for(var j=0; j < areaSize; j++) {
          ary.push(Math.random() < 0.5 ? 1 : 0);
        }
        data.push(ary);
      }
      return data;
    }

    var data = []
    for(var i=0; i < areaSize; i++) {
      var ary = [];
      for(var j=0; j < areaSize; j++) {
        ary.push(Math.random() < 0.5 ? 1 : 0);
      }
      data.push(ary);
    }

  },
  glider: function(areaSize) {
    var data = []
    for(var i=0; i < areaSize; i++) {
      var ary = [];
      for(var j=0; j < areaSize; j++) {
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
  },
  gliderGun: function(areaSize) {
    var data = []
    for(var i=0; i < areaSize; i++) {
      var ary = [];
      for(var j=0; j < areaSize; j++) {
        ary.push(0);
      }
      data.push(ary);
    }
    data[6][2] = 1;
    data[6][3] = 1;
    data[7][2] = 1;
    data[7][3] = 1;
    data[6][12] = 1;
    data[7][12] = 1;
    data[8][12] = 1;
    data[5][13] = 1;
    data[9][13] = 1;
    data[4][14] = 1;
    data[10][14] = 1;
    data[4][15] = 1;
    data[10][15] = 1;
    data[7][16] = 1;
    data[5][17] = 1;
    data[9][17] = 1;
    data[6][18] = 1;
    data[7][18] = 1;
    data[8][18] = 1;
    data[7][19] = 1;
    data[4][22] = 1;
    data[5][22] = 1;
    data[6][22] = 1;
    data[4][23] = 1;
    data[5][23] = 1;
    data[6][23] = 1;
    data[3][24] = 1;
    data[7][24] = 1;
    data[3][26] = 1;
    data[2][26] = 1;
    data[7][26] = 1;
    data[8][26] = 1;
    data[5][36] = 1;
    data[6][36] = 1;
    data[5][37] = 1;
    data[6][37] = 1;

    return data;
  }
}

module.exports = ConstData;
