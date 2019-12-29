import React, { Component } from 'react'; 



export default class ChatMenu extends Component {

	constructor(props){
		super(props)
		this.state = {
			receiver:"",
			
		}
	}

	
    


	handleSubmit = (e) => {
		e.preventDefault()
		const { receiver } = this.state
        const { onSendPrivateMessage } = this.props
        
		onSendPrivateMessage(receiver)
	}



	render()
	{
		//var OnlineClientList = io.sockets.clients()

		const { chats, activeChat, user, setActiveChat, logout} = this.props
		const { receiver, OnlineUserList } = this.state
		
		return (
			<div>
				<OnlineClientList />
			</div>
		);		
	}	
}