const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        username: "vikas patel",
        content: "coding!",
    },
    {
        username: "sharma",
        content: "editing",
    },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts/new", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts"); // Redirect to /posts after form submission
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
