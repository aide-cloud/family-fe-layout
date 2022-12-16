import React from 'react'

import { Design } from '@hubiao/family-ui'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Image } from 'antd'
import { menu } from '@/config/menu'
import logo from '@/assets/aide-cloud.png'
import './App.css'

const HeaderRight = () => {
  return (
    <Space size='small'>
      <Avatar icon={<UserOutlined color='red' />} />
    </Space>
  )
}

const App: React.FC = () => {
  return (
    <Design
      openDesignSetting
      menuItem={menu}
      logo={
        <Image
          src={logo}
          height='58px'
          preview={false}
          // 不可选中
          draggable={false}
          // 不可复制
          onContextMenu={(e) => {
            e.preventDefault()
          }}
        />
      }
      headerRight={<HeaderRight />}
    />
  )
}

export default App
