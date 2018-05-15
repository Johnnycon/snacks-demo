import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Snacks upon Snacks"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
