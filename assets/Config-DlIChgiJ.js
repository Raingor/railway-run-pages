var ql=Object.defineProperty;var Yl=(i,t,e)=>t in i?ql(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ut=(i,t,e)=>Yl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="169",Zl=0,wa=1,Jl=2,Jc=1,Kl=2,un=3,mn=0,Te=1,Fe=2,Cn=0,Si=1,ba=2,Ta=3,Aa=4,$l=5,Yn=100,jl=101,Ql=102,th=103,eh=104,nh=200,ih=201,sh=202,rh=203,no=204,io=205,oh=206,ah=207,ch=208,lh=209,hh=210,uh=211,fh=212,dh=213,ph=214,so=0,ro=1,oo=2,bi=3,ao=4,co=5,lo=6,ho=7,Kc=0,mh=1,gh=2,Pn=0,_h=1,vh=2,xh=3,Mh=4,yh=5,Sh=6,Eh=7,Ra="attached",wh="detached",$c=300,Ti=301,Ai=302,uo=303,fo=304,ar=306,$s=1e3,Jn=1001,po=1002,Ce=1003,bh=1004,ls=1005,ke=1006,_r=1007,Rn=1008,gn=1009,jc=1010,Qc=1011,$i=1012,Zo=1013,Kn=1014,Je=1015,ss=1016,Jo=1017,Ko=1018,Ri=1020,tl=35902,el=1021,nl=1022,Ve=1023,il=1024,sl=1025,Ei=1026,Ci=1027,$o=1028,jo=1029,rl=1030,Qo=1031,ta=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,Mo=37492,yo=37496,So=37808,Eo=37809,wo=37810,bo=37811,To=37812,Ao=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Io=37818,Do=37819,Uo=37820,No=37821,qs=36492,Fo=36494,Oo=36495,ol=36283,Bo=36284,zo=36285,ko=36286,Th=3200,Ah=3201,al=0,Rh=1,An="",ze="srgb",Fn="srgb-linear",ea="display-p3",cr="display-p3-linear",js="linear",re="srgb",Qs="rec709",tr="p3",ei=7680,Ca=519,Ch=512,Ph=513,Lh=514,cl=515,Ih=516,Dh=517,Uh=518,Nh=519,Ho=35044,Pa="300 es",dn=2e3,er=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let La=1234567;const Yi=Math.PI/180,Pi=180/Math.PI;function je(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function na(i,t){return(i%t+t)%t}function Fh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Oh(i,t,e){return i!==t?(e-i)/(t-i):0}function Zi(i,t,e){return(1-e)*i+e*t}function Bh(i,t,e,n){return Zi(i,t,1-Math.exp(-e*n))}function zh(i,t=1){return t-Math.abs(na(i,t*2)-t)}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gh(i,t){return i+Math.random()*(t-i)}function Wh(i){return i*(.5-Math.random())}function Xh(i){i!==void 0&&(La=i);let t=La+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qh(i){return i*Yi}function Yh(i){return i*Pi}function Zh(i){return(i&i-1)===0&&i!==0}function Jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $h(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ji={DEG2RAD:Yi,RAD2DEG:Pi,generateUUID:je,clamp:de,euclideanModulo:na,mapLinear:Fh,inverseLerp:Oh,lerp:Zi,damp:Bh,pingpong:zh,smoothstep:kh,smootherstep:Hh,randInt:Vh,randFloat:Gh,randFloatSpread:Wh,seededRandom:Xh,degToRad:qh,radToDeg:Yh,isPowerOfTwo:Zh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:$h,normalize:ne,denormalize:Ze};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],x=s[4],y=s[7],U=s[2],A=s[5],T=s[8];return r[0]=o*v+a*S+c*U,r[3]=o*m+a*x+c*A,r[6]=o*p+a*y+c*T,r[1]=l*v+h*S+u*U,r[4]=l*m+h*x+u*A,r[7]=l*p+h*y+u*T,r[2]=f*v+d*S+g*U,r[5]=f*m+d*x+g*A,r[8]=f*p+d*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Gt;function ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=Qi("canvas");return i.style.display="block",i}const Ia={};function Ys(i){i in Ia||(Ia[i]=!0,console.warn(i))}function Qh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Da=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ua=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ui={[Fn]:{transfer:js,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ze]:{transfer:re,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cr]:{transfer:js,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ua),fromReference:i=>i.applyMatrix3(Da)},[ea]:{transfer:re,primaries:tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ua),fromReference:i=>i.applyMatrix3(Da).convertLinearToSRGB()}},nu=new Set([Fn,cr]),te={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ui[t].toReference,s=Ui[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ui[i].primaries},getTransfer:function(i){return i===An?js:Ui[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ui[t].luminanceCoefficients)}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class iu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Qi("canvas")),ni.width=t.width,ni.height=t.height;const n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mr(s[o].image)):r.push(Mr(s[o]))}else r=Mr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class Me extends Ii{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Jn,s=Jn,r=ke,o=Rn,a=Ve,c=gn,l=Me.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=je(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=$c;Me.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(d+1)/2,U=(p+1)/2,A=(h+f)/4,T=(u+v)/4,R=(g+m)/4;return x>y&&x>U?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=T/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=R/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=T/r,s=R/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ul extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class au extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const U=Math.sqrt(x),A=Math.atan2(U,p*S);m=Math.sin(m*A)/U,a=Math.sin(a*A)/U}const y=a*S;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new P,Na=new rs;class On{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),us.subVectors(this.max,Ni),ii.subVectors(t.a,Ni),si.subVectors(t.b,Ni),ri.subVectors(t.c,Ni),yn.subVectors(si,ii),Sn.subVectors(ri,si),zn.subVectors(ii,ri);let e=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-zn.z,zn.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,zn.z,0,-zn.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-zn.y,zn.x,0];return!Sr(e,ii,si,ri,us)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,ii,si,ri,us))?!1:(fs.crossVectors(yn,Sn),e=[fs.x,fs.y,fs.z],Sr(e,ii,si,ri,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new P,new P,new P,new P,new P,new P,new P,new P],Xe=new P,hs=new On,ii=new P,si=new P,ri=new P,yn=new P,Sn=new P,zn=new P,Ni=new P,us=new P,fs=new P,kn=new P;function Sr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){kn.fromArray(i,r);const a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=t.dot(kn),l=e.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const cu=new On,Fi=new P,Er=new P;class vn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(Er)),this.expandByPoint(Fi.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new P,wr=new P,ds=new P,En=new P,br=new P,ps=new P,Tr=new P;class lr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),En.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=En.dot(this.direction),c=-En.dot(ds),l=En.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wr).addScaledVector(ds,f),d}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),s=an.dot(an)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,s,r){br.subVectors(e,t),ps.subVectors(n,t),Tr.crossVectors(br,ps);let o=this.direction.dot(Tr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(ps.crossVectors(En,ps));if(c<0)return null;const l=a*this.direction.dot(br.cross(En));if(l<0||c+l>o)return null;const h=-a*En.dot(Tr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),o=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lu,t,hu)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),wn.crossVectors(n,Ie),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),wn.crossVectors(n,Ie)),wn.normalize(),ms.crossVectors(Ie,wn),s[0]=wn.x,s[4]=ms.x,s[8]=Ie.x,s[1]=wn.y,s[5]=ms.y,s[9]=Ie.y,s[2]=wn.z,s[6]=ms.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],x=n[7],y=n[11],U=n[15],A=s[0],T=s[4],R=s[8],F=s[12],_=s[1],M=s[5],L=s[9],D=s[13],I=s[2],Z=s[6],z=s[10],W=s[14],V=s[3],$=s[7],B=s[11],N=s[15];return r[0]=o*A+a*_+c*I+l*V,r[4]=o*T+a*M+c*Z+l*$,r[8]=o*R+a*L+c*z+l*B,r[12]=o*F+a*D+c*W+l*N,r[1]=h*A+u*_+f*I+d*V,r[5]=h*T+u*M+f*Z+d*$,r[9]=h*R+u*L+f*z+d*B,r[13]=h*F+u*D+f*W+d*N,r[2]=g*A+v*_+m*I+p*V,r[6]=g*T+v*M+m*Z+p*$,r[10]=g*R+v*L+m*z+p*B,r[14]=g*F+v*D+m*W+p*N,r[3]=S*A+x*_+y*I+U*V,r[7]=S*T+x*M+y*Z+U*$,r[11]=S*R+x*L+y*z+U*B,r[15]=S*F+x*D+y*W+U*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,y=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,U=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,A=e*S+n*x+s*y+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=x*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*T,t[8]=y*T,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*T,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=U*T,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,S=c*l,x=c*h,y=c*u,U=n.x,A=n.y,T=n.z;return s[0]=(1-(v+p))*U,s[1]=(d+y)*U,s[2]=(g-x)*U,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(m-S)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const l=1/r,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===dn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===er)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=dn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h;let g,v;if(a===dn)g=(o+r)*u,v=-2*u;else if(a===er)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new P,qe=new Xt,lu=new P(0,0,0),hu=new P(1,1,1),wn=new P,ms=new P,Ie=new P,Fa=new Xt,Oa=new rs;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uu=0;const Ba=new P,ai=new rs,cn=new Xt,gs=new P,Oi=new P,fu=new P,du=new rs,za=new P(1,0,0),ka=new P(0,1,0),Ha=new P(0,0,1),Va={type:"added"},pu={type:"removed"},ci={type:"childadded",child:null},Ar={type:"childremoved",child:null};class ae extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new P,e=new en,n=new rs,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Gt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(za,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Ha,t)}translateOnAxis(t,e){return Ba.copy(t).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(za,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Oi,gs,this.up):cn.lookAt(gs,Oi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(cn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Va),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Va),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ae.DEFAULT_UP=new P(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new P,ln=new P,Rr=new P,hn=new P,li=new P,hi=new P,Ga=new P,Cr=new P,Pr=new P,Lr=new P,Ir=new $t,Dr=new $t,Ur=new $t;class He{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),ln.subVectors(n,e),Rr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(ln),c=Ye.dot(Rr),l=ln.dot(ln),h=ln.dot(Rr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(a,hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ir.setScalar(0),Dr.setScalar(0),Ur.setScalar(0),Ir.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ir,r.x),o.addScaledVector(Dr,r.y),o.addScaledVector(Ur,r.z),o}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),ln.subVectors(t,e),Ye.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ye.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;li.subVectors(s,n),hi.subVectors(r,n),Cr.subVectors(t,n);const c=li.dot(Cr),l=hi.dot(Cr);if(c<=0&&l<=0)return e.copy(n);Pr.subVectors(t,s);const h=li.dot(Pr),u=hi.dot(Pr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(li,o);Lr.subVectors(t,r);const d=li.dot(Lr),g=hi.dot(Lr);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ga.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ga,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=na(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nr(o,r,t+1/3),this.g=Nr(o,r,t),this.b=Nr(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return te.fromWorkingColorSpace(Se.copy(this),t),Math.round(de(Se.r*255,0,255))*65536+Math.round(de(Se.g*255,0,255))*256+Math.round(de(Se.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=ze){te.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(_s);const n=Zi(bn.h,_s.h,e),s=Zi(bn.s,_s.s,e),r=Zi(bn.l,_s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ht;Ht.NAMES=dl;let mu=0;class xn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=je(),this.name="",this.type="Material",this.blending=Si,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ia extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,vs=new J;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ho,this.updateRanges=[],this.gpuType=Je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ze(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ze(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ze(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ze(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ho&&(t.usage=this.usage),t}}class sa extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gu=0;const Be=new Xt,Fr=new ae,ui=new P,De=new On,Bi=new On,ge=new P;class he extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=je(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?pl:sa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(De.min,Bi.min),De.expandByPoint(ge),ge.addVectors(De.max,Bi.max),De.expandByPoint(ge)):(De.expandByPoint(Bi.min),De.expandByPoint(Bi.max))}De.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ge.fromBufferAttribute(a,l),c&&(ui.fromBufferAttribute(t,l),ge.add(ui)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,f=new J,d=new J,g=new J,v=new P,m=new P;function p(R,F,_){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,F),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(M),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(M),a[R].add(v),a[F].add(v),a[_].add(v),c[R].add(m),c[F].add(m),c[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,F=S.length;R<F;++R){const _=S[R],M=_.start,L=_.count;for(let D=M,I=M+L;D<I;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new P,y=new P,U=new P,A=new P;function T(R){U.fromBufferAttribute(s,R),A.copy(U);const F=a[R];x.copy(F),x.sub(U.multiplyScalar(U.dot(F))).normalize(),y.crossVectors(A,F);const M=y.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,M)}for(let R=0,F=S.length;R<F;++R){const _=S[R],M=_.start,L=_.count;for(let D=M,I=M+L;D<I;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new Xt,Hn=new lr,xs=new vn,Xa=new P,Ms=new P,ys=new P,Ss=new P,Or=new P,Es=new P,qa=new P,ws=new P;class _t extends ae{constructor(t=new he,e=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Or.fromBufferAttribute(u,t),o?Es.addScaledVector(Or,h):Es.addScaledVector(Or.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(xs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(xs,Xa)===null||Hn.origin.distanceToSquared(Xa)>(t.far-t.near)**2))&&(Wa.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,U=x;y<U;y+=3){const A=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);s=bs(this,p,t,n,l,h,u,A,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=bs(this,o,t,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,U=x;y<U;y+=3){const A=y,T=y+1,R=y+2;s=bs(this,p,t,n,l,h,u,A,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,x=m+1,y=m+2;s=bs(this,o,t,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _u(i,t,e,n,s,r,o,a){let c;if(t.side===Te?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===mn,a),c===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:i}}function bs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ms),i.getVertexPosition(c,ys),i.getVertexPosition(l,Ss);const h=_u(i,t,e,n,Ms,ys,Ss,qa);if(h){const u=new P;He.getBarycoord(qa,Ms,ys,Ss,u),s&&(h.uv=He.getInterpolatedAttribute(s,a,c,l,u,new J)),r&&(h.uv1=He.getInterpolatedAttribute(r,a,c,l,u,new J)),o&&(h.normal=He.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};He.getNormal(Ms,ys,Ss,f.normal),h.face=f,h.barycoord=u}return h}class Qn extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(v,m,p,S,x,y,U,A,T,R,F){const _=y/T,M=U/R,L=y/2,D=U/2,I=A/2,Z=T+1,z=R+1;let W=0,V=0;const $=new P;for(let B=0;B<z;B++){const N=B*M-D;for(let j=0;j<Z;j++){const lt=j*_-L;$[v]=lt*S,$[m]=N*x,$[p]=I,l.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[p]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(j/T),u.push(1-B/R),W+=1}}for(let B=0;B<R;B++)for(let N=0;N<T;N++){const j=f+N+Z*B,lt=f+N+Z*(B+1),X=f+(N+1)+Z*(B+1),Q=f+(N+1)+Z*B;c.push(j,lt,Q),c.push(lt,X,Q),V+=6}a.addGroup(d,V,F),d+=V,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const s in n)t[s]=n[s]}return t}function vu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const xu={clone:Li,merge:be};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gl extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new P,Ya=new J,Za=new J;class Ne extends gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Ya,Za),e.subVectors(Za,Ya)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,di=1;class Su extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ne(fi,di,t,e);s.layers=this.layers,this.add(s);const r=new Ne(fi,di,t,e);r.layers=this.layers,this.add(r);const o=new Ne(fi,di,t,e);o.layers=this.layers,this.add(o);const a=new Ne(fi,di,t,e);a.layers=this.layers,this.add(a);const c=new Ne(fi,di,t,e);c.layers=this.layers,this.add(c);const l=new Ne(fi,di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _l extends Me{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eu extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Cn});r.uniforms.tEquirect.value=e;const o=new _t(s,r),a=e.minFilter;return e.minFilter===Rn&&(e.minFilter=ke),new Su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Br=new P,wu=new P,bu=new Gt;class Xn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Br.subVectors(n,e).cross(wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bu.getNormalMatrix(t),s=this.coplanarPoint(Br).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new vn,Ts=new P;class ra{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+o,f+h,m+g,y+S).normalize(),n[3].setComponents(c-o,f-h,m-g,y-S).normalize(),n[4].setComponents(c-a,f-u,m-v,y-x).normalize(),e===dn)n[5].setComponents(c+a,f+u,m+v,y+x).normalize();else if(e===er)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ts.x=s.normal.x>0?t.max.x:t.min.x,Ts.y=s.normal.y>0?t.max.y:t.min.y,Ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Un extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-S,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,y=S+l*(p+1),U=S+1+l*(p+1),A=S+1+l*p;d.push(x,y,A),d.push(y,U,A)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Zu,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:rf,envmap_fragment:of,envmap_common_pars_fragment:af,envmap_pars_fragment:cf,envmap_pars_vertex:lf,envmap_physical_pars_fragment:Mf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:ff,fog_fragment:df,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:vf,lights_pars_begin:xf,lights_toon_fragment:yf,lights_toon_pars_fragment:Sf,lights_phong_fragment:Ef,lights_phong_pars_fragment:wf,lights_physical_fragment:bf,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Rf,lights_fragment_end:Cf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Df,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:kf,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Kf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:od,roughnessmap_fragment:ad,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:fd,skinbase_vertex:dd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:yd,transmission_pars_fragment:Sd,uv_pars_fragment:Ed,uv_pars_vertex:wd,uv_vertex:bd,worldpos_vertex:Td,background_vert:Ad,background_frag:Rd,backgroundCube_vert:Cd,backgroundCube_frag:Pd,cube_vert:Ld,cube_frag:Id,depth_vert:Dd,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:zd,linedashed_frag:kd,meshbasic_vert:Hd,meshbasic_frag:Vd,meshlambert_vert:Gd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:Zd,meshphong_vert:Jd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:jd,meshtoon_vert:Qd,meshtoon_frag:tp,points_vert:ep,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:op},gt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},tn={basic:{uniforms:be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:be([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:be([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:be([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:be([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:be([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:be([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:be([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:be([gt.lights,gt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};tn.physical={uniforms:be([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const As={r:0,b:0,g:0},Gn=new en,ap=new Xt;function cp(i,t,e,n,s,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const y=g(S);y===null?p(a,c):y&&y.isColor&&(p(y,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===ar)?(h===void 0&&(h=new _t(new Qn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Li(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(x.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(Gn)),h.material.toneMapped=te.getTransfer(y.colorSpace)!==re,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _t(new Un(2,2),new Dn({name:"BackgroundMaterial",uniforms:Li(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(As,ml(i)),n.buffers.color.setClear(As.r,As.g,As.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m}}function lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,M,L,D,I){let Z=!1;const z=u(D,L,M);r!==z&&(r=z,l(r.object)),Z=d(_,D,L,I),Z&&g(_,D,L,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(_,M,L,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,M,L){const D=L.wireframe===!0;let I=n[_.id];I===void 0&&(I={},n[_.id]=I);let Z=I[M.id];Z===void 0&&(Z={},I[M.id]=Z);let z=Z[D];return z===void 0&&(z=f(c()),Z[D]=z),z}function f(_){const M=[],L=[],D=[];for(let I=0;I<e;I++)M[I]=0,L[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:L,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,M,L,D){const I=r.attributes,Z=M.attributes;let z=0;const W=L.getAttributes();for(const V in W)if(W[V].location>=0){const B=I[V];let N=Z[V];if(N===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(N=_.instanceColor)),B===void 0||B.attribute!==N||N&&B.data!==N.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(_,M,L,D){const I={},Z=M.attributes;let z=0;const W=L.getAttributes();for(const V in W)if(W[V].location>=0){let B=Z[V];B===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));const N={};N.attribute=B,B&&B.data&&(N.data=B.data),I[V]=N,z++}r.attributes=I,r.attributesNum=z,r.index=D}function v(){const _=r.newAttributes;for(let M=0,L=_.length;M<L;M++)_[M]=0}function m(_){p(_,0)}function p(_,M){const L=r.newAttributes,D=r.enabledAttributes,I=r.attributeDivisors;L[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),I[_]!==M&&(i.vertexAttribDivisor(_,M),I[_]=M)}function S(){const _=r.newAttributes,M=r.enabledAttributes;for(let L=0,D=M.length;L<D;L++)M[L]!==_[L]&&(i.disableVertexAttribArray(L),M[L]=0)}function x(_,M,L,D,I,Z,z){z===!0?i.vertexAttribIPointer(_,M,L,I,Z):i.vertexAttribPointer(_,M,L,D,I,Z)}function y(_,M,L,D){v();const I=D.attributes,Z=L.getAttributes(),z=M.defaultAttributeValues;for(const W in Z){const V=Z[W];if(V.location>=0){let $=I[W];if($===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const B=$.normalized,N=$.itemSize,j=t.get($);if(j===void 0)continue;const lt=j.buffer,X=j.type,Q=j.bytesPerElement,pt=X===i.INT||X===i.UNSIGNED_INT||$.gpuType===Zo;if($.isInterleavedBufferAttribute){const ct=$.data,Pt=ct.stride,Dt=$.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)p(V.location+Bt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)m(V.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Bt=0;Bt<V.locationSize;Bt++)x(V.location+Bt,N/V.locationSize,X,B,Pt*Q,(Dt+N/V.locationSize*Bt)*Q,pt)}else{if($.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct,$.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ct=0;ct<V.locationSize;ct++)x(V.location+ct,N/V.locationSize,X,B,N*Q,N/V.locationSize*ct*Q,pt)}}else if(z!==void 0){const B=z[W];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(V.location,B);break;case 3:i.vertexAttrib3fv(V.location,B);break;case 4:i.vertexAttrib4fv(V.location,B);break;default:i.vertexAttrib1fv(V.location,B)}}}}S()}function U(){R();for(const _ in n){const M=n[_];for(const L in M){const D=M[L];for(const I in D)h(D[I].object),delete D[I];delete M[L]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const L in M){const D=M[L];for(const I in D)h(D[I].object),delete D[I];delete M[L]}delete n[_.id]}function T(_){for(const M in n){const L=n[M];if(L[_.id]===void 0)continue;const D=L[_.id];for(const I in D)h(D[I].object),delete D[I];delete L[_.id]}}function R(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:F,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function hp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)e.update(g,n,f[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Ve&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Je&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:U,maxSamples:A}}function fp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,x=S*4;let y=p.clippingState||null;c.value=y,y=h(g,f,x,d);for(let U=0;U!==x;++U)y[U]=e[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function dp(i){let t=new WeakMap;function e(o,a){return a===uo?o.mapping=Ti:a===fo&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uo||a===fo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Eu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xl extends gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Ja=[.125,.215,.35,.446,.526,.582],Zn=20,zr=new xl,Ka=new Ht;let kr=null,Hr=0,Vr=0,Gr=!1;const qn=(1+Math.sqrt(5))/2,pi=1/qn,$a=[new P(-qn,pi,0),new P(qn,pi,0),new P(-pi,0,qn),new P(pi,0,qn),new P(0,qn,-pi),new P(0,qn,pi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Hr,Vr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ss,format:Ve,colorSpace:Fn,depthBuffer:!1},s=Qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s){const a=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ka),h.toneMapping=Pn,h.autoClear=!1;const d=new ia({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new _t(new Qn,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Ka),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Rs(s,S*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ti||t.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$a[(s-r-1)%$a.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let S=0;for(let T=0;T<Zn;++T){const R=T/v,F=Math.exp(-R*R/2);p.push(F),T===0?S+=F:T<m&&(S+=2*F)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[s],U=3*y*(s>x-Mi?s-x+Mi:0),A=4*(this._cubeSize-y);Rs(e,U,A,3*y,2*y),c.setRenderTarget(e),c.render(u,zr)}}function pp(i){const t=[],e=[],n=[];let s=i;const r=i-Mi+1+Ja.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Mi?c=Ja[o-i+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,F=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];S.set(F,v*g*A),x.set(f,m*g*A);const _=[A,A,A,A,A,A];y.set(_,p*g*A)}const U=new he;U.setAttribute("position",new Ge(S,v)),U.setAttribute("uv",new Ge(x,m)),U.setAttribute("faceIndex",new Ge(y,p)),t.push(U),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qa(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mp(i,t,e){const n=new Float32Array(Zn),s=new P(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function tc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ec(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===uo||c===fo,h=c===Ti||c===Ai;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ja(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ja(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function _p(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vp(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let x=0,y=S.length;x<y;x+=3){const U=S[x+0],A=S[x+1],T=S[x+2];f.push(U,A,A,T,T,U)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const U=x+0,A=x+1,T=x+2;f.push(U,A,A,T,T,U)}}else return;const m=new(ll(f)?pl:sa)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<v.length;S++)e.update(p,n,v[S])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yp(i,t,e){const n=new WeakMap,s=new $t;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let F=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,U=1;y>t.maxTextureSize&&(U=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*U*4*u),T=new ul(A,y,U,u);T.type=Je,T.needsUpdate=!0;const R=x*4;for(let _=0;_<u;_++){const M=m[_],L=p[_],D=S[_],I=y*U*4*_;for(let Z=0;Z<M.count;Z++){const z=Z*R;d===!0&&(s.fromBufferAttribute(M,Z),A[I+z+0]=s.x,A[I+z+1]=s.y,A[I+z+2]=s.z,A[I+z+3]=0),g===!0&&(s.fromBufferAttribute(L,Z),A[I+z+4]=s.x,A[I+z+5]=s.y,A[I+z+6]=s.z,A[I+z+7]=0),v===!0&&(s.fromBufferAttribute(D,Z),A[I+z+8]=s.x,A[I+z+9]=s.y,A[I+z+10]=s.z,A[I+z+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new J(y,U)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ml extends Me{constructor(t,e,n,s,r,o,a,c,l,h=Ei){if(h!==Ei&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Kn),n===void 0&&h===Ci&&(n=Ri),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=c!==void 0?c:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yl=new Me,nc=new Ml(1,1),Sl=new ul,El=new au,wl=new _l,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Ap(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),me(e,n)}}function Rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),me(e,n)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),me(e,n)}}function Pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=cl,r=nc):r=yl,e.setTexture2D(t||r,s)}function zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||El,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wl,s)}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sl,s)}function Vp(i){switch(i){case 5126:return Ep;case 35664:return wp;case 35665:return bp;case 35666:return Tp;case 35674:return Ap;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Dp;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Gp(i,t){i.uniform1fv(this.addr,t)}function Wp(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function Xp(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function qp(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Yp(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zp(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jp(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kp(i,t){i.uniform1iv(this.addr,t)}function $p(i,t){i.uniform2iv(this.addr,t)}function jp(i,t){i.uniform3iv(this.addr,t)}function Qp(i,t){i.uniform4iv(this.addr,t)}function t0(i,t){i.uniform1uiv(this.addr,t)}function e0(i,t){i.uniform2uiv(this.addr,t)}function n0(i,t){i.uniform3uiv(this.addr,t)}function i0(i,t){i.uniform4uiv(this.addr,t)}function s0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yl,r[o])}function r0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||El,r[o])}function o0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wl,r[o])}function a0(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sl,r[o])}function c0(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return $p;case 35668:case 35672:return jp;case 35669:case 35673:return Qp;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c0(e.type)}}class u0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){const n=i.name,s=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),o=Wr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cc(e,l===void 0?new l0(a,i,t):new h0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new u0(a),cc(e,u)),e=u}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const d0=37297;let p0=0;function m0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function g0(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===tr&&e===Qs?n="LinearDisplayP3ToLinearSRGB":t===Qs&&e===tr&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case cr:return[n,"LinearTransferOETF"];case ze:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+m0(i.getShaderSource(t),o)}else return s}function _0(i,t){const e=g0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function v0(i,t){let e;switch(t){case _h:e="Linear";break;case vh:e="Reinhard";break;case xh:e="Cineon";break;case Mh:e="ACESFilmic";break;case Sh:e="AgX";break;case Eh:e="Neutral";break;case yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new P;function x0(){te.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function y0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qi(i){return i!==""}function uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(E0,b0)}const w0=new Map;function b0(i,t){let e=Vt[t];if(e===void 0){const n=w0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(T0,A0)}function A0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function R0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function L0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case mh:t="ENVMAP_BLENDING_MIX";break;case gh:t="ENVMAP_BLENDING_ADD";break}return t}function I0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function D0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=R0(e),l=C0(e),h=P0(e),u=L0(e),f=I0(e),d=M0(e),g=y0(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),p=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),x0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),o=Vo(o),o=uc(o,e),o=fc(o,e),a=Vo(a),a=uc(a,e),a=fc(a,e),o=dc(o),a=dc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,y=S+p+a,U=lc(s,s.VERTEX_SHADER,x),A=lc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,U),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(M){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(U).trim(),I=s.getShaderInfoLog(A).trim();let Z=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,A);else{const W=hc(s,U,"vertex"),V=hc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+L+`
`+W+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||I==="")&&(z=!1);z&&(M.diagnostics={runnable:Z,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(U),s.deleteShader(A),R=new Zs(s,v),F=S0(s,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let F;this.getAttributes=function(){return F===void 0&&T(this),F};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,d0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=A,this}let U0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new F0(t),e.set(t,n)),n}}class F0{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}}function O0(i,t,e,n,s,r,o){const a=new fl,c=new N0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,L,D,I){const Z=D.fog,z=I.geometry,W=_.isMeshStandardMaterial?D.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),$=V&&V.mapping===ar?V.image.height:null,B=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const N=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,j=N!==void 0?N.length:0;let lt=0;z.morphAttributes.position!==void 0&&(lt=1),z.morphAttributes.normal!==void 0&&(lt=2),z.morphAttributes.color!==void 0&&(lt=3);let X,Q,pt,ct;if(B){const Re=tn[B];X=Re.vertexShader,Q=Re.fragmentShader}else X=_.vertexShader,Q=_.fragmentShader,c.update(_),pt=c.getVertexShaderID(_),ct=c.getFragmentShaderID(_);const Pt=i.getRenderTarget(),Dt=I.isInstancedMesh===!0,Bt=I.isBatchedMesh===!0,qt=!!_.map,nt=!!_.matcap,C=!!V,ft=!!_.aoMap,ht=!!_.lightMap,rt=!!_.bumpMap,dt=!!_.normalMap,Lt=!!_.displacementMap,Mt=!!_.emissiveMap,b=!!_.metalnessMap,E=!!_.roughnessMap,G=_.anisotropy>0,tt=_.clearcoat>0,it=_.dispersion>0,et=_.iridescence>0,At=_.sheen>0,mt=_.transmission>0,Et=G&&!!_.anisotropyMap,Yt=tt&&!!_.clearcoatMap,ot=tt&&!!_.clearcoatNormalMap,wt=tt&&!!_.clearcoatRoughnessMap,Ft=et&&!!_.iridescenceMap,Ot=et&&!!_.iridescenceThicknessMap,bt=At&&!!_.sheenColorMap,Zt=At&&!!_.sheenRoughnessMap,zt=!!_.specularMap,ie=!!_.specularColorMap,O=!!_.specularIntensityMap,yt=mt&&!!_.transmissionMap,K=mt&&!!_.thicknessMap,st=!!_.gradientMap,vt=!!_.alphaMap,St=_.alphaTest>0,Jt=!!_.alphaHash,ue=!!_.extensions;let Ae=Pn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Kt={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:Q,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Fn,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:nt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:$,aoMap:ft,lightMap:ht,bumpMap:rt,normalMap:dt,displacementMap:d&&Lt,emissiveMap:Mt,normalMapObjectSpace:dt&&_.normalMapType===Rh,normalMapTangentSpace:dt&&_.normalMapType===al,metalnessMap:b,roughnessMap:E,anisotropy:G,anisotropyMap:Et,clearcoat:tt,clearcoatMap:Yt,clearcoatNormalMap:ot,clearcoatRoughnessMap:wt,dispersion:it,iridescence:et,iridescenceMap:Ft,iridescenceThicknessMap:Ot,sheen:At,sheenColorMap:bt,sheenRoughnessMap:Zt,specularMap:zt,specularColorMap:ie,specularIntensityMap:O,transmission:mt,transmissionMap:yt,thicknessMap:K,gradientMap:st,opaque:_.transparent===!1&&_.blending===Si&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:St,alphaHash:Jt,combine:_.combine,mapUv:qt&&m(_.map.channel),aoMapUv:ft&&m(_.aoMap.channel),lightMapUv:ht&&m(_.lightMap.channel),bumpMapUv:rt&&m(_.bumpMap.channel),normalMapUv:dt&&m(_.normalMap.channel),displacementMapUv:Lt&&m(_.displacementMap.channel),emissiveMapUv:Mt&&m(_.emissiveMap.channel),metalnessMapUv:b&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:Et&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&m(_.sheenRoughnessMap.channel),specularMapUv:zt&&m(_.specularMap.channel),specularColorMapUv:ie&&m(_.specularColorMap.channel),specularIntensityMapUv:O&&m(_.specularIntensityMap.channel),transmissionMapUv:yt&&m(_.transmissionMap.channel),thicknessMapUv:K&&m(_.thicknessMap.channel),alphaMapUv:vt&&m(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(qt||vt),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===Te,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function S(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(M,_),y(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function x(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function U(_){const M=v[_.type];let L;if(M){const D=tn[M];L=xu.clone(D.uniforms)}else L=_.uniforms;return L}function A(_,M){let L;for(let D=0,I=h.length;D<I;D++){const Z=h[D];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new D0(i,M,_,r),h.push(L)),L}function T(_){if(--_.usedTimes===0){const M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function R(_){c.remove(_)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:U,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:F}}function B0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||z0),n.length>1&&n.sort(f||mc),s.length>1&&s.sort(f||mc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function k0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new gc,i.set(n,[o])):s>=r.length?(o=new gc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function H0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function V0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function W0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){const t=new H0,e=V0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new Xt,o=new Xt;function a(l){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,x=0,y=0,U=0,A=0,T=0;l.sort(W0);for(let F=0,_=l.length;F<_;F++){const M=l[F],L=M.color,D=M.intensity,I=M.distance,Z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=L.r*D,u+=L.g*D,f+=L.b*D;else if(M.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(M.sh.coefficients[z],D);T++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const W=M.shadow,V=e.get(M);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=M.shadow.matrix,S++}n.directional[d]=z,d++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(L).multiplyScalar(D),z.distance=I,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,n.spot[v]=z;const W=M.shadow;if(M.map&&(n.spotLightMap[U]=M.map,U++,W.updateMatrices(M),M.castShadow&&A++),n.spotLightMatrix[v]=W.matrix,M.castShadow){const V=e.get(M);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=Z,y++}v++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(L).multiplyScalar(D),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=z,m++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const W=M.shadow,V=e.get(M);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=M.shadow.matrix,x++}n.point[g]=z,g++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(D),z.groundColor.copy(M.groundColor).multiplyScalar(D),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==U||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=U,R.numLightProbes=T,n.version=G0++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function _c(i){const t=new X0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function q0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new _c(i),t.set(s,[a])):r>=o.length?(a=new _c(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Y0 extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z0 extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $0(i,t,e){let n=new ra;const s=new J,r=new J,o=new $t,a=new Y0({depthPacking:Ah}),c=new Z0,l={},h=e.maxTextureSize,u={[mn]:Te,[Te]:mn,[Fe]:Fe},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:J0,fragmentShader:K0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const F=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Cn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==un&&this.type===un,I=p===un&&this.type!==un;for(let Z=0,z=A.length;Z<z;Z++){const W=A[Z],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const $=V.getFrameExtents();if(s.multiply($),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,V.mapSize.y=r.y)),V.map===null||D===!0||I===!0){const N=this.type!==un?{minFilter:Ce,magFilter:Ce}:{};V.map!==null&&V.map.dispose(),V.map=new $n(s.x,s.y,N),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const B=V.getViewportCount();for(let N=0;N<B;N++){const j=V.getViewport(N);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),L.viewport(o),V.updateMatrices(W,N),n=V.getFrustum(),y(T,R,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===un&&S(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,_,M)};function S(A,T){const R=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $n(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,d,v,null)}function x(A,T,R,F){let _=null;const M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=R.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=_.uuid,D=T.uuid;let I=l[L];I===void 0&&(I={},l[L]=I);let Z=I[D];Z===void 0&&(Z=_.clone(),I[D]=Z,T.addEventListener("dispose",U)),_=Z}if(_.visible=T.visible,_.wireframe=T.wireframe,F===un?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=i.properties.get(_);L.light=R}return _}function y(A,T,R,F,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const D=t.update(A),I=A.material;if(Array.isArray(I)){const Z=D.groups;for(let z=0,W=Z.length;z<W;z++){const V=Z[z],$=I[V.materialIndex];if($&&$.visible){const B=x(A,$,F,_);A.onBeforeShadow(i,A,T,R,D,B,V),i.renderBufferDirect(R,null,D,B,A,V),A.onAfterShadow(i,A,T,R,D,B,V)}}}else if(I.visible){const Z=x(A,I,F,_);A.onBeforeShadow(i,A,T,R,D,Z,null),i.renderBufferDirect(R,null,D,Z,A,null),A.onAfterShadow(i,A,T,R,D,Z,null)}}const L=A.children;for(let D=0,I=L.length;D<I;D++)y(L[D],T,R,F,_)}function U(A){A.target.removeEventListener("dispose",U);for(const R in l){const F=l[R],_=A.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}const j0={[so]:ro,[oo]:lo,[ao]:ho,[bi]:co,[ro]:so,[lo]:oo,[ho]:ao,[co]:bi};function Q0(i){function t(){let O=!1;const yt=new $t;let K=null;const st=new $t(0,0,0,0);return{setMask:function(vt){K!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){O=vt},setClear:function(vt,St,Jt,ue,Ae){Ae===!0&&(vt*=ue,St*=ue,Jt*=ue),yt.set(vt,St,Jt,ue),st.equals(yt)===!1&&(i.clearColor(vt,St,Jt,ue),st.copy(yt))},reset:function(){O=!1,K=null,st.set(-1,0,0,0)}}}function e(){let O=!1,yt=!1,K=null,st=null,vt=null;return{setReversed:function(St){yt=St},setTest:function(St){St?pt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(St){K!==St&&!O&&(i.depthMask(St),K=St)},setFunc:function(St){if(yt&&(St=j0[St]),st!==St){switch(St){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=St}},setLocked:function(St){O=St},setClear:function(St){vt!==St&&(i.clearDepth(St),vt=St)},reset:function(){O=!1,K=null,st=null,vt=null}}}function n(){let O=!1,yt=null,K=null,st=null,vt=null,St=null,Jt=null,ue=null,Ae=null;return{setTest:function(Kt){O||(Kt?pt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Kt){yt!==Kt&&!O&&(i.stencilMask(Kt),yt=Kt)},setFunc:function(Kt,Re,rn){(K!==Kt||st!==Re||vt!==rn)&&(i.stencilFunc(Kt,Re,rn),K=Kt,st=Re,vt=rn)},setOp:function(Kt,Re,rn){(St!==Kt||Jt!==Re||ue!==rn)&&(i.stencilOp(Kt,Re,rn),St=Kt,Jt=Re,ue=rn)},setLocked:function(Kt){O=Kt},setClear:function(Kt){Ae!==Kt&&(i.clearStencil(Kt),Ae=Kt)},reset:function(){O=!1,yt=null,K=null,st=null,vt=null,St=null,Jt=null,ue=null,Ae=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,S=null,x=null,y=null,U=null,A=new Ht(0,0,0),T=0,R=!1,F=null,_=null,M=null,L=null,D=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=z>=2);let V=null,$={};const B=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),j=new $t().fromArray(B),lt=new $t().fromArray(N);function X(O,yt,K,st){const vt=new Uint8Array(4),St=i.createTexture();i.bindTexture(O,St),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<K;Jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(yt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return St}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),r.setFunc(bi),ht(!1),rt(wa),pt(i.CULL_FACE),C(Cn);function pt(O){l[O]!==!0&&(i.enable(O),l[O]=!0)}function ct(O){l[O]!==!1&&(i.disable(O),l[O]=!1)}function Pt(O,yt){return h[O]!==yt?(i.bindFramebuffer(O,yt),h[O]=yt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Dt(O,yt){let K=f,st=!1;if(O){K=u.get(yt),K===void 0&&(K=[],u.set(yt,K));const vt=O.textures;if(K.length!==vt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Jt=vt.length;St<Jt;St++)K[St]=i.COLOR_ATTACHMENT0+St;K.length=vt.length,st=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,st=!0);st&&i.drawBuffers(K)}function Bt(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const qt={[Yn]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Ql]:i.FUNC_REVERSE_SUBTRACT};qt[th]=i.MIN,qt[eh]=i.MAX;const nt={[nh]:i.ZERO,[ih]:i.ONE,[sh]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[hh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[oh]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[ah]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function C(O,yt,K,st,vt,St,Jt,ue,Ae,Kt){if(O===Cn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),O!==$l){if(O!==v||Kt!==R){if((m!==Yn||x!==Yn)&&(i.blendEquation(i.FUNC_ADD),m=Yn,x=Yn),Kt)switch(O){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,S=null,y=null,U=null,A.set(0,0,0),T=0,v=O,R=Kt}return}vt=vt||yt,St=St||K,Jt=Jt||st,(yt!==m||vt!==x)&&(i.blendEquationSeparate(qt[yt],qt[vt]),m=yt,x=vt),(K!==p||st!==S||St!==y||Jt!==U)&&(i.blendFuncSeparate(nt[K],nt[st],nt[St],nt[Jt]),p=K,S=st,y=St,U=Jt),(ue.equals(A)===!1||Ae!==T)&&(i.blendColor(ue.r,ue.g,ue.b,Ae),A.copy(ue),T=Ae),v=O,R=!1}function ft(O,yt){O.side===Fe?ct(i.CULL_FACE):pt(i.CULL_FACE);let K=O.side===Te;yt&&(K=!K),ht(K),O.blending===Si&&O.transparent===!1?C(Cn):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const st=O.stencilWrite;o.setTest(st),st&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){F!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),F=O)}function rt(O){O!==Zl?(pt(i.CULL_FACE),O!==_&&(O===wa?i.cullFace(i.BACK):O===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),_=O}function dt(O){O!==M&&(Z&&i.lineWidth(O),M=O)}function Lt(O,yt,K){O?(pt(i.POLYGON_OFFSET_FILL),(L!==yt||D!==K)&&(i.polygonOffset(yt,K),L=yt,D=K)):ct(i.POLYGON_OFFSET_FILL)}function Mt(O){O?pt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function b(O){O===void 0&&(O=i.TEXTURE0+I-1),V!==O&&(i.activeTexture(O),V=O)}function E(O,yt,K){K===void 0&&(V===null?K=i.TEXTURE0+I-1:K=V);let st=$[K];st===void 0&&(st={type:void 0,texture:void 0},$[K]=st),(st.type!==O||st.texture!==yt)&&(V!==K&&(i.activeTexture(K),V=K),i.bindTexture(O,yt||Q[O]),st.type=O,st.texture=yt)}function G(){const O=$[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(O){j.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),j.copy(O))}function bt(O){lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),lt.copy(O))}function Zt(O,yt){let K=c.get(yt);K===void 0&&(K=new WeakMap,c.set(yt,K));let st=K.get(O);st===void 0&&(st=i.getUniformBlockIndex(yt,O.name),K.set(O,st))}function zt(O,yt){const st=c.get(yt).get(O);a.get(yt)!==st&&(i.uniformBlockBinding(yt,st,O.__bindingPointIndex),a.set(yt,st))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,$={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,S=null,x=null,y=null,U=null,A=new Ht(0,0,0),T=0,R=!1,F=null,_=null,M=null,L=null,D=null,j.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pt,disable:ct,bindFramebuffer:Pt,drawBuffers:Dt,useProgram:Bt,setBlending:C,setMaterial:ft,setFlipSided:ht,setCullFace:rt,setLineWidth:dt,setPolygonOffset:Lt,setScissorTest:Mt,activeTexture:b,bindTexture:E,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:wt,texImage3D:Ft,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:Yt,texStorage3D:ot,texSubImage2D:et,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:Et,scissor:Ot,viewport:bt,reset:ie}}function vc(i,t,e,n){const s=tm(n);switch(e){case el:return i*t;case il:return i*t;case sl:return i*t*2;case $o:return i*t/s.components*s.byteLength;case jo:return i*t/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case Qo:return i*t*2/s.components*s.byteLength;case nl:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case xo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qs:case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(i){switch(i){case gn:case jc:return{byteLength:1,components:1};case $i:case Qc:case ss:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case Kn:case Zo:case Je:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function em(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return d?new OffscreenCanvas(b,E):Qi("canvas")}function v(b,E,G){let tt=1;const it=Mt(b);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const et=Math.floor(tt*it.width),At=Math.floor(tt*it.height);u===void 0&&(u=g(et,At));const mt=E?g(et,At):u;return mt.width=et,mt.height=At,mt.getContext("2d").drawImage(b,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+At+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Ce&&b.minFilter!==ke}function p(b){i.generateMipmap(b)}function S(b,E,G,tt,it=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=E;if(E===i.RED&&(G===i.FLOAT&&(et=i.R32F),G===i.HALF_FLOAT&&(et=i.R16F),G===i.UNSIGNED_BYTE&&(et=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.R8UI),G===i.UNSIGNED_SHORT&&(et=i.R16UI),G===i.UNSIGNED_INT&&(et=i.R32UI),G===i.BYTE&&(et=i.R8I),G===i.SHORT&&(et=i.R16I),G===i.INT&&(et=i.R32I)),E===i.RG&&(G===i.FLOAT&&(et=i.RG32F),G===i.HALF_FLOAT&&(et=i.RG16F),G===i.UNSIGNED_BYTE&&(et=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RG8UI),G===i.UNSIGNED_SHORT&&(et=i.RG16UI),G===i.UNSIGNED_INT&&(et=i.RG32UI),G===i.BYTE&&(et=i.RG8I),G===i.SHORT&&(et=i.RG16I),G===i.INT&&(et=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGB8UI),G===i.UNSIGNED_SHORT&&(et=i.RGB16UI),G===i.UNSIGNED_INT&&(et=i.RGB32UI),G===i.BYTE&&(et=i.RGB8I),G===i.SHORT&&(et=i.RGB16I),G===i.INT&&(et=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),G===i.UNSIGNED_INT&&(et=i.RGBA32UI),G===i.BYTE&&(et=i.RGBA8I),G===i.SHORT&&(et=i.RGBA16I),G===i.INT&&(et=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),E===i.RGBA){const At=it?js:te.getTransfer(tt);G===i.FLOAT&&(et=i.RGBA32F),G===i.HALF_FLOAT&&(et=i.RGBA16F),G===i.UNSIGNED_BYTE&&(et=At===re?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(b,E){let G;return b?E===null||E===Kn||E===Ri?G=i.DEPTH24_STENCIL8:E===Je?G=i.DEPTH32F_STENCIL8:E===$i&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kn||E===Ri?G=i.DEPTH_COMPONENT24:E===Je?G=i.DEPTH_COMPONENT32F:E===$i&&(G=i.DEPTH_COMPONENT16),G}function y(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ce&&b.minFilter!==ke?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function U(b){const E=b.target;E.removeEventListener("dispose",U),T(E),E.isVideoTexture&&h.delete(E)}function A(b){const E=b.target;E.removeEventListener("dispose",A),F(E)}function T(b){const E=n.get(b);if(E.__webglInit===void 0)return;const G=b.source,tt=f.get(G);if(tt){const it=tt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(b),Object.keys(tt).length===0&&f.delete(G)}n.remove(b)}function R(b){const E=n.get(b);i.deleteTexture(E.__webglTexture);const G=b.source,tt=f.get(G);delete tt[E.__cacheKey],o.memory.textures--}function F(b){const E=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let it=0;it<E.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=b.textures;for(let tt=0,it=G.length;tt<it;tt++){const et=n.get(G[tt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(G[tt])}n.remove(b)}let _=0;function M(){_=0}function L(){const b=_;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),_+=1,b}function D(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function I(b,E){const G=n.get(b);if(b.isVideoTexture&&dt(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const tt=b.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(G,b,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function Z(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){lt(G,b,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function z(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){lt(G,b,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function W(b,E){const G=n.get(b);if(b.version>0&&G.__version!==b.version){X(G,b,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const V={[$s]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},$={[Ce]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[_r]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},B={[Ch]:i.NEVER,[Nh]:i.ALWAYS,[Ph]:i.LESS,[cl]:i.LEQUAL,[Lh]:i.EQUAL,[Uh]:i.GEQUAL,[Ih]:i.GREATER,[Dh]:i.NOTEQUAL};function N(b,E){if(E.type===Je&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ke||E.magFilter===_r||E.magFilter===ls||E.magFilter===Rn||E.minFilter===ke||E.minFilter===_r||E.minFilter===ls||E.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,V[E.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,V[E.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,V[E.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,$[E.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ce||E.minFilter!==ls&&E.minFilter!==Rn||E.type===Je&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function j(b,E){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",U));const tt=E.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const et=D(E);if(et!==b.__cacheKey){it[et]===void 0&&(it[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[et].usedTimes++;const At=it[b.__cacheKey];At!==void 0&&(it[b.__cacheKey].usedTimes--,At.usedTimes===0&&R(E)),b.__cacheKey=et,b.__webglTexture=it[et].texture}return G}function lt(b,E,G){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);const it=j(b,E),et=E.source;e.bindTexture(tt,b.__webglTexture,i.TEXTURE0+G);const At=n.get(et);if(et.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const mt=te.getPrimaries(te.workingColorSpace),Et=E.colorSpace===An?null:te.getPrimaries(E.colorSpace),Yt=E.colorSpace===An||mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ot=v(E.image,!1,s.maxTextureSize);ot=Lt(E,ot);const wt=r.convert(E.format,E.colorSpace),Ft=r.convert(E.type);let Ot=S(E.internalFormat,wt,Ft,E.colorSpace,E.isVideoTexture);N(tt,E);let bt;const Zt=E.mipmaps,zt=E.isVideoTexture!==!0,ie=At.__version===void 0||it===!0,O=et.dataReady,yt=y(E,ot);if(E.isDepthTexture)Ot=x(E.format===Ci,E.type),ie&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,wt,Ft,null));else if(E.isDataTexture)if(Zt.length>0){zt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,Zt[0].width,Zt[0].height);for(let K=0,st=Zt.length;K<st;K++)bt=Zt[K],zt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,K,Ot,bt.width,bt.height,0,wt,Ft,bt.data);E.generateMipmaps=!1}else zt?(ie&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,ot.width,ot.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,wt,Ft,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,wt,Ft,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ot,Zt[0].width,Zt[0].height,ot.depth);for(let K=0,st=Zt.length;K<st;K++)if(bt=Zt[K],E.format!==Ve)if(wt!==null)if(zt){if(O)if(E.layerUpdates.size>0){const vt=vc(bt.width,bt.height,E.format,E.type);for(const St of E.layerUpdates){const Jt=bt.data.subarray(St*vt/bt.data.BYTES_PER_ELEMENT,(St+1)*vt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,St,bt.width,bt.height,1,wt,Jt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,ot.depth,wt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ot,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,ot.depth,wt,Ft,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ot,bt.width,bt.height,ot.depth,0,wt,Ft,bt.data)}else{zt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,Zt[0].width,Zt[0].height);for(let K=0,st=Zt.length;K<st;K++)bt=Zt[K],E.format!==Ve?wt!==null?zt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,wt,Ft,bt.data):e.texImage2D(i.TEXTURE_2D,K,Ot,bt.width,bt.height,0,wt,Ft,bt.data)}else if(E.isDataArrayTexture)if(zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ot,ot.width,ot.height,ot.depth),O)if(E.layerUpdates.size>0){const K=vc(ot.width,ot.height,E.format,E.type);for(const st of E.layerUpdates){const vt=ot.data.subarray(st*K/ot.data.BYTES_PER_ELEMENT,(st+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ot.width,ot.height,1,wt,Ft,vt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,Ft,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,wt,Ft,ot.data);else if(E.isData3DTexture)zt?(ie&&e.texStorage3D(i.TEXTURE_3D,yt,Ot,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,Ft,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,wt,Ft,ot.data);else if(E.isFramebufferTexture){if(ie)if(zt)e.texStorage2D(i.TEXTURE_2D,yt,Ot,ot.width,ot.height);else{let K=ot.width,st=ot.height;for(let vt=0;vt<yt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ot,K,st,0,wt,Ft,null),K>>=1,st>>=1}}else if(Zt.length>0){if(zt&&ie){const K=Mt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Ot,K.width,K.height)}for(let K=0,st=Zt.length;K<st;K++)bt=Zt[K],zt?O&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,wt,Ft,bt):e.texImage2D(i.TEXTURE_2D,K,Ot,wt,Ft,bt);E.generateMipmaps=!1}else if(zt){if(ie){const K=Mt(ot);e.texStorage2D(i.TEXTURE_2D,yt,Ot,K.width,K.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ft,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ot,wt,Ft,ot);m(E)&&p(tt),At.__version=et.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function X(b,E,G){if(E.image.length!==6)return;const tt=j(b,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const et=n.get(it);if(it.version!==et.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const At=te.getPrimaries(te.workingColorSpace),mt=E.colorSpace===An?null:te.getPrimaries(E.colorSpace),Et=E.colorSpace===An||At===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!Yt&&!ot?wt[st]=v(E.image[st],!0,s.maxCubemapSize):wt[st]=ot?E.image[st].image:E.image[st],wt[st]=Lt(E,wt[st]);const Ft=wt[0],Ot=r.convert(E.format,E.colorSpace),bt=r.convert(E.type),Zt=S(E.internalFormat,Ot,bt,E.colorSpace),zt=E.isVideoTexture!==!0,ie=et.__version===void 0||tt===!0,O=it.dataReady;let yt=y(E,Ft);N(i.TEXTURE_CUBE_MAP,E);let K;if(Yt){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Zt,Ft.width,Ft.height);for(let st=0;st<6;st++){K=wt[st].mipmaps;for(let vt=0;vt<K.length;vt++){const St=K[vt];E.format!==Ve?Ot!==null?zt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,St.width,St.height,Ot,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,St.width,St.height,Ot,bt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Zt,St.width,St.height,0,Ot,bt,St.data)}}}else{if(K=E.mipmaps,zt&&ie){K.length>0&&yt++;const st=Mt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(ot){zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Ot,bt,wt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,wt[st].width,wt[st].height,0,Ot,bt,wt[st].data);for(let vt=0;vt<K.length;vt++){const Jt=K[vt].image[st].image;zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Jt.width,Jt.height,Ot,bt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Zt,Jt.width,Jt.height,0,Ot,bt,Jt.data)}}else{zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,bt,wt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Ot,bt,wt[st]);for(let vt=0;vt<K.length;vt++){const St=K[vt];zt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Ot,bt,St.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Zt,Ot,bt,St.image[st])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),et.__version=it.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Q(b,E,G,tt,it,et){const At=r.convert(G.format,G.colorSpace),mt=r.convert(G.type),Et=S(G.internalFormat,At,mt,G.colorSpace);if(!n.get(E).__hasExternalTextures){const ot=Math.max(1,E.width>>et),wt=Math.max(1,E.height>>et);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,et,Et,ot,wt,E.depth,0,At,mt,null):e.texImage2D(it,et,Et,ot,wt,0,At,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,n.get(G).__webglTexture,0,ht(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,n.get(G).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(b,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),E.depthBuffer){const tt=E.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,et=x(E.stencilBuffer,it),At=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=ht(E);rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,et,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,et,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,b)}else{const tt=E.textures;for(let it=0;it<tt.length;it++){const et=tt[it],At=r.convert(et.format,et.colorSpace),mt=r.convert(et.type),Et=S(et.internalFormat,At,mt,et.colorSpace),Yt=ht(E);G&&rt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Et,E.width,E.height):rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,Et,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Et,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const tt=n.get(E.depthTexture).__webglTexture,it=ht(E);if(E.depthTexture.format===Ei)rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(E.depthTexture.format===Ci)rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const E=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const tt=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=tt}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ct(E.__webglFramebuffer,b)}else if(G){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),pt(E.__webglDepthbuffer[tt],b,!1);else{const it=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),pt(E.__webglDepthbuffer,b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,E,G){const tt=n.get(b);E!==void 0&&Q(tt.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Pt(b)}function Bt(b){const E=b.texture,G=n.get(b),tt=n.get(E);b.addEventListener("dispose",A);const it=b.textures,et=b.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,o.memory.textures++),et){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[mt]=[];for(let Et=0;Et<E.mipmaps.length;Et++)G.__webglFramebuffer[mt][Et]=i.createFramebuffer()}else G.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)G.__webglFramebuffer[mt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let mt=0,Et=it.length;mt<Et;mt++){const Yt=n.get(it[mt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&rt(b)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const Et=it[mt];G.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);const Yt=r.convert(Et.format,Et.colorSpace),ot=r.convert(Et.type),wt=S(Et.internalFormat,Yt,ot,Et.colorSpace,b.isXRRenderTarget===!0),Ft=ht(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,G.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),N(i.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Q(G.__webglFramebuffer[mt][Et],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Et);else Q(G.__webglFramebuffer[mt],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let mt=0,Et=it.length;mt<Et;mt++){const Yt=it[mt],ot=n.get(Yt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),N(i.TEXTURE_2D,Yt),Q(G.__webglFramebuffer,b,Yt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),N(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Q(G.__webglFramebuffer[Et],b,E,i.COLOR_ATTACHMENT0,mt,Et);else Q(G.__webglFramebuffer,b,E,i.COLOR_ATTACHMENT0,mt,0);m(E)&&p(mt),e.unbindTexture()}b.depthBuffer&&Pt(b)}function qt(b){const E=b.textures;for(let G=0,tt=E.length;G<tt;G++){const it=E[G];if(m(it)){const et=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(it).__webglTexture;e.bindTexture(et,At),p(et),e.unbindTexture()}}}const nt=[],C=[];function ft(b){if(b.samples>0){if(rt(b)===!1){const E=b.textures,G=b.width,tt=b.height;let it=i.COLOR_BUFFER_BIT;const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(b),mt=E.length>1;if(mt)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const Yt=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,i.NEAREST),c===!0&&(nt.length=0,C.length=0,nt.push(i.COLOR_ATTACHMENT0+Et),b.depthBuffer&&b.resolveDepthBuffer===!1&&(nt.push(et),C.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const Yt=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const E=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ht(b){return Math.min(s.maxSamples,b.samples)}function rt(b){const E=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(b){const E=o.render.frame;h.get(b)!==E&&(h.set(b,E),b.update())}function Lt(b,E){const G=b.colorSpace,tt=b.format,it=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Fn&&G!==An&&(te.getTransfer(G)===re?(tt!==Ve||it!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Dt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=rt}function nm(i,t){function e(n,s=An){let r;const o=te.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Je)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===Ve)return i.RGBA;if(n===il)return i.LUMINANCE;if(n===sl)return i.LUMINANCE_ALPHA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===Vs||n===Gs||n===Ws||n===Xs)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===Mo||n===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===Mo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===Eo||n===wo||n===bo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Fo||n===Oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===Bo||n===zo||n===ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class im extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kt extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sm={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Me,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:rm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cm extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=new am,m=e.getContextAttributes();let p=null,S=null;const x=[],y=[],U=new J;let A=null;const T=new Ne;T.layers.enable(1),T.viewport=new $t;const R=new Ne;R.layers.enable(2),R.viewport=new $t;const F=[T,R],_=new im;_.layers.enable(1),_.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Xr,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Xr,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Xr,x[X]=Q),Q.getHandSpace()};function D(X){const Q=y.indexOf(X.inputSource);if(Q===-1)return;const pt=x[Q];pt!==void 0&&(pt.update(X.inputSource,X.frame,l||o),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const Q=y[X];Q!==null&&(y[X]=null,x[X].disconnect(Q))}M=null,L=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",I),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new $n(d.framebufferWidth,d.framebufferHeight,{format:Ve,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Ci:Ei,pt=m.stencil?Ri:Kn);const Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new $n(f.textureWidth,f.textureHeight,{format:Ve,type:gn,depthTexture:new Ml(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(X){for(let Q=0;Q<X.removed.length;Q++){const pt=X.removed[Q],ct=y.indexOf(pt);ct>=0&&(y[ct]=null,x[ct].disconnect(pt))}for(let Q=0;Q<X.added.length;Q++){const pt=X.added[Q];let ct=y.indexOf(pt);if(ct===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=y.length){y.push(pt),ct=Dt;break}else if(y[Dt]===null){y[Dt]=pt,ct=Dt;break}if(ct===-1)break}const Pt=x[ct];Pt&&Pt.connect(pt)}}const z=new P,W=new P;function V(X,Q,pt){z.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(pt.matrixWorld);const ct=z.distanceTo(W),Pt=Q.projectionMatrix.elements,Dt=pt.projectionMatrix.elements,Bt=Pt[14]/(Pt[10]-1),qt=Pt[14]/(Pt[10]+1),nt=(Pt[9]+1)/Pt[5],C=(Pt[9]-1)/Pt[5],ft=(Pt[8]-1)/Pt[0],ht=(Dt[8]+1)/Dt[0],rt=Bt*ft,dt=Bt*ht,Lt=ct/(-ft+ht),Mt=Lt*-ft;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Mt),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const b=Bt+Lt,E=qt+Lt,G=rt-Mt,tt=dt+(ct-Mt),it=nt*qt/E*b,et=C*qt/E*b;X.projectionMatrix.makePerspective(G,tt,it,et,b,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,pt=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(pt=v.depthFar)),_.near=R.near=T.near=Q,_.far=R.far=T.far=pt,(M!==_.near||L!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,L=_.far);const ct=X.parent,Pt=_.cameras;$(_,ct);for(let Dt=0;Dt<Pt.length;Dt++)$(Pt[Dt],ct);Pt.length===2?V(_,T,R):_.projectionMatrix.copy(T.projectionMatrix),B(X,_,ct)};function B(X,Q,pt){pt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Pi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let N=null;function j(X,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ct=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Dt=0;Dt<pt.length;Dt++){const Bt=pt[Dt];let qt=null;if(d!==null)qt=d.getViewport(Bt);else{const C=u.getViewSubImage(f,Bt);qt=C.viewport,Dt===0&&(t.setRenderTargetTextures(S,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(S))}let nt=F[Dt];nt===void 0&&(nt=new Ne,nt.layers.enable(Dt),nt.viewport=new $t,F[Dt]=nt),nt.matrix.fromArray(Bt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Bt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(qt.x,qt.y,qt.width,qt.height),Dt===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(nt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Dt=u.getDepthInformation(pt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,s.renderState)}}for(let pt=0;pt<x.length;pt++){const ct=y[pt],Pt=x[pt];ct!==null&&Pt!==void 0&&Pt.update(ct,Q,l||o)}N&&N(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const lt=new vl;lt.setAnimationLoop(j),this.setAnimationLoop=function(X){N=X},this.dispose=function(){}}}const Wn=new en,lm=new Xt;function hm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ml(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Te&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Te&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,Wn.copy(y),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Wn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function um(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function l(S,x){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const U=x.program;n.updateUBOMapping(S,U);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const y=i.createBuffer(),U=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],y=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let F=0,_=R.length;F<_;F++){const M=R[F];if(d(M,A,F,U)===!0){const L=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let I=0;for(let Z=0;Z<D.length;Z++){const z=D[Z],W=v(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+I,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,x,y,U){const A=S.value,T=x+"_"+y;if(U[T]===void 0)return typeof A=="number"||typeof A=="boolean"?U[T]=A:U[T]=A.clone(),!0;{const R=U[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return U[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(S){const x=S.uniforms;let y=0;const U=16;for(let T=0,R=x.length;T<R;T++){const F=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,M=F.length;_<M;_++){const L=F[_],D=Array.isArray(L.value)?L.value:[L.value];for(let I=0,Z=D.length;I<Z;I++){const z=D[I],W=v(z),V=y%U,$=V%W.boundary,B=V+$;y+=$,B!==0&&U-B<W.storage&&(y+=U-B),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=W.storage}}}const A=y%U;return A>0&&(y+=U-A),S.__size=y,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Lg{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let y=!1,U=0,A=0,T=null,R=-1,F=null;const _=new $t,M=new $t;let L=null;const D=new Ht(0);let I=0,Z=e.width,z=e.height,W=1,V=null,$=null;const B=new $t(0,0,Z,z),N=new $t(0,0,Z,z);let j=!1;const lt=new ra;let X=!1,Q=!1;const pt=new Xt,ct=new Xt,Pt=new P,Dt=new $t,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function nt(){return T===null?W:1}let C=n;function ft(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",St,!1),C===null){const k="webgl2";if(C=ft(k,w),C===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,rt,dt,Lt,Mt,b,E,G,tt,it,et,At,mt,Et,Yt,ot,wt,Ft,Ot,bt,Zt,zt,ie,O;function yt(){ht=new _p(C),ht.init(),zt=new nm(C,ht),rt=new up(C,ht,t,zt),dt=new Q0(C),rt.reverseDepthBuffer&&dt.buffers.depth.setReversed(!0),Lt=new Mp(C),Mt=new B0,b=new em(C,ht,dt,Mt,rt,zt,Lt),E=new dp(x),G=new gp(x),tt=new Tu(C),ie=new lp(C,tt),it=new vp(C,tt,Lt,ie),et=new Sp(C,it,tt,Lt),Ot=new yp(C,rt,b),ot=new fp(Mt),At=new O0(x,E,G,ht,rt,ie,ot),mt=new hm(x,Mt),Et=new k0,Yt=new q0(ht),Ft=new cp(x,E,G,dt,et,f,c),wt=new $0(x,et,rt),O=new um(C,Lt,rt,dt),bt=new hp(C,ht,Lt),Zt=new xp(C,ht,Lt),Lt.programs=At.programs,x.capabilities=rt,x.extensions=ht,x.properties=Mt,x.renderLists=Et,x.shadowMap=wt,x.state=dt,x.info=Lt}yt();const K=new cm(x,C);this.xr=K,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(Z,z,!1))},this.getSize=function(w){return w.set(Z,z)},this.setSize=function(w,k,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,z=k,e.width=Math.floor(w*W),e.height=Math.floor(k*W),q===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Z*W,z*W).floor()},this.setDrawingBufferSize=function(w,k,q){Z=w,z=k,W=q,e.width=Math.floor(w*q),e.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,k,q,Y){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,k,q,Y),dt.viewport(_.copy(B).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,k,q,Y){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,q,Y),dt.scissor(M.copy(N).multiplyScalar(W).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){dt.setScissorTest(j=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,k=!0,q=!0){let Y=0;if(w){let H=!1;if(T!==null){const at=T.texture.format;H=at===ta||at===Qo||at===jo}if(H){const at=T.texture.type,xt=at===gn||at===Kn||at===$i||at===Ri||at===Jo||at===Ko,Tt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Ut=Tt.r,Nt=Tt.g,Ct=Tt.b;xt?(d[0]=Ut,d[1]=Nt,d[2]=Ct,d[3]=Rt,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Ut,g[1]=Nt,g[2]=Ct,g[3]=Rt,C.clearBufferiv(C.COLOR,0,g))}else Y|=C.COLOR_BUFFER_BIT}k&&(Y|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),Yt.dispose(),Mt.dispose(),E.dispose(),G.dispose(),et.dispose(),ie.dispose(),O.dispose(),At.dispose(),K.dispose(),K.removeEventListener("sessionstart",ga),K.removeEventListener("sessionend",_a),Bn.stop()};function st(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Lt.autoReset,k=wt.enabled,q=wt.autoUpdate,Y=wt.needsUpdate,H=wt.type;yt(),Lt.autoReset=w,wt.enabled=k,wt.autoUpdate=q,wt.needsUpdate=Y,wt.type=H}function St(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jt(w){const k=w.target;k.removeEventListener("dispose",Jt),ue(k)}function ue(w){Ae(w),Mt.remove(w)}function Ae(w){const k=Mt.get(w).programs;k!==void 0&&(k.forEach(function(q){At.releaseProgram(q)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,Y,H,at){k===null&&(k=Bt);const xt=H.isMesh&&H.matrixWorld.determinant()<0,Tt=Vl(w,k,q,Y,H);dt.setMaterial(Y,xt);let Rt=q.index,Ut=1;if(Y.wireframe===!0){if(Rt=it.getWireframeAttribute(q),Rt===void 0)return;Ut=2}const Nt=q.drawRange,Ct=q.attributes.position;let ee=Nt.start*Ut,se=(Nt.start+Nt.count)*Ut;at!==null&&(ee=Math.max(ee,at.start*Ut),se=Math.min(se,(at.start+at.count)*Ut)),Rt!==null?(ee=Math.max(ee,0),se=Math.min(se,Rt.count)):Ct!=null&&(ee=Math.max(ee,0),se=Math.min(se,Ct.count));const ce=se-ee;if(ce<0||ce===1/0)return;ie.setup(H,Y,Tt,q,Rt);let Pe,jt=bt;if(Rt!==null&&(Pe=tt.get(Rt),jt=Zt,jt.setIndex(Pe)),H.isMesh)Y.wireframe===!0?(dt.setLineWidth(Y.wireframeLinewidth*nt()),jt.setMode(C.LINES)):jt.setMode(C.TRIANGLES);else if(H.isLine){let It=Y.linewidth;It===void 0&&(It=1),dt.setLineWidth(It*nt()),H.isLineSegments?jt.setMode(C.LINES):H.isLineLoop?jt.setMode(C.LINE_LOOP):jt.setMode(C.LINE_STRIP)}else H.isPoints?jt.setMode(C.POINTS):H.isSprite&&jt.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)jt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const It=H._multiDrawStarts,xe=H._multiDrawCounts,Qt=H._multiDrawCount,We=Rt?tt.get(Rt).bytesPerElement:1,ti=Mt.get(Y).currentProgram.getUniforms();for(let Le=0;Le<Qt;Le++)ti.setValue(C,"_gl_DrawID",Le),jt.render(It[Le]/We,xe[Le])}else if(H.isInstancedMesh)jt.renderInstances(ee,ce,H.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xe=Math.min(q.instanceCount,It);jt.renderInstances(ee,ce,xe)}else jt.render(ee,ce)};function Kt(w,k,q){w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=Te,w.needsUpdate=!0,cs(w,k,q),w.side=mn,w.needsUpdate=!0,cs(w,k,q),w.side=Fe):cs(w,k,q)}this.compile=function(w,k,q=null){q===null&&(q=w),m=Yt.get(q),m.init(k),S.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const Y=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const Tt=at[xt];Kt(Tt,q,H),Y.add(Tt)}else Kt(at,q,H),Y.add(at)}),S.pop(),m=null,Y},this.compileAsync=function(w,k,q=null){const Y=this.compile(w,k,q);return new Promise(H=>{function at(){if(Y.forEach(function(xt){Mt.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){H(w);return}setTimeout(at,10)}ht.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Re=null;function rn(w){Re&&Re(w)}function ga(){Bn.stop()}function _a(){Bn.start()}const Bn=new vl;Bn.setAnimationLoop(rn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(w){Re=w,K.setAnimationLoop(w),w===null?Bn.stop():Bn.start()},K.addEventListener("sessionstart",ga),K.addEventListener("sessionend",_a),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,T),m=Yt.get(w,S.length),m.init(k),S.push(m),ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),lt.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,X=ot.init(this.clippingPlanes,Q),v=Et.get(w,p.length),v.init(),p.push(v),K.enabled===!0&&K.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&dr(at,k,-1/0,x.sortObjects)}dr(w,k,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,$),qt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,qt&&Ft.addToRenderList(v,w),this.info.render.frame++,X===!0&&ot.beginShadows();const q=m.state.shadowsArray;wt.render(q,w,k),X===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,H=v.transmissive;if(m.setupLights(),k.isArrayCamera){const at=k.cameras;if(H.length>0)for(let xt=0,Tt=at.length;xt<Tt;xt++){const Rt=at[xt];xa(Y,H,w,Rt)}qt&&Ft.render(w);for(let xt=0,Tt=at.length;xt<Tt;xt++){const Rt=at[xt];va(v,w,Rt,Rt.viewport)}}else H.length>0&&xa(Y,H,w,k),qt&&Ft.render(w),va(v,w,k);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,k),ie.resetDefaultState(),R=-1,F=null,S.pop(),S.length>0?(m=S[S.length-1],X===!0&&ot.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function dr(w,k,q,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||lt.intersectsSprite(w)){Y&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const xt=et.update(w),Tt=w.material;Tt.visible&&v.push(w,xt,Tt,q,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||lt.intersectsObject(w))){const xt=et.update(w),Tt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Dt.copy(xt.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Tt)){const Rt=xt.groups;for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++){const Ct=Rt[Ut],ee=Tt[Ct.materialIndex];ee&&ee.visible&&v.push(w,xt,ee,q,Dt.z,Ct)}}else Tt.visible&&v.push(w,xt,Tt,q,Dt.z,null)}}const at=w.children;for(let xt=0,Tt=at.length;xt<Tt;xt++)dr(at[xt],k,q,Y)}function va(w,k,q,Y){const H=w.opaque,at=w.transmissive,xt=w.transparent;m.setupLightsView(q),X===!0&&ot.setGlobalState(x.clippingPlanes,q),Y&&dt.viewport(_.copy(Y)),H.length>0&&as(H,k,q),at.length>0&&as(at,k,q),xt.length>0&&as(xt,k,q),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function xa(w,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new $n(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ss:gn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=m.state.transmissionRenderTarget[Y.id],xt=Y.viewport||_;at.setSize(xt.z,xt.w);const Tt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(D),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),qt&&Ft.render(q);const Rt=x.toneMapping;x.toneMapping=Pn;const Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),X===!0&&ot.setGlobalState(x.clippingPlanes,Y),as(w,q,Y),b.updateMultisampleRenderTarget(at),b.updateRenderTargetMipmap(at),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Ct=0,ee=k.length;Ct<ee;Ct++){const se=k[Ct],ce=se.object,Pe=se.geometry,jt=se.material,It=se.group;if(jt.side===Fe&&ce.layers.test(Y.layers)){const xe=jt.side;jt.side=Te,jt.needsUpdate=!0,Ma(ce,q,Y,Pe,jt,It),jt.side=xe,jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(at),b.updateRenderTargetMipmap(at))}x.setRenderTarget(Tt),x.setClearColor(D,I),Ut!==void 0&&(Y.viewport=Ut),x.toneMapping=Rt}function as(w,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=w.length;H<at;H++){const xt=w[H],Tt=xt.object,Rt=xt.geometry,Ut=Y===null?xt.material:Y,Nt=xt.group;Tt.layers.test(q.layers)&&Ma(Tt,k,q,Rt,Ut,Nt)}}function Ma(w,k,q,Y,H,at){w.onBeforeRender(x,k,q,Y,H,at),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,k,q,Y,w,at),H.transparent===!0&&H.side===Fe&&H.forceSinglePass===!1?(H.side=Te,H.needsUpdate=!0,x.renderBufferDirect(q,k,Y,H,w,at),H.side=mn,H.needsUpdate=!0,x.renderBufferDirect(q,k,Y,H,w,at),H.side=Fe):x.renderBufferDirect(q,k,Y,H,w,at),w.onAfterRender(x,k,q,Y,H,at)}function cs(w,k,q){k.isScene!==!0&&(k=Bt);const Y=Mt.get(w),H=m.state.lights,at=m.state.shadowsArray,xt=H.state.version,Tt=At.getParameters(w,H.state,at,k,q),Rt=At.getProgramCacheKey(Tt);let Ut=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Jt),Ut=new Map,Y.programs=Ut);let Nt=Ut.get(Rt);if(Nt!==void 0){if(Y.currentProgram===Nt&&Y.lightsStateVersion===xt)return Sa(w,Tt),Nt}else Tt.uniforms=At.getUniforms(w),w.onBeforeCompile(Tt,x),Nt=At.acquireProgram(Tt,Rt),Ut.set(Rt,Nt),Y.uniforms=Tt.uniforms;const Ct=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),Sa(w,Tt),Y.needsLights=Wl(w),Y.lightsStateVersion=xt,Y.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.directionalShadowMap.value=H.state.directionalShadowMap,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotShadowMap.value=H.state.spotShadowMap,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMap.value=H.state.pointShadowMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Nt,Y.uniformsList=null,Nt}function ya(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Zs.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Sa(w,k){const q=Mt.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Vl(w,k,q,Y,H){k.isScene!==!0&&(k=Bt),b.resetTextureUnits();const at=k.fog,xt=Y.isMeshStandardMaterial?k.environment:null,Tt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fn,Rt=(Y.isMeshStandardMaterial?G:E).get(Y.envMap||xt),Ut=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Nt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,se=!!q.morphAttributes.color;let ce=Pn;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ce=x.toneMapping);const Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,jt=Pe!==void 0?Pe.length:0,It=Mt.get(Y),xe=m.state.lights;if(X===!0&&(Q===!0||w!==F)){const Oe=w===F&&Y.id===R;ot.setState(Y,w,Oe)}let Qt=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==xe.state.version||It.outputColorSpace!==Tt||H.isBatchedMesh&&It.batching===!1||!H.isBatchedMesh&&It.batching===!0||H.isBatchedMesh&&It.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&It.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||H.isInstancedMesh&&It.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&It.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&It.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&It.instancingMorph===!1&&H.morphTexture!==null||It.envMap!==Rt||Y.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==Ut||It.vertexTangents!==Nt||It.morphTargets!==Ct||It.morphNormals!==ee||It.morphColors!==se||It.toneMapping!==ce||It.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,It.__version=Y.version);let We=It.currentProgram;Qt===!0&&(We=cs(Y,k,H));let ti=!1,Le=!1,pr=!1;const le=We.getUniforms(),Mn=It.uniforms;if(dt.useProgram(We.program)&&(ti=!0,Le=!0,pr=!0),Y.id!==R&&(R=Y.id,Le=!0),ti||F!==w){rt.reverseDepthBuffer?(pt.copy(w.projectionMatrix),tu(pt),eu(pt),le.setValue(C,"projectionMatrix",pt)):le.setValue(C,"projectionMatrix",w.projectionMatrix),le.setValue(C,"viewMatrix",w.matrixWorldInverse);const Oe=le.map.cameraPosition;Oe!==void 0&&Oe.setValue(C,Pt.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&le.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Le=!0,pr=!0)}if(H.isSkinnedMesh){le.setOptional(C,H,"bindMatrix"),le.setOptional(C,H,"bindMatrixInverse");const Oe=H.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),le.setValue(C,"boneTexture",Oe.boneTexture,b))}H.isBatchedMesh&&(le.setOptional(C,H,"batchingTexture"),le.setValue(C,"batchingTexture",H._matricesTexture,b),le.setOptional(C,H,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",H._indirectTexture,b),le.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",H._colorsTexture,b));const mr=q.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Ot.update(H,q,We),(Le||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,le.setValue(C,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=Rt,Mn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),Le&&(le.setValue(C,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Gl(Mn,pr),at&&Y.fog===!0&&mt.refreshFogUniforms(Mn,at),mt.refreshMaterialUniforms(Mn,Y,W,z,m.state.transmissionRenderTarget[w.id]),Zs.upload(C,ya(It),Mn,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zs.upload(C,ya(It),Mn,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&le.setValue(C,"center",H.center),le.setValue(C,"modelViewMatrix",H.modelViewMatrix),le.setValue(C,"normalMatrix",H.normalMatrix),le.setValue(C,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Oe=Y.uniformsGroups;for(let gr=0,Xl=Oe.length;gr<Xl;gr++){const Ea=Oe[gr];O.update(Ea,We),O.bind(Ea,We)}}return We}function Gl(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,k,q){Mt.get(w.texture).__webglTexture=k,Mt.get(w.depthTexture).__webglTexture=q;const Y=Mt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const q=Mt.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,q=0){T=w,U=k,A=q;let Y=!0,H=null,at=!1,xt=!1;if(w){const Rt=Mt.get(w);if(Rt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Rt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Rt.__hasExternalTextures)b.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&Mt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(xt=!0);const Nt=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?H=Nt[k][q]:H=Nt[k],at=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?H=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?H=Nt[q]:H=Nt,_.copy(w.viewport),M.copy(w.scissor),L=w.scissorTest}else _.copy(B).multiplyScalar(W).floor(),M.copy(N).multiplyScalar(W).floor(),L=j;if(dt.bindFramebuffer(C.FRAMEBUFFER,H)&&Y&&dt.drawBuffers(w,H),dt.viewport(_),dt.scissor(M),dt.setScissorTest(L),at){const Rt=Mt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,q)}else if(xt){const Rt=Mt.get(w.texture),Ut=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Rt.__webglTexture,q||0,Ut)}R=-1},this.readRenderTargetPixels=function(w,k,q,Y,H,at,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){dt.bindFramebuffer(C.FRAMEBUFFER,Tt);try{const Rt=w.texture,Ut=Rt.format,Nt=Rt.type;if(!rt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-H&&C.readPixels(k,q,Y,H,zt.convert(Ut),zt.convert(Nt),at)}finally{const Rt=T!==null?Mt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,Y,H,at,xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const Rt=w.texture,Ut=Rt.format,Nt=Rt.type;if(!rt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-H){dt.bindFramebuffer(C.FRAMEBUFFER,Tt);const Ct=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(k,q,Y,H,zt.convert(Ut),zt.convert(Nt),0);const ee=T!==null?Mt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(C.FRAMEBUFFER,ee);const se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qh(C,se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Ct),C.deleteSync(se),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,q=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(w.image.width*Y),at=Math.floor(w.image.height*Y),xt=k!==null?k.x:0,Tt=k!==null?k.y:0;b.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,xt,Tt,H,at),dt.unbindTexture()},this.copyTextureToTexture=function(w,k,q=null,Y=null,H=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],k=arguments[2],H=arguments[3]||0,q=null);let at,xt,Tt,Rt,Ut,Nt;q!==null?(at=q.max.x-q.min.x,xt=q.max.y-q.min.y,Tt=q.min.x,Rt=q.min.y):(at=w.image.width,xt=w.image.height,Tt=0,Rt=0),Y!==null?(Ut=Y.x,Nt=Y.y):(Ut=0,Nt=0);const Ct=zt.convert(k.format),ee=zt.convert(k.type);b.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const se=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Pe=C.getParameter(C.UNPACK_SKIP_PIXELS),jt=C.getParameter(C.UNPACK_SKIP_ROWS),It=C.getParameter(C.UNPACK_SKIP_IMAGES),xe=w.isCompressedTexture?w.mipmaps[H]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rt),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,Ut,Nt,at,xt,Ct,ee,xe.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,Ut,Nt,xe.width,xe.height,Ct,xe.data):C.texSubImage2D(C.TEXTURE_2D,H,Ut,Nt,at,xt,Ct,ee,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,se),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,It),H===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,q=null,Y=null,H=0){w.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],k=arguments[3],H=arguments[4]||0);let at,xt,Tt,Rt,Ut,Nt,Ct,ee,se;const ce=w.isCompressedTexture?w.mipmaps[H]:w.image;q!==null?(at=q.max.x-q.min.x,xt=q.max.y-q.min.y,Tt=q.max.z-q.min.z,Rt=q.min.x,Ut=q.min.y,Nt=q.min.z):(at=ce.width,xt=ce.height,Tt=ce.depth,Rt=0,Ut=0,Nt=0),Y!==null?(Ct=Y.x,ee=Y.y,se=Y.z):(Ct=0,ee=0,se=0);const Pe=zt.convert(k.format),jt=zt.convert(k.type);let It;if(k.isData3DTexture)b.setTexture3D(k,0),It=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),It=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const xe=C.getParameter(C.UNPACK_ROW_LENGTH),Qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),We=C.getParameter(C.UNPACK_SKIP_PIXELS),ti=C.getParameter(C.UNPACK_SKIP_ROWS),Le=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(It,H,Ct,ee,se,at,xt,Tt,Pe,jt,ce.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(It,H,Ct,ee,se,at,xt,Tt,Pe,ce.data):C.texSubImage3D(It,H,Ct,ee,se,at,xt,Tt,Pe,jt,ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,We),C.pixelStorei(C.UNPACK_SKIP_ROWS,ti),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le),H===0&&k.generateMipmaps&&C.generateMipmap(It),dt.unbindTexture()},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){U=0,A=0,T=null,dt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ea?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===cr?"display-p3":"srgb"}}class bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ig extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ho,this.updateRanges=[],this.version=0,this.uuid=je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const we=new P;class nr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ze(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ze(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ze(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ze(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ze(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dm extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let mi;const zi=new P,gi=new P,_i=new P,vi=new J,ki=new J,Tl=new Xt,Ps=new P,Hi=new P,Ls=new P,xc=new J,qr=new J,Mc=new J;class Dg extends ae{constructor(t=new dm){if(super(),this.isSprite=!0,this.type="Sprite",mi===void 0){mi=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fm(e,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new nr(n,3,0,!1)),mi.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=mi,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),Tl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-_i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Is(Ps.set(-.5,-.5,0),_i,o,gi,s,r),Is(Hi.set(.5,-.5,0),_i,o,gi,s,r),Is(Ls.set(.5,.5,0),_i,o,gi,s,r),xc.set(0,0),qr.set(1,0),Mc.set(1,1);let a=t.ray.intersectTriangle(Ps,Hi,Ls,!1,zi);if(a===null&&(Is(Hi.set(-.5,.5,0),_i,o,gi,s,r),qr.set(0,1),a=t.ray.intersectTriangle(Ps,Ls,Hi,!1,zi),a===null))return;const c=t.ray.origin.distanceTo(zi);c<t.near||c>t.far||e.push({distance:c,point:zi.clone(),uv:He.getInterpolation(zi,Ps,Hi,Ls,xc,qr,Mc,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Is(i,t,e,n,s,r){vi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ki.x=r*vi.x-s*vi.y,ki.y=s*vi.x+r*vi.y):ki.copy(vi),i.copy(t),i.x+=ki.x,i.y+=ki.y,i.applyMatrix4(Tl)}const yc=new P,Sc=new $t,Ec=new $t,pm=new P,wc=new Xt,Ds=new P,Yr=new vn,bc=new Xt,Zr=new lr;class mm extends _t{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ra,this.bindMatrix=new Xt,this.bindMatrixInverse=new Xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ds),this.boundingBox.expandByPoint(Ds)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ds),this.boundingSphere.expandByPoint(Ds)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(s),t.ray.intersectsSphere(Yr)!==!1&&(bc.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(bc),!(this.boundingBox!==null&&Zr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Zr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new $t,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ra?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Sc.fromBufferAttribute(s.attributes.skinIndex,t),Ec.fromBufferAttribute(s.attributes.skinWeight,t),yc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Ec.getComponent(r);if(o!==0){const a=Sc.getComponent(r);wc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(pm.copy(yc).applyMatrix4(wc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ue extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class os extends Me{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ce,h=Ce,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Xt,gm=new Xt;class aa{constructor(t=[],e=[]){this.uuid=je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Xt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:gm;Tc.multiplyMatrices(a,e[r]),Tc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new aa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new os(e,t,t,Ve,Je);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ue),this.bones.push(o),this.boneInverses.push(new Xt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Ac extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xi=new Xt,Rc=new Xt,Us=[],Cc=new On,_m=new Xt,Vi=new _t,Gi=new vn;class Ug extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_m)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Cc.copy(t.boundingBox).applyMatrix4(xi),this.boundingBox.union(Cc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xi),Gi.copy(t.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Gi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),t.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xi),Rc.multiplyMatrices(n,xi),Vi.matrixWorld=Rc,Vi.raycast(t,Us);for(let o=0,a=Us.length;o<a;o++){const c=Us[o];c.instanceId=r,c.object=this,e.push(c)}Us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new os(new Float32Array(s*this.count),s,this.count,$o,Je));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vm extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ir=new P,sr=new P,Pc=new Xt,Wi=new lr,Ns=new vn,Jr=new P,Lc=new P;class xm extends ae{constructor(t=new he,e=new vm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ir.fromBufferAttribute(e,s-1),sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ir.distanceTo(sr);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,t.ray.intersectsSphere(Ns)===!1)return;Pc.copy(s).invert(),Wi.copy(t.ray).applyMatrix4(Pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=h.getX(v),S=h.getX(v+1),x=Fs(this,t,Wi,c,p,S);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(d),p=Fs(this,t,Wi,c,v,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=Fs(this,t,Wi,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Fs(this,t,Wi,c,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ir.fromBufferAttribute(o,s),sr.fromBufferAttribute(o,r),e.distanceSqToSegment(ir,sr,Jr,Lc)>n)return;Jr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Jr);if(!(c<t.near||c>t.far))return{distance:c,point:Lc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ic=new P,Dc=new P;class Ng extends xm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ic.fromBufferAttribute(e,s),Dc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ic.distanceTo(Dc);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mm extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uc=new Xt,Go=new lr,Os=new vn,Bs=new P;class Fg extends ae{constructor(t=new he,e=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;Uc.copy(s).invert(),Go.copy(t.ray).applyMatrix4(Uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Bs.fromBufferAttribute(u,m),Nc(Bs,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Bs.fromBufferAttribute(u,g),Nc(Bs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nc(i,t,e,n,s,r,o){const a=Go.distanceSqToPoint(i);if(a<e){const c=new P;Go.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Al extends Me{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new J:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new Xt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ca extends sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new J){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ym extends ca{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function la(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zs=new P,Kr=new la,$r=new la,jr=new la;class pn extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(zs.subVectors(s[0],s[1]).add(s[0]),l=zs);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Kr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),$r.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),jr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),$r.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),jr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Kr.calc(c),$r.calc(c),jr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sm(i,t){const e=1-i;return e*e*t}function Em(i,t){return 2*(1-i)*i*t}function wm(i,t){return i*i*t}function Ji(i,t,e,n){return Sm(i,t)+Em(i,e)+wm(i,n)}function bm(i,t){const e=1-i;return e*e*e*t}function Tm(i,t){const e=1-i;return 3*e*e*i*t}function Am(i,t){return 3*(1-i)*i*i*t}function Rm(i,t){return i*i*i*t}function Ki(i,t,e,n,s){return bm(i,t)+Tm(i,e)+Am(i,n)+Rm(i,s)}class Ln extends sn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ki(t,s.x,r.x,o.x,a.x),Ki(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cm extends sn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ki(t,s.x,r.x,o.x,a.x),Ki(t,s.y,r.y,o.y,a.y),Ki(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rl extends sn{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends sn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pl extends sn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,s.x,r.x,o.x),Ji(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ll extends sn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ji(t,s.x,r.x,o.x),Ji(t,s.y,r.y,o.y),Ji(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Il extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Fc(a,c.x,l.x,h.x,u.x),Fc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var rr=Object.freeze({__proto__:null,ArcCurve:ym,CatmullRomCurve3:pn,CubicBezierCurve:Ln,CubicBezierCurve3:Cm,EllipseCurve:ca,LineCurve:Rl,LineCurve3:Cl,QuadraticBezierCurve:Pl,QuadraticBezierCurve3:Ll,SplineCurve:Il});class Pm extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rr[s.type]().fromJSON(s))}return this}}class Wo extends Pm{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rl(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Pl(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ln(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Il(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ca(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _n extends he{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new J,d=new P,g=new P,v=new P;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const x=n+S*h*s,y=Math.sin(x),U=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*U,o.push(u.x,u.y,u.z),f.x=S/e,f.y=A/(t.length-1),a.push(f.x,f.y);const T=c[3*A+0]*y,R=c[3*A+1],F=c[3*A+0]*U;l.push(T,R,F)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const y=x+S*t.length,U=y,A=y+t.length,T=y+t.length+1,R=y+1;r.push(U,A,R),r.push(T,R,A)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.points,t.segments,t.phiStart,t.phiLength)}}class Dl extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,h=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function S(){const y=new P,U=new P;let A=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const F=[],_=R/r,M=_*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,I=D*c+a,Z=Math.sin(I),z=Math.cos(I);U.x=M*Z,U.y=-_*n+m,U.z=M*z,u.push(U.x,U.y,U.z),y.set(Z,T,z).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-_),F.push(g++)}v.push(F)}for(let R=0;R<s;R++)for(let F=0;F<r;F++){const _=v[F][R],M=v[F+1][R],L=v[F+1][R+1],D=v[F][R+1];t>0&&(h.push(_,M,D),A+=3),e>0&&(h.push(M,L,D),A+=3)}l.addGroup(p,A,0),p+=A}function x(y){const U=g,A=new J,T=new P;let R=0;const F=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;const M=g;for(let L=0;L<=s;L++){const I=L/s*c+a,Z=Math.cos(I),z=Math.sin(I);T.x=F*z,T.y=m*_,T.z=F*Z,u.push(T.x,T.y,T.z),f.push(0,_,0),A.x=Z*.5+.5,A.y=z*.5*_+.5,d.push(A.x,A.y),g++}for(let L=0;L<s;L++){const D=U+L,I=M+L;y===!0?h.push(I,I+1,D):h.push(I+1,I,D),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ha extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ha(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new P,y=new P,U=new P;for(let A=0;A<e.length;A+=3)d(e[A+0],x),d(e[A+1],y),d(e[A+2],U),c(x,y,U,S)}function c(S,x,y,U){const A=U+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const F=S.clone().lerp(y,R/A),_=x.clone().lerp(y,R/A),M=A-R;for(let L=0;L<=M;L++)L===0&&R===A?T[R][L]=F:T[R][L]=F.clone().lerp(_,L/M)}for(let R=0;R<A;R++)for(let F=0;F<2*(A-R)-1;F++){const _=Math.floor(F/2);F%2===0?(f(T[R][_+1]),f(T[R+1][_]),f(T[R][_])):(f(T[R][_+1]),f(T[R+1][_+1]),f(T[R+1][_]))}}function l(S){const x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(S),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const S=new P;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const y=m(S)/2/Math.PI+.5,U=p(S)/Math.PI+.5;o.push(y,1-U)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const x=o[S+0],y=o[S+2],U=o[S+4],A=Math.max(x,y,U),T=Math.min(x,y,U);A>.9&&T<.1&&(x<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),U<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){const y=S*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const S=new P,x=new P,y=new P,U=new P,A=new J,T=new J,R=new J;for(let F=0,_=0;F<r.length;F+=9,_+=6){S.set(r[F+0],r[F+1],r[F+2]),x.set(r[F+3],r[F+4],r[F+5]),y.set(r[F+6],r[F+7],r[F+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),U.copy(S).add(x).add(y).divideScalar(3);const M=m(U);v(A,_+0,S,M),v(T,_+2,x,M),v(R,_+4,y,M)}}function v(S,x,y,U){U<0&&S.x===1&&(o[x]=S.x-1),y.x===0&&y.z===0&&(o[x]=U/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.details)}}class Ee extends Wo{constructor(t){super(t),this.uuid=je(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Wo().fromJSON(s))}return this}}const Lm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ul(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Fm(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return ts(r,o,e,a,c,d,0),o}};function Ul(i,t,e,n,s){let r,o;if(s===Ym(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Oc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Oc(r,i[r],i[r+1],o);return o&&ur(o,o.next)&&(ns(o),o=o.next),o}function jn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||oe(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Dm(i,n,s,r):Im(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ns(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Um(jn(i),t,e),ts(i,t,e,n,s,r,2)):o===2&&Nm(i,t,e,n,s,r):ts(jn(i),t,e,n,s,r,1);break}}}function Im(i){const t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&yi(s,a,r,c,o,l,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(oe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Xo(d,g,t,e,n),S=Xo(v,m,t,e,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&yi(a,h,c,u,l,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&yi(a,h,c,u,l,f,y.x,y.y)&&oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&yi(a,h,c,u,l,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&yi(a,h,c,u,l,f,y.x,y.y)&&oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Um(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ur(s,r)&&Nl(s,n,n.next,r)&&es(s,r)&&es(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ns(n),ns(n.next),n=i=r),n=n.next}while(n!==i);return jn(n)}function Nm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wm(o,a)){let c=Fl(o,a);o=jn(o,o.next),c=jn(c,c.next),ts(o,t,e,n,s,r,0),ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fm(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ul(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Gm(l));for(s.sort(Om),r=0;r<s.length;r++)e=Bm(s[r],e);return e}function Om(i,t){return i.x-t.x}function Bm(i,t){const e=zm(i,t);if(!e)return t;const n=Fl(e,i);return jn(n,n.next),jn(e,e.next)}function zm(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&yi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),es(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&km(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function km(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function Hm(i,t,e,n){let s=i;do s.z===0&&(s.z=Xo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vm(s)}function Vm(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Xo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xm(i,t)&&(es(i,t)&&es(t,i)&&qm(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||ur(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ur(i,t){return i.x===t.x&&i.y===t.y}function Nl(i,t,e,n){const s=Hs(oe(i,t,e)),r=Hs(oe(i,t,n)),o=Hs(oe(e,n,i)),a=Hs(oe(e,n,t));return!!(s!==r&&o!==a||s===0&&ks(i,e,t)||r===0&&ks(i,n,t)||o===0&&ks(e,i,n)||a===0&&ks(e,t,n))}function ks(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hs(i){return i>0?1:i<0?-1:0}function Xm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function es(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function qm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fl(i,t){const e=new qo(i.i,i.x,i.y),n=new qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oc(i,t,e,n){const s=new qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ym(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class In{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return In.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Bc(t),zc(n,t);let o=t.length;e.forEach(Bc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,zc(n,e[c]);const a=Lm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Bc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class nn extends he{constructor(t=new Ee([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Zm;let x,y=!1,U,A,T,R;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,U=p.computeFrenetFrames(h,!1),A=new P,T=new P,R=new P),f||(m=0,d=0,g=0,v=0);const F=a.extractPoints(l);let _=F.shape;const M=F.holes;if(!In.isClockWise(_)){_=_.reverse();for(let nt=0,C=M.length;nt<C;nt++){const ft=M[nt];In.isClockWise(ft)&&(M[nt]=ft.reverse())}}const D=In.triangulateShape(_,M),I=_;for(let nt=0,C=M.length;nt<C;nt++){const ft=M[nt];_=_.concat(ft)}function Z(nt,C,ft){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(C,ft)}const z=_.length,W=D.length;function V(nt,C,ft){let ht,rt,dt;const Lt=nt.x-C.x,Mt=nt.y-C.y,b=ft.x-nt.x,E=ft.y-nt.y,G=Lt*Lt+Mt*Mt,tt=Lt*E-Mt*b;if(Math.abs(tt)>Number.EPSILON){const it=Math.sqrt(G),et=Math.sqrt(b*b+E*E),At=C.x-Mt/it,mt=C.y+Lt/it,Et=ft.x-E/et,Yt=ft.y+b/et,ot=((Et-At)*E-(Yt-mt)*b)/(Lt*E-Mt*b);ht=At+Lt*ot-nt.x,rt=mt+Mt*ot-nt.y;const wt=ht*ht+rt*rt;if(wt<=2)return new J(ht,rt);dt=Math.sqrt(wt/2)}else{let it=!1;Lt>Number.EPSILON?b>Number.EPSILON&&(it=!0):Lt<-Number.EPSILON?b<-Number.EPSILON&&(it=!0):Math.sign(Mt)===Math.sign(E)&&(it=!0),it?(ht=-Mt,rt=Lt,dt=Math.sqrt(G)):(ht=Lt,rt=Mt,dt=Math.sqrt(G/2))}return new J(ht/dt,rt/dt)}const $=[];for(let nt=0,C=I.length,ft=C-1,ht=nt+1;nt<C;nt++,ft++,ht++)ft===C&&(ft=0),ht===C&&(ht=0),$[nt]=V(I[nt],I[ft],I[ht]);const B=[];let N,j=$.concat();for(let nt=0,C=M.length;nt<C;nt++){const ft=M[nt];N=[];for(let ht=0,rt=ft.length,dt=rt-1,Lt=ht+1;ht<rt;ht++,dt++,Lt++)dt===rt&&(dt=0),Lt===rt&&(Lt=0),N[ht]=V(ft[ht],ft[dt],ft[Lt]);B.push(N),j=j.concat(N)}for(let nt=0;nt<m;nt++){const C=nt/m,ft=d*Math.cos(C*Math.PI/2),ht=g*Math.sin(C*Math.PI/2)+v;for(let rt=0,dt=I.length;rt<dt;rt++){const Lt=Z(I[rt],$[rt],ht);ct(Lt.x,Lt.y,-ft)}for(let rt=0,dt=M.length;rt<dt;rt++){const Lt=M[rt];N=B[rt];for(let Mt=0,b=Lt.length;Mt<b;Mt++){const E=Z(Lt[Mt],N[Mt],ht);ct(E.x,E.y,-ft)}}}const lt=g+v;for(let nt=0;nt<z;nt++){const C=f?Z(_[nt],j[nt],lt):_[nt];y?(T.copy(U.normals[0]).multiplyScalar(C.x),A.copy(U.binormals[0]).multiplyScalar(C.y),R.copy(x[0]).add(T).add(A),ct(R.x,R.y,R.z)):ct(C.x,C.y,0)}for(let nt=1;nt<=h;nt++)for(let C=0;C<z;C++){const ft=f?Z(_[C],j[C],lt):_[C];y?(T.copy(U.normals[nt]).multiplyScalar(ft.x),A.copy(U.binormals[nt]).multiplyScalar(ft.y),R.copy(x[nt]).add(T).add(A),ct(R.x,R.y,R.z)):ct(ft.x,ft.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const C=nt/m,ft=d*Math.cos(C*Math.PI/2),ht=g*Math.sin(C*Math.PI/2)+v;for(let rt=0,dt=I.length;rt<dt;rt++){const Lt=Z(I[rt],$[rt],ht);ct(Lt.x,Lt.y,u+ft)}for(let rt=0,dt=M.length;rt<dt;rt++){const Lt=M[rt];N=B[rt];for(let Mt=0,b=Lt.length;Mt<b;Mt++){const E=Z(Lt[Mt],N[Mt],ht);y?ct(E.x,E.y+x[h-1].y,x[h-1].x+ft):ct(E.x,E.y,u+ft)}}}X(),Q();function X(){const nt=s.length/3;if(f){let C=0,ft=z*C;for(let ht=0;ht<W;ht++){const rt=D[ht];Pt(rt[2]+ft,rt[1]+ft,rt[0]+ft)}C=h+m*2,ft=z*C;for(let ht=0;ht<W;ht++){const rt=D[ht];Pt(rt[0]+ft,rt[1]+ft,rt[2]+ft)}}else{for(let C=0;C<W;C++){const ft=D[C];Pt(ft[2],ft[1],ft[0])}for(let C=0;C<W;C++){const ft=D[C];Pt(ft[0]+z*h,ft[1]+z*h,ft[2]+z*h)}}n.addGroup(nt,s.length/3-nt,0)}function Q(){const nt=s.length/3;let C=0;pt(I,C),C+=I.length;for(let ft=0,ht=M.length;ft<ht;ft++){const rt=M[ft];pt(rt,C),C+=rt.length}n.addGroup(nt,s.length/3-nt,1)}function pt(nt,C){let ft=nt.length;for(;--ft>=0;){const ht=ft;let rt=ft-1;rt<0&&(rt=nt.length-1);for(let dt=0,Lt=h+m*2;dt<Lt;dt++){const Mt=z*dt,b=z*(dt+1),E=C+ht+Mt,G=C+rt+Mt,tt=C+rt+b,it=C+ht+b;Dt(E,G,tt,it)}}}function ct(nt,C,ft){c.push(nt),c.push(C),c.push(ft)}function Pt(nt,C,ft){Bt(nt),Bt(C),Bt(ft);const ht=s.length/3,rt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);qt(rt[0]),qt(rt[1]),qt(rt[2])}function Dt(nt,C,ft,ht){Bt(nt),Bt(C),Bt(ht),Bt(C),Bt(ft),Bt(ht);const rt=s.length/3,dt=S.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);qt(dt[0]),qt(dt[1]),qt(dt[3]),qt(dt[1]),qt(dt[2]),qt(dt[3])}function Bt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function qt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rr[s.type]().fromJSON(s)),new nn(n,t.options)}}const Zm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new J(r,o),new J(a,c),new J(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-u),new J(f,1-g),new J(v,1-p)]:[new J(a,1-c),new J(h,1-u),new J(d,1-g),new J(m,1-p)]}};function Jm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ol extends ua{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ol(t.radius,t.detail)}}class fa extends he{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new P,g=new J;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const S=p+m,x=S,y=S+n+1,U=S+n+2,A=S+1;a.push(x,y,A),a.push(y,U,A)}}this.setIndex(a),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class da extends he{constructor(t=new Ee([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(o,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;In.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];In.isClockWise(S)===!0&&(g[m]=S.reverse())}const v=In.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=v.length;m<p;m++){const S=v[m],x=S[0]+u,y=S[1]+u,U=S[2]+u;n.push(x,y,U),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Km(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new da(n,t.curveSegments)}}function Km(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ve extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],x=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let U=0;U<=e;U++){const A=U/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+y,1-x),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const x=h[p][S+1],y=h[p][S],U=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(x,y,A),(p!==n-1||c<Math.PI)&&d.push(y,U,A)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nn extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(v,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $e extends he{constructor(t=new Ll(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new J;let h=new P;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),S(),p()}function m(x){h=t.getPointAt(x/e,h);const y=o.normals[x],U=o.binormals[x];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,R=Math.sin(T),F=-Math.cos(T);c.x=F*y.x+R*U.x,c.y=F*y.y+R*U.y,c.z=F*y.z+R*U.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){const U=(s+1)*(x-1)+(y-1),A=(s+1)*x+(y-1),T=(s+1)*x+y,R=(s+1)*(x-1)+y;g.push(U,A,R),g.push(A,T,R)}}function S(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)l.x=x/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $e(new rr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Og extends xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class is extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $m extends is{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const kc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Qm=new jm;class pa{constructor(t){this.manager=t!==void 0?t:Qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}pa.DEFAULT_MATERIAL_NAME="__DEFAULT";class tg extends pa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=kc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Qi("img");function c(){h(),kc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Bg extends pa{constructor(t){super(t)}load(t,e,n,s){const r=new Me,o=new tg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class fr extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zg extends fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qr=new Xt,Hc=new P,Vc=new P;class ma{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),Qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eg extends ma{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Pi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kg extends fr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Gc=new Xt,Xi=new P,to=new P;class ng extends ma{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xi),to.copy(n.position),to.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(to),n.updateMatrixWorld(),s.makeTranslation(-Xi.x,-Xi.y,-Xi.z),Gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc)}}class Hg extends fr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ig extends ma{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vg extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const Xc=new Map;function Bl(i,t=.85,e=.05){const n=`${i}:${t}:${e}`;let s=Xc.get(n);return s||(s=new is({color:i,roughness:t,metalness:e}),Xc.set(n,s)),s}const zl=new Qn(1,1,1),sg=new Ke(.5,.5,1,10),Wg=new ve(.5,14,10),Xg=new ha(.5,1,8);function qg(i,t,e,n){const s=new _t(zl,n);return s.scale.set(i,t,e),s}function Qe(i,t,e){return i<t?t:i>e?e:i}function rg(i,t,e){return i+(t-i)*e}function _e(i,t,e,n){return rg(i,t,1-Math.exp(-e*n))}function og(i,t){return i+Math.random()*(t-i)}function Yg(i,t){return Math.floor(og(i,t+1))}function Zg(i){return i[Math.floor(Math.random()*i.length)]}function Jg(i,t,e){return i<t?Math.min(i+e,t):Math.max(i-e,t)}const Js=[new Ln(new J(0,.805),new J(.3,.805),new J(.55,.65),new J(.615,.4)),new Ln(new J(.615,.4),new J(.65,.14),new J(.57,-.025),new J(.34,-.03)),new Ln(new J(.34,-.03),new J(.22,-.032),new J(.1,-.035),new J(0,-.035))].flatMap((i,t)=>i.getPoints(t===0?18:12).slice(t?1:0)),kl=.68,or=.9,qc=(i,t)=>Math.sign(i)*Math.pow(Math.abs(i),t);function ag(){const i=new _n([...Js].reverse(),64),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getX(e),s=t.getZ(e),r=Math.hypot(n,s);r>1e-6&&t.setXYZ(e,r*qc(n/r,or),t.getY(e),r*kl*qc(s/r,or))}return i.computeVertexNormals(),i}function Yc(i,t){let e=0;for(let n=1;n<Js.length;n++){const s=Js[n-1],r=Js[n];if(t<=s.y&&t>=r.y){e=ji.lerp(s.x,r.x,(s.y-t)/(s.y-r.y));break}}return e?e*kl*Math.pow(Math.max(0,1-Math.pow(Math.abs(i)/e,2/or)),or/2):0}const Ks=[new Ln(new J(0,.82),new J(.33,.83),new J(.58,.7),new J(.66,.42)),new Ln(new J(.66,.42),new J(.75,.03),new J(.67,-.3),new J(.43,-.43)),new Ln(new J(.43,-.43),new J(.29,-.54),new J(.1,-.55),new J(0,-.55))].flatMap((i,t)=>i.getPoints(18).slice(t?1:0));function cg(){const i=new _n([...Ks].reverse(),48),t=i.attributes.position;for(let e=0;e<t.count;e++)t.setZ(e,t.getZ(e)*.82);return i.computeVertexNormals(),i}function lg(i,t){for(let e=1;e<Ks.length;e++){const n=Ks[e-1],s=Ks[e];if(t>n.y||t<s.y)continue;const r=ji.lerp(n.x,s.x,(n.y-t)/(n.y-s.y));return .82*Math.sqrt(Math.max(0,r*r-i*i))}return 0}function hg(){const i=new ve(1,40,28),t=i.attributes.position;for(let e=0;e<t.count;e++)t.setXYZ(e,t.getX(e)*.61,t.getY(e)*.51+.37,t.getZ(e)*.49);return i.computeVertexNormals(),i}function ug(i,t){const e=1-(i/.61)**2-((t-.37)/.51)**2;return e>0?.49*Math.sqrt(e):0}function fg(){const t=new Uint8Array(65536);let e=2317;for(let s=0;s<128*128;s++){e=Math.imul(e,1664525)+1013904223|0;const r=222+(e>>>24)*.13,o=s*4;t[o]=t[o+1]=t[o+2]=r,t[o+3]=255}const n=new os(t,128,128);return n.wrapS=n.wrapT=$s,n.repeat.set(4,4),n.magFilter=ke,n.minFilter=Rn,n.generateMipmaps=!0,n.needsUpdate=!0,n}function eo(i,t,e,n,s){const r=new ve(1,24,20),o=r.attributes.position,a=[],c=[];for(let l=0;l<o.count;l++){const h=(1-o.getY(l))/2,u=.035-h*t,f=.94+.06*Math.sin(h*Math.PI);o.setXYZ(l,o.getX(l)*i*.5*f,u,o.getZ(l)*e*.5);const d=ji.smoothstep(-u,n-.065,n+.065),g=ji.smoothstep(-u,s-.035,s+.055);a.push(0,1,2,0),c.push(1-d,d*(1-g),d*g,0)}return r.setAttribute("skinIndex",new sa(a,4)),r.setAttribute("skinWeight",new Wt(c,4)),r.computeVertexNormals(),r}class dg{constructor(){ut(this,"root",new kt);ut(this,"geometries",[]);ut(this,"materials",[]);ut(this,"textures",[]);ut(this,"flutter",0);this.root.name="ClothLabel",this.root.position.set(.365,-.165,-.015),this.root.rotation.set(0,-.32,.48);for(const t of[!1,!0]){const e=new Un(.17,.3,3,16);if(t){const o=e.attributes.uv;for(let a=0;a<o.count;a++)o.setX(a,1-o.getX(a))}const n=this.printTexture(t),s=new is({color:16777215,map:n,roughness:1,metalness:0,side:t?Te:mn}),r=new _t(e,s);r.name=t?"LabelBack":"LabelFront",r.castShadow=!0,this.root.add(r),this.geometries.push(e),this.materials.push(s),this.textures.push(n)}this.update(0,0,!1)}printTexture(t){if(typeof document>"u"){const r=new os(new Uint8Array([244,243,236,255]),1,1);return r.needsUpdate=!0,r}const e=document.createElement("canvas");e.width=256,e.height=512;const n=e.getContext("2d");n.fillStyle="#f6f6f3",n.fillRect(0,0,256,512),n.strokeStyle="#deded6",n.lineWidth=.5;for(let r=0;r<512;r+=4)n.beginPath(),n.moveTo(0,r),n.lineTo(256,r),n.stroke();n.fillStyle="#18212a",n.fillRect(0,0,6,512),n.fillRect(250,0,6,512),n.fillRect(0,500,256,12),n.strokeStyle="#8d9293",n.setLineDash([5,6]),n.beginPath(),n.moveTo(12,24),n.lineTo(244,24),n.stroke(),n.setLineDash([]),n.translate(128,282),n.rotate(-Math.PI/2),n.textAlign="center",n.textBaseline="middle",n.font=`${t?64:112}px "Apple SD Gothic Neo", sans-serif`,n.font=`bold ${n.font}`,n.fillText(t?"누리토이즈":"당곰",0,-30,410),n.font="bold 28px sans-serif",n.fillText(t?"MADE IN CHINA":"JOKE BEAR",0,44,410);const s=new Al(e);return s.colorSpace=ze,s.anisotropy=4,s}update(t,e,n){this.flutter=ji.damp(this.flutter,n?1:0,7,t),this.root.rotation.x=Math.sin(e-.6)*.12*this.flutter,this.root.rotation.z=.48+Math.sin(e-.4)*.07*this.flutter;for(let s=0;s<this.geometries.length;s++){const r=this.geometries[s],o=r.attributes.uv,a=r.attributes.position;for(let c=0;c<a.count;c++){const l=s?1-o.getX(c):o.getX(c),h=1-o.getY(c),u=.04*Math.sin(h*Math.PI*1.3)+.018*h*Math.sin(l*Math.PI),f=this.flutter*.022*h*h*Math.sin(e*2-h*4);a.setXYZ(c,(l-.5)*.17*(1-h*.04),-h*.3,u+f+(s?-.0015:.0015))}a.needsUpdate=!0,r.computeVertexNormals()}}dispose(){this.root.removeFromParent();for(const t of this.geometries)t.dispose();for(const t of this.materials)t.dispose();for(const t of this.textures)t.dispose()}}function pg(i,t,e){const{geom:n,material:s,fabric:r}=e,o=n(new ve(.5,12,8)),a=s(3746116,.98),c=s(15712609,.55),l=s(16774111,1),h=s(3765347,.98),u=s(i==="witch"?11358506:9844536,1),f=(_,M,L,D)=>{const I=new _t(o,M);return I.scale.set(...L),I.position.set(...D),_.add(I),I},d=(_,M,L,D=.009)=>{const I=new pn(L.map(([z,W,V])=>new P(z,W,V))),Z=new _t(n(new $e(I,20,D,6,!1)),M);return _.add(Z),Z},g=(_,M,L,D,I,Z=.75)=>{const z=new _t(n(new Nn(L,D,8,32)),M);return z.rotation.x=Math.PI/2,z.scale.y=Z,z.position.y=I,_.add(z),z},v=(_,M,L,D,I=!1)=>{const Z=new _t(n(new nn(M,{depth:.009,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:1,curveSegments:12})),L);return Z.position.set(...D),I&&(Z.rotation.y=Math.PI),_.add(Z),Z},m=(_,M,L=1)=>{const D=new Ee;D.moveTo(-.05,-.035),D.lineTo(.05,-.035),D.lineTo(.05,.035),D.lineTo(-.05,.035),D.closePath();const I=new Wo;I.moveTo(-.032,-.018),I.lineTo(-.032,.018),I.lineTo(.032,.018),I.lineTo(.032,-.018),I.closePath(),D.holes.push(I);const Z=v(_,D,c,M);return Z.scale.setScalar(L),Z},p=new kt;p.name=i==="witch"?"HalloweenHat":"ChristmasHat",p.position.set(i==="witch"?-.06:.06,.748,-.025),t.head.add(p);const S=[];for(let _=0;_<=20;_++){const M=_/20;S.push(new J((i==="witch"?.245:.32)*Math.pow(1-M,.75),M))}const x=n(new _n(S,32)),y=x.attributes.position;for(let _=0;_<y.count;_++){const M=y.getY(_);y.setXYZ(_,y.getX(_)+(i==="witch"?-.38:.42)*M*M,(i==="witch"?.62:.48)*M-.25*M**3,y.getZ(_)-M*M*.06)}x.computeVertexNormals();const U=new _t(x,i==="witch"?a:r);U.name="FestiveHatCrown",p.add(U);for(const _ of t.upperArms)f(_,r,[.235,.3,.225],[0,-.09,0]);for(const _ of t.lowerArms)f(_,i==="witch"?a:l,[.22,.09,.22],[0,-.12,0]);if(i==="witch"){const _=n(new fa(.08,.44,48,3));_.rotateX(-Math.PI/2);const M=_.attributes.position;for(let N=0;N<M.count;N++){const j=M.getX(N),lt=M.getZ(N);M.setXYZ(N,j,.025*Math.sin(Math.atan2(lt,j)*3)*Math.hypot(j,lt)/.44,lt*.82)}_.computeVertexNormals();const L=s(3746116,.98);L.side=Fe,p.add(new _t(_,L));const D=new _t(n(new Ke(.215,.247,.075,32,1,!0)),r);D.position.set(-.006,.06,0),p.add(D),m(p,[-.006,.062,.239],.95),g(t.chest,a,.28,.045,.175,.78),g(t.chest,u,.3,.022,-.235,.76);for(const N of[-1,1]){d(t.chest,u,[[N*.1,.18,.19],[N*.21,.06,.251],[N*.22,-.13,.245],[N*.13,-.27,.16]]);const j=f(t.chest,h,[.19,.07,.08],[N*.11,.17,.22]);j.rotation.z=N*.45}const I=new kt;I.name="PumpkinBadge",I.position.set(0,-.05,.302),t.chest.add(I),f(I,c,[.18,.145,.025],[0,0,0]);for(const N of[-1,1]){const j=new Ee;j.moveTo(N*.045,.03),j.lineTo(N*.012,.015),j.lineTo(N*.044,-.003),j.closePath(),v(I,j,a,[0,0,.014])}d(I,a,[[-.035,-.025,.019],[0,-.038,.022],[.035,-.025,.019]],.006),f(I,h,[.027,.04,.025],[0,.083,0]);const Z=new kt;Z.name="HalloweenCape",Z.position.set(0,.15,-.25),t.chest.add(Z);const z=new Ee;z.moveTo(-.25,0),z.quadraticCurveTo(0,.07,.25,0),z.quadraticCurveTo(.32,-.16,.43,-.39),z.quadraticCurveTo(.28,-.32,.22,-.46),z.quadraticCurveTo(.1,-.38,0,-.47),z.quadraticCurveTo(-.1,-.38,-.22,-.46),z.quadraticCurveTo(-.28,-.32,-.43,-.39),z.quadraticCurveTo(-.32,-.16,-.25,0);const W=n(new nn(z,{depth:.018,bevelEnabled:!0,bevelSize:.009,bevelThickness:.008,bevelSegments:2})),V=W.attributes.position;for(let N=0;N<V.count;N++){const j=V.getY(N);V.setZ(N,V.getZ(N)-Math.sin(Math.min(1,-j/.47)*Math.PI/2)*.17)}W.computeVertexNormals(),Z.add(new _t(W,a));const $=new Ee;$.moveTo(-.14,.04),$.lineTo(-.06,.015),$.lineTo(-.03,.05),$.lineTo(0,.025),$.lineTo(.03,.05),$.lineTo(.06,.015),$.lineTo(.14,.04),$.lineTo(.105,-.03),$.quadraticCurveTo(.065,0,.035,-.045),$.lineTo(0,-.065),$.lineTo(-.035,-.045),$.quadraticCurveTo(-.065,0,-.105,-.03),$.closePath();const B=v(Z,$,c,[0,-.265,-.165],!0);return B.name="CapeBatBadge",{hat:p,cape:Z}}g(p,l,.32,.055,.015,.94);for(let _=0;_<12;_++){const M=_/12*Math.PI*2;f(p,l,[.09,.085,.09],[Math.sin(M)*.32,.015,Math.cos(M)*.3])}f(p,l,[.21,.21,.21],[.42,.23,-.06]).name="SantaPompom",g(t.chest,l,.3,.035,-.235,.76),g(t.chest,h,.28,.06,.17,.82),d(t.chest,l,[[0,.15,.235],[0,.02,.302],[0,-.16,.282],[0,-.26,.2]],.024);const A=s(2505525,.95),T=new _t(n(new Ke(.397,.385,.065,48,1,!0)),A);T.name="SantaBelt",T.scale.z=.75,T.position.set(0,-.11,.005),t.chest.add(T),m(t.chest,[0,-.11,.306],1.15);for(const _ of[.08,-.02])f(t.chest,c,[.042,.042,.03],[0,_,.325]);const R=f(t.chest,h,[.12,.26,.055],[.18,.065,.29]);R.rotation.z=-.22,d(t.chest,l,[[.17,-.018,.325],[.22,-.025,.32]],.012);for(const _ of[-1,1])d(t.chest,h,[[_*.23,.16,-.19],[_*.15,.03,-.282],[_*.07,-.08,-.304]],.026);const F=new Ee;for(let _=0;_<10;_++){const M=Math.PI/2+_*Math.PI/5,L=_%2?.033:.073,D=Math.cos(M)*L,I=Math.sin(M)*L;_===0?F.moveTo(D,I):F.lineTo(D,I)}return F.closePath(),v(t.chest,F,c,[0,-.04,-.315],!0).name="ChristmasBackStar",{hat:p}}function mg(i,t,e){const{geom:n,material:s,fabric:r}=e,o=n(new ve(.5,12,8)),a=s(16774623),c=s(7686965),l=s(3165559),h=s(15054687),u=s(15901746),f=s(16765775),d=s(2502970),g=(W,V,$,B)=>{const N=new _t(o,V);return N.scale.set($[0],$[1],$[2]),N.position.set(B[0],B[1],B[2]),W.add(N),N},v=(W,V,$)=>{const B=new kt;return B.name=V,B.position.set($[0],$[1],$[2]),W.add(B),B},m=(W,V,$,B=.012)=>{const N=new pn($.map(([lt,X,Q])=>new P(lt,X,Q))),j=new _t(n(new $e(N,12,B,5,!1)),V);return W.add(j),j},p=(W,V,$,B=[0,0,0],N=.008)=>{const j=new _t(n(new nn($,{depth:N,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1,curveSegments:4})),V);return j.position.set(B[0],B[1],B[2]),W.add(j),j},S=(W,V,$=.025)=>{const B=W/2,N=V/2,j=Math.min($,B,N),lt=new Ee;return lt.moveTo(-B+j,-N),lt.lineTo(B-j,-N),lt.quadraticCurveTo(B,-N,B,-N+j),lt.lineTo(B,N-j),lt.quadraticCurveTo(B,N,B-j,N),lt.lineTo(-B+j,N),lt.quadraticCurveTo(-B,N,-B,N-j),lt.lineTo(-B,-N+j),lt.quadraticCurveTo(-B,-N,-B+j,-N),lt},x=(W,V,$,B,N,j,lt)=>{let X;if(typeof document>"u")X=new os(new Uint8Array([255,245,223,255]),1,1);else{const ct=document.createElement("canvas");ct.width=512,ct.height=144;const Pt=ct.getContext("2d");lt&&(Pt.fillStyle=lt,Pt.fillRect(0,0,512,144)),Pt.fillStyle=j,Pt.font='bold 112px "PingFang SC", "Microsoft YaHei", sans-serif',Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(V,256,76,460),X=new Al(ct)}X.colorSpace=ze,X.needsUpdate=!0,e.texture(X);const Q=s(16777215);Q.map=X,Q.transparent=!0;const pt=new _t(n(new Un($,B)),Q);return pt.position.set(N[0],N[1],N[2]),W.add(pt),pt};for(const W of t.arms)g(W,r,[.22,.29,.21],[0,-.085,0]);if(i==="commuter"){for(const N of[-1,1]){const j=new Ee;j.moveTo(N*.025,.18),j.lineTo(N*.18,.18),j.lineTo(N*.105,.065),j.closePath(),p(t.chest,a,j,[0,0,.27])}m(t.chest,a,[[0,.13,.3],[0,.01,.31],[0,-.21,.25]],.009);const W=v(t.chest,"CommuterTie",[-.035,.13,.32]);g(W,l,[.085,.065,.04],[0,0,0]);const V=new Ee;V.moveTo(-.021,-.022),V.lineTo(.021,-.022),V.lineTo(.048,-.2),V.lineTo(0,-.25),V.lineTo(-.048,-.2),V.closePath(),p(W,l,V),m(W,h,[[-.025,-.13,.013],[.027,-.15,.013]],.006),m(t.chest,l,[[.08,.18,.27],[.12,.04,.31],[.17,-.01,.31],[.25,.08,.25]],.006);const $=v(t.chest,"CommuterBadge",[.17,-.055,.3]);p($,l,S(.195,.12,.012)),x($,"准点下班",.18,.085,[0,-.01,.014],"#304d77","#fff5df"),g($,h,[.028,.025,.02],[0,.065,.005]),m(t.chest,c,[[.26,.16,-.09],[.28,.1,.2],[.05,-.03,.33],[-.26,-.16,.25],[-.36,-.17,.01]],.022);const B=v(t.chest,"CommuterBriefcase",[-.37,-.17,-.04]);return p(B,c,S(.28,.21),[0,0,-.07],.1),p(B,s(9858123),S(.28,.105),[0,.052,.034]),m(B,c,[[-.065,.11,-.02],[-.05,.16,-.02],[.05,.16,-.02],[.065,.11,-.02]],.014),g(B,h,[.044,.045,.022],[0,.018,.055]),{tie:W,badge:$,bag:B}}if(i==="duck"){const W=v(t.head,"DuckHood",[0,0,0]),V=s(16765775);V.side=Fe;const $=new _t(n(new ve(.5,24,12,Math.PI,Math.PI)),V);$.scale.set(1.28,.91,.88),$.position.set(0,.44,-.04),W.add($),g(W,f,[.97,.28,.65],[0,.78,-.05]),g(W,u,[.38,.075,.27],[0,.825,.34]).name="DuckBill";for(const lt of[-1,1])g(W,d,[.036,.044,.016],[lt*.105,.89,.228]),g(W,u,[.12,.21,.16],[lt*.55,.27,-.025]),g(t.chest,u,[.17,.08,.13],[lt*.18,.17,.22]);m(t.chest,a,[[.07,.16,.27],[.07,.02,.309],[.07,-.2,.25]],.01);for(const lt of[.11,-.015,-.14])g(t.chest,u,[.035,.035,.02],[.1,lt,.31-Math.abs(lt)*.18]);const B=v(t.chest,"RaincoatPocket",[-.15,-.09,.286]),N=v(B,"PocketDuck",[0,0,0]);g(N,f,[.12,.095,.055],[0,-.025,0]),g(N,f,[.07,.07,.06],[-.025,.028,.005]),g(N,u,[.048,.019,.043],[-.05,.02,.025]),g(N,d,[.012,.012,.009],[-.032,.04,.035]);const j=s(14743295,.3);return j.transparent=!0,j.opacity=.25,j.depthWrite=!1,p(B,j,S(.2,.16,.014),[0,0,.045]),m(B,a,[[-.1,.07,.05],[-.09,-.075,.05],[.09,-.075,.05],[.1,.07,.05]],.006),{hat:W,duck:N}}const y=s(10248253),U=n(new Un(.59,.48,16,16)),A=U.attributes.position;for(let W=0;W<A.count;W++){const V=A.getY(W)-.035,$=A.getX(W)*(.85-(V+.275)*.4),B=.005+.29*Math.sqrt(Math.max(.04,1-($/.4)**2-((V+.045)/.31)**2))+.014;A.setXYZ(W,$,V,B)}U.computeVertexNormals();const T=new _t(U,y);T.name="MilkTeaApron",t.chest.add(T),m(t.chest,y,[[-.13,.17,.25],[-.17,.21,.13],[-.16,.17,-.18]],.025),m(t.chest,y,[[.13,.17,.25],[.17,.21,.13],[.16,.17,-.18]],.025),x(t.chest,"少跑多糖",.28,.09,[0,-.065,.326],"#fff5df"),g(t.chest,c,[.26,.1,.028],[0,-.19,.258]);for(const W of[-1,1])m(t.chest,y,[[W*.26,-.1,.23],[W*.36,-.1,0],[W*.15,-.1,-.27]],.017);const R=v(t.chest,"ApronBackBow",[0,-.1,-.3]);for(const W of[-1,1])g(R,y,[.12,.065,.04],[W*.05,0,0]).rotation.z=W*.25;const F=v(t.head,"BaristaHat",[0,.78,-.04]);g(F,a,[.62,.21,.5],[0,.07,0]);const _=new _t(n(new Ke(.29,.3,.05,32)),y);_.scale.z=.8,F.add(_),g(F,h,[.065,.065,.015],[0,.06,.24]),m(t.chest,c,[[-.22,.17,-.17],[-.12,.11,-.29],[.18,-.04,-.35]],.016);const M=v(t.chest,"MilkTeaCupBag",[.22,-.06,-.36]),L=s(15056529,.4);L.transparent=!0,L.opacity=.65,L.depthWrite=!1;const D=new _t(n(new Ke(.115,.09,.27,24)),L);M.add(D);const I=new _t(n(new Ke(.124,.124,.028,24)),a);I.position.y=.145,M.add(I);const Z=new _t(n(new Ke(.015,.015,.17,8)),s(14650246));Z.position.set(.025,.23,0),Z.rotation.z=-.18,M.add(Z);const z=[];for(let W=0;W<6;W++){const V=W*Math.PI/3,$=g(M,c,[.045,.045,.045],[Math.cos(V)*.058,-.092+W%2*.025,Math.sin(V)*.058]);$.name="CupPearl",$.userData.restY=$.position.y,z.push($)}for(const W of[-1,1])g(M,a,[.028,.035,.009],[W*.025,.016,-.112]);return g(M,a,[.06,.044,.009],[0,-.022,-.114]),{hat:F,bag:M,pearls:z}}function gg(i,t,e,n,s,r){const o=e?1:n?.75:0;i.hat&&(i.hat.scale.y=1-r*.78,i.hat.rotation.z=Math.sin(t*.5)*.025*o),i.tie&&(i.tie.rotation.z=.16+Math.sin(t-.4)*.1*o,i.tie.rotation.x=-.06-Math.abs(Math.sin(t))*.13*o),i.badge&&(i.badge.rotation.z=Math.sin(t-.7)*.12*o),i.bag&&(i.bag.visible=!s,i.bag.rotation.z=Math.sin(t*.5)*.07*o),i.duck&&(i.duck.rotation.z=Math.sin(t)*.12*o,i.duck.position.y=Math.abs(Math.sin(t))*.012*o);for(const[a,c]of(i.pearls??[]).entries())c.position.y=c.userData.restY+Math.abs(Math.sin(t*1.7+a))*.025*o}function _g(i,t,e){const{geom:n,material:s}=e,r=n(new ve(.5,12,8)),o=s(16773592),a=s(2959656),c=s(16765804),l=(R,F,_)=>{const M=new kt;return M.name=F,M.position.set(_[0],_[1],_[2]),R.add(M),M},h=(R,F,_,M)=>{const L=new _t(r,F);return L.scale.set(_[0],_[1],_[2]),L.position.set(M[0],M[1],M[2]),R.add(L),L},u=(R,F,_,M=.012)=>{const L=new pn(_.map(([I,Z,z])=>new P(I,Z,z))),D=new _t(n(new $e(L,18,M,6,!1)),F);return R.add(D),D},f=(R,F,_,M)=>{const L=new Ee;L.moveTo(_[0][0],_[0][1]);for(const[I,Z]of _.slice(1))L.lineTo(I,Z);L.closePath();const D=new _t(n(new nn(L,{depth:.014,bevelEnabled:!0,bevelSize:.006,bevelThickness:.004,bevelSegments:1})),F);return D.position.set(M[0],M[1],M[2]),R.add(D),D},d=(R,F,_)=>f(R,c,Array.from({length:10},(M,L)=>{const D=Math.PI/2+L*Math.PI/5,I=F*(L%2?.46:1);return[Math.cos(D)*I,Math.sin(D)*I]}),_),g=l(t.head,`${i}Hat`,[0,0,0]);if(i==="eel"){const R=s(8474682,.48),F=s(11432261,.4);u(g,R,[[-.4,.88,.13],[-.18,.87,-.04],[.15,.87,-.15],[.39,.86,-.03],[.29,.87,.17],[.04,.89,.2]],.085),h(g,R,[.17,.17,.17],[.04,.89,.2]),u(g,o,[[-.36,.84,.19],[-.16,.825,.025],[.14,.825,-.085],[.33,.825,.03]],.025),h(g,R,[.3,.19,.22],[-.42,.89,.16]),h(g,o,[.24,.055,.17],[-.44,.829,.185]);for(const M of[.09,.245])h(g,a,[.032,.035,.025],[-.47,.93,M]),h(g,o,[.01,.011,.009],[-.477,.938,M+.008]);u(g,a,[[-.55,.875,.213],[-.49,.862,.255],[-.435,.87,.26]],.006);for(const M of[-.2,-.07,.07,.2])u(g,F,[[M,.935,-.09],[M+.015,.95,-.04],[M+.025,.93,.01]],.007);f(g,F,[[0,0],[.07,.055],[.12,.01],[.04,-.025]],[-.3,.88,.2]);const _=l(g,"EelTail",[.04,.89,.2]);return u(_,R,[[0,0,0],[-.1,.015,.01],[-.16,.06,.01]],.045),f(_,F,[[-.13,.045],[-.27,.12],[-.23,.025],[-.15,0]],[0,0,0]),{hat:g,tail:_}}if(i==="salmon"){const R=s(16092263),F=s(14577751),_=s(16757914);h(g,R,[.83,.3,.35],[-.04,.91,.01]),h(g,o,[.69,.085,.3],[-.05,.82,.015]),h(g,_,[.24,.26,.3],[-.38,.91,.02]);for(const L of[-.2,-.045,.11,.25])u(g,o,[[L-.04,.845,.149],[L,.92,.18],[L+.045,1.035,.06],[L+.035,1.04,-.045],[L,.93,-.17],[L-.04,.85,-.14]],.012);for(const L of[-1,1]){h(g,a,[.036,.042,.021],[-.43,.95,L*.145+.02]),h(g,o,[.012,.012,.008],[-.435,.959,L*.157+.02]),u(g,F,[[-.31,.98,L*.14],[-.28,.91,L*.17],[-.31,.86,L*.14]],.008);const D=h(g,F,[.15,.045,.1],[-.12,.84,L*.17]);D.rotation.z=L*.3}f(g,F,[[-.13,0],[-.03,.105],[.12,0]],[-.025,1.035,-.01]);const M=l(g,"SalmonTail",[.34,.91,.01]);f(M,F,[[0,.035],[.2,.15],[.16,0],[.2,-.15],[0,-.035]],[0,0,0]);for(const L of[-1,1])u(M,_,[[.04,0,.023],[.15,L*.09,.023]],.006);return{hat:g,tail:M}}if(i==="delivery"){const R=s(16763966,.38),F=s(3181968),_=s(15070958),M=new _t(n(new ve(.5,24,12,0,Math.PI*2,0,Math.PI/2)),R);M.scale.set(1.27,.72,.92),M.position.set(0,.67,-.045),g.add(M);const L=new _t(n(new Nn(.5,.025,6,32)),F);L.rotation.x=Math.PI/2,L.scale.set(1.25,.9,1),L.position.set(0,.67,-.045),g.add(L),h(g,R,[.9,.055,.43],[0,.685,.31]),u(g,_,[[0,.7,.415],[0,.96,.23],[0,1.035,-.045],[0,.96,-.32],[0,.7,-.49]],.025);for(const I of[-1,1])u(g,F,[[I*.58,.67,-.05],[I*.57,.42,-.04],[I*.4,.26,.05]],.016),h(g,F,[.15,.025,.03],[I*.34,.88,.27]).rotation.z=I*-.4,h(t.arms[I<0?0:1],e.fabric,[.22,.27,.21],[0,-.08,0]),u(t.chest,_,[[I*.22,.12,.23],[I*.25,-.02,.26],[I*.24,-.18,.2]],.013);const D=l(g,"DeliveryMealBadge",[0,.84,.35]);h(D,F,[.2,.15,.04],[0,0,0]),f(D,o,[[-.06,-.027],[.06,-.027],[.047,.025],[-.047,.025]],[0,0,.027]),u(D,o,[[-.065,.028,.034],[.065,.028,.034]],.009),u(D,o,[[0,.04,.034],[.015,.063,.034]],.006),u(t.chest,F,[[0,.16,.28],[0,-.03,.31],[0,-.25,.2]],.009);for(const I of[-.03,-.14])u(t.chest,_,[[-.2,I,-.25],[0,I-.04,-.3],[.2,I,-.25]],.015);return{hat:g}}const v=s(15773135),m=s(13350894),p=s(16771058),S=s(14800895,.36);S.transparent=!0,S.opacity=.68,S.depthWrite=!1;for(const R of[-1,1])h(t.arms[R<0?0:1],p,[.24,.18,.23],[0,-.04,0]),u(g,c,[[R*.25,.79,.08],[R*.18,.84,.22],[0,.83,.27]],.012),d(g,.055,[R*.17,.88,.22]);d(g,.085,[0,.94,.25]),h(g,m,[.057,.075,.026],[0,.84,.275]);const x=new _t(n(new _n([new J(.49,-.385),new J(.51,-.36),new J(.45,-.29),new J(.37,-.19),new J(.3,-.1)],32)),m);x.name="FairySkirt",t.chest.add(x);const y=n(new _n([new J(.495,-.32),new J(.46,-.27),new J(.38,-.18),new J(.31,-.1)],48)),U=y.attributes.position;for(let R=0;R<U.count;R++){const F=U.getY(R),_=Math.atan2(U.getX(R),U.getZ(R)),M=Math.max(0,(-F-.1)/.22);U.setY(R,F-Math.cos(_*8)*.026*M)}y.computeVertexNormals(),t.chest.add(new _t(y,v));for(let R=0;R<8;R++){const F=R*Math.PI/4,_=u(t.chest,p,[[0,-.15,.35],[0,-.23,.43],[0,-.32,.5]],.005);_.rotation.y=F}const A=new _t(n(new Nn(.35,.016,6,32)),c);A.rotation.x=Math.PI/2,A.scale.y=.95,A.position.y=-.1,t.chest.add(A),d(t.chest,.063,[0,-.1,.355]);const T=[];for(const R of[-1,1]){const F=l(t.chest,R<0?"FairyWingLeft":"FairyWingRight",[R*.26,.03,-.24]);F.userData.side=R;const _=new Ee;_.moveTo(0,0),_.bezierCurveTo(R*.16,.36,R*.75,.42,R*.66,.15),_.bezierCurveTo(R*.62,.03,R*.3,-.04,0,0);const M=n(new nn(_,{depth:.018,bevelEnabled:!1,curveSegments:7}));F.add(new _t(M,S));const L=new _t(M,S);L.scale.set(.75,-.7,1),L.position.y=-.015,F.add(L);for(const D of[-1,1])u(F,p,[[0,0,.025],[R*.3,D*.11,.025],[R*(D>0?.59:.43),D*.17,.025]],.007);d(F,.035,[R*.48,.2,.03]),T.push(F)}return h(t.chest,v,[.16,.19,.09],[0,.06,-.31]),{hat:g,wings:T}}function vg(i,t,e,n,s,r){const o=e?1:n?.75:0;i.hat.scale.y=1-r*.78,i.hat.rotation.z=Math.sin(t*.5)*.025*o,i.tail&&(i.tail.rotation.y=Math.sin(t*1.4)*.22*o);for(const a of i.wings??[])a.visible=!s,a.scale.x=1-r*.5,a.rotation.y=a.userData.side*(.22+Math.sin(t*1.2)*.13*o)}function xg(i={geom:t=>t,material:Bl}){const{geom:t,material:e}=i,n=new kt,s=t(new Qn(1,1,1)),r=t(new ve(.5,10,6)),o=e(2476984,.65),a=e(16774877),c=e(16763989),l=(d,g,v,m)=>{const p=new _t(d,g);return p.scale.set(v[0],v[1],v[2]),p.position.set(m[0],m[1],m[2]),n.add(p),p};l(s,c,[.235,.035,.32],[0,0,.04]),l(r,o,[.25,.17,.34],[0,.07,.045]),l(s,o,[.18,.13,.16],[0,.105,-.025]),l(s,a,[.185,.035,.16],[0,.17,-.025]);const h=l(s,a,[.11,.085,.025],[0,.13,.066]);h.rotation.x=-.2;for(const d of[.095,.125,.155])l(s,c,[.095,.009,.015],[0,d,.084]);const u=new Ee;u.moveTo(.012,.06),u.lineTo(-.035,.005),u.lineTo(-.005,.005),u.lineTo(-.016,-.045),u.lineTo(.04,.025),u.lineTo(.008,.025),u.closePath();const f=t(new da(u));for(const d of[-1,1]){const g=new _t(f,c);g.position.set(d*.116,.08,.02),g.rotation.y=d*Math.PI/2,n.add(g)}return n}function Mg(i,t,e){const{geom:n,material:s,fabric:r}=e,o=n(new ve(.5,12,8)),a=s(16108652,.45),c=s(16774367),l=s(4470609),h=s(4683703),u=s(12143960),f=s(9860031),d=s(i==="prince"?6019796:i==="king"?6406813:12672923,.3),g=(L,D,I,Z)=>{const z=new _t(o,D);return z.scale.set(I[0],I[1],I[2]),z.position.set(Z[0],Z[1],Z[2]),L.add(z),z},v=(L,D,I,Z=.012)=>{const z=new pn(I.map(([V,$,B])=>new P(V,$,B))),W=new _t(n(new $e(z,12,Z,5,!1)),D);return L.add(W),W},m=new kt;m.name=`${i}Crown`,m.position.set(0,.77,-.025),t.head.add(m);const p=i==="prince"?.255:.3,S=i==="king"?.23:i==="queen"?.2:.14,x=new _t(n(new Ke(p,p,.065,24,1,!0)),a);x.scale.z=.82,x.position.y=.035,m.add(x),g(m,i==="king"?u:i==="queen"?f:h,[p*1.75,.095,p*1.45],[0,.035,0]);const y=new Ee;y.moveTo(-.075,.045),y.lineTo(.075,.045),y.quadraticCurveTo(.03,.09,.014,S),y.quadraticCurveTo(0,S+.022,-.014,S),y.quadraticCurveTo(-.03,.09,-.075,.045),y.closePath();const U=n(new nn(y,{depth:.02,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:1,curveSegments:4})),A=i==="queen"?7:6;for(let L=0;L<A;L++){const D=L*Math.PI*2/A,I=new kt;I.position.set(Math.sin(D)*p,0,Math.cos(D)*p*.82),I.rotation.y=D,m.add(I),I.add(new _t(U,a)),g(I,a,[.042,.042,.038],[0,S,.01]),g(I,d,[.044,.06,.024],[0,.044,.023])}const T=new kt;T.name=`${i}Cape`,T.position.set(0,.12,-.21),t.chest.add(T);const R=i==="prince"?h:i==="king"?u:f;R.side=Fe;const F=i==="prince"?.36:.48,_=n(new Un(.79,F,12,8)),M=_.attributes.position;for(let L=0;L<M.count;L++){const D=(F/2-M.getY(L))/F,I=M.getX(L)*(.63+D*.37);M.setXYZ(L,I,-D*F,-.05-Math.sin(D*Math.PI)*.11-Math.cos(I*16)*.012)}_.computeVertexNormals(),T.add(new _t(_,R));for(const L of[-1,1])v(T,i==="king"?c:a,[[L*.25,0,-.045],[L*.33,-F*.5,-.16],[L*.395,-F,-.05]],i==="king"?.035:.012),g(t.arms[L<0?0:1],r,[.23,.22,.22],[0,-.06,0]),g(t.chest,i==="king"?c:a,[.2,.075,.14],[L*.2,.17,.21]);if(v(T,i==="king"?c:a,[[-.395,-F,-.05],[0,-F-.014,-.06],[.395,-F,-.05]],i==="king"?.028:.012),g(T,a,[.16,.18,.018],[0,-.21,-.174]),g(T,d,[.08,.1,.018],[0,-.21,-.19]),i==="king"){for(const L of[-.18,-.06,.06,.18])g(T,c,[.12,.09,.07],[L,-.005,-.065]),g(T,l,[.018,.03,.012],[L,-.015,-.106]);v(t.chest,a,[[-.2,.16,.25],[0,.015,.326],[.2,.16,.25]],.014),g(t.chest,a,[.19,.065,.02],[0,-.18,.28]),g(t.chest,d,[.05,.06,.025],[0,-.18,.296])}else if(i==="prince"){v(t.chest,c,[[-.23,.15,.23],[0,-.02,.326],[.23,-.19,.22]],.037);for(const L of[.07,-.035,-.14])g(t.chest,a,[.035,.035,.02],[-.1,L,.312-Math.abs(L)*.15]);g(t.chest,a,[.11,.13,.025],[.14,.07,.28]),g(t.chest,d,[.055,.07,.025],[.14,.07,.3])}else{const L=new _t(n(new _n([new J(.47,-.385),new J(.49,-.36),new J(.43,-.27),new J(.36,-.17),new J(.3,-.1)],32)),r);L.name="QueenSkirt",t.chest.add(L);for(const D of[-1,1]){const I=g(t.chest,f,[.25,.21,.07],[D*.27,-.23,.32]);I.rotation.z=D*-.35,v(t.chest,a,[[D*.16,-.13,.31],[D*.28,-.23,.36],[D*.38,-.34,.31]],.009)}for(let D=0;D<9;D++){const I=(D-4)*.034;g(t.chest,c,[.035,.035,.027],[I,.085+Math.abs(I)*.5,.302-Math.abs(I)*.15])}g(t.chest,a,[.075,.1,.025],[0,.015,.322]),g(t.chest,d,[.045,.065,.025],[0,.015,.34])}return{crown:m,cape:T}}function yg(i,t,e,n,s){i.crown.scale.y=1-s*.78,i.crown.rotation.z=e?Math.sin(t*.5)*.018:0,i.cape.visible=!n,i.cape.rotation.x=e?-.035+Math.sin(t)*.025:0,i.cape.rotation.z=e?Math.sin(t*.5)*.035:0}function Sg(i={geom:t=>t,material:Bl}){const{geom:t,material:e}=i,n=new kt;n.name="TurtleForm";const s=t(new ve(.5,16,10)),r=e(9353311),o=e(4026441),a=e(6460238),c=e(15062935),l=e(2374450),h=(p,S,x,y)=>{const U=new _t(s,S);return U.scale.set(x[0],x[1],x[2]),U.position.set(y[0],y[1],y[2]),U.castShadow=!0,p.add(U),U},u=(p,S,x,y)=>{const U=new pn(x);p.add(new _t(t(new $e(U,12,y,5,!1)),S))};h(n,c,[.76,.17,.8],[0,.17,-.04]),h(n,a,[.84,.58,.88],[0,.34,-.05]).name="TurtleShell";const f=new _t(t(new Nn(.405,.028,6,32)),c);f.rotation.x=Math.PI/2,f.scale.y=1.05,f.position.set(0,.25,-.05),n.add(f);const d=(p,S)=>new P(p,.34+.29*Math.sqrt(Math.max(.01,1-(p/.42)**2-(S/.44)**2))+.007,S-.05),g=[];for(let p=0;p<=6;p++){const S=p*Math.PI/3,x=Math.cos(S)*.2,y=Math.sin(S)*.2;g.push(d(x,y)),p<6&&u(n,o,[d(x,y),d(x*1.5,y*1.5),d(x*2,y*2)],.009)}u(n,o,g,.01);const v=new kt;v.name="TurtleHead",v.position.set(0,.32,.46),n.add(v),h(v,r,[.31,.28,.33],[0,0,0]),h(v,c,[.23,.07,.22],[0,-.08,.05]);for(const p of[-1,1])h(v,l,[.034,.052,.025],[p*.105,.045,.12]),h(v,c,[.011,.016,.009],[p*.103,.058,.132]),h(v,e(14064507),[.05,.025,.015],[p*.125,-.018,.1]);u(v,o,[new P(-.04,-.045,.155),new P(0,-.055,.163),new P(.04,-.045,.155)],.005);const m=[];for(const p of[-1,1])for(const S of[-1,1]){const x=new kt;x.name=`TurtleLeg${p}/${S}`,x.position.set(p*.31,.075,S*.24-.035),x.userData.step=p*S,h(x,r,[.26,.14,.27],[p*.035,0,S*.015]),n.add(x),m.push(x)}return h(n,r,[.12,.11,.23],[0,.17,-.53]),{root:n,head:v,legs:m}}function Eg(i,t,e,n){i.root.scale.y=n?.62:1,i.head.position.y=.32+(e?Math.sin(t*2)*.009:0);for(const s of i.legs)s.rotation.y=e?Math.sin(t+s.userData.step*Math.PI/2)*.23:0}const Hl={hop:1.05,doubleHop:1.25,sway:1.2,wiggle:1.3,spinHop:1.2,spinBack:1.2},wg={wave:"hop",clap:"doubleHop",lookout:"spinHop",hero:"spinBack",relief:"sway",dance:"wiggle"};function bg(i,t){const e=Math.max(0,Math.min(1,t/Hl[i]));let n=0,s=0,r=0,o=0,a=0;const c=Math.sin(Math.PI*e);if(i==="sway"||i==="wiggle")a=Math.sin(e*Math.PI*(i==="wiggle"?4:2))*c*(i==="wiggle"?.4:.32);else{const l=i==="doubleHop"?2:1,h=e===1?1:e*l%1,u=h<.16?Math.sin(Math.PI*h/.16):0,f=Math.max(0,Math.min(1,(h-.16)/.67));n=4*f*(1-f)*(l===2?.13:.23);const d=h>.83?Math.sin(Math.PI*(h-.83)/.17):0;o=u*.045+d*.03,(i==="spinHop"||i==="spinBack")&&(s=f*f*(3-2*f)*Math.PI*2*(i==="spinBack"?-1:1))}return{lift:n,yaw:s,roll:r,squash:o,headYaw:a}}class Kg{constructor(){ut(this,"elapsed",0);ut(this,"index",0);ut(this,"delay",2.4)}reset(t=0){this.elapsed=0,this.index=t%3,this.delay=2.4}afterPreview(t){this.reset(t==="hop"||t==="doubleHop"?1:t==="sway"||t==="wiggle"?2:0)}update(t,e){if(this.elapsed+=Math.max(0,t),this.elapsed+1e-8<this.delay)return null;this.elapsed=0;const n=this.index;return this.index=(this.index+1)%3,this.delay=[2.7,2.3,2.6][n],n===0?e==="clap"?"doubleHop":"hop":n===1?e==="dance"?"wiggle":"sway":e==="hero"?"spinBack":"spinHop"}}const Tg={omega:0,smirk:0,open:0,o:0,frown:0,gape:0,flat:0},fn=(i,t,e,n,s)=>({browShow:i,browL:t,browR:e,eyeOpen:n,mouth:{...Tg,...s}}),Ag={default:fn(0,0,0,1,{omega:1}),smirk:fn(1,.55,-.18,.9,{smirk:1}),surprise:fn(1,.4,.4,1.55,{o:1}),laugh:fn(.5,.25,.25,.35,{open:1}),angry:fn(1,-.55,-.55,.75,{frown:1}),hit:fn(1,.65,-.35,1.5,{gape:1}),dead:fn(0,0,0,0,{flat:1})},Zc={phase:0,legAmp:0,armAmp:0,elbow:.08,knee:0,pitch:0,leanZ:0,tuck:0,armRaise:0,armSplay:-.4,bounce:0,hipDip:0,headPitch:0,headRoll:0,slide:0,twist:0,flightPitch:0},Rg=.46;class $g{constructor(t,e={}){ut(this,"root",new kt);ut(this,"hips",new kt);ut(this,"spine",new kt);ut(this,"chest",new kt);ut(this,"neck",new kt);ut(this,"head",new kt);ut(this,"tail",new kt);ut(this,"shoulderL",new kt);ut(this,"shoulderR",new kt);ut(this,"upperArmL",new Ue);ut(this,"upperArmR",new Ue);ut(this,"lowerArmL",new Ue);ut(this,"lowerArmR",new Ue);ut(this,"handL",new Ue);ut(this,"handR",new Ue);ut(this,"upperLegL",new Ue);ut(this,"upperLegR",new Ue);ut(this,"lowerLegL",new Ue);ut(this,"lowerLegR",new Ue);ut(this,"footL",new Ue);ut(this,"footR",new Ue);ut(this,"earL",new kt);ut(this,"earR",new kt);ut(this,"browL",new kt);ut(this,"browR",new kt);ut(this,"eyeL",new kt);ut(this,"eyeR",new kt);ut(this,"eyeMeshL");ut(this,"eyeMeshR");ut(this,"squeezedEyes",[]);ut(this,"mouths",new Map);ut(this,"jetpack",new kt);ut(this,"shieldBubble");ut(this,"skin");ut(this,"mats",[]);ut(this,"geoms",[]);ut(this,"disposables",[]);ut(this,"textures",[]);ut(this,"skeletons",[]);ut(this,"anim","idle");ut(this,"expression","default");ut(this,"weights",{default:1,smirk:0,surprise:0,laugh:0,angry:0,hit:0,dead:0});ut(this,"faceNow",fn(0,0,0,1,{omega:1}));ut(this,"pose",{...Zc});ut(this,"time",0);ut(this,"deathTime",0);ut(this,"deathCause","other");ut(this,"reaction",null);ut(this,"reactionTime",0);ut(this,"reactionDuration",.8);ut(this,"landingCooldown",0);ut(this,"idleMotion",null);ut(this,"idleMotionTime",0);ut(this,"blinkT",2);ut(this,"blink",0);ut(this,"elasticEars");ut(this,"clothLabel");ut(this,"label");ut(this,"seasonalRig");ut(this,"dailyRig");ut(this,"playfulRig");ut(this,"jumpBoots",[]);ut(this,"royalRig");ut(this,"turtleRig");ut(this,"turtleOn",!1);ut(this,"riding",!1);ut(this,"earSprings",[{bend:0,velocity:0},{bend:0,velocity:0}]);ut(this,"faceSurface",Yc);ut(this,"eyeSize",1);this.skin=t,this.elasticEars=e.elasticEars??!1,this.clothLabel=e.clothLabel??!1,this.root.name="Root",this.createModel()}get hipHeight(){return(this.skin.character??"bear")==="bear"?.5:Rg}createModel(){this.build(this.skin)}M(t,e=.9){const n=new is({color:t,roughness:e,metalness:.02});return this.mats.push(n),n}geom(t){return this.geoms.push(t),t}build(t){const e=t.character??"bear";this.faceSurface=e==="mole"?lg:e==="dog"?ug:Yc,this.eyeSize=e==="mole"?.72:e==="dog"?.82:1;const n=this.faceSurface,s=fg();this.textures.push(s);const r=new $m({color:t.fur,roughness:1,metalness:0,map:e==="bear"?null:s,bumpMap:s,bumpScale:.022,sheen:.7,sheenRoughness:1,sheenColor:new Ht(e==="bear"?16777215:15132645)});this.mats.push(r);const o=t.outfit===t.fur?r:new is({color:t.outfit,roughness:.96,metalness:0,map:s,bumpMap:s,bumpScale:.012});o!==r&&this.mats.push(o);const a=this.M(t.accent,.95),c=this.M(1055778,1);c.metalness=0;const l=this.M(13469584,.95),h=this.geom(new ve(.5,20,12)),u=(B,N,j,lt,X=0,Q=0,pt=0)=>{const ct=new _t(h,B);return ct.scale.set(N,j,lt),ct.position.set(X,Q,pt),ct};this.hips.name="Hips",this.hips.position.set(0,this.hipHeight,0),this.root.add(this.hips),this.spine.name="Spine",this.spine.position.set(0,.02,0),this.hips.add(this.spine),this.chest.name="Chest",this.chest.position.set(0,.05,0),this.spine.add(this.chest),this.neck.name="Neck",this.neck.position.set(0,.18,0),this.chest.add(this.neck),this.head.name="Head",this.head.position.set(0,.04,0),this.neck.add(this.head);const f=this.geom(new ve(.5,32,24)),d=f.attributes.position;for(let B=0;B<d.count;B++){const N=d.getY(B),j=1-.13*N;d.setXYZ(B,d.getX(B)*j,N,d.getZ(B)*j)}f.computeVertexNormals();const g=new _t(f,o);g.name="PlushBody",g.scale.set(e==="dog"?.72:.8,e==="dog"?.54:.62,.58),g.position.set(0,-.045,.005),g.visible=e!=="mole",this.chest.add(g);const v=e==="mole"?cg():e==="dog"?hg():ag(),m=new _t(this.geom(v),r);m.name="PlushHead",this.head.add(m);const p=e==="dog"?this.M(1579035,.98):r;for(const[B,N]of[[-1,this.earL],[1,this.earR]]){if(N.name=B<0?"LeftEar":"RightEar",N.visible=e!=="mole",e==="dog"){N.position.set(B*.39,.745,.055);const j=u(p,.29,.16,.16,B*.02);j.rotation.z=-B*.26,N.add(j)}else{const j=this.elasticEars?.055:0;N.position.set(B*.35,.731-j,-.055),N.rotation.z=this.elasticEars?0:-B*.22,N.add(u(r,.16,.17,.105,0,j))}this.head.add(N)}e==="dog"&&this.buildDogFaceDetails(c,n);for(const[B,N]of[[-1,this.eyeL],[1,this.eyeR]]){N.name=B<0?"LeftEye":"RightEye";const j=B*(e==="dog"?.15:e==="mole"?.12:.105),lt=.5;N.position.set(j,lt,n(j,lt)+.006),N.rotation.set(-.32,B*.15,B*.1);const X=u(c,.068,.074,.013);N.add(X),this.head.add(N),B<0?this.eyeMeshL=X:this.eyeMeshR=X}for(const B of[-1,1]){const N=new kt;N.name=B<0?"SqueezedLeftEye":"SqueezedRightEye";const j=B*.16,lt=B*.09;N.position.set(B*.125,.5,n(B*.125,.5));for(const X of[.565,.435]){const Q=new Cl(new P(j-N.position.x,X-.5,n(j,X)+.014-N.position.z),new P(lt-N.position.x,0,n(lt,.5)+.014-N.position.z));N.add(new _t(this.geom(new $e(Q,8,.014,6,!1)),c))}N.visible=!1,this.squeezedEyes.push(N),this.head.add(N)}for(const[B,N]of[[-1,this.browL],[1,this.browR]])N.name=B<0?"LeftBrow":"RightBrow",N.position.set(B*.12,.635,n(B*.12,.635)+.008),N.add(u(c,.09,.019,.012)),N.visible=!1,this.head.add(N);const S=new Ee;S.moveTo(-.044,.385),S.bezierCurveTo(-.05,.41,.045,.41,.045,.38),S.bezierCurveTo(.041,.353,.019,.317,0,.305),S.bezierCurveTo(-.018,.318,-.035,.35,-.044,.385);const x=this.geom(new nn(S,{depth:.003,bevelEnabled:!0,bevelThickness:.003,bevelSize:.004,bevelSegments:2,curveSegments:10})),y=x.attributes.position;for(let B=0;B<y.count;B++){const N=e==="dog"?y.getX(B)*.65:y.getX(B),j=e==="dog"?.32+(y.getY(B)-.355)*.7:y.getY(B);y.setXYZ(B,N,j,y.getZ(B)+n(N,j)+(e==="dog"?.012:.004))}x.computeVertexNormals();const U=new _t(x,c);U.name="EmbroideredNose",U.visible=e!=="mole",this.head.add(U);const A=new kt;A.name="Mouth",A.position.set(0,.25,n(0,.25)),this.head.add(A);const T=(B,N=.017)=>{const j=new pn(B.map(([X,Q])=>new P(X,Q,n(X,Q+.25)-n(0,.25)+.007))),lt=this.geom(new $e(j,24,N,8,!1));return new _t(lt,c)},R=new kt;R.name="OmegaMouth",e==="mole"?(R.add(u(c,.12,.034,.018,0,.022,.012)),R.add(u(c,.05,.042,.018,0,.048,.014))):e==="dog"?(R.add(T([[0,.052],[0,.018],[0,-.011]],.014)),R.add(T([[-.085,.014],[-.067,-.014],[-.039,-.022],[0,.008],[.039,-.022],[.067,-.014],[.085,.014]],.014))):(R.add(T([[0,.065],[0,.028],[0,-.005]],.018)),R.add(T([[-.108,.012],[-.088,-.015],[-.061,-.023],[-.03,-.015],[0,.012],[.03,-.015],[.061,-.023],[.088,-.015],[.108,.012]],.019)));const F=this.geom(new ve(.5,8,6)),_=e==="dog"?.085:.108;for(const B of[-_,_]){const N=new _t(F,c);N.scale.set(.037,.037,.025),N.position.set(B,.012,n(B,.262)-n(0,.25)+.007),N.visible=e!=="mole",R.add(N)}const M=new kt;M.add(T([[-.1,-.004],[-.05,-.024],[.01,-.014],[.07,.002],[.105,.042]]));const L=new kt;L.add(u(c,.18,.12,.019,0,-.025,.009)),L.add(u(l,.09,.035,.012,0,-.06,.02));const D=new kt;D.add(u(c,.073,.095,.02,0,-.025,.008));const I=new kt;I.add(T([[-.09,-.025],[-.045,.001],[0,.013],[.045,.001],[.09,-.025]],.014));const Z=new kt;Z.add(u(c,.16,.15,.022,0,-.035,.008)),Z.add(u(l,.085,.035,.012,0,-.08,.022));const z=new kt;z.add(T([[-.065,-.035],[0,-.035],[.065,-.035]],.015));for(const[B,N]of[["omega",R],["smirk",M],["open",L],["o",D],["frown",I],["gape",Z],["flat",z]])N.visible=B==="omega",this.mouths.set(B,N),A.add(N);const W=(B,N,j,lt,X)=>{const Q=new mm(this.geom(lt),X);Q.name=`${B.name}Plush`,B.add(Q),this.root.updateMatrixWorld(!0);const pt=new aa([B,N,j]);Q.bind(pt),this.skeletons.push(pt),Q.frustumCulled=!1},V=(B,N,j,lt,X)=>{const Q=B<0?"Left":"Right";if(N.name=`${Q}Shoulder`,N.position.set(B*(e==="mole"?.59:e==="dog"?.43:.35),e==="mole"?-.07:e==="dog"?.005:.115,0),e==="dog"){const pt=u(r,.14,.12,.15,-B*.055,.01);pt.name=`${Q}ShoulderSeam`,N.add(pt)}j.name=`${Q}UpperArm`,lt.name=`${Q}LowerArm`,lt.position.set(0,-.14,0),X.name=`${Q}Hand`,X.position.set(0,-.115,0),j.add(lt),lt.add(X),N.add(j),this.chest.add(N),W(j,lt,X,eo(e==="mole"?.19:e==="dog"?.12:.115,e==="mole"?.28:e==="dog"?.26:.38,e==="mole"?.19:e==="dog"?.14:.135,.15,e==="dog"?.22:.295),r)};V(-1,this.shoulderL,this.upperArmL,this.lowerArmL,this.handL),V(1,this.shoulderR,this.upperArmR,this.lowerArmR,this.handR);const $=(B,N,j,lt)=>{const X=B<0?"Left":"Right";N.name=`${X}UpperLeg`,N.rotation.y=B*.06,N.position.set(B*(e==="mole"?.19:.14),-.175,0),j.name=`${X}LowerLeg`,j.position.set(0,e==="bear"?-.13:-.115,0),lt.name=`${X}Foot`,lt.position.set(0,e==="bear"?-.17:-.15,0),N.add(j),j.add(lt),this.hips.add(N);const Q=e==="bear"?eo(.205,.35,.195,.135,.245):eo(e==="dog"?.2:.235,e==="dog"?.25:.31,.22,.12,e==="dog"?.19:.21);W(N,j,lt,Q,e==="mole"?a:r)};$(-1,this.upperLegL,this.lowerLegL,this.footL),$(1,this.upperLegR,this.lowerLegR,this.footR),this.tail.name="Tail",this.tail.position.set(0,-.19,-.27),this.tail.add(u(r,.16,.16,.135)),this.tail.visible=e!=="mole",this.hips.add(this.tail),this.buildAccessory(t,o,a,h),this.buildAttachments(e),this.clothLabel&&(this.label=new dg,this.chest.add(this.label.root)),this.root.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!1)}),this.applyFace()}buildDogFaceDetails(t,e){const r=[0,.265,e(0,.265)+.006],o=[];for(let u=1;u<=8;u++){const f=u/8;for(let d=0;d<48;d++){const g=d/48*Math.PI*2,v=Math.cos(g)*.19*f,m=.265+Math.sin(g)*.145*f;r.push(v,m,e(v,m)+.006);const p=(d+1)%48;if(u===1)o.push(0,1+d,1+p);else{const S=1+(u-2)*48,x=1+(u-1)*48;o.push(S+d,x+d,S+p,S+p,x+d,x+p)}}}const a=this.geom(new he);a.setAttribute("position",new Wt(r,3)),a.setIndex(o),a.computeVertexNormals();const c=new _t(a,this.M(9999763,.98));this.head.add(c);const l=(u,f,d)=>{const g=new pn(u.map(([v,m])=>new P(v,m,e(v,m)+.014)));this.head.add(new _t(this.geom(new $e(g,24,d,7,!1)),f))};l([[-.18,.29],[-.16,.35],[-.09,.395],[0,.41],[.09,.395],[.16,.35],[.18,.29]],t,.011);const h=this.M(7888730,.98);for(const u of[-1,1]){for(let f=0;f<3;f++){const d=u*(.32+f*.055);l([[d-u*.008,.34],[d,.315],[d+u*.006,.29]],h,.009)}for(const f of[0,.065]){const d=[[u*.085,.645+f],[u*.16,.68+f],[u*.25,.665+f]];l(d,t,.01)}}}buildAccessory(t,e,n,s){if(t.accessory==="prince"||t.accessory==="king"||t.accessory==="queen"){this.royalRig=Mg(t.accessory,{head:this.head,chest:this.chest,arms:[this.upperArmL,this.upperArmR]},{geom:l=>this.geom(l),material:(l,h)=>this.M(l,h),fabric:e});return}if(t.accessory==="eel"||t.accessory==="salmon"||t.accessory==="delivery"||t.accessory==="fairy"){this.playfulRig=_g(t.accessory,{head:this.head,chest:this.chest,arms:[this.upperArmL,this.upperArmR]},{geom:l=>this.geom(l),material:(l,h)=>this.M(l,h),fabric:e});return}if(t.accessory==="none")return;if(t.accessory==="commuter"||t.accessory==="duck"||t.accessory==="barista"){this.dailyRig=mg(t.accessory,{head:this.head,chest:this.chest,arms:[this.upperArmL,this.upperArmR]},{geom:l=>this.geom(l),material:(l,h)=>this.M(l,h),texture:l=>{this.textures.push(l)},fabric:e});return}if(t.accessory==="witch"||t.accessory==="santa"){this.seasonalRig=pg(t.accessory,{head:this.head,chest:this.chest,upperArms:[this.upperArmL,this.upperArmR],lowerArms:[this.lowerArmL,this.lowerArmR]},{geom:l=>this.geom(l),material:(l,h)=>this.M(l,h),fabric:e});return}const r=(l,h,u,f)=>{const d=new _t(s,h);return d.scale.set(...u),d.position.set(...f),l.add(d),d},o=(l,h,u,f=.012)=>{const d=new pn(u.map(([v,m,p])=>new P(v,m,p))),g=new _t(this.geom(new $e(d,Math.max(16,u.length*5),f,6,!1)),h);return l.add(g),g},a=(l,h,u,f,d,g=1)=>{const v=new _t(this.geom(new Nn(u,f,10,32)),h);return v.rotation.x=Math.PI/2,v.scale.z=g,v.position.set(...d),l.add(v),v},c=l=>{for(const h of[this.upperArmL,this.upperArmR])r(h,e,[.22,.32,.21],[0,-.095,0]);for(const h of[this.lowerArmL,this.lowerArmR])r(h,l,[.21,.09,.2],[0,-.12,0])};if(t.accessory==="cap"){const l=this.M(9845300,.98),h=this.M(16375726,.96);c(l),r(this.chest,e,[.72,.48,.34],[0,.27,-.17]),a(this.chest,l,.31,.027,[0,-.19,0],.78),r(this.chest,l,[.5,.2,.07],[0,-.14,.28]),o(this.chest,h,[[-.17,-.11,.319],[-.12,-.08,.322],[.12,-.08,.322],[.17,-.11,.319]],.009);for(const f of[-1,1])r(this.chest,l,[.22,.13,.14],[f*.17,.19,.2]),o(this.chest,h,[[f*.11,.17,.31],[f*.12,.06,.327],[f*.13,-.035,.32]],.012),r(this.chest,n,[.035,.045,.035],[f*.13,-.045,.33]);const u=new _t(this.geom(new ve(.5,28,16,0,Math.PI*2,0,Math.PI/2)),n);u.scale.set(1.16,.61,.98),u.position.set(0,.67,-.05),this.head.add(u),r(this.head,l,[.78,.055,.48],[0,.658,.43]),r(this.head,n,[.76,.07,.46],[0,.681,.43]),r(this.head,l,[.18,.12,.025],[0,.758,.438]),r(this.head,h,[.09,.09,.03],[0,.762,.458])}else if(t.accessory==="headphones"){const l=this.M(t.shoe,.78),h=this.M(2862507,.96),u=this.M(10352621,.4);u.emissive.setHex(2386800),u.emissiveIntensity=.45,c(l);for(const f of[-1,1]){const d=r(this.chest,h,[.18,.09,.025],[f*.2,-.13,.245]);d.rotation.z=f*.16,o(this.chest,u,[[f*.26,.12,.21],[f*.28,.03,.23]],.014),o(this.chest,u,[[f*.13,-.095,.265],[f*.23,-.1,.26],[f*.29,-.12,.225]],.011),r(f<0?this.upperArmL:this.upperArmR,n,[.24,.055,.23],[0,-.09,0])}o(this.chest,u,[[0,.17,.23],[0,.02,.3],[0,-.18,.26]],.013),r(this.chest,n,[.05,.08,.035],[0,.04,.34]),o(this.head,l,[[-.6,.28,-.035],[-.53,.67,-.055],[-.31,.91,-.065],[0,.97,-.07],[.31,.91,-.065],[.53,.67,-.055],[.6,.28,-.035]],.06),o(this.head,u,[[-.5,.74,-.04],[-.28,.93,-.05],[0,.99,-.055],[.28,.93,-.05],[.5,.74,-.04]],.017);for(const f of[-1,1])r(this.head,l,[.21,.35,.28],[f*.61,.27,-.015]),r(this.head,n,[.085,.22,.2],[f*.72,.27,-.015]),r(this.head,u,[.04,.11,.105],[f*.75,.27,-.015])}else if(t.accessory==="scarf"){const l=this.M(t.shoe,.96),h=this.M(12629704,.94);c(l),a(this.chest,l,.3,.08,[0,.19,.015],.8);const u=new Ee;u.moveTo(.11,.17),u.quadraticCurveTo(.22,.15,.27,.06),u.lineTo(.33,-.2),u.lineTo(.22,-.26),u.lineTo(.11,-.08),u.quadraticCurveTo(.07,.07,.11,.17);const f=new _t(this.geom(new nn(u,{depth:.025,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:2})),l);f.position.z=.305,this.chest.add(f),o(this.chest,h,[[.17,.1,.345],[.21,-.035,.35],[.27,-.2,.344]],.008);const d=r(this.chest,l,[.13,.59,.07],[.015,-.04,.305]);d.rotation.z=-.48,r(this.chest,n,[.11,.08,.04],[.11,-.15,.344]),a(this.chest,l,.32,.025,[0,-.18,0],.77),o(this.head,l,[[-.48,.65,.2],[-.28,.68,.35],[0,.69,.405],[.28,.68,.35],[.48,.65,.2]],.055),r(this.head,n,[.11,.11,.03],[0,.69,.46]),r(this.head,h,[.045,.045,.038],[0,.69,.478])}else if(t.accessory==="nightcap"){const l=this.M(t.shoe,.98);c(l);for(const m of[this.upperLegL,this.upperLegR])r(m,e,[.25,.19,.24],[0,-.07,0]),r(m,l,[.24,.055,.23],[0,-.15,0]);for(const m of[-1,1]){const p=r(this.chest,l,[.28,.11,.14],[m*.14,.2,.23]);p.rotation.z=m*.28}r(this.chest,l,[.07,.44,.05],[0,-.035,.305]);for(const m of[.1,-.005,-.11])r(this.chest,n,[.045,.045,.034],[0,m,.34]);r(this.chest,l,[.17,.14,.038],[-.2,-.13,.24]);const h=new _t(this.geom(new Nn(.055,.013,8,20,Math.PI*1.45)),n);h.rotation.z=.75,h.position.set(-.2,-.13,.272),this.chest.add(h);const u=[];for(let m=0;m<=16;m++){const p=m/16;u.push(new J(.42*Math.pow(1-p,.72),p*.53))}const f=this.geom(new _n(u,32)),d=f.attributes.position;for(let m=0;m<d.count;m++){const p=d.getY(m)/.53;d.setXYZ(m,d.getX(m)+p*p*.4,d.getY(m),d.getZ(m)-p*p*.1)}f.computeVertexNormals();const g=this.M(t.outfit,.98);g.side=Fe;const v=new _t(f,g);v.position.set(0,.75,-.08),this.head.add(v),a(this.head,l,.42,.065,[0,.76,-.07],.9),r(this.head,n,[.2,.2,.2],[.4,1.28,-.18])}}buildAttachments(t){this.jetpack.position.z=t==="mole"?-.32:t==="dog"?-.21:0;const e=this.M(8950432,.4),n=this.M(3356735,.8);for(const r of[-1,1]){const o=new _t(sg,e);o.scale.set(.18,.44,.18),o.position.set(r*.15,.18,-.36),this.jetpack.add(o)}const s=new _t(zl,n);s.scale.set(.46,.1,.08),s.position.set(0,.28,-.32),this.jetpack.add(s),this.jetpack.visible=!1,this.chest.add(this.jetpack),this.shieldBubble=new _t(this.geom(new ve(.95,20,14)),new ia({color:8378623,transparent:!0,opacity:.25,depthWrite:!1,fog:!1})),this.disposables.push(this.shieldBubble.material),this.shieldBubble.position.y=.8,this.shieldBubble.visible=!1,this.root.add(this.shieldBubble)}setPosition(t,e,n){this.root.position.set(t,e,n)}setRotation(t,e,n){this.root.rotation.set(t,e,n)}playAnimation(t){t!=="idle"&&this.clearIdleMotion(),t==="dead"&&this.anim!=="dead"&&(this.deathTime=0),t!=="dead"&&(this.deathTime=0),this.anim=t}react(t){if(t==="wave"||t==="lookout"||t==="hero"||t==="dance"||t==="clap"||t==="relief"&&this.anim==="idle"){this.playIdleMotion(wg[t]);return}this.anim==="dead"||t==="land"&&this.landingCooldown>0||this.reaction==="combo"&&(t==="land"||t==="close")||(this.reaction=t,this.reactionTime=0,this.reactionDuration=t==="takeoff"?2.6:["wave","lookout","hero","relief","dance","clap"].includes(t)?1.6:t==="combo"?.9:t==="land"?.65:.8,t==="land"&&(this.landingCooldown=.85))}setDeathCause(t){this.deathCause=t==="low"||t==="overhead"?t:"other",this.reaction=null}clearReactions(){this.clearIdleMotion(),this.reaction=null,this.reactionTime=this.landingCooldown=0,this.deathCause="other"}playIdleMotion(t){this.anim==="idle"&&(this.reaction=null,this.idleMotion=t,this.idleMotionTime=0)}clearIdleMotion(){this.idleMotion=null,this.idleMotionTime=0}get deathProgress(){if(this.anim!=="dead")return 0;const t=Qe((this.deathTime-.12)/.9,0,1);return t*t*(3-2*t)}get deathPoseComplete(){return this.anim==="dead"&&this.deathTime>=1.02}get previewHintHeight(){return this.seasonalRig?2.12:this.royalRig?2:1.78}setExpression(t){this.expression=t}setJetpack(t){this.jetpack.visible=t}setJumpBoots(t){if(t&&!this.jumpBoots.length)for(const[e,n]of[this.footL,this.footR].entries()){const s=xg({geom:r=>this.geom(r),material:(r,o)=>this.M(r,o)});s.name=e===0?"JumpBootLeft":"JumpBootRight",n.add(s),this.jumpBoots.push(s)}for(const e of this.jumpBoots)e.visible=t}setShield(t,e=0){this.shieldBubble.visible=t,this.shieldBubble.position.y=this.turtleOn?.36:.8,t&&this.shieldBubble.scale.setScalar((this.turtleOn?.6:1)*(1+Math.sin(e*.008)*.05))}setTurtle(t){t&&!this.turtleRig&&(this.turtleRig=Sg({geom:e=>this.geom(e),material:(e,n)=>this.M(e,n)}),this.root.add(this.turtleRig.root)),this.turtleOn=t,this.hips.visible=!t,this.turtleRig&&(this.turtleRig.root.visible=t)}setSkin(t){const e=this.root.position.clone(),n=this.root.rotation.clone();this.teardown(),this.skin=t,this.build(t),this.root.position.copy(e),this.root.rotation.copy(n)}setRiding(t){this.riding!==t&&(this.riding=t,this.applyPose(),this.applyDogArmClearance(),t&&this.applyRidingPose())}triangleCount(){let t=0;return this.root.traverse(e=>{const n=e;if(n.isMesh&&n.geometry){const s=n.geometry;t+=s.index?s.index.count/3:s.attributes.position.count/3}}),Math.round(t)}update(t,e){this.time+=t,this.landingCooldown=Math.max(0,this.landingCooldown-t),this.reaction&&(this.reactionTime+=t,this.reactionTime>=this.reactionDuration&&(this.reaction=null)),this.updateExpression(t),this.updatePose(t,e),this.applyPose(),this.elasticEars&&this.updateEarSprings(t,e.speedNorm),this.applyReaction(),this.applyIdleMotion(t),this.applyDogArmClearance(),this.riding&&!this.turtleOn&&this.anim!=="dead"&&this.applyRidingPose(),this.label?.update(t,this.pose.phase,this.anim==="run"),this.applyFace()}dispose(){this.teardown()}teardown(){this.seasonalRig=void 0,this.dailyRig=void 0,this.playfulRig=void 0,this.jumpBoots=[],this.royalRig=void 0,this.turtleRig=void 0,this.turtleOn=!1,this.hips.visible=!0,this.label?.dispose(),this.label=void 0;for(const t of[...this.root.children])this.root.remove(t);for(const t of[this.hips,this.spine,this.chest,this.neck,this.head,this.tail,this.shoulderL,this.shoulderR,this.upperArmL,this.upperArmR,this.lowerArmL,this.lowerArmR,this.handL,this.handR,this.upperLegL,this.upperLegR,this.lowerLegL,this.lowerLegR,this.footL,this.footR,this.earL,this.earR,this.browL,this.browR,this.eyeL,this.eyeR,this.jetpack])t.clear(),t.rotation.set(0,0,0),t.scale.set(1,1,1);for(const t of this.skeletons)t.dispose();for(const t of this.textures)t.dispose();this.skeletons=[],this.textures=[];for(const t of this.geoms)t.dispose();for(const t of this.mats)t.dispose();for(const t of this.disposables)t.dispose();this.geoms=[],this.mats=[],this.disposables=[],this.mouths.clear(),this.squeezedEyes=[],this.deathTime=0,this.clearReactions();for(const t of this.earSprings)t.bend=0,t.velocity=0;this.root.add(this.hips)}updateExpression(t){for(const n of Object.keys(this.weights))this.weights[n]=_e(this.weights[n],n===this.expression?1:0,12,t);const e=fn(0,0,0,0,{});for(const n of Object.keys(this.weights)){const s=this.weights[n];if(s<.001)continue;const r=Ag[n];e.browShow+=r.browShow*s,e.browL+=r.browL*s,e.browR+=r.browR*s,e.eyeOpen+=r.eyeOpen*s;for(const o of Object.keys(e.mouth))e.mouth[o]+=r.mouth[o]*s}this.faceNow=e,this.blinkT-=t,this.blinkT<=0&&(this.blink=.12,this.blinkT=2+Math.random()*3.5),this.blink=Math.max(0,this.blink-t)}applyFace(){const t=this.faceNow,e=Qe(this.weights.dead,0,1),n=this.blink>0?.12:1,s=Qe(t.eyeOpen*n,.08,1.8);this.eyeMeshL.scale.set(.068*this.eyeSize*(1-e),.08*this.eyeSize*s*(1-e),.013),this.eyeMeshR.scale.set(.068*this.eyeSize*(1-e),.08*this.eyeSize*s*(1-e),.013);for(const r of this.squeezedEyes)r.visible=e>.03,r.scale.setScalar(Math.max(.001,e));for(const[r,o]of[[this.browL,t.browL],[this.browR,t.browR]])r.visible=t.browShow>.03,r.rotation.z=(r===this.browL?1:-1)*o*.6,r.position.y=.635+Math.max(0,o)*.05*t.browShow,r.position.z=this.faceSurface(r.position.x,r.position.y)+.008,r.scale.setScalar(Qe(t.browShow,.001,1));for(const[r,o]of this.mouths){const a=Qe(t.mouth[r],0,1.2);o.visible=a>.02,o.scale.setScalar(Math.max(.001,a))}}updatePose(t,e){const n=this.pose,s={...Zc},r=e.speedNorm;switch(this.anim==="dead"&&(this.deathTime+=t),this.anim){case"idle":s.elbow=.06;break;case"run":{const c=this.skin.character??"bear",l=(9+r*7)*(c==="mole"?1.3:c==="dog"?.88:1);n.phase+=t*l,s.phase=n.phase,s.legAmp=.8+r*.5,s.armAmp=.85+r*.5,s.elbow=.7+r*.3,s.knee=.55+r*.35,s.pitch=.14+r*.14,s.bounce=Math.abs(Math.sin(n.phase))*.05,s.twist=.08,c==="mole"?(s.legAmp*=.7,s.armAmp*=.65,s.leanZ=Math.sin(n.phase*.5)*.13,s.bounce*=.7,s.twist=.14):c==="dog"&&(s.pitch*=.55,s.armAmp*=.6,s.elbow=.9,s.headRoll=Math.sin(n.phase*.5)*.055);break}case"fly":s.flightPitch=.92,s.pitch=.18,s.armRaise=.82,s.armSplay=.55,s.elbow=.15,s.knee=.18,s.legAmp=.08;break;case"dodge":s.phase=n.phase,s.legAmp=.5,s.armAmp=.7,s.leanZ=Math.sin(this.time*6)*.3,s.pitch=.12,s.bounce=Math.abs(Math.sin(n.phase))*.04;break;case"jump":s.armRaise=1,s.armSplay=.5,s.tuck=.75,s.knee=1.1,s.elbow=.4,s.pitch=.1;break;case"fall":s.armRaise=.8,s.armSplay=.8,s.tuck=.35,s.knee=.5,s.pitch=.04;break;case"slide":s.slide=1,s.tuck=.3,s.knee=.9,s.elbow=1,s.armSplay=.4,s.pitch=.16;break;case"hit":s.pitch=-.5,s.armRaise=1.2,s.armSplay=.9,s.leanZ=Math.sin(this.time*30)*.15,s.headRoll=Math.sin(this.time*26)*.2;break;case"victory":s.phase=this.time*6,s.armRaise=1.25,s.armSplay=1,s.bounce=Math.abs(Math.sin(this.time*6))*.1,s.leanZ=Math.sin(this.time*3)*.1,s.headRoll=Math.sin(this.time*3)*.12;break;case"dead":s.pitch=this.deathTime<.18?-.35:0,s.headPitch=.38,s.armSplay=1.25,s.elbow=.25,s.knee=.2;break}const o=Qe(-e.lateralVel*.014,-.35,.35);s.leanZ+=o;const a=14;n.legAmp=_e(n.legAmp,s.legAmp,a,t),n.armAmp=_e(n.armAmp,s.armAmp,a,t),n.elbow=_e(n.elbow,s.elbow,a,t),n.knee=_e(n.knee,s.knee,a,t),n.pitch=_e(n.pitch,s.pitch,a,t),n.leanZ=_e(n.leanZ,s.leanZ,a,t),n.tuck=_e(n.tuck,s.tuck,16,t),n.armRaise=_e(n.armRaise,s.armRaise,12,t),n.armSplay=_e(n.armSplay,s.armSplay,12,t),n.bounce=_e(n.bounce,s.bounce,18,t),n.hipDip=_e(n.hipDip,s.hipDip,16,t),n.headPitch=_e(n.headPitch,s.headPitch,8,t),n.headRoll=_e(n.headRoll,s.headRoll,8,t),n.twist=_e(n.twist,s.twist,10,t),n.flightPitch=_e(n.flightPitch,s.flightPitch,7,t),n.slide=this.anim==="slide"?1:_e(n.slide,0,20,t),this.anim!=="run"&&(n.phase=_e(n.phase,s.phase,10,t))}applyPose(){const t=this.pose,e=Math.sin(t.phase),n=Math.max(0,Math.cos(t.phase)),s=Math.max(0,-Math.cos(t.phase));this.upperLegL.rotation.x=e*t.legAmp-t.tuck*1.05,this.upperLegR.rotation.x=-e*t.legAmp-t.tuck*1.05,this.lowerLegL.rotation.x=s*t.knee+t.tuck*.5,this.lowerLegR.rotation.x=n*t.knee+t.tuck*.5,this.footL.rotation.x=-s*t.knee*.5-t.tuck*.2,this.footR.rotation.x=-n*t.knee*.5-t.tuck*.2,this.upperArmL.rotation.x=-e*t.armAmp-t.armRaise*1.9,this.upperArmR.rotation.x=e*t.armAmp-t.armRaise*1.9,this.upperArmL.rotation.z=t.armSplay*.5+t.tuck*.6+.08,this.upperArmR.rotation.z=-t.armSplay*.5-t.tuck*.6-.08,this.lowerArmL.rotation.x=-t.elbow-Math.max(0,e)*t.armAmp*.4-t.armRaise*.4,this.lowerArmR.rotation.x=-t.elbow-Math.max(0,-e)*t.armAmp*.4-t.armRaise*.4,this.spine.rotation.x=t.pitch*.6,this.chest.rotation.x=t.pitch*.4,this.chest.rotation.z=t.leanZ*.5,this.hips.rotation.y=e*t.twist,this.hips.rotation.z=0,this.chest.rotation.y=-e*t.twist*1.2,this.root.rotation.z=t.leanZ*(this.turtleOn?.1:.6)*(1-this.deathProgress),this.root.rotation.x=-t.flightPitch*(this.turtleOn?.25:1)-this.deathProgress*Math.PI/2,this.head.rotation.x=-t.pitch*.55+t.headPitch+t.tuck*.35,this.head.rotation.z=t.leanZ*.45+t.headRoll,this.head.rotation.y=-t.leanZ*.3;const r=1-t.slide*.52;this.hips.scale.set(1,r,1),this.hips.position.y=(this.hipHeight+t.bounce+t.hipDip)*r,this.hips.position.z=0,this.seasonalRig&&(this.seasonalRig.hat.scale.y=1-t.slide*.78,this.seasonalRig.hat.rotation.x=-t.slide*.18,this.seasonalRig.hat.rotation.z=this.anim==="run"?Math.sin(t.phase*.5)*.035:0,this.seasonalRig.cape&&(this.seasonalRig.cape.visible=this.anim!=="fly"&&!this.jetpack.visible,this.seasonalRig.cape.rotation.x=this.anim==="run"?-.05+Math.sin(t.phase)*.035:0,this.seasonalRig.cape.rotation.z=this.anim==="run"?Math.sin(t.phase*.5)*.035:0)),this.tail.rotation.x=Math.sin(t.phase*.5)*.25,this.dailyRig&&gg(this.dailyRig,t.phase,this.anim==="run",this.anim==="jump"||this.anim==="fall",this.anim==="fly"||this.jetpack.visible,t.slide),this.playfulRig&&vg(this.playfulRig,t.phase,this.anim==="run",this.anim==="jump"||this.anim==="fall",this.anim==="fly"||this.jetpack.visible,t.slide),this.royalRig&&yg(this.royalRig,t.phase,this.anim==="run",this.anim==="fly"||this.jetpack.visible,t.slide),this.turtleRig&&this.turtleOn&&Eg(this.turtleRig,t.phase,this.anim==="run",this.anim==="slide"),this.tail.rotation.y=Math.sin(t.phase*.25)*.2,this.elasticEars||(this.earL.rotation.x=this.earR.rotation.x=0,this.earL.rotation.z=Math.sin(t.phase)*.06,this.earR.rotation.z=-Math.sin(t.phase)*.06)}applyDogArmClearance(){this.skin.character==="dog"&&(this.upperArmL.rotation.z=-Math.max(.12,Math.abs(this.upperArmL.rotation.z)),this.upperArmR.rotation.z=Math.max(.12,Math.abs(this.upperArmR.rotation.z)))}applyRidingPose(){const t=this.anim==="slide";this.hips.position.set(0,t?.34:.76,-.12),this.hips.scale.set(1,t?.43:1,1),this.hips.rotation.set(0,0,0),this.spine.rotation.set(.06,0,0),this.chest.rotation.set(.02,0,0),this.upperLegL.rotation.x=this.upperLegR.rotation.x=-1.12,this.lowerLegL.rotation.x=this.lowerLegR.rotation.x=1.2,this.footL.rotation.x=this.footR.rotation.x=-.08,this.upperArmL.rotation.set(-1.7,0,0),this.upperArmR.rotation.set(-1.7,0,0),this.lowerArmL.rotation.x=this.lowerArmR.rotation.x=.5,this.head.rotation.x=t?.1:-.04,this.root.rotation.x=0,this.root.rotation.z*=.45}applyIdleMotion(t){if(!this.idleMotion||this.anim!=="idle")return;this.idleMotionTime+=Math.max(0,t);const{lift:e,yaw:n,roll:s,squash:r,headYaw:o}=bg(this.idleMotion,this.idleMotionTime);this.hips.position.y+=e-r*.25,this.hips.rotation.y+=n,this.hips.rotation.z+=s,this.head.rotation.y+=o,this.hips.scale.set(1+r*.35,1-r,1+r*.35),this.upperArmL.rotation.set(.025,0,-.12),this.upperArmR.rotation.set(.025,0,.12),this.lowerArmL.rotation.set(-.055,0,0),this.lowerArmR.rotation.set(-.055,0,0),this.idleMotionTime>=Hl[this.idleMotion]&&this.clearIdleMotion()}applyReaction(){if(this.anim==="dead"){const s=Math.sin(Math.PI*Qe((this.deathTime-1.02)/.65,0,1));this.deathCause==="low"&&(this.upperLegL.rotation.x-=s*.42),this.deathCause==="overhead"&&(this.earL.rotation.x+=Math.sin(this.deathTime*25)*s*.22,this.earR.rotation.x-=Math.sin(this.deathTime*25)*s*.22);return}if(!this.reaction||this.anim==="slide"||this.anim==="hit"||this.anim==="fly"&&this.reaction!=="takeoff")return;const t=this.reactionTime/this.reactionDuration,e=Math.sin(Math.PI*t),n=this.skin.character??"bear";if(this.reaction==="takeoff"){const s=Math.max(0,1-t*2);this.upperArmL.rotation.z+=Math.sin(t*38)*s*.65,this.upperArmR.rotation.z-=Math.cos(t*38)*s*.65,this.head.rotation.z+=Math.sin(t*24)*s*.12,this.chest.rotation.x-=e*(1-s)*.13}else if(this.reaction==="magnet")this.chest.rotation.z+=Math.sin(t*Math.PI*2)*e*.2,this.upperArmR.rotation.x-=e*.7,this.head.rotation.y-=e*.2;else if(this.reaction==="relief")this.head.rotation.x+=e*.25,this.upperArmL.rotation.x-=e*.55,this.upperArmR.rotation.x-=e*.55,this.lowerArmL.rotation.x-=e*.65,this.lowerArmR.rotation.x-=e*.65;else if(this.reaction==="double")this.upperArmL.rotation.z+=e*.4,this.upperArmR.rotation.z-=e*.4,this.chest.rotation.x-=e*.2,this.head.rotation.x-=e*.1;else if(this.reaction==="combo")this.upperArmL.rotation.x-=e*.65,this.upperArmR.rotation.z-=Math.sin(t*Math.PI*4)*e*.3,this.chest.rotation.x-=e*.12,this.head.rotation.y+=e*(n==="mole"?.3:.15);else if(this.reaction==="close")n==="mole"?(this.head.rotation.y+=e*.5,this.chest.rotation.y-=e*.18,this.upperArmR.rotation.z-=e*.3):n==="dog"?(this.chest.rotation.x-=e*.18,this.upperArmL.rotation.x-=e*.35,this.upperArmR.rotation.x-=e*.35):(this.hips.position.y-=e*.065,this.head.rotation.x+=e*.16,this.upperArmL.rotation.z+=e*.32,this.upperArmR.rotation.z-=e*.32);else if(n==="mole"){const s=Math.sin(t*Math.PI*2)*(1-t)*.12;this.hips.scale.set(1+s*.5,this.hips.scale.y*(1-s),1+s*.5),this.hips.position.y-=Math.max(0,s)*.15}else if(n==="dog")this.chest.rotation.x+=e*.16,this.upperArmL.rotation.z-=e*.38,this.upperArmR.rotation.z+=e*.38,this.lowerArmL.rotation.x-=e*.45,this.lowerArmR.rotation.x-=e*.45;else{const s=Math.sin(t*Math.PI*5)*e*.2;this.earL.rotation.z+=s,this.earR.rotation.z-=s}}updateEarSprings(t,e){const n=Qe(t,0,.1),s=Math.ceil(n*120);if(!s)return;const r=n/s,o=this.skin.character==="dog",a=this.anim==="run"?(.8+Qe(e,0,1)*.3)*(o?1.25:1):0;for(let c=0;c<this.earSprings.length;c++){const l=this.earSprings[c],h=c===0?-1:1,u=c===0?this.earL:this.earR,f=this.pose.phase,d=Math.max(0,Math.cos(f*2-.65+c*.16)),g=a*(-.12+Math.pow(d,3)*.5);for(let p=0;p<s;p++){l.velocity+=((g-l.bend)*720-l.velocity*17)*r,l.bend+=l.velocity*r;const S=Qe(l.bend,-.48,.48);S!==l.bend&&(l.velocity=0),l.bend=S}u.rotation.x=l.bend,u.rotation.z=-h*(.08+l.bend);const v=1+l.bend*.5,m=1/Math.sqrt(v);u.scale.set(m,v,m)}}}function jg(i){return i.id==="classic"||i.character!==void 0&&i.character!=="bear"}const Cg={lanes:{count:3,width:2.6},player:{standHeight:1.55,rollHeight:.85,halfWidth:.42,halfDepth:.4,jumpVelocity:9.6,bootsJumpVelocity:12,bootsAirJumpVelocity:10.8,turtleJumpVelocity:5.6,turtleHeight:.68,turtleRollHeight:.44,gravity:-26,lateralSpeed:17,rollDuration:.62,inputBuffer:.18,jetpackHeight:12},speed:{base:13,max:32,rampDistance:900},opening:{seconds:5},dayCycle:{seconds:360},chunk:{length:60,ahead:240,behind:20},obstacles:{low:{top:.78,depth:.8,width:2.2},overhead:{bottom:.95,top:2.15,depth:.6,width:2.3},train:{top:3,width:2.25},block:{top:2.4,depth:1.4,width:2.2},gate:{top:4.9,depth:.85,panelWidth:2.38}},coin:{groundY:1,spacing:2.4,magnetRadius:7,magnetForce:26},powerups:{magnet:8,jetpack:10,double:10,boots:10,turtle:5},score:{perMeter:1,coin:20},camera:{offset:{y:4.5,z:7.9},fovBase:62,fovMax:67}},Qg=[{id:"classic",name:"经典 Joke Bear",price:0,desc:"原汁原味的雪白自嘲熊，街头跑酷的起点。",fur:16777215,outfit:16777215,accent:15131611,shoe:16250867,accessory:"none"},{id:"mole-croquette",name:"鼹鼠饼",price:1500,desc:"金黄色的圆滚滚鼹鼠饼，小豆眼和短短的四肢。",fur:15054942,outfit:15054942,accent:12158274,shoe:12158274,accessory:"none",character:"mole"},{id:"old-dog",name:"老头狗",price:1800,desc:"雪白的圆脑袋、黑耳朵、灰色口鼻和两道浓眉。",fur:15855333,outfit:15855333,accent:7828594,shoe:15855333,accessory:"none",character:"dog"},{id:"street",name:"街头帽衫",price:300,desc:"红色绒布帽衫有抽绳和口袋，搭配黄色棒球帽。",fur:16777215,outfit:14241597,accent:15905076,shoe:3881798,accessory:"cap"},{id:"neon",name:"霓虹电音",price:600,desc:"青色反光夹克配粉色细节和包耳耳机。",fur:16777215,outfit:3065014,accent:16735631,shoe:2236986,accessory:"headphones"},{id:"ninja",name:"夜行忍者",price:900,desc:"暗色上衣、斜挎束带与柔软围巾。",fur:16777215,outfit:4869737,accent:10128536,shoe:2236986,accessory:"scarf"},{id:"pajama",name:"睡衣派对",price:1200,desc:"绿色睡衣配奶白滚边和垂下的睡帽。",fur:16777215,outfit:8368233,accent:16765286,shoe:15266521,accessory:"nightcap"},{id:"halloween",name:"万圣南瓜巫师",price:1500,desc:"歪尖巫师帽、南瓜绒衣与蝙蝠短披风，捣蛋也要跑得快。",fur:16777215,outfit:15305266,accent:15975771,shoe:3746116,accessory:"witch"},{id:"christmas",name:"圣诞暖绒",price:1800,desc:"垂绒圣诞帽、红色毛边外套和冬青绿围领，背着星星送惊喜。",fur:16777215,outfit:13125187,accent:3765347,shoe:16774111,accessory:"santa"},{id:"commuter",name:"摸鱼上班熊",price:900,desc:"浅蓝衬衫、歪领带和斜挎公文包，工牌写着准点下班。",fur:16777215,outfit:10472677,accent:3165559,shoe:5521978,accessory:"commuter"},{id:"duck-raincoat",name:"小黄鸭雨衣熊",price:1200,desc:"黄色雨衣搭鸭嘴帽檐，透明口袋里装着一只迷你小鸭。",fur:16777215,outfit:16765775,accent:15901746,shoe:16770722,accessory:"duck"},{id:"milk-tea",name:"奶茶店长熊",price:1500,desc:"奶油小帽和焦糖围裙，背着珍珠会弹动的奶茶杯包。",fur:16777215,outfit:16115660,accent:10248253,shoe:6044459,accessory:"barista"},{id:"eel",name:"鳗鱼顶顶熊",price:1200,desc:"一条盘在头顶的焦糖鳗鱼，跑起来尾巴也跟着摇。",fur:16777215,outfit:16777215,accent:11432261,shoe:16250867,accessory:"eel"},{id:"salmon",name:"三文鱼顶顶熊",price:1200,desc:"橙白纹三文鱼趴在头顶，鱼鳍与尾巴一起出发。",fur:16777215,outfit:16777215,accent:16092263,shoe:16250867,accessory:"salmon"},{id:"delivery",name:"外卖头盔熊",price:900,desc:"亮黄外卖头盔配餐盒徽章、反光条和小夹克。",fur:16777215,outfit:16763966,accent:3181968,shoe:3181968,accessory:"delivery"},{id:"fairy",name:"星光小仙女",price:1800,desc:"星星皇冠、粉紫花瓣裙与半透明蝴蝶翅膀。",fur:16777215,outfit:15773135,accent:13350894,shoe:16771058,accessory:"fairy"},{id:"prince",name:"蓝绒小王子",price:1800,desc:"蓝白短披风、金边礼服与小皇冠，赶车也要有仪式感。",fur:16777215,outfit:8170975,accent:16765286,shoe:16050639,accessory:"prince"},{id:"king",name:"红绒国王",price:2400,desc:"红绒白毛披风、宝石高皇冠和金链，今天的王国是三条轨道。",fur:16777215,outfit:12143960,accent:16765286,shoe:7491895,accessory:"king"},{id:"queen",name:"珠光王后",price:2400,desc:"珠宝王冠、珍珠领与紫粉礼裙，优雅出发。",fur:16777215,outfit:14129083,accent:11836125,shoe:16773084,accessory:"queen"}],t_=[{id:"m_coin_run",name:"金币小能手",desc:"单局收集 30 枚金币",stat:"runCoins",scope:"run",target:30,reward:80},{id:"m_dist",name:"长途旅行家",desc:"累计奔跑 3000 米",stat:"totalDistance",scope:"cumulative",target:3e3,reward:120},{id:"m_jump",name:"跳跃大师",desc:"成功越过低栏 60 次",stat:"jumps",scope:"cumulative",target:60,reward:100},{id:"m_roll",name:"翻滚艺术家",desc:"累计完成 40 次翻滚",stat:"rolls",scope:"cumulative",target:40,reward:100},{id:"m_score",name:"分数猎人",desc:"单局达到 2500 分",stat:"runScore",scope:"run",target:2500,reward:150},{id:"m_power",name:"磁铁收藏家",desc:"累计拾取金币磁铁 12 次",stat:"powerupUses",powerupKind:"magnet",scope:"cumulative",target:12,reward:140}],e_={low:{pixelRatio:1,shadows:!1,shadowSize:1024,fogFar:105,particleScale:.4,drawDistance:150},medium:{pixelRatio:1.5,shadows:!0,shadowSize:1024,fogFar:140,particleScale:.7,drawDistance:200},high:{pixelRatio:2,shadows:!0,shadowSize:2048,fogFar:170,particleScale:1,drawDistance:240}};function n_(i){return(i-1)*Cg.lanes.width}export{Ee as $,Qn as A,Te as B,Ht as C,Vg as D,Ke as E,bl as F,kt as G,zg as H,Ol as I,$g as J,is as K,he as L,_t as M,Ge as N,xl as O,Kl as P,e_ as Q,$s as R,Ig as S,vm as T,ae as U,P as V,Lg as W,Ug as X,Wt as Y,Ng as Z,ha as _,Dl as a,da as a0,Bl as a1,qg as a2,zl as a3,Xt as a4,Nn as a5,Wg as a6,sg as a7,Xg as a8,ba as a9,Yg as aa,Zg as ab,rs as ac,Fg as ad,Mm as ae,nn as af,Bg as ag,Ce as ah,Sg as ai,xg as aj,t_ as ak,jg as al,Kg as am,wg as an,Og as b,Qg as c,Ne as d,ji as e,Gg as f,ia as g,ve as h,Dn as i,Hg as j,kg as k,Cg as l,_e as m,Un as n,Fe as o,Dg as p,dm as q,og as r,Al as s,ze as t,$n as u,On as v,mm as w,n_ as x,Qe as y,Jg as z};
