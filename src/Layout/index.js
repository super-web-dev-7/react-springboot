import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import BaseApi from '../Api/BaseApi'
import PrivateLayout from './Private'
import PublicLayout from './Public'

// class Layout extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//
//     }
//
//     render() {
//         const isAuthenticated = localStorage.getItem('user');
//         if (isAuthenticated) {
//             return <PrivateLayout/>
//         }
//         return <PublicLayout/>
//     }
// }

function Layout(props) {
    useEffect(() => {
        const { isAuthenticated, token } = props;

        if (isAuthenticated) {
            BaseApi.authToken = token;
        } else {
            BaseApi.authToken = null;
        }
    });

    const { children } = props;
    if (props.isAuthenticated) {
        return <PrivateLayout {...props}>{children}</PrivateLayout>
    }
    return <PublicLayout {...props}>{children}</PublicLayout>
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticate,
        token: state.auth.token
    }
};

export default withRouter(connect(mapStateToProps)(Layout))
