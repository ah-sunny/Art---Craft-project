import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { SignInUser, googleCreateUser, githubCreateUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        //sign in user
        SignInUser(email, password)
            .then(() => {
                swal({
                    title: "Good job!",
                    text: "User create successfully!",
                    icon: "success",
                    button: "okay!",
                });
                event.target.reset()
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleGoogleLogIn = () => {
        googleCreateUser()
            .then(result => {
                // const user = {name:`${result?.displayName}` ,photo: `${result?.photoURL}`,email:`${result?.email}`,uid: `${result?.uid}`  }
                fetch('https://art-and-craft-store-server-henna.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(result?.user)
                })
                    .then(res => res.json())
                    .then(data => {
                        swal({
                            title: "Good job!",
                            text: "User create successfully!",
                            icon: "success",
                            button: "okay!",
                        });
                        console.log(data)
                        // console.log(result.user)
                        // console.log(user)
                        navigate(location?.state ? location.state : '/');
                    })



                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
const handleGithubLogin = () => {
            githubCreateUser()
                .then(result => {
                    swal({
                        title: "Good job!",
                        text: "User create successfully!",
                        icon: "success",
                        button: "okay!",
                    });
                    console.log(result.user)
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    toast.error(error)
                    console.log("this error :", error)
                })
        }

        return (
            <div>
                <h2 className="text-3xl my-10 text-center font-semibold">Login with </h2>
                <div className="flex justify-center gap-4">
                    <div onClick={handleGoogleLogIn}
                        className="card bg-base-100 shadow-xl w-44 flex flex-row items-center gap-4 px-4 py-3 text-3xl font-bold ">
                        <span><FcGoogle></FcGoogle></span>
                        <p>Google</p>
                    </div>
                    <div onClick={handleGithubLogin} className="card bg-base-100 shadow-xl w-44 flex flex-row items-center gap-4 px-4 py-3 text-3xl font-bold ">
                        <span><FaGithub ></FaGithub ></span>
                        <p>GitHub</p>
                    </div>
                </div>

                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account ? <Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
                <ToastContainer></ToastContainer>
            </div>
        );
    };

    export default Login;