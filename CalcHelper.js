var CalcHelper = {
  cellsOfLife: function(data) {
    var pre_generation = data;
    var areaSize = data.length - 2;
    var next_generation = [];
    for(var i=0; i <= areaSize + 1; i++) {
      var row = [];
      for(var j=0; j <= areaSize + 1; j++) {
        row.push(0);
      }
      next_generation.push(row);
    }

    for(var i=1; i <= areaSize; i++) {
      for(var j=1; j <= areaSize; j++) {
        var livingCellsCnt = this.getLivingAroundCellsCnt(i, j, pre_generation);

        if(pre_generation[i][j]) {
          if(livingCellsCnt >= 4) {
            next_generation[i][j] = 0;
          } else if(livingCellsCnt <= 1) {
            next_generation[i][j] = 0;
          } else {
            next_generation[i][j] = 1;
          }
        } else {
          next_generation[i][j] = (livingCellsCnt == 3) ? 1 : 0;
        }
      }
    }

    for(var i=0; i <= areaSize + 1; i++) {
      next_generation[0][i] = 0;
      next_generation[i][0] = 0;
      next_generation[areaSize + 1][i] = 0;
      next_generation[i][areaSize + 1] = 0;
    }

    return next_generation;
  },
  getLivingAroundCellsCnt: function(i, j, ary) {
    // 生きてるセルがわかれば死んでるセルの個数もわかる
    var livingCellsCnt = 
                 ary[i-1][j-1] +
                 ary[i-1][j]   +
                 ary[i-1][j+1] +
                 ary[i][j-1]   +
                 ary[i][j+1]   +
                 ary[i+1][j-1] +
                 ary[i+1][j]   +
                 ary[i+1][j+1];
    return livingCellsCnt;
  }
}

module.exports = CalcHelper;
