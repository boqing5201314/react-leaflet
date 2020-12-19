(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return t?r.a.createElement(d,p(p({ref:n},c),{},{components:t})):r.a.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(104)),i={title:"React control"},p={unversionedId:"example-react-control",id:"example-react-control",isDocsHomePage:!1,title:"React control",description:"A custom control displaying a miniature map using React",source:"@site/docs/example-react-control.md",slug:"/example-react-control",permalink:"/docs/example-react-control",version:"current",sidebar:"docs",previous:{title:"Animated panning",permalink:"/docs/example-animated-panning"},next:{title:"External state",permalink:"/docs/example-external-state"}},l=[],c={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A custom control displaying a miniature map using React"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),"// Classes used by Leaflet to position controls\nconst POSITION_CLASSES = {\n  bottomleft: 'leaflet-bottom leaflet-left',\n  bottomright: 'leaflet-bottom leaflet-right',\n  topleft: 'leaflet-top leaflet-left',\n  topright: 'leaflet-top leaflet-right',\n}\n\nconst BOUNDS_STYLE = { weight: 1 }\n\nfunction MinimapBounds({ parentMap, zoom }) {\n  const minimap = useMap()\n\n  // Clicking a point on the minimap sets the parent's map center\n  const onClick = useCallback(\n    (e) => {\n      parentMap.setView(e.latlng, parentMap.getZoom())\n    },\n    [parentMap],\n  )\n  useMapEvent('click', onClick)\n\n  // Keep track of bounds in state to trigger renders\n  const [bounds, setBounds] = useState(parentMap.getBounds())\n  const onChange = useCallback(() => {\n    setBounds(parentMap.getBounds())\n    // Update the minimap's view to match the parent map's center and zoom\n    minimap.setView(parentMap.getCenter(), zoom)\n  }, [minimap, parentMap, zoom])\n\n  // Listen to events on the parent map\n  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])\n  useEventHandlers({ instance: parentMap }, handlers)\n\n  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />\n}\n\nfunction MinimapControl({ position, zoom }) {\n  const parentMap = useMap()\n  const mapZoom = zoom || 0\n\n  // Memoize the minimap so it's not affected by position changes\n  const minimap = useMemo(\n    () => (\n      <MapContainer\n        style={{ height: 80, width: 80 }}\n        center={parentMap.getCenter()}\n        zoom={mapZoom}\n        dragging={false}\n        doubleClickZoom={false}\n        scrollWheelZoom={false}\n        attributionControl={false}\n        zoomControl={false}>\n        <TileLayer url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\" />\n        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />\n      </MapContainer>\n    ),\n    [],\n  )\n\n  const positionClass =\n    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright\n  return (\n    <div className={positionClass}>\n      <div className=\"leaflet-control leaflet-bar\">{minimap}</div>\n    </div>\n  )\n}\n\nfunction ReactControlExample() {\n  return (\n    <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>\n      <TileLayer\n        attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <MinimapControl position=\"topright\" />\n    </MapContainer>\n  )\n}\n\nrender(<ReactControlExample />)\n")))}s.isMDXComponent=!0}}]);