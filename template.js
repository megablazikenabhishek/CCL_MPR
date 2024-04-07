const template = (tasks) => {
    try {
        let result = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Reminder</title>
            </head>
            <body style="font-family: Arial, sans-serif;">

            <!-- Email Header -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="background-color: #007bff; padding: 20px; color: #fff; text-align: center;">
                        <h1>Email Reminder</h1>
                    </td>
                </tr>
            </table>

            <!-- Task List -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="padding: 20px;">
                        <h2>Tasks for Today:</h2>
                        <ul>
                            ${format(tasks)}
                        </ul>
                    </td>
                </tr>
            </table>

            <!-- Email Footer -->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center;">
                        <p>&copy; 2024 Abhishek Upadhya. CCL MPR.</p>
                    </td>
                </tr>
            </table>

            </body>
            </html>
        `
        return result;
    } catch (error) {
        console.log(error);  
        return "";
    }
}

const format = (tasks) => {
    let result = ""
    for(let i=0; i<tasks.length ; i++){
        result += `<li> ${tasks[i]} </li>`
    }
    return result;
}

module.exports = template