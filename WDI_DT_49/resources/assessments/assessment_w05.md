#Week 5 Conceptual - NAME: ___________  `__/11`


## MVC

##### Q1) What does MVC stand for?
```ruby
a) modals, vests, coffee				b) model, viewport, change
c) modal, views, controller				d) model, view, controller
```

##### Q2) Which concern in MVC is implemented by Active Record?  _______________________

## Routes

### An app has `Student` and `Quiz` Models (`Student |---< Quiz`):

##### Q3) Which route would return a form used to create a new Quiz for a Student?
```ruby
a) get '/student/:student_id/quizzes/new', to: 'quizzes#new'
b) post '/student/:student_id/quizzes', to: 'quizzes#create'
c) get '/students/:student_id/quizzes/new', to: 'quizzes#new'
d) new '/student/:student_id/quizzes/new', to: 'quizzes#new'
```
##### Q4) Which route will create the Quiz when the form is submitted?
```ruby
a) post '/students/:student_id/quizzes', to: 'quiz#create'
b) post '/students/create/quizzes', to: 'users#create#tweets'
c) post '/students/:student_id/quizzes', to: 'quizzes#create'
d) create '/student/:student_id/quiz', to: 'student#quiz'
```
### Assuming the following route definitions:

```ruby
get 'users', to: 'users#index'
post 'users', to: 'users#create'
get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
get 'users/:id', to: 'users#show', as: 'user'
get 'users/new', to: 'users#new'
patch 'users/:id', to: 'users#update'
delete 'users/:id', to: 'users#destroy'
```
##### Q5) Why will you get an error if you browse to `localhost:3000/users/new`?
```
a) The show route is above the new route, so it will
   look for a user with an id of "new"
b) The route definition for the new route is not defined correctly
c) There won't be a new_user_path helper available
d) The edit route is above the new route, so it will look for an edit form
```

##### Q6) How many routes would be defined by the following line of code within _routes.rb_?<br>`resources :accounts`

## Models & Active Record Associations

### Assuming the following two Models:

```ruby
class Post < ApplicationRecord
  has_many :comments
end
```
```ruby
class Comment < ApplicationRecord
  belongs_to :post
end
```
##### Q7) What will be the names of the two tables in the database?<br><br> 

##### Q8) Which table(s) will have to include a column for a foreign key?<br><br>


### Assuming this ERD:

<img src="https://i.imgur.com/MD5IeOJ.png" alt="ERD" width="400">

##### Q9) Is the below Patient Model coded properly? (Yes or No)
```ruby
class Patient < ApplicationRecord
	has_many :appointments
	has_many :physicians, through: :appointments
end
```

##### Q10) Is the below Physician Model coded properly? (Yes or No)
```ruby
class Physician < ApplicationRecord
	has_many :appointments
	has_many :patients, through: :appointments
end
```
##### Q11) Is the below Appointment Model coded properly? (Yes or No)
```ruby
class Appointment < ApplicationRecord
	belongs_to :physician
	belongs_to :patient
end  
```