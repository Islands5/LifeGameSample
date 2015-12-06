var React = require('react');
var ReactDOM = require('react-dom');
var CalcHelper = require('./CalcHelper');
var ConstData = require('./ConstData');

var LifeGame = React.createClass({
  getInitialState: function() {
    return {
      data: ConstData.random(40),
      interval: 100
    }
  },
  refleshData: function() {
    var nextGen = CalcHelper.cellsOfLife(this.state.data);
    this.setState({
      data: nextGen
    });
  },
  handleBtn: function(data) {
    this.setState({
      data: data
    });
  },
  componentDidMount: function() {
    setInterval(this.refleshData, this.state.interval);
  },
  render: function() {
    var data = this.state.data;
    return (
      <div className="lifegame">
        <Cells data={data} />
        <SettingsArea
          onBtn={this.handleBtn}
          areaSize={data.length}
        />
      </div>
    )
  }
});

var SettingsArea = React.createClass({
  handleGliderBtn: function() {
    this.props.onBtn(ConstData.glider(this.props.areaSize));
  },
  handleRandomBtn: function() {
    this.props.onBtn(ConstData.random(this.props.areaSize));
  },
  handleGliderGunBtn: function() {
    this.props.onBtn(ConstData.gliderGun(this.props.areaSize));
  },
  render: function() {
    return (
      <div className="settings-area">
        <button onClick={this.handleGliderBtn}>グライダー</button>
        <button onClick={this.handleRandomBtn}>ランダム</button>
        <button onClick={this.handleGliderGunBtn}>グライダーガン</button>
      </div>
    );
  }
});

var Cells = React.createClass({
  render: function() {
    var rows = [];
    var data = this.props.data;
    var rowsNumber = data.length - 2;
    for(var i=0; i < rowsNumber; i++) {
      rows.push(<CellsRow key={i} rowIndex={i} data={data}/>)
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

var CellsRow = React.createClass({
  render: function() {
    var cells = [];
    var data = this.props.data;
    var columnsNumber = data.length - 2;
    for(var i=0; i < columnsNumber; i++) {
      cells.push(<Cell key={i} rowIndex={this.props.rowIndex} columnIndex={i} data={data}/>)
    }
    return (
      <tr>
        {cells}
      </tr>
    );
  }
});

var Cell = React.createClass({
  render: function() {
    var rowIndex = this.props.rowIndex;
    var columnIndex = this.props.columnIndex;
    if(this.props.data[rowIndex + 1][columnIndex + 1]) {
      return (
        <td className="living"></td>
      );
    } else {
      return (
        <td></td>
      );
    }
  }
});

ReactDOM.render(
  <LifeGame />,
  document.getElementById('content')
);
