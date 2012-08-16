#Changelog: Fourth Version
* Added Spark.addStyle (see wiki)

#Changelog Third Version
* Added Spark.pack and Spark.widget object for the creation of modules.

#Changelog Second Version

* False error: Partial IE support! The AJAX doesn't work, but the rest does
* Dsicovered Feauture: Now, the script will run inside it's parent tag. So, Spark.js scripts can be embedded in <div> tags. The body can have content, (a script tag's content is inserted after itself)
* Redisigned internals: The code is smaller, even without compression.
* New function!: Spark.superAjax. Works the same as Spark.ajax, but returns the ajaxHttp *object* not the text.