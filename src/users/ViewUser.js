import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PortraitIcon from '@mui/icons-material/Portrait';

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <PortraitIcon style={{ fontSize: '5em' }} />
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            <h5>Details of user id : {user.id}</h5>
                            <ul className="list-group list-group-item-actions">
                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>UserName: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-4" style={{ display: 'flex' }}>
                        <Link className="flex btn btn-outline-primary text-left" to={"/"}>
                            <ArrowBackIcon className="mx-1" /> Back
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}