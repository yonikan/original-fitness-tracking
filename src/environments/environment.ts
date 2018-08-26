// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBMcWYIoQMRYaekdCxqn7EOjelN8R4gaTc",
    authDomain: "original-fitness-tracking.firebaseapp.com",
    databaseURL: "https://original-fitness-tracking.firebaseio.com",
    projectId: "original-fitness-tracking",
    storageBucket: "original-fitness-tracking.appspot.com",
    messagingSenderId: "439680209633"
  }
};
