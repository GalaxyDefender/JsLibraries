jscript.array.copyArray=function(t,e){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e},jscript.array.findInArray=function(t,e){var n;for(n=0;n<t.length;n++)if(t[n]==e)return n;return-1},jscript.array.arrayAverage=function(t){var e,n=0;for(e=0;e<t.length;e++)n+=t[e];return n/t.length},jscript.brower.getBrowserIdentity=function(){return navigator.appName+" "+navigator.appVersion},jscript.datetime.getNumberDaysInMonth=function(t,e){t-=1;var n=this.isLeapYear(e);return n=n?1:0,3==t||5==t||8==t||10==t?30:1==t?28+n:31},jscript.datetime.isLeapYear=function(t){return t%4==0&&t%100!=0||t%400==0},jscript.debug.enumProps=function(t){var e,n="";for(e in t)n+=e+" = "+t[e]+"\n";alert(n)},jscript.debug.DivLogger=function(){this.LEVEL_TRACE=1,this.LEVEL_DEBUG=2,this.LEVEL_INFO=3,this.LEVEL_WARN=4,this.LEVEL_ERROR=5,this.LEVEL_FATAL=6,this.LEVEL_TRACE_COLOR="a0a000",this.LEVEL_DEBUG_COLOR="64c864",this.LEVEL_INFO_COLOR="000000",this.LEVEL_WARN_COLOR="0000ff",this.LEVEL_ERROR_COLOR="ff8c00",this.LEVEL_FATAL_COLOR="ff0000",this.logLevel=3,this.targetDIV=null,this.setLevel=function(t){this.logLevel=t},this.setTargetDiv=function(t){this.targetDIV.innerHTML=""},this.shouldBeLogged=function(t){return t>=this.logLevel},this.trace=function(t){this.shouldBeLogged(this.LEVEL_TRACE)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_TRACE_COLOR+";'>[TRACE] "+t+"</div>")},this.debug=function(t){this.shouldBeLogged(this.LEVEL_DEBUG)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_DEBUG_COLOR+";'>[DEBUG] "+t+"</div>")},this.info=function(t){this.shouldBeLogged(this.LEVEL_INFO)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_INFO_COLOR+";'>[INFO] "+t+"</div>")},this.warn=function(t){this.shouldBeLogged(this.LEVEL_WARN)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_WARN_COLOR+";'>[WARN] "+t+"</div>")},this.error=function(t){this.shouldBeLogged(this.LEVEL_ERROR)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_ERROR_COLOR+";'>[ERROR] "+t+"</div>")},this.fatal=function(t){this.shouldBeLogged(this.LEVEL_FATAL)&&this.targetDIV&&(this.targetDIV.innerHTML+="<div style='color:#"+this.LEVEL_FATAL_COLOR+";'>[FATAL] "+t+"</div>")}},jscript.dom.layerCenterH=function(t){var e,n,i,r,o;e=window.innerWidth?window.innerWidth:document.body.clientWidth,n=t.offsetWidth,i=Math.round(e/2)-Math.round(n/2),r=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,o=document.all?r.scrollLeft:window.pageXOffset,t.style.left=i+o+"px"},jscript.dom.layerCenterV=function(t){var e,n,i,r,o;e=window.innerHeight?window.innerHeight:document.body.clientHeight,n=t.offsetHeight,i=Math.round(e/2)-Math.round(n/2),r=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body,o=document.all?r.scrollTop:window.pageYOffset,t.style.top=i+o+"px"},jscript.dom.execScripts=function(inText){for(var si=0;;){var ss=inText.indexOf("<script>",si);if(-1==ss)return;var se=inText.indexOf("<\/script>",ss);if(-1==se)return;si=se+9;var sc=inText.subString(ss+8,se);eval(sc)}},jscript.dom.getDOMElements=function(){if(0==arguments.length)return null;if(1==arguments.lenght)return document.getElementById(arguments[0]);for(var t=new Array,e=0;e<arguments.length;e++)t.push(document.getElementById(arguments[e]));return t},jscript.form.formToXML=function(t,e){if(null==t)return null;if(null==e)return null;var n,i="<"+e+">";for(n=0;n<t.length;n++){var r=t[n],o=r.type.toUpperCase(),s=r.name,a=r.value;"TEXT"!=o&&"HIDDEN"!=o&&"PASSWORD"!=o&&"SELECT-ONE"!=o&&"TEXTAREA"!=o||(i+="<"+s+">"+a+"</"+s+">"),"RADIO"==o&&1==r.checked&&(i+="<"+s+">"+a+"</"+s+">"),"CHECKBOX"==o&&(1==r.checked?cbval="true":cbval="false",i=i+"<"+s+">"+cbval+"</"+s+">"),i+=""}return i+="</"+e+">"},jscript.form.selectLocateOption=function(t,e,n,i){if(null!=t&&null!=e&&""!=e&&null!=i&&null!=n){i&&(e=e.toLowerCase());var r,o=!1;for(r=0;r<t.length&&!o;r++){var s=t.options[r].value;i&&(s=s.toLowerCase()),s==e&&(o=!0,n||(t.options[r].selected=!0))}return o}},jscript.form.selectSelectAll=function(t){var e;if(null!=t&&t.options&&0!=t.options.length)for(e=0;e<t.options.length;e++)t.options[e].selected=!0},jscript.lang.copyProperties=function(t,e,n){var i;for(i in t)!n&&e[i]||(e[i]=t[i]);return e},jscript.math.genRandomNumber=function(t,e){return e<t?0:t+(e-t)*Math.random()},jscript.page.printPage=function(){4<=parseInt(navigator.appVersion)&&window.print()},jscript.page.getParameter=function(t){var e=null,n=unescape(location.search.substring(1));if(n){var i=n.split("&"),r=new Array,o=0,s=0;for(s=0;s<i.length;s++){var a=(r=i[s].split("="))[0],c=r[1];if(null==t)null==e&&(e=new Array),e[o]=a,e[o+1]=c,o+=2;else if(a==t){e=c;break}}}return e},jscript.page.breakOutOfFrames=function(){self!=top&&(top.location=self.location)},jscript.storage.setCookie=function(t,e,n){"Date"==typeof n&&(n=n.toGMTString()),document.cookie=t+"="+escape(e)+"; expires="+n},jscript.storage.getCookie=function(t){var e=document.cookie,n=e.indexOf(t+"=");if(-1==n)return null;n=e.indexOf("=",n)+1;var i=e.indexOf(";",n);return-1==i&&(i=e.length),unescape(e.substring(n,i))},jscript.storage.deleteCookie=function(t){this.getCookie(t)&&this.setCookie(t,null,"Thu, 01-Jan-1970 00:00:01 GMT")};