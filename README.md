# Simple-Firebase-Authentication

A simple React-Native app that process Firebase Authentication using Email and Password as authentication providers. The login form provided in the app serves dual purpose of both signing in an user ( if the user account exists ) or creating a user account ( if the email/password combo the user sumbitted doesn't exist in the database). If there is an error on the login form the user is displayed an "Authentication Failed" error message.

As usual, clone or download the repo. Install the dependencies using yarn or npm. Start the JS server and run "react-native run-android" to install the app-debug in your device or emulator.

I've tested this project several times and it should work ( I hope so ).

As a side note, I've probably deleted this Firebase project from my Google account. Most likely you'll need to create your own Firebase Project and import the config to the App.js inorder for this app to work.

