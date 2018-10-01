webpackJsonp([5],{212:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(543),o=t.n(n);e.default=o.a.any},543:function(i,e,t){var n,o,d;/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
!function(t){var s=/iPhone/i,r=/iPod/i,b=/iPad/i,a=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,h=/Android/i,p=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,l=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,c=/Windows Phone/i,v=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,f=/BlackBerry/i,w=/BB10/i,u=/Opera Mini/i,A=/(CriOS|Chrome)(?=.*\bMobile\b)/i,F=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,K=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),W=function(i,e){return i.test(e)},y=function(i){var e=i||navigator.userAgent,t=e.split("[FBAN");if(void 0!==t[1]&&(e=t[0]),t=e.split("Twitter"),void 0!==t[1]&&(e=t[0]),this.apple={phone:W(s,e),ipod:W(r,e),tablet:!W(s,e)&&W(b,e),device:W(s,e)||W(r,e)||W(b,e)},this.amazon={phone:W(p,e),tablet:!W(p,e)&&W(l,e),device:W(p,e)||W(l,e)},this.android={phone:W(p,e)||W(a,e),tablet:!W(p,e)&&!W(a,e)&&(W(l,e)||W(h,e)),device:W(p,e)||W(l,e)||W(a,e)||W(h,e)},this.windows={phone:W(c,e),tablet:W(v,e),device:W(c,e)||W(v,e)},this.other={blackberry:W(f,e),blackberry10:W(w,e),opera:W(u,e),firefox:W(F,e),chrome:W(A,e),device:W(f,e)||W(w,e)||W(u,e)||W(F,e)||W(A,e)},this.seven_inch=W(K,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},x=function(){var i=new y;return i.Class=y,i};void 0!==i&&i.exports&&"undefined"==typeof window?i.exports=y:void 0!==i&&i.exports&&"undefined"!=typeof window?i.exports=x():(o=[],n=t.isMobile=x(),void 0!==(d="function"==typeof n?n.apply(e,o):n)&&(i.exports=d))}(this)}});
//# sourceMappingURL=5.7435e67f.chunk.js.map