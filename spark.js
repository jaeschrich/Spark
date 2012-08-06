var Spark = { // The (large) object that contains all of functionality of Spark 
  create: function(name, attr, between){ // The special function in Spark that lets you create HTML elements. Combines Spark.start and Spark.end (for optimization)
    Spark.start(name, attr)
    var scripts = document.getElementsByTagName('script')
    scripts[scripts.length -1].parentNode.innerHTML = scripts[scripts.length -1].parentNode.innerHTML + between
    Spark.end(name)
  },
  start: function(name, attr){ // Used for tags that contain more that text, starts the tag
    var keys = Object.keys(attr)
    if (attr === undefined){attr = {}}
    var attrStr = ""
    for (i in keys){
    attrStr += keys[i] + '=\"' +attr[keys[i]] + '" '
    }
    var scripts = document.getElementsByTagName('script')
    scripts[scripts.length -1].parentNode.innerHTML = scripts[scripts.length -1].parentNode.innerHTML + "<"+name+" "+attrStr+">"
    //document.write("<"+name+" "+attrStr+">")
  },
  end: function(name){ // Ends the multi-element tag.\
    var scripts = document.getElementsByTagName('script')
    scripts[scripts.length -1].parentNode.innerHTML = scripts[scripts.length -1].parentNode.innerHTML + "</"+name+'>'
     //document.write("</"+name+'>')
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
ajaxHttp.open(type.toUpperCase,url+x.value+"&t="+parseInt(new Date().getTime().toString().substring(0, 10)),true);
ajaxHttp.send();
},
  ajax: function(type, url, callback){ // A wrapper for the built-in AJAX methods. Executes the callback with the respone text as the argument
    Spark.superAjax(type, url, function(res){
    callback(res.responseText)
    })
},
  get: function(url,callback){ // Like the AJAX wrapper, but special for GET requests. GET requests are common, so it is a bit more convient. It's pretty much the same.
    Spark.ajax("get", url, callback)
}
}