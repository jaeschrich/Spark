#Changelog

* Redesigned internals: Partial IE support! The AJAX doesn't work, but the rest does
* Redesigned internals: Now, the script will run inside it's parent tag. So, Spark.js scripts can be embedded in <div> tags. If the script is in the body, it works the same as it used to.
* Redisigned internals: The code is smaller through resue, even without compression.
* New function!: Spark.superAjax. Works the same as Spark.ajax, but returns the ajaxHttp *object* not the text.