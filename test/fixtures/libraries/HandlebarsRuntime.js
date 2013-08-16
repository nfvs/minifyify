var Handlebars={};module.exports=Handlebars,function(e,r){e.VERSION="1.0.0",e.COMPILER_REVISION=4,e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"},e.helpers={},e.partials={};var t=Object.prototype.toString,n="[object Function]",i="[object Object]";e.registerHelper=function(r,n,o){if(t.call(r)===i){if(o||n)throw new e.Exception("Arg not supported with multiple helpers");e.Utils.extend(this.helpers,r)}else o&&(n.not=o),this.helpers[r]=n},e.registerPartial=function(r,n){t.call(r)===i?e.Utils.extend(this.partials,r):this.partials[r]=n},e.registerHelper("helperMissing",function(e){if(2===arguments.length)return r;throw new Error("Missing helper: '"+e+"'")}),e.registerHelper("blockHelperMissing",function(r,i){var o=i.inverse||function(){},a=i.fn,l=t.call(r);return l===n&&(r=r.call(this)),r===!0?a(this):r===!1||null==r?o(this):"[object Array]"===l?r.length>0?e.helpers.each(r,i):o(this):a(r)}),e.K=function(){},e.createFrame=Object.create||function(r){e.K.prototype=r;var t=new e.K;return e.K.prototype=null,t},e.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(r,t){if(e.logger.level<=r){var n=e.logger.methodMap[r];"undefined"!=typeof console&&console[n]&&console[n].call(console,t)}}},e.log=function(r,t){e.logger.log(r,t)},e.registerHelper("each",function(r,i){var o,a=i.fn,l=i.inverse,s=0,p="",c=t.call(r);if(c===n&&(r=r.call(this)),i.data&&(o=e.createFrame(i.data)),r&&"object"==typeof r)if(r instanceof Array)for(var u=r.length;u>s;s++)o&&(o.index=s),p+=a(r[s],{data:o});else for(var f in r)r.hasOwnProperty(f)&&(o&&(o.key=f),p+=a(r[f],{data:o}),s++);return 0===s&&(p=l(this)),p}),e.registerHelper("if",function(r,i){var o=t.call(r);return o===n&&(r=r.call(this)),!r||e.Utils.isEmpty(r)?i.inverse(this):i.fn(this)}),e.registerHelper("unless",function(r,t){return e.helpers["if"].call(this,r,{fn:t.inverse,inverse:t.fn})}),e.registerHelper("with",function(r,i){var o=t.call(r);return o===n&&(r=r.call(this)),e.Utils.isEmpty(r)?void 0:i.fn(r)}),e.registerHelper("log",function(r,t){var n=t.data&&null!=t.data.level?parseInt(t.data.level,10):1;e.log(n,r)});var o=["description","fileName","lineNumber","message","name","number","stack"];e.Exception=function(){for(var e=Error.prototype.constructor.apply(this,arguments),r=0;r<o.length;r++)this[o[r]]=e[o[r]]},e.Exception.prototype=new Error,e.SafeString=function(e){this.string=e},e.SafeString.prototype.toString=function(){return this.string.toString()};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},l=/[&<>"'`]/g,s=/[&<>"'`]/,p=function(e){return a[e]||"&amp;"};e.Utils={extend:function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])},escapeExpression:function(r){return r instanceof e.SafeString?r.toString():null==r||r===!1?"":(r=r.toString(),s.test(r)?r.replace(l,p):r)},isEmpty:function(e){return e||0===e?"[object Array]"===t.call(e)&&0===e.length?!0:!1:!0}},e.VM={template:function(r){var t={escapeExpression:e.Utils.escapeExpression,invokePartial:e.VM.invokePartial,programs:[],program:function(r,t,n){var i=this.programs[r];return n?i=e.VM.program(r,t,n):i||(i=this.programs[r]=e.VM.program(r,t)),i},merge:function(r,t){var n=r||t;return r&&t&&(n={},e.Utils.extend(n,t),e.Utils.extend(n,r)),n},programWithDepth:e.VM.programWithDepth,noop:e.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var o=r.call(t,e,n,i.helpers,i.partials,i.data),a=t.compilerInfo||[],l=a[0]||1,s=e.COMPILER_REVISION;if(l!==s){if(s>l){var p=e.REVISION_CHANGES[s],c=e.REVISION_CHANGES[l];throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+p+") or downgrade your runtime to an older version ("+c+")."}throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+")."}return o}},programWithDepth:function(e,r,t){var n=Array.prototype.slice.call(arguments,3),i=function(e,i){return i=i||{},r.apply(this,[e,i.data||t].concat(n))};return i.program=e,i.depth=n.length,i},program:function(e,r,t){var n=function(e,n){return n=n||{},r(e,n.data||t)};return n.program=e,n.depth=0,n},noop:function(){return""},invokePartial:function(t,n,i,o,a,l){var s={helpers:o,partials:a,data:l};if(t===r)throw new e.Exception("The partial "+n+" could not be found");if(t instanceof Function)return t(i,s);if(e.compile)return a[n]=e.compile(t,{data:l!==r}),a[n](i,s);throw new e.Exception("The partial "+n+" could not be compiled when running in runtime-only mode")}},e.template=e.VM.template}(Handlebars);
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL29tbm9tbm9tYmVuL0RvY3VtZW50cy9taW5pZnlpZnkvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMtcnVudGltZS9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbW5vbW5vbWJlbi9Eb2N1bWVudHMvbWluaWZ5aWZ5L25vZGVfbW9kdWxlcy9oYW5kbGViYXJzLXJ1bnRpbWUvaGFuZGxlYmFycy5ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkhhbmRsZWJhcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiVkVSU0lPTiIsIkNPTVBJTEVSX1JFVklTSU9OIiwiUkVWSVNJT05fQ0hBTkdFUyIsIjEiLCIyIiwiMyIsIjQiLCJoZWxwZXJzIiwicGFydGlhbHMiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImZ1bmN0aW9uVHlwZSIsIm9iamVjdFR5cGUiLCJyZWdpc3RlckhlbHBlciIsIm5hbWUiLCJmbiIsImludmVyc2UiLCJjYWxsIiwiRXhjZXB0aW9uIiwiVXRpbHMiLCJleHRlbmQiLCJ0aGlzIiwibm90IiwicmVnaXN0ZXJQYXJ0aWFsIiwic3RyIiwiYXJnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiRXJyb3IiLCJjb250ZXh0Iiwib3B0aW9ucyIsInR5cGUiLCJlYWNoIiwiSyIsImNyZWF0ZUZyYW1lIiwiY3JlYXRlIiwib2JqZWN0Iiwib2JqIiwibG9nZ2VyIiwiREVCVUciLCJJTkZPIiwiV0FSTiIsIkVSUk9SIiwibGV2ZWwiLCJtZXRob2RNYXAiLCJsb2ciLCJtZXRob2QiLCJjb25zb2xlIiwiZGF0YSIsImkiLCJyZXQiLCJBcnJheSIsImoiLCJpbmRleCIsImtleSIsImhhc093blByb3BlcnR5IiwiY29uZGl0aW9uYWwiLCJpc0VtcHR5IiwicGFyc2VJbnQiLCJlcnJvclByb3BzIiwidG1wIiwiY29uc3RydWN0b3IiLCJhcHBseSIsImlkeCIsIlNhZmVTdHJpbmciLCJzdHJpbmciLCJlc2NhcGUiLCImIiwiPCIsIj4iLCJcIiIsIiciLCJgIiwiYmFkQ2hhcnMiLCJwb3NzaWJsZSIsImVzY2FwZUNoYXIiLCJjaHIiLCJ2YWx1ZSIsImVzY2FwZUV4cHJlc3Npb24iLCJ0ZXN0IiwicmVwbGFjZSIsIlZNIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZVNwZWMiLCJjb250YWluZXIiLCJpbnZva2VQYXJ0aWFsIiwicHJvZ3JhbXMiLCJwcm9ncmFtIiwicHJvZ3JhbVdyYXBwZXIiLCJtZXJnZSIsInBhcmFtIiwiY29tbW9uIiwicHJvZ3JhbVdpdGhEZXB0aCIsIm5vb3AiLCJjb21waWxlckluZm8iLCJyZXN1bHQiLCJjb21waWxlclJldmlzaW9uIiwiY3VycmVudFJldmlzaW9uIiwicnVudGltZVZlcnNpb25zIiwiY29tcGlsZXJWZXJzaW9ucyIsImFyZ3MiLCJzbGljZSIsImNvbmNhdCIsImRlcHRoIiwicGFydGlhbCIsIkZ1bmN0aW9uIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6IkFBeUJBLEdBQUlBLGNBQ0pDLFFBQU9DLFFBQVVGLFdBRWpCLFNBQVVBLEVBQVlHLEdBSXRCSCxFQUFXSSxRQUFVLFFBQ3JCSixFQUFXSyxrQkFBb0IsRUFFL0JMLEVBQVdNLGtCQUNUQyxFQUFHLGNBQ0hDLEVBQUcsZ0JBQ0hDLEVBQUcsZ0JBQ0hDLEVBQUcsWUFHTFYsRUFBV1csV0FDWFgsRUFBV1ksV0FFWCxJQUFJQyxHQUFXQyxPQUFPQyxVQUFVRixTQUM1QkcsRUFBZSxvQkFDZkMsRUFBYSxpQkFFakJqQixHQUFXa0IsZUFBaUIsU0FBU0MsRUFBTUMsRUFBSUMsR0FDN0MsR0FBSVIsRUFBU1MsS0FBS0gsS0FBVUYsRUFBWSxDQUN0QyxHQUFJSSxHQUFXRCxFQUFNLEtBQU0sSUFBSXBCLEdBQVd1QixVQUFVLDBDQUNwRHZCLEdBQVd3QixNQUFNQyxPQUFPQyxLQUFLZixRQUFTUSxPQUVsQ0UsS0FBV0QsRUFBR08sSUFBTU4sR0FDeEJLLEtBQUtmLFFBQVFRLEdBQVFDLEdBSXpCcEIsRUFBVzRCLGdCQUFrQixTQUFTVCxFQUFN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QUU1RCxJQUFHd0QsSUFBWTFHLEVBQ2IsS0FBTSxJQUFJSCxHQUFXdUIsVUFBVSxlQUFpQkosRUFBTyxzQkFDbEQsSUFBRzBGLFlBQW1CQyxVQUMzQixNQUFPRCxHQUFRM0UsRUFBU0MsRUFDbkIsSUFBS25DLEVBQVcrRyxRQUlyQixNQURBbkcsR0FBU08sR0FBUW5CLEVBQVcrRyxRQUFRRixHQUFVeEQsS0FBTUEsSUFBU2xELElBQ3REUyxFQUFTTyxHQUFNZSxFQUFTQyxFQUgvQixNQUFNLElBQUluQyxHQUFXdUIsVUFBVSxlQUFpQkosRUFBTyw4REFRN0RuQixFQUFXdUYsU0FBV3ZGLEVBQVdzRixHQUFHQyxVQUdqQ3ZGIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuQ29weXJpZ2h0IChDKSAyMDExIGJ5IFllaHVkYSBLYXR6XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxuLy8gbGliL2hhbmRsZWJhcnMvYnJvd3Nlci1wcmVmaXguanNcbnZhciBIYW5kbGViYXJzID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnM7XG5cbihmdW5jdGlvbihIYW5kbGViYXJzLCB1bmRlZmluZWQpIHtcbjtcbi8vIGxpYi9oYW5kbGViYXJzL2Jhc2UuanNcblxuSGFuZGxlYmFycy5WRVJTSU9OID0gXCIxLjAuMFwiO1xuSGFuZGxlYmFycy5DT01QSUxFUl9SRVZJU0lPTiA9IDQ7XG5cbkhhbmRsZWJhcnMuUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc+PSAxLjAuMCdcbn07XG5cbkhhbmRsZWJhcnMuaGVscGVycyAgPSB7fTtcbkhhbmRsZWJhcnMucGFydGlhbHMgPSB7fTtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBmdW5jdGlvblR5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlciA9IGZ1bmN0aW9uKG5hbWUsIGZuLCBpbnZlcnNlKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgaWYgKGludmVyc2UgfHwgZm4pIHsgdGhyb3cgbmV3IEhhbmRsZWJhcnMuRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgIEhhbmRsZWJhcnMuVXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGludmVyc2UpIHsgZm4ubm90ID0gaW52ZXJzZTsgfVxuICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICB9XG59O1xuXG5IYW5kbGViYXJzLnJlZ2lzdGVyUGFydGlhbCA9IGZ1bmN0aW9uKG5hbWUsIHN0cikge1xuICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgIEhhbmRsZWJhcnMuVXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsICBuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gc3RyO1xuICB9XG59O1xuXG5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oYXJnKSB7XG4gIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgaGVscGVyOiAnXCIgKyBhcmcgKyBcIidcIik7XG4gIH1cbn0pO1xuXG5IYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlIHx8IGZ1bmN0aW9uKCkge30sIGZuID0gb3B0aW9ucy5mbjtcblxuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwoY29udGV4dCk7XG5cbiAgaWYodHlwZSA9PT0gZnVuY3Rpb25UeXBlKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICBpZihjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuKHRoaXMpO1xuICB9IGVsc2UgaWYoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gIH0gZWxzZSBpZih0eXBlID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICBpZihjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBIYW5kbGViYXJzLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmbihjb250ZXh0KTtcbiAgfVxufSk7XG5cbkhhbmRsZWJhcnMuSyA9IGZ1bmN0aW9uKCkge307XG5cbkhhbmRsZWJhcnMuY3JlYXRlRnJhbWUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uKG9iamVjdCkge1xuICBIYW5kbGViYXJzLksucHJvdG90eXBlID0gb2JqZWN0O1xuICB2YXIgb2JqID0gbmV3IEhhbmRsZWJhcnMuSygpO1xuICBIYW5kbGViYXJzLksucHJvdG90eXBlID0gbnVsbDtcbiAgcmV0dXJuIG9iajtcbn07XG5cbkhhbmRsZWJhcnMubG9nZ2VyID0ge1xuICBERUJVRzogMCwgSU5GTzogMSwgV0FSTjogMiwgRVJST1I6IDMsIGxldmVsOiAzLFxuXG4gIG1ldGhvZE1hcDogezA6ICdkZWJ1ZycsIDE6ICdpbmZvJywgMjogJ3dhcm4nLCAzOiAnZXJyb3InfSxcblxuICAvLyBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uKGxldmVsLCBvYmopIHtcbiAgICBpZiAoSGFuZGxlYmFycy5sb2dnZXIubGV2ZWwgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBIYW5kbGViYXJzLmxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgY29uc29sZVttZXRob2RdLmNhbGwoY29uc29sZSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkhhbmRsZWJhcnMubG9nID0gZnVuY3Rpb24obGV2ZWwsIG9iaikgeyBIYW5kbGViYXJzLmxvZ2dlci5sb2cobGV2ZWwsIG9iaik7IH07XG5cbkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBmbiA9IG9wdGlvbnMuZm4sIGludmVyc2UgPSBvcHRpb25zLmludmVyc2U7XG4gIHZhciBpID0gMCwgcmV0ID0gXCJcIiwgZGF0YTtcblxuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwoY29udGV4dCk7XG4gIGlmKHR5cGUgPT09IGZ1bmN0aW9uVHlwZSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgIGRhdGEgPSBIYW5kbGViYXJzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gIH1cblxuICBpZihjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgIGlmKGNvbnRleHQgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICBmb3IodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaTxqOyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGEpIHsgZGF0YS5pbmRleCA9IGk7IH1cbiAgICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtpXSwgeyBkYXRhOiBkYXRhIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IodmFyIGtleSBpbiBjb250ZXh0KSB7XG4gICAgICAgIGlmKGNvbnRleHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmKGRhdGEpIHsgZGF0YS5rZXkgPSBrZXk7IH1cbiAgICAgICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2tleV0sIHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoaSA9PT0gMCl7XG4gICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59KTtcblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwoY29uZGl0aW9uYWwpO1xuICBpZih0eXBlID09PSBmdW5jdGlvblR5cGUpIHsgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpOyB9XG5cbiAgaWYoIWNvbmRpdGlvbmFsIHx8IEhhbmRsZWJhcnMuVXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICB9XG59KTtcblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIEhhbmRsZWJhcnMuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7Zm46IG9wdGlvbnMuaW52ZXJzZSwgaW52ZXJzZTogb3B0aW9ucy5mbn0pO1xufSk7XG5cbkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gIHZhciB0eXBlID0gdG9TdHJpbmcuY2FsbChjb250ZXh0KTtcbiAgaWYodHlwZSA9PT0gZnVuY3Rpb25UeXBlKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICBpZiAoIUhhbmRsZWJhcnMuVXRpbHMuaXNFbXB0eShjb250ZXh0KSkgcmV0dXJuIG9wdGlvbnMuZm4oY29udGV4dCk7XG59KTtcblxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwgPyBwYXJzZUludChvcHRpb25zLmRhdGEubGV2ZWwsIDEwKSA6IDE7XG4gIEhhbmRsZWJhcnMubG9nKGxldmVsLCBjb250ZXh0KTtcbn0pO1xuO1xuLy8gbGliL2hhbmRsZWJhcnMvdXRpbHMuanNcblxudmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5IYW5kbGViYXJzLkV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxufTtcbkhhbmRsZWJhcnMuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG4vLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuSGFuZGxlYmFycy5TYWZlU3RyaW5nID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufTtcbkhhbmRsZWJhcnMuU2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5nLnRvU3RyaW5nKCk7XG59O1xuXG52YXIgZXNjYXBlID0ge1xuICBcIiZcIjogXCImYW1wO1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCIsXG4gIFwiYFwiOiBcIiYjeDYwO1wiXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2BdL2c7XG52YXIgcG9zc2libGUgPSAvWyY8PlwiJ2BdLztcblxudmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdIHx8IFwiJmFtcDtcIjtcbn07XG5cbkhhbmRsZWJhcnMuVXRpbHMgPSB7XG4gIGV4dGVuZDogZnVuY3Rpb24ob2JqLCB2YWx1ZSkge1xuICAgIGZvcih2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZih2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZXNjYXBlRXhwcmVzc2lvbjogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgaW5zdGFuY2VvZiBIYW5kbGViYXJzLlNhZmVTdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsIHx8IHN0cmluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpO1xuXG4gICAgaWYoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbiAgfSxcblxuICBpc0VtcHR5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZih0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG47XG4vLyBsaWIvaGFuZGxlYmFycy9ydW50aW1lLmpzXG5cbkhhbmRsZWJhcnMuVk0gPSB7XG4gIHRlbXBsYXRlOiBmdW5jdGlvbih0ZW1wbGF0ZVNwZWMpIHtcbiAgICAvLyBKdXN0IGFkZCB3YXRlclxuICAgIHZhciBjb250YWluZXIgPSB7XG4gICAgICBlc2NhcGVFeHByZXNzaW9uOiBIYW5kbGViYXJzLlV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgICBpbnZva2VQYXJ0aWFsOiBIYW5kbGViYXJzLlZNLmludm9rZVBhcnRpYWwsXG4gICAgICBwcm9ncmFtczogW10sXG4gICAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBmbiwgZGF0YSkge1xuICAgICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldO1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSBIYW5kbGViYXJzLlZNLnByb2dyYW0oaSwgZm4sIGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IEhhbmRsZWJhcnMuVk0ucHJvZ3JhbShpLCBmbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgICAgfSxcbiAgICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICAgIHZhciByZXQgPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbikge1xuICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICAgIEhhbmRsZWJhcnMuVXRpbHMuZXh0ZW5kKHJldCwgY29tbW9uKTtcbiAgICAgICAgICBIYW5kbGViYXJzLlV0aWxzLmV4dGVuZChyZXQsIHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSxcbiAgICAgIHByb2dyYW1XaXRoRGVwdGg6IEhhbmRsZWJhcnMuVk0ucHJvZ3JhbVdpdGhEZXB0aCxcbiAgICAgIG5vb3A6IEhhbmRsZWJhcnMuVk0ubm9vcCxcbiAgICAgIGNvbXBpbGVySW5mbzogbnVsbFxuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgcmVzdWx0ID0gdGVtcGxhdGVTcGVjLmNhbGwoY29udGFpbmVyLCBIYW5kbGViYXJzLCBjb250ZXh0LCBvcHRpb25zLmhlbHBlcnMsIG9wdGlvbnMucGFydGlhbHMsIG9wdGlvbnMuZGF0YSk7XG5cbiAgICAgIHZhciBjb21waWxlckluZm8gPSBjb250YWluZXIuY29tcGlsZXJJbmZvIHx8IFtdLFxuICAgICAgICAgIGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBIYW5kbGViYXJzLkNPTVBJTEVSX1JFVklTSU9OO1xuXG4gICAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG4gICAgICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IEhhbmRsZWJhcnMuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gSGFuZGxlYmFycy5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgICAgIHRocm93IFwiVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gXCIrXG4gICAgICAgICAgICAgICAgXCJQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitydW50aW1lVmVyc2lvbnMrXCIpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoXCIrY29tcGlsZXJWZXJzaW9ucytcIikuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICAgICAgdGhyb3cgXCJUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuIFwiK1xuICAgICAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitjb21waWxlckluZm9bMV0rXCIpLlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSxcblxuICBwcm9ncmFtV2l0aERlcHRoOiBmdW5jdGlvbihpLCBmbiwgZGF0YSAvKiwgJGRlcHRoICovKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuXG4gICAgdmFyIHByb2dyYW0gPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIFtjb250ZXh0LCBvcHRpb25zLmRhdGEgfHwgZGF0YV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xuICAgIHByb2dyYW0ucHJvZ3JhbSA9IGk7XG4gICAgcHJvZ3JhbS5kZXB0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHJldHVybiBwcm9ncmFtO1xuICB9LFxuICBwcm9ncmFtOiBmdW5jdGlvbihpLCBmbiwgZGF0YSkge1xuICAgIHZhciBwcm9ncmFtID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zLmRhdGEgfHwgZGF0YSk7XG4gICAgfTtcbiAgICBwcm9ncmFtLnByb2dyYW0gPSBpO1xuICAgIHByb2dyYW0uZGVwdGggPSAwO1xuICAgIHJldHVybiBwcm9ncmFtO1xuICB9LFxuICBub29wOiBmdW5jdGlvbigpIHsgcmV0dXJuIFwiXCI7IH0sXG4gIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uKHBhcnRpYWwsIG5hbWUsIGNvbnRleHQsIGhlbHBlcnMsIHBhcnRpYWxzLCBkYXRhKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7IGhlbHBlcnM6IGhlbHBlcnMsIHBhcnRpYWxzOiBwYXJ0aWFscywgZGF0YTogZGF0YSB9O1xuXG4gICAgaWYocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgSGFuZGxlYmFycy5FeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgZm91bmRcIik7XG4gICAgfSBlbHNlIGlmKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICghSGFuZGxlYmFycy5jb21waWxlKSB7XG4gICAgICB0aHJvdyBuZXcgSGFuZGxlYmFycy5FeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsc1tuYW1lXSA9IEhhbmRsZWJhcnMuY29tcGlsZShwYXJ0aWFsLCB7ZGF0YTogZGF0YSAhPT0gdW5kZWZpbmVkfSk7XG4gICAgICByZXR1cm4gcGFydGlhbHNbbmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG59O1xuXG5IYW5kbGViYXJzLnRlbXBsYXRlID0gSGFuZGxlYmFycy5WTS50ZW1wbGF0ZTtcbjtcbi8vIGxpYi9oYW5kbGViYXJzL2Jyb3dzZXItc3VmZml4LmpzXG59KShIYW5kbGViYXJzKTtcbjtcbiJdfQ==