const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() =>{
    console.log("Connection Successful");
})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chatData = [
    {
        from: "Yash",
        to: "Aditya",
        msg: "Hi bro",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Rohan",
        msg: "Let's meet at 5 PM.",
        created_at: new Date(),
    },
    {
        from: "Amit",
        to: "Neha",
        msg: "Can you send me the notes?",
        created_at: new Date(),
    },
    {
        from: "Suresh",
        to: "Kavita",
        msg: "Great job on the project!",
        created_at: new Date(),
    },
    {
        from: "Ravi",
        to: "Ananya",
        msg: "Happy Birthday! Have a great day!",
        created_at: new Date(),
    },
    {
        from: "Pooja",
        to: "Vikram",
        msg: "Let's catch up this weekend.",
        created_at: new Date(),
    }
];

Chat.insertMany(chatData);