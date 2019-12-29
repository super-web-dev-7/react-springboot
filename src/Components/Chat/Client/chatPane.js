import React, {Component} from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../ConstEvents';
import ChatNameForm  from './ChatNameForm';
import ChatDashboard from './ChatDashboard';
import DashBoard from './DashBoard';
//import ChatMenu from './ChatMenu';

const socketUrl = "http://localhost:3231"

export default class chatPane extends Component{
    constructor(props){
        super(props);

        this.state ={
            socket:null,
            user: null,
            
        };
    }
    componentDidMount(){
        this.initSocket()
    }
    /*
    *
    *  Connect to 'socketUrl' and initialise the socket.
    * 
    */   
    initSocket =() =>{
        const socket = io.connect(socketUrl)
        socket.on('connect', () =>{
            console.log("Connected");
        })
        this.setState({socket})
    }

    /*
    *   Sets the user property in state
    *   @Param user {id:number, name:string}
    */
    setUser = (user) =>{
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }

    /**
     * Sets the user property in state to Null.
     * 
     */
    logout = () => {
        const { socket } =  this.state
        socket.emit(LOGOUT);
        this.setState({user:null})
    }

    render(){

        const { socket, user} = this.state
        return(
            <div>
                {
                    !user ?
                    <ChatNameForm socket={socket} setUser={this.setUser} />  
                    :
                    //<ChatDashboard socket={socket} user={user} logout = {this.logout} />
                    //<ChatMenu />
                    <DashBoard />
                }
                
            </div>  
            
        );
    }
}
