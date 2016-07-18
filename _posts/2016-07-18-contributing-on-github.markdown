---
title:  "How to contribute on Github?"
date:   2016-07-18 11:04:23
categories: [Github]
tags: [Github]
---

This blog post is about contributing to various projects on Github. After finding a project, one wishes to contribute to, it is a three step process. It can be summarised as:

> 1. Fork the repository.
> 2. Make the fix.
> 3. Submit a pull request to the project owner.


#### Step-1: Fork the repository.

* Navigate to the repository you wish to contribute to.
* On the top right corner click on fork. This is the third button from left in the image below.

![git-fork](https://raw.githubusercontent.com/Diksha-Rathi/diksha-rathi.github.io/master/static/images/blog/github-fork.png)

A copy of the project will now be there in your list of repositories.


#### Step-2: Make the fixes. 

* Copy the clone URL of the repository you created above. 
* On your Linux Terminal, use the following command:

``` shell
 $ git clone <paste_the_copied_url>
```

* Navigate to the folder created above using `cd <folder_name>`.
* Next, we need to add the original project repository as upstream. For this, use the following command-

```shell
 $ git remote add upstream <clone_link_to_the_original_project_repository>
```

* Verify that the new upstream repository has been added. The result of the following command will be URL of our fork as origin, and the URL of the original repository as upstream.

```shell
 $ git remote -v
```

* Now, make the required fixes and commit the changes to your github repository. This can be done using- 

```shell
 $ git add -A
 $ git commit -m "<commit_message>"
 $ git push origin master
```

We can use `$ git status` to check the staging progress anytime. Your copy of the project on Github has now been updated. We need to now create a pull request and submit our contribution.

**Note:** To make sure your your copy remains updated with the original version, don't forget to use `$ git fetch upstream` before making any changes and submitting a pull request.


#### Step-3: Submit a pull request to the project owner.

* Open the original project repository. Click *Pull Requests* tab. Next, click on *New Pull Request*. 

![git-clone](https://raw.githubusercontent.com/Diksha-Rathi/diksha-rathi.github.io/master/static/images/blog/github-clone.png)

* Click on the link *compare across forks*.

![git-submit-pull](https://raw.githubusercontent.com/Diksha-Rathi/diksha-rathi.github.io/master/static/images/blog/github-submit-pull.png)

* Now, in the selection box that appears below, select the base fork and branch as that of the original project repository, and head fork and branch to your forked version.

* Review the changes that are highlighted below. Click on *Create Pull Request*. Congratulations, you are done now. 

For more [this](https://help.github.com/articles/using-pull-requests/) maybe helpful.

I just submitted my first pull request and it feels awesome. I look forward to contributing on GitHub more frequently now. 

Happy coding! :)