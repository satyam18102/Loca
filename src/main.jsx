import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import axios from 'axios'
import './index.css'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Form />
    </Provider>
  </StrictMode>,
)
