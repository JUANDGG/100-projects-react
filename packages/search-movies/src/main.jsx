import React from 'react'
import ReactDOM from 'react-dom/client'

//child component context aplication
import Context from './components/Context.jsx'

//css

import '../dist/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context/>
  </React.StrictMode>
)
