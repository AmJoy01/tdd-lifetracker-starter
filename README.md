# Week 3 Assignment: Life Tracker

Submitted by: Amber Lewis

Deployed Application: <a href="https://recordit.co/zdMyD5e8cU">Life Tracker Week 1</a> <br/>
<a href="https://recordit.co/ntj2R7FR1N">Life Tracker Week 2</a> <br/>
<a href="https://lifetracker-health.surge.sh/">Life Tracker Website</a> 


## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [x] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [ ] The activity tracked should be given a unique id for easy lookup.
  
  ### Some SQL Info
  
<img width="925" alt="Screenshot 2022-07-11 124748" src="https://user-images.githubusercontent.com/93353341/178316310-2dda0470-c1b5-4ac3-a2af-9e8390f690be.png">

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video
####  Week 1
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/93353341/177064532-02ae4e55-8513-4992-a8b6-aa088e506527.gif)

#### Week 2

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/93353341/178397777-0fa9af7a-080d-4162-be47-2d00a2a54653.gif)


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes. Lab 2 was especially helpful in the back-end.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I would have changed the design of the site. Right now I'm just learning the basics, I want to know all that I can about back-end before polishing the froont-end.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The Login and Registration page. 

### Open-source libraries used

- Whole playlist by Mr. Jeff Astor

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Rebecca, James, and Angelo
