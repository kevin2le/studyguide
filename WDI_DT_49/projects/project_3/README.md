# ![][ga-logo] Project 3: Build a Full-stack App as a Team

### Overview

You’ve already worked in small groups to accomplish various labs and
exercises, but this time **we’re going to challenge you to work on a
whole project with a small team.**

Your instructors will partner you with other classmates to architect, design, and collaboratively build an app of your own design.

With this project you'll be building an exciting full-stack app with
**Node/Express, MongoDB/Mongoose**.

Additionally, you're going to be working with **APIs**:

- Consuming third-party API(s)
- Exposing your app's data via a RESTful API

**This is meant to push you both technically and collaboratively.**
It’s a lot harder to work in a team than to work by yourself, but that's
most likely what you’re going to find yourself doing in your first
development job after WDI, and **it's important to learn how to work
together.**

>_Completing my group project in WDI was the best of times; and the worst of times._<br>~ a typical WDI student

---

### Technical Requirements

Working in a team is going to require more "upfront" planning...

#### Your team must:

- **Pitch your project** to the class **first thing Thursday** with a **pitch-deck** that includes:
  - The application name.
  - Your team members and their roles/goals.
  - The problem you are going to solve with your app.
  - Check out previous decks: [Meal Ticket](https://docs.google.com/presentation/d/1CsBuC-a_AZ1yXJEE-EbptPIdgj1MktiNALyQyhaFfrM/edit#slide=id.p), [Tripio](https://docs.google.com/presentation/d/1gvOypLc4VjKqJzdAW68iwh28uGDSH4Sp1KnA5grDo2g/edit#slide=id.p), [Pantry](https://docs.google.com/presentation/d/1WvHoN5MNaRembgcoog5p0GtivVCOZSzvfPyeevzy08g/edit)

- **Document your app's RESTful API** in the **readme**.
- **Craft thoughtful User Stories together** as a team using **Trello**.
- **Manage team contributions and collaboration** using Git, GitHub and a standard team work-flow.  Here are some references:
	- [Team Workflow Video](https://www.youtube.com/watch?v=oFYyTZwMyAg)
	- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- **Present the app at the end of the sprint** as a team.

#### Your app must:

- Use **MongoDB & Express** to CRUD your data.
- **Consume data made available by a third-party API - libraries like Google Maps that do not expose data do not count**.
- **Produce a RESTful API that exposes at least one resource (model)**.
- **Authenticate users using an OAuth provider**.
- **Restrict access to the Creation, Updating & Deletion of resource(s)
  using an authorization middleware function**.
- Be **deployed online** using **Heroku**.

#### You do not need to, but may:

- Perform client-side rendering in some or all of the views. However, this is not recommended until next unit where we use a front-end framework designed to organize SPAs. You can also create a hybrid where, for example, the authentication initiates a full-page refresh but most functionality is performed via client-side AJAX and rendering.
- Use Web Sockets for real-time communication between clients and server.

---

### Necessary Deliverables

- A **[pitch deck][pitch-deck], presented as a team to the class Thursday morning**.
- A **working app, built by the whole team**.
- A **team Git repository hosted on Github**, with frequent commits from
  *every* team member dating back to the *very beginning* of the project.
- **A `README.md` file** with:
	- An introduction of your app along with a screenshot (one is all you need to "introduce" your application).
    - Explanations of the **technologies** used (including outside APIs).
    - A link to your **pitch-deck**.
    - A link to your **Trello** board that contains your **user stories**, **ERD**, and **wireframes**.
    - A link to your **deployed app on Heroku**.
    - Documentation for your app's RESTful API.
    - Descriptions of any **unsolved problems** your team had to overcome.
    - Description of any **future enhancements** planned.

---

### Suggested Ways to Get Started

1.  **Identify roles** on the team, which may be:

    - **Scrum Master**: the leader of the Agile processes (stand-ups,
      retro) and manager of Trello.
    - **GitHub Manager**: the primary person for managing the repo and GitHub  team workflow (merging pull requests, etc.).
    - **Documenter**: the person in charge of the README, etc.
    - **Designer**: the person in charge of style.
    - **Database manager**: this person will be in charge of creating and
      managing the models and their relationships.

    You *don't have to fulfill any of the above roles!* They are only there
    in case someone on the team *really* wants to "own" these responsibilities.
2.  Read the docs for whatever technologies / frameworks / API’s you use.
3.  **Be consistent with your code style.** You're working in teams, but
    you're only making one app per team. Make sure it looks like a unified
    effort.
4. Do your best to have only one dev working on a certain file between commits.  This will avoid merge conflicts. This is another reason to separate responsibilities between team members.
5.  **Commit early, commit often.** Don’t be afraid to break something
    because you can always go back in time to a previous version.
6. **Pair programming can be a great way for team members to share knowledge and contribute to the project.**

---

### Potential Project Ideas

- Definitely research potential third-party APIs.  You are required to consume one and knowing what APIs are available may trigger some great app ideas.
- For this project, we want you to work with your team to build a creative product or one that improves on an existing app.
- We won't have time to do tons of customer research, but take some time to brainstorm.
- One of the best questions to ask yourself is, "Why would I want to use this app?"

---

### Retros and Code-Reviews

- Each team will also participate in a preliminary project review with the instructors on **Wednesday** - all team members need to be present.

- A peer-code review will be completed after demos on Friday.

- Following the project on Monday morning, you will participate in a
retrospective on how the project went.

<!-- LINKS -->

[ga-logo]:    https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png
[tg]:         http://25.media.tumblr.com/tumblr_m8vi5ze9sa1ql5yr7o1_400.gif
[pitch-deck]: https://pitchdeck.improvepresentation.com/what-is-a-pitch-deck
[inception]:  https://blog.pivotal.io/labs/labs/agile-inception_knowing-what-to-build-and-where-to-start
