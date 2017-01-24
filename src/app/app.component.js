"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('./services/user.service');
var AppComponent = (function () {
    function AppComponent(userservice) {
        this.userservice = userservice;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    AppComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userservice.getUsers().subscribe(function (users) { return _this.users = users; }, function (err) {
            console.log(err);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<h1>List of users</h1>\n  <ul class=\"users\">\n  <li *ngFor=\"let u of users\">\n   {{u.firstname}} {{u.lastname}}\n  </li>\n  </ul>"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map