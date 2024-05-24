import express from "express";
import  rootRouter  from "./routes/index.js";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);


app.get('/', (req, res) => {
    res.json({
        message : "on the root"
    })
})
app.listen(3000, () => {
    console.log(`server is working on PORT : ${3000}`);
});

