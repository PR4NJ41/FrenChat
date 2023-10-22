# FrenChat
A platform where you can chat.

# About Me
```
Name: Pranjal Rajput

University: IIT BHU Varanasi

Department: Chemical Engineering
```

[**PREVIEW & SETUP VIDEO**](https://drive.google.com/file/d/1--akSdu5k2h1Mz-POBKORSh4SxhFa9m7/view?usp=drivesdk)

## Steps to Run the App on your Local System

1. Clone the Repo
```
https://github.com/PR4NJ41/FrenChat.git
cd FrenChat
```
2. There are 3 directories: Client, Server & Socket. Now, Install the Client side Dependencies using:
```
cd client
npm i
```
3. Now for Socket:
```
cd ..
cd socket
npm i
```
4. Now for server:
```
cd ..
cd server
npm i
```
5. Now open 2 more Terminal windows for socket & client.
6. In socket's Terminal run ```npm start```
7. In server's Terminal run ```npm start```
8. In client's Terminal run ```npm start```
9. Now open ```http://localhost:3000``` in a browser of your choise.
10. Now you can sign in using Google OAuth 2.0

# Tech Documentation:

### React.js
React.js serves as the foundation of our chat app's front-end, allowing us to create dynamic and responsive user interfaces with a component-based structure.

### Socket.IO and Socket.IO Client
Socket.IO and Socket.IO Client facilitate real-time communication between the server and clients in our chat application, enabling instant messaging and updates.

### Node.js
Node.js powers the back-end of our chat app, managing server-side operations and ensuring the seamless functioning of real-time chat features.

### MongoDB
We utilize MongoDB as our NoSQL database to store and manage chat messages and user data, ensuring scalability and data persistence.

### JSON Web Tokens (JWT)
JWTs are employed for secure user authentication and authorization in our chat app, enhancing the privacy and security of user data.

### Dotenv
The dotenv library ensures that sensitive environment variables, such as API keys and database credentials, are securely managed in our Node.js application.

### Nodemon
Nodemon is an essential development tool that automatically restarts the Node.js server when code changes are detected, streamlining the development process.

### Material-UI Icons
We use Material-UI Icons to enhance the visual appeal of our chat app, incorporating a wide range of icons to provide a rich user experience.

### Axios
Axios is used to facilitate HTTP requests in our chat app, enabling communication between the front-end and back-end, and the exchange of data.

### Jwt-Decode
The jwt-decode library is employed to decode and interpret JWT tokens, aiding in user authentication and managing secure communications.

### React-Google-Login and React-Oauth/google:
These libraries are integrated to enable OAuth-based Google login, making it convenient for users to log in using their Google accounts, enhancing the user authentication process in our chat app.




