const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("You are on the homepage");
})

app.post("/post", (req,res) => {
    req.body = {
        user: "DanielVidana"
    }
    res.send(`Welcome ${req.body.user}`)
})

app.delete("/delete", (req,res) => {
    req.body = {
        taskId: "12345"
    }
    res.send({delete: true})
})

app.put("/put/:id", (req, res) => {
    res.send(`Task ${req.params.id} has been updated`)
})

app.listen(PORT,() => {
    console.log("Server on port : ", PORT);
})