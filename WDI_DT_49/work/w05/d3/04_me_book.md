## MeBook

You've now seen controllers, views and models in Rails. You've seen how to define RESTful routes and how to define associations between models. Let's apply this knowledge by building a simple application. I have given you designs and user stories. It is your task to implement these designs in Rails.

### Task Details

Create a brand new Rails application that meets the requirements below. This application should be located in a GitHub repository with a `README` containing instructions for how to get your project running locally.

### The Pitch

Social media is so overrated. I much prefer anti-social media. This is where MeBook comes into play.
MeBook is an anti-social media platform where a user can create a profile and make posts that **ONLY** they can see. Who needs friends?!?!?!? This application only has **ONE** user.

### Design Specs

Below I have provided an ERD and wireframes for this application.

#### Entity-Relationship Diagram 

This application should have 2 models: 

1. A `User` model
2. A `Post` model 

An ERD Diagram from the application is below:

![erd](https://docs.google.com/drawings/d/e/2PACX-1vQliU1qafkQUTlGWRNbOAvsxGknQlXXaKOYjw2lOBInHFtRGXDeR-J5jJbQoX4uX94Qwuxdke7Gt0S1/pub?w=962&h=379)

Since this application is an anti-social, social network you will only have **one** record in your User model: you. 

#### Low-Fidelity Wireframes

**This application will consist of two pages.**

##### Page One: User Profile Create and Edit Page

When you visit `localhost:3000` (i.e., hit the `root` path) you should be taken to a page that looks like this:

![edit_page](https://docs.google.com/drawings/d/17VZ28PgBz0nwRIUXGG74Kis7sU-v6TNhCzAHK_BDLyc/pub?w=765&h=503)

This page is your `create` profile **AND** `update` profile page. When a user first visits this page the form fields should be empty. A new user can then enter in their first and last name and upload a profile picture. Upon subsequent visits to this page a user should then see the form fields populated with their information (i.e., first name, last name).

##### Page Two: Post Index and Create Page

When you visit `localhost:3000/posts` you should be taken to a page that looks like this:

![index_page](https://docs.google.com/drawings/d/15wEFCHkUIInr8oEaVpzHWqrks6bRKBPp84e27kc2R7M/pub?w=768&h=507)

This page should display all posts you have created **AND** allow you to create new posts. When you type in a new post into the form field and hit the `POST` button the page should refresh and the new post should appear in your post feed.

#### Additional Specs

* Use [Paperclip](https://github.com/thoughtbot/paperclip) for file uploading
* Use [Bootstap](http://getbootstrap.com/)<sup>1</sup> for common UI elments (input fields, buttons, etc.)
<sup>1</sup>If you loathe Bootstrap feel free to use another CSS library

#### Bonus: Possible Extensions

* Deploy your application to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails5)
* Implement custom styling in [SASS](http://sass-lang.com/)
* Add authentication to this application. This involves:
  - creating a login and sign-up view
  - securely storing a user's password
  - validating a user's password
