"use strict";(self.webpackChunkol_webpack=self.webpackChunkol_webpack||[]).push([[155],{5155:(e,t,i)=>{i.r(t),i.d(t,{getInkmapSpec:()=>n,getPreviewRaster:()=>a,getRaster:()=>s});var r=i(4235),o=i(2660);function s(){return new r.A({visible:!0,preload:1/0,source:new o.A({key:document.getElementById("jforms_mapBuilderAdmin_config_baseLayerKeyBing").value,imagerySet:"AerialWithLabels"})})}function a(){return new r.A({visible:!0,preload:1/0,source:new o.A({key:document.getElementById("_baseLayerKeyBing").textContent,imagerySet:"AerialWithLabels"})})}function n(e){return[{type:"BingMaps",imagerySet:e.getImagerySet(),apiKey:e.getApiKey()}]}},2660:(e,t,i)=>{i.d(t,{A:()=>h});var r=i(6911),o=i(915),s=i(2654),a=i(186),n=i(4863),c=i(2796);class l extends r.A{constructor(e){const t=void 0!==e.hidpi&&e.hidpi;super({cacheSize:e.cacheSize,crossOrigin:"anonymous",interpolate:e.interpolate,projection:(0,c.Jt)("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:"loading",tileLoadFunction:e.tileLoadFunction,tilePixelRatio:t?2:1,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,zDirection:e.zDirection}),this.hidpi_=t,this.culture_=void 0!==e.culture?e.culture:"en-us",this.maxZoom_=void 0!==e.maxZoom?e.maxZoom:-1,this.apiKey_=e.key,this.imagerySet_=e.imagerySet,this.placeholderTiles_=e.placeholderTiles;const i="https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.imagerySet_+"?uriScheme=https&include=ImageryProviders&key="+this.apiKey_+"&c="+this.culture_;fetch(i).then((e=>e.json())).then((e=>this.handleImageryMetadataResponse(e)))}getApiKey(){return this.apiKey_}getImagerySet(){return this.imagerySet_}handleImageryMetadataResponse(e){if(200!=e.statusCode||"OK"!=e.statusDescription||"ValidCredentials"!=e.authenticationResultCode||1!=e.resourceSets.length||1!=e.resourceSets[0].resources.length)return void this.setState("error");const t=e.resourceSets[0].resources[0],i=-1==this.maxZoom_?t.zoomMax:this.maxZoom_,r=this.getProjection(),l=(0,n.kZ)(r),h=this.hidpi_?2:1,u=t.imageWidth==t.imageHeight?t.imageWidth/h:[t.imageWidth/h,t.imageHeight/h],m=(0,n.EN)({extent:l,minZoom:t.zoomMin,maxZoom:i,tileSize:u});this.tileGrid=m;const d=this.culture_,g=this.hidpi_,p=this.placeholderTiles_;if(this.tileUrlFunction=(0,s.FD)(t.imageUrlSubdomains.map((function(e){const i=[0,0,0],r=t.imageUrl.replace("{subdomain}",e).replace("{culture}",d);return function(e,t,o){if(!e)return;(0,a.N)(e[0],e[1],e[2],i);const s=new URL(r.replace("{quadkey}",function(e){const t=e[0],i=new Array(t);let r,o,s=1<<t-1;for(r=0;r<t;++r)o=48,e[1]&s&&(o+=1),e[2]&s&&(o+=2),i[r]=String.fromCharCode(o),s>>=1;return i.join("")}(i))),n=s.searchParams;return g&&(n.set("dpi","d1"),n.set("device","mobile")),!0===p?n.delete("n"):!1===p&&n.set("n","z"),s.toString()}}))),t.imageryProviders){const e=(0,c.FO)((0,c.Jt)("EPSG:4326"),this.getProjection());this.setAttributions((i=>{const r=[],s=i.viewState,a=this.getTileGrid(),n=a.getZForResolution(s.resolution,this.zDirection),c=a.getTileCoordForCoordAndZ(s.center,n)[0];return t.imageryProviders.map((function(t){let s=!1;const a=t.coverageAreas;for(let t=0,r=a.length;t<r;++t){const r=a[t];if(c>=r.zoomMin&&c<=r.zoomMax){const t=r.bbox,a=[t[1],t[0],t[3],t[2]],n=(0,o.NW)(a,e);if((0,o.HY)(n,i.extent)){s=!0;break}}}s&&r.push(t.attribution)})),r.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>'),r}))}this.setState("ready")}}const h=l}}]);
//# sourceMappingURL=155.js.map