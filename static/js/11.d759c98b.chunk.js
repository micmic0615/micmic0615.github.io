webpackJsonp([11],{518:function(A,n,t){var o=t(544);"string"==typeof o&&(o=[[A.i,o,""]]);var e={hmr:!1};e.transform=void 0;t(517)(o,e);o.locals&&(A.exports=o.locals)},544:function(A,n,t){n=A.exports=t(516)(!0),n.push([A.i,".container{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.staff{height:240px;position:relative;-webkit-transform:scaleY(.75);-ms-transform:scaleY(.75);transform:scaleY(.75)}.staff,.staff>.lines{width:100%;border-top:1px solid #000;border-bottom:1px solid #000}.staff>.lines{height:60px}#note_container{width:100%;height:100%;position:absolute;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.staff>#note_container>.note{width:60px;height:60px;margin:0 15px;border-radius:40px;background-color:#000;position:relative;top:360px}.staff>#note_container>.note>.strike{height:2px;width:100px;background-color:#000;position:absolute;left:-20px}.staff>#note_container>.note>.strike.mid{top:30px}.staff>#note_container>.note>.strike.top{top:0}.staff>#note_container>.note>.strike.bot{top:60px}#mode_selector,#scale_selector{width:180px;height:40px;padding:0 10px;font-size:24px;outline:none;position:absolute;top:10px;left:10px}#score_container{font-size:200px;color:#aff;margin-top:0}#score_assist_container,#score_container{position:absolute;display:block;right:20px}#score_assist_container{font-size:74px;color:#fbb;margin-top:-130px}#score_average_container{font-size:74px;position:absolute;display:block;right:20px;color:#aaa;margin-top:130px}#correct_display{width:540px;height:5px;background-color:#ddd;position:absolute;top:740px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}#correct_bar{width:100%;height:100%;background-color:#888}#note_toastr_container{position:absolute;top:50%;left:50%;font-size:48px;width:120px;height:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-left:-50px;margin-top:-50px;color:#aaa}.note_toastr{position:absolute;top:0;opacity:1;-webkit-transition:all 2s;-o-transition:2s all;transition:all 2s}","",{version:3,sources:["C:/Users/CEDC_1707_058/Desktop/PERSONAL SHIT/pitch-shit/src/assets/css/old.scss"],names:[],mappings:"AAAA,WACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,mBAAoB,AACpB,qBAAsB,AACtB,sBAAwB,CAAE,AAE5B,OAEE,aAAc,AAGd,kBAAmB,AACnB,8BAAkC,AAClC,0BAA8B,AAC9B,qBAA0B,CAAE,AAE9B,qBATE,WAAY,AAEZ,0BAA2B,AAC3B,4BAA8B,CAUE,AAJlC,cAEE,WAAa,CAEmB,AAElC,gBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAS,AACT,OAAU,AACV,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,sBAAwB,CAAE,AAE5B,6BACE,WAAY,AACZ,YAAa,AACb,cAAiB,AACjB,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,SAAW,CAAE,AAEf,qCACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,UAAY,CAAE,AAEhB,yCACE,QAAU,CAAE,AAEd,yCACE,KAAS,CAAE,AAEb,yCACE,QAAU,CAAE,AAYd,+BACE,YAAa,AACb,YAAa,AACb,eAAkB,AAClB,eAAgB,AAChB,aAAc,AACd,kBAAmB,AACnB,SAAU,AACV,SAAW,CAAE,AAEf,iBACE,gBAAiB,AAIjB,WAAY,AACZ,YAAgB,CAAE,AAEpB,yCANE,kBAAmB,AACnB,cAAe,AACf,UAAY,CAUS,AANvB,wBACE,eAAgB,AAIhB,WAAY,AACZ,iBAAmB,CAAE,AAEvB,yBACE,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,gBAAkB,CAAE,AAEtB,iBACE,YAAa,AACb,WAAY,AACZ,sBAAuB,AACvB,kBAAmB,AACnB,UAAW,AACX,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,sBAAwB,CAAE,AAE5B,aACE,WAAY,AACZ,YAAa,AACb,qBAAuB,CAAE,AAE3B,uBACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,eAAgB,AAChB,YAAa,AACb,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,mBAAoB,AACpB,qBAAsB,AACtB,uBAAwB,AACxB,kBAAmB,AACnB,iBAAkB,AAClB,UAAY,CAAE,AAEhB,aACE,kBAAmB,AACnB,MAAS,AACT,UAAW,AACX,0BAA2B,AAC3B,qBAAsB,AACtB,iBAAmB,CAAE",file:"old.scss",sourcesContent:[".container {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.staff {\n  width: 100%;\n  height: 240px;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n  position: relative;\n  -webkit-transform: scale(1, 0.75);\n  -ms-transform: scale(1, 0.75);\n  transform: scale(1, 0.75); }\n\n.staff > .lines {\n  width: 100%;\n  height: 60px;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000; }\n\n#note_container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.staff > #note_container > .note {\n  width: 60px;\n  height: 60px;\n  margin: 0px 15px;\n  border-radius: 40px;\n  background-color: #000;\n  position: relative;\n  top: 360px; }\n\n.staff > #note_container > .note > .strike {\n  height: 2px;\n  width: 100px;\n  background-color: #000;\n  position: absolute;\n  left: -20px; }\n\n.staff > #note_container > .note > .strike.mid {\n  top: 30px; }\n\n.staff > #note_container > .note > .strike.top {\n  top: 0px; }\n\n.staff > #note_container > .note > .strike.bot {\n  top: 60px; }\n\n#mode_selector {\n  width: 180px;\n  height: 40px;\n  padding: 0px 10px;\n  font-size: 24px;\n  outline: none;\n  position: absolute;\n  top: 10px;\n  left: 10px; }\n\n#scale_selector {\n  width: 180px;\n  height: 40px;\n  padding: 0px 10px;\n  font-size: 24px;\n  outline: none;\n  position: absolute;\n  top: 10px;\n  left: 10px; }\n\n#score_container {\n  font-size: 200px;\n  position: absolute;\n  display: block;\n  right: 20px;\n  color: #aff;\n  margin-top: 0px; }\n\n#score_assist_container {\n  font-size: 74px;\n  position: absolute;\n  display: block;\n  right: 20px;\n  color: #fbb;\n  margin-top: -130px; }\n\n#score_average_container {\n  font-size: 74px;\n  position: absolute;\n  display: block;\n  right: 20px;\n  color: #aaa;\n  margin-top: 130px; }\n\n#correct_display {\n  width: 540px;\n  height: 5px;\n  background-color: #ddd;\n  position: absolute;\n  top: 740px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n#correct_bar {\n  width: 100%;\n  height: 100%;\n  background-color: #888; }\n\n#note_toastr_container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 48px;\n  width: 120px;\n  height: 50px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-left: -50px;\n  margin-top: -50px;\n  color: #aaa; }\n\n.note_toastr {\n  position: absolute;\n  top: 0px;\n  opacity: 1;\n  -webkit-transition: 2s all;\n  -o-transition: 2s all;\n  transition: 2s all; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=11.d759c98b.chunk.js.map