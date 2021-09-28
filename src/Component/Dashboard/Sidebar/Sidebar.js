import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="SilebarContainer">
            <ul>
                <li>
                    <Link to="/dashboard"><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span></Link>
                </li>
                <li>
                    <Link to="/appointments"><FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span></Link>
                </li>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faUsers} /> <span>Patients</span></Link>
                </li>
                <li>
                    <Link to="/addDoctor"><FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span></Link>
                </li>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faFileAlt} /> <span>Prescription</span></Link>
                </li>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faCog} /> <span>Settings</span></Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;