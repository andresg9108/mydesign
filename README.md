**Excuses:** ___I apologize for the English used, my language is Spanish.___

# My Design #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Getting started.](#GettingStarted "Getting started")

## Introduction <span name="Introduction"></span> ##

This project aims to supply a set of reusable CSS elements and templates.

## Dependencies <span name="Dependencies"></span> ##

* Node.js (https://nodejs.org).
  - Run "node -v" in your OS console to see if it is already installed.
* Npm CLI (https://docs.npmjs.com/cli).
  - On Windows it comes with the Node.js installer, on Linux based OSs you will need to install it.
  - Run "npm -v" in your OS console to see if it is already installed.

## Getting started <span name="GettingStarted"></span> ##

To install My Design in our project we must execute the following command.

~~~
npm i mydesign-ag
~~~

To know everything that My Design has prepared for us, we have to clone its repository apart from our project and look at its files.


[My Design Repository.](https://github.com/andresg9108/mydesign "My Design Repository.")

My Design uses ManyP, so we should be familiar with this way of working.

[ManyP Repository.](https://github.com/andresg9108/manyp "ManyP Repository.")

Running the following command will create a test server. Now we can see some examples of My Design that we can add to our project.

~~~
manyp-cli server
~~~

When we decide which example we want to add to our project, we will access the “pages” folder and within it we will be able to find a folder with the name of the example we have selected. When we find the folder of our example, we will open the file "body.html" that is inside it. In this file is all the information to implement this example in our project. The implementation of the example in our project depends on the following.

- DESCRIPTION.
- DEPENDENCIES.
- CODE.

You will see the CSS class called “my-simple-container” in many of the cases as shown below. This class tells the "div" that contains it that it behaves like a small container, in many cases and if you want, this container is not needed to add the example in our project.

```html
<div class="my-simple-container">
  ...
</div>
```