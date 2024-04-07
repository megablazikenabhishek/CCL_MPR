const nodemailer = require("nodemailer")
const mongoose = require("mongoose")
require("dotenv").config()
const Template = require("./template")

const emailHandler = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const TasksSchema = mongoose.Schema({
            to : {
                type: String,
                required: true
            },
            tasks: {
                type: Array,
                required: true,
                default: []
            }
        }, {timestamps: true})
        const Tasks = mongoose.model("Tasks", TasksSchema)

        const data = await Tasks.find({});
        console.log(data)

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
    } catch (error) {
        console.log(error)
    }
    mongoose.disconnect();
}

// emailHandler()
module.exports = emailHandler;