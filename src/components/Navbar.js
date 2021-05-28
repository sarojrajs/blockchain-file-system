import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../file.svg'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
          <img src={box} width="30" height="30" className="align-top" alt="" />
          <h1 className='text-white'>Blockchain File System</h1>
      
        <ul className="navbar-nav px-3">
          <b className='text-white'>{this.props.account?
        <img alt=""
        className='ml-2'
        width='30'height='30'
        src={`data:image/png;base64,${new Identicon(this.props.account,30).toString()}`}/>:<span></span>  
        }
        </b>
        </ul>
      </nav>
    );
  }
}

export default Navbar;