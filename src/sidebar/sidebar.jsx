import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    
    return (
        <React.Fragment>
            <div className="mt-2">
                <h4 className="p-1 border-bottom">Sidebar</h4>
                <div className="list-group mt-2">
                    <NavLink to="/customers" className="list-group-item list-group-item-action">Customers</NavLink>
                    <NavLink to="/customer-wiki/Alpha" className="list-group-item list-group-item-action">Customer Alpha</NavLink>
                    <NavLink to="/customer-wiki/Beta" className="list-group-item list-group-item-action">Customer Beta</NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;