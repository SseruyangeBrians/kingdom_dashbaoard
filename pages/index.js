import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideNav from '@/components/SideNav/SideNav'
import AppBar from '@/components/AppBar/AppBar'
import Appsub from '@/components/Appsub/Appsub'
import Users from '@/components/Users/Users'

const inter = Inter({ subsets: ['latin'] })

export  function Home() {
  return (
    <div>
      <SideNav/>
      <Appsub/>
      <Users/>
      <AppBar/>
      
      
    </div>
  )
};
export default Home;
