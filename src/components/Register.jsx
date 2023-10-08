import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../providers/AuthProvider';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, name, photo);

        if( !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ .test(password)){
            return alert("Minimum six characters, at least one capital letter and one special character");
        }

        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            updateProfile(result.user,{
                displayName: name,
                photoURL:photo
            })
            .then()
            .catch()
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-[350px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5">
                        <p>Already have acount? Please <Link to='/login'> <span className="text-blue-800 font-bold hover:text-red-600">Login</span> </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;