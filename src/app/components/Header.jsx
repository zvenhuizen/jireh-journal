import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './header.styles.css'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        const { location } = this.props
        function setActive(path, exact) {
            if (exact) 
return location.pathname === path && 'active'
return location.pathname.startsWith(path) && 'active'
        }
        return (
            <div className='header'>
<Link to='/' className={`link ${setActive('/', true)}`}>
                    Note
                </Link>
<Link to='/notes' className={`link ${setActive('/notes')}`}>
                    My Notes
                </Link>
            </div>
        )
    }
}

export default withRouter(Header)