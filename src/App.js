import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about-us" component={AboutUs} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
