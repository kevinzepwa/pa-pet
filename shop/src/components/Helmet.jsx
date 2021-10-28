import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = 'Pa-Pet - ' + props.title

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
