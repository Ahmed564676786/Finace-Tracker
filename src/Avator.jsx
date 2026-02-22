import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const Avator= () => (
  <Space size={18} wrap>

    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </Space>
);
export default Avator;