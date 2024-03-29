import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Posts } from './components/Posts'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import { Page404 } from './components/Page404'
import './styles/global.css'
import { Menu } from './components/Menu'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/post" element={<Posts />} />
        <Route path="/post/:id" element={<Posts />} /> */}
        <Route path="/post" element={<Posts />}> 
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/post/:id" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
