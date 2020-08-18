import React from "react"
import { useHistory } from "react-router-dom"
import db from "./firebase"
import "./SidebarOption.css"

function SidebarOpiton({ id, Icon, title, addChannelOption }) {
	const history = useHistory()

	const selectChannel = () => {
		if (id) {
			history.push(`/room/${id}`)
		} else {
			history.push("/title/")
		}
	}

	const addChannel = () => {
		const channelName = prompt("Enter the channel name")

		if (channelName) {
			db.collection("rooms").add({
				name: channelName,
			})
		}
	}

	return (
		<div
			className="sidebarOption"
			onClick={addChannelOption ? addChannel : selectChannel}
		>
			{Icon ? (
				<h3>
					<Icon className="sidebarOption__icon" /> {title}
				</h3>
			) : (
				<h3 className="sidebarOption__channel">
					<span className="sidebarOption__hash">#</span> {title}
				</h3>
			)}
		</div>
	)
}

export default SidebarOpiton
