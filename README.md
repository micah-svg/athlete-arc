# Athlete Arc — Setup Guide

This is the foundation of the course platform: login, data storage, and the
reusable pieces (video, quiz, self-assessment form) that every module will be
built from. Content for the actual 22 modules and 10-week technical track
gets layered in next, using the pattern in `src/data/modules/week1-passing.js`.

## Branding — built as a reusable shell
This app is meant to be reused for any youth sports program going forward, not locked to one team or sport:

- **`src/brandConfig.js`** — app name, tagline, and coach contact label all live here. Reusing this shell for a different program starts here.
- **`public/logo.svg`** — the Athlete Arc logomark. Swap this file (same filename) to rebrand the icon/favicon/login mark for a different program without touching code.
- **Color palette** (`src/styles.css`, top of file): `--teal` (#0097B2) and `--cream` (#E7E3DD) pulled directly from the logomark, plus `--accent` (#F0A202) for highlights/certification banners. Change these three variables to re-theme the entire app.
- **Fonts**: Open Sans (body) and Barlow Condensed (headers/labels), loaded in `index.html`.
- **Program-specific content** (season dates, matches, module content, resources) all live in `src/data/` and Firestore, separate from the shell itself.


## One-time setup (you'll do this once)

### 1. Create the Firebase project
1. Go to [console.firebase.google.com](https://console.firebase.google.com), create a new project (e.g. "athlete-arc").
2. In the project, go to **Build > Authentication > Sign-in method**, enable **Email/Password**.
3. Go to **Build > Firestore Database**, create a database in production mode.
4. Go to **Project settings > General > Your apps**, add a Web app, and copy the config values (apiKey, authDomain, etc).

### 2. Environment variables
Create a `.env` file in the project root (never commit this) with:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### 3. Service account (for the admin roster function)
1. In Firebase console: **Project settings > Service accounts > Generate new private key**. This downloads a JSON file.
2. In Netlify: **Site settings > Environment variables**, add:
   - `FIREBASE_SERVICE_ACCOUNT_JSON` — paste the entire contents of that JSON file as one line.
   - `ADMIN_SECRET` — make up a strong password only you know. This protects the roster-creation tool.
3. **Never commit the service account JSON to any repository.** Netlify environment variables are the only place it should live.

### 4. Deploy Firestore rules
Using the Firebase CLI (`npm install -g firebase-tools`, then `firebase login`, `firebase init firestore`, `firebase deploy --only firestore:rules`), or paste `firestore.rules` directly into the Firebase console under **Firestore > Rules**.

### 5. Deploy to Netlify
Push this project to a GitHub repo, connect it in Netlify same as your other projects. Netlify will auto-detect the Vite build.

## Creating student accounts
Once deployed, go to `yoursite.netlify.app/admin-roster`, enter your admin secret, and paste in your roster as:
```
Sarah Johnson, sarahj, TeamPass26!
Emma Torres, emmat, TeamPass26!
```
One line per player. This calls the Netlify Function, which creates each Firebase Auth account and a matching Firestore profile.

## Coach admin tools
Go to `yoursite.netlify.app/admin` and enter your admin secret once per session. From there:

- **Create Student Accounts** — the roster tool from setup
- **Edit Course Content** — edit any module's title, video title/YouTube ID, quiz question text, answer options, explanations, and thought-exercise prompts, right from the app. Saving here creates (or updates) a document in Firestore's `modules` collection, which is what students actually see. Until you edit a module, students see the built-in default content from the code files.
- **Team Progress** — a table of every player against every module, showing who's submitted a quiz for that module and who hasn't yet.
- **Player Questions** — every question a student submits via the "Ask a Question" button, anywhere in the app, along with exactly what page or module they were on when they asked. Mark questions resolved once handled.

## Ask a Question button
A floating button appears on every screen once a student is logged in. It automatically captures what page/module they're on (e.g. "Unit 1: Rules & Volleyball IQ — Module 2: Rotations & Positions") and attaches that context to the question, so you're never guessing what they were looking at.

## Comprehension self-check
Every module ends with a 4-point confidence self-score (not a bare number scale, deliberately): "Still lost," "Kind of get it," "Pretty confident," "I could teach this to someone else." This shows up in Review Responses alongside quiz scores and written answers.

### How content editing actually works
Module content originally lives in the code files under `src/data/modules/`. The **first time** you edit a module through Edit Course Content, that edit gets saved to Firestore and becomes the live version for every student from then on. The code files still exist as the fallback/default, they don't get overwritten, only superseded once you've edited something in the admin panel. This means you never have to touch code to update wording or swap in a real video link.

## What's built so far
- Student login (username + password, no email required)
- Coach-only roster creation tool
- Coach-only content editor, progress dashboard, and response review tool
- Mobile-first responsive design across the entire app, including all coach tools
- Reusable `VideoLesson`, `ScenarioQuiz`, `ThoughtExercise`, `GoalSettingForm`, and `WeeklyPlannerForm` components
- Firestore security rules (students see only their own submissions; module content is admin-function-write-only)
- All 10 core modules (Units 1-3) and all 5 electives, fully written
- Dashboard/navigation tying the whole course together

## Course Calendar
Students see a week-by-week agenda (`/calendar`, linked from the dashboard) showing:
- Practice days, auto-generated Mon-Fri 3:30-5:30 PM starting August 17, 2026, automatically skipped on any day with a match
- The real JV2 match schedule you provided, with opponent/time/type on the correct dates
- What's due each week (one core module + one technical-track week), due every Thursday at 8:00 PM
- A standalone banner for the all-electives deadline: August 30 at 8:00 PM

**Course structure update:** all 10 former "core" modules (Units 1-3) are now part of the same single elective pool as the original 5 electives, 15 modules total, all due by one deadline: **August 28 at 8:00 PM**. There's no more separate required/core track. `src/data/elective-schedule.js` lays out a suggested day-by-day pacing across Aug 20-28 so the work doesn't all land on the same day (roughly 2 modules released per day, with Aug 28 itself kept clear as a catch-up day before the deadline). That daily pacing is a suggestion for spreading the work, not a hard per-day requirement, the only real deadline is Aug 28 at 8pm. Edit that file's array if you want a different order or spacing.

The technical track is untouched: still its own 10-week, Thursday-due cadence in `src/data/weekly-plan.js`, running the full length of the season (Aug 17 - Oct 25).

## Technical Track (now fully wired)
`/technical` lists all 10 weeks; `/technical/:weekId` shows that week's pre-work (video, quiz, baseline self-rating) and post-work (reflection self-rating) on one page. All 10 weeks now have real content (Weeks 2-10 were the gap; that's filled in `technical-weeks-2-10.js`). Linked from the dashboard and from each week's row on the Calendar page.

## E1 Certification (scored, unlimited retakes)
E1: Scoring & Line Judge Certification now has `certificationThreshold: 0.9` set in its content. Its quiz shows a scored pass/fail result instead of a flat "done" message, students need 90% to pass, and can retake the quiz as many times as they want with zero penalty (each retake overwrites the saved score with the latest attempt). The Team Progress table only marks E1 complete once a passing attempt is actually on record, not just any attempt. Passing certification still also requires the thought exercise, comprehension check, and finishing before the Aug 28 deadline, same as every other elective.

## Question Replies
You can now reply to a player's question right from Player Questions, the reply is saved back to that question and shows up for the student on their own `/my-questions` page (also linked from the dashboard and from the "sent" confirmation right after they ask something). Students can only ever see their own questions and replies, never anyone else's.

## Resources
`/admin-resources` lets you add links, notes, and materials, grouped by category (Forms & Paperwork, Video/Film, Reading, Handbook/Policy, General, Other). Students see them all at `/resources`, grouped the same way.

**One real limitation worth knowing:** this is link-based, not file-upload. There's no "attach a PDF" button. That's intentional, Firebase pulled file storage out of its free tier, so building real uploads would mean either paying for storage or adding a different free service just for files. The practical workaround costs nothing extra: put any document (PDF, Google Doc, Word file) in Google Drive, get its shareable link, and paste that link in as a resource. Same end result for students, just one small extra step for you when adding something.

## What's next
- The 10-week Technical Track (only Week 1 exists as a sample so far)
- Swapping in real YouTube video IDs for every module (can be done entirely through Edit Course Content now, no code changes needed)

