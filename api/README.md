This is a nodejs-express-mongodb application. Every MEAN Start Up project should follow this and can take the reference for there own profit. It follows
some of the basic standards of Node, APIs and Coding. Give it a try.

Pilot Commit: Created a MEAN Node API stack to get started with. Also have the ability to log all the API call and its response for debugging purposes. Please
call some of the apis and have a look into logs table for more understandings.
- Completed the following APIS end to end:
```
  - signUp- http://localhost:3001/users/signup
  - login - http://localhost:3001/users/login
  - generateCode - http://localhost:3001/users/generateCode
  - forgotPassword - http://localhost:3001/users/forgotPassword
  - changePassword - http://localhost:3001/users/changePassword
  - fetchProfileData - http://localhost:3001/users/profile
  - updateProfileData - http://localhost:3001/users/edit
  - fetchUsers - please visit below for more details
```


You have to Perform all the following steps in the given sequence for Installing this project.

**Install Nodejs**
- Ubuntu Machine
```
$ sudo apt-get install nodejs-legacy
```
- Mac Machine
```
$ brew install nodejs
```
Verify this by using `node -v` and `npm -v`

**Install Mongodb**
- Ubuntu Machine
```
$ sudo apt-get install mongodb
```
The app will automatically create *node-express-stack* database and *users* collection.

- Mac Machine
```
$ brew install mongodb
```
Verify this by using `mongo -version`

Step 1: Add NodeJs PPA. First you need to node.js ppa in our system provide by nodejs official website.
Step 2: Install Node.js and NPM. After adding required PPA file, lets install Nodejs package.
```
	$ sudo apt-get update
	$ sudo apt-get install nodejs
	$ sudo apt-get install npm
```

Step 3: Check Node.js and NPM Version
```
	$ node --version
	$ npm --version
```
Step 4: Install mongodb
```
	$ sudo apt-get install -y mongodb-org
```
Step 5: Install mongoose
```
	$ npm install mongoose
```
Step 6: Install node dependencies
```
    $ npm install
```
Step 7: Download the RoboMongo to access MongoDb.
```
    https://robomongo.org/download
```
Step 8: Connect with the MongoDB with RoboMongo and Create a database name "tudip_technologies_node_stack" (Please give the same DB name in your config/environment/development.js) and then create a collection in it name as "roles" and add the following
document in it:
```
   {
      "name": "user"
   }
   {
      "name: "admin"
   }
```

Step 9 That's it now you have a roles database table and you can start using different type of roles in your app.
```
   Start the node server now listed in step 10.
```
Step 10: To start project use following command.
```
	$ npm start
```

API Documentation:-

- Based Endpoint: http://localhost:3001
- Request Headers: Each of the API calls have apiKey, version and content type being sent. The APIs that require a user authentication (i.e. APIs that are available ONLY for a logged in users), we are additionally sending a token in the HTTP Header. 
```
api_key:
	iOS: 3c4afb4fd46352977647e980f67b7456 // used for iOS
	Android: 1b0b3ff9876a5bf1d33f9767a7489a6f // used for Android
```
- Version: 1.0

- Token: <User Token>

- Content-Type: application/json

- Errors: Following are a few common error responses that are receive if basic required keys are not sent in the HTTP header.
```
Error
Description
-103
No token is provided.
-114
Invalid or expired token.
-117
Invalid or missing APIkey.
-150
Missing some required product details fields.
```

- Sign Up

- Usage: This API is used to register a new user in the system.
- End Point: /users/signup
- HTTP Method: POST
- Request:
```
{  
 "first_name": "John",
 "last_name": "Smith",
 "email": "john.smith@gmail.com", 
 "password": "genican123", 
 "device_token": "6a0974954e45d826239fc3c150734619745ca33e",
 "ud_idd": "12345678",
 "device_os": "ios"
}
```


- Response:
```
                  {
                    "error": {
                                   "code": "",
                                   "message": ""
                                },
                   "success": {
        "status": 1,
        "data": {
            "token":      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJzbWl0aCIsImVtYWlsIjoiam9obi5zbWl0aEBhYmMuY29tIiwicGFzc3dvcmQiOiJKb2huQDEyMyIsImRldmljZU9TIjoiaW9zIiwiZGF0ZSI6MTQ5MTkwNzA1MTc4OCwiaWF0IjoxNDkxOTA3MDUyfQ.7vAxiNopvKaVC1GOyk1TmwKZed7ZOJte-trZ-x_LiKA",
            "user": {}
        }
                }
```
- Error Responses:
	
- Error Description

```
-116
Email already exists.
-105
Enter a valid email address.
```

- Login

- Usage:  To login into the app which is a valid user of GeniCan.
- End Point: /users/login
- HTTP Method: POST
- Request:
```
{
	"user_name":"john.smith@gmail.com",
  	"password":"genican123",
"device_os":"ios",
"device_token":"c064e2f83956611f6696cdf32e6ca4a63f96e544dae0a2d74d5d00a",
  	"ud_id":"123456"
}
```
- Response:
```
{
    "error": {
        "code": "",
        "message": ""
    },
    "success": {
        "status": 1,
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJzbWl0aCIsImVtYWlsIjoiam9obi5zbWl0aEBhYmMuY29tIiwicGFzc3dvcmQiOiJKb2huQDEyMyIsImRldmljZU9TIjoiaW9zIiwiZGF0ZSI6MTQ5MTkwNzk2Nzk3NywiaWF0IjoxNDkxOTA3OTY3fQ.0GeB2oLRJYj4Sr032NTTkSVgm8J4ueDP2HyXY3B5vv8",
            "user": {}
}
   }
}
```
- Error Responses:
	
- Error Descriptions

```
-104
User not found.
-109
Username or password is not correct.
```
- Recover Password

- Usage: To generate the code to recover the password.
- End Point: /users/generateCode
- HTTP Method: POST
- Request:
```
	{
		"email": "john.smith@gmail.com"
}
```
- Response:
```
	{
    		"error": {
        		"code": "",
        "message": ""
    },
"success": {
        "status": 1,
        "data": {}
}
}
```
- Error Response:
	
- Error Description
```
-105
Enter a valid email address.
```


- Forgot Password

- Usage: To set the new password.
- End Point: /users/forgotPassword
- HTTP Method: POST
- Request:
```
		{
    "password": "genican123",
    "verificationCode": "HdgH242Dj"
}
```
- Response:
```
		{
    		"error": {
        	"code": "",
"message": ""
},
"success": {
"status": 1,
“data": {}
}
}
```
- Error Response:
		
- Error Description
```
-112
Verification token is empty or invalid.
```
- Change Password
- Usage: To change the password.
- End Point: /users/changePassword
- HTTP Method: POST
- Request:
```
		{
  "old_password":"genican123",
  "new_password":"genican321"
}
```
- Response:
```
		{
    "error": {
        "code": "",
        "message": ""
    },
    "success": {
        "status": 1,
        "data": {
            "message": "You have updated password successfully."
        }
    }
}
```
- Error Responses:
		
- Error Description

```
-135
Your password was incorrect.
```

- Edit User Profile
- Usage: To edit the profile.
- End Point: /users/edit
- HTTP Method: POST
- Request:

```
{
 "first_name": "Johnny",
 "last_name": "Smith",
 "zip_code":"12354" ,
 "mobile_number": "",
 "profile_image": "<base64 of the image>"
 }
```
- Response:

```
{
    "error": {
        "code": "",
        "message": ""
    },
    "success": {
        "status": 1,
        "data": {
            "User": {}
        }
    }
}
```
- FetchProfileData - http://localhost:3001/users/profile
- Usage: To fetch the profile data.
- End Point: /users/profile
- HTTP Method: POST
- Request:

- Fetch all users
Usage: To fetch all users. If you are specifying custom page and size using query params keep size value constant.
- End Point: /users/fetchUsers or /users/fetchUsers?page=1&size=10
- HTTP Method: GET
- Request: NA.
- Response: 
```
{
    "error": {
        "code": "",
        "message": ""
    },
    "success": {
        "status": 1,
        "data": {
            "data": [
                {
                    "updatedAt": "2017-08-02T10:47:07.077Z",
                    "createdAt": "2017-08-02T10:47:07.077Z",
                    "_id": "5981adabfeab6331c2a3cd2b",
                    "__v": 0,
                    "basic": {
                        "firstName": "Harshal",
                        "lastName": "Yeole",
                        "email": "harshal.yeole@tudip.nl",
                        "password": "$2a$10$2BYzsSIfSgql0wEiShYyf.BNl84XFdT4ILci0.HZN5EQ4yq3XlI06",
                        "mobileNumber": "",
                        "profileImageURL": "https://localhost:3001/public/images/profiles/default.png",
                        "isActive": true
                    }
                },
                {
                    "updatedAt": "2017-08-02T09:38:21.255Z",
                    "createdAt": "2017-08-02T09:38:21.255Z",
                    "_id": "59819d8d1caaf3258e6c2612",
                    "__v": 0,
                    "basic": {
                        "firstName": "Harshal",
                        "lastName": "Yeole",
                        "email": "harshal.yeole@tudip.nl",
                        "password": "$2a$10$2KcV6t2KOmzoVb8DBk31xexj3aWDDymOGEbH1v2XRVPF1wtPrCtW.",
                        "mobileNumber": "",
                        "profileImageURL": "https://localhost:3001/public/images/profiles/default.png",
                        "isActive": true
                    }
                }
            ],
            "total": 5,
            "per_page": 2,
            "current_page": 1,
            "last_page": 3,
            "from": 1,
            "to": 2,
            "next_page_url": "http://localhost:3001/users/fetchUsers?page=2&size=2",
            "previous_page_url": null
        }
    }
}
```
- Error Response:
		
- Error Description
```
-119
Invalid page number or page size
-520
Database error is occur or something went wrong.
```