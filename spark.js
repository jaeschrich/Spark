var Spark = { // The (large) object that contains all of functionality of Spark 
  start: function(name, attr){ // Used for tags that contain more that text, starts the tag
    var keys = Object.keys(attr)
    if (attr === undefined){attr = {}}
    var attrStr = ""
    for (i in keys){
    attrStr += keys[i] + '=\"' +attr[keys[i]] + '" '
    }
    document.write("<"+name+" "+attrStr+">")
  },
  end: function(name){ // Ends the multi-element tag.\
    document.write("</"+name+">")
  },
    create: function(name, attr, between){ // The special function in Spark that lets you create HTML elements. Combines Spark.start and Spark.end (for optimization)
    if (between === undefined){between = ""}
        Spark.start(name, attr)
        document.write(between)
        Spark.end(name)
  },
  superAjax: function(type, url, callback){ // A wrapper for the built-in AJAX methods. Executes the callback with the respone text as the argument
      var ajaxHttp;
    try{
		// Opera 8.0+, Firefox, Safari
		ajaxHttp = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
                try{
                    ajaxHttp = new XDomainRequest();
                }
                catch (e){
				// Something went wrong
				document.write("Sorry, AJAX and your browser don't mix. This browser may be better: <a href='https://www.google.com/intl/en/chrome/'>Download Chrome</a>");
				return false;
			}
		}
	}}  
ajaxHttp.onreadystatechange=function()
  {
  if (ajaxHttp.readyState==4 && ajaxHttp.status==200)
    {
    callback(ajaxHttp)
  
    }
  }
ajaxHttp.open(type.toUpperCase(),url+"?msdfss=test&jajsk="+Math.floor((Math.random())*10),true);
ajaxHttp.send();
},
  ajax: function(type, url, callback){ // A wrapper for the built-in AJAX methods. Executes the callback with the respone text as the argument
    Spark.superAjax(type, url, function(res){
    callback(res.responseText)
    })
},
  get: function(url,callback){ // Like the AJAX wrapper, but special for GET requests. GET requests are common, so it is a bit more convient. It's pretty much the same.
    Spark.ajax("get", url, callback)
},
widget: {},
pack: function(name, render){ // A wrapper for the built-in AJAX methods. Executes the callback with the respone text as the argument
    Spark.widget[name] = render
},
addStyle: function(name, attr){
    var keys = Object.keys(attr)
    if (attr === undefined){attr = {}}
    var attrStr = name+"{\n"
    for (i in keys){
    attrStr += keys[i] + ': ' +attr[keys[i]] + ';\n'
    }
    attrStr = attrStr += "}\n"
    document.getElementsByTagName('head')[0].innerHTML += "<style>\n"+attrStr+"</style>" 
    
        }
}