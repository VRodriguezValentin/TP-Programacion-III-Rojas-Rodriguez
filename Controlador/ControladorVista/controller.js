
app.use("/Styles", express.static(__dirname + "/Styles"))

app.get('/', (req, res) => {
    res.render(path.join(__dirname + "/Vista/login.ejs"))
})