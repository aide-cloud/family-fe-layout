import { SiderMenuType } from '@hubiao/family-ui'

// 懒加载
import React, { lazy } from 'react'

import Icons from '@/comm/Icons'

export const menu: SiderMenuType[] = [
  {
    label: '总览',
    icon: <Icons type='icon-igw-l-dashboard-trends' />,
    key: '/',
    component: React.createElement(lazy(() => import('@/pages/home'))),
  },
  {
    label: '用户中心',
    icon: <Icons type='icon-manager-o' />,
    key: '/user',
    children: [
      {
        key: '/manager',
        label: '用户管理',
        component: React.createElement(
          lazy(() => import('@/pages/user/manager'))
        ),
      },
      {
        key: '/role',
        label: '角色管理',
        component: React.createElement(lazy(() => import('@/pages/user/role'))),
      },
      {
        key: '/auth',
        label: '权限管理',
        component: React.createElement(lazy(() => import('@/pages/user/auth'))),
      },
    ],
  },
  {
    label: '监控中心',
    icon: <Icons type='icon-xitongjiankong' />,
    key: '/monitor',
    children: [
      {
        key: '/graph',
        label: '监控看板',
        component: React.createElement(
          lazy(() => import('@/pages/monitor/graph'))
        ),
      },
      {
        key: '/rules',
        label: '规则管理',
        component: React.createElement(
          lazy(() => import('@/pages/monitor/rules'))
        ),
      },
      {
        key: '/alarm',
        label: '告警管理',
        component: React.createElement(
          lazy(() => import('@/pages/monitor/alarm'))
        ),
      },
      {
        key: '/log',
        label: '日志管理',
        component: React.createElement(
          lazy(() => import('@/pages/monitor/log'))
        ),
      },
    ],
  },
  {
    label: '我的',
    icon: <Icons type='icon-manager' />,
    key: '/me',
    children: [
      {
        key: '/todo',
        label: '待办事项',
        component: React.createElement(lazy(() => import('@/pages/me/todo'))),
      },
      {
        key: '/setting',
        label: '个人设置',
        component: React.createElement(
          lazy(() => import('@/pages/me/setting'))
        ),
      },
      {
        key: '/about',
        label: '关于',
        component: React.createElement(lazy(() => import('@/pages/me/about'))),
      },
    ],
  },
]
