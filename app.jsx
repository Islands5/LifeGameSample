var React = require('react');
var ReactDOM = require('react-dom');
var CalcHelper = require('./CalcHelper');

var data = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var data2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var LifeGame = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data
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
    setInterval(this.refleshData, 1000);
  },
  render: function() {
    return (
      <div className="lifegame">
        <Cells data={this.state.data} />
        <SettingsArea onBtn={this.handleBtn} />
      </div>
    )
  }
});

var SettingsArea = React.createClass({
  handleOKBtn: function(e) {
    this.props.onBtn(data2);
  },
  render: function() {
    return (
      <div className="settings-area">
        <button onClick={this.handleOKBtn}>OK</button>
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
  <LifeGame data={data} />,
  document.getElementById('content')
);
