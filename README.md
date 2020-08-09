**Excuses:** ___I apologize for the English used, my language is Spanish.___

# ManyP (In many Page) #

## Content ##

1. [Introduction.](#Introduction "Introduction")
2. [Dependencies.](#Dependencies "Dependencies")
3. [Starting.](#Starting "Starting")
4. [HTML templates.](#HtmlTemplates "HTML templates")
5. [Handlebars templates.](#HandlebarsTemplates "Handlebars templates")
6. [Using SASS.](#UsingSASS "Using SASS")
7. [Using JavaScript](#UsingJavaScript "Using JavaScript")
8. [Using shell.js](#UsingShellJs "Using shell.js")
9. [Production](#Production "Production")

<span id="Introduction"></span>
## Introduction ##

This project aims to provide an alternative to creating websites.

<span id="Dependencies"></span>
## Dependencies ##

- Node.js (https://nodejs.org).
- Ruby (https://www.ruby-lang.org or https://rubyinstaller.org).
- Python (https://www.python.org): Download Python and add it to the path of your operating system.
- XAMPP (https://www.apachefriends.org/es/index.html).
- Execute "gem install sass" on the console of your operating system.
- Execute "npm i grunt -g" on the console of your operating system.
- Execute "npm i install-here -g" on the console of your operating system.

<span id="Starting"></span>
## Starting ##

In principle, don't forget to open the "XAMPP Control Panel" and start the "Apache" service. Now we will create a folder called "myproject" in the path of the "XAMPP" file, which would be left with the following path "../xampp/htdocs/myproject". With the folder ready, we can now access it using the console of your operating system and execute the following command, which brings all the files from the "manyp" project.

~~~
install-here manyp-ag
~~~

Then we execute the following command that brings all the dependencies of the "manyp" project.

~~~
npm i
~~~

Now we can execute the following command, that makes our project listen to the changes and automatically execute the corresponding commands.

~~~
npm start
~~~

In the development phase, the project must always be listening to changes. With this we can already enter the following URL and see our project for the first time.

**http://localhost/myproject/web/**

Also, it is recommended to add the "Livereload" extension for "Google Chrome" or "Mozilla Firefox". This will instruct these browsers to refresh the page the moment they detect a change, but remember to listen to the project with the "npm start" command and activate "Livereload" in the browser you want.

- [Extension for Google Chrome.](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=es "Extension for Google Chrome.")
- [Extension for Mozilla Firefox.](https://addons.mozilla.org/es/firefox/addon/livereload-web-extension "Extension for Mozilla Firefox.")

With this we can do our first test modifying the following file.

**File: ../src/template/section2.hbs**

~~~
<h3>Hello World!!!</h3>
~~~

If all goes well, you will see the changes in the browser. Each of the most relevant files and folders in the project is explained below with a description.

* "../pages/": Contains all the files that represent each page of the project.
* "../pageTemplates/": Contains all the "HTML" templates of the project.
* "../src/": Contains all the resources of the project.
	- "../src/css/": Contains all the CSS files that SASS generates.
	- "../src/js/": Contains all the JavaScript files for the project.
	- "../src/sass/": Contains all the SASS files of the project.
	- "../src/template/": Contains all the "Handlebars" templates of the project.
* "../web/": Contains project production files.
* "../Gruntfile.js": Stores all grunt settings.
* "../package.json": Stores all Node.js settings.

<span id="HtmlTemplates"></span>
## HTML templates ##

...(Pending for documentation)...

<span id="HandlebarsTemplates"></span>
## Handlebars templates ##

...(Pending for documentation)...

<span id="UsingSASS"></span>
## Using SASS ##

...(Pending for documentation)...

<span id="UsingJavaScript"></span>
## Using JavaScript ##

...(Pending for documentation)...

<span id="UsingShellJs"></span>
## Using shell.js ##

...(Pending for documentation)...

<span id="Production"></span>
## Production ##

...(Pending for documentation)...