import React from 'react'
import { Link } from 'gatsby'

export const Layout: React.SFC<{}> = ({ children }) => (
  <div>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}</footer>
  </div>
)
