(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var n=o.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,f=u["".concat(l,".").concat(m)]||u[m]||y[m]||a;return r?o.a.createElement(f,p(p({ref:n},i),{},{components:r})):o.a.createElement(f,p({ref:n},i))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(104)),l={title:"Layers control"},p={unversionedId:"example-layers-control",id:"example-layers-control",isDocsHomePage:!1,title:"Layers control",description:"`tsx live noInline",source:"@site/docs/example-layers-control.md",slug:"/example-layers-control",permalink:"/docs/example-layers-control",version:"current",sidebar:"docs",previous:{title:"Tooltips",permalink:"/docs/example-tooltips"},next:{title:"Panes",permalink:"/docs/example-panes"}},c=[],i={toc:c};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),'const center = [51.505, -0.09]\nconst rectangle = [\n  [51.49, -0.08],\n  [51.5, -0.06],\n]\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <LayersControl position="topright">\n      <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">\n        <TileLayer\n          attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n        />\n      </LayersControl.BaseLayer>\n      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">\n        <TileLayer\n          attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"\n        />\n      </LayersControl.BaseLayer>\n      <LayersControl.Overlay name="Marker with popup">\n        <Marker position={center}>\n          <Popup>\n            A pretty CSS3 popup. <br /> Easily customizable.\n          </Popup>\n        </Marker>\n      </LayersControl.Overlay>\n      <LayersControl.Overlay checked name="Layer group with circles">\n        <LayerGroup>\n          <Circle\n            center={center}\n            pathOptions={{ fillColor: \'blue\' }}\n            radius={200}\n          />\n          <Circle\n            center={center}\n            pathOptions={{ fillColor: \'red\' }}\n            radius={100}\n            stroke={false}\n          />\n          <LayerGroup>\n            <Circle\n              center={[51.51, -0.08]}\n              pathOptions={{ color: \'green\', fillColor: \'green\' }}\n              radius={100}\n            />\n          </LayerGroup>\n        </LayerGroup>\n      </LayersControl.Overlay>\n      <LayersControl.Overlay name="Feature group">\n        <FeatureGroup pathOptions={{ color: \'purple\' }}>\n          <Popup>Popup in FeatureGroup</Popup>\n          <Circle center={[51.51, -0.06]} radius={200} />\n          <Rectangle bounds={rectangle} />\n        </FeatureGroup>\n      </LayersControl.Overlay>\n    </LayersControl>\n  </MapContainer>,\n)\n')))}s.isMDXComponent=!0}}]);