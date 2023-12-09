import React, { useEffect, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';



export default function EditUser() {

    let navigate = useNavigate()

    let { id } = useParams()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })

    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <EditNoteIcon style={{ fontSize: '5em' }} />
                    <h2 className="text-center m-4">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>

                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter your name'
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>

                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter your username'
                                name='username'
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>

                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Enter your e-mail address'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            <SaveIcon />  Submit
                        </button>

                        <Link className='btn btn-outline-danger mx-2' to="/">
                            <CancelIcon />  Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
