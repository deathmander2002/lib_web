/**MochiKit 1.4.2 - Base+DOM only, with table sort	- http://mochi.github.io/mochikit/examples/sortable_tables/*/
if(typeof (MochiKit)=="undefined"){MochiKit={};}
if(typeof (MochiKit.Base)=="undefined"){MochiKit.Base={};}
MochiKit.Base.update=function(_1,_2){
if(_1===null||_1===undefined){_1={};}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){_1[k]=o[k];}}
}
return _1;
};
MochiKit.Base.update(MochiKit.Base,{camelize:function(_6){
var _7=_6.split("-");
var cc=_7[0];
for(var i=1;i<_7.length;i++){
cc+=_7[i].charAt(0).toUpperCase()+_7[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){n=1;}
return function(){
return n++;
};
},clone:function(_b){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=_b;
return new me();
}
},_deps:function(_d,_e){
if(!(_d in MochiKit)){
MochiKit[_d]={};
}
for(var i=0;i<_e.length;i++){
if(!(_e[i] in MochiKit)){
throw "MochiKit."+_d+" depends on MochiKit."+_e[i]+"!";
}
}
},_flattenArray:function(res,lst){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(o instanceof Array){
arguments.callee(res,o);
}else{
res.push(o);
}
}
return res;
},flattenArray:function(lst){
return MochiKit.Base._flattenArray([],lst);
},flattenArguments:function(lst){
var res=[];
var m=MochiKit.Base;
var _18=m.extend(null,arguments);
while(_18.length){
var o=_18.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_18.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1b,obj,_1d){
if(!_1d){
_1d=0;
}
if(obj){
var l=obj.length;
if(typeof (l)!="number"){
if(typeof (MochiKit.Iter)!="undefined"){
obj=MochiKit.Iter.list(obj);
l=obj.length;
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(!_1b){
_1b=[];
}
for(var i=_1d;i<l;i++){
_1b.push(obj[i]);
}
}
return _1b;
},updatetree:function(_20,obj){
if(_20===null||_20===undefined){
_20={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_20[k])=="object"&&typeof (v)=="object"){
arguments.callee(_20[k],v);
}else{
_20[k]=v;
}
}
}
}
return _20;
},setdefault:function(_26,obj){
if(_26===null||_26===undefined){
_26={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _26)){
_26[k]=o[k];
}
}
}
return _26;
},keys:function(obj){
var _2c=[];
for(var _2d in obj){
_2c.push(_2d);
}
return _2c;
},values:function(obj){
var _2f=[];
for(var _30 in obj){
_2f.push(obj[_30]);
}
return _2f;
},items:function(obj){
var _32=[];
var e;
for(var _34 in obj){
var v;
try{
v=obj[_34];
}
catch(e){
continue;
}
_32.push([_34,v]);
}
return _32;
},_newNamedError:function(_36,_37,_38){
_38.prototype=new MochiKit.Base.NamedError(_36.NAME+"."+_37);
_36[_37]=_38;
},operator:{truth:function(a){
return !!a;
},lognot:function(a){
return !a;
},identity:function(a){
return a;
},not:function(a){
return ~a;
},neg:function(a){
return -a;
},add:function(a,b){
return a+b;
},sub:function(a,b){
return a-b;
},div:function(a,b){
return a/b;
},mod:function(a,b){
return a%b;
},mul:function(a,b){
return a*b;
},and:function(a,b){
return a&b;
},or:function(a,b){
return a|b;
},xor:function(a,b){
return a^b;
},lshift:function(a,b){
return a<<b;
},rshift:function(a,b){
return a>>b;
},zrshift:function(a,b){
return a>>>b;
},eq:function(a,b){
return a==b;
},ne:function(a,b){
return a!=b;
},gt:function(a,b){
return a>b;
},ge:function(a,b){
return a>=b;
},lt:function(a,b){
return a<b;
},le:function(a,b){
return a<=b;
},seq:function(a,b){
return a===b;
},sne:function(a,b){
return a!==b;
},ceq:function(a,b){
return MochiKit.Base.compare(a,b)===0;
},cne:function(a,b){
return MochiKit.Base.compare(a,b)!==0;
},cgt:function(a,b){
return MochiKit.Base.compare(a,b)==1;
},cge:function(a,b){
return MochiKit.Base.compare(a,b)!=-1;
},clt:function(a,b){
return MochiKit.Base.compare(a,b)==-1;
},cle:function(a,b){
return MochiKit.Base.compare(a,b)!=1;
},logand:function(a,b){
return a&&b;
},logor:function(a,b){
return a||b;
},contains:function(a,b){
return b in a;
}},forwardCall:function(_76){
return function(){
return this[_76].apply(this,arguments);
};
},itemgetter:function(_77){
return function(arg){
return arg[_77];
};
},typeMatcher:function(){
var _79={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_79[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _79)){
return false;
}
}
return true;
};
},isNull:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==null){
return false;
}
}
return true;
},isUndefinedOrNull:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(typeof (o)=="undefined"||o===null)){
return false;
}
}
return true;
},isEmpty:function(obj){
return !MochiKit.Base.isNotEmpty.apply(this,arguments);
},isNotEmpty:function(obj){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(o&&o.length)){
return false;
}
}
return true;
},isArrayLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
var typ=typeof (o);
if((typ!="object"&&!(typ=="function"&&typeof (o.item)=="function"))||o===null||typeof (o.length)!="number"||o.nodeType===3||o.nodeType===4){
return false;
}
}
return true;
}
,xmap:function(fn){
if(fn===null){
return MochiKit.Base.extend(null,arguments,1);
}
var _8a=[];
for(var i=1;i<arguments.length;i++){
_8a.push(fn(arguments[i]));
}
return _8a;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _90=m.isArrayLike;
if(arguments.length<=2){
if(!_90(lst)){
if(itr){
lst=itr.list(lst);
if(fn===null){
return lst;
}
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
return m.extend(null,lst);
}
var _91=[];
for(var i=0;i<lst.length;i++){
_91.push(fn(lst[i]));
}
return _91;
}else{
if(fn===null){
fn=Array;
}
var _93=null;
for(i=1;i<arguments.length;i++){
if(!_90(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_93===null||_93>l){
_93=l;
}
}
_91=[];
for(i=0;i<_93;i++){
var _95=[];
for(var j=1;j<arguments.length;j++){
_95.push(arguments[j][i]);
}
_91.push(fn.apply(this,_95));
}
return _91;
}
},xfilter:function(fn){
var _98=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_98.push(o);
}
}
return _98;
},filter:function(fn,lst,_9d){
var _9e=[];
var m=MochiKit.Base;
if(!m.isArrayLike(lst)){
if(MochiKit.Iter){
lst=MochiKit.Iter.list(lst);
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
fn=m.operator.truth;
}
if(typeof (Array.prototype.filter)=="function"){
return Array.prototype.filter.call(lst,fn,_9d);
}else{
if(typeof (_9d)=="undefined"||_9d===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_9e.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_9d,o)){
_9e.push(o);
}
}
}
}
return _9e;
},_wrapDumbFunction:function(_a2){
return function(){
switch(arguments.length){
case 0:
return _a2();
case 1:
return _a2(arguments[0]);
case 2:
return _a2(arguments[0],arguments[1]);
case 3:
return _a2(arguments[0],arguments[1],arguments[2]);
}
var _a3=[];
for(var i=0;i<arguments.length;i++){
_a3.push("arguments["+i+"]");
}
return eval("(func("+_a3.join(",")+"))");
};
},methodcaller:function(_a5){
var _a6=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a5)=="function"){
return function(obj){
return _a5.apply(obj,_a6);
};
}else{
return function(obj){
return obj[_a5].apply(obj,_a6);
};
}
},method:function(_a9,_aa){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_aa,_a9],arguments,2));
},compose:function(f1,f2){
var _ae=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_ae.push(fn);
}
return function(){
var _b2=arguments;
for(var i=_ae.length-1;i>=0;i--){
_b2=[_ae[i].apply(this,_b2)];
}
return _b2[0];
};
},bind:function(_b4,_b5){
if(typeof (_b4)=="string"){
_b4=_b5[_b4];
}
var _b6=_b4.im_func;
var _b7=_b4.im_preargs;
var _b8=_b4.im_self;
var m=MochiKit.Base;
if(typeof (_b4)=="function"&&typeof (_b4.apply)=="undefined"){
_b4=m._wrapDumbFunction(_b4);
}
if(typeof (_b6)!="function"){
_b6=_b4;
}
if(typeof (_b5)!="undefined"){
_b8=_b5;
}
if(typeof (_b7)=="undefined"){
_b7=[];
}else{
_b7=_b7.slice();
}
m.extend(_b7,arguments,2);
var _ba=function(){
var _bb=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_bb=m.concat(me.im_preargs,_bb);
}
var _bd=me.im_self;
if(!_bd){
_bd=this;
}
return me.im_func.apply(_bd,_bb);
};
_ba.im_self=_b8;
_ba.im_func=_b6;
_ba.im_preargs=_b7;
return _ba;
},bindLate:function(_be,_bf){
var m=MochiKit.Base;
if(typeof (_be)!="string"){
return m.bind.apply(this,arguments);
}
var _c1=m.extend([],arguments,2);
var _c2=function(){
var _c3=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_c3=m.concat(me.im_preargs,_c3);
}
var _c5=me.im_self;
if(!_c5){
_c5=this;
}
return _c5[me.im_func].apply(_c5,_c3);
};
_c2.im_self=_bf;
_c2.im_func=_be;
_c2.im_preargs=_c1;
return _c2;
},bindMethods:function(_c6){
var _c7=MochiKit.Base.bind;
for(var k in _c6){
var _c9=_c6[k];
if(typeof (_c9)=="function"){
_c6[k]=_c7(_c9,_c6);
}
}
},registerComparator:function(_ca,_cb,_cc,_cd){
MochiKit.Base.comparatorRegistry.register(_ca,_cb,_cc,_cd);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _d0=(typeof (a)=="undefined"||a===null);
var _d1=(typeof (b)=="undefined"||b===null);
if(_d0&&_d1){
return 0;
}else{
if(_d0){
return -1;
}else{
if(_d1){
return 1;
}
}
}
var m=MochiKit.Base;
var _d3=m._primitives;
if(!(typeof (a) in _d3&&typeof (b) in _d3)){
try{
return m.comparatorRegistry.match(a,b);
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
}
if(a<b){
return -1;
}else{
if(a>b){
return 1;
}
}
var _d4=m.repr;
throw new TypeError(_d4(a)+" and "+_d4(b)+" can not be compared");
}
,compareArrayLike:function(a,b){
var _d9=MochiKit.Base.compare;
var _da=a.length;
var _db=0;
if(_da>b.length){
_db=1;
_da=b.length;
}else{
if(_da<b.length){
_db=-1;
}
}
for(var i=0;i<_da;i++){
var cmp=_d9(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _db;
},


registerJSON:function(_e9,_ea,_eb,_ec){
MochiKit.Base.jsonRegistry.register(_e9,_ea,_eb,_ec);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _f0=typeof (o);
if(_f0=="number"||_f0=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_f0=="string"){
var res="";
for(var i=0;i<o.length;i++){
var c=o.charAt(i);
if(c=="\""){
res+="\\\"";
}else{
if(c=="\\"){
res+="\\\\";
}else{
if(c=="\b"){
res+="\\b";
}else{
if(c=="\f"){
res+="\\f";
}else{
if(c=="\n"){
res+="\\n";
}else{
if(c=="\r"){
res+="\\r";
}else{
if(c=="\t"){
res+="\\t";
}else{
if(o.charCodeAt(i)<=31){
var hex=o.charCodeAt(i).toString(16);
if(hex.length<2){
hex="0"+hex;
}
res+="\\u00"+hex.toUpperCase();
}else{
res+=c;
}
}
}
}
}
}
}
}
}
return "\""+res+"\"";
}
}
}
var me=arguments.callee;
var _f6;
if(typeof (o.__json__)=="function"){
_f6=o.__json__();
if(o!==_f6){
return me(_f6);
}
}
if(typeof (o.json)=="function"){
_f6=o.json();
if(o!==_f6){
return me(_f6);
}
}
if(_f0!="function"&&typeof (o.length)=="number"){
var res=[];
for(var i=0;i<o.length;i++){
var val=me(o[i]);
if(typeof (val)!="string"){
continue;
}
res.push(val);
}
return "["+res.join(", ")+"]";
}
var m=MochiKit.Base;
try{
_f6=m.jsonRegistry.match(o);
if(o!==_f6){
return me(_f6);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_f0=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_f0=="function"){
return null;
}
res=[];
for(var k in o){
var _fa;
if(typeof (k)=="number"){
_fa="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_fa=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_fa+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_fd,arr){
if(_fd.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_fd,arr)===0);
},concat:function(){
var _ff=[];
var _100=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_100(_ff,arguments[i]);
}
return _ff;
},keyComparator:function(key){
var m=MochiKit.Base;
var _104=m.compare;
if(arguments.length==1){
return function(a,b){
return _104(a[key],b[key]);
};
}
var _107=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_107.length);i++){
var key=_107[i];
rval=_104(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _10e=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _10e(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_113,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _116=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_116(o,cur)==_113){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_11a,_11b,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11b)=="undefined"||_11b===null){
_11b=0;
}
for(var i=_11b;i<end;i++){
if(lst[i]===_11a){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _121=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_121+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_121<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_121;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _125=data.length/2;
return (data[_125]+data[_125-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_127,_128,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_128)=="undefined"||_128===null){
_128=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_128;i<end;i++){
if(cmp(lst[i],_127)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12d){
var _12e=[node];
var _12f=MochiKit.Base.extend;
while(_12e.length){
var res=_12d(_12e.shift());
if(res){
_12f(_12e,res);
}
}
},nameFunctions:function(_131){
var base=_131.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _131){
var o=_131[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_135,_136){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_135)=="string"||(typeof (_135.nodeType)!="undefined"&&_135.nodeType>0))){
var kv=MochiKit.DOM.formContents(_135);
_135=kv[0];
_136=kv[1];
}else{
if(arguments.length==1){
if(typeof (_135.length)=="number"&&_135.length==2){
return arguments.callee(_135[0],_135[1]);
}
var o=_135;
_135=[];
_136=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_135.push(k);
_136.push(v[i]);
}
}else{
_135.push(k);
_136.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_135.length,_136.length);
var _13e=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_136[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_13e(_135[i])+"="+_13e(v));
}
}
return rval.join("&");
},parseQueryString:function(_13f,_140){
var qstr=(_13f.charAt(0)=="?")?_13f.substring(1):_13f;
var _142=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _144;
if(typeof (decodeURIComponent)!="undefined"){
_144=decodeURIComponent;
}else{
_144=unescape;
}
if(_140){
for(var i=0;i<_142.length;i++){
var pair=_142[i].split("=");
var name=_144(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_144(pair.join("=")));
}
}else{
for(i=0;i<_142.length;i++){
pair=_142[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_144(name)]=_144(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_14a,wrap,_14c){
if(_14c){
this.pairs.unshift([name,_14a,wrap]);
}else{
this.pairs.push([name,_14a,wrap]);
}
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
return pair[2].apply(this,arguments);
}
}
throw MochiKit.Base.NotFound;
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}};
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindLate","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base._exportSymbols=function(_152,_153){
var all=_153.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_152[all[i]]=_153[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_157){
return encodeURIComponent(_157).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_158){
return escape(_158).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
};
}
m.NamedError=function(name){
this.message=name;
this.name=name;
};
m.NamedError.prototype=new Error();

m.NotFound=new m.NamedError("MochiKit.Base.NotFound");
m.listMax=m.partial(m.listMinMax,1);
m.listMin=m.partial(m.listMinMax,-1);
m.isCallable=m.typeMatcher("function");
m.isUndefined=m.typeMatcher("undefined");
m.merge=m.partial(m.update,null);
m.zip=m.partial(m.map,null);
m.average=m.mean;
m.comparatorRegistry=new m.AdapterRegistry();
m.registerComparator("arrayLike",m.isArrayLike,m.compareArrayLike);
m.jsonRegistry=new m.AdapterRegistry();
m.EXPORT_TAGS={":common":m,":all":m.concat(m.EXPORT)};
m.nameFunctions(this);
};
MochiKit.Base.__new__();
compare=MochiKit.Base.compare;
compose=MochiKit.Base.compose;
serializeJSON=MochiKit.Base.serializeJSON;
mean=MochiKit.Base.mean;
median=MochiKit.Base.median;
MochiKit.Base._exportSymbols(this,MochiKit.Base);
MochiKit.Base._deps("DOM",["Base"]);
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","removeNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","insertSiblingNodesAfter","insertSiblingNodesBefore","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","H4","H5","H6","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","DL","DT","DD","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","computedStyle","escapeHTML","toHTML","emitHTML","scrapeText","getFirstParentByTagAndClassName","getFirstElementByTagAndClassName"];
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _2f6=self._document;
var _2f7=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2f7;
self._document=_2f6;
throw e;
}
self._window=_2f7;
self._document=_2f6;
return rval;
},formContents:function(elem){
var _2fa=[];
var _2fb=[];
var m=MochiKit.Base;
var self=MochiKit.DOM;
if(typeof (elem)=="undefined"||elem===null){
elem=self._document.body;
}else{
elem=self.getElement(elem);
}
m.nodeWalk(elem,function(elem){
var name=elem.name;
if(m.isNotEmpty(name)){
var _300=elem.tagName.toUpperCase();
if(_300==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_300==="SELECT"){
if(elem.type=="select-one"){
if(elem.selectedIndex>=0){
var opt=elem.options[elem.selectedIndex];
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
return null;
}
_2fa.push(name);
_2fb.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2fa.push(name);
_2fb.push("");
return null;
}
for(var i=0;i<opts.length;i++){
var opt=opts[i];
if(!opt.selected){
continue;
}
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
}
return null;
}
}
if(_300==="FORM"||_300==="P"||_300==="SPAN"||_300==="DIV"){
return elem.childNodes;
}
_2fa.push(name);
_2fb.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2fa,_2fb];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _309=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_309;
throw e;
}
self._document=_309;
return rval;
},registerDOMConverter:function(name,_30c,wrap,_30e){
MochiKit.DOM.domConverters.register(name,_30c,wrap,_30e);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _315=im.repeat;
}
var map=m.map;
var _317=self.domConverters;
var _318=arguments.callee;
var _319=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im?im.list(node):m.extend(null,node);
}
if(typeof (node.nodeType)!="undefined"&&node.nodeType>0){
return node;
}
if(typeof (node)=="number"||typeof (node)=="boolean"){
node=node.toString();
}
if(typeof (node)=="string"){
return self._document.createTextNode(node);
}
if(typeof (node.__dom__)=="function"){
node=node.__dom__(ctx);
continue;
}
if(typeof (node.dom)=="function"){
node=node.dom(ctx);
continue;
}
if(typeof (node)=="function"){
node=node.apply(ctx,[ctx]);
continue;
}
if(im){
var _31a=null;
try{
_31a=iter(node);
}
catch(e){
}
if(_31a){
return map(_318,_31a,_315(ctx));
}
}else{
if(m.isArrayLike(node)){
var func=function(n){
return _318(n,ctx);
};
return map(func,node);
}
}
try{
node=_317.match(node,ctx);
continue;
}
catch(e){
if(e!=_319){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_31e){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_31e)=="string"){
_31e=self.getElement(_31e);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_31e){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_322){
var o={};
o[attr]=_322;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _327=self.attributeArray.renames[attr];
var _328=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_327){
return node[_327];
}
var _329=node.getAttribute(attr);
if(_329!=_328){
return _329;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _32d=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_32d){
return node[_32d];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_32f){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_32f){
var _332=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _32f){
var v=_32f[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_332(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}else{
var _335=self.attributeArray.renames;
for(var k in _32f){
v=_32f[k];
var _336=_335[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_336)=="string"){
elem[_336]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_332(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}
}
return elem;
},appendChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _33a=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _33b=MochiKit.Base.concat;
while(_33a.length){
var n=_33a.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_33a=_33b(n,_33a);
}
}
}
return elem;
},insertSiblingNodesBefore:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _340=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _341=elem.parentNode;
var _342=MochiKit.Base.concat;
while(_340.length){
var n=_340.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_341.insertBefore(n,elem);
}else{
_340=_342(n,_340);
}
}
}
return _341;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _347=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_347);
}else{
return self.appendChildNodes(elem.parentNode,_347);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _34b;
while((_34b=elem.firstChild)){
elem.removeChild(_34b);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_34d){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_34d)=="string"||typeof (_34d)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _352=self._xhtml;
if(_34d&&!self.attributeArray.compliant){
var _353="";
if("name" in _34d){
_353+=" name=\""+self.escapeHTML(_34d.name)+"\"";
}
if(name=="input"&&"type" in _34d){
_353+=" type=\""+self.escapeHTML(_34d.type)+"\"";
}
if(_353){
name="<"+name+_353+">";
_352=false;
}
}
var d=self._document;
if(_352&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_34d){
self.updateNodeAttributes(elem,_34d);
}
if(arguments.length<=2){
return elem;
}else{
var args=m.extend([elem],arguments,2);
return self.appendChildNodes.apply(this,args);
}
},createDOMFunc:function(){
var m=MochiKit.Base;
return m.partial.apply(this,m.extend([MochiKit.DOM.createDOM],arguments));
},removeElement:function(elem){
var self=MochiKit.DOM;
var e=self.coerceToDOM(self.getElement(elem));
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _35c=dest.parentNode;
if(src){
src=self.coerceToDOM(self.getElement(src),_35c);
_35c.replaceChild(src,dest);
}else{
_35c.removeChild(dest);
}
return src;
}
,getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_35f,_360,_361){
var self=MochiKit.DOM;
if(typeof (_35f)=="undefined"||_35f===null){
_35f="*";
}
if(typeof (_361)=="undefined"||_361===null){
_361=self._document;
}
_361=self.getElement(_361);
if(_361==null){
return [];
}
var _363=(_361.getElementsByTagName(_35f)||self._document.all);
if(typeof (_360)=="undefined"||_360===null){
return MochiKit.Base.extend(null,_363);
}
var _364=[];
for(var i=0;i<_363.length;i++){
var _366=_363[i];
var cls=_366.className;
if(typeof (cls)!="string"){
cls=_366.getAttribute("class");
}
if(typeof (cls)=="string"){
var _368=cls.split(" ");
for(var j=0;j<_368.length;j++){
if(_368[j]==_360){
_364.push(_366);
break;
}
}
}
}
return _364;
},_newCallStack:function(path,once){
var rval=function(){
var _36d=arguments.callee.callStack;
for(var i=0;i<_36d.length;i++){
if(_36d[i].apply(this,arguments)===false){
break;
}
}
if(once){
try{
this[path]=null;
}
catch(e){
}
}
};
rval.callStack=[];
return rval;
},addToCallStack:function(_36f,path,func,once){
var self=MochiKit.DOM;
var _374=_36f[path];
var _375=_374;
if(!(typeof (_374)=="function"&&typeof (_374.callStack)=="object"&&_374.callStack!==null)){
_375=self._newCallStack(path,once);
if(typeof (_374)=="function"){
_375.callStack.push(_374);
}
_36f[path]=_375;
}
_375.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_378){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_378=self.getElement(_378);
if(_378){
_378.focus();
}
});
},setElementClass:function(_37a,_37b){
var self=MochiKit.DOM;
var obj=self.getElement(_37a);
if(self.attributeArray.compliant){
obj.setAttribute("class",_37b);
}else{
obj.setAttribute("className",_37b);
}
},toggleElementClass:function(_37e){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_37e)){
self.removeElementClass(obj,_37e);
}
}
},addElementClass:function(_382,_383){
var self=MochiKit.DOM;
var obj=self.getElement(_382);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_383);
return true;
}
if(cls==_383){
return false;
}
var _387=cls.split(" ");
for(var i=0;i<_387.length;i++){
if(_387[i]==_383){
return false;
}
}
self.setElementClass(obj,cls+" "+_383);
return true;
},removeElementClass:function(_389,_38a){
var self=MochiKit.DOM;
var obj=self.getElement(_389);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_38a){
self.setElementClass(obj,"");
return true;
}
var _38e=cls.split(" ");
for(var i=0;i<_38e.length;i++){
if(_38e[i]==_38a){
_38e.splice(i,1);
self.setElementClass(obj,_38e.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_390,_391,_392){
var obj=MochiKit.DOM.getElement(_390);
var res=MochiKit.DOM.removeElementClass(obj,_391);
if(res){
MochiKit.DOM.addElementClass(obj,_392);
}
return res;
},hasElementClass:function(_395,_396){
var obj=MochiKit.DOM.getElement(_395);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _399=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_399.length;j++){
if(_399[j]==arguments[i]){
good=true;
break;
}
}
if(!good){
return false;
}
}
return true;
},escapeHTML:function(s){
return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
},toHTML:function(dom){
return MochiKit.DOM.emitHTML(dom).join("");
},emitHTML:function(dom,lst){
if(typeof (lst)=="undefined"||lst===null){
lst=[];
}
var _3a1=[dom];
var self=MochiKit.DOM;
var _3a3=self.escapeHTML;
var _3a4=self.attributeArray;
while(_3a1.length){
dom=_3a1.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _3a5=[];
var _3a6=_3a4(dom);
for(var i=0;i<_3a6.length;i++){
var a=_3a6[i];
_3a5.push([" ",a.name,"=\"",_3a3(a.value),"\""]);
}
_3a5.sort();
for(i=0;i<_3a5.length;i++){
var _3a9=_3a5[i];
for(var j=0;j<_3a9.length;j++){
lst.push(_3a9[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_3a1.push("</"+dom.tagName.toLowerCase()+">");
var _3ab=dom.childNodes;
for(i=_3ab.length-1;i>=0;i--){
_3a1.push(_3ab[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3a3(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_3ad){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3b2=node.nodeValue;
if(typeof (_3b2)=="string"){
rval.push(_3b2);
}
})(MochiKit.DOM.getElement(node));
if(_3ad){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3b3){
_3b3=MochiKit.DOM.getElement(_3b3);
for(var i=0;i<_3b3.childNodes.length;i++){
var node=_3b3.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},getFirstElementByTagAndClassName:function(_3b6,_3b7,_3b8){
var self=MochiKit.DOM;
if(typeof (_3b6)=="undefined"||_3b6===null){
_3b6="*";
}
if(typeof (_3b8)=="undefined"||_3b8===null){
_3b8=self._document;
}
_3b8=self.getElement(_3b8);
if(_3b8==null){
return null;
}
var _3ba=(_3b8.getElementsByTagName(_3b6)||self._document.all);
if(_3ba.length<=0){
return null;
}else{
if(typeof (_3b7)=="undefined"||_3b7===null){
return _3ba[0];
}
}
for(var i=0;i<_3ba.length;i++){
var _3bc=_3ba[i];
var cls=_3bc.className;
if(typeof (cls)!="string"){
cls=_3bc.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3be=cls.split(" ");
for(var j=0;j<_3be.length;j++){
if(_3be[j]==_3b7){
return _3bc;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_3c1,_3c2){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3c1)=="undefined"||_3c1===null){
_3c1="*";
}else{
_3c1=_3c1.toUpperCase();
}
if(typeof (_3c2)=="undefined"||_3c2===null){
_3c2=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3c4=elem.tagName.toUpperCase();
if((_3c1==="*"||_3c1==_3c4)&&(_3c2===null||self.hasElementClass(elem,_3c2))){
return elem;
}
elem=elem.parentNode;
}
return null;
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3c7="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3c7);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3c8=this._document.createElement("span");
var _3c9;
if(_3c8&&_3c8.attributes&&_3c8.attributes.length>0){
var _3ca=m.filter;
_3c9=function(node){
return _3ca(_3c9.ignoreAttrFilter,node.attributes);
};
_3c9.ignoreAttr={};
var _3cc=_3c8.attributes;
var _3cd=_3c9.ignoreAttr;
for(var i=0;i<_3cc.length;i++){
var a=_3cc[i];
_3cd[a.name]=a.value;
}
_3c9.ignoreAttrFilter=function(a){
return (_3c9.ignoreAttr[a.name]!=a.value);
};
_3c9.compliant=false;
_3c9.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3c9=function(node){
return node.attributes;
};
_3c9.compliant=true;
_3c9.ignoreAttr={};
_3c9.renames={};
}
this.attributeArray=_3c9;
var _3d2=function(_3d3,arr){
var _3d5=arr[0];
var _3d6=arr[1];
var _3d7=_3d6.split(".")[1];
var str="";
str+="if (!MochiKit."+_3d7+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3d7+".\");}";
str+="return "+_3d6+".apply(this, arguments);";
MochiKit[_3d3][_3d5]=new Function(str);
};
var _3d9=this.createDOMFunc;
this.UL=_3d9("ul");
this.OL=_3d9("ol");
this.LI=_3d9("li");
this.DL=_3d9("dl");
this.DT=_3d9("dt");
this.DD=_3d9("dd");
this.TD=_3d9("td");
this.TR=_3d9("tr");
this.TBODY=_3d9("tbody");
this.THEAD=_3d9("thead");
this.TFOOT=_3d9("tfoot");
this.TABLE=_3d9("table");
this.TH=_3d9("th");
this.INPUT=_3d9("input");
this.SPAN=_3d9("span");
this.A=_3d9("a");
this.DIV=_3d9("div");
this.IMG=_3d9("img");
this.BUTTON=_3d9("button");
this.TT=_3d9("tt");
this.PRE=_3d9("pre");
this.H1=_3d9("h1");
this.H2=_3d9("h2");
this.H3=_3d9("h3");
this.H4=_3d9("h4");
this.H5=_3d9("h5");
this.H6=_3d9("h6");
this.BR=_3d9("br");
this.HR=_3d9("hr");
this.LABEL=_3d9("label");
this.TEXTAREA=_3d9("textarea");
this.FORM=_3d9("form");
this.P=_3d9("p");
this.SELECT=_3d9("select");
this.OPTION=_3d9("option");
this.OPTGROUP=_3d9("optgroup");
this.LEGEND=_3d9("legend");
this.FIELDSET=_3d9("fieldset");
this.STRONG=_3d9("strong");
this.CANVAS=_3d9("canvas");
this.$=this.getElement;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT)};
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.MochiKit)=="undefined"){MochiKit.MochiKit={};}

MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual","DragAndDrop","Sortable"];
if(typeof (MochiKit.__compat__)=="undefined"){MochiKit.__compat__=true;}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _82e=document.getElementsByTagName("script");
var _82f="http://www.w3.org/1999/xhtml";
var _830="http://www.w3.org/2000/svg";
var _831="http://www.w3.org/1999/xlink";
var _832="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _834=null;
var _835={};
var i;
var src;
for(i=0;i<_82e.length;i++){
src=null;
switch(_82e[i].namespaceURI){
case _830:
src=_82e[i].getAttributeNS(_831,"href");
break;
default:
src=_82e[i].getAttribute("src");
break;
}
if(!src){continue;}
_835[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_834=_82e[i];}
}if(base===null){return;}
var _838=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_838.length;i++){
if(MochiKit[_838[i]]){continue;}
var uri=base+_838[i]+".js";
if(uri in _835){continue;}
if(_834.namespaceURI==_830||_834.namespaceURI==_832){
var s=document.createElementNS(_834.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_838[i]);
if(_834.namespaceURI==_830){
s.setAttributeNS(_831,"href",uri);
}else{s.setAttribute("src",uri);}
s.setAttribute("type","application/x-javascript");
_834.parentNode.appendChild(s);
}else{
document.write("<"+_834.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}}})();

MochiTableSort=function(){
	this.tbody=null;this.toprow=null;
	this.colfmts=[];this.bodyrows=[];
	this.sortkey=Number.NaN;this.fwdflag=true;
	this.arrownode= document.createElement('span');
	this.arrownode.className= 'tblsortarrow';
};
MochiTableSort.prototype.initWithTable=function(table,headind)
{	table=getElement(table);
	if(!table){return;}	
	this.tbody=table.getElementsByTagName('tbody');
	this.tbody=this.tbody[this.tbody.length-1];	
	var rows= this.tbody.getElementsByTagName('tr');
	if(rows.length<=0){rows=this.tbody.childNodes;}	
	if(!headind||isNaN(headind))
	{	headind=-1;
	}var theadnd=table.getElementsByTagName('thead');
	if(theadnd.length>0&& theadnd[theadnd.length-1].childNodes.length>0&& headind<0)
	{	this.toprow=theadnd[theadnd.length-1];
		this.toprow=this.toprow.childNodes[this.toprow.childNodes.length-1];
		headind=-1;
	}else
	{	if(headind<0){headind=0;}
		if(rows[headind])
		{	this.toprow=rows[headind].cloneNode(true);
		}
	}if(!this.toprow){return;}
	this.pretoprows=[];
	for(var i=0;i<headind;i++)
	{	this.pretoprows.push(rows[i].cloneNode(true));
	}
	for(var i=0;i<this.toprow.childNodes.length;i++)
	{	var node= this.toprow.childNodes[i];
		if(!node.tagName||!node.tagName.match(/^t[hd]$/i)){continue;}		
		var attr=null;
		try{attr=''+node.getAttribute('mochi:format');}catch(err){}		
		this.colfmts.push(attr);
		if(attr!='none')
		{	node.onclick= this.onSortClick(i);
			node.style.cursor='pointer';
		}
	}for(var i=headind+1;i<rows.length;i++)
	{	var row=rows[i];
		var cols= row.getElementsByTagName('td');
		var rowData=[];
		for(var j=0;j<cols.length;j++)
		{	var cell=cols[j];
			var obj= scrapeText(cell);
			switch(this.colfmts[j]){
				case 'isodate':
					obj= isoDate(obj);
					break;
				case 'eosdateparse':
					obj= obj.replace(/ - .*/,'').substring(4);				
				case 'dateparse':
					var obj2= obj;
					if(Date.parse&& (typeof(Date.parse)).search(/funct/i)>=0)
					{	var obj2= Date.parse(obj);									
					}if(isNaN(obj2)){obj2=parseFloat(obj.replace(/\D/g,''));}
					obj= obj2;
					break;			
				case 'float': case 'num':
					obj= parseFloat(obj);
					if(isNaN(obj)){obj=-Infinity;}
					break;
				case 'istr':
					obj=obj.toLowerCase();
					break;
				case 'powval':
					if((typeof(powvalstr_parse)).search(/funct/i)>=0)
					{	obj= powvalstr_parse(obj);
					}break;
				default: break;
			}rowData.push(obj);
		}rowData.row=row.cloneNode(true);
		this.bodyrows.push(rowData);
	}this.drawSortedRows(this.sortkey);
};
MochiTableSort.prototype.onSortClick= function(key){return method(this,function(){	
	this.drawSortedRows(key);
});};
MochiTableSort.prototype.drawSortedRows=function(key){	
	if(!isNaN(key)&& this.sortkey==key)
	{	if(!this.fwdflag)
		{	key=Number.NaN;
		}this.fwdflag=!this.fwdflag;
	}else
	{	this.fwdflag=true;
	}this.sortkey= key;
	if(this.arrownode.parentNode)
	{	this.arrownode.parentNode.removeChild(this.arrownode);
	}var bodyrows2= this.bodyrows.slice(0);
	if(!isNaN(key))
	{	var cmp=(this.fwdflag?keyComparator:reverseKeyComparator);
		bodyrows2.sort(cmp(key));
		this.arrownode.innerHTML= (this.fwdflag?'\u2191':'\u2193');
		this.toprow.childNodes[key].appendChild(this.arrownode);
	}var rowswithhead= map(itemgetter('row'),bodyrows2);
	rowswithhead.unshift(this.toprow);
	for(var j=0;j<this.pretoprows.length;j++)
	{	rowswithhead.unshift(this.pretoprows[j]);
	}
	var newBody=TBODY(null,rowswithhead);
	this.tbody=swapDOM(this.tbody,newBody);
};
