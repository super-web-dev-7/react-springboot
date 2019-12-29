import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, Button, Chip, Paper, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1px',
        padding: theme.spacing(3, 2),
    },

    flex: {
        display: 'flex',
        alignItems: 'center',

    },
    ListWindow: {
        width: '30%',
        height: '600px',
        borderRight: '1px solid grey',
    },

    chatWindow: {
        width: '70%',
        height: '600px',
        padding: '2px'

    },
    chatBox: {
        width: '100%',
    },
    button: {
        width: '15%',

    },

}));

export default function DashBoard() {
    const classes = useStyles();
    const [chatValue, changeTextValue] = React.useState('');
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Live Chat
                </Typography>
                <Typography variant="h5" component="h5">
                    Topic Placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.ListWindow}>
                        <List>
                            {
                                ['Usman', 'Sadaf', 'shaho'].map(chat => (
                                    <ListItem key={chat} button>
                                        <ListItemText primary={chat}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{from: 'user', msg: 'hello'}].map((chat, i) => (
                                <div className={classes.flex} aligneItems='center' key={i}>
                                    <Chip
                                        icon={<AccountCircleIcon/>}
                                        label={chat.from} className={classes.chip}/>
                                    <Typography variant='p'>{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={classes.flex}>
                    <TextField className={classes.chatBox}
                               label="Chat with User"
                               variant="standard"
                               value={chatValue}
                               onChange={e => changeTextValue(e.target.value)}
                    />

                    <Button classes={classes.Button}
                            variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    );
}
