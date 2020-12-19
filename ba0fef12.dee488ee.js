(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||y[m]||i;return t?o.a.createElement(f,a(a({ref:n},p),{},{components:t})):o.a.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(104)),l={title:"Vector layers"},a={unversionedId:"example-vector-layers",id:"example-vector-layers",isDocsHomePage:!1,title:"Vector layers",description:"`tsx live noInline",source:"@site/docs/example-vector-layers.md",slug:"/example-vector-layers",permalink:"/docs/example-vector-layers",version:"current",sidebar:"docs",previous:{title:"Events",permalink:"/docs/example-events"},next:{title:"SVG Overlay",permalink:"/docs/example-svg-overlay"}},c=[],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),"const center = [51.505, -0.09]\n\nconst polyline = [\n  [51.505, -0.09],\n  [51.51, -0.1],\n  [51.51, -0.12],\n]\n\nconst multiPolyline = [\n  [\n    [51.5, -0.1],\n    [51.5, -0.12],\n    [51.52, -0.12],\n  ],\n  [\n    [51.5, -0.05],\n    [51.5, -0.06],\n    [51.52, -0.06],\n  ],\n]\n\nconst polygon = [\n  [51.515, -0.09],\n  [51.52, -0.1],\n  [51.52, -0.12],\n]\n\nconst multiPolygon = [\n  [\n    [51.51, -0.12],\n    [51.51, -0.13],\n    [51.53, -0.13],\n  ],\n  [\n    [51.51, -0.05],\n    [51.51, -0.07],\n    [51.53, -0.07],\n  ],\n]\n\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nconst fillBlueOptions = { fillColor: 'blue' }\nconst blackOptions = { color: 'black' }\nconst limeOptions = { color: 'lime' }\nconst purpleOptions = { color: 'purple' }\nconst redOptions = { color: 'red' }\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />\n    <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>\n      <Popup>Popup in CircleMarker</Popup>\n    </CircleMarker>\n    <Polyline pathOptions={limeOptions} positions={polyline} />\n    <Polyline pathOptions={limeOptions} positions={multiPolyline} />\n    <Polygon pathOptions={purpleOptions} positions={polygon} />\n    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />\n    <Rectangle bounds={rectangle} pathOptions={blackOptions} />\n  </MapContainer>,\n)\n")))}s.isMDXComponent=!0}}]);