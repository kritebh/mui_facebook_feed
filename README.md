## Facebook Feed

### How to Run 

1. Install All Node Modules for both client and server

```bash 
    cd client
    yarn
    cd ../server
    yarn
```

2. Now Create a `.env` file in **server** folder and add two value in it.

```bash
    MONGODB_URL = "mongodb+srv://username:password@cluster0.hdvyt.mongodb.net/pictoryfeed?retryWrites=true&w=majority"
    PORT = 8000
```

3. Now We can start server (Open `Three` Terminal)

First Terminal

```bash
    cd client
    yarn start
```
On the Second Terminal

```bash
    cd server
    node index.js
```
This will run the express server at 8000 port

On the Third Terminal

```bash
    cd server
    node notification.js
```
This will run the socket.io server at 5000 port

4. All Server should be running now

     Visit http://localhost:3000 and we can access the website. 

5. Enter your username (Eg. Your first name)

6. Now You can see all the posts, comments and you can create a post by clicking on Plus (+) Icon at bottom right corner.


![](./screenshot.png)

![](./comments.png)