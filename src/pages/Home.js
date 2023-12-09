import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        console.log("res", result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }
    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>



                                    <Link

                                        to={`/viewuser/${user.id}`}
                                    >

                                        <Button
                                            title='View'
                                        >

                                            <VisibilityIcon

                                            />
                                        </Button>


                                    </Link>


                                    <Link
                                        to={`/edituser/${user.id}`}
                                    >
                                        <Button
                                            title='Edit'
                                        >

                                            <EditIcon />
                                        </Button>

                                    </Link>


                                    <Button
                                        title='Delete'
                                        onClick={() => deleteUser(user.id)}
                                    >

                                        <DeleteIcon
                                            style={{ color: 'red' }}
                                        />
                                    </Button>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
