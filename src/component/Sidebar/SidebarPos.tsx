import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
function SideBarPos() {

    return (
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  1
        </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                   2
        </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                   3
        </Menu.Item>
            </Menu>
        </div>
    )
}
export default SideBarPos