import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HelloWorld from '../components/HelloWorld'

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={HelloWorld}>
			<IndexRoute component={HelloWorld} />
		</Route>
	</Router>
);

export default routes