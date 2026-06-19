const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("FitZone Gym Backend Running");
});

app.post("/contact", (req, res) => {

    let messages = [];

    try {

        if (fs.existsSync("message.json")) {

            const data = fs.readFileSync("message.json", "utf8");

            if (data.trim() !== "") {
                messages = JSON.parse(data);
            }
        }

    } catch (err) {
        messages = [];
    }

    messages.push(req.body);

    fs.writeFileSync(
        "message.json",
        JSON.stringify(messages, null, 2)
    );

    res.json({
        success: true,
        message: "Message Saved Successfully"
    });
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
