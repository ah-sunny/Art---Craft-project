import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)

    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const displayName = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        const user = { displayName, photoURL, email, password }
        // console.log(displayName, photoURL, email, password, user);
        //reset error
        // setRegisterError('')
        if (password.length < 6) {
            toast.error(' Password should be at least 6 characters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should be at one uppercase characters.')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Your password should be at one lowercase characters.')
            return;
        }



        // // create user
        createUser(email, password)
            .then(() => {
                fetch('https://art-and-craft-store-server-henna.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('in post responsee', data)
                        if (data.insertedId) {
                            swal({
                                title: "Good job!",
                                text: "User create successfully!",
                                icon: "success",
                                button: "okay!",
                            });
                        }
                        event.target.reset()
                    })
                
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div className='mb-10'>
            <div>
                <h2 className="text-3xl mt-10 mb-4 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name :</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL :</span>
                        </label>
                        <input type="text" required name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email :</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password :</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            required name="password" placeholder="Password" className="input input-bordered" />

                             <span className='absolute bottom-32 lg:bottom-[132px] right-5 lg:right-[408px] ' onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                {/* {
                    registerError && <p className='text-red-500'>{registerError} </p>
                } */}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;