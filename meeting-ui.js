function showMeetingAI(result){

const box =
document.getElementById(
"ai-results"
);


box.innerHTML = `

<h2>
🤖 AI Meeting Agent
</h2>

<h3>
Summary
</h3>

<p>
${result.summary}
</p>


<h3>
Suggested Tasks
</h3>


${result.tasks.map(t=>`

<div class="ai-task">

☑ ${t.title}

<br>

Account:
${t.account}

<br>

Owner:
${t.owner}

<br>

Due:
${t.due}

</div>

`).join("")}


<button onclick="approveAITasks()">

Create Tasks

</button>

`;

}
