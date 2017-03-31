---
title:  "Quick guide to solving problems based on Bit Manipulation"
date:   2017-01-27 15:04:23
categories: [Programming]
tags: [Programming]
---

Below, I have compiled a 2- minute quick read for solving programming challenges based on Bit Manipulation.

* The bitwise XOR of numbers which occur even number of times will always be zero.

* To find the number of set bits in a number X, bitwise AND X and X-1. The number of times this operation is successful gives the number of set bits. 

* To get the number of Most Significant Bits (MSB) common to two given numbers, apply bitwise XOR operation. The number of zeroes from the right gives the required result. To find this count of common bits, you can bitwise LEFT SHIFT the result of the XOR operation until the number becomes equal to zero.  

* Left shift is equivalent to multiplying the bit pattern with 2^k. Right shift is equivalent to dividing the bit pattern with 2^k. (Here, k denotes the number of bits shifted left/ right.)

* To check if a number X is power of 2, calculate bitwise AND of X and X-1. If the result is zero, it indicates that the given number is a power of 2.

[Source code](https://github.com/Diksha-Rathi/Competitive-Programming/tree/master/Algorithms/Bit%20Manipulation) to my submissions of related problems from [HackerRank](https://www.hackerrank.com/domains/algorithms/bit-manipulation/) and [HackerEarth](https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/practice-problems/).