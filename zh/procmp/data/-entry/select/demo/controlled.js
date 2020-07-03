import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'choerodon-ui/pro';

const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'wu',
    };
  }

  handleChange = (value, oldValue) => {
    console.log('[constrolled]', 'value', value, 'oldValue', oldValue);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <Select name="last-name" placeholder="请选择" value={this.state.value} onChange={this.handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </Select>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
