import { SiderMenuType } from '@hubiao/family-ui'

// 懒加载
import React, { lazy } from 'react'

import Icons from '@/comm/Icons'

export const menu: SiderMenuType[] = [
  {
    label: '菜单项一',
    icon: <Icons type='icon-cc-plane' />,
    key: '/',
    component: React.createElement(lazy(() => import('@/pages/home'))),
  },
  {
    label: '菜单项二',
    icon: <Icons type='icon-celveguanli1' />,
    key: '/home',
    component: React.createElement(lazy(() => import('@/pages/home'))),
  },
]
