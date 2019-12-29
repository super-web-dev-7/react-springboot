const io =  require('./Server.js').io

const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../ConstEvents');
const { createUser, createMessage, createChat} = require('../ChatFunctions');

let connectedUsers = { }

module.exports = function(socket){
    console.log(`Socket Id : ${socket.id}`)

    // verify chatName  
    socket.on(VERIFY_USER, (userChatName, callback) => {
        if (isUser (connectedUsers, userChatName)) {
            callback ({ isUser:true, user:null })
        } else{
             callback ({ isUser:false, user:createUser({name:userChatName})})
            }
    })
    //User connects with userName
    socket.on(USER_CONNECTED, (user) => {
        connectedUsers= addUser(connectedUsers, user)
        socket.user = user
       
        io.emit(USER_CONNECTED, connectedUsers)  
        console.log(connectedUsers); 
    })
}
function addUser (userList, user){
    let newList = Object.assign({}, userList) 
    newList[user.name] = user
    return newList
}

function removeUser(userList, username){
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

function isUser(userList, userChatName){

    return userChatName in userList
}
