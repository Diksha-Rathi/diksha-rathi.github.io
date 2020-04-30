---
title:  "Interview Preparation- Quick Guide- Part 1"
date:   2020-04-28 00:00:00
categories: [Programming]
tags: [Interview]
---

This is a series of blog posts to help anyone preparing for any interview to revise the important concepts of competitive programming in cpp quickly with resources from web that I found helped me the best.

This post covers some common algorithms in competitive programming in brief- 

### Sorting Algorithms

#### Merge Sort
* Algorithm- divide into subarray, then combine
* Uses extra space, stable
* Worst case- [10 20 30 40] [11 21 31 41]
* Best case- [50 60 70 80] [10 20 30 40]
* Time complexity- all cases - O(nlogn)

#### Quick Sort
* Algorithm- elements < pivot : pivot : elements > pivot
* In-pace algorithm, not stable
* Best case- balanced tree
* Worst case- sorted array i.e. all nodes on one side in a tree
* Time complexity- Best, Average- O(nlogn) Worst- O(n^2)

#### Bubble Sort
* Algorithm- greater element on right => swap the elements (nth iteration => nth largest element at its position)
* In-pace algorithm, stable
* Number of comparisons = n(n-1), hence, time complexity - all cases - O(n^2)

#### Selection Sort
* Algorithm- swap[a[i], a[min]] where min = index of the minimum element (nth iteration => nth smallest element at its position)
* Number of comparisons = n(n-1), hence, time complexity - all cases - O(n^2)

#### Insertion Sort
* Algorithm- compare element with last element of sorted subarray (number of inversions = number of swaps)
* Best case- array sorted => 0 swaps
* Time complexity- Worst, Average- O(n^2), Best- O(n)

### Dynamic Programming
* In this algorithm, we store the result of the subproblems to avoid repeated computations
* Based on two properties-
1. Overlapping Subproblems
To understand this by example, for binary search- no subproblems exist. However, for fibonacci- subproblems exist
2. Optimal substructure
If optimal solution can be obtained by using opiomal solution of subproblems

#### Memoization versus Tabulation

* Memoization-  
1. Top Down approach
2. Table is filled on demand
3. Example-  
if (n <= 1) table[n] = n;
else table[n] = table[n-1] + table[n-2]

* Tabulation
1. Bottom up approach
2. All table entries are filled
3. Example-  
for (i = 2 to n) table[i] = table[i-1] + table[i-2]

### Union- Find
* This is used to find disconnected subsets.
* It involves two operations- Find(A, B) and Union(A, B).  
Union(A, B) - Replace components containing two objects A and B with their union.  
```
// Pseudo code of union()
void Union(int parent[], int a, int b) 
{ 
    int setA = find(parent, a); 
    int setB = find(parent, a); 
    parent[setA] = setB; 
} 
```
Find(A, B) - check if two objects A and B are in same component or not. 
```
// Pseudo code of find
int find(int a, int B) 
{ 
    if (root(a)==root(b)) return true;
    return false;
} 
``` 
Let's say- {3.4,5,6} is a connected component and 3 is the root. We can replace all occurences of 3,4,5 with say- 6 i.e. root.
* Common applications- finding connected nodes/ components in a tree/ graph
* Read more- [Disjoint Set- Union Find](https://www.hackerearth.com/practice/notes/disjoint-set-union-union-find/)
* Practice question- [Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)

### Backtracking
* This algorithm incrementally builds the solution. It tries to solve a subproblem, if it does not lead to a solution, then it undo the changes and sove the next subproblem.
* Read more- [In-depth Backtracking with LeetCode Problems — Part 1](https://medium.com/algorithms-and-leetcode/backtracking-e001561b9f28)
* Practic question- [Subsets](https://leetcode.com/problems/subsets/)
