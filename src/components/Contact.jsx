const Contact = () => {
    return (
        <div>
            <div className="hero min-h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/m5Wwjbf/contact-us.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
            <h2 className="mt-10 text-center text-2xl font-semibold mb-5">Contact us if you need our services. We will be happy to make your events memorable!</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <div className="card h-32 bg-emerald-500 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white font-bold">Address</h2>
                        <p className="text-white font-bold">University of Chittagong, Chittagong</p>
                    </div>
                </div>
                <div className="card h-32 bg-orange-600 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white font-bold">Phone</h2>
                        <p className="text-white font-bold">01997266467</p>
                    </div>
                </div>
                <div className="card h-32 bg-lime-700 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white font-bold">Email</h2>
                        <p className="text-white font-bold">shantoislam7363@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;