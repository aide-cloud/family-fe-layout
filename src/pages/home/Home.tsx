// 创建const Home: React.FC = () => {}组件快捷键：rafce
import React from 'react'

export interface HomeProps {}
const Home: React.FC<HomeProps> = ({}) => {
  return <div>Home</div>
}

export default Home
