# Ruby Lab: Arrays and Hashes

=begin

Complete the exercises below.

I recommend that you write these functions in VS Code or whatever the
text editor of your choice is. To execute the code in this file, navigate
to the directory that holds this file and enter the following command:

                $ ruby ruby_lab.rb

Once you have completed writing these functions YOU SHOULD TEST THEM! Invoke these
methods on sample inputs to test that they return the correct value.

=end


# Exercises

# 0. ------------------------------------------------------------------------------------

=begin

For this exercise read and re-write all the code below. Make sure to run the
code once you have finished writing it to test that it works:

friends = [ 
    { 
        name: "Steve",
        age: 54

    },
    {
        name: "Shana",
        age: 22
    }
]


puts friends[1][:name] 

# What happens when you run the line of code below?

puts friends[0]["age"]

friends.each do |friend|
    friend[:age] = friend[:age] + 1
end

# What does the age property of each friend look like now?

puts friends

=end 
friends = [
    {
        name: "Steve",
        age: 54
    },
    {
        name: "Shana",
        age: 22
    }
]

# 1. ------------------------------------------------------------------------------------


# Write a method named put_arr_elems that puts each element in an array.
def put_arr_elems ary 
    ary.each do |elems|
        puts elems
    end
end
# Uncomment the line below to test out the function
# put_arr_elems([1,2,3,4])


# 2. ------------------------------------------------------------------------------------


# Write a method named puts_last that puts the last element in an array.
def puts_last ary
    puts ary.last

end    
# Uncomment the line below to test out the function
# puts_last([1,2,3,4])


# 3. ------------------------------------------------------------------------------------


# Write a method named puts_key that puts each key in a hash.

example_hash = {javascript: 'language mainly used for client-side scripting',
                ruby: 'language popularized due to Ruby on Rails',
                whitespace: 'esoteric programming language that ignores everything but whitespaces'}
def puts_key 
    example_hash.keys.each do |keyM|
        puts |keyM|
    end
end

# Uncomment the line below to test out the function
# puts_key example_hash


# 4. ------------------------------------------------------------------------------------


# Write a method named puts_value that puts each value in a hash.
def puts_value hashed
    hashed.value.each do |keyed|
        puts keyed
    end
end
# Uncomment the line below to test out the function.
# puts_value example_hash


# 5. ------------------------------------------------------------------------------------

# READ UP MORE HOW THIS WORKS
# Write a method named sum that computes and returns the sum of integers in an array.
def sum(ary)
    ary.inject(0){|sum, add| sum + add}
end
# Uncomment the line below to test out the function]
# puts sum([1,2,3]) #=> 6


# 6. ------------------------------------------------------------------------------------


# Write a function that reverses a string. Name this function reverse_string.
# For example, reverse_string("abc") should return "cba". It should take a string as
# input and return the string in reverse.
def reverse_string (ary)
    ary.reverse!
end
# Uncomment the line below to test out the function.
# puts reverse_string("abc") #=> "cba"


# 7. ------------------------------------------------------------------------------------


# Write a method named charFrequency that when given a string returns a hash where each key is
# a character in a string and each value is the frequency that character
# occurs in the string. For example the string "aabc" should return
# {a: 2, b: 1, c: 1}
# Hint: Use the count method
def charFrequency (str)
  hash = {}
  frequency = str.split("")
  frequency.each do |letter|
# frequency.each_char(<== that is to help itrate through the arrayß) do |letter|
      hash[letter] = str.count letter
  end
 hash
end
# Uncomment the line below to test out the function.
# puts charFrequency("aabc") #=> {a: 2, b: 1, c: 1}

# 8. ------------------------------------------------------------------------------------

# Write a method that takes an array of numbers in. Your method should
# return the third greatest number in the array. You may assume that
# the array has at least three numbers in it.
def bigNum arr
    arr.sort[-3]
end


# Uncomment the line below to test out the function.
puts third_greatest([5, 3, 7]) == 3 #=> should be true
# puts third_greatest([5, 3, 7, 4]) == 4 #=> should be true
# puts third_greatest([2, 3, 7, 4]) == 3 #=> should be true