import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {HOME_ROUTE, USER_LIST_ROUTE} from "routes/path";
import _map from "lodash/map";

const Layout = ({ children }) => {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<div>
						{_map([HOME_ROUTE, USER_LIST_ROUTE], (item) =>
							<Link key={item} style={{color: "white", paddingLeft: "10px" }} to={item}>{item}</Link>)
						}
					</div>
					some header
				</header>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout