import React from 'react';

const ErrorPage = () => {
  return (
    <html>
      <head>
        <title>Error</title>
        <style>
          {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            color: #333;
            text-align: center;
            padding-top: 50px;
          }

          h1 {
            font-size: 36px;
            margin-bottom: 20px;
          }

          p {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .error-code {
            font-size: 72px;
            margin-bottom: 40px;
            color: #d9534f;
          }

          .error-message {
            font-size: 24px;
          }
        `}
        </style>
        <link
          rel="stylesheet"
          href="https://127.0.0.1:58082/stylesheet?id=1uwezAIRLEdedpmT"
        />
      </head>
      <body>
        <h1>Oops, something went wrong!</h1>
        <div className="error-code">404</div>
        <p className="error-message">
          We're sorry, but the page you're looking for could not be found.
        </p>
        <p>
          Please check the URL or go back to the{' '}
          <a href="/">homepage</a>.
        </p>
      </body>
    </html>
  );
};

export default ErrorPage;
