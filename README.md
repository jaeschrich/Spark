Spark.js is a JavaScript Framework designed to make writing JavaScript on the client-side like writing 
a desktop application. For example, in jQuery you do this to make a button with JavaScript:
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

Spark works in Chrome and Firefox, but not IE*

* I'm working on IE support