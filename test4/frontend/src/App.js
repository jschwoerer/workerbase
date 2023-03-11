import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import EmailForm from './pages/EmailForm'
import ReceivedEmails from './pages/ReceivedEmails'
import SentEmails from './pages/SentEmails'

import './App.css'

function App () {
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={< Home/>} />
					<Route path="/send" element={<EmailForm />} />
					<Route path="/sent" element={<SentEmails header="Sent Emails"/>} />
					<Route path="/received" element={<ReceivedEmails header="Received Emails"/>} />
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App
