jscript.array.copyArray=function(t,e){var i;for(i=0;i<t.length;i++)e.push(t[i]);return e},jscript.array.findInArray=function(t,e){var i;for(i=0;i<t.length;i++)if(t[i]==e)return i;return-1},jscript.array.arrayAverage=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e];return i/t.length},jscript.brower.getBrowserIdentity=function(){return navigator.appName+" "+navigator.appVersion},jscript.datetime.getNumberDaysInMonth=function(t,e){t-=1;var i=this.isLeapYear(e);return i=i?1:0,3==t||5==t||8==t||10==t?30:1==t?28+i:31},jscript.datetime.isLeapYear=function(t){return t%4==0&&t%100!=0||t%400==0},jscript.debug.enumProps=function(t){var e,i="";for(e in t)i+=e+" = "+t[e]+"\n";alert(i)},jscript.debug.DivLogger=function(){this.LEVEL_TRACE=1,this.LEVEL_DEBUG=2,this.LEVEL_INFO=3,this.LEVEL_WARN=4,this.LEVEL_ERROR=5,this.LEVEL_FATAL=6,this.LEVEL_TRACE_COLOR="a0a000",this.LEVEL_DEBUG_COLOR="64c864",this.LEVEL_INFO_COLOR="000000",this.LEVEL_WARN_COLOR="0000ff",this.LEVEL_ERROR_COLOR="ff8c00",this.LEVEL_FATAL_COLOR="ff0000",this.logLevel=3,this.targetDIV=null,this.setLevel=function(t){this.logLevel=t},this.setTargetDiv=function(t){this.targetDIV.innerHTML=""},this.shouldBeLogged=function(t){return t>=this.logLevel},this.trace=function(t){this.shouldBeLogged(this.LEVEL_TRACE)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_TRACE_COLOR+";'>[TRACE] "+t+"</div>")},this.debug=function(t){this.shouldBeLogged(this.LEVEL_DEBUG)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_DEBUG_COLOR+";'>[DEBUG] "+t+"</div>")},this.info=function(t){this.shouldBeLogged(this.LEVEL_INFO)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_INFO_COLOR+";'>[INFO] "+t+"</div>")},this.warn=function(t){this.shouldBeLogged(this.LEVEL_WARN)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_WARN_COLOR+";'>[WARN] "+t+"</div>")},this.error=function(t){this.shouldBeLogged(this.LEVEL_ERROR)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_ERROR_COLOR+";'>[ERROR] "+t+"</div>")},this.fatal=function(t){this.shouldBeLogged(this.LEVEL_FATAL)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_FATAL_COLOR+";'>[FATAL] "+t+"</div>")}},jscript.dom.layerCenterH=function(t){var e,i,n,r,s;e=window.innerWidth?window.innerWidth:document.body.clientWidth,i=t.offsetWidth,n=Math.round(e/2)-Math.round(i/2),r=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,s=document.all?r.scrollLeft:window.pageXOffset,t.style.left=n+s+"px"},jscript.dom.layerCenterV=function(t){var e,i,n,r,s;e=window.innerHeight?window.innerHeight:document.body.clientHeight,i=t.offsetHeight,n=Math.round(e/2)-Math.round(i/2),r=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,s=document.all?r.scrollTop:window.pageYOffset,t.style.top=n+s+"px"},jscript.dom.execScripts=function(inText){for(var si=0;;){var ss=inText.indexOf("<script>",si);if(-1==ss)return;var se=inText.indexOf("<\/script>",ss);if(-1==se)return;si=se+9;var sc=inText.subString(ss+8,se);eval(sc)}},jscript.dom.getDOMElements=function(){if(0==arguments.length)return null;if(1==arguments.lenght)return document.getElementById(arguments[0]);for(var t=new Array,e=0;e<arguments.length;e++)t.push(document.getElementById(arguments[e]));return t},jscript.form.formToXML=function(t,e){if(null==t)return null;if(null==e)return null;var i,n="<"+e+">";for(i=0;i<t.length;i++){var r=t[i],s=r.type.toUpperCase(),o=r.name,h=r.value;"TEXT"!=s&&"HIDDEN"!=s&&"PASSWORD"!=s&&"SELECT-ONE"!=s&&"TEXTAREA"!=s||(n+="<"+o+">"+h+"</"+o+">"),"RADIO"==s&&1==r.checked&&(n+="<"+o+">"+h+"</"+o+">"),"CHECKBOX"==s&&(1==r.checked?cbval="true":cbval="false",n=n+"<"+o+">"+cbval+"</"+o+">"),n+=""}return n+="</"+e+">"};