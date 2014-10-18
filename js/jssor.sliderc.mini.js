﻿(function(f,e,b,g,c,d,h){/*! Jssor */
new(function(){});var k=f.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-k.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?k.$EaseInBounce(a*2)*.5:k.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},p={be:37,zd:39},m,i,a=new function(){var i=this,mb=1,F=2,F=3,fb=4,jb=5,q=0,l=0,u=0,Y=0,D=0,rb=navigator.appName,k=navigator.userAgent,p=e.documentElement,B;function x(){if(!q)if(rb=="Microsoft Internet Explorer"&&!!f.attachEvent&&!!f.ActiveXObject){var d=k.indexOf("MSIE");q=mb;u=n(k.substring(d+5,k.indexOf(";",d)));/*@cc_on Y=@_jscript_version@*/;l=e.documentMode||u}else if(rb=="Netscape"&&!!f.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){q=F;l=n(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");q=h>=0?fb:F;l=n(k.substring(i+1,a))}if(b>=0)D=n(k.substring(b+12))}else{var g=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(g){q=jb;l=n(g[2])}}}function s(){x();return q==mb}function N(){return s()&&(l<6||e.compatMode=="BackCompat")}function eb(){x();return q==F}function db(){x();return q==fb}function ib(){x();return q==jb}function Z(){return eb()&&D>534&&D<535}function A(){return s()&&l<9}function v(a){if(!B){j(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(a.style[b]!=h){B=b;return c}});B=B||"transform"}return B}function pb(a){return Object.prototype.toString.call(a)}var I;function j(a,d){if(pb(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(d(a[b],b,a))return c}else for(var e in a)if(d(a[e],e,a))return c}function wb(){if(!I){I={};j(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){I["[object "+a+"]"]=a.toLowerCase()})}return I}function z(a){return a==g?String(a):wb()[pb(a)]||"object"}function y(a,b){return{x:a,y:b}}function qb(b,a){setTimeout(b,a||0)}function G(b,d,c){var a=!b||b=="inherit"?"":b;j(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function bb(b,a){if(l<9)b.style.filter=a}function tb(b,a,c){if(Y<9){var e=b.style.filter,g=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),f=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=G(e,[g],f);bb(b,d);i.Hc(b,c.y);i.Jc(b,c.x)}}i.Lb=s;i.Nb=db;i.Ge=ib;i.Db=A;i.P=function(){return l};i.Rc=function(){x();return D};i.$Delay=qb;function nb(a){a.constructor===nb.caller&&a.Tc&&a.Tc()}i.Tc=nb;i.R=function(a){if(i.Vc(a))a=e.getElementById(a);return a};function t(a){return a||f.event}t=t;i.Ce=function(a){a=t(a);return a.target||a.srcElement||e};i.pc=function(a){a=t(a);var b=e.body;return{x:a.pageX||a.clientX+(p.scrollLeft||b.scrollLeft||0)-(p.clientLeft||b.clientLeft||0)||0,y:a.pageY||a.clientY+(p.scrollTop||b.scrollTop||0)-(p.clientTop||b.clientTop||0)||0}};function E(c,d,a){if(a!=h)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&f.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,g);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function V(b,c,a,d){if(a!=h){d&&(a+="px");E(b,c,a)}else return n(E(b,c))}function o(d,a){var b=a&2,c=a?V:E;return function(e,a){return c(e,d,a,b)}}function ub(b){if(s()&&u<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?n(a[1])/100:1}else return n(b.style.opacity||"1")}function vb(c,a,f){if(s()&&u<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=G(h,[i],d);bb(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}function X(e,a){var d=a.$Rotate||0,c=a.$Scale==h?1:a.$Scale;if(A()){var k=i.Le(d/180*b.PI,c,c);tb(e,!d&&c==1?g:k,i.Je(k,a.$OriginalWidth,a.$OriginalHeight))}else{var f=v(e);if(f){var j="rotate("+d%360+"deg) scale("+c+")";if(db()&&D>535)j+=" perspective(2000px)";e.style[f]=j}}}i.Be=function(b,a){if(Z())qb(i.s(g,X,b,a));else X(b,a)};i.oe=function(b,c){var a=v(b);if(a)b.style[a+"Origin"]=c};i.re=function(a,c){if(s()&&u<9||u<10&&N())a.style.zoom=c==1?"":c;else{var b=v(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=G(e,[g],f);a.style[b]=d}}};i.qe=function(a){if(!a.style[v(a)]||a.style[v(a)]=="none")a.style[v(a)]="perspective(2000px)"};i.zb=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!i.ne(a,d))&&b(c)}};i.c=function(a,c,d,b){a=i.R(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.vb=function(a,c,d,b){a=i.R(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.ke=function(b,a){i.c(A()?e:f,"mouseup",b,a)};i.X=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.s=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};i.le=function(a,b){if(b==h)return a.textContent||a.innerText;var c=e.createTextNode(b);i.qc(a);a.appendChild(c)};i.qc=function(a){a.innerHTML=""};i.F=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function ob(a,c,e,b){b=b||"u";for(a=a?a.firstChild:g;a;a=a.nextSibling)if(a.nodeType==1){if(R(a,b)==c)return a;if(!e){var d=ob(a,c,e,b);if(d)return d}}}i.q=ob;function gb(a,c,d){for(a=a?a.firstChild:g;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}i.we=gb;i.se=function(b,a){return b.getElementsByTagName(a)};function U(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c}i.j=U;i.xd=function(a){return z(a)=="function"};i.Gb=function(a){return z(a)=="array"};i.Vc=function(a){return z(a)=="string"};i.bd=function(a){return!isNaN(n(a))&&isFinite(a)};i.b=j;function P(a){return e.createElement(a)}i.Y=function(){return P("DIV",e)};i.ad=function(){return P("SPAN",e)};i.Hb=function(){};function S(b,c,a){if(a==h)return b.getAttribute(c);b.setAttribute(c,a)}function R(a,b){return S(a,b)||S(a,"data-"+b)}i.B=R;function r(b,a){if(a==h)return b.className;b.className=a}i.xc=r;i.Jb=function(a){return a.parentNode};i.E=function(a){i.Z(a,"none")};i.t=function(a,b){i.Z(a,b?"none":"")};i.od=function(b,a){b.removeAttribute(a)};i.md=function(){return s()&&l<10};i.nd=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=G(g,f,"");a.ub(d,e)}};i.C=function(){return+new Date};i.v=function(b,a){b.appendChild(a)};i.Eb=function(c,b,a){c.insertBefore(b,a)};i.gb=function(b,a){b.removeChild(a)};i.kd=function(b,a){j(a,function(a){i.gb(b,a)})};i.ud=function(a){i.kd(a,i.F(a))};i.wd=function(b,a){return parseInt(b,a||10)};function n(a){return parseFloat(a)}i.Nc=n;i.ne=function(b,a){var c=e.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(f){return d}return b==a};function T(b,a){return b.cloneNode(!a)}i.cb=T;function M(a){if(a){var b=a.$FlyDirection;if(b&1)a.x=a.$ScaleHorizontal||1;if(b&2)a.x=-a.$ScaleHorizontal||-1;if(b&4)a.y=a.$ScaleVertical||1;if(b&8)a.y=-a.$ScaleVertical||-1;if(a.$Rotate==c)a.$Rotate=1;M(a.$Brother)}}i.tb=function(a){if(a){for(var b=0;b<a.length;b++)M(a[b]);for(var c in a)M(a[c])}};function O(b,a,c){i.vb(a,"load");i.vb(a,"abort");i.vb(a,"error");b&&b(a,c)}i.ob=function(e,b){if(ib()&&l<11.6||!e)O(b,g,!e);else{var a=new Image;i.c(a,"load",i.s(g,O,b,a,d));var f=i.s(g,O,b,a,c);i.c(a,"abort",f);i.c(a,"error",f);a.src=e}};i.dd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}j(e,function(b){a.ob(b.src,c)});c()};i.Pc=function(c,j,i,h){if(h)c=T(c);for(var g=a.se(c,j),e=g.length-1;e>-1;e--){var b=g[e],d=T(i);r(d,r(b));a.ub(d,b.style.cssText);var f=a.Jb(b);a.Eb(f,d,b);a.gb(f,b)}return c};var C;function yb(b){var g=this,m,k,l,e;function f(){var a=m;if(e)a+="ds";else if(k)a+="dn";else if(l)a+="av";r(b,a)}function n(a){if(e)i.X(a);else{C.push(g);k=c;f()}}g.fd=function(){k=d;f()};g.Gc=function(a){if(a!=h){l=a;f()}else return l};g.$Enable=function(a){if(a!=h){e=!a;f()}else return!e};b=i.R(b);if(!C){i.ke(function(){var a=C;C=[];j(a,function(a){a.fd()})});C=[]}m=r(b);a.c(b,"mousedown",n)}i.rb=function(a){return new yb(a)};i.qb=E;i.mb=o("overflow");i.n=o("top",2);i.m=o("left",2);i.i=o("width",2);i.g=o("height",2);i.Jc=o("marginLeft",2);i.Hc=o("marginTop",2);i.u=o("position");i.Z=o("display");i.H=o("zIndex",1);i.Sb=function(b,a,c){if(a!=h)vb(b,a,c);else return ub(b)};i.ub=function(a,b){if(b!=h)a.style.cssText=b;else return a.style.cssText};var Q={$Opacity:i.Sb,$Top:i.n,$Left:i.m,Ob:i.i,Ib:i.g,hb:i.u,jg:i.Z,$ZIndex:i.H},w;function H(){if(!w)w=U({hg:i.Hc,ig:i.Jc,$Clip:i.nd,K:i.Be},Q);return w}function kb(){H();w.K=w.K;return w}i.ld=H;i.id=kb;i.jd=function(c,b){H();var a={};j(b,function(d,b){if(Q[b])a[b]=Q[b](c)});return a};i.M=function(c,b){var a=H();j(b,function(d,b){a[b]&&a[b](c,d)})};m=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.Bb=function(d,c){var a=b(d,[[c.x],[c.y]]);return y(a[0][0],a[1][0])}};i.Le=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};i.Je=function(d,c,a){var e=m.Bb(d,y(-c/2,-a/2)),f=m.Bb(d,y(c/2,-a/2)),g=m.Bb(d,y(c/2,a/2)),h=m.Bb(d,y(-c/2,a/2));return y(b.min(e.x,f.x,g.x,h.x)+c/2,b.min(e.y,f.y,g.y,h.y)+a/2)};i.K=function(j,k,t,q,u,w,h){var c=k;if(j){c={};for(var e in k){var x=w[e]||1,r=u[e]||[0,1],d=(t-r[0])/r[1];d=b.min(b.max(d,0),1);d=d*x;var o=b.floor(d);if(d!=o)d-=o;var v=q[e]||q.O,p=v(d),f,s=j[e],n=k[e];if(a.bd(n))f=s+(n-s)*p;else{f=a.j({N:{}},j[e]);a.b(n.N,function(c,b){var a=c*p;f.N[b]=a;f[b]+=a})}c[e]=f}if(j.$Zoom)c.K={$Rotate:c.$Rotate||0,$Scale:c.$Zoom,$OriginalWidth:h.$OriginalWidth,$OriginalHeight:h.$OriginalHeight}}if(k.$Clip&&h.$Move){var i=c.$Clip.N,m=(i.$Top||0)+(i.$Bottom||0),l=(i.$Left||0)+(i.$Right||0);c.$Left=(c.$Left||0)+l;c.$Top=(c.$Top||0)+m;c.$Clip.$Left-=l;c.$Clip.$Right-=l;c.$Clip.$Top-=m;c.$Clip.$Bottom-=m}if(c.$Clip&&a.md()&&!c.$Clip.$Top&&!c.$Clip.$Left&&c.$Clip.$Right==h.$OriginalWidth&&c.$Clip.$Bottom==h.$OriginalHeight)c.$Clip=g;return c}},l=function(){var b=this,d=[];function i(a,b){d.push({Yb:a,Vb:b})}function h(b,c){a.b(d,function(a,e){a.Yb==b&&a.Vb===c&&d.splice(e,1)})}b.$On=b.addEventListener=i;b.$Off=b.removeEventListener=h;b.f=function(b){var c=[].slice.call(arguments,1);a.b(d,function(a){try{a.Yb==b&&a.Vb.apply(f,c)}catch(d){}})}};i=function(m,x,j,P,N,J){m=m||0;var e=this,q,n,o,w,y=0,G,H,F,A,i=0,s=0,B,l=m,h,g,p,t=[],z;function K(b){h+=b;g+=b;l+=b;i+=b;s+=b;a.b(t,function(a){a,a.$Shift(b)})}function O(a,b){var c=a-h+m*b;K(c);return g}function v(k,n){var d=k;if(p&&(d>=g||d<=h))d=((d-h)%p+p)%p+h;if(!B||w||n||i!=d){var f=b.min(d,g);f=b.max(f,h);if(!B||w||n||f!=s){if(J){var m=(f-l)/(x||1);if(j.$Reverse)m=1-m;var o=a.K(N,J,m,G,F,H,j);a.b(o,function(b,a){z[a]&&z[a](P,b)})}e.ac(s-l,f-l)}s=f;a.b(t,function(b,c){var a=k<i?t[t.length-c-1]:b;a.A(k,n)});var r=i,q=k;i=d;B=c;e.Cb(r,q)}}function C(a,c){c&&a.yb(g,1);g=b.max(g,a.ab());t.push(a)}var D=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||f.msRequestAnimationFrame||function(b){a.$Delay(b,j.$Interval)};function I(){if(q){var d=a.C(),e=b.min(d-y,100),c=i+e*o;y=d;if(c*o>=n*o)c=n;v(c);if(!w&&c*o>=n*o)L(A);else D(I)}}function u(d,f,j){if(!q){q=c;w=j;A=f;d=b.max(d,h);d=b.min(d,g);n=d;o=n<i?-1:1;e.Dc();y=a.C();D(I)}}function L(a){if(q){w=q=A=d;e.Cc();a&&a()}}e.$Play=function(a,b,c){u(a?i+a:g,b,c)};e.vc=u;e.T=L;e.td=function(a){u(a)};e.I=function(){return i};e.uc=function(){return n};e.db=function(){return s};e.A=v;e.Ub=function(){v(h,c)};e.$Move=function(a){v(i+a)};e.$IsPlaying=function(){return q};e.Zc=function(a){p=a};e.yb=O;e.$Shift=K;e.U=function(a){C(a,0)};e.fc=function(a){C(a,1)};e.ab=function(){return g};e.Cb=e.Dc=e.Cc=e.ac=a.Hb;e.ic=a.C();j=a.j({$Interval:15},j);p=j.Bc;z=a.j({},a.ld(),j.nc);h=l=m;g=m+x;H=j.$Round||{};F=j.$During||{};G=a.j({O:a.xd(j.$Easing)&&j.$Easing||k.$EaseSwing},j.$Easing)};var q;new function(){;function m(q,kc){var j=this;function Fc(){var a=this;i.call(a,-1e8,2e8);a.ve=function(){var c=a.db(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{bb:f,te:d,hb:e}};a.Cb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Xb(e,c);j.f(m.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function Ec(){var b=this;i.call(b,0,0,{Bc:t});a.b(D,function(a){M&1&&a.Zc(t);b.fc(a);a.$Shift(lb/ec)})}function Dc(){var a=this,b=Wb.$Elmt;i.call(a,-1,2,{$Easing:k.$EaseLinear,nc:{hb:cc},Bc:t},b,{hb:1},{hb:-1});a.xb=b}function sc(n,l){var a=this,e,f,h,k,b;i.call(a,-1e8,2e8);a.Dc=function(){T=c;Y=g;j.f(m.$EVT_SWIPE_START,u(y.I()),y.I())};a.Cc=function(){T=d;k=d;var a=y.ve();j.f(m.$EVT_SWIPE_END,u(y.I()),y.I());!a.hb&&Hc(a.te,s)};a.Cb=function(g,d){var a;if(k)a=b;else{a=f;if(h){var c=d/h;a=o.$SlideEasing(c)*(f-e)+e}}y.A(a)};a.pb=function(b,d,c,g){e=b;f=d;h=c;y.A(b);a.A(0);a.vc(c,g)};a.me=function(d){k=c;b=d;a.$Play(d,g,c)};a.je=function(a){b=a};y=new Fc;y.U(n);y.U(l)}function tc(){var c=this,b=bc();a.H(b,0);c.$Elmt=b;c.Ab=function(){a.E(b);a.qc(b)}}function Cc(p,n){var e=this,r,x,H,y,f,A=[],R,q,T,G,P,F,h,w,k;i.call(e,-v,v+1,{});function E(a){x&&x.Fb();r&&r.Fb();S(p,a);F=c;r=new I.$Class(p,I,1);x=new I.$Class(p,I);x.Ub();r.Ub()}function Z(){r.ic<I.ic&&E()}function M(n,q,l){if(!G){G=c;if(f&&l){var g=l.width,b=l.height,k=g,i=b;if(g&&b&&o.$FillMode){if(o.$FillMode&3&&(!(o.$FillMode&4)||g>L||b>K)){var h=d,p=L/K*b/g;if(o.$FillMode&1)h=p>1;else if(o.$FillMode&2)h=p<1;k=h?g*K/b:L;i=h?K:b*L/g}a.i(f,k);a.g(f,i);a.n(f,(K-i)/2);a.m(f,(L-k)/2)}a.u(f,"absolute");j.f(m.$EVT_LOAD_END,hc)}}a.E(q);n&&n(e)}function X(b,c,d,f){if(f==Y&&s==n&&U)if(!Gc){var a=u(b);B.hd(a,n,c,e,d);c.Ie();fb.yb(a,1);fb.A(a);z.pb(b,b,0)}}function ab(b){if(b==Y&&s==n){if(!h){var a=g;if(B)if(B.bb==n)a=B.ue();else B.Ab();Z();h=new Ac(n,a,e.He(),e.Ke());h.Xc(k)}!h.$IsPlaying()&&h.Mb()}}function Q(d,c){if(d==n){if(d!=c)D[c]&&D[c].Fe();else h&&h.De();k&&k.$Enable();var j=Y=a.C();e.ob(a.s(g,ab,j))}else{var i=b.abs(n-d),f=v+o.$LazyLoading;(!P||i<=f||t-i<=f)&&e.ob()}}function bb(){if(s==n&&h){h.T();k&&k.$Quit();k&&k.$Disable();h.Oc()}}function cb(){s==n&&h&&h.T()}function O(b){if(W)a.X(b);else j.f(m.$EVT_CLICK,n,b)}function N(){k=w.pInstance;h&&h.Xc(k)}e.ob=function(d,b){b=b||y;if(A.length&&!G){a.t(b);if(!T){T=c;j.f(m.$EVT_LOAD_START);a.b(A,function(b){if(!b.src){b.src=a.B(b,"src2");a.Z(b,b["display-origin"])}})}a.dd(A,f,a.s(g,M,d,b))}else M(d,b)};e.Jd=function(){if(B){var b=B.vd(t);if(b){var e=Y=a.C(),c=n+ac,d=D[u(c)];return d.ob(a.s(g,X,c,d,b,e),y)}}gb(s+o.$AutoPlaySteps*ac)};e.Kb=function(){Q(n,n)};e.Fe=function(){k&&k.$Quit();k&&k.$Disable();e.Mc();h&&h.Pd();h=g;E()};e.Ie=function(){a.E(p)};e.Mc=function(){a.t(p)};e.Qd=function(){k&&k.$Enable()};function S(b,e,d){if(b["jssor-slider"])return;d=d||0;if(!F){if(b.tagName=="IMG"){A.push(b);if(!b.src){P=c;b["display-origin"]=a.Z(b);a.E(b)}}a.Db()&&a.H(b,(a.H(b)||0)+1);if(o.$HWA&&a.Rc())(!J||a.Rc()<534||!jb&&!a.Nb())&&a.qe(b)}var g=a.F(b);a.b(g,function(g){var i=a.B(g,"u");if(i=="player"&&!w){w=g;if(w.pInstance)N();else a.c(w,"dataavailable",N)}if(i=="caption"){if(!a.Lb()&&!e){var h=a.cb(g);a.Eb(b,h,g);a.gb(b,g);g=h;e=c}}else if(!F&&!d&&!f&&a.B(g,"u")=="image"){f=g;if(f){if(f.tagName=="A"){R=f;a.M(R,V);q=a.cb(f,c);a.c(q,"click",O);a.M(q,V);a.Z(q,"block");a.Sb(q,0);a.qb(q,"backgroundColor","#000");f=a.we(f,"IMG")}f.border=0;a.M(f,V)}}S(g,e,d+1)})}e.ac=function(c,b){var a=v-b;cc(H,a)};e.He=function(){return r};e.Ke=function(){return x};e.bb=n;l.call(e);var C=a.q(p,"thumb",c);if(C){e.Od=a.cb(C);a.od(C,"id");a.E(C)}a.t(p);y=a.cb(ib);a.H(y,1e3);a.c(p,"click",O);E(c);e.kc=f;e.Kc=q;e.xb=H=p;a.v(H,y);j.$On(203,Q);j.$On(28,cb);j.$On(24,bb)}function Ac(h,q,v,u){var b=this,l=0,x=0,n,g,e,f,k,r,w,t,p=D[h];i.call(b,0,0);function y(){a.ud(P);ic&&k&&p.Kc&&a.v(P,p.Kc);a.t(P,!k&&p.kc)}function z(){if(r){r=d;j.f(m.$EVT_ROLLBACK_END,h,e,l,g,e,f);b.A(g)}b.Mb()}function A(a){t=a;b.T();b.Mb()}b.Mb=function(){var a=b.db();if(!C&&!T&&!t&&s==h){if(!a){if(n&&!k){k=c;b.Oc(c);j.f(m.$EVT_SLIDESHOW_START,h,l,x,n,f)}y()}var d,o=m.$EVT_STATE_CHANGE;if(a!=f)if(a==e)d=f;else if(a==g)d=e;else if(!a)d=g;else if(a>e){r=c;d=e;o=m.$EVT_ROLLBACK_START}else d=b.uc();j.f(o,h,a,l,g,e,f);var i=U&&(!Q||G);if(a==f)i&&p.Jd();else(i||a!=e)&&b.vc(d,z)}};b.De=function(){e==f&&e==b.db()&&b.A(g)};b.Pd=function(){B&&B.bb==h&&B.Ab();var a=b.db();a<f&&j.f(m.$EVT_STATE_CHANGE,h,-a-1,l,g,e,f)};b.Oc=function(b){q&&a.mb(nb,b&&q.ib.$Outside?"":"hidden")};b.ac=function(b,a){if(k&&a>=n){k=d;y();p.Mc();B.Ab();j.f(m.$EVT_SLIDESHOW_END,h,l,x,n,f)}j.f(m.$EVT_PROGRESS_CHANGE,h,a,l,g,e,f)};b.Xc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.ed,A)}};q&&b.fc(q);n=b.ab();b.ab();b.fc(v);g=v.ab();e=g+o.$AutoPlayInterval;u.$Shift(e);b.U(u);f=b.ab()}function cc(e,g){var f=x>0?x:mb,c=Eb*g*(f&1),d=Fb*g*(f>>1&1);if(a.Nb()&&a.P()<38){c=c.toFixed(3);d=d.toFixed(3)}else{c=b.round(c);d=b.round(d)}if(a.Lb()&&a.P()>=10&&a.P()<11)e.style.msTransform="translate("+c+"px, "+d+"px)";else if(a.Nb()&&a.P()>=30&&a.P()<34){e.style.WebkitTransition="transform 0s";e.style.WebkitTransform="translate3d("+c+"px, "+d+"px, 0px) perspective(2000px)"}else{a.m(e,c);a.n(e,d)}}function yc(c){var b=a.Ce(c).tagName;!N&&b!="INPUT"&&b!="TEXTAREA"&&b!="SELECT"&&wc()&&xc(c)}function Lb(){ub=T;Pb=z.uc();E=y.I();if(C||!G&&Q&12){z.T();j.f(m.Ed)}}function jc(e){if(!C&&(G||!(Q&12))&&!z.$IsPlaying()){var c=y.I(),a=b.ceil(E);if(e&&b.abs(F)>=o.$MinDragOffsetToSlide){a=b.ceil(c);a+=kb}if(!(M&1))a=b.min(t-v,b.max(a,0));var d=b.abs(a-c);d=1-b.pow(1-d,5);if(!W&&ub)z.td(Pb);else if(c==a){xb.Qd();xb.Kb()}else z.pb(c,a,d*Yb)}}function xc(b){C=c;Db=d;Y=g;a.c(e,sb,fc);a.C();W=0;Lb();if(!ub)x=0;if(J){var h=b.touches[0];yb=h.clientX;zb=h.clientY}else{var f=a.pc(b);yb=f.x;zb=f.y;a.X(b)}F=0;hb=0;kb=0;j.f(m.$EVT_DRAG_START,u(E),E,b)}function fc(e){if(C&&(!a.Db()||e.button)){var f;if(J){var l=e.touches;if(l&&l.length>0)f={x:l[0].clientX,y:l[0].clientY}}else f=a.pc(e);if(f){var j=f.x-yb,k=f.y-zb;if(b.floor(E)!=E)x=x||mb&N;if((j||k)&&!x){if(N==3)if(b.abs(k)>b.abs(j))x=2;else x=1;else x=N;if(J&&x==1&&b.abs(k)-b.abs(j)>3)Db=c}if(x){var d=k,i=Fb;if(x==1){d=j;i=Eb}if(!(M&1)){if(d>0){var g=i*s,h=d-g;if(h>0)d=g+b.sqrt(h)*5}if(d<0){var g=i*(t-v-s),h=-d-g;if(h>0)d=-g-b.sqrt(h)*5}}if(F-hb<-2)kb=0;else if(F-hb>2)kb=-1;hb=F;F=d;wb=E-F/i/(eb||1);if(F&&x&&!Db){a.X(e);if(!T)z.me(wb);else z.je(wb)}else a.Db()&&a.X(e)}}}else Ib(e)}function Ib(f){uc();if(C){C=d;a.C();a.vb(e,sb,fc);W=F;W&&a.X(f);z.T();var b=y.I();j.f(m.$EVT_DRAG_END,u(b),b,u(E),E,f);jc(c);Lb()}}function rc(a){D[s];s=u(a);xb=D[s];Xb(a);return s}function Hc(a,b){x=0;rc(a);j.f(m.$EVT_PARK,u(a),b)}function Xb(b,c){Bb=b;a.b(S,function(a){a.gc(u(b),b,c)})}function wc(){var b=m.Yc||0,a=R;if(J)a&1&&(a&=1);m.Yc|=a;return N=a&~b}function uc(){if(N){m.Yc&=~R;N=0}}function bc(){var b=a.Y();a.M(b,V);a.u(b,"absolute");return b}function u(a){return(a%t+t)%t}function oc(a,c){if(c)if(!M){a=b.min(b.max(a+Bb,0),t-v);c=d}else if(M&2){a=u(a+Bb);c=d}gb(a,o.$SlideDuration,c)}function Cb(){a.b(S,function(a){a.hc(a.sb.$ChanceToShow<=G)})}function mc(){if(!G){G=1;Cb();if(!C){Q&12&&jc();Q&3&&D[s].Kb()}}}function lc(){if(G){G=0;Cb();C||!(Q&12)||Lb()}}function nc(){V={Ob:L,Ib:K,$Top:0,$Left:0};a.b(Z,function(b){a.M(b,V);a.u(b,"absolute");a.mb(b,"hidden");a.E(b)});a.M(ib,V)}function qb(b,a){gb(b,a,c)}function gb(g,f,k){if(Ub&&(!C||o.$NaviQuitDrag)){T=c;C=d;z.T();if(f==h)f=Yb;var e=Jb.db(),a=g;if(k){a=e+g;if(g>0)a=b.ceil(a);else a=b.floor(a)}if(!(M&1)){a=u(a);a=b.max(0,b.min(a,t-v))}var j=(a-e)%t;a=e+j;var i=e==a?0:f*b.abs(j);i=b.min(i,f*v*1.5);z.pb(e,a,i||1)}}j.$PlayTo=gb;j.$GoTo=function(a){gb(a,1)};j.$Next=function(){qb(1)};j.$Prev=function(){qb(-1)};j.$Pause=function(){U=d};j.$Play=function(){if(!U){U=c;D[s]&&D[s].Kb()}};j.$SetSlideshowTransitions=function(b){a.tb(b);o.$SlideshowOptions.$Transitions=b};j.$SetCaptionTransitions=function(b){a.tb(b);I.$CaptionTransitions=b;I.ic=a.C()};j.$SlidesCount=function(){return Z.length};j.$CurrentIndex=function(){return s};j.$IsAutoPlaying=function(){return U};j.$IsDragging=function(){return C};j.$IsSliding=function(){return T};j.$IsMouseOver=function(){return!G};j.$LastDragSucceded=function(){return W};function db(){return a.i(w||q)}function ob(){return a.g(w||q)}j.$OriginalWidth=j.$GetOriginalWidth=db;j.$OriginalHeight=j.$GetOriginalHeight=ob;function Mb(c,f){if(c==h)return a.i(q);if(!w){var b=a.Y(e);a.ub(b,a.ub(q));a.xc(b,a.xc(q));a.u(b,"relative");a.n(b,0);a.m(b,0);a.mb(b,"visible");w=a.Y(e);a.u(w,"absolute");a.n(w,0);a.m(w,0);a.i(w,a.i(q));a.g(w,a.g(q));a.oe(w,"0 0");a.v(w,b);var i=a.F(q);a.v(q,w);a.qb(q,"backgroundImage","");var g={navigator:bb&&bb.$Scale==d,arrowleft:O&&O.$Scale==d,arrowright:O&&O.$Scale==d,thumbnavigator:H&&H.$Scale==d,thumbwrapper:H&&H.$Scale==d};a.b(i,function(c){a.v(g[a.B(c,"u")]?q:b,c)});a.t(b);a.t(w)}eb=c/(f?a.g:a.i)(w);a.re(w,eb);a.i(q,f?eb*db():c);a.g(q,f?c:eb*ob());a.b(S,function(a){a.bc()})}j.$ScaleHeight=j.$GetScaleHeight=function(b){if(b==h)return a.g(q);Mb(b,c)};j.$ScaleWidth=j.$SetScaleWidth=j.$GetScaleWidth=Mb;j.Uc=function(a){var d=b.ceil(u(lb/ec)),c=u(a-s+d);if(c>v){if(a-s>t/2)a-=t;else if(a-s<=-t/2)a+=t}else a=s+c-d;return a};l.call(this);j.$Elmt=q=a.R(q);var o=a.j({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:k.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},kc),mb=o.$PlayOrientation&3,ac=(o.$PlayOrientation&4)/-4||1,cb=o.$SlideshowOptions,I=a.j({$Class:r,$PlayInMode:1,$PlayOutMode:1},o.$CaptionSliderOptions);a.tb(I.$CaptionTransitions);var bb=o.$BulletNavigatorOptions,O=o.$ArrowNavigatorOptions,H=o.$ThumbnailNavigatorOptions,X=!o.$UISearchMode,w,A=a.q(q,"slides",X),ib=a.q(q,"loading",X)||a.Y(e),Ob=a.q(q,"navigator",X),gc=a.q(q,"arrowleft",X),dc=a.q(q,"arrowright",X),Nb=a.q(q,"thumbnavigator",X),qc=a.i(A),pc=a.g(A),V,Z=[],zc=a.F(A);a.b(zc,function(b){b.tagName=="DIV"&&!a.B(b,"u")&&Z.push(b)});var s=-1,Bb,xb,t=Z.length,L=o.$SlideWidth||qc,K=o.$SlideHeight||pc,Zb=o.$SlideSpacing,Eb=L+Zb,Fb=K+Zb,ec=mb&1?Eb:Fb,v=b.min(o.$DisplayPieces,t),nb,x,N,Db,J,S=[],Tb,Vb,Sb,ic,Gc,U,Q=o.$PauseOnHover,Yb=o.$SlideDuration,vb,jb,lb,Ub=v<t,M=Ub?o.$Loop:0,R,W,G=1,T,C,Y,yb=0,zb=0,F,hb,kb,Jb,y,fb,z,Wb=new tc,eb;U=o.$AutoPlay;j.sb=kc;nc();q["jssor-slider"]=c;a.H(A,a.H(A)||0);a.u(A,"absolute");nb=a.cb(A);a.Eb(a.Jb(A),nb,A);if(cb){ic=cb.$ShowLink;vb=cb.$Class;a.tb(cb.$Transitions);jb=v==1&&t>1&&vb&&(!a.Lb()||a.P()>=8)}lb=jb||v>=t||!(M&1)?0:o.$ParkingPosition;R=(v>1||lb?mb:-1)&o.$DragOrientation;var Ab=A,D=[],B,P,Hb="mousedown",sb="mousemove",Kb="mouseup",rb,E,ub,Pb,wb,ab;if(f.navigator.pointerEnabled||(ab=f.navigator.msPointerEnabled)){Hb=ab?"MSPointerDown":"pointerdown";sb=ab?"MSPointerMove":"pointermove";Kb=ab?"MSPointerUp":"pointerup";rb=ab?"MSPointerCancel":"pointercancel";if(R){var Gb="none";if(R==1)Gb="pan-y";else if(R==2)Gb="pan-x";a.qb(Ab,ab?"msTouchAction":"touchAction",Gb)}}else if("ontouchstart"in f||"createTouch"in e){J=c;Hb="touchstart";sb="touchmove";Kb="touchend";rb="touchcancel"}fb=new Dc;if(jb)B=new vb(Wb,L,K,cb,J);a.v(nb,fb.xb);a.mb(A,"hidden");P=bc();a.qb(P,"backgroundColor","#000");a.Sb(P,0);a.Eb(Ab,P,Ab.firstChild);for(var tb=0;tb<Z.length;tb++){var Bc=Z[tb],hc=new Cc(Bc,tb);D.push(hc)}a.E(ib);Jb=new Ec;z=new sc(Jb,fb);if(R){a.c(A,Hb,yc);a.c(e,Kb,Ib);rb&&a.c(e,rb,Ib)}Q&=J?10:5;if(Ob&&bb){Tb=new bb.$Class(Ob,bb,db(),ob());S.push(Tb)}if(O&&gc&&dc){Vb=new O.$Class(gc,dc,O,db(),ob());S.push(Vb)}if(Nb&&H){H.$StartIndex=o.$StartIndex;Sb=new H.$Class(Nb,H);S.push(Sb)}a.b(S,function(a){a.Rb(t,D,ib);a.$On(n.wb,oc)});Mb(db());a.c(q,"mouseout",a.zb(mc,q));a.c(q,"mouseover",a.zb(lc,q));Cb();o.$ArrowKeyNavigation&&a.c(e,"keydown",function(a){if(a.keyCode==p.be)qb(-1);else a.keyCode==p.zd&&qb(1)});var pb=o.$StartIndex;if(!(M&1))pb=b.max(0,b.min(pb,t-v));z.pb(pb,pb,0)}m.$EVT_CLICK=21;m.$EVT_DRAG_START=22;m.$EVT_DRAG_END=23;m.$EVT_SWIPE_START=24;m.$EVT_SWIPE_END=25;m.$EVT_LOAD_START=26;m.$EVT_LOAD_END=27;m.Ed=28;m.$EVT_POSITION_CHANGE=202;m.$EVT_PARK=203;m.$EVT_SLIDESHOW_START=206;m.$EVT_SLIDESHOW_END=207;m.$EVT_PROGRESS_CHANGE=208;m.$EVT_STATE_CHANGE=209;m.$EVT_ROLLBACK_START=210;m.$EVT_ROLLBACK_END=211;f.$JssorSlider$=q=m};var n={wb:1};f.$JssorBulletNavigator$=function(f,F,E,C){var h=this;l.call(h);f=a.R(f);var t,u,s,r,m=0,e,o,k,y,z,j,i,q,p,D=[],A=[];function x(a){a!=-1&&A[a].Gc(a==m)}function v(a){h.f(n.wb,a*o)}h.$Elmt=f;h.gc=function(a){if(a!=r){var d=m,c=b.floor(a/o);m=c;r=a;x(d);x(c)}};h.hc=function(b){a.t(f,b)};var B;h.bc=function(){if(!B||e.$Scale==d){e.$AutoCenter&1&&a.m(f,(E-u)/2);e.$AutoCenter&2&&a.n(f,(C-s)/2);B=c}};var w;h.Rb=function(C){if(!w){t=b.ceil(C/o);m=0;var n=q+y,r=p+z,l=b.ceil(t/k)-1;u=q+n*(!j?l:k-1);s=p+r*(j?l:k-1);a.i(f,u);a.g(f,s);for(var d=0;d<t;d++){var B=a.ad();a.le(B,d+1);var h=a.Pc(i,"NumberTemplate",B,c);a.u(h,"absolute");var x=d%(l+1);a.m(h,!j?n*x:d%k*n);a.n(h,j?r*x:b.floor(d/(l+1))*r);a.v(f,h);D[d]=h;e.$ActionMode&1&&a.c(h,"click",a.s(g,v,d));e.$ActionMode&2&&a.c(h,"mouseover",a.zb(a.s(g,v,d),h));A[d]=a.rb(h)}w=c}};h.sb=e=a.j({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},F);i=a.q(f,"prototype");q=a.i(i);p=a.g(i);a.gb(f,i);o=e.$Steps||1;k=e.$Lanes||1;y=e.$SpacingX;z=e.$SpacingY;j=e.$Orientation-1};f.$JssorArrowNavigator$=function(e,f,t,o,m){var b=this;l.call(b);var h,j,r=a.i(e),p=a.g(e);function k(a){b.f(n.wb,a,c)}b.gc=function(b,a,c){if(c);};b.hc=function(b){a.t(e,b);a.t(f,b)};var s;b.bc=function(){if(!s||h.$Scale==d){if(h.$AutoCenter&1){a.m(e,(o-r)/2);a.m(f,(o-r)/2)}if(h.$AutoCenter&2){a.n(e,(m-p)/2);a.n(f,(m-p)/2)}s=c}};var q;b.Rb=function(b){if(!q){a.c(e,"click",a.s(g,k,-j));a.c(f,"click",a.s(g,k,j));a.rb(e);a.rb(f);q=c}};b.sb=h=a.j({$Steps:1},t);j=h.$Steps};f.$JssorThumbnailNavigator$=function(i,A){var h=this,x,m,e,u=[],y,w,f,o,p,t,s,k,r,g,j;l.call(h);i=a.R(i);function z(o,d){var g=this,b,l,k;function p(){l.Gc(m==d)}function i(){if(!r.$LastDragSucceded()){var a=f-d%f,b=r.Uc((d+a)/f-1),c=b*f+f-a;h.f(n.wb,c)}}g.bb=d;g.sc=p;k=o.Od||o.kc||a.Y();g.xb=b=a.Pc(j,"ThumbnailTemplate",k,c);l=a.rb(b);e.$ActionMode&1&&a.c(b,"click",i);e.$ActionMode&2&&a.c(b,"mouseover",a.zb(i,b))}h.gc=function(c,d,e){var a=m;m=c;a!=-1&&u[a].sc();u[c].sc();!e&&r.$PlayTo(r.Uc(b.floor(d/f)))};h.hc=function(b){a.t(i,b)};h.bc=a.Hb;var v;h.Rb=function(F,D){if(!v){x=F;b.ceil(x/f);m=-1;k=b.min(k,D.length);var h=e.$Orientation&1,n=t+(t+o)*(f-1)*(1-h),l=s+(s+p)*(f-1)*h,C=n+(n+o)*(k-1)*h,A=l+(l+p)*(k-1)*(1-h);a.u(g,"absolute");a.mb(g,"hidden");e.$AutoCenter&1&&a.m(g,(y-C)/2);e.$AutoCenter&2&&a.n(g,(w-A)/2);a.i(g,C);a.g(g,A);var j=[];a.b(D,function(l,e){var i=new z(l,e),d=i.xb,c=b.floor(e/f),k=e%f;a.m(d,(t+o)*k*(1-h));a.n(d,(s+p)*k*h);if(!j[c]){j[c]=a.Y();a.v(g,j[c])}a.v(j[c],d);u.push(i)});var E=a.j({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:n,$SlideHeight:l,$SlideSpacing:o*h+p*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);r=new q(i,E);v=c}};h.sb=e=a.j({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.i(i);w=a.g(i);g=a.q(i,"slides",c);j=a.q(g,"prototype");t=a.i(j);s=a.g(j);a.gb(g,j);f=e.$Lanes||1;o=e.$SpacingX;p=e.$SpacingY;k=e.$DisplayPieces};function r(){i.call(this,0,0);this.Fb=a.Hb}f.$JssorCaptionSlider$=function(q,k,g){var d=this,j,o=g?k.$PlayInMode:k.$PlayOutMode,f=k.$CaptionTransitions,p={ib:"t",$Delay:"d",$Duration:"du",x:"x",y:"y",$Rotate:"r",$Zoom:"z",$Opacity:"f",S:"b"},e={O:function(b,a){if(!isNaN(a.J))b=a.J;else b*=a.pe;return b},$Opacity:function(b,a){return this.O(b-1,a)}};e.$Zoom=e.$Opacity;i.call(d,0,0);function m(r,l){var k=[],i,j=[],c=[];function h(c,d){var b={};a.b(p,function(g,h){var e=a.B(c,g+(d||""));if(e){var f={};if(g=="t")f.J=e;else if(e.indexOf("%")+1)f.pe=a.Nc(e)/100;else f.J=a.Nc(e);b[h]=f}});return b}function n(){return f[b.floor(b.random()*f.length)]}function d(g){var h;if(g=="*")h=n();else if(g){var e=f[a.wd(g)]||f[g];if(a.Gb(e)){if(g!=i){i=g;c[g]=0;j[g]=e[b.floor(b.random()*e.length)]}else c[g]++;e=j[g];if(a.Gb(e)){e=e.length&&e[c[g]%e.length];if(a.Gb(e))e=e[b.floor(b.random()*e.length)]}}h=e;if(a.Vc(h))h=d(h)}return h}var q=a.F(r);a.b(q,function(b){var c=[];c.$Elmt=b;var f=a.B(b,"u")=="caption";a.b(g?[0,3]:[2],function(k,n){if(f){var j,g;if(k!=2||!a.B(b,"t3")){g=h(b,k);if(k==2&&!g.ib){g.$Delay=g.$Delay||{J:0};g=a.j(h(b,0),g)}}if(g&&g.ib){j=d(g.ib.J);if(j){var i=a.j({$Delay:0},j);a.b(g,function(c,a){var b=(e[a]||e.O).apply(e,[i[a],g[a]]);if(!isNaN(b))i[a]=b});if(!n)if(g.S)i.S=g.S.J||0;else if(o&2)i.S=0}}c.push(i)}if(l%2&&!n)c.F=m(b,l+1)});k.push(c)});return k}function n(x,d,A){var h={$Easing:d.$Easing,$Round:d.$Round,$During:d.$During,$Reverse:g&&!A},j=x,s=a.Jb(x),n=a.i(j),m=a.g(j),z=a.i(s),y=a.g(s),f={},k={},l=d.$ScaleClip||1;if(d.$Opacity)f.$Opacity=2-d.$Opacity;h.$OriginalWidth=n;h.$OriginalHeight=m;if(d.$Zoom||d.$Rotate){f.$Zoom=d.$Zoom?d.$Zoom-1:1;if(a.Db()||a.Ge())f.$Zoom=b.min(f.$Zoom,2);k.$Zoom=1;var C=d.$Rotate||0;f.$Rotate=C*360;k.$Rotate=0}else if(d.$Clip){var t={$Top:0,$Right:n,$Bottom:m,$Left:0},w=a.j({},t),e=w.N={},v=d.$Clip&4,q=d.$Clip&8,u=d.$Clip&1,r=d.$Clip&2;if(v&&q){e.$Top=m/2*l;e.$Bottom=-e.$Top}else if(v)e.$Bottom=-m*l;else if(q)e.$Top=m*l;if(u&&r){e.$Left=n/2*l;e.$Right=-e.$Left}else if(u)e.$Right=-n*l;else if(r)e.$Left=n*l;h.$Move=d.$Move;f.$Clip=w;k.$Clip=t}var o=0,p=0;if(d.x)o-=z*d.x;if(d.y)p-=y*d.y;if(o||p||h.$Move){f.$Left=o+a.m(j);f.$Top=p+a.n(j)}var B=d.$Duration;k=a.j(k,a.jd(j,f));h.nc=a.id();return new i(d.$Delay,B,h,j,k,f)}function l(b,c){a.b(c,function(a){var e,g=a.$Elmt,c=a[0],i=a[1];if(c){e=n(g,c);b=e.yb(c.S==h?b:c.S,1)}b=l(b,a.F);if(i){var f=n(g,i,1);f.yb(b,1);d.U(f);j.U(f)}e&&d.U(e)});return b}d.Fb=function(){d.A(d.ab()*(g||0));j.Ub()};j=new i(0,0);l(0,o?m(q,1):[])}})(window,document,Math,null,true,false)