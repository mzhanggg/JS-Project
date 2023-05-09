/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_topAnime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/topAnime.js */ \"./src/scripts/topAnime.js\");\n/* harmony import */ var _scripts_topAnimeGenres_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/topAnimeGenres.js */ \"./src/scripts/topAnimeGenres.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const barGraph = document.querySelector(\".bar-graph\");\n  const bubblePacking = document.querySelector(\".bubble-packing\");\n  barGraph.addEventListener(\"click\", _scripts_topAnime_js__WEBPACK_IMPORTED_MODULE_0__.drawTopAnime);\n  bubblePacking.addEventListener(\"click\", _scripts_topAnimeGenres_js__WEBPACK_IMPORTED_MODULE_1__.graphTopAnimeGenres);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW1EO0FBQ2E7QUFHaEVFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNyRCxNQUFNQyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRy9ERCxRQUFRLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRUgsOERBQVksQ0FBQztFQUNoRE0sYUFBYSxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVGLDJFQUFtQixDQUFDO0FBR2hFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RyYXdUb3BBbmltZX0gZnJvbSBcIi4vc2NyaXB0cy90b3BBbmltZS5qc1wiO1xuaW1wb3J0IHtncmFwaFRvcEFuaW1lR2VucmVzfSBmcm9tIFwiLi9zY3JpcHRzL3RvcEFuaW1lR2VucmVzLmpzXCI7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGNvbnN0IGJhckdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXItZ3JhcGhcIilcbiAgICBjb25zdCBidWJibGVQYWNraW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idWJibGUtcGFja2luZ1wiKVxuICAgIFxuXG4gICAgYmFyR3JhcGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyYXdUb3BBbmltZSlcbiAgICBidWJibGVQYWNraW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBncmFwaFRvcEFuaW1lR2VucmVzKVxuXG5cbn0pIl0sIm5hbWVzIjpbImRyYXdUb3BBbmltZSIsImdyYXBoVG9wQW5pbWVHZW5yZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXJHcmFwaCIsInF1ZXJ5U2VsZWN0b3IiLCJidWJibGVQYWNraW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/topAnime.js":
/*!*********************************!*\
  !*** ./src/scripts/topAnime.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawTopAnime\": function() { return /* binding */ drawTopAnime; }\n/* harmony export */ });\nasync function fetchTopAnime() {\n  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);\n  const data = await response.json();\n  const animeDetails = [];\n  data.data.forEach(datum => {\n    const title = datum.title_english;\n    const genres = datum.genres;\n    const favoritesCount = datum.favorites;\n    animeDetails.push({\n      title,\n      genres,\n      favoritesCount\n    });\n  });\n  return animeDetails;\n}\nasync function drawTopAnime() {\n  clearVisual();\n  const data = await fetchTopAnime();\n  let margin = {\n    top: 30,\n    right: 30,\n    bottom: 30,\n    left: 30\n  };\n  let width = 1200;\n  let height = 1000;\n  const canva = d3.select(\"#canva\").attr(\"width\", width).attr(\"height\", height);\n  const svg = canva.append(\"svg\").attr(\"height\", height - margin.top - margin.bottom).attr(\"width\", width - margin.left - margin.right).attr(\"viewBox\", [0, 0, 1075, 1075]);\n  const x = d3.scaleBand().domain(d3.range(data.length)).range([margin.left, width - margin.right]).padding(0.3);\n  const y = d3.scaleLinear().domain([0, 250000]).range([height - margin.bottom, margin.top]);\n  svg.append('g').attr('fill', 'lightblue').selectAll('rect').data(data.sort((a, b) => d3.descending(a.favoritesCount, b.favoritesCount))).join('rect').attr('x', (d, i) => x(i)).attr('y', d => y(d.favoritesCount)).attr('height', d => y(0) - y(d.favoritesCount)).attr('width', x.bandwidth());\n  function xAxis(g) {\n    g.attr('transform', `translate(0, ${height - margin.bottom})`).call(d3.axisBottom(x).tickFormat(i => data[i].title)).selectAll('text').style('text-anchor', 'start').attr('dx', '10px').attr('dy', '-5px').attr('transform', 'rotate(-90)');\n  }\n  function yAxis(g) {\n    g.attr('transform', `translate(${margin.left}, 0)`);\n    g.call(d3.axisLeft(y).ticks(null, data.format));\n    g.attr('font-size', '15px');\n  }\n  svg.append('g').call(xAxis);\n  svg.append('g').call(yAxis);\n  svg.node();\n}\nfunction clearVisual() {\n  const loading = d3.select(\"#loading\");\n  loading.remove();\n  const svg = d3.select('svg');\n  svg.remove();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNJLElBQUssTUFBSyxDQUFDO0lBQ25EMkIsQ0FBQyxDQUFDQyxJQUFJLENBQUN4QixFQUFFLENBQUM2QixRQUFRLENBQUNsQixDQUFDLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxJQUFJLEVBQUVuRCxJQUFJLENBQUNvRCxNQUFNLENBQUMsQ0FBQztJQUMvQ1IsQ0FBQyxDQUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7RUFDL0I7RUFFQUMsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNvQixJQUFJLENBQUNGLEtBQUssQ0FBQztFQUMzQm5CLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDb0IsSUFBSSxDQUFDSSxLQUFLLENBQUM7RUFDM0J6QixHQUFHLENBQUM2QixJQUFJLENBQUMsQ0FBQztBQUNkO0FBRUEsU0FBU3pDLFdBQVdBLENBQUEsRUFBRztFQUNuQixNQUFNMEMsT0FBTyxHQUFHakMsRUFBRSxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ3JDZ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUVoQixNQUFNL0IsR0FBRyxHQUFHSCxFQUFFLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFDNUJFLEdBQUcsQ0FBQytCLE1BQU0sQ0FBQyxDQUFDO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL3RvcEFuaW1lLmpzP2QwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb3BBbmltZSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjQvdG9wL2FuaW1lYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBhbmltZURldGFpbHMgPSBbXTtcblxuICAgIGRhdGEuZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkYXR1bS50aXRsZV9lbmdsaXNoO1xuICAgICAgICBjb25zdCBnZW5yZXMgPSBkYXR1bS5nZW5yZXM7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlc0NvdW50ID0gZGF0dW0uZmF2b3JpdGVzO1xuXG4gICAgICAgIGFuaW1lRGV0YWlscy5wdXNoKHt0aXRsZSwgZ2VucmVzLCBmYXZvcml0ZXNDb3VudH0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYW5pbWVEZXRhaWxzO1xufVxuIFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXdUb3BBbmltZSgpIHtcbiAgICBjbGVhclZpc3VhbCgpO1xuICAgIFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRvcEFuaW1lKCk7XG4gICAgXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAzMCwgcmlnaHQ6IDMwLCBib3R0b206IDMwLCBsZWZ0OiAzMCB9O1xuICAgIGxldCB3aWR0aCA9IDEyMDA7XG4gICAgbGV0IGhlaWdodCA9IDEwMDA7IFxuICAgIFxuICAgIGNvbnN0IGNhbnZhID0gZDMuc2VsZWN0KFwiI2NhbnZhXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgXG4gICAgY29uc3Qgc3ZnID0gY2FudmEuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgMTA3NSwgMTA3NV0pO1xuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAuZG9tYWluKGQzLnJhbmdlKGRhdGEubGVuZ3RoKSlcbiAgICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgd2lkdGggLSBtYXJnaW4ucmlnaHRdKVxuICAgICAgICAucGFkZGluZygwLjMpO1xuICAgIFxuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIDI1MDAwMF0pXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pO1xuICAgIFxuICAgIHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignZmlsbCcsICdsaWdodGJsdWUnKVxuICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcbiAgICAgICAgLmRhdGEoZGF0YS5zb3J0KCAoYSxiKSA9PiBkMy5kZXNjZW5kaW5nKGEuZmF2b3JpdGVzQ291bnQsIGIuZmF2b3JpdGVzQ291bnQpKSlcbiAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAoZCwgaSkgPT4geChpKSlcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHkoZC5mYXZvcml0ZXNDb3VudCkpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiB5KDApIC0geShkLmZhdm9yaXRlc0NvdW50KSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHguYmFuZHdpZHRoKCkpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHhBeGlzKGcpIHtcbiAgICAgICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0IC0gbWFyZ2luLmJvdHRvbX0pYClcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrRm9ybWF0KCBpID0+IGRhdGFbaV0udGl0bGUgKSlcbiAgICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICAgICAgICAgIC5hdHRyKCdkeCcsICcxMHB4JylcbiAgICAgICAgICAgIC5hdHRyKCdkeScsICctNXB4JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCknKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24geUF4aXMoZykge1xuICAgICAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sIDApYCk7XG4gICAgICAgIGcuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhudWxsLCBkYXRhLmZvcm1hdCkpO1xuICAgICAgICBnLmF0dHIoJ2ZvbnQtc2l6ZScsICcxNXB4Jyk7XG4gICAgfVxuICAgIFxuICAgIHN2Zy5hcHBlbmQoJ2cnKS5jYWxsKHhBeGlzKTtcbiAgICBzdmcuYXBwZW5kKCdnJykuY2FsbCh5QXhpcyk7XG4gICAgc3ZnLm5vZGUoKTtcbn1cbiAgICBcbmZ1bmN0aW9uIGNsZWFyVmlzdWFsKCkge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkMy5zZWxlY3QoXCIjbG9hZGluZ1wiKVxuICAgIGxvYWRpbmcucmVtb3ZlKCk7XG4gICAgXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdzdmcnKTtcbiAgICBzdmcucmVtb3ZlKCk7XG59XG5cblxuXG4iXSwibmFtZXMiOlsiZmV0Y2hUb3BBbmltZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFuaW1lRGV0YWlscyIsImZvckVhY2giLCJkYXR1bSIsInRpdGxlIiwidGl0bGVfZW5nbGlzaCIsImdlbnJlcyIsImZhdm9yaXRlc0NvdW50IiwiZmF2b3JpdGVzIiwicHVzaCIsImRyYXdUb3BBbmltZSIsImNsZWFyVmlzdWFsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YSIsImQzIiwic2VsZWN0IiwiYXR0ciIsInN2ZyIsImFwcGVuZCIsIngiLCJzY2FsZUJhbmQiLCJkb21haW4iLCJyYW5nZSIsImxlbmd0aCIsInBhZGRpbmciLCJ5Iiwic2NhbGVMaW5lYXIiLCJzZWxlY3RBbGwiLCJzb3J0IiwiYSIsImIiLCJkZXNjZW5kaW5nIiwiam9pbiIsImQiLCJpIiwiYmFuZHdpZHRoIiwieEF4aXMiLCJnIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ0aWNrRm9ybWF0Iiwic3R5bGUiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJmb3JtYXQiLCJub2RlIiwibG9hZGluZyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/topAnime.js\n");

/***/ }),

/***/ "./src/scripts/topAnimeGenres.js":
/*!***************************************!*\
  !*** ./src/scripts/topAnimeGenres.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"graphTopAnimeGenres\": function() { return /* binding */ graphTopAnimeGenres; }\n/* harmony export */ });\nasync function fetchTopAnimeGenres() {\n  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);\n  const data = await response.json();\n  const animeGenres = {\n    name: 'root',\n    children: []\n  };\n  data.data.forEach(datum => {\n    const title = datum.title_english;\n    const score = datum.score;\n    const genres = datum.genres;\n    genres.forEach(genre => {\n      const genreName = genre.name;\n      const matchingGenre = animeGenres.children.find(child => child.name === genreName);\n      if (matchingGenre) {\n        matchingGenre.children.push({\n          title,\n          score\n        });\n      } else {\n        animeGenres.children.push({\n          name: genreName,\n          children: [{\n            title,\n            score\n          }]\n        });\n      }\n      ;\n    });\n  });\n  return animeGenres;\n}\nasync function graphTopAnimeGenres() {\n  clearVisual();\n  const data = await fetchTopAnimeGenres();\n  const canva = d3.select('#canva');\n  const svg = canva.append('svg').attr('width', 800).attr('height', 800).style('display', 'block').attr('viewBox', \"0 0 800 800\").style('cursor', 'pointer');\n  const root = d3.hierarchy(data).sum(d => d.score);\n  const pack = d3.pack().size([800, 800]).padding(4);\n  const packedData = pack(root);\n\n  // binds and created circles to each node in the hierarchy\n  const circles = svg.selectAll('circle').data(packedData.descendants()).enter().append('circle');\n  circles.attr('cx', d => d.x).attr('cy', d => d.y).attr('r', d => d.r).attr('stroke', 'steelblue').attr('stroke-width', '2px').attr('fill', 'white').attr('class', 'bubble');\n\n  // makes text elements for labels and bind data\n  const labels = svg.selectAll('text').data(packedData.descendants()).enter().append('text').attr('text-anchor', 'middle').attr('font-size', d => d.value / 5);\n\n  // gives labels position and text content based on corresponding circle\n  labels.attr('x', d => d.x).attr('y', d => d.y).text(d => d.data.title);\n  svg.node();\n}\nfunction clearVisual() {\n  const loading = d3.select(\"#loading\");\n  loading.remove();\n  const svg = d3.select('svg');\n  svg.remove();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBRWhCLE1BQU14QixHQUFHLEdBQUdGLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztFQUM1QkMsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLENBQUM7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdG9wQW5pbWVHZW5yZXMuanM/MjQ2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBmZXRjaFRvcEFuaW1lR2VucmVzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC90b3AvYW5pbWVgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgYW5pbWVHZW5yZXMgPSB7IG5hbWU6ICdyb290JywgY2hpbGRyZW46IFtdIH07XG5cbiAgICBkYXRhLmRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZGF0dW0udGl0bGVfZW5nbGlzaDtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBkYXR1bS5zY29yZTtcbiAgICAgICAgY29uc3QgZ2VucmVzID0gZGF0dW0uZ2VucmVzO1xuICAgICAgICBcbiAgICAgICAgZ2VucmVzLmZvckVhY2goZ2VucmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VucmVOYW1lID0gZ2VucmUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nR2VucmUgPSBhbmltZUdlbnJlcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLm5hbWUgPT09IGdlbnJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0dlbnJlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdHZW5yZS5jaGlsZHJlbi5wdXNoKHt0aXRsZSwgc2NvcmV9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbWVHZW5yZXMuY2hpbGRyZW4ucHVzaCh7IG5hbWU6IGdlbnJlTmFtZSwgY2hpbGRyZW46IFsge3RpdGxlLCBzY29yZX0gXX0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbmltZUdlbnJlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdyYXBoVG9wQW5pbWVHZW5yZXMoKSB7XG4gICAgY2xlYXJWaXN1YWwoKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRvcEFuaW1lR2VucmVzKCk7XG5cbiAgICBjb25zdCBjYW52YSA9IGQzLnNlbGVjdCgnI2NhbnZhJylcbiAgICBjb25zdCBzdmcgPSBjYW52YS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgODAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCA4MDApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgICAgICAgICAuYXR0cigndmlld0JveCcsIFwiMCAwIDgwMCA4MDBcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgICAgICAgICAgICBcbiAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5zY29yZSk7XG5cbiAgICBjb25zdCBwYWNrID0gZDMucGFjaygpXG4gICAgICAgICAgICAgICAgLnNpemUoWzgwMCwgODAwXSlcbiAgICAgICAgICAgICAgICAucGFkZGluZyg0KTtcbiAgICBcbiAgICBjb25zdCBwYWNrZWREYXRhID0gcGFjayhyb290KTtcblxuICAgIC8vIGJpbmRzIGFuZCBjcmVhdGVkIGNpcmNsZXMgdG8gZWFjaCBub2RlIGluIHRoZSBoaWVyYXJjaHlcbiAgICBjb25zdCBjaXJjbGVzID0gc3ZnLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEocGFja2VkRGF0YS5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKTtcblxuICAgIGNpcmNsZXMuYXR0cignY3gnLCBkID0+IGQueClcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIGQgPT4gZC55KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBkID0+IGQucilcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnc3RlZWxibHVlJylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMnB4JylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdidWJibGUnKTtcblxuICAgIC8vIG1ha2VzIHRleHQgZWxlbWVudHMgZm9yIGxhYmVscyBhbmQgYmluZCBkYXRhXG4gICAgY29uc3QgbGFiZWxzID0gc3ZnLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5kYXRhKHBhY2tlZERhdGEuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuYXR0cignZm9udC1zaXplJywgZCA9PiBkLnZhbHVlIC8gNSk7XG5cbiAgICAvLyBnaXZlcyBsYWJlbHMgcG9zaXRpb24gYW5kIHRleHQgY29udGVudCBiYXNlZCBvbiBjb3JyZXNwb25kaW5nIGNpcmNsZVxuICAgIGxhYmVscy5hdHRyKCd4JywgZCA9PiBkLngpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKSA7XG5cbiAgICBcbiAgICBzdmcubm9kZSgpO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyVmlzdWFsKCkge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBkMy5zZWxlY3QoXCIjbG9hZGluZ1wiKVxuICAgIGxvYWRpbmcucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJ3N2ZycpO1xuICAgIHN2Zy5yZW1vdmUoKTtcbn0iXSwibmFtZXMiOlsiZmV0Y2hUb3BBbmltZUdlbnJlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFuaW1lR2VucmVzIiwibmFtZSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImRhdHVtIiwidGl0bGUiLCJ0aXRsZV9lbmdsaXNoIiwic2NvcmUiLCJnZW5yZXMiLCJnZW5yZSIsImdlbnJlTmFtZSIsIm1hdGNoaW5nR2VucmUiLCJmaW5kIiwiY2hpbGQiLCJwdXNoIiwiZ3JhcGhUb3BBbmltZUdlbnJlcyIsImNsZWFyVmlzdWFsIiwiY2FudmEiLCJkMyIsInNlbGVjdCIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsInJvb3QiLCJoaWVyYXJjaHkiLCJzdW0iLCJkIiwicGFjayIsInNpemUiLCJwYWRkaW5nIiwicGFja2VkRGF0YSIsImNpcmNsZXMiLCJzZWxlY3RBbGwiLCJkZXNjZW5kYW50cyIsImVudGVyIiwieCIsInkiLCJyIiwibGFiZWxzIiwidmFsdWUiLCJ0ZXh0Iiwibm9kZSIsImxvYWRpbmciLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/topAnimeGenres.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;