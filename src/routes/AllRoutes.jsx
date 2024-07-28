import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, NoteForm, NotePage, PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <main>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<NoteForm />} key='add'/>
        <Route path='/edit/:id' element={<NoteForm />} key='edit'/>
        <Route path='/note/:id' element={<NotePage />}/>
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </main>
  )
}
