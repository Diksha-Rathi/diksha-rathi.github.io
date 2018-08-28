---
title:  "How to install Visual Studio code on your MacBook?"
date:   2017-08-27 11:04:23
categories: [Microsoft]
tags: [VSCode]
---

I used to be frequent with practicing problems from CodeChef/ Hackerrank when I was in a university. The transition to a corporate life one year back took me on a break. One fine evening, I realised I am missing something in life and that bought me back to get started again with what I have always loved. 

It's been a year now since I have been working at Microsoft. Transition from Python/ Sublime/ Git to C#/ Visual Studio/ TFS has been one interesting journey. The most important of this has been how I have felt in love with everything magical that Visual Studio does with your code. So, the obvious next step to what I decided to start again was to install Visual Studio Code on my personal laptop. In this blog, I mention the installation process and how you can compile a CPP code. 

Visual Studio Code doesn't come with a compiler for CPP. So, you can choose your own compiler. I decided to use GCC. Let's go ahead with the installation process. In this example, I will be creating a simple program to print "Hello, World!".

> 1. Download XCode from the App Store.
> 2. Download Visual Studio Code from 
> 3. Once the installation is complete, open Visual Studio Code.
> 4. The intellisense with Visual Studio works best when working with folders. So, go to the Finder and create a folder and open it in Visual Studio Code.
> 5. Add a new file to the folder with the extension .cpp
> 6. Write your code and save. One of the magical things that VS code does is with the formatting of your document so that you can code carefree. Simply use the shortcut alt+shift+f or right click on the screen and select "Format Option".

![VS-1](https://raw.githubusercontent.com/Diksha-Rathi/diksha-rathi.github.io/master/static/images/blog/VSCode-1.png)

> 7. Next, go to Tasks -> Run Build Tasks or use the shortcut Shift+Command+B. 
> 8. ---- and select create your own task file. Clicking on this will automatically create a task file for you.
> 9. Next, select the arbitary external command option and edit your task.json file as-
"command": g++ -g <nameofyourcppfile>.cpp -o <choosenameofyourobjectfile>
	"group": {
                "kind": "build",
                "isDefault": true
            }
            This allows you to set this command as the default when you build again.
> 10. 