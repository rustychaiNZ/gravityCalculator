import React from 'react';
import './App.scss';
import './styles/style.scss';
import Container from './components/layout/Container'
import SiteHeader from './components/header/SiteHeader'
import SubHeader from './components/header/SubHeader'
import SideBar from './components/header/SideBar'
import Article from './components/layout/Article'

const App = () => {
	return (
		<Container>
			<SideBar/>
			<SiteHeader/>
			<SubHeader/>
			<Article/>
		</Container>
	)
}

export default App;
