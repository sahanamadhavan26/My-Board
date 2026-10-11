function showMeetingAI(result){


const box =
document.getElementById(
"ai-results"
);



box.innerHTML = `


<div class="ai-result-card">


<h3>
🤖 AI Meeting Summary
</h3>


<p>

${result.summary}

</p>



<h3>
Suggested Follow-ups
</h3>



${result.tasks.map(task=>`

<div class="ai-task-item">


<b>
${task.title}
</b>


<br>

Account:
${task.account}


<br>

Owner:
${task.owner}


<br>

Due:
${task.due}


</div>


`).join("")}



<button class="tb"
onclick="approveAITasks()">

Approve & Create Tasks

</button>


</div>


`;

}



function approveAITasks(){

alert(
"✅ AI tasks added to My Board"
);

}
