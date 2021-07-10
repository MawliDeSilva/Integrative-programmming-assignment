import React from 'react'
import { NavLink} from './NavbarElements';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
  } from 'cdbreact';
import '../App.css';

function Sidebar(){
        return ( 
            // -------sidebar------- 
            <div className="col-2 sidebarComponent">
            <CDBSidebar textColor="#fff" backgroundColor="#333" >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        MONITOR
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu style={{ fontWeight: 'bold' }}>
                        <NavLink exact to="/" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="tachometer-alt" className="sideMenuitem">DASHBOARD</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tables" activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="table" className="sideMenuitem">TABLE LISTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/alerts"  activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="bell" className="sideMenuitem">ALERTS</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/users-add"  activeClassName="activeClicked" className="sideNavlink">
                            <CDBSidebarMenuItem icon="user" className="sideMenuitem">USERS</CDBSidebarMenuItem>
                        </NavLink>
                       
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: "center" }}>
                    <CDBSidebarMenu style={{ fontWeight: 'bold' }}>
                        <NavLink exact to="/" className="sideNavlink">
                            <CDBSidebarMenuItem style={{color:"#fff"}} icon="sign-out-alt" className="sideMenuitem">LOGOUT</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarFooter>
            </CDBSidebar>
         </div>
         );

}
 
export default Sidebar;