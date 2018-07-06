<img src="http://www.coindesk.com/wp-content/themes/coindesk2/images/events/consensus-2015/sponsors-and-partners/general-assembly.png" width="900">

# Welcome to General Assembly - Los Angeles!

## WDI-DTLA 49

This will be your shared class repo! Guides, in-class labs and code samples, and other resources will live here. **ALL** official resources for this class will live in this repository.

### Contents

- Class Repository Structure
- WDI GitHub Workflow
- Contact Information
- Course Information and Dates
- Immersive Graduation Requirements

### Repo Structure

```
/WDI_DT_49
    /resources
    /projects
    /work
      /w01
          /d01
            /00_morning_exercise
            /01_topic
            /02_topic
            /03_topic
            /04_topic
            /ah   --or--  05_topic
```

### Becoming Familiar With the WDI GitHub Workflow

#### Forking (copying) the GA Student Repo to Your GitHub Account

You will have read-only access to the GA Student repo.  However, you most certainly will want to be able to make changes (e.g., add notes, save code exercises, etc).  These changes will be saved to your own personal copy of GA's Student repo - known as a **fork**. To get this fork do the following:

1. Make sure that you're logged in to your GitHub account.
2. In another tab, browse to the GA Student repo:  [https://github.com/ga-students/WDI_DT_49](https://github.com/ga-students/WDI_DT_49)
3. In the top-right corner of the page, click the `Fork` button.

Now you will have a copy of the repo in *your* GitHub account!

#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the Student repo in your GitHub account, it's time to bring the contents of that repo to your computer - this process is known as **cloning**:

1. Browse to your fork of the GitHub Student repo and under the repository name click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to the `~/code` folder - you may choose a different folder if you wish, however our instructions in class will assume you clone the repo into a folder named `code`.
4. Type the following command in Terminal once inside the `~/code` directory to clone the repository:

```
$ git clone https://github.com/YOUR-GITHUB-USERNAME-HERE/WDI_DT_49
```

Now you have a local copy of your fork of the GA Student repo!

#### Adding a git remote for the original GA Student repo

Repos on your computer are called **local repos**.

Repos on GitHub are called **remote** repos.

When you cloned your fork of the repo, a git **remote** was automatically created. You can always check which remotes you have with this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is called **origin**.

In order to get the updates that the instructors push to the GA Student repo, you will need to create another **remote** that points to this *original* GitHub repo:

```
$ git remote add upstream https://github.com/ga-students/WDI_DT_49
```

Note that by convention, the remote that points to the *original* GitHub repo that was forked is named **upstream**.

#### Getting Changes Pushed by Your Instructors

Each day instructional materials will be shared via Git (often multiple times per day). You will want to bring these materials into your local repo.

First, if you've made any changes within the repo locally, you will need to **commit** those changes first:

```
$ git add your_file.md
```

Now you can fetch the updates from the Github Student repo and merge them into your local repo:

```
$ git pull upstream master
```

When you want to save commits you have locally to your forked GitHub student repo:

```
$ git push origin master
```

Here is a picture of our Git workflow:

![GitHub Basic Workflow](./resources/cheatsheets/assets/repo-structure-basic.png)

#### Handling Merge Conflicts

A **merge conflict** occurs when the same line of code in your local repo is different than code in your remote repo. This confuses GitHub and therfore you must manually fix merge conflicts before pulling your remote into your local. GitHub will tell you that a merge conflict exists and will *annotate* your code to show you how your local code differs from your remote code. An example of such annotation is below.

```
<<<<<<< HEAD
// Local code is here 
=======
// Changes you are pulling go here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts you can `add` and `commit` normally.

#### Important

"Nested" repos are not permitted.  Therefore, if there is any code/projects that you want to put in its own repo, be sure to create/move those folders out of the student repo.

### Instructional Team

|Role        | Name            | Slack       | Email |
|:--         | :--             | :--         | :-- |
|Instructor  | Jim Clark       | @jim.clark  | jim.clark@ga.co |
|Instructor Assistant  | Jonathan Tamsut       | @jontam | jonathan.tamsut@generalassemb.ly |

### Course Information

- Class Dates: Monday-Friday 9:00AM-5:00PM
- Course duration: June 19th - September 8th
- Holidays:
  - Fourth of July: Monday, July 3rd & Tuesday, July 4th
  - Labor Day: Monday, September 4th

### GA Immersive Graduation Requirements

General Assembly's courses are pass/fail programs. We have certain requirements in order to be considered a graduate of our programs which are outlined in our [GA Catalog](https://ga-core.s3.amazonaws.com/cms/files/files/000/004/189/original/GA_Catalog-All-Markets-2016.07.05_bvm.pdf)

- No more than 3 days absent from class over the duration of the course
- Completion of 80% of assigned homework
- Completion of the final project
- Participating in GA’s mid-course and end-of-course feedback surveys

All assignments must be submitted by the final day of the course in order to receive credit. When you do complete our program with passing status, you unlock our alumni perks:

- Receive a GA Letter of Completion (via email 1 week after graduation)
- $250 credit towards GA’s Classes & Workshop for 1 year from your start date (enter code: laimmersives1 at checkout). Please note once you are enrolled, cancellations are not permitted so please make sure you are able to attend the class or workshop prior to applying your code
- 30% off Classes and Workshops after your $250 has expired (enter code: back2school-la at checkout)
- Access to our Alumni Community:
  - Check out some awesome discounts on our [Alumni Perks Page](https://generalassemb.ly/alumni/perks)
  - Join our [GA LA Alumni Facebook](https://www.facebook.com/groups/GALAalumni/) channel for networking and job opportunities
  - Look out for a Monthly Alumni Newsletter sent to your email about upcoming alumni only events in LA
- *Interested in being on our alumni committee to plan upcoming networking and social events for GA alumni? Email [studentservicesla@generalassemb.ly](studentservicesla@generalassemb.ly)*
