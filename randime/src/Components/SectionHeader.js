import React from 'react';
import logo from './img/logo.png'
function SectionHeader() {
	return(
		<header className="header-section clearfix">
			<a href="index.html" className="site-logo">
				<img src={logo} alt="Logo" />
			</a>
        <div className="header-right">
			<div className="user-panel">
				<a href className="login">Help</a>
				<span>|</span>
			</div>
        	<div className="user-panel">
            	<a href className="login">About</a>
          	</div> 
        </div>
    	</header>
	);
}
export default SectionHeader;