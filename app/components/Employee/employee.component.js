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
var core_1 = require("@angular/core");
var employee_model_1 = require("../../Models/employee.model");
var department_model_1 = require("../../Models/department.model");
var CommentComponent = (function () {
    function CommentComponent() {
    }
    return CommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], CommentComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", department_model_1.Department)
], CommentComponent.prototype, "selectedDepartment", void 0);
CommentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-app',
        templateUrl: 'employee.component.html',
        styleUrls: ['employee.component.css']
    })
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=employee.component.js.map