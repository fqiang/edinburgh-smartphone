var org_apache_cxf_XSI_namespace_uri="http://www.w3.org/2001/XMLSchema-instance";var org_apache_cxf_XSD_namespace_uri="http://www.w3.org/2001/XMLSchema";function cxf_apache_org_util_null_trace(a){}function CxfApacheOrgUtil(){if("function"==typeof(org_apache_cxf_trace)){this.trace=org_apache_cxf_trace.trace;this.trace("Javascript tracing enabled.")}else{this.trace=cxf_apache_org_util_null_trace}}CxfApacheOrgUtil.prototype.ELEMENT_NODE=1;function org_apache_cxf_getNodeLocalName(a){if("localName" in a){return a.localName}else{return a.baseName}}CxfApacheOrgUtil.prototype.getNodeLocalName=org_apache_cxf_getNodeLocalName;function org_apache_cxf_getNamespaceURI(b,c){var a=null;if(b.nodeType==9){return null}else{a=org_apache_cxf_findNamespace(b,c);if(a==null){a=org_apache_cxf_getNamespaceURI(b.parentNode,c)}else{return a}}return a}function org_apache_cxf_findNamespace(d,f){var b=d.attributes;if((b!=null)&&(b.length>0)){for(var a=0;a<b.length;a++){var g=b.item(a).nodeName;var c=org_apache_cxf_getPrefix(b.item(a).nodeName);var e=org_apache_cxf_getLocalName(b.item(a).nodeName);if((f==null)&&(c==null)&&(e=="xmlns")){return b.item(a).nodeValue}else{if((c=="xmlns")&&(e==f)){return b.item(a).nodeValue}}}return null}}function org_apache_cxf_get_node_namespaceURI(a){var b=org_apache_cxf_getPrefix(a.nodeName);return org_apache_cxf_getNamespaceURI(a,b)}CxfApacheOrgUtil.prototype.getElementNamespaceURI=org_apache_cxf_get_node_namespaceURI;function org_apache_cxf_any_ns_matcher(c,b,d,a){this.style=c;this.tns=b;this.nslist=d;this.nextLocalPart=a}org_apache_cxf_any_ns_matcher.ANY="##any";org_apache_cxf_any_ns_matcher.OTHER="##other";org_apache_cxf_any_ns_matcher.LOCAL="##local";org_apache_cxf_any_ns_matcher.LISTED="listed";function org_apache_cxf_any_ns_matcher_match(c,b){switch(this.style){case org_apache_cxf_any_ns_matcher.ANY:return true;case org_apache_cxf_any_ns_matcher.OTHER:return c!=this.tns;case org_apache_cxf_any_ns_matcher.LOCAL:return c==null||c=="";case org_apache_cxf_any_ns_matcher.LISTED:for(var a in this.nslist){var d=this.nslist[a];if(d=="##local"){if((c==null||c=="")&&(this.nextLocalPart!=null&&b!=this.nextLocalPart)){return true}}else{if(d==c){return true}}}return false}}org_apache_cxf_any_ns_matcher.prototype.match=org_apache_cxf_any_ns_matcher_match;function org_apache_cxf_getPrefix(a){var c;var b=a.indexOf(":");if(b==-1){return null}else{return c=a.substring(0,b)}}function org_apache_cxf_getLocalName(a){var c;var b=a.indexOf(":");if(b==-1){return a}else{return c=a.substring(b+1,a.length)}}function org_apache_cxf_element_name_for_trace(a){if(a==null){return"Null"}else{if(a==undefined){return"Undefined"}else{var b="";if(a.namespaceURI!=null&&a.namespaceURI!=""){b=b+"{"+a.namespaceURI+"}"}return b+this.getNodeLocalName(a)}}}CxfApacheOrgUtil.prototype.traceElementName=org_apache_cxf_element_name_for_trace;function org_apache_cxf_escapeXmlEntities(a){if(a==null||a==undefined){return""}else{a=String(a);return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}CxfApacheOrgUtil.prototype.escapeXmlEntities=org_apache_cxf_escapeXmlEntities;function org_apache_cxf_isElementNil(b){if(b==null){throw"null node passed to isElementNil"}if("function"==typeof b.getAttributeNS){var a=b.getAttributeNS("http://www.w3.org/2001/XMLSchema-instance","nil");return a!=null&&a=="true"}else{var a=b.getAttribute("xsi:nil");return a!=null&&a=="true"}}CxfApacheOrgUtil.prototype.isElementNil=org_apache_cxf_isElementNil;function org_apache_cxf_getFirstElementChild(a){if(a==undefined){throw"undefined node to getFirstElementChild"}var b;for(b=a.firstChild;b!=null&&b.nodeType!=this.ELEMENT_NODE;b=b.nextSibling){}return b}CxfApacheOrgUtil.prototype.getFirstElementChild=org_apache_cxf_getFirstElementChild;function org_apache_cxf_getNextElementSibling(a){if(a==undefined){throw"undefined node to getNextElementSibling"}if(a==null){throw"null node to getNextElementSibling"}var b;for(b=a.nextSibling;b!=null&&b.nodeType!=this.ELEMENT_NODE;b=b.nextSibling){}return b}CxfApacheOrgUtil.prototype.getNextElementSibling=org_apache_cxf_getNextElementSibling;function org_apache_cxf_isNodeNamedNS(c,b,a){if(c==undefined){throw"undefined node to isNodeNamedNS"}if(b==""||b==null){if(c.namespaceURI==""||c.namespaceURI==null){return a==org_apache_cxf_getNodeLocalName(c)}else{return false}}else{return b==c.namespaceURI&&a==org_apache_cxf_getNodeLocalName(c)}}CxfApacheOrgUtil.prototype.isNodeNamedNS=org_apache_cxf_isNodeNamedNS;function org_apache_cxf_getNodeText(c){var b="";for(var a=0;a<c.childNodes.length;a++){b=b+c.childNodes[a].nodeValue}return b}CxfApacheOrgUtil.prototype.getNodeText=org_apache_cxf_getNodeText;function org_apache_cxf_begin_soap11_message(a){var b='<?xml version="1.0" encoding="UTF-8"?><soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap-env:Body '+a+">";return b}CxfApacheOrgUtil.prototype.beginSoap11Message=org_apache_cxf_begin_soap11_message;function org_apache_cxf_end_soap11_message(){return"</soap-env:Body></soap-env:Envelope>"}CxfApacheOrgUtil.prototype.endSoap11Message=org_apache_cxf_end_soap11_message;var org_apache_cxf_base64_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function org_apache_cxf_base64_encode64array(d){var a="";var l,j,g;var k,h,f,e;var b=0;do{var c=1;l=j=g=0;l=d[b++];if(b<d.length){j=d[b++];c++}if(b<d.length){g=d[b++];c++}k=l>>2;h=((l&3)<<4)|(j>>4);if(c>1){f=((j&15)<<2)|(g>>6);if(c>2){e=g&63}else{e=64}}else{f=e=64}a=a+org_apache_cxf_base64_keyStr.charAt(k)+org_apache_cxf_base64_keyStr.charAt(h)+org_apache_cxf_base64_keyStr.charAt(f)+org_apache_cxf_base64_keyStr.charAt(e)}while(b<d.length);return a}function org_apache_cxf_base64_encode64Unicode(b){var d=new Array(2+(b.length*2));d[0]=255;d[1]=254;for(var a=0;a<b.length;a++){var e=b.charCodeAt(a);d[2+(a*2)]=e&255;d[3+(a*2)]=(e>>8)&255}return encode64array(d)}function org_apache_cxf_base64_encode64UTF8(b){var e=0;for(var c=0;c<b.length;c++){if(b.charCodeAt(c)<128){++e}else{if(b.charCodeAt(c)<2048){e+=2}else{if(b.charCodeAt(c)<65536){e+=3}else{e+=4}}}}var d=new Array(e);var a=0;for(var c=0;c<b.length;c++){if(b.charCodeAt(c)<128){d[a++]=b.charCodeAt(c)}else{if(b.charCodeAt(c)<2048){d[a++]=((b.charCodeAt(c)>>6)|192);d[a++]=((b.charCodeAt(c)&63)|128)}else{if(b.charCodeAt(c)<65536){d[a++]=((b.charCodeAt(c)>>12)|224);d[a++]=(((b.charCodeAt(c)>>6)&63)|128);d[a++]=((b.charCodeAt(c)&63)|128)}else{d[a++]=((b.charCodeAt(c)>>18)|240);d[a++]=(((b.charCodeAt(c)>>12)&63)|128);d[a++]=(((b.charCodeAt(c)>>6)&63)|128);d[a++]=((b.charCodeAt(c)&63)|128)}}}}return encode64array(d)}function org_apache_cxf_base64_decode64array(c){var a=new Array();var k,h,f;var j,g,e,d;var b=0;c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{j=org_apache_cxf_base64_keyStr.indexOf(c.charAt(b++));g=org_apache_cxf_base64_keyStr.indexOf(c.charAt(b++));e=org_apache_cxf_base64_keyStr.indexOf(c.charAt(b++));d=org_apache_cxf_base64_keyStr.indexOf(c.charAt(b++));k=(j<<2)|(g>>4);h=((g&15)<<4)|(e>>2);f=((e&3)<<6)|d;a[a.length]=k;if(e!=64){a[a.length]=h}if(d!=64){a[a.length]=f}}while(b<c.length);return a}var org_apache_cxf_base64_hD="0123456789ABCDEF";function org_apache_cxf_base64_d2h(b){var a=org_apache_cxf_base64_hD.substr(b&15,1);while(b>15){b>>=4;a=org_apache_cxf_base64_hD.substr(b&15,1)+a}return a}function org_apache_cxf_base64_decode64Unicode(e){var b=org_apache_cxf_base64_decode64array(e);var f;var d="";if(b[0]==255&&b[1]==254){f=true}else{if(b[0]==254&&b[1]==255){f=false}else{confirm("Problem with decoding utf-16")}}for(var a=2;a<b.length;a=a+2){var g;if(f){g=(b[a+1]<<8)|b[a]}else{g=(b[a]<<8)|b[a+1]}d=d+String.fromCharCode(g)}return d}function org_apache_cxf_base64_decode64UTF8(b){var a=org_apache_cxf_base64_decode64array(b);var g="";var h=new Array();var f=0;var j;var e;var d;while(f<a.length){j=a[f];if(j<128){g+=String.fromCharCode(j);f++}else{if((j>191)&&(j<224)){e=a[f+1];g+=String.fromCharCode(((j&31)<<6)|(e&63));f+=2}else{e=a[f+1];d=a[f+2];g+=String.fromCharCode(((j&15)<<12)|((e&63)<<6)|(d&63));f+=3}}}return g}var org_apache_cxf_XOP_NS="http://www.w3.org/2004/08/xop/include";function org_apache_cxf_deserialize_MTOM_or_base64(d){var a=this.getFirstElementChild(d);if(a==null){var c=this.getNodeText(d);return org_apache_cxf_base64_decode64UTF8(c)}if(!org_apache_cxf_isNodeNamedNS(a,org_apache_cxf_XOP_NS,"Include")){this.trace("Invalid child element of base64 element");return""}var b=a.getAttribute("href");if(!b){this.trace("missing href for xop:Include");return""}if(b.length<4||b.substr(0,4)!="cid:"){this.trace("Non-cid href in xop:Include: "+b);return""}var f=b.substr(4);var e=this.client.parts[f];if(!e){this.trace("xop:Include href points to missing attachment: "+b);return""}return e.data}CxfApacheOrgUtil.prototype.deserializeBase64orMom=org_apache_cxf_deserialize_MTOM_or_base64;function CxfApacheOrgClient(a){a.trace("Client constructor");this.utils=a;a.client=this;this.mtomparts=[];this.soapAction="";this.messageType="CALL";this.onsuccess=null;this.onerror=null;this.READY_STATE_UNINITIALIZED=0;this.READY_STATE_LOADING=1;this.READY_STATE_LOADED=2;this.READY_STATE_INTERACTIVE=3;this.READY_STATE_DONE=4}var org_apache_cxf_pad_string_PAD_LEFT=0;var org_apache_cxf_pad_string_PAD_RIGHT=1;var org_apache_cxf_pad_string_PAD_BOTH=2;function org_apache_cxf_pad_string(c,b,e,d){var a=new String();b=isNaN(b)?0:b-c.length;e=typeof(e)=="string"?e:" ";if(d==org_apache_cxf_pad_string_PAD_BOTH){c=org_apache_cxf_pad_sring(Math.floor(b/2)+c.length,e,org_apache_cxf_pad_string_PAD_LEFT);return(org_apache_cxf_pad_string(Math.ceil(b/2)+c.length,e,org_apache_cxf_pad_string_PAD_RIGHT))}while((b-=e.length)>0){a+=e}a+=e.substr(0,b+e.length);return(d==org_apache_cxf_pad_string_PAD_LEFT?a.concat(c):c.concat(a))}function org_apache_cxf_random_int(b,a){if(!isFinite(b)){b=0}if(!isFinite(a)){a=1}return Math.floor((Math.random()%1)*(a-b+1)+b)}function org_apache_cxf_random_hex_string(a){var b=org_apache_cxf_random_int(0,Math.pow(16,a)-1);return org_apache_cxf_pad_string(b.toString(16),a,"0",org_apache_cxf_pad_string_PAD_LEFT)}function org_apache_cxf_make_uuid(f){switch((f||"v4").toUpperCase()){case"V4":var d=org_apache_cxf_random_hex_string(8);var c=org_apache_cxf_random_hex_string(4);var e="4"+org_apache_cxf_random_hex_string(3);var b=org_apache_cxf_random_int(0,255);b=((b&~(1<<6))|(1<<7)).toString(16);var a=org_apache_cxf_random_hex_string(2);var g=org_apache_cxf_random_hex_string(12);return(d+"-"+c+"-"+e+"-"+b+a+"-"+g);case"NIL":return"00000000-0000-0000-0000-000000000000"}return null}var ORG_APACHE_CXF_XMLHTTPREQUEST_MS_PROGIDS=new Array("Msxml2.XMLHTTP.7.0","Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP");function org_apache_cxf_getXMLHttpRequest(){var a=null;try{a=new XMLHttpRequest();return a}catch(c){}if(window.ActiveXObject!=null){var d=false;for(var b=0;b<ORG_APACHE_CXF_XMLHTTPREQUEST_MS_PROGIDS.length&&!d;b++){try{a=new ActiveXObject(ORG_APACHE_CXF_XMLHTTPREQUEST_MS_PROGIDS[b]);d=true}catch(c){}}if(!d){this.utils.trace("Unable to get any Microsoft XML HttpRequest object.");throw"org_apache_cxf no Microsoft XMLHttpRequest"}}return a}CxfApacheOrgClient.prototype.getXMLHttpRequest=org_apache_cxf_getXMLHttpRequest;var ORG_APACHE_CXF_MTOM_REQUEST_HEADER='Content-Type: application/xop+xml; type="text/xml"; charset=utf-8\r\n';function org_apache_cxf_client_request(c,k,a,m,e){this.utils.trace("request "+c);this.url=c;this.sync=m;this.req=null;if(a){this.method=a}else{if(k){this.method="POST"}else{this.method="GET"}}try{this.req=this.getXMLHttpRequest()}catch(g){this.utils.trace("Error creating XMLHttpRequest: "+g);this.req=null}if(this.req==null){this.utils.trace("Unable to create request object.");throw"ORG_APACHE_CXF_NO_REQUEST_OBJECT"}this.utils.trace("about to open "+this.method+" "+this.url);this.req.open(this.method,this.url,!this.sync);var f;if(this.mtomparts.length>0){var b=org_apache_cxf_make_uuid("v4");f="@_bOuNDaRy_"+b;var o='multipart/related; start-info="text/xml"; type="application/xop+xml"; boundary="'+f+'"';this.req.setRequestHeader("Content-Type",o)}else{this.req.setRequestHeader("Content-Type","text/xml;charset=utf-8")}if(e){for(var i in e){if(e.hasOwnProperty(i)){this.req.setRequestHeader(i,e[i])}}}this.req.setRequestHeader("MessageType",this.messageType);var n=this;this.req.onreadystatechange=function(){n.onReadyState()};this.utils.trace("about to send data"+this.method+" "+this.url);var j;if(this.mtomparts.length==0){j=k}else{j="--"+f+"\r\n";j=j+ORG_APACHE_CXF_MTOM_REQUEST_HEADER+"\r\n";j=j+k;for(var l in this.mtomparts){var d=this.mtomparts[l];j+="\r\n\r\n--"+f+"\r\n";j+=d}j+="--"+f+"--\r\n"}this.req.send(j)}CxfApacheOrgClient.prototype.request=org_apache_cxf_client_request;function org_apache_cxf_trim_string(a){return a.replace(/^\s+|\s+$/g,"")}function org_apache_cxf_parse_mime_keyword_value_pairs(c){var b=[];for(var a=1;a<c.length;a=a+1){var g=c[a];var f=g.indexOf("=");if(f!=-1){var e=g.substr(0,f);var d=g.substr(f+1);d=org_apache_cxf_trim_string(d);if(d.charAt(0)=='"'){d=d.substr(1,d.length-2)}if(d.charAt(0)=="'"){d=d.substr(1,d.length-2)}b[org_apache_cxf_trim_string(e.toLowerCase())]=d}}return b}function org_apache_cxf_regexp_escape(b){if(!arguments.callee.sRE){var a=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];arguments.callee.sRE=new RegExp("(\\"+a.join("|\\")+")","g")}return b.replace(arguments.callee.sRE,"\\$1")}function org_apache_cxf_parse_multipart_related(){var r=this.req.getResponseHeader("content-type");if(!r){return false}var n=r.split(/\s*;\s*/);var e=n[0].toLowerCase();if(e!="multipart/related"){return false}var t=org_apache_cxf_parse_mime_keyword_value_pairs(n);var q=t.boundary;if(!q){return false}q="--"+q;var k=this.req.responseText;var o=k.split(q);this.parts=[];for(var m=1;m<o.length-1;m++){var s=false;var j=0;var g=o[m];var c=[];nextHeaderLine:for(var b=g.indexOf("\r",j);b!=-1;j=b+1,b=g.indexOf("\r",j)){var a=g.slice(j,b);if(a==""){if(g.charAt(b+1)=="\n"){b++}if(s){break nextHeaderLine}else{continue nextHeaderLine}}s=true;var p=a.indexOf(":");var l=a.slice(0,p).toLowerCase();var h=a.substr(p+1);c[l]=org_apache_cxf_trim_string(h);if(g.charAt(b+1)=="\n"){b++}}var f=new Object();if(g.charAt(j+1)=="\n"){j=j+1}f.data=g.substr(j);f.contentType=c["content-type"];if(m>1){var i=c["content-id"];i=i.substr(1,i.length-2);f.cid=i;this.parts[i]=f}else{var u;if(window.ActiveXObject){u=new ActiveXObject("Microsoft.XMLDOM");u.async="false";u.loadXML(f.data)}else{var d=new DOMParser();u=d.parseFromString(f.data,"text/xml")}this.mpResponseXML=u}}return true}CxfApacheOrgClient.prototype.parseMultipartRelated=org_apache_cxf_parse_multipart_related;function org_apache_cxf_client_onReadyState(){var c=this.req;var b=c.readyState;this.utils.trace("onreadystatechange "+b);if(b==this.READY_STATE_DONE){var a;try{a=c.status}catch(d){this.utils.trace("onreadystatechange DONE ERROR retrieving status (connection error?)");if(this.onerror!=null){this.onerror(d)}return}this.utils.trace("onreadystatechange DONE "+a);if(a==200||a==0){if(this.onsuccess!=null){if(!c.responseXML){if(this.parseMultipartRelated()){this.onsuccess(this,this.mpResponseXML);return}if(this.onerror!=null){this.onerror("Could not handle content of response.");return}}this.onsuccess(this,c.responseXML)}}else{this.utils.trace("onreadystatechange DONE ERROR "+c.getAllResponseHeaders()+" "+c.statusText+" "+c.responseText);if(this.onerror!=null){this.onerror(this)}}}}CxfApacheOrgClient.prototype.onReadyState=org_apache_cxf_client_onReadyState;function org_apache_cxf_package_mtom(c){var b=org_apache_cxf_make_uuid("v4");var d='<xop:Include xmlns:xop="http://www.w3.org/2004/08/xop/include" href="cid:'+b+'" />';var a='Content-Type: text/plain; charset="utf-8";\r\nContent-ID: <'+b+">\r\n\r\n"+c+"\r\n";this.client.mtomparts.push(a);return d}CxfApacheOrgUtil.prototype.packageMtom=org_apache_cxf_package_mtom;function org_apache_cxf_any_holder(c,a,b){this.typeMarker="org_apache_cxf_any_holder";this.namespaceURI=c;this.localName=a;this.qname="{"+c+"}"+a;this.object=b;this.raw=false}function org_apache_cxf_raw_any_holder(a){this.typeMarker="org_apache_cxf_raw_any_holder";this.xml=a;this.raw=true;this.xsiType=false}function org_apache_cxf_raw_typed_any_holder(c,a,b){this.typeMarker="org_apache_cxf_raw_any_holder";this.namespaceURI=c;this.localName=a;this.xml=b;this.raw=true;this.xsiType=true}function org_apache_cxf_get_xsi_type(d){var b=d.attributes;if((b!=null)&&(b.length>0)){for(var a=0;a<b.length;a++){var g=b.item(a).nodeName;var c=org_apache_cxf_getPrefix(b.item(a).nodeName);var e=org_apache_cxf_getLocalName(b.item(a).nodeName);if(e=="type"){var f=org_apache_cxf_getNamespaceURI(d,c);if(f==org_apache_cxf_XSI_namespace_uri){return b.item(a).nodeValue}}}return null}}function org_apache_cxf_deserialize_anyType(j,f){var g=org_apache_cxf_get_xsi_type(f);if(g!=null){var e=org_apache_cxf_getPrefix(g);var d=org_apache_cxf_getLocalName(g);var a=org_apache_cxf_getNamespaceURI(f,e);if(a==org_apache_cxf_XSD_namespace_uri){var c=f.firstChild;if(c==null){return null}var h=c.nodeValue;if(h==null){return null}if(d=="int"||d=="unsignedInt"||d=="long"||d=="unsignedLong"){return parseInt(h)}if(d=="float"||d=="double"){return parseFloat(h)}if(d=="boolean"){return h=="true"}return h}var b="{"+a+"}"+d;var i=j.interfaceObject.globalElementDeserializers[b];if(i!=null){return i(j,f)}}return f};