# 🛡️Authentication System

🔴This Authentication System is made with NODEJS.🔴It Authenticates User and Direct them to Homescreen/Index page.🔴You can use `isAuthenticated` function to Protect Routes against Unauthenticated Users. 🔴 I used Passport Google OAuth2.0 to login/signup using Google. 🔴 I also used a passport local to Authentication Users using the classic sing-up and sign-in way.
🔴I have used MongoDB as Database to store User Schema.

## 🪧Demo

Hosted at:

## 📐Installation

1) Download Zip extract it and then run following commands in directory:

2) Install my-project by running below command in console

```bash
  npm install
```

3) Add `.env` file with:

- `PORT` - Port You can Specify on which port you want to Run the Application (it runs on `PORT=8000` if you don't provide any).
- `GOOGLE_CLIENT_ID` - You Got from Google for Google OAUTH from https://console.cloud.google.com/apis/credentials
- `GOOGLE_CLIENT_SECRET` - You Got from Google for Google OAUTH from https://console.cloud.google.com/apis/credentials
- `GOOGLE_CALLBACK_URL` - You Got from Google for Google OAUTH from https://console.cloud.google.com/apis/credentials

  4)execute below command to run the server on localhost

```bash
  npm start
```

## 🪛Built With

🟠NODEJS 🟠ExpressJS 🟠MongoDB 🟠Mongoose 🟠EJS 🟠Google OAuth2.0 🟠Passport Local

## 🖼️Screenshots

🔴Landing Page

![Screenshot_1](https://user-images.githubusercontent.com/125384723/227831829-cef47e61-83f9-4ef4-955b-916c933b8cf6.png)

🔴Login Page

![Screenshot_2](https://user-images.githubusercontent.com/125384723/227832019-1cd74ffc-1f4b-4a7f-9188-a8fbc192ed4a.png)

🔴Sign Up Page

![Screenshot_1](https://user-images.githubusercontent.com/125384723/227887107-b69ea9c5-3b8b-4fce-8895-aff3a155ae0b.png)

🔴Home Page (after authentication)

![Screenshot_4](https://github.com/D-4-DIBAKAR/Node_JS_Local_Google_Authentication/assets/71878062/4ae0e94b-df46-42c0-ba93-2e13575296e2)

🔴Change Password Page

![Screenshot_5](https://user-images.githubusercontent.com/125384723/227832080-50eaeda9-4536-4e76-af89-a0d8f4dcb840.png)

## ✨Features

● Implemented the following for a user with respective html pages:

- Sign up with email.
- Sign in (you can redirect to a blank home page with a sign out and reset password button after sign in).
- Log out.
- Change Password after sign in.
- The password stored in the db is encrypted.
- Google Login (Social authentication).

● Added Server validations for:

- Sign Up Page
  - Shows alert to user when user tries to signup with email that is already used by other user.
  - Shows alert to user regarding password when:
  - User enter password which has length lesser than 5 character.
  - When password do not match in password and confirm password field.
  - Sign In Page
  - Shows alert to user when user tries to login with email which is not signed up.
  - Shows alert to user when user enters wrong password.

● NOTE - I INTENTIONALLY REMOVED FRONT END VALIDATION AND DID NOT ADDED `required` IN MY HTML CODE TO SHOWCASE MY SERVER SIDE VALIDATION.

## 🚦Version

1.0 - Running Succesfully with above feature.

## 👦Contact

🔗 Author - @DIBAKAR PARIDA

👨🏻‍💻 dibakarparida51@gmail.com

✅ Linkedin ✅ https://www.linkedin.com/in/dibakar-parida/ ✅

✅ Github ✅ https://github.com/D-4-DIBAKAR ✅
