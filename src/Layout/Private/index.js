import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'Private layout';
const propTypes = {
    children: PropTypes.node.isRequired
}

function PrivateLayout({ children, location }) {
    return <div>
        {children}
    </div>
}

PrivateLayout.displayName = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout
