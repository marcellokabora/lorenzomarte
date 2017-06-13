// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAwJR_q7nEu9ANQIxFF9YC-3WRPyyQQnEU",
    authDomain: "lorenzomarte-6ee4d.firebaseapp.com",
    databaseURL: "https://lorenzomarte-6ee4d.firebaseio.com",
    projectId: "lorenzomarte-6ee4d",
    storageBucket: "lorenzomarte-6ee4d.appspot.com",
    messagingSenderId: "822596873888"
  },
  baseurl: 'https://firebasestorage.googleapis.com/v0/b/lorenzomarte-6ee4d.appspot.com/o/'
};
