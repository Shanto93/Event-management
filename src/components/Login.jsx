import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate(location?.state? location.state:'/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            // Navigate after login
            navigate(location?.state? location.state:'/');
            e.target.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5">
                        <p>Do not have acount? Please <Link to='/register'> <span className="text-blue-800 font-bold hover:text-red-700">Register</span> </Link> </p>
                    </div>
                    <div className="mx-auto mb-5">
                        <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;