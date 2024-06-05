import {createRoot}from 'react-dom/client'
import React  from 'react'
import './assets/css/index.css'

//components
import App from './components/App.tsx'



const root =createRoot(document.getElementById('root')!);

root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>)