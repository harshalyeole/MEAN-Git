You can test all APIs on browser by using URL 'http://localhost:3001' (Node server must be in start mode)

For swagger UI for each API, we must have to modify three following files, while we write any new API.

Following 3 files we must have to modify:
1. api-docs.json file.
2. New JSON file for your new API under PATH folder contains information related response data and schema field URL path.
3. New JSON file for your new API under definitions folder contains information related request body field data.

Steps to add new API description for swagger:
1. For every new API, modify 'api-docs.json' file by adding route path "'---new API route name---' + '.json'".
   This file contains information regarding route path under PATH folder.
   For example:
    "/users/login": {
         "$ref": "../path/logInPath.json#/logInRoutes"
       }


2. For every new API, you must create .json file under PATH folder (like logInPath.json).
   This file contains information related response data and schema field URL path.


3. For every new API, you must create .json file under definitions folder (like logInSchema.json).
   This file contains information related request body field data.

