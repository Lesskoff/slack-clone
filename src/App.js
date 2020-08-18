import React, { useState } from "react"
import "./App.css"
import { useStateValue } from "./StateProvider"
import Login from "./Login"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
	const [{ user }, dispatch] = useStateValue()

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<div className="app__main">
										<h1>I love you, Anastasia!</h1>
										<img src="/heart.svg" alt="heart" />
									</div>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	)
}

export default App
