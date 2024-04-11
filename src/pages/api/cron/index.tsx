import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import connection from "../utils/connect";
import Tasks from "../utils/Tasks";
import Template from "../utils/template";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    await connection();
    const data = await Tasks.find({});
    // console.log(data);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    for(let i=0; i<data.length; i++){
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: data[i].to,
            subject: "This is your Task for the day",
            html: Template(data[i].tasks)
        }

        const info = await transporter.sendMail(mailOptions)
        console.log(info);
    }

    res.status(200).json({data});
  }catch(err){
    console.log(err);
    res.status(500).send("Something Went Wrong.....");
  }
};