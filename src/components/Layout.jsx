import React from "react"; 

const Header = () => { 
return <h3>This is Header</h3>; 
}; 

const Footer = () => { 
return <h3>This is Footer</h3>; 
}; 

const Layout = ({ children }) => { 
return ( 
	<> 
        <Header /> 
            {children} 
        <Footer /> 
	</> 
); 
}; 

export default Layout;
