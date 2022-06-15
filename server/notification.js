const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
})

let onlineUsers = []


function addNewUser(username, socketId) {
    !onlineUsers.some((user) => user.username === username) && onlineUsers.push({ username, socketId })
}

function removeUser(socketId) {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
}

function getUser(username) {
    return onlineUsers.find((user) => user.username === username)
}

io.on("connection", (socket) => {


    socket.on("newUser", (username) => {
        console.log("connected", username)
        addNewUser(username, socket.id)

    })


    socket.on("sendNotification", ({ senderName, receiverName }) => {
        if (senderName !== receiverName) {
            const receiver = getUser(receiverName)
            io.to(receiver.socketId).emit("getNotification", {
                senderName
            })
        }
    })

    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
})

io.listen(5000)