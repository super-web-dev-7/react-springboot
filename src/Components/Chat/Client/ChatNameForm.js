import React, {Component} from 'react';
import { VERIFY_USER } from '../ConstEvents';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class ChatNameForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            userChatName:"",
            error:""
        };
    }

    setUser = ({user, isUser}) => {
        
        if(isUser){
            this.setError("User name Taken")
        }
        else {
            this.props.setUser(user)
            this.setError("")
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { socket } = this.props
        const {userChatName} = this.state
        socket.emit (VERIFY_USER, userChatName, this.setUser)
        
    }

    handleChange = (e) => {
        this.setState({userChatName:e.target.value})
        
    }

    setError = (error) => {
        this.setState({error})
    }

    render() {
        
        const {userChatName, error} = this.state
        return (
                    
                <form >
                <TextField 
                required 
                id="userNickName"
                label="Required"
                defaultValue="Chat Name"
                value = {userChatName}
                onChange={this.handleChange}
                error={error ? error:null}
                helperText={error}
                />
                <br />
                <br />
                <Button 
                    onClick={this.handleSubmit}
                    variant="contained"
                    color="primary">
                                    Start
                </Button>
                </form>
                 
            );
    }
}
