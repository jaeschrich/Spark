# Spark.js

## Update! v4
###Changelog
* Added Spark.addStyle (see wiki)

## What is Spark.js?

Spark.js is a javascript framework that lets you develop applications in javascript like you weren't in a browser. No html, except a simple (really simple) template file where the javascript is injected. Then, you just code in javascript. That's it really. Not another AJAX framework. Just a way to write web apps in pure JavaScript. It does include AJAX abstraction however
. With Spark.js, you can write HTML from JavaScript, so removing the middleman from your JavaScript and your HTML.

## Why use Spark.js?

Spark.js is very clean, in that the code is self descriptive, and doesn't require unnecessary characters. For example, in jQuery you do this to make a button with JavaScript:
```HTML
<!doctype html>
<html>
<body id="body">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
function test(){
  alert("Hi")
}
$(document).ready(function() {
$("#body").html("<button type=\"submit\" onclick=\"test()\">Test</button>")
})
</script>
</body>
</html>
```

Not bad right? You could even put the JavaScript in a seperate file, and load that file, so you could then write almost all of your HTML in JavaScript. That might look like this:
```HTML
<!doctype html>
<html>
<body id="body">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
function test(){
  alert("Hi")
}
$(document).ready(function() {
$("#body").html("<form method=\"POST\"><input type=\"text\" /><button type=\"submit\">Submit</button>")
})
</script>
</body>
</html>
```
But at that point, even if the JavaScript is in a seperate file, it's even more complex than just writing the HTML, because everything is on one line, 
you have to put a backslash before quotes, ect. In Spark however, making a button looks like this:
```HTML
<!doctype html>
<html>
<body id="body">
<script src="/spark.js"></script>
<script>
function test() {
alert("Hi")
}
Spark.create('button', {'type': 'submit', 'onclick': 'test()'}, 'Test')
</script>
</body>
</html>
```
If you were to put the JavaScript in a seperate file, you can see how much that is like writing a desktop application.

Spark works in Chrome and Firefox, and partial IE support (AJAX fails).


## How can I help!

It's on GitHub! Just fork the repo, and send pull requests once you have added features or fixed bugs.

## Wait... What licensing do I have to deal with?

None! Spark.js is public domain. Just pop it in your project and get going.

## Where can I learn more?
All information not covered here is in the [wiki](https://github.com/PyScripter255/Spark/wiki).