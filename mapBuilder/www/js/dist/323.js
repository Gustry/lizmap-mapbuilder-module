"use strict";(self.webpackChunkol_webpack=self.webpackChunkol_webpack||[]).push([[323],{3323:(e,n,t)=>{t.r(n),t.d(n,{getInkmapSpec:()=>s,getPreviewRaster:()=>r,getRaster:()=>i});var o=t(4235),a=t(5042);function i(){return new o.A({source:new a.A({layer:"stamen_toner_lite"})})}function r(){return i()}function s(e){return[{type:"XYZ",url:e.getUrls()[0]}]}},5042:(e,n,t)=>{t.d(n,{A:()=>m});var o=t(702),a=t(7896);const i={stamen_terrain:{extension:"png"},stamen_terrain_background:{extension:"png"},stamen_terrain_labels:{extension:"png"},stamen_terrain_lines:{extension:"png"},stamen_toner_background:{extension:"png"},stamen_toner:{extension:"png"},stamen_toner_labels:{extension:"png"},stamen_toner_lines:{extension:"png"},stamen_toner_lite:{extension:"png"},stamen_watercolor:{extension:"jpg"},alidade_smooth:{extension:"png"},alidade_smooth_dark:{extension:"png"},alidade_satellite:{extension:"png"},outdoors:{extension:"png"},osm_bright:{extension:"png"}},r={stamen_terrain:{minZoom:0,maxZoom:18,retina:!0},stamen_toner:{minZoom:0,maxZoom:20,retina:!0},stamen_watercolor:{minZoom:1,maxZoom:18,retina:!1}};class s extends o.A{constructor(e){const n=e.layer.indexOf("-"),t=-1==n?e.layer:e.layer.slice(0,n),o=r[t]||{minZoom:0,maxZoom:20,retina:!0},s=i[e.layer],m=e.apiKey?"?api_key="+e.apiKey:"",l=o.retina&&e.retina?"@2x":"",p=void 0!==e.url?e.url:"https://tiles.stadiamaps.com/tiles/"+e.layer+"/{z}/{x}/{y}"+l+"."+s.extension+m,c=['&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>','&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',a.o];e.layer.startsWith("stamen_")&&c.splice(1,0,'&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>'),super({attributions:c,cacheSize:e.cacheSize,crossOrigin:"anonymous",interpolate:e.interpolate,maxZoom:void 0!==e.maxZoom?e.maxZoom:o.maxZoom,minZoom:void 0!==e.minZoom?e.minZoom:o.minZoom,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:p,tilePixelRatio:l?2:1,wrapX:e.wrapX,zDirection:e.zDirection})}}const m=s}}]);
//# sourceMappingURL=323.js.map