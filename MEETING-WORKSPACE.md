# Meeting workspace

Adds microphone recording, optional tab-audio + microphone capture, explicit AI transcription, editable AI task proposals, duplicate checks and approval before saving to the selected account.

## Setup on Vercel

Deploy this branch from the existing My-Board repository. Framework preset: Other; no build command; output directory: repository root. The `api/meeting.js` function runs on Vercel, not GitHub Pages.

Set these environment variables in Vercel (never commit their values):

- `OPENAI_API_KEY`: your OpenAI API key with billing enabled.
- `MEETING_ACCESS_TOKEN`: a long random private workspace token. This is distinct from the provider API key.
- `ALLOWED_ORIGINS`: comma-separated exact website origins, e.g. `https://sahanamadhavan26.github.io,https://your-board.vercel.app`. Add the exact preview origin if testing a Vercel preview.
- Optional: `MEETING_MODEL` (default `gpt-4o-mini`), `TRANSCRIPTION_MODEL` (default `gpt-4o-mini-transcribe`).

Redeploy after changing environment variables. Open Meeting workspace → Connect AI backend, enter the Vercel URL and the workspace token. Neither credential is written to localStorage. The OpenAI key is server-side only. API usage may incur charges; configure provider spending limits. This shared-token backend is intended for a personal workspace, not a public multi-user service.

## Use

1. Choose the account and meeting title.
2. Confirm participant agreement; record microphone, or choose a meeting tab with audio sharing enabled. Tab audio support varies by browser. Native Zoom/Teams applications may not supply audio through tab capture. No video is recorded.
3. Stop, listen and download the recording. Audio is memory-only and discarded when closing the workspace/page. It is not persisted in localStorage or a cloud recording library.
4. Transcribe explicitly, or paste a transcript/notes. Each transcription upload is limited to 3 MB. Longer recordings can be downloaded and transcribed separately. Recording stops automatically after 30 minutes.
5. Review the transcript and confirm AI analysis. Only notes, the account name and up to 200 existing task titles are sent for analysis.
6. Review/edit task text, owner, due date and priority. Approve selected tasks. Exact normalized duplicates are skipped again at save time; review paraphrased duplicates yourself.
7. Save notes separately if desired. Tasks and notes remain in the existing browser-local account store. GitHub Pages and Vercel have different browser storage origins: export/import your board backup when switching hosts.

## Scope and limitations

This is a bounded, human-approved AI workflow, not a general autonomous agent or meeting bot. It does not join meetings, email participants or modify external calendars. AI analysis extracts task proposals; client code checks duplicates, saves only approved tasks and verifies persistence. The local action-line finder uses text rules and is labeled as non-AI.

The server refuses unconfigured/unauthenticated requests, checks allowed origins, caps inputs, sets timeouts, uses a strict output schema and rejects tasks whose evidence is not an exact excerpt from the submitted notes. Human review is still necessary. Recordings and transcripts are not logged by application code; hosting and AI provider data policies still apply.

## Validation

Run `node --check meetings.js` and `node --check api/meeting.js`. DOM-based tests cover proposal approval, duplicates, account routing, persistence, storage failures and recording with a simulated microphone. Backend tests mock provider calls and cover authentication, input validation, provider failures and evidence filtering. Full browser testing was blocked by a failed browser download; actual microphone/tab permissions and playback remain unverified. Real customer calls and live OpenAI requests require configured credentials and manual end-to-end verification before declaring the feature fully validated.

Run the checks with `npm install --no-save jsdom` then `node --test tests/meeting-ui.test.cjs tests/meeting-api.test.js`.
