import React from 'react'
import { useHomeNavigate } from '../hooks/useHomeNavigate';

export const Footer = () => {

  const handleNavigate = useHomeNavigate()

  return (
    <footer className='max-sm:text-sm flex justify-center border-t border-slate-600 py-4'>
      <span>© 2030 <span style={{cursor:"pointer"}} onClick={handleNavigate}>U-Note</span> All Rights Reserved.</span>
    </footer>
  )
}
