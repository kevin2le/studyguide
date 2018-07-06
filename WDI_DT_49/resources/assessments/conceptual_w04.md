# Week 4 Conceptual - NAME: __________ `__/14` 

### All questions pertain to the Ruby language

```ruby
accounts = {:no123 => 100, :no456 => -22, no789: 444}

def get_balance(acct)
	accounts[acct]
end
```
#### Assuming the Ruby code above has ran:

##### Q1) What will the value of `bal` be after the following code runs:

```ruby
bal = accounts[:no789]
```
<br>

##### Q2) What will the value of `bal` be after the following code runs:

```ruby
bal = accounts["no456".to_sym]
```
<br>

##### Q3) What will the value of `bal` be after the following code runs:

```ruby
bal = get_balance(:no123)
```
<br>

##### Q4) What determines a variable's scope in Ruby?
<br>

##### Q5) What type of variable is `@company`?
<br>

```ruby
flowers = ['rose', 'tulip', 'daisy']
num_flowers = flowers.count
flowers.forEach {|flower| puts flower}
```

#### Assuming the Ruby code above has ran:

##### Q6) What datatype is the variable named `flowers`?


##### Q7) What is the value of `num_flowers`?

##### Q8) What is the output of the `flowers.forEach` call?
<br><br><br>


##### Q9) What _keyword_ is used to define methods in Ruby?

##### Q10) Methods whose name ends with a `?`, e.g., `nil?`, always return a _____________ data type.
<br>

##### Q11) What does it mean if a method's name ends with an `!`, e.g., `slice!`?
<br><br>

##### Q12) What class method is called to instantiate that class?


##### Q13) What is the name of the special method we can define in a `class` that is automatically called when the class is instantiated?
<br>

```ruby
class Person
	attr_reader :name
	
	def speak
		puts "Hi, my name is #{@name}"
	end
end
p = Person.new
p.name = "Jesica"
p.speak
```

##### Q14) Why won't the `speak` method above work as intended?