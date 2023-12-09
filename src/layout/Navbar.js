import React from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PortraitIcon from '@mui/icons-material/Portrait';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light " href="/"><PortraitIcon className='logo' />User Managment System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>

                    <Link type="button" className="btn btn-outline-light" to="/adduser"><PersonAddAlt1Icon className='mx-2' />Add User</Link>

                </div>
            </nav>

        </div>
    )
}


