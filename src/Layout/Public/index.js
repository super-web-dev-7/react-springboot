import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node.isRequired,
};

function PublicLayout({ children }) {
    return <div className="main">
        <main className="fragment">
            { children }
        </main>
    </div>
}

PublicLayout.propTypes = propTypes;

export default PublicLayout
