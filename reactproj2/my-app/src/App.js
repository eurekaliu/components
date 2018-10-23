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

import { AutoComplete , Form,Switch ,DatePicker ,Select, Menu, Dropdown, Card , Input, List, Tag , Checkbox, Button, Radio, Icon, Row, Col, Avatar} from 'antd';

moment.locale('fr');

const ButtonGroup = Button.Group;
const { Meta } = Card;
const RadioGroup = Radio.Group;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const selectAfter = (
  <Select defaultValue="NTD" style={{ width: 30 }}>
    <Option value="NTD">NTD</Option>
  </Select>
);

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function DateonChange(date, dateString) {
  console.log(date, dateString);
}


class App extends React.Component {
  state = {
    size: 'size_small',
    current: 'online',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  radioonChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 2 },
        lg: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16, offset: 1 },
        md: { span: 16, offset: 1 },
        lg: { span: 16, offset: 1 },
      },
    };
    const size = this.state.size;
    return (
      <div>
        <div>
          <Card title="Button">  
            <h3>Button types按鈕類型</h3>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="size_small">小的按鈕</Radio.Button>
              <Radio.Button value="size_medium">標準按鈕</Radio.Button>
              <Radio.Button value="size_large">大的按鈕</Radio.Button>
            </Radio.Group>
            <br /><br />
            <Button className={size +' button_default'}>Default預設按鈕</Button>
            <Button className={size +' button_primary'}>Primary關鍵動作</Button>
            <Button className={size +' button_success'}>Success成功</Button>
            <Button className={size +' button_danger'}>Danger警告危險</Button>
            <Button className={size +' button_warning'}>Warning提醒提示</Button>
            <Button className={size +' button_link'}>Link連結</Button>
            <Button className={size +' button_list'}>List按鈕</Button>
            <br /> <br />
            <h3>Icon button</h3>
            <Button className={size +' button_default'}><Icon type="check" theme="outlined" />Default</Button>
            <Button className={size +' button_primary'}><Icon type="check" theme="outlined" />Primary</Button>
            <Button className={size +' button_success'}><Icon type="check" theme="outlined" />Success</Button>
            <Button className={size +' button_danger'}><Icon type="check" theme="outlined" />Danger</Button>
            <Button className={size +' button_warning'}><Icon type="check" theme="outlined" />Warning</Button>
            <Button className={'iconbutton_1'}><Icon type="shopping-cart" theme="outlined" className={'icon_light'} /></Button>
            <Button><Icon type="shopping-cart" theme="outlined" className={'icon_light'} /></Button>
            <Button className={'iconbutton_2'}><Icon type="shopping-cart" theme="outlined" className={'icon_light'} /></Button>
            <Button className={'iconbutton_3'}><Icon type="to-top" theme="outlined" className={'icon_light'} /></Button>
            <br /> <br />
            <h3>Download button</h3>
            <ButtonGroup>
              <Button className={'button_download'}>「微」顯學的攝影技巧_補.pptx</Button>
              <Button className={'iconbutton_4'} icon="cloud-download" />
            </ButtonGroup>
            <br />
            <ButtonGroup>
              <Button className={'button_download'}>「微」顯學的攝影技巧_補_名字長一點點點點點點點點點點點點點.pptx</Button>
              <Button className={'iconbutton_4'} icon="cloud-download" />
            </ButtonGroup>
            <br />
            <h3>Disabled button停用按鈕</h3>
            <Button className={size +' button_default'} disabled>報名成功</Button>
            <Button className={size +' button_primary'} disabled>Primary關鍵動作</Button>
            <br />
            <h3>Button group 按鈕群組</h3>
            <ButtonGroup>
            <Button className={'size_medium' +' button_primary'}>已發佈</Button>
            <Button className={'size_medium' +' button_group2'}>暫存</Button>
            </ButtonGroup>
            <br />
            <h3>Multiple button 複合功能按鈕</h3>
          </Card>
        </div>
        <div>
        <br /><br />
          <Card title="Dropdowns">  
            <h3>Default</h3>
            <Dropdown overlay={menu} className={'dropdown_default'}>
              <Button>
                排序 <Icon type="down"/>
              </Button>
            </Dropdown>
            <br />
            <h3>Disabled</h3>
            <Dropdown overlay={menu} className={'dropdown_default'} disabled>
              <Button>
                排序 <Icon type="down"/>
              </Button>
            </Dropdown>
            
          </Card>
          <br /><br />
          <Card title="Navs">
          <Row className={'topnav_bar'}>
            <Col span={18}>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                
              >
              
                <Menu.Item key="online" className={'topnav_bar_item'}>
                  線上培訓
                </Menu.Item>
                <Menu.Item key="course" className={'topnav_bar_item'}>
                  實作課程
                </Menu.Item>
                <Menu.Item key="grow" className={'topnav_bar_item'}>
                  就業養成
                </Menu.Item>
                <Menu.Item key="free" className={'topnav_bar_item'}>
                  免費課程專區
                </Menu.Item>
                <Menu.Item key="teacher"className={'topnav_bar_item'}>
                  提拔講師
                </Menu.Item>
                
              </Menu>
            </Col>
            <Col span={6}>
              <div className={'iconbutton_1 topnav_bar_iconitem'}>
              <Icon type="search" theme="outlined" className={'icon_topnavbar'} />
              <Icon type="shopping-cart" theme="outlined" className={'icon_topnavbar'} />
              <Icon type="bell" theme="outlined" className={'icon_topnavbar'} />
              <Avatar className={'ava_topnavbar'} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </div>
              
            </Col>
            </Row>

            <br /><br />
            <Row className={'topnav_bar'} style={{width:"100%"}}>
            <Col span={4}>
                            
            </Col>
            <Col span={16} style={{paddingBottom: '10px'}}>
            <Search
              placeholder="搜尋想學習的課程"
              onSearch={value => console.log(value)}
              className={'topnav_bar_search'}
            />
            </Col>
            <Col span={4}>
                            
            </Col>
            </Row>
          </Card>

          <br /><br />
          <Card title="Inputs">
          <Row>
            <Col span={12}>
            <Input placeholder="請輸入折扣金額" className={'input_default'+'  input_medium'} style={{marginBottom: '10px'}} />
            <Input addonAfter="NTD" placeholder="請輸入0~10,000" className={'input_default'+' input_medium'}  style={{marginBottom: '10px'}} />
            <Input addonAfter="兌換" placeholder="請輸入折價序號" className={'input_default'+' input_medium'}  style={{marginBottom: '10px'}} />
            
            <Input placeholder="請輸入折扣金額" className={'input_mustfill input_default'+' input_medium'}  style={{marginBottom: '10px'}} />
            <p  className={'input_mustfill_text'}><Icon type="exclamation-circle" theme="outlined" /> 此為必填欄位</p>
            <Input placeholder="請輸入折扣金額" className={'input_mustfill input_default'+' input_medium'}  style={{marginBottom: '10px'}} />
            <p  className={'input_mustfill_text'}><Icon type="close-circle" theme="outlined" /> 格式錯誤</p>
            <br />
            <h3>Search</h3>
            <Search
              placeholder="請輸入標題關鍵字"
              onSearch={value => console.log(value)}
              className={'input_default'+' input_medium'}
              style={{marginBottom: '10px'}}
            />
            <Search
              placeholder="請輸入標題關鍵字"
              onSearch={value => console.log(value)}
              className={'search_underline'+' input_medium'}
            />
            <br /><br />
            <h3>Datepicker</h3>

            </Col>
          </Row>

          <DatePicker 
            placeholder="請選擇日期"
            defaultValue={moment('2018/10/17', dateFormat)} format={dateFormat}
            onChange={DateonChange}
            className={'input_default'+' input_medium'}
            style={{marginBottom: '10px'}} />～
          <DatePicker 
            placeholder="請選擇日期"
            onChange={DateonChange}
            className={'input_default'+' input_medium'} 
            style={{marginBottom: '10px'}}/>
          <br /><br />
          <h3>Square</h3>
          <Checkbox className={'checkbox_default'}>Checkbox Input</Checkbox>
          <br /><Checkbox className={'checkbox_default'} checked>Checkbox Input</Checkbox>
          <br /><Checkbox className={'checkbox_shadow checkbox_default'} checked>Checkbox Input</Checkbox>

          <br /><br />
          <h3>Radio</h3>
          <RadioGroup onChange={this.radioonChange} value={this.state.value}>
            <Radio className={'radio_default'} value={1}>Option A</Radio>
            <br /><Radio className={'radio_default'} value={2}>Option B</Radio>
            <br /><Radio className={'radio_default'} value={3}>Option C</Radio>
          </RadioGroup>
        
          <br /><br />
          <h3>Switch</h3>
          <Switch className={'switch_default'} defaultChecked />
          <br /><Switch className={'switch_default'} />

          </Card>
          
          <br /><br />
          <Card title="Input sizes">
          <Row>
            <Col span={7}>
            <h3>small</h3>
            <Input placeholder="請輸入折扣金額" className={'input_default'+'  input_small'}  style={{marginBottom: '10px'}} />
            <br /><Input addonAfter="NTD" placeholder="請輸入0~10,000" className={'input_default'+' input_small'}  style={{marginBottom: '10px'}} />
            <br /><Search
              placeholder="請輸入標題關鍵字"
              onSearch={value => console.log(value)}
              className={'input_default'+' input_small'}
              style={{width: '100%',padding: '0px !important', marginBottom:'10px'}}
            />
            <br /><DatePicker 
            style={{width: '100%',marginBottom: '10px'}}
            placeholder="請選擇日期"
            defaultValue={moment('2018/10/17', dateFormat)} format={dateFormat}
            onChange={DateonChange}
            className={'input_default'+' input_small'} />
            <br /><Dropdown overlay={menu} style={{width: '100%'}} className={'dropdown_default'+' input_small'}>
              <Button>
                排序 <Icon type="down"/>
              </Button>
            </Dropdown>
            </Col>
            <Col span={1}>
            </Col>
            <Col span={7}>
            <h3>medium</h3>
            <Input placeholder="請輸入折扣金額" className={'input_default'+'  input_medium'}  style={{marginBottom: '10px'}} />
            <br /><Input addonAfter="NTD" placeholder="請輸入0~10,000" className={'input_default'+' input_medium'}  style={{marginBottom: '10px'}} />
            <br /><Search
              placeholder="請輸入標題關鍵字"
              onSearch={value => console.log(value)}
              className={'input_default'+' input_medium'}
              style={{marginBottom: '10px'}}
            />
            <br /><DatePicker 
            style={{width: '100%',marginBottom: '10px'}}
            placeholder="請選擇日期"
            defaultValue={moment('2018/10/17', dateFormat)} format={dateFormat}
            onChange={DateonChange}
            className={'input_default'+' input_medium'} />
            <br /><Dropdown overlay={menu} style={{width: '100%'}} className={'dropdown_default'+' input_medium'}>
              <Button>
                排序 <Icon type="down"/>
              </Button>
            </Dropdown>
            </Col>
            <Col span={1}>
            </Col>
            <Col span={8}>
            <h3>large</h3>
            <Input placeholder="請輸入折扣金額" className={'input_default'+'  input_large'}  style={{marginBottom: '10px'}} />
            <br /><Input addonAfter="NTD" placeholder="請輸入0~10,000" className={'input_default'+' input_large'}  style={{marginBottom: '10px'}} />
            <br /><Search
             style={{marginBottom: '10px'}}
              placeholder="請輸入標題關鍵字"
              onSearch={value => console.log(value)}
              className={'input_default'+' input_large'}
            />
            <br /><DatePicker 
            style={{width: '100%',marginBottom: '10px'}}
            placeholder="請選擇日期"
            defaultValue={moment('2018/10/17', dateFormat)} format={dateFormat}
            onChange={DateonChange}
            className={'input_default'+' input_large'} />
            <br /><Dropdown overlay={menu} style={{width: '100%'}} className={'dropdown_default'+' input_large'}>
              <Button>
                排序 <Icon type="down"/>
              </Button>
            </Dropdown>
            </Col>
          </Row>

          </Card>

          <br /><br />
          <Card title="Forms">
            <h2>選擇發票類型<small style={{color: 'red',fontSize:'12px'}}> *為必須欄位</small></h2>
            <br /><Row>
              <Col span={18}>
              <Form>
                <FormItem
                {...formItemLayout}
                  label="類型"
                  style={{marginLeft: '30px', marginBottom:'0px'}}
                >
                  <RadioGroup onChange={this.radioonChange} value={this.state.value}>
                    <Radio className={'radio_default'} value={1}>個人</Radio>
                    <Radio className={'radio_default'} value={2}>捐贈</Radio>
                    <Radio className={'radio_default'} value={3}>企業</Radio>
                  </RadioGroup>
                </FormItem>

                <FormItem
                {...formItemLayout}
                  label="購買人"
                  style={{marginLeft: '30px', marginBottom:'0px'}}
                  required
                >
                  <Input className={'input_default'+' input_medium'} /><p  className={'input_mustfill_text'}  style={{fontSize: '12px',lineHeight:'28px',marginBottom:'0px'}}><Icon type="exclamation-circle" theme="outlined" /> 此為必填欄位</p>
                </FormItem>
                <FormItem
                {...formItemLayout}
                  label="聯絡電話"
                  style={{marginLeft: '30px', marginBottom:'10px'}}
                  required
                >
                  <Input className={'input_default'+' input_medium'} />
                </FormItem>
                <FormItem
                {...formItemLayout}
                  label="電子信箱"
                  style={{marginLeft: '30px', marginBottom:'10px'}}
                  required
                >
                  <Input className={'input_default'+' input_medium'} />
                </FormItem>
                <FormItem
                {...formItemLayout}
                  label="地址"
                  style={{marginLeft: '30px', marginBottom:'10px'}}
                  required
                >
                <Row gutter={8} style={{marginBottom:'10px'}}>
                  <Col span={8}>
                  <Dropdown overlay={menu} className={'dropdown_default'+' input_medium'}>
                    <Button>
                      高雄市 <Icon type="down"/>
                    </Button>
                  </Dropdown>
                  </Col>
                  <Col span={8}>
                  <Dropdown overlay={menu} className={'dropdown_default'+' input_medium'}>
                    <Button>
                      鹽埕區 <Icon type="down"/>
                    </Button>
                  </Dropdown>
                  </Col>
                  <Col span={8}>
                  <Input className={'input_default'+' input_medium'} />
                  </Col>
                  </Row>
                  <Input className={'input_default'+' input_medium'} placeholder="請輸入地址" />
                  <p style={{fontSize: '12px',lineHeight:'28px',marginBottom:'0px',color:'#666666'}}>作為寄送企業電子發票及個人中獎發票使用，請確實填寫</p>
                
                </FormItem>
                <FormItem
                {...formItemLayout}
                  label="電子發票載具"
                  style={{marginLeft: '30px', marginBottom:'10px'}}
                  required
                >
                
                  <Dropdown overlay={menu} className={'dropdown_default'+' input_medium'}>
                    <Button>
                      不使用載具(索取發票) <Icon type="down"/>
                    </Button>
                  </Dropdown>
                  <Checkbox className={'checkbox_default'}>記住我的資訊</Checkbox>
                </FormItem>
                
              </Form>
              </Col>
            </Row>
          </Card>

          <br /><br />
          <Card title="List">
          </Card>

          <br /><br />
          <Card title="Table">
          </Card>

          <br /><br />
          <Card title="Cards">
          </Card>

        </div>
      </div>

    );
  }
}

//export default App;

ReactDOM.render(<App />, document.getElementById('content1'));