async function processMeeting(audioBlob){

    document.getElementById(
        "record-status"
    ).innerHTML =
    "🤖 AI analyzing meeting...";


    const formData = new FormData();

    formData.append(
        "audio",
        audioBlob,
        "meeting.webm"
    );


    const response =
    await fetch(
        "/api/meeting-agent",
        {
            method:"POST",
            body:formData
        }
    );


    const result =
    await response.json();


    showMeetingAI(result);

}
