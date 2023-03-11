import { Link } from 'react-router-dom'

import './Home.css'

export default function Home () {
  return (
		<div className="tiles">
			<div className="tile"><Link to ="/send">Send</Link></div>
			<div className="tile"><Link to ="/sent">Sent</Link></div>
			<div className="tile"><Link to ="/received">Received</Link></div>
		</div>
  )
}
