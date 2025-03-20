import React, { ReactNode } from 'react'
import Footer from '../Footer'

interface props{
    children:ReactNode
}
const Wrapper:React.FC<props>= ({children}) => {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}

export default Wrapper