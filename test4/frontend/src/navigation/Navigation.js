import { Link } from 'react-router-dom'

import './Navigation.css'

export default function Navigation () {
  return (
		<div className="navigation">
			<nav>
				<ul>
					<li><Link to="/send">Send</Link></li>
					<li><Link to="/sent">Sent</Link></li>
					<li><Link to="/received">Received</Link></li>
				</ul>
			</nav>
			<hr />
		</div>
  )
}
