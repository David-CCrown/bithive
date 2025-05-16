"use client";

const ErrorPage = ({ statusCode }: { statusCode?: number }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold">
                {statusCode ? `Error ${statusCode}` : 'An error occurred'}
            </h1>
            <p className="mt-4 text-lg">
                {statusCode
                    ? `An error ${statusCode} occurred on the server.`
                : 'An error occurred on the client.'
            }
            </p>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }: { res?: any; err?: any }) => {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
};

export default ErrorPage;
