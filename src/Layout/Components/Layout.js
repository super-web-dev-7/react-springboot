import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Link} from "react-router-dom";
import {
    CssBaseline,
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    makeStyles,
    useTheme,
} from '@material-ui/core'
import {
    Home as HomeIcon,
    LiveHelp as LiveHelpIcon,
    QuestionAnswer as QuestionAnswerIcon
} from '@material-ui/icons'

import Header from "./Header";
import Dashboard from "../../Components/Dashboard";
import ChatPane from "../../Components/Chat/Client/chatPane";
import Ticket from "../../Components/Ticket";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Layout(props) {
    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button key="dashboard" component={Link} to="/dashboard">
                    <ListItemIcon>
                        <HomeIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem button key="chat" component={Link} to="/chat">
                    <ListItemIcon>
                        <LiveHelpIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText>Chat</ListItemText>
                </ListItem>
                <ListItem button key="ticket" component={Link} to="/ticket">
                    <ListItemIcon>
                        <QuestionAnswerIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText>Ticket</ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Switch>
                <Route path="/dashboard">
                    <Header title="Dashboard"/>
                </Route>
                <Route path="/chat">
                    <Header title="Chat"/>
                </Route>
                <Route path="/ticket">
                    <Header title="Ticket"/>
                </Route>
            </Switch>

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Paper className={classes.paper}>
                    {/*<ChatPane/>*/}
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/chat">
                            <ChatPane />
                        </Route>
                        <Route path="/ticket">
                            <Ticket />
                        </Route>
                    </Switch>
                </Paper>
            </main>
        </div>
    );
}

Layout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Layout;
