**Excuses:** ___I apologize for the English used, my language is Spanish.___

# ManyP (On many pages) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Getting started.](#GettingStarted "Getting started")
4. [HTML templates.](#HtmlTemplates "HTML templates")
5. [Using JavaScript](#UsingJavaScript "Using JavaScript")
6. [Using Widgets.](#UsingWidgets "Using Widgets")
7. [Using SASS.](#UsingSASS "Using SASS")
8. [Files copy.](#FilesCopy "Files copy")
9. [Production](#Production "Production")

## Introduction <span name="Introduction"></span> ##

This project aims to provide an alternative to creating websites.

## Dependencies <span name="Dependencies"></span> ##

* Node.js (https://nodejs.org).
  - Run "node -v" in your OS console to see if it is already installed.
* Npm CLI (https://docs.npmjs.com/cli).
  - On Windows it comes with the Node.js installer, on Linux based OSs you will need to install it.
  - Run "npm -v" in your OS console to see if it is already installed.
* Python (https://www.python.org).
  - On Windows you have to install it and add it to the OS path.
  - On linux based OSs you should run the command "sudo apt-get install python-is-python3".
  - Run "python --version" in your OS console to see if it is already installed.
* Sass (https://sass-lang.com).
  - Run "npm i sass -g" in your OS console to install it.
  - Run "sass --version" in your OS console to see if it is already installed.
* ManyP CLI.
  - Run "npm i manyp-cli -g".
  - On Linux based OSs, include "--unsafe-perm", then the command would be "npm i manyp-cli -g --unsafe-perm".
  - Run "manyp-cli -v" in your OS console to see if it is already installed.

## Getting started <span name="GettingStarted"></span> ##

Using the console of our operating system we will access the directory that we want for our project, then we will execute the following command that will load all the files of the "manyp" project.

~~~
manyp-cli install
~~~

Now we can execute the following command that makes our project be aware of the changes to automatically execute the corresponding commands.

~~~
manyp-cli start
~~~

In the development phase, the project must always be attentive to changes and to exit you just have to use Ctrl + C. With this we can enter the following URL and see our project for the first time.

**http://localhost:8082/web**

It is also recommended to add the extension "Livereload" for "Google Chrome" or "Mozilla Firefox". This will tell these browsers to refresh the page the moment they detect a change, but always remember to run the "manyp-cli start" command, prevent the browser from caching, and enable "Livereload" on it.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can make our first test modifying the file "./pages/body.html" adding a "Hello World" to it. Modifying this file would look like this.

**File: ./pages/body.html**

```html
<h3>¡Hello World!</h3>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

If all goes well, you will see the changes in the browser. Each of the most relevant files and folders in the project is explained below with a brief description.

* "./grunt/": It contains all the routes that Grunt uses to function.
* "./pages/": It contains all the files and directories that represent each page in the project.
* "./pageTemplates/": It contains all the HTML templates for the project.
* "./src/": It contains all the resources of the project.
	- "./src/css/": It contains all the CSS files that SASS generates.
	- "./src/js/": Here we can manage our javascript files.
	- "./src/sass/": Here we can manage our sass files.
	- "./src/template/": Here we can manage our handlebars files.
* "./web/": It contains the production HTML files and folders.
* "./Gruntfile.js": Stores all grunt settings.
* "./package.json": Stores all Node.js settings.

## HTML templates <span name="HtmlTemplates"></span> ##

All HTML templates for the project are stored in the "./pageTemplates" directory. We will start by opening the file "./pageTemplates/index.html" to take a look, we see that they are common HTML tags with the exception of "&lt;&lt;ROOT-DIR&gt;&gt;", "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;" and "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;" explained below.

* "&lt;!&#45;&#45;headHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page header appear instead when the production files are updated.
* "&lt;!&#45;&#45;bodyHTML&#45;&#45;&gt;": You can use this statement so that the unique HTML tags in the page body appear instead when the production files are updated.
* "&lt;&lt;ROOT-DIR&gt;&gt;":  You can use this declaration so that when the production files are updated, the project root appears instead. So if you put "&lt;&lt;ROOT-DIR&gt;&gt;src/example/main.min.js", something like "../../src/example/main.min.js" will appearaccording to the location in the folder tree.

You can also use the following tag.

* "&lt;&lt;DIR&gt;&gt;": This tag does the same as the previous one but places the path one level lower in the folder tree.

Now we are about to create our first HTML template that will contain the following lines and will be called "temp2.html".

**File: ./pageTemplates/temp2.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ,user-scalable=no">

    <script src="<<ROOT-DIR>>node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="<<ROOT-DIR>>src/js/dist/main.min.js"></script>

    <!--headHTML-->
  </head>
  <body>
    <!--bodyHTML-->
  </body>
</html>
```

We will also create a new page by adding a new folder inside "./pages" and calling it "page2". When creating a new page we must also update the file "./grunt/html/routes.js" as follows.

**File: ./grunt/html/routes.js**

```js
exports.a=[
'./pages/*',
'./pageTemplates/*',
'./pages/page2/*'
];
```

Now we can modify the following files.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>
```

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>
```

See how the first line of the "head.html" file shows "&lt;!&#45;&#45;Route: temp2.html&#45;&#45;&gt;" which tells our page which HTML template to use.

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "manyp-cli start", this so that they recognize the changes in the file "Gruntfile.js" and the new files. If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, as this will prevent the page from updating correctly.***

If all is well we should see our new page at the following URL.

**http://localhost:8082/web/page2**

## Using JavaScript <span name="UsingJavaScript"></span> ##

Now we will create a JavaScript file for our new page (page2) that will serve as its controller and we will do it with JQuery syntax. We will do this by adding a new directory called "page2" that will contain our file and will be in the path "./src/js/pages/", the file will have the following instructions.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

$(function(){
  console.log('¡Hello World!');
});
```

It is important to update the files "./grunt/js/routes.js" and "./grunt/js/files.js", this so that the project knows where the path of our new file is. We will do it as follows. 

**File: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/pages/page2/*',
'./src/js/widget/users/*'
];
```

**File: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/pages/page2.min.js': ['src/js/pages/page2/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js']
};
```

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "manyp-cli start", this so that they recognize the changes in the file "Gruntfile.js" and the new files. If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, as this will prevent the page from updating correctly.***

If all goes well, you can check the path "./src/js/dist/pages/" that should contain our file in production version which we will add to our page by modifying the following file.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>
```

## Using Widgets <span name="UsingWidgets"></span> ##

We will start to implement the widget found in "http://localhost:8082/web/" which will load a list of test users, we will do it on the page "page2" previously created which uses the template "./pageTemplates/temp2.html" which should have the JQuery and Handlebars dependencies as follows.

**File: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/jquery/dist/jquery.min.js"></script>
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

Now we will modify the following file adding the dependencies that this widget needs to work.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
```

Now we will add the container where our widget will be loaded, we will do this by modifying the following file.

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finally we will load the widget in the container by modifying the following file.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

$(function(){
  console.log('¡Hello World!');

  oUsersWidget.load();
});
```

If everything goes well you will see the changes in the browser.

Now we are going to create our first widget and we will do it on the page "page2", it is important to remember that these widgets are made using JQuery and Handlebars and therefore their dependencies must be there, if we check the page "page2", we will see that it uses the template "./pageTemplates/temp2.html" and containing these dependencies as follows.

**File: ./pageTemplates/temp2.html**

```html
...
<script src="<<ROOT-DIR>>node_modules/jquery/dist/jquery.min.js"></script>
<script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
...
```

The widget that we will create will be called "albums" and we will start by creating a directory with its name in the paths "./src/template/widget/" and "./src/js/widget/" and then create the following files.

**File: ./src/template/widget/albums/albums.hbs**

```hbs
<h1>Albums</h1>

<ul>
  {{#each albums}}
    <li>{{title}}</li>
  {{/each}}
<ul>
```

**File: ./src/js/widget/albums/albums.js**

```js
"use strict";

var oAlbumsWidget = {};

$(function(){
});

/*
*/
oAlbumsWidget.load = function(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(function(oResponse){ return oResponse.json(); })
  .then(function(oResponse){
    console.log(oResponse);
    var oData = {
      'albums': oResponse
    };
    oAppMain.loadTemplate('widget/albums/albums', '#albums', oData);
  });
}
```

The file "albums.hbs" contains the template of our widget with handlebars syntax, and the file "albums.js" will serve as the controller of our widget that contains the "load" function, which will be in charge of taking the data from a web service and then load the template with these.

It is important to update the files "./grunt/hbs/routes.js" and "./grunt/hbs/files.js", this so that the project knows where the path of our "albums.hbs" file is. We will do it as follows.

**File: ./grunt/hbs/routes.js**

```js
exports.a=[
'./src/template/*',
'./src/template/widget/users/*',
'./src/template/widget/albums/*'
];
```

**File: ./grunt/hbs/files.js**

```js
exports.o={
'src/template/dist/main.min.js': ['src/template/*.hbs'],
'src/template/dist/widget/users.min.js': ['src/template/widget/users/*.hbs'],
'src/template/dist/widget/albums.min.js': ['src/template/widget/albums/*.hbs']
};
```

And it is also important to update the files "./grunt/js/routes.js" and "./grunt/js/files.js", this so that the project knows where the path of our file "albums.js". We will do it as follows.

**File: ./grunt/js/routes.js**

```js
exports.a=[
'./src/js/*',
'./src/js/pages/index/*',
'./src/js/widget/users/*',
'./src/js/widget/albums/*'
];
```

**File: ./grunt/js/files.js**

```js
exports.o={
'src/js/dist/main.min.js': ['src/js/*.js'],
'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js'],
'src/js/dist/widget/albums.min.js': ['src/js/widget/albums/*.js']
};
```

***Warning: It is recommended to restart the processes in the console using Ctrl + C and again "manyp-cli start", this so that they recognize the changes in the file "Gruntfile.js" and the new files. If it is necessary to re-save the changes made for the production files to be updated. It is also important while we are in the development phase to verify that our browser is not using the cache, as this will prevent the page from updating correctly.***

If all goes well, you can check in the path "src/js/dist/widget" and "src/template/dist/widget" that the production files of our new widget must contain and that we add to the page "page2" as shown sample below.

**File: ./pages/page2/head.html**

```html
<!--Route: temp2.html-->
<title>This is my page number 2.</title>

<script src="<<ROOT-DIR>>src/js/dist/pages/page2.min.js"></script>

<script src="<<ROOT-DIR>>src/template/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/users.min.js"></script>
<script src="<<ROOT-DIR>>src/template/dist/widget/albums.min.js"></script>
<script src="<<ROOT-DIR>>src/js/dist/widget/albums.min.js"></script>
```

Now we will add the container where our widget will be loaded, we will do this by modifying the following file.

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<section id="albums" data-template="true" data-styles="">
  loaded...
</section>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

Finally we will load the widget in the container by modifying the following file.

**File: ./src/js/pages/page2/app.js**

```js
"use strict";

var oApp = {};

$(function(){
  console.log('¡Hello World!');

  oUsersWidget.load();
  oAlbumsWidget.load();
});
```

If all goes well you will see the changes on the page "page2".

## Using SASS <span name="UsingSASS"></span> ##

You can use some framework like Bootstrap and include it in the HTML templates you want or you can also create your own styles using SASS as shown in the following example.

We will start by making a small modification to the previously created page "page2" and we will do it by modifying the following file.

**File: ./pages/page2/body.html**

```html
<h1>Hello, this is my page number 2.</h1>

<div>
  <h1>Styles test</h1>
</div>

<section id="albums" data-template="true" data-styles="">
  loaded...
</section>

<section id="users" data-template="true" data-styles="">
  loaded...
</section>
```

See how a new tag "&lt;div&gt;" was created that will serve us for our test.

Now we will add our first SASS lines by modifying the following file.

**File: ./src/sass/main.sass**

```sass
*
  margin: 0
  padding: 0

.test
  background-color: red
  color: white
```

With this we create the class ".test", the production file "./src/css/dist/main.min.css" will be automatically modified and we will add it to the HTML template that the page "page2" uses. We will do this by modifying the following file.

**File: ./pageTemplates/temp2.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ,user-scalable=no">

    <link rel="stylesheet" type="text/css" href="<<ROOT-DIR>>src/css/dist/main.min.css" />

    <script src="<<ROOT-DIR>>node_modules/jquery/dist/jquery.min.js"></script>
    <script src="<<ROOT-DIR>>node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="<<ROOT-DIR>>src/js/dist/main.min.js"></script>

    <!--headHTML-->
  </head>
  <body>
    <!--bodyHTML-->
  </body>
</html>
```

Now we will add the new class by doing the following modification.

**File: ./pages/page2/body.html**

```html
...
<div class="test">
  <h1>Styles test</h1>
</div>
...
```

If everything goes well you will see the changes in the browser.

## Files copy <span name="FilesCopy"></span> ##

This functionality will allow us to create a copy of one or more files. To understand how it works we are going to modify the following files.

**File: ./grunt/copy/routes.js**

```js
exports.a=[
'./src/css/dist/*'
];
```

The paths we load into this array will tell Grunt to update when it finds a modification to them. With the following modification we will indicate that the files are going to be copied and where they are going to be copied.

**File: ./grunt/copy/files.js**

```js
exports.o={
  cssdist: {
    expand: true,
    cwd: 'src/css/dist/',
    src: ["*.css", "*.css.map"],
    dest: 'dist/'
  }
};
```

In "cwd" we must add the path where the file or files we want to copy are, in "src" we will add the files to be copied and in "dest" we will add the destination of the files.

## Production <span name="Production"></span> ##

To obtain the production files for your project, follow the steps below.

1. Remember to make a copy of the development files to follow the next steps and get the production files.

2. We will start by installing the dependencies using the following command in the root of the project.

~~~
npm i
~~~

3. We will modify the javascript files or others that need to make a change for production.

4. Now we will execute the following command that will be in charge of preparing the files for production.

~~~
npm run prepare-dist
~~~

5. We delete the directory "node_modules" and execute the following command that will load this same directory but only with the production dependencies. 

~~~
npm i --production
~~~

6. In the root of the project we will delete all the files and we will keep the following folders.

- node_modules/
- src/
- web/

7. We will also delete "src/sass" and within "src/js" and "src/template" only the "dist" folder will remain.

8. All the content of the "web" folder will go to the root and then we delete it.