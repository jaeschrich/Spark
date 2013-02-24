# Spark.js

## Update! v0.6
#Changelog
* Added Spark.sel (really simple DOM selection). The Tutorial covers the Spark.sel function

## What is Spark.js?
A JavaScript framework that lets you write HTML from JavaScript.

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
you have to put a backslash before quotes, etc. In Spark however, making a button looks like this:
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

Spark works in Chrome and Firefox, and IE.


## How can I help!

It's on GitHub! Just fork the repo, and send pull requests once you have added features or fixed bugs.

## Where can I learn more?
The tutorial is [here](https://github.com/PyScripter255/Spark/wiki/tutorial). The rest is on the [wiki](https://github.com/PyScripter255/Spark/wiki).

## Complete Feature List
* Dynamic creation of HTML with Spark.start(), Spark.end(), and Spark.create()
* Cross browser ajax with Spark.ajax(), Spark.superAjax(), and Spark.get()
* Spark.pack() for creating widgets and the Spark.widget object for accessing them (Docs on widgets [here](https://github.com/PyScripter255/Spark/wiki/Making-Widgets))
* DOM selection tool Spark.sel() function for manipulating the DOM
