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
    MONGODB_URL = "put the url of mongodb database"
    PORT = 8000
```

3. Now We can start server (Open Two Terminal)

```bash
    cd client
    yarn start
```
On the second Terminal

```bash
    cd server
    node index.js # You can also use nodemon index.js
```

4. Both Server should be running now

     Visit http://localhost:3000 and we can access the website. 

5. Enter your username (Eg. Your first name)

6. Now You can see all the posts, comments and you can create a post also by clicking on Plus (+) Icon at bottom right corner.