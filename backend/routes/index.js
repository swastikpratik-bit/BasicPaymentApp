import express from "express";
import { userRouter } from "./user"
import zod from "zod";

const router = express.Router();

router.use('/user', userRouter);
export { router };


router.post("/signup", req, res)




