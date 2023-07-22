// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/*HOME*/
export const API_PATH_HOME = 'http://localhost:3000';

/*Subjects*/

//GET
export const API_PATH_SUBJECTS = 'http://localhost:3000/subjects';
//POST
export const API_PATH_SUBJECTS_CREATE =
  'http://localhost:3000/subjects/register';

// //GET
// export const API_PATH_SUBJECT = 'http://localhost:3000/subjects/:id';

// //PATCH
// export const API_PATH_SUBJECTS_UPDATE = 'http://localhost:3000/subjects/:id';

// //DELETE
// export const API_PATH_SUBJECTS_DELETE = 'http://localhost:3000/subjects/:id';

/*Rooms*/

//GET
export const API_PATH_ROOMS = 'http://localhost:3000/room';

export const API_PATH_ROOM = 'http://localhost:3000/room/:id';

//POST
export const API_PATH_ROOMS_CREATE = 'http://localhost:3000/room/register';

// //GET
// export const API_PATH_ROOM = 'http://localhost:3000/room/:id';

// //UPDATE
// export const API_PATH_ROOMS_UPDATE = 'http://localhost:3000/room/:id';
// //DELETE
// export const API_PATH_ROOMS_DELETE = 'http://localhost:3000/room/:id';

/*Videos*/

//GET
export const API_PATH_VIDEOS = 'http://localhost:3000/video';

//POST
export const API_PATH_VIDEOS_CREATE = 'http://localhost:3000/video/register';

export const API_PATH_PICTURES = 'http://localhost:3000/subjects/pictures/';
