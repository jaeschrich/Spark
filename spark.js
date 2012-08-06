var Spark = { // The (large) object that contains all of functionality of Spark 
  create: function(name, attr, between){ // The special function in Spark that lets you create HTML elements
    var keys = Object.keys(attr)
    if (attr === undefined){attr = {}}
    if (attr.id === undefined){attr.id = randomId() }
    if (between === undefined){between = ""}
    var attrStr = ""
        for (i in keys){
        attrStr += keys[i] + '=\"' +attr[keys[i]] + '" '
                       }
    document.write("<"+name+" "+attrStr+">"+between+"</"+name+">")
    return document.getElementById(attr.id)
  },
  start: function(name, attr){ // Used for tags that contain more that text, starts the tag
    var keys = Object.keys(attr)
    if (attr === undefined){attr = {}}
    var attrStr = ""
    for (i in keys){
    attrStr += keys[i] + '=\"' +attr[keys[i]] + '" '
    }
    document.write("<"+name+" "+attrStr+">")
  },
  end: function(name){ // Ends the multi-element tag.
      document.write("</"+name+'>')
  },
  ajax: function(type, url, callback){ // A wrapper for the built-in AJAX methods. Executes the callback with the respone text as the argument
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
    callback(ajaxHttp.responseText)
  
    }
  }
ajaxHttp.open(type.toUpperCase(),url,true);
ajaxHttp.send();
},
  get: function(url,callback){ // Like the AJAX wrapper, but special for GET requests. GET requests are common, so it is a bit more convient. It's pretty much the same.
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
        callback(ajaxHttp.responseText)

  
    }
  }
ajaxHttp.open("GET",url,true);
ajaxHttp.send();
}
}
    
var $ = Spark