# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase Setup

This project uses Firebase for its backend, specifically Firestore as the database. Follow these steps to set up your own Firebase project.

### 1. Create a Firebase Project

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Sign in with your Google account.
3.  Click on **Add project**.
4.  Enter a name for your project (e.g., `todo-app-poc`) and click **Continue**.
5.  You can choose to enable Google Analytics or not for this project.
6.  Click **Create project**.

### 2. Create a Firestore Database

1.  From your project's dashboard in the Firebase Console, navigate to **Build** > **Firestore Database** in the left-hand menu.
2.  Click **Create database**.
3.  Select **Start in test mode**. This will allow open access for a limited time.
    > **Warning:** Test mode rules should be updated for a production application to secure your data.
4.  Choose a location for your Firestore data.
5.  Click **Enable**.

### 3. Get Your Firebase Configuration

1.  In the Firebase Console, go to your project's dashboard.
2.  Click the gear icon next to **Project Overview** and select **Project settings**.
3.  In the **Your apps** section, click on the Web icon (`</>`).
4.  Enter an app nickname (e.g., `My Todo Web App`) and click **Register app**.
5.  Firebase will provide you with a `firebaseConfig` object. You will need these values for the next step.

### 4. Configure the Application

This application uses environment variables to configure the Firebase connection.

1.  Create a file named `.env.local` in the root of the project directory (`todo-app/.env.local`).
2.  Copy the following content into `.env.local` and replace the placeholder values with the values from your `firebaseConfig` object.

    ```
    REACT_APP_FIREBASE_API_KEY="your-api-key"
    REACT_APP_FIREBASE_AUTH_DOMAIN="your-auth-domain"
    REACT_APP_FIREBASE_PROJECT_ID="your-project-id"
    REACT_APP_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
    REACT_APP_FIREBASE_APP_ID="your-app-id"
    ```

    The application is already set up to use these environment variables to initialize Firebase. After creating the `.env.local` file, you will need to restart your development server for the changes to take effect.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
