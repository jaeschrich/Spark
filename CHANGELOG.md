#Changelog v0.6
* Added Spark.sel (like jQuery's $ function). The Tutorial covers the Spark.sel function

#Changelog v0.5.2
* Fixed string error, now you can use any kind of quotes with the args list string

#Changelog: 0.5
* First Stable version: Internet Explorer works with AJAX (tested with IE 9 64-bit and 32-bit)

#Changelog: 0.4.1
* Worked on IE AJAX

#Changelog: Fourth Version
* Added Spark.addStyle (see the [tutorial](https://github.com/PyScripter255/Spark/wiki/Tutorial))

#Changelog Third Version
* Added Spark.pack and Spark.widget object for the creation of modules.

#Changelog Second Version

* False error: Partial IE support! The AJAX doesn't work, but the rest does
* Dsicovered Feauture: Now, the script will run inside it's parent tag. So, Spark.js scripts can be embedded in <div> tags. The body can have content, (a script tag's content is inserted after itself)
* Redisigned internals: The code is smaller, even without compression.
* New function!: Spark.superAjax. Works the same as Spark.ajax, but returns the ajaxHttp *object* not the text.