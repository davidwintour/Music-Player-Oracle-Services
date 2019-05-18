(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/artist/artist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/artist/artist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1> Hotest Artists </h1>\n</div>\n\n<div class=\"content\">\n\n  <ng-container *ngFor=\"let artist of artists\">   \n      <div class=\"artist\" *ngIf=\"artist.genre=='POP'\"  routerLink=\"/Artist/{{artist.id}}\">\n        <img [src]=\"artist.base64 | safeUrl\" alt=\"\">\n        <span>{{artist.name}}</span>\n      </div>    \n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/artist/artist.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/artist/artist.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 30vw;\n  height: auto;\n  margin: 0 20px;\n  background: #2794b86c;\n  border-radius: 8px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n  div h1 {\n    text-align: center;\n    color: #2e525e; }\n  .content {\n  width: 30vw;\n  height: auto;\n  display: flex;\n  margin: 0 20px;\n  border-radius: 8px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  flex-wrap: wrap;\n  background: #2794b86c;\n  padding: 20px 0 20px 20px; }\n  .content .artist {\n    width: 45%;\n    height: 200px;\n    display: flex;\n    margin: 5px 5px 40px 5px;\n    flex-flow: column; }\n  .content .artist img {\n      min-height: 100%;\n      min-width: 100%;\n      border-radius: 8px;\n      cursor: pointer; }\n  .content .artist span {\n      margin-top: 6px;\n      font-weight: lighter;\n      text-align: center;\n      font-size: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcnRpc3QvQzpcXFVzZXJzXFxSZXB1YmxpYyBvZiBHYW1lcnNcXERvd25sb2Fkc1xcTXVzaWNQbGF5ZXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXGFydGlzdFxcYXJ0aXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFtQjtFQUNuQiw4QkFBK0I7RUFDL0IsK0JBQWdDLEVBQUE7RUFQbEM7SUFTSSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBSWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFtQjtFQUNuQiwyQkFBNEI7RUFDNUIsNEJBQTZCO0VBQzdCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCLEVBQUE7RUFWM0I7SUFhTSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsaUJBQWlCLEVBQUE7RUFqQnZCO01Bb0JRLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQXZCdkI7TUEwQlEsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hcnRpc3QvYXJ0aXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRpdntcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDIwcHg7IFxyXG4gIGJhY2tncm91bmQ6ICMyNzk0Yjg2YztcclxuICBib3JkZXItcmFkaXVzIDogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMgOiAwcHg7XHJcbiAgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJlNTI1ZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgMjBweDsgXHJcbiAgYm9yZGVyLXJhZGl1cyA6IDhweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDogMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzIDogMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kOiAjMjc5NGI4NmM7XHJcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcclxuXHJcbiAgICAuYXJ0aXN0IHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDsgICAgIFxyXG4gICAgICBtYXJnaW46IDVweCA1cHggNDBweCA1cHg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBcclxuICAgICAgaW1ne1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgIFxyXG4gICAgICB9XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/artist/artist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/artist/artist.component.ts ***!
  \*******************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/api */ "./src/app/Services/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//Server


var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(router, artistService) {
        this.router = router;
        this.artistService = artistService;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //obtener servicio de Artists
        this.artists = [];
        this.artistService.getArtists()
            .subscribe(function (artists) {
            for (var i = 0; i < artists.length; i++) {
                var artist = {
                    id: artists[i].id,
                    name: artists[i].name,
                    genre: artists[i].genre,
                    meta: "data:image/jpg;base64, " + artists[i].meta["imgBase64"]
                };
                _this.artists.push(artist);
            }
            console.log(_this.artists);
        });
    };
    ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/Components/artist/artist.component.html"),
            styles: [__webpack_require__(/*! ./artist.component.scss */ "./src/app/Components/artist/artist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_api__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/Components/genre/genre.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/genre/genre.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"genre\" *ngFor=\"let genre of genres\">\n  <div class=\"genreIn\">\n    <div class=\"titleGenre\"> {{genre.name}}</div>\n    <div class=\"contentGenre\">\n\n      <div class=\"songs\">\n        <ng-container *ngFor=\"let song of songs\" >\n          <div *ngIf=\"song.genre==genre.name\">\n            <div class=\"image\">\n              <img [src]=\"song.base64 | safeUrl\" alt=\"\" />\n            </div>\n            <div class=\" songsTitle\">\n              <span class=\"title\">{{song.title}}</span>\n              <span class=\"artist\">{{song.artist}}</span>\n            </div>\n\n          </div>\n        </ng-container>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/genre/genre.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/genre/genre.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".genre {\n  width: 70vw;\n  max-height: 300px;\n  margin: 30px 0;\n  display: block; }\n  .genre .genreIn {\n    padding-bottom: 10px;\n    width: 100%;\n    display: flex;\n    flex-flow: column;\n    padding-left: 40px;\n    padding-right: 82px; }\n  .genre .genreIn .titleGenre {\n      width: 100%;\n      flex: 2;\n      color: #212f3d;\n      font-size: 30px;\n      font-weight: bold;\n      display: flex;\n      justify-content: flex-end;\n      flex-flow: column;\n      padding-bottom: 20px; }\n  .genre .genreIn .contentGenre {\n      width: 100%;\n      height: 10%;\n      margin-bottom: 30px;\n      flex: 3;\n      display: flex;\n      background: #2794b8;\n      border-radius: 4px; }\n  .genre .genreIn .contentGenre .songs {\n        height: 100%;\n        flex: 80%;\n        padding: 8px 5px 8px 5px;\n        display: flex;\n        overflow-x: scroll;\n        overflow-y: hidden; }\n  .genre .genreIn .contentGenre .songs div {\n          margin: 6px 8px;\n          display: flex;\n          flex-flow: column;\n          cursor: pointer; }\n  .genre .genreIn .contentGenre .songs div .image {\n            flex: 90%;\n            max-width: 100%;\n            display: flex; }\n  .genre .genreIn .contentGenre .songs div .image img {\n              width: 196px;\n              height: 179.2px;\n              border-radius: 3px; }\n  .genre .genreIn .contentGenre .songs div .songsTitle {\n            flex: 10%;\n            color: #d1e2f0;\n            align-items: center;\n            display: flex; }\n  .genre .genreIn .contentGenre .songs div .songsTitle .title {\n              font-size: 13px;\n              font-weight: 600;\n              text-align: center; }\n  .genre .genreIn .contentGenre .songs div .songsTitle .artist {\n              font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9nZW5yZS9DOlxcVXNlcnNcXFJlcHVibGljIG9mIEdhbWVyc1xcRG93bmxvYWRzXFxNdXNpY1BsYXllci9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZ2VucmVcXGdlbnJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFhO0VBQ2IsY0FBYyxFQUFBO0VBSmhCO0lBTUksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQVh2QjtNQWFNLFdBQVc7TUFDWCxPQUFPO01BQ1AsY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUE7RUFyQjFCO01Bd0JNLFdBQVc7TUFDWCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLE9BQU87TUFDUCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO0VBOUJ4QjtRQWdDUSxZQUFZO1FBQ1osU0FBUztRQUNULHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBckMxQjtVQXVDVSxlQUFlO1VBQ2YsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7RUExQ3pCO1lBNENZLFNBQVM7WUFDVCxlQUFlO1lBRWYsYUFBYSxFQUFBO0VBL0N6QjtjQWlEYyxZQUFZO2NBQ1osZUFBZTtjQUNmLGtCQUFrQixFQUFBO0VBbkRoQztZQXdEWSxTQUFTO1lBQ1QsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixhQUFhLEVBQUE7RUEzRHpCO2NBNkRjLGVBQWU7Y0FDZixnQkFBZ0I7Y0FDaEIsa0JBQWtCLEVBQUE7RUEvRGhDO2NBa0VjLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZ2VucmUvZ2VucmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VucmUge1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbjozMHB4IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLmdlbnJlSW4ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgycHg7XHJcbiAgICAudGl0bGVHZW5yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmbGV4OiAyO1xyXG4gICAgICBjb2xvcjogIzIxMmYzZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRHZW5yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgZmxleDogMztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZDogIzI3OTRiODtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAuc29uZ3Mge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4OiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDVweCA4cHggNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgZmxleDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7ICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE5NnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTc5LjJweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zb25nc1RpdGxlIHtcclxuICAgICAgICAgICAgZmxleDogMTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2QxZTJmMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFydGlzdCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/genre/genre.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/genre/genre.component.ts ***!
  \*****************************************************/
/*! exports provided: GenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreComponent", function() { return GenreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/api */ "./src/app/Services/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GenreComponent = /** @class */ (function () {
    function GenreComponent(router, songService) {
        this.router = router;
        this.songService = songService;
        this.genres = [{ name: "POP" }, { name: "ROCK" }, { name: "JAZZ" }, { name: "SWING" }];
    }
    GenreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //obtener servicio de Songs
        this.songs = [];
        this.songService.getSongs().subscribe(function (songs) {
            //console.log(songs);
            for (var i = 0; i < songs.length; i++) {
                var song = {
                    song_code: songs[i].song_code,
                    title: songs[i].title,
                    artist: songs[i].artist,
                    base64: "data:image/jpg;base64, " + songs[i].base64,
                    genre: songs[i].genre,
                };
                _this.songs.push(song);
            }
            console.log(songs);
        });
    };
    GenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genre',
            template: __webpack_require__(/*! ./genre.component.html */ "./src/app/Components/genre/genre.component.html"),
            styles: [__webpack_require__(/*! ./genre.component.scss */ "./src/app/Components/genre/genre.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_Services_api__WEBPACK_IMPORTED_MODULE_2__["SongService"]])
    ], GenreComponent);
    return GenreComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <div>\n    <img src=\"../../../assets/favicon.svg\" alt=\"Logo\">\n  </div>\n\n  <div>\n    <i class=\"fas fa-search\"></i>\n  </div>\n\n</aside>"

/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  height: 100vh;\n  width: 90px;\n  background: #03A9F4;\n  display: flex;\n  flex-flow: column; }\n  aside div {\n    display: flex;\n    width: 100%;\n    height: 10%;\n    align-items: center;\n    justify-content: center;\n    border-bottom: black; }\n  aside div img {\n      width: 80%;\n      height: 85%; }\n  aside div i {\n      color: white;\n      font-size: 190%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxSZXB1YmxpYyBvZiBHYW1lcnNcXERvd25sb2Fkc1xcTXVzaWNQbGF5ZXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBTG5CO0lBUUUsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBMkIsRUFBQTtFQWI3QjtNQWdCSSxVQUFVO01BQ1YsV0FBVyxFQUFBO0VBakJmO01BcUJJLFlBQVk7TUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhc2lkZXtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwM0E5RjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbmRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDAsIDAsIDApO1xyXG4gXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gICBcclxuICB9XHJcbiAgaXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTkwJTtcclxuICB9XHJcbn1cclxuIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/Components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/initial-page/initial-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/initial-page/initial-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- <app-header></app-header> -->\n  <app-player></app-player>\n  <app-genre ></app-genre>    \n</div>\n<app-artist></app-artist> "

/***/ }),

/***/ "./src/app/Components/initial-page/initial-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Components/initial-page/initial-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 80vh;\n  width: 100vw;\n  display: flex;\n  flex-flow: row; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9pbml0aWFsLXBhZ2UvQzpcXFVzZXJzXFxSZXB1YmxpYyBvZiBHYW1lcnNcXERvd25sb2Fkc1xcTXVzaWNQbGF5ZXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXGluaXRpYWwtcGFnZVxcaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9pbml0aWFsLXBhZ2UvaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7IFxyXG4gIH1cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/Components/initial-page/initial-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/initial-page/initial-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: InitialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageComponent", function() { return InitialPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/api */ "./src/app/Services/api.ts");



var InitialPageComponent = /** @class */ (function () {
    function InitialPageComponent(_service) {
        this._service = _service;
    }
    InitialPageComponent.prototype.ngOnInit = function () {
    };
    InitialPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initial-page',
            template: __webpack_require__(/*! ./initial-page.component.html */ "./src/app/Components/initial-page/initial-page.component.html"),
            styles: [__webpack_require__(/*! ./initial-page.component.scss */ "./src/app/Components/initial-page/initial-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_api__WEBPACK_IMPORTED_MODULE_2__["ArtistService"]])
    ], InitialPageComponent);
    return InitialPageComponent;
}());



/***/ }),

/***/ "./src/app/Components/player/player.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/player/player.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actualSong\">\n  <div class=\"repro\">\n    <div class=\"picture\">\n      <div class=\"artistImage\">\n        <img id=\"artistImage\" src=\"https://m.media-amazon.com/images/I/91pLIhg2zUL._SS500_.jpg\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"songTitle\" id=\"songTitle\">\n      <span>Stay with me</span>\n    </div>\n    <div class=\"artistName\" id=\"artistName\">\n      <span>Sam Smith</span>\n    </div>\n    <div class=\"reproBar\">\n      <div class=\"backBtn\"><i class=\"fas fa-step-backward\"></i></div>\n      <div class=\"playBtn\" id=\"playBtn\">\n        <i id=\"playPause\" class=\"far fa-play-circle\"></i>\n      </div>\n      <div class=\"nextBtn\"><i class=\"fas fa-step-forward\"></i></div>\n    </div>\n    <div class=\"controlBar\" id=\"controlBar\">\n      <div class=\"progressBar\">\n        <div class=\"barShadow\"></div>\n        <div class=\"bar\"></div>\n        <div class=\"data\">\n          <div class=\"current\">00:00:00</div>\n          <div class=\"total\">00:00:00</div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/player/player.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/player/player.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actualSong {\n  width: 30vw;\n  height: 80vh;\n  padding: 40px 50px 40px 70px; }\n  .actualSong .repro {\n    width: 100%;\n    height: 100%;\n    background: #2794b8;\n    border-radius: 5px;\n    display: flex;\n    flex-flow: column; }\n  .actualSong .repro .picture {\n      width: 100%;\n      flex: 60%;\n      padding: 60px 45px 13px 45px; }\n  .actualSong .repro .picture .artistImage {\n        width: 100%;\n        height: 100%; }\n  .actualSong .repro .picture .artistImage img {\n          width: 100%;\n          height: 100%;\n          border-radius: 3px;\n          box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.39);\n          cursor: pointer; }\n  .actualSong .repro .songTitle {\n      width: 100%;\n      flex: 10%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #d1e2f0;\n      font-size: 20px;\n      font-weight: 700; }\n  .actualSong .repro .artistName {\n      width: 100%;\n      flex: 10%;\n      display: flex;\n      justify-content: center;\n      color: #d1e2f0;\n      font-size: 15px;\n      font-weight: 700;\n      cursor: pointer; }\n  .actualSong .repro .reproBar {\n      width: 100%;\n      flex: 20%;\n      display: flex;\n      justify-content: space-between;\n      align-items: baseline; }\n  .actualSong .repro .reproBar .backBtn {\n        margin-left: 20px;\n        background: #0e1c2a;\n        height: 50%;\n        flex: 30%;\n        border-radius: 4px;\n        display: flex;\n        color: #d1e2f0;\n        justify-content: center;\n        align-items: center;\n        font-size: 20px;\n        box-shadow: 0px 0px 11px 1px rgba(145, 202, 248, 0.377);\n        cursor: pointer; }\n  .actualSong .repro .reproBar .playBtn {\n        margin-left: 15px;\n        background: #0e1c2a;\n        height: 60%;\n        flex: 40%;\n        border-radius: 4px;\n        display: flex;\n        color: #d1e2f0;\n        justify-content: center;\n        align-items: center;\n        font-size: 30px;\n        box-shadow: 0px 0px 11px 1px rgba(145, 202, 248, 0.377);\n        cursor: pointer; }\n  .actualSong .repro .reproBar .nextBtn {\n        margin-left: 15px;\n        margin-right: 20px;\n        background: #0e1c2a;\n        height: 50%;\n        flex: 30%;\n        border-radius: 4px;\n        display: flex;\n        color: #d1e2f0;\n        justify-content: center;\n        align-items: center;\n        font-size: 20px;\n        box-shadow: 0px 0px 11px 1px rgba(145, 202, 248, 0.377);\n        cursor: pointer; }\n  .actualSong .repro .controlBar {\n      width: 100%;\n      display: flex;\n      padding-left: 10px;\n      padding-top: 20px;\n      padding-bottom: 20px; }\n  .actualSong .repro .controlBar .buttons {\n        display: flex;\n        align-items: center; }\n  .actualSong .repro .controlBar .buttons .button {\n          padding: 10px;\n          cursor: pointer;\n          transition: all 0.3s ease; }\n  .actualSong .repro .controlBar .buttons .button:hover {\n            background: #0f100f; }\n  .actualSong .repro .controlBar .volumeControl {\n        margin-left: 10px;\n        display: flex;\n        align-items: center;\n        cursor: pointer; }\n  .actualSong .repro .controlBar .progressBar {\n        width: 100%;\n        padding: 0 20px;\n        display: flex;\n        flex-flow: column;\n        justify-content: center; }\n  .actualSong .repro .controlBar .progressBar .bar {\n          position: relative;\n          margin-top: -4px;\n          width: 0%;\n          height: 3px;\n          border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n          background: aliceblue;\n          cursor: pointer; }\n  .actualSong .repro .controlBar .progressBar .barShadow {\n          width: 100%;\n          height: 3px;\n          background-color: rgba(0, 0, 0, 0.2);\n          cursor: pointer; }\n  .actualSong .repro .controlBar .progressBar .data {\n          display: flex;\n          flex-flow: row;\n          width: 100%;\n          justify-content: space-between;\n          font-size: 70%;\n          padding-top: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wbGF5ZXIvQzpcXFVzZXJzXFxSZXB1YmxpYyBvZiBHYW1lcnNcXERvd25sb2Fkc1xcTXVzaWNQbGF5ZXIvc3JjXFxhcHBcXENvbXBvbmVudHNcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEIsRUFBQTtFQUhoQztJQUtNLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUFWdkI7TUFZUSxXQUFXO01BQ1gsU0FBUztNQUNULDRCQUE0QixFQUFBO0VBZHBDO1FBZ0JVLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUFqQnRCO1VBbUJZLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLGdEQUFnRDtVQUNoRCxlQUFlLEVBQUE7RUF2QjNCO01BNEJRLFdBQVc7TUFDWCxTQUFTO01BQ1QsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQW5DeEI7TUFzQ1EsV0FBVztNQUNYLFNBQVM7TUFDVCxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQTdDdkI7TUFnRFEsV0FBVztNQUNYLFNBQVM7TUFDVCxhQUFhO01BQ2IsOEJBQThCO01BQzlCLHFCQUFxQixFQUFBO0VBcEQ3QjtRQXNEVSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsdURBQXVEO1FBQ3ZELGVBQWUsRUFBQTtFQWpFekI7UUFvRVUsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHVEQUF1RDtRQUN2RCxlQUFlLEVBQUE7RUEvRXpCO1FBa0ZVLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsdURBQXVEO1FBQ3ZELGVBQWUsRUFBQTtFQTlGekI7TUFrR1EsV0FBVztNQUNYLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBO0VBdEc1QjtRQXdHVSxhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUF6RzdCO1VBMkdZLGFBQWE7VUFDYixlQUFlO1VBQ2YseUJBQXlCLEVBQUE7RUE3R3JDO1lBK0djLG1CQUFtQixFQUFBO0VBL0dqQztRQW9IVSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlLEVBQUE7RUF2SHpCO1FBMEhVLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQix1QkFBdUIsRUFBQTtFQTlIakM7VUFnSVksa0JBQWtCO1VBQ2xCLGdCQUFnQjtVQUNoQixTQUFTO1VBQ1QsV0FBVztVQUNYLGlEQUFpRDtVQUNqRCxxQkFBcUI7VUFDckIsZUFBZSxFQUFBO0VBdEkzQjtVQXlJWSxXQUFXO1VBQ1gsV0FBVztVQUNYLG9DQUFvQztVQUNwQyxlQUFlLEVBQUE7RUE1STNCO1VBK0lZLGFBQWE7VUFDYixjQUFjO1VBQ2QsV0FBVztVQUNYLDhCQUE4QjtVQUM5QixjQUFjO1VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0dWFsU29uZyB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHBhZGRpbmc6IDQwcHggNTBweCA0MHB4IDcwcHg7XHJcbiAgICAucmVwcm8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjc5NGI4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgICBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIC5waWN0dXJlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiA2MCU7XHJcbiAgICAgICAgcGFkZGluZzogNjBweCA0NXB4IDEzcHggNDVweDtcclxuICAgICAgICAuYXJ0aXN0SW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM5KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc29uZ1RpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiAxMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZDFlMmYwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5hcnRpc3ROYW1lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiAxMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2QxZTJmMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnJlcHJvQmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4OiAyMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgIC5iYWNrQnRuIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzBlMWMyYTtcclxuICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgZmxleDogMzAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGNvbG9yOiAjZDFlMmYwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDFweCByZ2JhKDE0NSwgMjAyLCAyNDgsIDAuMzc3KTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYXlCdG4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGUxYzJhO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICBmbGV4OiA0MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgY29sb3I6ICNkMWUyZjA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggMXB4IHJnYmEoMTQ1LCAyMDIsIDI0OCwgMC4zNzcpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmV4dEJ0biB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTFjMmE7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgIGZsZXg6IDMwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBjb2xvcjogI2QxZTJmMDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxcHggcmdiYSgxNDUsIDIwMiwgMjQ4LCAwLjM3Nyk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250cm9sQmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZjEwMGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZvbHVtZUNvbnRyb2wge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAuYmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iYXJTaGFkb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/Components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/Components/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/Components/single-artist/single-artist.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/single-artist/single-artist.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper\" *ngFor=\"let artist of singleArtist\">\n\n  <div>\n      <h1> {{artist.name}}</h1>\n      <img [src]=\"artist.base64 | safeUrl\" alt=\"\">\n  </div> \n\n  <div class=\"song\" >\n    <div *ngFor=\"let song of songs\">{{song.title}}</div>\n   \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/single-artist/single-artist.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Components/single-artist/single-artist.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100vw;\n  height: 100vh;\n  background: #000;\n  display: flex; }\n  .wrapper div {\n    margin: 10px 0 0 8px;\n    width: 20%;\n    display: flex;\n    flex-flow: column; }\n  .wrapper div h1 {\n      text-align: center;\n      color: white; }\n  .wrapper div img {\n      width: 100%;\n      height: 40%;\n      border-radius: 8px; }\n  .wrapper .song {\n    margin: 70px 0 0 15px;\n    flex: 50%;\n    display: flex;\n    flex-flow: column;\n    flex-wrap: wrap; }\n  .wrapper .song div {\n      background: rgba(128, 128, 128, 0.178);\n      color: white;\n      width: 100%;\n      margin: 8px 0;\n      font-size: 20px;\n      padding: 4px 0;\n      border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zaW5nbGUtYXJ0aXN0L0M6XFxVc2Vyc1xcUmVwdWJsaWMgb2YgR2FtZXJzXFxEb3dubG9hZHNcXE11c2ljUGxheWVyL3NyY1xcYXBwXFxDb21wb25lbnRzXFxzaW5nbGUtYXJ0aXN0XFxzaW5nbGUtYXJ0aXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0VBSmY7SUFPSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUIsRUFBQTtFQVZyQjtNQVlNLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUFibEI7TUFpQk0sV0FBVztNQUNYLFdBQVc7TUFFWCxrQkFBa0IsRUFBQTtFQXBCeEI7SUF5QkkscUJBQXFCO0lBVXJCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQXRDbkI7TUEyQk0sc0NBQXNDO01BQ3RDLFlBQVk7TUFDWixXQUFXO01BQ1gsYUFBYTtNQUNiLGVBQWU7TUFDZixjQUFjO01BQ2Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NpbmdsZS1hcnRpc3Qvc2luZ2xlLWFydGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDhweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwJTtcclxuXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb25nIHtcclxuICAgIG1hcmdpbjogNzBweCAwIDAgMTVweDtcclxuICAgIGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNzgpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICBmbGV4OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/single-artist/single-artist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/single-artist/single-artist.component.ts ***!
  \*********************************************************************/
/*! exports provided: SingleArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleArtistComponent", function() { return SingleArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/api */ "./src/app/Services/api.ts");




var SingleArtistComponent = /** @class */ (function () {
    function SingleArtistComponent(router, activeRoute, artistService, songsService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.artistService = artistService;
        this.songsService = songsService;
    }
    SingleArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //obtener servicio de Artists
        this.singleArtist = [];
        this.songs = [];
        this.artistService.getArtistsOnly(this.activeRoute.params["value"]["id"]).subscribe(function (artists) {
            var artist = {
                id: artists["id"],
                name: artists["name"],
                genre: artists["genre"],
                meta: "data:image/jpg;base64, " + artists["meta"]["imgBase64"]
            };
            _this.singleArtist.push(artist);
            //console.log(this.singleArtist);
        });
        this.songsService.getSongsOnly(this.activeRoute.params["value"]["id"]).subscribe(function (songs) {
            console.log(songs);
            for (var i = 0; i < songs.length; i++) {
                var song = {
                    title: songs[i].title
                };
                _this.songs.push(song);
            }
        });
    };
    SingleArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-artist',
            template: __webpack_require__(/*! ./single-artist.component.html */ "./src/app/Components/single-artist/single-artist.component.html"),
            styles: [__webpack_require__(/*! ./single-artist.component.scss */ "./src/app/Components/single-artist/single-artist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_Services_api__WEBPACK_IMPORTED_MODULE_3__["ArtistService"],
            src_app_Services_api__WEBPACK_IMPORTED_MODULE_3__["ArtistSongsService"]])
    ], SingleArtistComponent);
    return SingleArtistComponent;
}());



/***/ }),

/***/ "./src/app/Pipes/safeUrl/safe-url.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/Pipes/safeUrl/safe-url.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    };
    SafeUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/Services/api.ts":
/*!*********************************!*\
  !*** ./src/app/Services/api.ts ***!
  \*********************************/
/*! exports provided: ArtistService, GenresService, SongService, ArtistSongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artists.service */ "./src/app/Services/artists.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return _artists_service__WEBPACK_IMPORTED_MODULE_0__["ArtistService"]; });

/* harmony import */ var _genres_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genres.service */ "./src/app/Services/genres.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenresService", function() { return _genres_service__WEBPACK_IMPORTED_MODULE_1__["GenresService"]; });

/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs.service */ "./src/app/Services/songs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return _songs_service__WEBPACK_IMPORTED_MODULE_2__["SongService"]; });

/* harmony import */ var _artist_songs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist-songs.service */ "./src/app/Services/artist-songs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistSongsService", function() { return _artist_songs_service__WEBPACK_IMPORTED_MODULE_3__["ArtistSongsService"]; });








/***/ }),

/***/ "./src/app/Services/artist-songs.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/artist-songs.service.ts ***!
  \**************************************************/
/*! exports provided: ArtistSongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistSongsService", function() { return ArtistSongsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ArtistSongsService = /** @class */ (function () {
    function ArtistSongsService(http) {
        this.http = http;
        this.resourceURL = "http://localhost:3000/api/artistsongs/";
        console.log("Artist_Songs Service Working");
    }
    ArtistSongsService.prototype.getSong = function () {
        return this.http.get(this.resourceURL);
    };
    ArtistSongsService.prototype.getSongsOnly = function (id) {
        return this.http.get(this.resourceURL + id);
    };
    ArtistSongsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArtistSongsService);
    return ArtistSongsService;
}());



/***/ }),

/***/ "./src/app/Services/artists.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/artists.service.ts ***!
  \*********************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.resourceURL = "http://localhost:3000/api/artists/";
        console.log("Artists Service Working");
    }
    ArtistService.prototype.getArtists = function () {
        return this.http.get(this.resourceURL);
    };
    ArtistService.prototype.getArtistsOnly = function (id) {
        return this.http.get(this.resourceURL + id);
    };
    ArtistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/Services/genres.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/genres.service.ts ***!
  \********************************************/
/*! exports provided: GenresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresService", function() { return GenresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GenresService = /** @class */ (function () {
    function GenresService(http) {
        this.http = http;
        this.genre = {
            name: ""
        };
    }
    GenresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GenresService);
    return GenresService;
}());



/***/ }),

/***/ "./src/app/Services/songs.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/songs.service.ts ***!
  \*******************************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SongService = /** @class */ (function () {
    function SongService(http) {
        this.http = http;
        this.resourceURL = "http://localhost:3000/api/songs/";
        console.log("Songs Service Working");
    }
    SongService.prototype.getSongs = function () {
        return this.http.get(this.resourceURL);
    };
    SongService.prototype.getSongsOnly = function (id) {
        return this.http.get(this.resourceURL + id);
    };
    SongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_single_artist_single_artist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/single-artist/single-artist.component */ "./src/app/Components/single-artist/single-artist.component.ts");
/* harmony import */ var _Components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/initial-page/initial-page.component */ "./src/app/Components/initial-page/initial-page.component.ts");





var routes = [
    { path: '', redirectTo: '/initialPage', pathMatch: 'full' },
    { path: 'initialPage', component: _Components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_4__["InitialPageComponent"] },
    { path: 'Artist/:id', component: _Components_single_artist_single_artist_component__WEBPACK_IMPORTED_MODULE_3__["SingleArtistComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet {\n  background: #2794b8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSZXB1YmxpYyBvZiBHYW1lcnNcXERvd25sb2Fkc1xcTXVzaWNQbGF5ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnJvdXRlci1vdXRsZXR7XHJcbiAgYmFja2dyb3VuZDogIzI3OTRiODtcclxufVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_artist_artist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/artist/artist.component */ "./src/app/Components/artist/artist.component.ts");
/* harmony import */ var _Components_genre_genre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/genre/genre.component */ "./src/app/Components/genre/genre.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_player_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/player/player.component */ "./src/app/Components/player/player.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Services_artists_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/artists.service */ "./src/app/Services/artists.service.ts");
/* harmony import */ var _Pipes_safeUrl_safe_url_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Pipes/safeUrl/safe-url.pipe */ "./src/app/Pipes/safeUrl/safe-url.pipe.ts");
/* harmony import */ var _Components_single_artist_single_artist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/single-artist/single-artist.component */ "./src/app/Components/single-artist/single-artist.component.ts");
/* harmony import */ var _Components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/initial-page/initial-page.component */ "./src/app/Components/initial-page/initial-page.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_artist_artist_component__WEBPACK_IMPORTED_MODULE_5__["ArtistComponent"],
                _Components_genre_genre_component__WEBPACK_IMPORTED_MODULE_6__["GenreComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _Components_player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"],
                _Pipes_safeUrl_safe_url_pipe__WEBPACK_IMPORTED_MODULE_11__["SafeUrlPipe"],
                _Components_single_artist_single_artist_component__WEBPACK_IMPORTED_MODULE_12__["SingleArtistComponent"],
                _Components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__["InitialPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_Services_artists_service__WEBPACK_IMPORTED_MODULE_10__["ArtistService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Republic of Gamers\Downloads\MusicPlayer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map