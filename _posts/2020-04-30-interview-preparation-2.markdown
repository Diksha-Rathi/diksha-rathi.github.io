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
* [stack (LIFO)](#stack)
* [queue (FIFO)](#queue)
* [priority_queue](#priority-queue) (first element is greatest)

3. Associative containers- ordered data structures that can be quickly searched
* [set](#set)
* multiset
* [map](#map)
* multimap

4. Unordered associative containers- unordered data structures that can be quickly searched
* unordered_set
* unordered_multiset
* [unordered_map](#unordered-map)
* unordered_multipmap

Below is a quick reference to methods which are frequently used. This is not an exhaustive list and objective of this is to only provide a quick recap before you start solving questions again after a long gap. For a more detailed understanding refer [this](https://www.geeksforgeeks.org/the-c-standard-template-library-stl/).

### Vector
* This is a dynamic array that automatically resizes itself.
* Data is inserted at the end. Hence, removing the last element takes constant time. Inserting and erasing at the beginning or in the middle is linear in time. 
* Commonly used methods on vectors- 
1. ```begin()```- iterator to the start
2. ```end()```- iterator to the last element
3. ```size()```- number of elements in vector
4. ```empty()```- boolean value indicating if vector has zero elements
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

### Stack
* This is based on LIFO (Last element in, first to pop out)
* Decalared as stack<type>
* Commonly used methods on stack- 
1. ```top()```- returns element at the top of the stack
2. ```pop()```- removes the top element
3. ```push(value)```- adds value to top of the stack
4. ```size()```- number of elements
5. ```empty()```- boolean value indicating if stack has no elements

### Queue
* This is based on LIFO (first element in, first to pop out)
* Decalared as queue<type>
* Commonly used methods on queue- 
1. ```front()``` and ```back()```- returns first and last element respectively
2. ```pop()```- deletes first element
3. ```push(value)```- add value to end of queue
4. ```size()```- number of elements
5. ```empty()```- boolean value indicating if queue has no elements

### Priority Queue
* Syntax to create max heap (default) - ```priority_queue<int>```
* Syntax to create min heap - ```priority_queue<int, vector<int>, greater<int>>```

In general, the syntax follows - ```priority_queue<data_type, store<data_type>, comparator>```. Say to define min heap for vector, we define as-
```
priority_queue<vector<int>, vector<vector<int>>, compare> pq;
struct compare {
	bool operator()(vector<int> &v1, vector<int> &v2) {
		// define comparison condition
		return v1[0] + v1[1] < v2[0] + v2[1];
	}
}
```

* Commonly used methods on priority queue(pq)- 
1. ```top()```- returns first element
2. ```pop()```- deletes first element
3. ```push(value)```- add value to end of queue
4. ```size()```- number of elements
5. ```empty()```- boolean value indicating if pq has no elements

### Set
* In this container, each elemnt is unqiue.
* The value once added cannot be modified. The value can be removed though and updated value can be added.
* Elements are iterated in sorted order always (asc). To iterate in dsc order instead, use <greater<int>> at the time of initialisation.
* Commonly used methods on set- 
1. ```begin()```- iterator to the start of the vector
2. ```end()```- iterator to the last element
3. ```size()```- number of elements in vector
4. ```empty()```- boolean value indicating if set has zero elements
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

* emplace is in-place operation 
``` 
set<pair<char, int>> s;         // declaring set 
s.emplace('a', 24);             // using emplace() to insert pair in-place  
s.insert(make_pair('b', 25));   // uses extra space
```

Read [pair](#pair)

### Map
* Each element has a <key, value>. No two mapped values can have same key values.
* Commonly used methods on map-
1. ```begin()```- iterator to the start of the vector
2. ```end()```- iterator to the last element
3. ```erase(iterator position)``` and ```erase(key)```- deletes element at position or key respectively
4. ```size()```- number of elements
5. ```empty()```- boolean value indicating if pq has no elements
6. ```clear()```- deletes all elements from map
7. ```insert({key, value})```- add key,value to map

* When iterating using an iterator object (say, begin() or end()) - use ```itr->first``` or ```itr->second```, otherwise use operator ```[]``` to access elements

### Unordered Map
* Stored key, value where key is not sorted in any order unlike [map](#map)
* Commonly used methods on unordered map-
1. ```begin()```- iterator to the start of the vector
2. ```end()```- iterator to the last element
3. ```at(key)```- returns the value for the key
4. ```count(key)```- returns true/ false indicating if value is present
5. ```size()```- number of elements
6. ```empty()```- boolean value indicating if um has no elements

* Difference between at() and [] - at() throws exception if key is not present, whereas [] will first insert they key into the map and assign default value (say, integer 0).

### Pair
* This is defined in the header<utility> library. (WIP)