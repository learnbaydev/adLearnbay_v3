import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/mbl_home_two.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/BG_Home_1.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/logo_mix_mbl.webp"
          as="image"
        />
        <link
          rel="preload"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibm_mix_logo.webp"
          as="image"
        />
        <meta
          name="facebook-domain-verification"
          content="dborjxjhu9kiklk06c38hf5v5raay4"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="facebook-domain-verification"
          content="xzlsit1skwzpjhylrt0y96nn3nbksu"
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
        ></Script>
        <script
          type="text/javascript"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `pidTracker('57020');`,
          }}
        />
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        {/* Start VWO Async SmartCode */}
        <Script id="vwoCode" strategy="beforeInteractive">
          {`window._vwo_code=window._vwo_code || (function() {
var account_id=711959,
version = 1.5,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.onerror=function(){window._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;w.settings_timer=setTimeout(function(){window._vwo_code.finish()},settings_tolerance);var e=d.currentScript,t=d.createElement('style'),i=e&&!e.async?hide_element?hide_element+'{'+hide_element_style+'}':'':code.lA=1,n=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&t.setAttribute('nonce',vwoCodeEl.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));n.appendChild(t);var o=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(o?'&c='+o:''));return settings_timer}};w._vwo_settings_timer = code.init();return code;}());
`}
        </Script>
        {/* End VWO Async SmartCode */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        >
          {" "}
        </script>
      </body>
    </Html>
  );
}
