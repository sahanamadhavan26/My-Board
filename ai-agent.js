async function processMeeting(audioBlob){

    const status =
    document.getElementById("record-status");


    status.innerHTML =
    "🤖 AI is analyzing the meeting...";


    // Temporary AI response for testing
    // Later we connect OpenAI API

    const aiResult = {

        summary:
        "Customer discussed product updates, timeline, and next steps.",


        tasks:[

            {
                title:
                "Send follow-up documentation",

                account:
                "Customer Account",

                owner:
                "Sahana",

                due:
                "Next week"
            },


            {
                title:
                "Schedule follow-up meeting",

                account:
                "Customer Account",

                owner:
                "Sahana",

                due:
                "Next week"
            }

        ]

    };


    showMeetingAI(aiResult);

}
