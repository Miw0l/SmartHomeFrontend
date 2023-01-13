import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className='Sidebar'>
      <div className='NazwaProjektu' style={divStyle}>
        <h2 style={{color: "white"}}>Smart home</h2>
      </div>
    <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
    </div>
  );
};
export default Sidebar;