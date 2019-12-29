import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => {
    console.log("aaaaaaaaaaaaaa", isAuthenticated)
    return <Route {...rest} render={props => (
        isAuthenticated
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location },
            }}/>
    )}/>
};

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
};

//Retrieve data from Store as props
function mapStateToProps(store) {
    return {
        isAuthenticated: store.auth.isAuthenticate
    }
}

export default connect(mapStateToProps)(PrivateRoute)
