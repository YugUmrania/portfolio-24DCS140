function ErrorMessage({message}) {
    return (
        <div className="error-box">
            <p>Something went wrong: {message}</p>
        </div>
    );
}

export default ErrorMessage;