import { NextApiRequest, NextApiResponse } from "next";
import connection from "../../../utils/connect";
import Tasks from "../../../utils/Tasks";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    if(req.method !== "POST"){
        return res.status(405).send("Method not allowed......");
    }

    await connection();
    const data = await Tasks.create(req.body);
    res.status(201).json({data});
  }catch(err){
    console.log(err);
    res.status(500).send("Something Went Wrong.....");
  }
};