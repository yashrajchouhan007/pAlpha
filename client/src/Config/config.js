module.exports = {
    appEnv: process.env.REACT_APP_ENV,
    apiHost: process.env.REACT_APP_API_HOST,
    paymentPublicKey: process.env.REACT_APP_STRIPE_KEY,
    aws: {
      // REQUIRED - Amazon Cognito Region
      region: process.env.REACT_APP_REGION,
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
      // OPTIONAL - Hosted UI configuration
      oauth: {
        domain: 'peacefully-dev-m.auth.us-east-2.amazoncognito.com',
        // scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:3000/auth/signin/',
        redirectSignOut: 'http://localhost:3000/auth/signin/',
        responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
    },
    salt: "Qp6KDr0GCLXlU3ecqO5pat1LLJyzArkr",
    dateFormat: "MMM DD, YYYY",
    filloutForms: 'https://get.peacefully.com/master-form-filling-tool/',
    adminEmail: 'hello@peacefully.io',
    freeTrailPeriod: 14
  };
  