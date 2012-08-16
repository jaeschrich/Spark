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
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  ajaxHttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  ajaxHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
ajaxHttp.onreadystatechange=function()
  {
  if (ajaxHttp.readyState==4 && ajaxHttp.status==200)
    {
    callback(ajaxHttp)
  
    }
  }
ajaxHttp.open(type.toUpperCase(),url,true);
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