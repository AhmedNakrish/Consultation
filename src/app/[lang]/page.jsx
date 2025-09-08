import Herosection from '@/components/home/components/herosection/herosection'
import Statessection from '@/components/home/components/statessection/statessection'
import Categoriessection from '@/components/home/components/categoriessection/categoriessection'
import Businesssection from '@/components/home/components/businesssection/businesssection'
import Selectsection from '@/components/home/components/selectsection/selectsection'
import Clientsection from '@/components/home/components/clientssection/clientsection'
import Contactlocationsection from '@/components/home/components/contactlocationsection/contactlocationsection'
import React from 'react'


const Homepage = () => {
  return (
    <div>
        <Herosection/>
        <Statessection/>
        <Categoriessection/>
        <Businesssection/>
        <Selectsection/>
        <Clientsection/>
        <Contactlocationsection/>
    </div>
  )
}

export default Homepage