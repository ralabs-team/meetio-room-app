Room Manager

Using:
- React + Redux
- Cordova

Prepare to build:
   - cd main
   - npm install
   - create .env file with such variables:
     REACT_APP_GOOGLE_CLIENT_ID
     REACT_APP_GOOGLE_CLIENT_SECRET
     REACT_APP_GOOGLE_API_KEY
     REACT_APP_FIREBASE_USER_URL
     REACT_APP_SETTINGS_PASSWORD
   - npm run build

  in the root folder:
   - set in config.xml your
     REVERSED_CLIENT_ID
     WEB_APPLICATION_CLIENT_ID
     PROJECT_ID.firebaseapp.com
   - cordova platforms add android

How to build:
   - cordova build android
