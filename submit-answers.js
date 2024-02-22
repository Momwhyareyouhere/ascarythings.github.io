// functions/submit-answers.js
exports.handler = async function (event, context) {
    try {
        const { name, answers } = JSON.parse(event.body);

        // Send answers to the webhook
        const webhookUrl = "https://discord.com/api/webhooks/1210180960168185866/OdAI2jW_ljf6JvZPlPOCZBGYR7g1yRGHR7nHwVxECs8H3iDsD2LncpraT6rBzo_SOiXr"; // Replace with your actual webhook URL
        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                answers: answers
            })
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Answers submitted successfully" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error submitting answers" })
        };
    }
};
