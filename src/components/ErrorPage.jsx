const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl text-gray-600">Page Not Found</p>
            <a href="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Back Home</a>
        </div>
    </div>
    );
};

export default ErrorPage;