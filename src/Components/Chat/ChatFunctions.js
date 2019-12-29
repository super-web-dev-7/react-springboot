const {uuid} = require('uuidv4');

/*
createUser
Creates a user
@prop id {string}
@prop name {string}
@param {object}
    name{string}
*/

const createUser = ({name = ""} = {}) =>(
    {
        id: uuid(),
        name
        

    }
)

/**
 *  createMessage
 *  Creates a Message object.
 *  @prop id {string}
 *  @prop time {Date} the time in 24hr format i.e. 14:22
 *  @prop sender {string} sender of the message
 *  @prop {object}
 *  message {string}
 *  sender {string}
 */

 const createMessage = ({message = "", sender = ""} = {}) => (

    {
        id: uuid(),
        time: getTime(new Date(Date.now())),
        message,
        sender
    }
 )

/**
 * 
 * createChat
 * Creates a Chat Ojbect
 * @prop id {string}
 * @prop name {string
 * @prop message {Array.Message}}
 * @prop users {Array.String}
 * @param {object}
 *      message {Array.Message}
 *      name {string}
 *      users {Array.string} 
 */

 const createChat = ({messages = [], name = "Community", users = []} = {})=> (
    {
        id : uuid(),
        name,
        messages,
        users,
        typingUsers:[]
    }
)


 /**
  * GetDate
  * @param Date{Date}
  * @return a string represented in 24hr time i.e '11.30', '14:40'
  */

  const getTime = (date) => {
      return `${date.getHours()}: ${("0"+date.getMinutes()).slice(-2)}`
  }
module.exports={
    createChat,
    createMessage,
    createUser
}