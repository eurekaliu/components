import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

// The default locale is en-US, but we can change it to other language
import frFR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import 'antd/dist/antd.css';
import './index.css';

import { Card , Input, List, Tag, Switch , Checkbox, Button, Radio, Icon} from 'antd';

moment.locale('fr');

class App extends React.Component {
  state = {
    size: 'button_small',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="button_small">小的按鈕</Radio.Button>
          <Radio.Button value="button_medium">標準按鈕</Radio.Button>
          <Radio.Button value="button_large">大的按鈕</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button className={size +' button_default'}>Default</Button>
        <Button className={size +' button_primary'}>Primary</Button>
        <Button className={size +' button_success'}>Success</Button>
        <Button className={size +' button_danger'}>Danger</Button>
        <Button className={size +' button_warning'}>Warning</Button>
        <br />

      </div>
    );
  }
}

//export default App;

ReactDOM.render(<App />, document.getElementById('content1'));