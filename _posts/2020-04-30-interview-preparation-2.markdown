---
title:  "Interview Preparation- Quick Guide- Part 2"
date:   2020-04-30 00:00:00
categories: [Programming]
tags: [Interview]
---

This is a series of blog posts to help anyone preparing for any interview to revise the important concepts of competitive programming in cpp quickly with resources from web that I found helped me the best.

This post covers the commonly used libraries in cpp-

### Vector
* This is a dynamic array that automatically resizes itself.
* Data is inserted at the end. Hence, removing the last element takes constant time. Inserting and erasing at the beginning or in the middle is linear in time. 
* Commonly used methods on vectors- 
1. begin()- iterator to the start of the vector
2. end()- iterator to the last element
3. size()- number of elements in vector
4. empty()- boolean value indicating if array has zero elements
5. front()- returns the first element
6. back()- returns the last element
7. push_back(value)- push new element to vector
8. pop_back()- removes the last element
9. insert(iterator position, value)- insert value at position specified (position should be an iterator- for 5th positon, v.begin() + 5)
9. insert(iterator position, size, value)- insert value number of times as defined by size
10. insert(iterator position, iterator iterator1, iterator iterator2)- insert vector in another vector
11. clear()- remove all elements
12. erase(position)- remove element from position
13. erase(iterator start, end)- remove elements between starting and ending iterators
14. at(position)- fetches the element at position
15. swap(vectorname)- swap contents of vector v1 and v2
16. emplace(position, element)- insert element at position (iterator type)
17. emplace_back(value)- add value at the end of vector

* emplace/ emplace_back are in-place while insert/ push_back are not
* sort v in asc- ```sort(v.begin(), v.end(), greater<int>())```
* sort v in desc - ```sort(v.begin(), v.end(), greater<int>())```
* initialise vector of size 2 to 0 - ```vector<int> a(26,0)```

### Set

... WIP
