---
title:  "Interview Preparation- Quick Guide- Part 2"
date:   2020-04-30 00:00:00
categories: [Programming]
tags: [Interview]
---

This is a series of blog posts to help anyone preparing for any interview to revise the important concepts of competitive programming in cpp quickly with resources from web that I found helped me the best.

This post covers the commonly used data structure libraries in cpp-

The containers can be divided into 4 main categories:
1. Sequence containers- elements are accessed sequentially
* arrays
* [vector](#vector)
* list
* forward_list

2. Contaner adaptors- interface on sequential containers
* stack (LIFO)
* queue (FIFO)
* [priority_queue](#priority_queue) (first element is greatest)

3. Associative containers- ordered data structures that can be quickly searched
* [set](#set)
* multiset
* [map](#map)
* multimap

4. Unordered associative containers- unordered data structures that can be quickly searched
* unordered_set
* unordered_multiset
* unordered_map
* unordered_multipmap

Below is a quick reference to methods which are frequently used. This is not an exhaustive list and objective of this is to only provide a quick recap before you start solving questions again after a long gap. For a more detailed understanding refer [this](https://www.geeksforgeeks.org/the-c-standard-template-library-stl/).

### Vector
* This is a dynamic array that automatically resizes itself.
* Data is inserted at the end. Hence, removing the last element takes constant time. Inserting and erasing at the beginning or in the middle is linear in time. 
* Commonly used methods on vectors- 
1. ```begin()```- iterator to the start of the vector
2. ```end()```- iterator to the last element
3. ```size()```- number of elements in vector
4. ```empty()```- boolean value indicating if array has zero elements
5. ```front()```- returns the first element
6. ```back()```- returns the last element
7. ```push_back(value)```- push new element to vector
8. ```pop_back()```- removes the last element
9. ```insert(iterator position, value)```- insert value at position specified (position should be an iterator- for 5th positon, v.begin() + 5)
9. ```insert(iterator position, size, value)```- insert value number of times as defined by size
10. ```insert(iterator position, iterator iterator1, iterator iterator2)```- insert vector in another vector
11. ```clear()```- remove all elements
12. ```erase(iterator position)```- remove element from position
13. ```erase(iterator start, iterator end)```- remove elements between starting and ending iterators
14. ```at(position)```- fetches the element at position
15. ```swap(vectorname)```- swap contents of vector v1 and v2
16. ```emplace(iterator position, element)```- insert element at position
17. ```emplace_back(value)```- add value at the end of vector

* emplace / emplace_back are in-place while insert / push_back are not
* sort v in asc- ```sort(v.begin(), v.end(), greater<int>())```
* sort v in desc - ```sort(v.begin(), v.end(), greater<int>())```
* initialise vector of size 2 to 0 - ```vector<int> a(26,0)```

### Priority_Queue

... WIP

### Set
* In this container, each elemnt is unqiue.
* The value once added cannot be modified. The value can be removed though and updated value can be added.
* Elements are iterated in sorted order always (asc). To iterate in dsc order instead, use <greater<int>> at the time of initialisation.
* Commonly used methods on set- 
1. ```begin()```- iterator to the start of the vector
2. ```end()```- iterator to the last element
3. ```size()```- number of elements in vector
4. ```empty()```- boolean value indicating if array has zero elements
5. ```insert(value)```- add value to set
6. ```insert(iterator position, value)```- add value at position
7. ```insert(iterator start, iterator end)```- elements between the range [start,end) are inserted in the set from s1 to s2
8. ```erase(iterator position)```- remove element from position
9. ```erase(value)```- remove value from set
10. ```clear()```- remove all elements
11. ```find(value)```- returns iterator to value or iterator to end if not found
12. ```count(value)```- returns 0 / 1 based on value present in set or not
13. ```lower_bound(key)```- returns iterator for value less than key, if not present, the iterator to immediate next greater is returned
14. ```upper_bound(key)```- returns iterator for value greater than key
15. ```emplace(value)```- add value to set
16. ```emplace_hint(iterator position, value)``` - value acts as a hint from where the searching operation starts before inserting the element

* emplace is in-place operation
``` 
set<pair<char, int>> s;         // declaring set 
s.emplace('a', 24);             // using emplace() to insert pair in-place  
s.insert(make_pair('b', 25));   // uses extra space
```

### Map

... WIP

### Pair
* This is defined in the header<utility> library.

... WIP
