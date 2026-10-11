let mediaRecorder;
let audioChunks = [];


async function startMeetingRecording(){

    try{

        const stream =
        await navigator.mediaDevices.getUserMedia({
            audio:true
        });


        mediaRecorder =
        new MediaRecorder(stream);


        audioChunks=[];


        mediaRecorder.ondataavailable =
        event => {

            audioChunks.push(event.data);

        };


        mediaRecorder.onstop =
        async ()=>{


            const audioBlob =
            new Blob(
                audioChunks,
                {
                    type:"audio/webm"
                }
            );


            document.getElementById(
                "record-status"
            ).innerHTML =
            "🤖 Processing meeting...";


            await processMeeting(audioBlob);


        };


        mediaRecorder.start();


        document.getElementById(
            "record-status"
        ).innerHTML =
        `
        🔴 Recording customer call...
        <br>
        <button onclick="stopMeetingRecording()">
        Stop Recording
        </button>
        `;


    }
    catch(error){

        alert(
        "Microphone permission required"
        );

    }

}



function stopMeetingRecording(){

    if(mediaRecorder){

        mediaRecorder.stop();

    }

}
