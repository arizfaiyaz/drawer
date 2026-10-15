import exprerss from "express";
import { middleware } from "./middleware";
const app = exprerss();

app.post("/signup", (req, res) => {

})

app.post("/signin", (req, res) => {
    
})

app.post("/room", middleware, (req, res) => {
    //db call
    res.json({
        roomId: 123
    })
    
})

app.listen(3000)