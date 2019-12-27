(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<!-- app notifications -->\r\n<ng-snotify></ng-snotify>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/home-admin/home-admin.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/home-admin/home-admin.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Layout -->\r\n<app-layout>\r\n\r\n  <app-admin-header (sidenavToggle)=\"drawer.toggle()\"></app-admin-header>\r\n\r\n  <mat-sidenav-container>\r\n    <!-- Sidebar Material -->\r\n    <mat-sidenav #drawer class=\"sidenav special-color-dark\" fixedInViewport=\"true\"\r\n        [attr.role]=\"isHandSet$ ? 'dialog' : 'navigation'\"\r\n        [mode]=\"(isHandSet$ | async)!.matches ? 'over' : 'side'\"\r\n        [opened]=\"!(isHandSet$ | async)!.matches\">\r\n\r\n      <div class=\"list-group list-group-flush mt-4\">\r\n        <!-- Options Home -->\r\n        <a routerLink=\"home\" class=\"list-group-item list-group-item-action special-color-dark waves-effect\">\r\n          <i class=\"fas fa-home mr-2\" aria-hidden=\"true\"></i>Home\r\n        </a>\r\n\r\n        <!-- Options Users -->\r\n        <a routerLink=\"users\" class=\"list-group-item list-group-item-action special-color-dark waves-effect\">\r\n          <i class=\"fas fa-users mr-2\" aria-hidden=\"true\"></i>Users\r\n        </a>\r\n\r\n      </div>\r\n\r\n    </mat-sidenav>\r\n    <!-- Sidebar Material -->\r\n\r\n    <!-- Main Content -->\r\n    <mat-sidenav-content>\r\n\r\n      <!-- Workspace Content -->\r\n      <main class=\"mx-lg-5 mt-5\">\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <!-- Footer -->\r\n      <!-- <app-footer></app-footer> -->\r\n\r\n    </mat-sidenav-content>\r\n    <!-- Main Content -->\r\n\r\n  </mat-sidenav-container>\r\n\r\n<!-- Main Layout -->\r\n</app-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n  <!-- SideNav slide-out button -->\r\n  <navlinks class=\"navbar-container\">\r\n\r\n    <div class=\"white-text\">\r\n      <a (click)=\"onToggleSideNav()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n        <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </navlinks>\r\n  <!--SideNav slide-out button -->\r\n\r\n  <navlinks>\r\n    <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n        </a>\r\n      </li> -->\r\n\r\n      <!-- My Account -->\r\n      <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fas fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n  \r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fas fa-user-cog text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n  \r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n          </div>\r\n        </li>\r\n    </ul>\r\n\r\n  </navlinks>\r\n\r\n</mdb-navbar>\r\n<!-- Navbar -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Navigation-->\r\n<header>\r\n\r\n  <!-- Navbar -->\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n    <!-- SideNav slide-out button -->\r\n    <navlinks class=\"navbar-container\">\r\n\r\n      <div class=\"white-text\">\r\n        <a (click)=\"drawer.toggle()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n          <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n\r\n    </navlinks>\r\n    <!--SideNav slide-out button -->\r\n\r\n    <navlinks>\r\n      <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n\r\n        <!-- Contact -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- Support -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- My Account -->\r\n        <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n\r\n            <!-- Menu item Settings  -->\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fa fa-cog mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n\r\n            <!-- Menu item Log out  -->\r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fa fa-sign-out mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n\r\n          </div>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n\r\n    </navlinks>\r\n\r\n  </mdb-navbar>\r\n  <!-- Navbar -->\r\n\r\n\r\n  <!-- Sidebar Material-->\r\n  <mat-sidenav-container class=\"sidenav-container fixed-top\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n        [mode]=\"!(isHandset$ | async) ? 'over' : 'side'\"\r\n        [opened]=\"(isHandset$ | async)\">\r\n\r\n      <mat-nav-list>\r\n\r\n        <div class=\"list-group list-group-flush\">\r\n          <!-- Options Providers -->\r\n          <a routerLink=\"providers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-home mr-2\" aria-hidden=\"true\"></i>Providers\r\n          </a>\r\n\r\n          <!-- Options Products -->\r\n          <a routerLink=\"products\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-shopping-bag mr-2\" aria-hidden=\"true\"></i>Products\r\n          </a>\r\n\r\n          <!-- Options Categories -->\r\n          <a routerLink=\"categories\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-file-text mr-2\" aria-hidden=\"true\"></i>Categories\r\n          </a>\r\n\r\n          <!-- Options Cashiers -->\r\n          <a routerLink=\"cashiers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-user-circle mr-2\" aria-hidden=\"true\"></i>Cashiers\r\n          </a>\r\n\r\n          <!-- Options Orders -->\r\n          <a routerLink=\"orders\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-hand-o-right mr-2\" aria-hidden=\"true\"></i>Orders\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n\r\n  </mat-sidenav-container>\r\n  <!-- Sidebar Material-->\r\n\r\n</header>\r\n<!-- Main Navigation -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/charts/charts.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/views/charts/charts.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Provider Dasboard Charts section -->\r\n<section>\r\n  <!--Grid row-->\r\n<div class=\"row mt-5\">\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-9 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <div style=\"display: block\">\r\n            <canvas mdbChart [chartType]=\"chart1Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\r\n              [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-3 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card mb-4\">\r\n\r\n        <!-- Card header -->\r\n        <div class=\"card-header text-center\">\r\n          Pie chart\r\n        </div>\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <div style=\"display: block\">\r\n            <canvas mdbChart [chartType]=\"chart2Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\r\n              [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n      <!--Card-->\r\n      <div class=\"card mb-4\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <!-- List group links -->\r\n          <div class=\"list-group list-group-flush\">\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Sales\r\n              <span class=\"badge badge-success badge-pill pull-right\">22%\r\n                <i class=\"fa fa-arrow-up ml-1\"></i>\r\n              </span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Traffic\r\n              <span class=\"badge badge-danger badge-pill pull-right\">5%\r\n                <i class=\"fa fa-arrow-down ml-1\"></i>\r\n              </span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Orders\r\n              <span class=\"badge badge-primary badge-pill pull-right\">14</span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Issues\r\n              <span class=\"badge badge-primary badge-pill pull-right\">123</span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Messages\r\n              <span class=\"badge badge-primary badge-pill pull-right\">8</span>\r\n            </a>\r\n          </div>\r\n          <!-- List group links -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n  </div>\r\n  <!--Grid row-->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Home Admin Workspace -->\r\n<section>  \r\n  <app-stats-card1></app-stats-card1>\r\n\r\n  <app-charts></app-charts>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-lg-5\">\r\n    <!--Grid row-->\r\n    <div class=\"row\">\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Primary-->\r\n            <div class=\"card classic-admin-card primary-color\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fa fa-money\"></i>\r\n                    </div>\r\n                    <p class=\"white-text\">SALES</p>\r\n                    <h4>\r\n                        <strong>$2000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Primary-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Warning-->\r\n            <div class=\"card classic-admin-card warning-color\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fa fa-line-chart\"></i>\r\n                    </div>\r\n                    <p>SUBSCRIPTIONS</p>\r\n                    <h4>\r\n                        <strong>200</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Worse than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Warning-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Blue-->\r\n            <div class=\"card classic-admin-card light-blue lighten-1\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fa fa-pie-chart\"></i>\r\n                    </div>\r\n                    <p>TRAFFIC</p>\r\n                    <h4>\r\n                        <strong>20000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (75%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Blue-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Red-->\r\n            <div class=\"card classic-admin-card red accent-2\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fa fa-bar-chart\"></i>\r\n                    </div>\r\n                    <p>ORGANIC TRAFFIC</p>\r\n                    <h4>\r\n                        <strong>2000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Red-->\r\n        </div>\r\n        <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <mdb-card class=\"mb-2\">\r\n    <!-- Heading -->\r\n    <mdb-card-header>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <!-- Breadcrumbs navigation -->\r\n          <div class=\"col\">\r\n            <h6 class=\"h6-responsive pt-2\">\r\n              <i (click)=\"redirectToHome()\" class=\"fa fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n              <span> / </span>\r\n              <span>Users</span>\r\n            </h6>\r\n          </div>\r\n  \r\n          <!-- Icon Search -->\r\n          <div *ngIf=\"!visibility\" class=\"col-2 d-flex justify-content-end animated bounceInLeft pt-2\">\r\n            <i class=\"fa fa-search prefix fa-lg\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Open search\" placement=\"left\"\r\n              (click)=\"setVisibility(true)\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Filter Data -->\r\n        <div *ngIf=\"visibility\" class=\"row d-flex animated bounceInRight\">\r\n          <div class=\"col-sm-7\">\r\n            <div class=\"md-form form-sm\">\r\n              <i class=\"fa fa-times prefix\" aria-hidden=\"true\"\r\n                mdbTooltip=\"Close search\" placement=\"top\"\r\n                (click)=\"setVisibility(false)\"></i>\r\n              <input mdbInputDirective\r\n                  type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                  (keyup)=\"applyFilter($event.target.value)\">\r\n  \r\n              <label for=\"formFilter\">Filter</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </mdb-card-header>\r\n\r\n    <!-- Content -->\r\n    <mdb-card-body>\r\n      <h6 *ngIf=\"users.length === 0\" class=\"h6-responsive text-center\">\r\n        <p class=\"font-italic tc-custom\">No users found.</p>\r\n      </h6>\r\n\r\n      <div *ngIf=\"users.length > 0\">\r\n        <!-- Table -->\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <!-- Column Name -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let user\" (click)=\"redirectToProviderWorkspace(user.uid)\">\r\n    \r\n              <p class=\"ml-2\">{{user.displayName}}</p>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column Email -->\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n            <td mat-cell *matCellDef=\"let user\" (click)=\"redirectToProviderWorkspace(user.uid)\">\r\n    \r\n              <p class=\"ml-2\">{{user.email}}</p>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column Publish -->\r\n          <ng-container matColumnDef=\"publish\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Publish </th>\r\n            <td mat-cell *matCellDef=\"let user\" (click)=\"redirectToProviderWorkspace(user.uid)\">\r\n    \r\n              <h6>\r\n                <span class=\"badge badge-pill ml-2\" [ngStyle]=\"{'background-color': user.publish ? '#00C851' : '#ff4444' }\"\r\n                    mdbTooltip=\"Change status\"\r\n                    placement=\"top\" \r\n                    (click)=\"update(user)\">\r\n    \r\n                  <a *ngIf=\"user.publish\">Yes</a>\r\n                  <a *ngIf=\"!user.publish\">No</a>\r\n                </span>\r\n              </h6>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column View Details -->\r\n          <ng-container matColumnDef=\"view\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Info </th>\r\n            <td mat-cell *matCellDef=\"let user\" (click)=\"redirectToProviderWorkspace(user.uid)\">\r\n              <a type=\"button\" mdbTooltip=\"View details\" placement=\"top\" class=\"waves-light\"\r\n                (click)=\"redirectToProviderWorkspace(user.uid)\">\r\n    \r\n                <i class=\"fa fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n          <tr mat-row *matRowDef=\"let users; columns: columnsToDisplay;\"></tr>\r\n    \r\n        </table>\r\n    \r\n        <mat-paginator [pageSizeOptions]='pageSizeOptions' showFirstLastButtons></mat-paginator>\r\n    \r\n      </div>      \r\n    </mdb-card-body>\r\n        \r\n  </mdb-card>\r\n  \r\n</div>\r\n \r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Layout -->\r\n<app-layout>\r\n\r\n  <app-cashier-header (sidenavToggle)=\"drawer.toggle()\"></app-cashier-header>\r\n\r\n  <mat-sidenav-container>\r\n    <!-- Sidebar Material -->\r\n    <mat-sidenav #drawer class=\"sidenav special-color-dark\" fixedInViewport=\"true\"\r\n        [attr.role]=\"isHandSet$ ? 'dialog' : 'navigation'\"\r\n        [mode]=\"(isHandSet$ | async)!.matches ? 'over' : 'side'\"\r\n        [opened]=\"!(isHandSet$ | async)!.matches\">\r\n\r\n      <div class=\"list-group list-group-flush mt-4\">\r\n        <!-- Options Home -->\r\n        <a routerLink=\"home\" class=\"list-group-item list-group-item-action special-color-dark waves-effect\">\r\n          <i class=\"fas fa-home mr-2\" aria-hidden=\"true\"></i>Home\r\n        </a>\r\n  \r\n      </div>\r\n\r\n    </mat-sidenav>\r\n    <!-- Sidebar Material -->\r\n\r\n    <!-- Main Content -->\r\n    <mat-sidenav-content>\r\n\r\n      <!-- Workspace Content -->\r\n      <main class=\"mx-lg-5 mt-5\">\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <!-- Footer -->\r\n      <!-- <app-footer></app-footer> -->\r\n\r\n    </mat-sidenav-content>\r\n    <!-- Main Content -->\r\n\r\n  </mat-sidenav-container>\r\n\r\n<!-- Main Layout -->\r\n</app-layout>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n  <!-- SideNav slide-out button -->\r\n  <navlinks class=\"navbar-container\">\r\n\r\n    <div class=\"white-text\">\r\n      <a (click)=\"onToggleSideNav()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n        <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </navlinks>\r\n  <!--SideNav slide-out button -->\r\n\r\n  <navlinks>\r\n    <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n        </a>\r\n      </li> -->\r\n\r\n      <!-- My Account -->\r\n      <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fas fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n  \r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fas fa-user-cog text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n  \r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n          </div>\r\n        </li>\r\n    </ul>\r\n\r\n  </navlinks>\r\n\r\n</mdb-navbar>\r\n<!-- Navbar -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Navigation-->\r\n<header>\r\n\r\n  <!-- Navbar -->\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n    <!-- SideNav slide-out button -->\r\n    <navlinks class=\"navbar-container\">\r\n\r\n      <div class=\"white-text\">\r\n        <a (click)=\"drawer.toggle()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n          <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n\r\n    </navlinks>\r\n    <!--SideNav slide-out button -->\r\n\r\n    <navlinks>\r\n      <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n\r\n        <!-- Contact -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- Support -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- My Account -->\r\n        <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n\r\n            <!-- Menu item Settings  -->\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fa fa-cog mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n\r\n            <!-- Menu item Log out  -->\r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fa fa-sign-out mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n\r\n          </div>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n\r\n    </navlinks>\r\n\r\n  </mdb-navbar>\r\n  <!-- Navbar -->\r\n\r\n\r\n  <!-- Sidebar Material-->\r\n  <mat-sidenav-container class=\"sidenav-container fixed-top\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n        [mode]=\"!(isHandset$ | async) ? 'over' : 'side'\"\r\n        [opened]=\"(isHandset$ | async)\">\r\n\r\n      <mat-nav-list>\r\n\r\n        <div class=\"list-group list-group-flush\">\r\n          <!-- Options Providers -->\r\n          <a routerLink=\"providers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-home mr-2\" aria-hidden=\"true\"></i>Providers\r\n          </a>\r\n\r\n          <!-- Options Products -->\r\n          <a routerLink=\"products\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-shopping-bag mr-2\" aria-hidden=\"true\"></i>Products\r\n          </a>\r\n\r\n          <!-- Options Categories -->\r\n          <a routerLink=\"categories\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-file-text mr-2\" aria-hidden=\"true\"></i>Categories\r\n          </a>\r\n\r\n          <!-- Options Cashiers -->\r\n          <a routerLink=\"cashiers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-user-circle mr-2\" aria-hidden=\"true\"></i>Cashiers\r\n          </a>\r\n\r\n          <!-- Options Orders -->\r\n          <a routerLink=\"orders\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-hand-o-right mr-2\" aria-hidden=\"true\"></i>Orders\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n\r\n  </mat-sidenav-container>\r\n  <!-- Sidebar Material-->\r\n\r\n</header>\r\n<!-- Main Navigation -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <!-- Nav Tabs -->\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col\">        \r\n        <mdb-card>\r\n          <mdb-card-header>\r\n            <div class=\"d-flex flex-row-reverse\">\r\n              <mat-form-field class=\"col-sm-3\">\r\n                <!-- DateTimePicker -->\r\n                <input matInput\r\n                  placeholder=\"Choose date\"\r\n                  [matDatepicker]=\"dtp\"\r\n                  [value]=\"date.value\"\r\n                  (dateInput)=\"getAllOrdersByDate($event.target.value)\">\r\n\r\n                <mat-datepicker-toggle matSuffix [for]=\"dtp\"></mat-datepicker-toggle>\r\n                <mat-datepicker #dtp></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"col-sm-5\">\r\n                <input matInput (keyup)=\"ApplyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n\r\n              <div class=\"col\"></div>\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <!-- All Orders -->\r\n            <ul class=\"nav nav-pills card-header-pills\">\r\n              <li class=\"nav-item\" (click)=\"onClickAllOrders()\">\r\n                <a class=\"nav-link\" [ngClass]=\"{'active': orderState ==='all'}\">All\r\n                  <mdb-badge pill=\"true\" danger=\"true\">{{orders.length}}</mdb-badge>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\" (click)=\"onClickPendingOrders()\">\r\n                <a class=\"nav-link\" [ngClass]=\"{'active': orderState ==='pending'}\">Pending\r\n                  <mdb-badge pill=\"true\" danger=\"true\">{{ordersPending.length}}</mdb-badge>\r\n                </a>\r\n              </li>\r\n              <!-- Orders Ready -->\r\n              <li class=\"nav-item\" (click)=\"onClickReadyOrders()\">\r\n                <a class=\"nav-link\" [ngClass]=\"{'active': orderState ==='ready'}\">Ready\r\n                  <mdb-badge pill=\"true\" danger=\"true\">{{ordersReady.length}}</mdb-badge>\r\n                </a>\r\n              </li>\r\n              <!-- Orders Completed -->\r\n              <li class=\"nav-item\" (click)=\"onClickCompletedOrders()\">\r\n                <a class=\"nav-link\" [ngClass]=\"{'active': orderState ==='completed'}\">Completed\r\n                  <mdb-badge pill=\"true\" danger=\"true\">{{ordersCompleted.length}}</mdb-badge>\r\n                </a>\r\n              </li>\r\n              <!-- Orders Canceled -->\r\n              <li class=\"nav-item\" (click)=\"onClickCanceledOrders()\" >\r\n                <a class=\"nav-link\" [ngClass]=\"{'active': orderState ==='canceled'}\">Canceled\r\n                  <mdb-badge pill=\"true\" danger=\"true\">{{ordersCanceled.length}}</mdb-badge>\r\n                </a>\r\n              </li>                    \r\n            </ul>\r\n          </mdb-card-header>\r\n    \r\n          <mdb-card-body>\r\n            <h6 *ngIf=\"message\" class=\"h6-responsive text-center\">\r\n              <p class=\"font-italic tc-custom\">{{message}}</p>\r\n            </h6>\r\n            <div *ngIf=\"!message\">\r\n              <!-- Table -->\r\n              <table mat-table [dataSource]=\"dataSource\" matSort>\r\n                <!-- Column Id -->\r\n                <ng-container matColumnDef=\"Id\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\r\n                  <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                    {{order.id}}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column Created Date -->\r\n                <ng-container matColumnDef=\"createdDate\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> Created Date</th>\r\n                  <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                    {{order.createdDate.toMillis() | date: 'yyyy/MM/dd h:mm:ss a z'}}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column Pickup Time -->\r\n                <ng-container matColumnDef=\"pickupTime\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Pickup Time</th>\r\n                  <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                    {{order.pickupTime}}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column Provider -->\r\n                <ng-container matColumnDef=\"provider\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Provider</th>\r\n                  <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                    {{order.providerName}}\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column Paid -->\r\n                <ng-container matColumnDef=\"paid\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid</th>\r\n                  <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                    <h6 class=\"mt-1\">\r\n                      <span class=\"badge badge-pill mr-3\"\r\n                          [ngStyle]=\"{'background-color': order.paid ? '#00C851' : '#ff4444' }\">\r\n          \r\n                        {{order.paid}}\r\n                      </span>\r\n                    </h6>\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column State -->\r\n                <ng-container matColumnDef=\"status\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                  <td mat-cell *matCellDef='let order'>\r\n                    <h6 class=\"mt-1\">\r\n                      <span class=\"badge badge-pill mr-2\"\r\n                          [ngStyle]=\"{'background-color': getStatusColor(order.status)}\">\r\n          \r\n                        {{order.status}}\r\n                      </span>\r\n                    </h6>\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <!-- Column View -->\r\n                <ng-container matColumnDef=\"view\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n                  <td mat-cell *matCellDef=\"let order\">\r\n                    <!-- Options -->\r\n                    <a type=\"button\"\r\n                        mdbTooltip=\"View details\"\r\n                        placement=\"top\"\r\n                        class=\"waves-light ml-3\"\r\n                        (click)=\"redirectToOrderDetails(order.id)\">\r\n        \r\n                      <i class=\"fa fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n                <tr mat-row *matRowDef=\"let orders; columns: columnsToDisplay\"></tr>\r\n\r\n              </table>\r\n              <!-- Table -->\r\n              <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n          </mdb-card-body>\r\n        </mdb-card>          \r\n      </div>\r\n      \r\n    </div>\r\n  \r\n  <!-- Nav Tabs -->\r\n\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/home-provider/home-provider.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/home-provider/home-provider.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Layout -->\r\n<app-layout>\r\n\r\n  <!-- Header -->\r\n  <app-provider-header header (sidenavToggle)=\"drawer.toggle()\"></app-provider-header>\r\n\r\n  <mat-sidenav-container>\r\n    <!-- Sidebar Material -->\r\n    <mat-sidenav #drawer class=\"sidenav special-color-dark\" fixedInViewport=\"true\"\r\n        [attr.role]=\"isHandSet$ ? 'dialog' : 'navigation'\"\r\n        [mode]=\"(isHandSet$ | async)!.matches ? 'over' : 'side'\"\r\n        [opened]=\"!(isHandSet$ | async)!.matches\">\r\n\r\n      <div class=\"list-group list-group-flush mt-4\">\r\n        <!-- Options Home -->\r\n        <a routerLink=\"home\" class=\"list-group-item list-group-item-action special-color-dark waves-effect\">\r\n          <i class=\"fas fa-home mr-2\" aria-hidden=\"true\"></i>Home\r\n        </a>\r\n\r\n        <!-- Options Providers -->\r\n        <a routerLink=\"providers\" class=\"list-group-item list-group-item-action special-color-dark waves-effect\">\r\n          <i class=\"fas fa-building mr-2\" aria-hidden=\"true\"></i>Providers\r\n        </a>\r\n      </div>\r\n\r\n    </mat-sidenav>\r\n    <!-- Sidebar Material -->\r\n\r\n    <!-- Main Content -->\r\n    <mat-sidenav-content>\r\n\r\n      <!-- Workspace Content -->\r\n      <main class=\"mx-lg-5 mt-5\">\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <!-- Footer -->\r\n      <!-- <app-footer></app-footer> -->\r\n\r\n    </mat-sidenav-content>\r\n    <!-- Main Content -->\r\n\r\n  </mat-sidenav-container>\r\n\r\n</app-layout>\r\n<!-- Main Layout -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Navigation-->\r\n<header>\r\n\r\n  <!-- Navbar -->\r\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n    <!-- SideNav slide-out button -->\r\n    <navlinks class=\"navbar-container\">\r\n\r\n      <div class=\"white-text\">\r\n        <a (click)=\"drawer.toggle()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n          <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n\r\n    </navlinks>\r\n    <!--SideNav slide-out button -->\r\n\r\n    <navlinks>\r\n      <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n        <!-- Contact -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- Support -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n            <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n          </a>\r\n        </li>\r\n\r\n        <!-- My Account -->\r\n        <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fa fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n\r\n            <!-- Menu item Settings  -->\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fa fa-cog mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n\r\n            <!-- Menu item Log out  -->\r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fa fa-sign-out mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </navlinks>\r\n    \r\n  </mdb-navbar>\r\n  <!-- Navbar -->\r\n\r\n\r\n  <!-- Sidebar Material-->\r\n  <mat-sidenav-container class=\"sidenav-container fixed-top\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n        [mode]=\"!(isHandset$ | async) ? 'over' : 'side'\"\r\n        [opened]=\"(isHandset$ | async)\">\r\n\r\n      <mat-nav-list>\r\n        <div class=\"list-group list-group-flush\">\r\n          <!-- Options Providers -->\r\n          <a routerLink=\"providers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-home mr-2\" aria-hidden=\"true\"></i>Providers\r\n          </a>\r\n\r\n          <!-- Options Products -->\r\n          <a routerLink=\"products\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-shopping-bag mr-2\" aria-hidden=\"true\"></i>Products\r\n          </a>\r\n\r\n          <!-- Options Categories -->\r\n          <a routerLink=\"categories\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-file-text mr-2\" aria-hidden=\"true\"></i>Categories\r\n          </a>\r\n\r\n          <!-- Options Cashiers -->\r\n          <a routerLink=\"cashiers\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-user-circle mr-2\" aria-hidden=\"true\"></i>Cashiers\r\n          </a>\r\n\r\n          <!-- Options Orders -->\r\n          <a routerLink=\"orders\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\r\n            <i class=\"fa fa-hand-o-right mr-2\" aria-hidden=\"true\"></i>Orders\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n\r\n  </mat-sidenav-container>\r\n  <!-- Sidebar Material-->\r\n\r\n</header>\r\n<!-- Main Navigation -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n  <!-- SideNav slide-out button -->\r\n  <navlinks class=\"navbar-container\">\r\n\r\n    <div class=\"white-text\">\r\n      <a (click)=\"onToggleSideNav()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n        <i class=\"fas fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </navlinks>\r\n  <!--SideNav slide-out button -->\r\n\r\n  <navlinks>\r\n    <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n\r\n      <!-- Contact -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n        </a>\r\n      </li> -->\r\n\r\n      <!-- Support -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n        </a>\r\n      </li> -->\r\n\r\n      <!-- My Account -->\r\n      <li class=\"nav-item dropdown btn-group\" dropdown>\r\n        <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n          <i class=\"fas fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n        </a>\r\n\r\n        <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">\r\n            <i class=\"fas fa-user-cog text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Settings\r\n          </a>\r\n\r\n          <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n            <i class=\"fas fa-sign-out-alt text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Log out\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </navlinks>\r\n\r\n</mdb-navbar>\r\n<!-- Navbar -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/charts/charts.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/charts/charts.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Provider Dasboard Charts section -->\r\n<section>\r\n  <!--Grid row-->\r\n<div class=\"row mt-5\">\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-9 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <div style=\"display: block\">\r\n            <canvas mdbChart [chartType]=\"chart1Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\r\n              [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-3 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card mb-4\">\r\n\r\n        <!-- Card header -->\r\n        <div class=\"card-header text-center\">\r\n          Pie chart\r\n        </div>\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <div style=\"display: block\">\r\n            <canvas mdbChart [chartType]=\"chart2Type\" [datasets]=\"chartDatasets\" [labels]=\"chartLabels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\r\n              [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n      <!--Card-->\r\n      <div class=\"card mb-4\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <!-- List group links -->\r\n          <div class=\"list-group list-group-flush\">\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Sales\r\n              <span class=\"badge badge-success badge-pill pull-right\">22%\r\n                <i class=\"fa fa-arrow-up ml-1\"></i>\r\n              </span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Traffic\r\n              <span class=\"badge badge-danger badge-pill pull-right\">5%\r\n                <i class=\"fa fa-arrow-down ml-1\"></i>\r\n              </span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Orders\r\n              <span class=\"badge badge-primary badge-pill pull-right\">14</span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Issues\r\n              <span class=\"badge badge-primary badge-pill pull-right\">123</span>\r\n            </a>\r\n            <a class=\"list-group-item list-group-item-action waves-effect\">Messages\r\n              <span class=\"badge badge-primary badge-pill pull-right\">8</span>\r\n            </a>\r\n          </div>\r\n          <!-- List group links -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n  </div>\r\n  <!--Grid row-->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Cashier -->\r\n<mdb-card *ngIf=\"observer$ | async; else progress\" id=\"header\" class=\"w-responsive mt-3 center ml-auto mr-auto\">\r\n  <!-- Card Header -->\r\n  <mdb-card-header class=\"px-lg-5\">\r\n    <h3 class=\"mt-1\">\r\n      <span class=\"badge badge-primary waves-light\">{{title}}</span>\r\n    </h3>\r\n\r\n    <h6 class=\"pt-1\">\r\n      <i (click)=\"redirectToHome()\" class=\"fa fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{provider.name}}</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/cashiers\">Cashiers</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <span class=\"text-capitalize\">{{mode}}</span>\r\n    </h6>\r\n\r\n  </mdb-card-header>\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body class=\"px-lg-5\">\r\n    <form [formGroup]=\"editForm\">\r\n      <!-- Name -->\r\n      <div class=\"md-form form-sm mt-1\">\r\n        <mdb-icon fas icon=\"user\" class=\"prefix\"></mdb-icon>\r\n        <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formName\" formControlName=\"name\"\r\n            [errorMessage]=\"nameError\"\r\n            [validateSuccess]=\"false\">\r\n\r\n        <label for=\"formName\">Name</label>\r\n      </div>\r\n\r\n      <!-- Email -->\r\n      <div class=\"md-form form-sm mt-0\">\r\n        <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\r\n        <input mdbInputDirective type=\"email\" class=\"form-control\"\r\n            id=\"formEmail\" formControlName=\"email\"\r\n            [validateSuccess]=\"false\"\r\n            [errorMessage]=\"emailError\">\r\n\r\n        <label for=\"formEmail\">Email</label>\r\n      </div>\r\n\r\n      <!-- Password -->\r\n      <div class=\"md-form form-sm mt-0\">\r\n        <mdb-icon fas icon=\"lock\" class=\"prefix\"></mdb-icon>\r\n        <input mdbInputDirective type=\"password\" class=\"form-control\"\r\n          id=\"formPassword\" \r\n          data-error=\"password must be at least 6 character\"\r\n          [validateSuccess]=\"false\" \r\n          minlength=\"6\" formControlName=\"password\">\r\n\r\n        <label for=\"formPassword\">Password</label>\r\n      </div>\r\n\r\n      <!-- Confirmation Password -->\r\n      <div class=\"md-form form-sm mt-0 mb-0\">\r\n        <mdb-icon fas icon=\"redo-alt\" class=\"prefix\"></mdb-icon>\r\n        <input mdbInputDirective type=\"password\" class=\"form-control\"\r\n          id=\"formPasswordConfirmation\"\r\n          data-error=\"Confirmation password is required\"\r\n          [validateSuccess]=\"false\"\r\n          formControlName=\"passwordConfirmation\">\r\n\r\n        <label for=\"formPasswordConfirmation\">Confirmation password</label>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </mdb-card-body>\r\n\r\n  <!-- Footer -->\r\n  <mdb-card-footer>\r\n    <div class=\"pl-4\">\r\n      <button mdbBtn [disabled]=\"loading\"\r\n          color=\"primary\"\r\n          class=\"relative waves-light\" mdbWavesEffect\r\n          (click)=\"editCashier()\">\r\n\r\n        <!-- Create Mode -->\r\n        <div *ngIf=\"!edit\" >\r\n          <i *ngIf=\"!loading\" class=\"fas fa-plus left mr-2\" aria-hidden=\"true\"></i>Create\r\n          <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n        <!-- Edit Mode -->\r\n        <div *ngIf=\"edit\">\r\n          <i *ngIf=\"!loading\" class=\"fas fa-save left mr-2\" aria-hidden=\"true\"></i>Save\r\n          <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n      </button>\r\n\r\n      <!-- Button Cancel -->\r\n      <button mdbBtn [disabled]=\"loading\"\r\n          outline=\"true\" color=\"primary\"\r\n          aria-label=\"Close\" mdbWavesEffect\r\n          (click)=\"cancel()\">\r\n\r\n        <i class=\"fas fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n      </button>\r\n    </div>\r\n\r\n  </mdb-card-footer>\r\n\r\n</mdb-card>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Category -->\r\n<mdb-card *ngIf=\"observer$ | async; else progress\" id=\"header\" class=\"w-responsive mt-3 center ml-auto mr-auto\">\r\n\r\n  <!-- Card Header -->\r\n  <mdb-card-header class=\"px-lg-5\">\r\n    <h3 class=\"mt-1\">\r\n      <span class=\"badge badge-primary waves-light\">{{title}}</span>\r\n    </h3>\r\n\r\n    <h6 class=\"pt-1\">\r\n      <i (click)=\"redirectToHome()\" class=\"fa fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{provider.name}}</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories\">Categories</a>\r\n      <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <span class=\"text-capitalize\">{{mode}}</span>\r\n    </h6>\r\n\r\n  </mdb-card-header>\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body class=\"px-lg-5\">\r\n\r\n    <form [formGroup]=\"editForm\">\r\n\r\n      <!-- Name -->\r\n      <div class=\"md-form form-sm mt-2\">\r\n          <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formName\" formControlName=\"name\"\r\n            [validateSuccess]=\"false\"\r\n            [errorMessage]=\"nameError\">\r\n\r\n        <label for=\"formName\">Name</label>\r\n      </div>\r\n\r\n      <!-- Description -->\r\n      <div class=\"md-form form-sm mt-2\">\r\n        <textarea class=\"md-textarea md-textarea-auto form-control\"\r\n            id=\"formDescription\" formControlName=\"description\"\r\n            mdbInputDirective type=\"text\"\r\n            [validateSuccess]=\"false\"\r\n            data-error=\"character not allowed\"></textarea>\r\n\r\n        <label for=\"formDescription\">Description</label>\r\n      </div>\r\n\r\n      <!-- Gallery component -->\r\n      <app-gallery\r\n        (localFiles)=\"onSelectedFiles($event)\"\r\n        [serverFiles$]=\"serverFiles$\"\r\n        [progress$]=\"allPercentage\"\r\n        [uploading]=\"loading\"\r\n        [mode]=\"mode\">\r\n      </app-gallery>\r\n    </form>\r\n\r\n  </mdb-card-body>\r\n\r\n  <mdb-card-footer>\r\n    <div class=\"pl-4\">\r\n      <button mdbBtn\r\n          [disabled]=\"loading\"\r\n          color=\"primary\"\r\n          class=\"relative waves-light\" mdbWavesEffect\r\n          (click)=\"editCategory()\">\r\n\r\n        <!-- Create Mode -->\r\n        <div *ngIf=\"!edit\" >\r\n          <i *ngIf=\"!loading\" class=\"fa fa-plus left mr-2\" aria-hidden=\"true\"></i>Create\r\n          <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n        <!-- Edit Mode -->\r\n        <div *ngIf=\"edit\">\r\n          <i *ngIf=\"!loading\" class=\"fa fa-floppy-o left mr-2\" aria-hidden=\"true\"></i>Save\r\n          <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n      </button>\r\n\r\n      <!-- Button Cancel -->\r\n      <button mdbBtn\r\n          outline=\"true\" color=\"primary\"\r\n          aria-label=\"Close\" mdbWavesEffect\r\n          (click)=\"cancel()\">\r\n\r\n        <i class=\"fa fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n      </button>\r\n    </div>\r\n\r\n  </mdb-card-footer>\r\n\r\n</mdb-card>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Product -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"w-responsive mt-3 mb-3 center ml-auto mr-auto\">\r\n\r\n  <mdb-card id=\"header\">\r\n    <!-- Card Header -->\r\n    <mdb-card-header class=\"px-lg-5\">\r\n      <h3 class=\"h3-responsive\">\r\n        <span class=\"badge badge-primary waves-light\">{{title}}</span>\r\n      </h3>\r\n\r\n      <h6 *ngIf=\"category\" class=\"h6-responsive\">\r\n        <i (click)=\"redirectToHome()\" class=\"fa fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{category.providerName}}</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories\">Categories</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/details\">{{category.name}}</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/products\">Products</a>\r\n        <i class=\"fa fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span class=\"text-capitalize\">{{mode}}</span>\r\n      </h6>\r\n    </mdb-card-header>\r\n\r\n    <!--Card content-->\r\n    <mdb-card-body class=\"px-lg-5\">\r\n\r\n      <form [formGroup]=\"editForm\">\r\n        <!-- Name -->\r\n        <div class=\"md-form form-sm mt-0\">\r\n          <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formName\" formControlName=\"name\"\r\n            [validateSuccess]=\"false\"\r\n            [errorMessage]=\"nameError\">\r\n\r\n          <label for=\"formName\">Name</label>\r\n        </div>\r\n\r\n        <!-- Price -->\r\n        <div class=\"md-form form-sm mt-0\">\r\n          <input mdbInputDirective type=\"number\" class=\"form-control\"\r\n            id=\"formPrice\" formControlName=\"price\"\r\n            [errorMessage]=\"priceError\"\r\n            [validateSuccess]=\"false\">\r\n\r\n          <label for=\"formPrice\">Price</label>\r\n        </div>\r\n\r\n        <!-- Description -->\r\n        <div class=\"md-form form-sm mt-0\">\r\n          <textarea class=\"md-textarea md-textarea-auto form-control\"\r\n              id=\"formDescription\" formControlName=\"description\"\r\n              mdbInputDirective type=\"text\"\r\n              [validateSuccess]=\"false\"\r\n              data-error=\"character not allowed\"></textarea>\r\n\r\n          <label for=\"formDescription\">Description</label>\r\n        </div>\r\n\r\n        <!-- Gallery component -->\r\n      <app-gallery\r\n        (localFiles)=\"onSelectedFiles($event)\"\r\n        [serverFiles$]=\"serverFiles$\"\r\n        [progress$]=\"allPercentage\"\r\n        [uploading]=\"loading\"\r\n        [mode]=\"mode\">\r\n      </app-gallery>\r\n      </form>\r\n\r\n    </mdb-card-body>\r\n\r\n    <mdb-card-footer>\r\n      <div class=\"pl-4\">\r\n        <button mdbBtn\r\n            [disabled]=\"loading\"\r\n            color=\"primary\"\r\n            class=\"relative waves-light\" mdbWavesEffect\r\n            (click)=\"editProduct()\">\r\n\r\n          <!-- Create Mode -->\r\n          <div *ngIf=\"!edit\" >\r\n            <i *ngIf=\"!loading\" class=\"fa fa-plus left mr-2\" aria-hidden=\"true\"></i>Create\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n          </div>\r\n\r\n          <!-- Edit Mode -->\r\n          <div *ngIf=\"edit\">\r\n            <i *ngIf=\"!loading\" class=\"fa fa-floppy-o left mr-2\" aria-hidden=\"true\"></i>Save\r\n            <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n          </div>\r\n\r\n        </button>\r\n\r\n        <!-- Button Cancel -->\r\n        <button mdbBtn\r\n            outline=\"true\" color=\"primary\"\r\n            aria-label=\"Close\" mdbWavesEffect\r\n            (click)=\"cancel()\">\r\n\r\n          <i class=\"fa fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n        </button>\r\n      </div>\r\n\r\n    </mdb-card-footer>\r\n\r\n  </mdb-card>\r\n\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Provider -->\r\n<mdb-card *ngIf=\"observer$ | async; else progress\" id=\"header\" class=\"w-responsive mt-3 mb-3 center ml-auto mr-auto\">\r\n  <!-- Card Header -->\r\n  <mdb-card-header class=\"px-lg-5\">\r\n    <h3 class=\"mt-1\">\r\n      <span class=\"badge badge-primary waves-light\">{{title}}</span>\r\n    </h3>\r\n\r\n    <h6 class=\"pt-1 font-1\">\r\n      <i (click)=\"redirectToHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n      <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n      <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n      <span class=\"text-capitalize\">{{mode}}</span>\r\n    </h6>\r\n  </mdb-card-header>\r\n\r\n  <!--Card content-->\r\n  <mdb-card-body class=\"px-lg-5\">\r\n    <form [formGroup]=\"editForm\">\r\n      <!-- Name -->\r\n      <div class=\"md-form form-sm mt-2\">\r\n        <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formName\" formControlName=\"name\"\r\n            [errorMessage]=\"nameError\"\r\n            [validateSuccess]=\"false\">\r\n\r\n        <label for=\"formName\">Name</label>\r\n      </div>\r\n\r\n      <!-- Phone -->\r\n      <div class=\"md-form form-sm mt-2\">\r\n        <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formPhoneNumber\" formControlName=\"phone\"\r\n            [validateSuccess]=\"false\">\r\n\r\n        <label for=\"formPhoneNumber\">Phone number</label>\r\n      </div>\r\n\r\n      <!-- Google maps (Location) -->\r\n      <div class=\"md-form form-sm mt-2\">\r\n        <input #search mdbInputDirective type=\"text\" class=\"form-control\"\r\n            id=\"formAddress\" formControlName=\"address\"\r\n            [errorMessage]=\"addressError\"\r\n            [validateSuccess]=\"false\"\r\n            placeholder=\"Introduce your address\">\r\n\r\n        <agm-map #map\r\n            [zoom]=\"zoom\"\r\n            [latitude]=\"address.lat\"\r\n            [longitude]=\"address.lng\"\r\n            [scrollwheel]=\"false\">\r\n\r\n          <agm-marker [latitude]=\"address.lat\" [longitude]=\"address.lng\"></agm-marker>\r\n\r\n          <agm-info-window #infoWindow>\r\n            <div>\r\n              {{address.lat}}\r\n              {{address.lng}}\r\n            </div>\r\n          </agm-info-window>\r\n        </agm-map>\r\n      </div>\r\n\r\n      <!-- Available Hours -->\r\n      <div class=\"mt-2\">\r\n        <h5 class=\"h5-responsive\">\r\n          <strong>Available Hours</strong>\r\n        </h5>\r\n\r\n        <table class=\"table table-responsive-sm table-sm table-hover\">\r\n          <thead class=\"mdb-color lighten-5\">\r\n            <tr>\r\n              <th class=\"font-weight-bold\">\r\n                <i class=\"fas fa-calendar-day mr-2\" aria-hidden=\"true\"></i>Day of Week\r\n              </th>\r\n              <th class=\"font-weight-bold\">\r\n                <i class=\"fas fa-clock mr-2\" aria-hidden=\"true\"></i>Opening Time\r\n              </th>\r\n              <th class=\"font-weight-bold\">\r\n                <i class=\"fas fa-clock mr-2\" aria-hidden=\"true\"></i>Closing Time\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <!-- Monday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Monday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"mondayOpeningTime\"\r\n                      formControlName=\"mondayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #mondayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"mondayClosingTime\"\r\n                      formControlName=\"mondayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #mondayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <!-- Tuesday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Tuesday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"tuesdayOpeningTime\"\r\n                      formControlName=\"tuesdayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #tuesdayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"tuesdayClosingTime\"\r\n                      formControlName=\"tuesdayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #tuesdayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <!-- Wednesday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Wednesday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"wednesdayOpeningTime\"\r\n                      formControlName=\"wednesdayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #wednesdayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"wednesdayClosingTime\"\r\n                      formControlName=\"wednesdayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #wednesdayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <!-- Thursday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Thursday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"thursdayOpeningTime\"\r\n                      formControlName=\"thursdayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #thursdayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"thursdayClosingTime\"\r\n                      formControlName=\"thursdayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #thursdayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <!-- Friday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Friday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"fridayOpeningTime\"\r\n                      formControlName=\"fridayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #fridayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"fridayClosingTime\"\r\n                      formControlName=\"fridayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #fridayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n            <!-- Saturday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Saturday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"saturdayOpeningTime\"\r\n                      formControlName=\"saturdayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #saturdayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n                <td>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"closing time\"\r\n                        aria-label=\"default time\"\r\n                        [ngxTimepicker]=\"saturdayClosingTime\"\r\n                        formControlName=\"saturdayCT\" readonly>\r\n\r\n                    <ngx-material-timepicker #saturdayClosingTime></ngx-material-timepicker>\r\n                  </mat-form-field>\r\n                </td>\r\n            </tr>\r\n            <!-- Sunday -->\r\n            <tr>\r\n              <td class=\"align-middle\">Sunday</td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"opening time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"sundayOpeningTime\"\r\n                      formControlName=\"sundayOT\" readonly>\r\n\r\n                  <ngx-material-timepicker #sundayOpeningTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n              <td>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"closing time\"\r\n                      aria-label=\"default time\"\r\n                      [ngxTimepicker]=\"sundayClosingTime\"\r\n                      formControlName=\"sundayCT\" readonly>\r\n\r\n                  <ngx-material-timepicker #sundayClosingTime></ngx-material-timepicker>\r\n                </mat-form-field>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n        <!-- <h6 class=\"h6-responsive\">\r\n          <p class=\"font-italic tc-custom\">No schedule has been selected</p>\r\n        </h6> -->\r\n\r\n      </div>\r\n\r\n      <!-- Description -->\r\n      <div class=\"md-form form-sm mt-5\">\r\n        <textarea class=\"md-textarea md-textarea-auto form-control\"\r\n            id=\"formDescription\" formControlName=\"description\"\r\n            type=\"text\" [validateSuccess]=\"false\"\r\n            data-error=\"character not allowed\" mdbInputDirective></textarea>\r\n\r\n        <label for=\"formDescription\">Description</label>\r\n      </div>\r\n\r\n      <!-- Gallery component -->\r\n      <app-gallery\r\n        (localFiles)=\"onSelectedFiles($event)\"\r\n        [serverFiles$]=\"serverFiles$\"\r\n        [model]=\"provider\"\r\n        [progress$]=\"allPercentage\"\r\n        [uploading]=\"loading\"\r\n        [mode]=\"mode\">\r\n      </app-gallery>\r\n\r\n    </form>\r\n\r\n  </mdb-card-body>\r\n\r\n  <mdb-card-footer>\r\n    <div class=\"pl-4\">\r\n      <button mdbBtn\r\n          [disabled]=\"loading\"\r\n          color=\"primary\"\r\n          class=\"relative waves-light\" mdbWavesEffect\r\n          (click)=\"editProvider()\">\r\n\r\n        <!-- Create Mode -->\r\n        <div *ngIf=\"!edit\" >\r\n          <i *ngIf=\"!loading\" class=\"fas fa-plus left mr-2\" aria-hidden=\"true\"></i>Create\r\n          <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n        <!-- Edit Mode -->\r\n        <div *ngIf=\"edit\">\r\n          <i *ngIf=\"!loading\" class=\"fas fa-save left mr-2\" aria-hidden=\"true\"></i>Save\r\n          <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </button>\r\n\r\n      <!-- Button Cancel -->\r\n      <button mdbBtn\r\n          outline=\"true\" color=\"primary\"\r\n          aria-label=\"Close\" mdbWavesEffect\r\n          (click)=\"cancel()\">\r\n\r\n        <i class=\"fas fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n      </button>\r\n    </div>\r\n\r\n  </mdb-card-footer>\r\n\r\n</mdb-card>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/gallery/gallery.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/gallery/gallery.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Grid row -->\r\n<div *ngIf=\"serverFiles$ | async\" class=\"row mb-2\">\r\n  <div class=\"loading-shade w-100 h-100\" *ngIf=\"clicked\">\r\n    <div class=\"loader\"></div>\r\n  </div>\r\n\r\n  <!-- Grid column -->\r\n  <div *ngFor=\"let image of selectedFiles\"  class=\"col-lg-4 mt-3 mb-3\">\r\n    <!-- Card -->\r\n    <mdb-card>\r\n      <!-- Image -->\r\n      <img *ngIf=\"image.file\" class=\"img-fluid card-img-top z-depth-1\" src=\"{{ image.src }}\" alt=\"image\">\r\n      <img *ngIf=\"!image.file\" class=\"img-fluid card-img-top z-depth-1\" src=\"{{ image.url }}\" alt=\"image\">\r\n      <!-- Footer -->\r\n      <mdb-card-footer *ngIf=\"!uploading\" class=\"text-center\">\r\n        <!-- principal -->\r\n        <i class=\"fa fa-star px-2\" aria-hidden=\"true\"\r\n          mdbTooltip=\"Mark as principal\"\r\n          placement=\"top\"\r\n          (click)=\"markAsPrincipal(image)\"\r\n          [style.color]=\"image.markAsPrincipal ? '#ff4444': '#37474F'\">\r\n        </i>\r\n        <!-- remove -->\r\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"\r\n          mdbTooltip=\"Remove\"\r\n          placement=\"top\"\r\n          style=\"color: #37474F\"\r\n          (click)=\"removeImage(image)\">\r\n        </i>\r\n\r\n      </mdb-card-footer>\r\n\r\n    </mdb-card>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Alert message -->\r\n<div #alert *ngIf=\"showError && !uploading\"\r\n  class=\"alert alert-danger\"\r\n  alert-dismissible fade show role=\"alert\"\r\n  (click)=\"closeAlert()\">\r\n\r\n  <a type=\"button\" class=\"close\" aria-label=\"Close\" mdbWavesEffect>\r\n  <i class=\"fa fa-times\"></i>\r\n  </a>\r\n\r\n  <p *ngIf=\"extensionError\">\r\n    Invalid extension for file <strong>{{ fileName }}</strong>.\r\n    Only <strong>\"jpg, jpeg, gif, png\"</strong> files are supported.\r\n  </p>\r\n\r\n  <p *ngIf=\"sizeError\">\r\n    Invalid size for file <strong>{{fileName}}</strong>.\r\n    Only <strong>\"2048 KB\"</strong> per file are supported.\r\n  </p>\r\n\r\n</div>\r\n\r\n<!-- Input control -->\r\n<input #fileInput type=\"file\" accept=\"image/*\" multiple style=\"display: none;\"\r\n    (change)=\"onSelectFile($event)\">\r\n\r\n<div *ngIf=\"progress$\" class=\"text-center mt-2\">\r\n  <small>Uploading images: {{ progress$ | async }}%</small>\r\n</div>\r\n<div *ngIf=\"progress$\" class=\"progress\">\r\n  <div class=\"progress-bar bg-success progress-bar-striped progress-bar-animated\"\r\n      role=\"progressbar\"\r\n      [style.width]=\"((progress$ | async) + '%')\"\r\n      aria-valuenow=\"{{progress$ | async}}\"\r\n      aria-valuemin=\"0\"\r\n      aria-valuemax=\"100\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Btn Select files -->\r\n<button mdbBtn *ngIf=\"!uploading\"\r\n    outline=\"true\" color=\"primary\"\r\n    aria-label=\"Close\" mdbWavesEffect\r\n    (click)=\"fileInput.click()\">\r\n\r\n  <i class=\"fa fa-picture-o mr-2\" aria-hidden=\"true\"></i>Select Images ...\r\n</button>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Home Provider Workspace -->\r\n<section class=\"animated fade-in\">\r\n  <app-stats-card></app-stats-card>\r\n\r\n  <app-stats-card1></app-stats-card1>\r\n\r\n  <app-charts></app-charts>\r\n\r\n  <app-basic-table></app-basic-table>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/stats-card/stats-card.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/stats-card/stats-card.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-lg-5\">\r\n    <!--Grid row-->\r\n    <div class=\"row\">\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card-->\r\n            <div class=\"card card-cascade cascading-admin-card\">\r\n                <!--Card Data-->\r\n                <div class=\"admin-up\">\r\n                    <i class=\"far fa-money-bill-alt primary-color\"></i>\r\n                    <div class=\"data\">\r\n                        <p>SALES</p>\r\n                        <h4><strong>$2000</strong></h4>\r\n                    </div>\r\n                </div>\r\n                <!--/.Card Data-->\r\n\r\n                <!--Card content-->\r\n                <div class=\"card-body\">\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <!--Text-->\r\n                    <p class=\"card-text\">Better than last week (25%)</p>\r\n                </div>\r\n                <!--/.Card content-->\r\n\r\n            </div>\r\n            <!--/.Card-->\r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card-->\r\n            <div class=\"card card-cascade cascading-admin-card\">\r\n                <!--Card Data-->\r\n                <div class=\"admin-up\">\r\n                    <i class=\"fas fa-chart-line warning-color\"></i>\r\n                    <div class=\"data\">\r\n                        <p>SUBSCRIPTIONS</p>\r\n                        <h4><strong>200</strong></h4>\r\n                    </div>\r\n                </div>\r\n                <!--/.Card Data-->\r\n\r\n                <!--Card content-->\r\n                <div class=\"card-body\">\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar bg grey darken-2\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <!--Text-->\r\n                    <p class=\"card-text\">Worse than last week (25%)</p>\r\n                </div>\r\n                <!--/.Card content-->\r\n\r\n            </div>\r\n            <!--/.Card-->\r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card-->\r\n            <div class=\"card card-cascade cascading-admin-card\">\r\n                <!--Card Data-->\r\n                <div class=\"admin-up\">\r\n                    <i class=\"fas fa-chart-pie light-blue lighten-1\"></i>\r\n                    <div class=\"data\">\r\n                        <p>TRAFFIC</p>\r\n                        <h4><strong>20000</strong></h4>\r\n                    </div>\r\n                </div>\r\n                <!--/.Card Data-->\r\n\r\n                <!--Card content-->\r\n                <div class=\"card-body\">\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar grey darken-2\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <!--Text-->\r\n                    <p class=\"card-text\">Worse than last week (75%)</p>\r\n                </div>\r\n                <!--/.Card content-->\r\n\r\n            </div>\r\n            <!--/.Card-->\r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card-->\r\n            <div class=\"card card-cascade cascading-admin-card\">\r\n                <!--Card Data-->\r\n                <div class=\"admin-up\">\r\n                    <i class=\"far fa-chart-bar red accent-2\"></i>\r\n                    <div class=\"data\">\r\n                        <p>ORGANIC TRAFFIC</p>\r\n                        <h4><strong>2000</strong></h4>\r\n                    </div>\r\n                </div>\r\n                <!--/.Card Data-->\r\n\r\n                <!--Card content-->\r\n                <div class=\"card-body\">\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <!--Text-->\r\n                    <p class=\"card-text\">Better than last week (25%)</p>\r\n                </div>\r\n                <!--/.Card content-->\r\n\r\n            </div>\r\n            <!--/.Card-->\r\n\r\n        </div>\r\n        <!--Grid column-->\r\n\r\n    </div>\r\n    <!--Grid row-->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-lg-5\">\r\n    <!--Grid row-->\r\n    <div class=\"row\">\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Primary-->\r\n            <div class=\"card classic-admin-card primary-color\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"far fa-money-bill-alt\"></i>\r\n                    </div>\r\n                    <p class=\"white-text\">SALES</p>\r\n                    <h4>\r\n                        <strong>$2000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Primary-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Warning-->\r\n            <div class=\"card classic-admin-card warning-color\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fas fa-chart-line\"></i>\r\n                    </div>\r\n                    <p>SUBSCRIPTIONS</p>\r\n                    <h4>\r\n                        <strong>200</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Worse than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Warning-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Blue-->\r\n            <div class=\"card classic-admin-card light-blue lighten-1\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"fas fa-chart-pie\"></i>\r\n                    </div>\r\n                    <p>TRAFFIC</p>\r\n                    <h4>\r\n                        <strong>20000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (75%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Blue-->\r\n        </div>\r\n        <!--Grid column-->\r\n        <!--Grid column-->\r\n        <div class=\"col-xl-3 col-md-6 mb-r\">\r\n            <!--Card Red-->\r\n            <div class=\"card classic-admin-card red accent-2\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"pull-right\">\r\n                        <i class=\"far fa-chart-bar\"></i>\r\n                    </div>\r\n                    <p>ORGANIC TRAFFIC</p>\r\n                    <h4>\r\n                        <strong>2000</strong>\r\n                    </h4>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar bg grey darken-3\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Better than last week (25%)</p>\r\n                </div>\r\n            </div>\r\n            <!--/.Card Red-->\r\n        </div>\r\n        <!--Grid column-->\r\n    </div>\r\n    <!--Grid row-->\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n\r\n  <!--Grid row-->\r\n<div class=\"row mt-5\">\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-6 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <!-- Table  -->\r\n          <table class=\"table table-hover\">\r\n            <!-- Table head -->\r\n            <thead class=\"blue-grey lighten-4\">\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Lorem</th>\r\n                <th>Ipsum</th>\r\n                <th>Dolor</th>\r\n              </tr>\r\n            </thead>\r\n            <!-- Table head -->\r\n\r\n            <!-- Table body -->\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Cell 1</td>\r\n                <td>Cell 2</td>\r\n                <td>Cell 3</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">2</th>\r\n                <td>Cell 4</td>\r\n                <td>Cell 5</td>\r\n                <td>Cell 6</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">3</th>\r\n                <td>Cell 7</td>\r\n                <td>Cell 8</td>\r\n                <td>Cell 9</td>\r\n              </tr>\r\n            </tbody>\r\n            <!-- Table body -->\r\n          </table>\r\n          <!-- Table  -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n    <!--Grid column-->\r\n    <div class=\"col-md-6 mb-4\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card\">\r\n\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n\r\n          <!-- Table  -->\r\n          <table class=\"table table-hover\">\r\n            <!-- Table head -->\r\n            <thead class=\"blue lighten-4\">\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Lorem</th>\r\n                <th>Ipsum</th>\r\n                <th>Dolor</th>\r\n              </tr>\r\n            </thead>\r\n            <!-- Table head -->\r\n\r\n            <!-- Table body -->\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>Cell 1</td>\r\n                <td>Cell 2</td>\r\n                <td>Cell 3</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">2</th>\r\n                <td>Cell 4</td>\r\n                <td>Cell 5</td>\r\n                <td>Cell 6</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">3</th>\r\n                <td>Cell 7</td>\r\n                <td>Cell 8</td>\r\n                <td>Cell 9</td>\r\n              </tr>\r\n            </tbody>\r\n            <!-- Table body -->\r\n          </table>\r\n          <!-- Table  -->\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n    <!--Grid column-->\r\n\r\n  </div>\r\n  <!--Grid row-->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksapce Cashier -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <mdb-card class=\"mb-2\">\r\n    <!-- Heading -->\r\n    <mdb-card-header>\r\n      <div class=\"row\">\r\n        <!-- Breadcrumbs navigation -->\r\n        <div class=\"col\">\r\n          <h6 *ngIf=\"provider\" class=\"h6-responsive pt-2 ml-3 card-text font-1\">\r\n            <!-- Provider -->\r\n            <div *ngIf=\"!isAdmin\">\r\n              <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{provider.name}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Cashiers</span>\r\n            </div>\r\n\r\n            <!-- Admin -->\r\n            <div *ngIf=\"isAdmin\">\r\n              <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Cashiers</span>\r\n            </div>\r\n          </h6>\r\n        </div>\r\n\r\n        <!-- Icon Search -->\r\n        <div *ngIf=\"!visibility\" class=\"col-2 d-flex justify-content-end animated bounceInLeft pt-2\">\r\n          <i class=\"fas fa-search prefix fa-lg\" aria-hidden=\"true\"\r\n            mdbTooltip=\"Open search\" placement=\"left\"\r\n            (click)=\"setVisibility(true)\"></i>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- Filter Data -->\r\n      <div *ngIf=\"visibility\" class=\"row d-flex animated bounceInRight\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"md-form form-sm\">\r\n            <i class=\"fas fa-times prefix\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Close search\" placement=\"top\"\r\n              (click)=\"setVisibility(false)\"></i>\r\n            <input mdbInputDirective\r\n                type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                (keyup)=\"applyFilter($event.target.value)\">\r\n\r\n            <label for=\"formFilter\">Filter</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mdb-card-header> \r\n\r\n    <!-- Content -->\r\n    <mdb-card-body>\r\n      <h6 *ngIf=\"cashiers.length === 0\" class=\"h6-responsive text-center\">\r\n        <p class=\"font-italic tc-custom\">No cashiers found.</p>\r\n      </h6>\r\n\r\n      <div *ngIf=\"cashiers.length > 0\">\r\n        <!-- Table -->\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <!-- Column Name -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let cashier\"\r\n                (click)=\"redirectToEditCashier(cashier.uid)\">\r\n    \r\n              <p class=\"ml-2\">{{cashier.displayName}}</p>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column Email -->\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n            <td mat-cell *matCellDef=\"let cashier\"\r\n                (click)=\"redirectToEditCashier(cashier.uid)\">\r\n    \r\n              <p class=\"ml-2\">{{cashier.email}}</p>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column Provider -->\r\n          <ng-container matColumnDef=\"provider\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Provider </th>\r\n            <td mat-cell *matCellDef=\"let cashier\"\r\n                (click)=\"redirectToEditCashier(cashier.uid)\">\r\n    \r\n              <p class=\"ml-2\">{{cashier.providerName}}</p>\r\n            </td>\r\n          </ng-container>\r\n    \r\n          <!-- Column Operation -->\r\n          <ng-container matColumnDef=\"operation\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let cashier\">\r\n              <!-- Options -->\r\n              <div class=\"block-options\">\r\n                <!-- Option Edit -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Edit cashier\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light mr-3 ml-3\"\r\n                    (click)=\"redirectToEditCashier(cashier.uid)\">\r\n  \r\n                  <i class=\"fas fa-pen prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <!-- Option Delete -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Delete cashier\"\r\n                    placement=\"top\"\r\n                    class=\"relative waves-light\"\r\n                    (click)=\"frame.toggle()\">\r\n  \r\n                  <i class=\"fas fa-trash prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n    \r\n                <!-- Modal Form Delete -->\r\n                <div mdbModal #frame=\"mdbModal\"\r\n                    class=\"modal fade right modal-scrolling\"\r\n                    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"frameModalTop\"\r\n                    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n    \r\n                  <div class=\"modal-dialog modal-side modal-bottom-right modal-notify modal-danger\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n    \r\n                      <!-- Header -->\r\n                      <div class=\"modal-header\">\r\n                        <p class=\"heading\">\r\n                          <strong>Delete cashier</strong>\r\n                        </p>\r\n    \r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\r\n                          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n                        </button>\r\n    \r\n                      </div>\r\n                      <!-- Header -->\r\n    \r\n                      <!-- Body -->\r\n                      <div class=\"modal-body\">\r\n                        <p>This action is irreversible and you will not be able to recover your cashier's data.</p>\r\n                        <p><strong>Are you sure you want to delete <b>{{cashier.displayName}}'s</b> data?</strong></p>\r\n                      </div>\r\n                      <!-- Body -->\r\n    \r\n                      <!-- Footer -->\r\n                      <div class=\"modal-footer flex-center\">\r\n                        <!-- Button Delete -->\r\n                        <button mdbBtn\r\n                            [disabled]=\"deleting\"\r\n                            color=\"danger\"\r\n                            class=\"relative waves-light\" mdbWavesEffect\r\n                            (click)=\"deleteCashier(cashier.uid)\">\r\n    \r\n                          <i *ngIf=\"!deleting\"class=\"fas fa-trash left mr-2\" aria-hidden=\"true\"></i>Delete\r\n                          <i *ngIf=\"deleting\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n    \r\n                        <!-- Button Cancel -->\r\n                        <button mdbBtn (click)=\"frame.hide()\"\r\n                            type=\"submit\" outline=\"true\" color=\"danger\"\r\n                            aria-label=\"Close\" mdbWavesEffect>\r\n    \r\n                          <i class=\"fas fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n                        </button>\r\n    \r\n                      </div>\r\n                      <!-- Footer -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- Modal Form Delete -->\r\n              </div>\r\n    \r\n            </td>\r\n          </ng-container>\r\n    \r\n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n          <tr mat-row *matRowDef=\"let cashier; columns: columnsToDisplay;\"></tr>\r\n    \r\n        </table>\r\n        <!-- Table -->\r\n    \r\n        <mat-paginator [pageSizeOptions]='pageSizeOptions' showFirstLastButtons></mat-paginator>\r\n    \r\n      </div>\r\n    </mdb-card-body>    \r\n\r\n  </mdb-card>\r\n  \r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" routerLink=\"create\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\">\r\n    <i class=\"material-icons\">add</i>\r\n  </a>\r\n\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Category Details -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"w-responsive h-responsive ml-auto mr-auto mt-3\">\r\n  <!-- Breadcrumbs navigation -->\r\n  <mdb-card>\r\n    <h6 class=\"h6-responsive pt-3 card-text\">\r\n      <!-- Provider -->\r\n      <div *ngIf=\"!isAdmin\">\r\n        <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{ providerId }}/details\">{{ category.providerName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{ providerId }}/categories\">Categories</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n\r\n      <!-- Admin -->\r\n      <div *ngIf=\"isAdmin\">\r\n        <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a>{{ user.displayName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{ userId }}/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{ userId }}/providers/{{ providerId }}/details\">{{ category.providerName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{ userId }}/providers/{{ providerId }}/categories\">Categories</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n     \r\n    </h6>\r\n\r\n    <hr>\r\n\r\n    <mdb-card-body>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"view\">\r\n            <img class=\"d-block w-100 rounded animated fadeInLeft\" src=\"{{ category.url }}\" alt=\"provider image\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-7\">\r\n          <h4 class=\"h4-responsive font-weight-bold\">{{ category.name }}</h4>\r\n          <p  class=\"card-text small-font\" *ngIf=\"category.description.length > 0\">\r\n            {{ category.description }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n    </mdb-card-body>\r\n\r\n    <mdb-card-footer>\r\n      <h5 class=\"mb-3\">\r\n        <!-- Add Product -->\r\n        <a *ngIf=\"!isAdmin\" (click)=\"redirectToEditProduct()\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-3\">\r\n            <i class=\"fa fa-plus prefix mr-2\" aria-hidden=\"true\"></i>Product\r\n          </mdb-badge>\r\n        </a>\r\n\r\n        <!-- List Products -->\r\n        <a (click)=\"redirectToProductWorkspace()\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix mr-2\" aria-hidden=\"true\"></i>Products\r\n          </mdb-badge>\r\n        </a>\r\n      </h5>\r\n    </mdb-card-footer>\r\n\r\n  </mdb-card>\r\n\r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\"\r\n          routerLink=\"/provider-dashboard/workspace/providers/{{ providerId }}/categories/{{ categoryId }}/edit\">\r\n\r\n    <i class=\"material-icons\">mode_edit</i>\r\n  </a>\r\n  \r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/category-workspace/category-workspace.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/category-workspace/category-workspace.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksapce Category -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <mdb-card class=\"mb-2\">\r\n    <!-- Heading -->\r\n    <mdb-card-header>\r\n      <div class=\"row\">\r\n        <!-- Breadcrumbs navigation -->\r\n        <div class=\"col\">\r\n          <h6 *ngIf=\"provider\" class=\"h6-responsive pt-2 ml-3 card-text font-1\">\r\n            <!-- Provider -->\r\n            <div *ngIf=\"!isAdmin\">\r\n              <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{provider.name}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Categories</span>\r\n            </div>\r\n\r\n            <!-- Admin -->\r\n            <div *ngIf=\"isAdmin\">\r\n              <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/providers\">Users</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a>{{user.displayName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">{{category.providerName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Categories</span>\r\n            </div>\r\n\r\n          </h6>\r\n        </div>\r\n\r\n        <!-- Icon Search -->\r\n        <div *ngIf=\"!visibility\" class=\"col-2 d-flex justify-content-end animated bounceInLeft pt-2\">\r\n          <i class=\"fas fa-search prefix fa-lg\" aria-hidden=\"true\"\r\n            mdbTooltip=\"Open search\" placement=\"left\"\r\n            (click)=\"setVisibility(true)\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Filter Data -->\r\n      <div *ngIf=\"visibility\" class=\"row d-flex animated bounceInRight\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"md-form form-sm\">\r\n            <i class=\"fas fa-times prefix\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Close search\" placement=\"top\"\r\n              (click)=\"setVisibility(false)\"></i>\r\n            <input mdbInputDirective\r\n                type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                (keyup)=\"applyFilter($event.target.value)\">\r\n\r\n            <label for=\"formFilter\">Filter</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </mdb-card-header>\r\n\r\n    <!-- Content -->\r\n    <mdb-card-body>\r\n      <h6 *ngIf=\"categories.length === 0\" class=\"h6-responsive text-center\">\r\n        <p class=\"font-italic tc-custom\">No categories found.</p>\r\n      </h6>\r\n\r\n      <div *ngIf=\"categories.length > 0\">\r\n        <!-- Table -->\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <!-- Column Image -->\r\n          <ng-container matColumnDef=\"image\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\r\n            <td mat-cell *matCellDef=\"let category\"\r\n                style=\"width: 10%;\"\r\n                (click)=\"redirectToCategoryDetails(category.id)\">\r\n\r\n              <img src=\"{{category.url}}\" alt=\"category\" class=\"img-thumbnail mt-2 mb-2 mr-4 animated fadeIn\">\r\n            </td>\r\n\r\n          </ng-container>\r\n\r\n          <!-- Column Name -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let category\" style=\"width: 20%;\"\r\n                (click)=\"redirectToCategoryDetails(category.id)\">\r\n\r\n              <p class=\"ml-2\">{{category.name}}</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Description -->\r\n          <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n            <td mat-cell *matCellDef=\"let category\" (click)=\"redirectToCategoryDetails(category.id)\">\r\n\r\n              <p *ngIf=\"category.description.length <= maxChar\" class=\"ml-2\">{{ category.description }}</p>\r\n              <p *ngIf=\"category.description.length > maxChar\" class=\"ml-2\">{{ category.description.slice(0,130) }} ...</p>\r\n              <!-- <div *ngIf=\"category.description.length > maxChar\" class=\"ml-2\">\r\n                <p *ngIf=\"detail.isCollapsed\">{{category.description.slice(0, 130)}} ...</p>\r\n\r\n                <div #detail=\"bs-collapse\" class=\"mt-2\" mdbCollapse>\r\n                  <p *ngIf=\"!detail.isCollapsed\">{{category.description}}</p>\r\n                </div> -->\r\n\r\n                <!-- Read More -->\r\n                <!-- <h6 *ngIf=\"detail.isCollapsed\">\r\n                  <span (click)=\"detail.show()\" class=\"badge badge-primary waves-light\" mdbWavesEffect>\r\n                    Read more\r\n                  </span>\r\n                </h6> -->\r\n\r\n                <!-- Read less -->\r\n                <!-- <h6 *ngIf=\"!detail.isCollapsed\">\r\n                  <span (click)=\"detail.hide()\" class=\"badge badge-primary waves-light\" mdbWavesEffect>\r\n                    Read less\r\n                  </span>\r\n                </h6>\r\n\r\n              </div> -->\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Operation -->\r\n          <ng-container matColumnDef=\"operation\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let category\">\r\n\r\n              <!-- Options -->\r\n              <div class=\"block-options\">\r\n                <!-- Option Detail -->\r\n                <a type=\"button\"\r\n                    mdbTooltip=\"View details\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light pl-2 pr-2\"\r\n                    (click)=\"redirectToCategoryDetails(category.id)\">\r\n\r\n                  <i class=\"fas fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <!-- Option Edit -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Edit category\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light pl-2 pr-2\"\r\n                    (click)=\"redirectToEditCategory(category.id)\">\r\n\r\n                  <i class=\"fas fa-pen prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <!-- Option Delete -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Delete category\"\r\n                    placement=\"top\"\r\n                    class=\"relative waves-light pl-2 pr-2\"\r\n                    (click)=\"frame.toggle()\">\r\n\r\n                  <i class=\"fas fa-trash prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n\r\n                <!-- Modal Form Delete -->\r\n                <div mdbModal #frame=\"mdbModal\"\r\n                    class=\"modal fade right modal-scrolling\"\r\n                    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"frameModalTop\"\r\n                    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n\r\n                  <div class=\"modal-dialog modal-side modal-bottom-right modal-notify modal-danger\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n\r\n                      <!-- Header -->\r\n                      <div class=\"modal-header\">\r\n                        <p class=\"heading\">\r\n                          <strong>Delete category</strong>\r\n                        </p>\r\n\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\r\n                          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n                        </button>\r\n\r\n                      </div>\r\n                      <!-- Header -->\r\n\r\n                      <!-- Body -->\r\n                      <div class=\"modal-body\">\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-3\">\r\n                            <img src=\"{{category.url}}\" alt=\"category\" class=\"img-thumbnail\">\r\n                          </div>\r\n\r\n                          <div class=\"col-9\">\r\n                            <p>This action is irreversible and you will not be able to recover your category data.</p>\r\n                            <p><strong>Are you sure you want to delete <b>{{category.name}}</b>?</strong></p>\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n                      <!-- Body -->\r\n\r\n                      <!-- Footer -->\r\n                      <div class=\"modal-footer flex-center\">\r\n                        <!-- Button Delete -->\r\n                        <button mdbBtn\r\n                            [disabled]=\"deleting\"\r\n                            color=\"danger\" rounded=\" true\"\r\n                            class=\"relative waves-light\" mdbWavesEffect\r\n                            (click)=\"deleteCategory(category)\">\r\n\r\n                          <i *ngIf=\"!deleting\"class=\"fas fa-trash left mr-2\" aria-hidden=\"true\"></i>Delete\r\n                          <i *ngIf=\"deleting\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n\r\n                        <!-- Button Cancel -->\r\n                        <button mdbBtn (click)=\"frame.hide()\"\r\n                            type=\"submit\" outline=\"true\" color=\"danger\"\r\n                            aria-label=\"Close\" mdbWavesEffect>\r\n\r\n                          <i class=\"fa fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n                        </button>\r\n\r\n                      </div>\r\n                      <!-- Footer -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- Modal Form Delete -->\r\n              </div>\r\n\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n          <tr mat-row *matRowDef=\"let provider; columns: columnsToDisplay;\"></tr>\r\n\r\n        </table>\r\n        <!-- Table -->\r\n\r\n        <mat-paginator [pageSizeOptions]='pageSizeOptions' showFirstLastButtons></mat-paginator>\r\n\r\n      </div>\r\n    </mdb-card-body>\r\n\r\n  </mdb-card>\r\n  <!-- Heading -->\r\n\r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" routerLink=\"create\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\">\r\n    <i class=\"material-icons\">add</i>\r\n  </a>\r\n\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/circle-progress/circle-progress.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/circle-progress/circle-progress.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- progress bar circle -->\r\n<div class=\"content-container\">\r\n  <div *ngIf=\"state === 'waiting'\" class=\"progress-container\">\r\n    <div class=\"loader\"></div>\r\n    <h5 class=\"text-center mt-3\">Loading data</h5>\r\n  </div>\r\n  \r\n  <!-- add image to error -->\r\n  <div *ngIf=\"state === 'failed'\" class=\"progress-container\">\r\n    <i class=\"fa fa-exclamation-triangle fa-5x mr-5\" style=\"color: #ff4444\"></i>\r\n    <h5 class=\"position-center mt-3\">Failed to load data</h5>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/footer/footer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/footer/footer.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Footer-->\r\n<footer class=\"page-footer text-center\r\n    center-on-small-only font-small primary-color-dark darken-2 mt-4 wow fadeIn\">\r\n\r\n    <hr class=\"my-4\">\r\n\r\n    <!-- Social icons -->\r\n    <div class=\"pb-3\">\r\n        <a href=\"\" target=\"_blank\">\r\n            <i class=\"fa fa-facebook mr-3\"></i>\r\n        </a>\r\n\r\n        <a href=\"\" target=\"_blank\">\r\n            <i class=\"fa fa-twitter mr-3\"></i>\r\n        </a>\r\n\r\n        <a href=\"\" target=\"_blank\">\r\n            <i class=\"fa fa-youtube mr-3\"></i>\r\n        </a>\r\n\r\n        <a href=\"\" target=\"_blank\">\r\n            <i class=\"fa fa-google-plus mr-3\"></i>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- Social icons -->\r\n\r\n    <!--Copyright-->\r\n    <div class=\"footer-copyright py-3\">\r\n        © 2018 Copyright:\r\n        <a href=\"\" target=\"_blank\"> Eduardo.com </a>\r\n    </div>\r\n    <!--/.Copyright-->\r\n\r\n</footer>\r\n<!--/.Footer-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/header/header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/header/header.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg\r\n    scrolling-navbar double-nav navbar-dark bg-primary\" [containerInside]=\"false\">\r\n\r\n  <!-- SideNav slide-out button -->\r\n  <navlinks class=\"navbar-container\">\r\n\r\n    <div class=\"white-text\">\r\n      <a (click)=\"onToggleSideNav()\" class=\"button-collapse waves-effect\" mdbWavesEffect>\r\n        <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </navlinks>\r\n  <!--SideNav slide-out button -->\r\n\r\n  <navlinks>\r\n    <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav\">\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\r\n        </a>\r\n      </li>\r\n\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i>\r\n          <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\r\n        </a>\r\n      </li> -->\r\n\r\n      <!-- My Account -->\r\n      <li class=\"nav-item dropdown btn-group\" dropdown>\r\n          <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            <i class=\"fas fa-user mr-1\" aria-hidden=\"true\"></i>{{currentUser.email}}\r\n          </a>\r\n  \r\n          <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"fas fa-user-cog text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Settings\r\n            </a>\r\n  \r\n            <a class=\"dropdown-item\" (click)=\"SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt text-primary fa-fw mr-2\" aria-hidden=\"true\"></i>Log out\r\n            </a>\r\n          </div>\r\n        </li>\r\n    </ul>\r\n\r\n  </navlinks>\r\n\r\n</mdb-navbar>\r\n<!-- Navbar -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/layout/layout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/layout/layout.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Category Details -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"w-responsive h-responsive ml-auto mr-auto mt-3\">\r\n  <mdb-card>\r\n    <h6 class=\"h6-responsive pt-3 card-text font-1\">\r\n      <!-- Provider -->\r\n      <div *ngIf=\"isProvider\">\r\n        <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{order.providerName}}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/orders\">Orders</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n\r\n      <!-- Admin -->\r\n      <div *ngIf=\"isAdmin\">\r\n        <i (click)=\"redirectToAdminHome()\" class=\"fa fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a>{{  user.displayName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">{{ order.providerName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/orders\">Orders</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n\r\n      <!-- Cashier -->\r\n      <div *ngIf=\"isCashier\">\r\n        <i (click)=\"redirectToCashierHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/cashier-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Order</span>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n    </h6>\r\n\r\n    <hr>\r\n\r\n    <mdb-card-body> \r\n      <!-- Name -->\r\n      <h3 class=\"h3-responsive font-weight-bold text-center\">\r\n        <strong>{{ order.displayName }}</strong>\r\n      </h3>\r\n      <!-- Pickup Time -->\r\n      <h5 class=\"h5-responsive text-center mt-1\">\r\n        <span class=\"badge success-color text-white\" mdbTooltip=\"Order pickup time\" placement=\"bottom\">\r\n          <i class=\"fas fa-clock prefix mr-2\" aria-hidden=\"true\"></i>\r\n          <strong>{{ order.pickupTime }}</strong>\r\n        </span>\r\n      </h5>\r\n                      \r\n      <div class=\"row mt-2 mb-5\">\r\n        <!-- Order Id -->\r\n        <div class=\"col\">\r\n          <i class=\"fas fa-id-card prefix mr-2\" aria-hidden=\"true\"\r\n            mdbTooltip=\"Order id\" placement=\"top\"></i>\r\n          {{ order.id }}\r\n          <!-- CreatedDate -->\r\n          <h6 class=\"h6-responsive dark-grey-text\">\r\n            <i class=\"fas fa-calendar-check prefix mr-3\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Order created date\" placement=\"top\"></i>\r\n            {{ order.createdDate.toMillis() | date: 'dd/MM/yyyy h:mm:ss a z' }}\r\n          </h6>\r\n          <!-- Paid -->\r\n          <h6 class=\"h6-responsive dark-grey-text\">\r\n            <i class=\"fas fa-credit-card prefix mr-2 mt-1\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Order paid\" placement=\"top\"></i>\r\n            <span class=\"badge badge-pill text-white ml-1 mr-4\"\r\n                [ngStyle]=\"{'background-color': order.paid ? '#00C851' : '#ff4444' }\">\r\n\r\n              {{ valueToString(order.paid) | uppercase}}\r\n            </span>\r\n          </h6>\r\n        </div> \r\n        \r\n        <div class=\"col\">\r\n          <!-- Total Price -->\r\n          <h1 class=\"h1-responsive text-primary text-center font-weight-bold\">${{ total }}</h1>\r\n          <!-- User Provider -->\r\n          <h6 *ngIf=\"userRole === 'provider' || userRole === 'admin'\"  class=\"h6-responsive text-center mt-2\">\r\n            <span class=\"badge badge-pill text-white ml-1 mr-4\"\r\n                mdbTooltip=\"Order status\"\r\n                placement=\"bottom\"\r\n                [ngStyle]=\"{'background-color': getStatusColor(order.status)}\">\r\n                \r\n              {{ order.status | uppercase}}\r\n            </span>\r\n          </h6>\r\n          <!-- User Cashier -->\r\n          <div *ngIf=\"userRole === 'cashier'\" class=\"d-flex justify-content-center\">\r\n            <!-- Previous Status -->\r\n            <div *ngIf=\"order.status !== 'pending'\" class=\"mt-2 mr-2\">\r\n              <i class=\"fas fa-undo fa-lg prefix\" aria-hidden=\"true\"\r\n                mdbTooltip=\"Previous status\" placement=\"top\"\r\n                (click)=\"previousStatus(order.status)\"></i>\r\n            </div>\r\n\r\n            <div class=\"btn-group\" mdbDropdown>\r\n              <button mdbDropdownToggle mdbBtn size=\"sm\" class=\"dropdown-toggle text-white waves-light\"\r\n                  [ngStyle]=\"{'background-color': getStatusColor(order.status)}\"    \r\n                  type=\"button\" mdbWavesEffect>\r\n  \r\n                {{ order.status | uppercase }}\r\n              </button>\r\n              <div *ngIf=\"order.status === 'pending' || order.status === 'ready'\" class=\"dropdown-menu\">\r\n                <a *ngIf=\"order.status === 'pending'\" class=\"dropdown-item\"\r\n                   (click)=\"updateOrderStatus('ready')\">\r\n\r\n                  Ready\r\n                </a>\r\n                <a *ngIf=\"order.status === 'ready'\" class=\"dropdown-item\"\r\n                    (click)=\"updateOrderStatus('completed')\">\r\n\r\n                  Completed\r\n                </a>\r\n                <a *ngIf=\"order.status === 'ready'\" class=\"dropdown-item\"\r\n                    (click)=\"updateOrderStatus('canceled')\">\r\n\r\n                  Canceled\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n               \r\n        </div>\r\n      </div>\r\n\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header (opened)=\"panelOpenState = true\"\r\n                                      (closed)=\"panelOpenState = false\">\r\n            <mat-panel-title><strong>Product list</strong></mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <!--Grid column-->\r\n          <div class=\"col-md-12 my-1 text-left\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <!-- Shopping Cart table -->\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table product-table\">\r\n                    <!-- Table head -->\r\n                    <thead class=\"mdb-color lighten-5\">\r\n                      <tr>\r\n                        <th></th>\r\n                        <th class=\"font-weight-bold\">\r\n                          <strong>Product</strong>\r\n                        </th>\r\n                        <th></th>\r\n                        <th class=\"font-weight-bold\">\r\n                          <strong>Price</strong>\r\n                        </th>\r\n                        <th></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <!-- /.Table head -->\r\n\r\n                    <!-- Table body -->\r\n                    <tbody>\r\n\r\n                      <!-- Rows -->\r\n                      <tr *ngFor=\"let product of order.products\">\r\n                        <th scope=\"row\">\r\n                          <img src=\"{{ product.url }}\" alt=\"Product\" \r\n                            class=\"card-img-top img-fluid z-depth-0 rounded\">\r\n                        </th>\r\n                        <td style=\"width: 35%\">\r\n                          <h6 class=\"h6-responsive\">\r\n                            <strong>{{ product.name }}</strong>\r\n                          </h6>\r\n                          <p class=\"text-muted\">{{ product.categoryName }}</p>\r\n                        </td>\r\n                        <td></td>\r\n                        <td class=\"font-weight-bold align-middle text-primary\" style=\"width: 15%\">\r\n                          <h6 class=\"h6-responsive\">\r\n                            <strong>${{ product.price }}</strong>\r\n                          </h6>\r\n                        </td>\r\n                        <td></td>\r\n                      </tr>\r\n                      <!-- /.Rows -->                    \r\n\r\n                    </tbody>\r\n                    <!-- /.Table body -->\r\n                  </table>\r\n\r\n                </div>\r\n                <!-- /.Shopping Cart table -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--Grid column-->\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                             (closed)=\"panelOpenState = false\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title><strong>Comments</strong></mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <!-- Comments -->\r\n          <p *ngIf=\"order.remarks.length === 0\" class=\"card-text small-font font-italic text-center\">\r\n            No comments\r\n          </p>\r\n          <p *ngIf=\"order.remarks.length > 0\" class=\"card-text small-font font-italic\">\r\n            {{ order.remarks }}\r\n          </p>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </mdb-card-body>\r\n\r\n  </mdb-card>\r\n  <!-- Heading -->\r\n\r\n  <!-- Floating Action Button -->\r\n  <a type=\"button\" mat-fab class=\"pink mat-elevation-z8\">00:00</a>\r\n  \r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/order-workspace/order-workspace.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/order-workspace/order-workspace.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Worksapce Provider -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <div class=\"mt-3\">\r\n    <!-- Heading -->\r\n    <mdb-card class=\"mb-2\">\r\n      <!-- Header -->\r\n      <mdb-card-header>\r\n        <div class=\"row\">\r\n          <!-- Breadcrumbs navigation -->\r\n          <div class=\"col\">\r\n            <h6 class=\"h6-responsive pt-2 ml-3 card-text font-1\">\r\n              <!-- Provider -->\r\n              <div *ngIf=\"!isAdmin\">\r\n                <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{ provider.name }}</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <span>Orders</span>\r\n              </div>\r\n  \r\n              <!-- Admin -->\r\n              <div *ngIf=\"isAdmin\">\r\n                <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/admin-dashboard/workspace/providers\">Users</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a>{{user.displayName}}</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">{{provider.name}}</a>\r\n                <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n                <span>Orders</span>\r\n              </div>\r\n              \r\n            </h6>\r\n          </div>\r\n\r\n          <!-- Filter data -->\r\n          <!-- <div class=\"col-sm-5\">\r\n            <div class=\"md-form form-sm\">\r\n                <i class=\"fa fa-search prefix\" aria-hidden=\"true\"></i>\r\n                <input mdbInputDirective\r\n                    type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                    [validateSuccess]=\"false\"\r\n                    (keyup)=\"applyFilter($event.target.value)\">\r\n  \r\n                <label for=\"formFilter\">Filter</label>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-sm-5 d-flex justify-content-end\">\r\n            <mat-form-field>\r\n              <input matInput\r\n                placeholder=\"Choose date\"\r\n                [matDatepicker]=\"dtp\"\r\n                [value]=\"date.value\"\r\n                (dateInput)=\"getAllOrdersByDate($event.target.value)\">\r\n\r\n              <mat-datepicker-toggle matSuffix [for]=\"dtp\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dtp></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n            \r\n        </div>\r\n      </mdb-card-header>\r\n      <!-- Header -->\r\n\r\n      <!-- Content -->\r\n      <mdb-card-body>\r\n        <h6 *ngIf=\"orders.length === 0\" class=\"h6-responsive text-center\">\r\n          <p class=\"font-italic tc-custom\">No orders found on this date.</p>\r\n        </h6>\r\n\r\n        <div *ngIf=\"orders.length > 0\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort>\r\n            <!-- Column Created Date -->\r\n            <ng-container matColumnDef=\"createdDate\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Created Date</th>\r\n              <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                {{order.createdDate.toMillis() | date: 'yyyy/MM/dd h:mm:ss a z' }}\r\n              </td>\r\n            </ng-container>\r\n      \r\n            <!-- Column Pickup Time -->\r\n            <ng-container matColumnDef=\"pickupTime\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Pickup Time</th>\r\n              <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">{{order.pickupTime}}</td>\r\n            </ng-container>\r\n      \r\n            <!-- Column Provider -->\r\n            <ng-container matColumnDef=\"provider\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Provider</th>\r\n              <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                {{order.providerName}}\r\n              </td>\r\n            </ng-container>\r\n      \r\n            <!-- Column Paid -->\r\n            <ng-container matColumnDef=\"paid\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid</th>\r\n              <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                <h6>\r\n                  <span class=\"badge badge-pill text-white mr-4\"\r\n                      [ngStyle]=\"{'background-color': order.paid ? '#00C851' : '#ff4444' }\">\r\n      \r\n                    {{order.paid}}\r\n                  </span>\r\n                </h6>\r\n              </td>\r\n            </ng-container>\r\n      \r\n            <!-- Column Provider -->\r\n            <ng-container matColumnDef=\"status\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n              <td mat-cell *matCellDef='let order' (click)=\"redirectToOrderDetails(order.id)\">\r\n                <h6>\r\n                  <span class=\"badge badge-pill text-white mr-4\"\r\n                      [ngStyle]=\"{'background-color': getStatusColor(order.status)}\">\r\n      \r\n                    {{order.status}}\r\n                  </span>\r\n                </h6>\r\n              </td>\r\n            </ng-container>\r\n    \r\n            <!-- Column View -->\r\n            <ng-container matColumnDef=\"view\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n              <td mat-cell *matCellDef=\"let order\">\r\n                <!-- Options -->\r\n                <a type=\"button\"\r\n                    mdbTooltip=\"View details\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light ml-3\"\r\n                    (click)=\"redirectToOrderDetails(order.id)\">\r\n                    \r\n                  <i class=\"fas fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </td>\r\n            </ng-container>\r\n      \r\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n            <tr mat-row *matRowDef=\"let orders; columns: columnsToDisplay;\"></tr>\r\n          </table>\r\n      \r\n          <mat-paginator [pageSizeOptions]='pageSizeOptions' showFirstLastButtons></mat-paginator>\r\n        </div>\r\n\r\n      </mdb-card-body>\r\n      <!-- Content -->\r\n  \r\n    </mdb-card>\r\n    <!-- Heading -->\r\n     \r\n  </div>\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Product Details -->\r\n<section>\r\n  <div *ngIf=\"observer$ | async; else progress\" class=\"w-responsive h-responsive ml-auto mr-auto mt-3\">\r\n    <!-- Breadcrumbs -->\r\n    <mdb-card>\r\n      <h6 class=\"h6-responsive pt-3 card-text font-1\">\r\n        <!-- Provider -->\r\n        <div *ngIf=\"!isAdmin\">\r\n          <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{ product.providerName }}</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories\">Categories</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/details\">{{ product.categoryName }}</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/products\">Products</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <span>Details</span>\r\n        </div>\r\n  \r\n        <!-- Admin -->\r\n        <div *ngIf=\"isAdmin\">\r\n          <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a>{{user.displayName}}</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">{{ product.providerName }}</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories\">Categories</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories/{{categoryId}}/details\">{{ product.categoryName }}</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories/{{categoryId}}/products\">Products</a>\r\n          <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n          <span>Details</span>\r\n        </div>\r\n      </h6>\r\n\r\n      <hr>\r\n\r\n      <mdb-card-body>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-5\">\r\n            <div class=\"view\">\r\n              <img src=\"{{ product.url }}\" class=\"d-block w-100 rounded animated fadeInLeft\" alt=\"provider image\">              \r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-7\">\r\n            <h4 class=\"h4-responsive font-weight-bold\">\r\n              <strong>{{ product.name }}</strong>\r\n            </h4>\r\n            \r\n            <h3 class=\"h3-responsive font-weight-bold text-primary\">\r\n              ${{ product.price }}\r\n            </h3>\r\n  \r\n            <p  class=\"card-text small-font\" *ngIf=\"product.description.length > 0\">\r\n              {{ product.description }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n      </mdb-card-body>\r\n    </mdb-card>\r\n  \r\n    <!-- <mdb-card>\r\n      <div class=\"view\">\r\n        <img class=\"card-img-top\" src=\"{{product.url}}\" alt=\"provider image\">\r\n        <div class=\"mask text-white text-center rgba-black-light py-4 px-3\"> -->\r\n          <!-- Name -->\r\n          <!-- <h3 class=\"card-title h3-responsive pt-2\"><strong>{{product.name}}</strong></h3> -->\r\n          <!-- Price -->\r\n          <!-- <h2 class=\"mt-1 h1-responsive\"><strong>${{product.price}}</strong></h2> -->\r\n          <!-- Description -->\r\n          <!-- <p *ngIf=\"product.description.length > 0\">{{product.description}}</p>\r\n          <div class=\"block-options mt-3\"> -->\r\n            <!-- Provider -->\r\n            <!-- <a *ngIf=\"!isAdmin\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">\r\n              <h5><span class=\"badge badge-pill indigo mr-2\">{{product.providerName}}</span></h5>\r\n            </a>\r\n            <a *ngIf=\"isAdmin\" routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">\r\n              <h5><span class=\"badge badge-pill indigo mr-2\">{{product.providerName}}</span></h5>\r\n            </a> -->\r\n    \r\n            <!-- Category -->\r\n            <!-- <a *ngIf=\"!isAdmin\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/details\">\r\n              <h5><span class=\"badge badge-pill purple darken-2\">{{product.categoryName}}</span></h5>\r\n            </a>\r\n            <a *ngIf=\"isAdmin\" routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories/{{categoryId}}/details\">\r\n              <h5><span class=\"badge badge-pill purple darken-2\">{{product.categoryName}}</span></h5>\r\n            </a>\r\n          </div>\r\n  \r\n        </div>\r\n  \r\n      </div>\r\n  \r\n    </mdb-card> -->\r\n\r\n    <!-- Floating Action Button -->\r\n    <a *ngIf=\"!isAdmin\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\"\r\n          routerLink=\"/provider-dashboard/workspace/providers/{{ providerId }}/categories/{{ categoryId }}/products/{{ product.id }}/edit\">\r\n\r\n      <i class=\"material-icons\">mode_edit</i>\r\n    </a>\r\n    \r\n  </div>\r\n  \r\n  <ng-template #progress>\r\n    <app-circle-progress [state]=\"state\" ></app-circle-progress>\r\n  </ng-template>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/product-workspace/product-workspace.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/product-workspace/product-workspace.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Workspace Product -->\r\n<div *ngIf=\"observer$ | async; else progress\"  class=\"mt-3\">\r\n  <mdb-card class=\"mb-2\">\r\n    <!-- Heading -->\r\n    <mdb-card-header>\r\n      <div class=\"row\">\r\n        <!-- Breadcrumbs navigation -->\r\n        <div class=\"col\">\r\n          <h6 *ngIf=\"category\" class=\" h6-responsive pt-2 ml-3 card-text font-1\">\r\n            <!-- Provider -->\r\n            <div *ngIf=\"!isAdmin\">\r\n              <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/details\">{{category.providerName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories\">Categories</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/{{categoryId}}/details\">{{category.name}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Products</span>\r\n            </div>\r\n\r\n            <!-- Admin -->\r\n            <div *ngIf=\"isAdmin\">\r\n              <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a>{{user.displayName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories\">Categories</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/details\">{{category.providerName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories\">Categories</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories/{{categoryId}}/details\">{{category.name}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Products</span>\r\n            </div>\r\n\r\n          </h6>\r\n        </div>\r\n\r\n        <!-- Icon Search -->\r\n        <div *ngIf=\"!visibility\" class=\"col-1 d-flex justify-content-end animated bounceInLeft pt-2\">\r\n          <i class=\"fas fa-search prefix fa-lg\" aria-hidden=\"true\"\r\n            mdbTooltip=\"Open search\" placement=\"left\"\r\n            (click)=\"setVisibility(true)\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Filter Data -->\r\n      <div *ngIf=\"visibility\" class=\"row d-flex animated bounceInRight\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"md-form form-sm\">\r\n            <i class=\"fas fa-times prefix\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Close search\" placement=\"top\"\r\n              (click)=\"setVisibility(false)\"></i>\r\n            <input mdbInputDirective\r\n                type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                (keyup)=\"applyFilter($event.target.value)\">\r\n\r\n            <label for=\"formFilter\">Filter</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mdb-card-header>\r\n\r\n    <!-- Content -->\r\n    <mdb-card-body>\r\n      <h6 *ngIf=\"products.length === 0\" class=\"h6-responsive text-center\">\r\n        <p class=\"font-italic tc-custom\">No products found.</p>\r\n      </h6>\r\n\r\n      <div *ngIf=\"products.length > 0\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <!-- Column Image -->\r\n          <ng-container matColumnDef=\"image\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\r\n            <td mat-cell *matCellDef=\"let product\"\r\n                style=\"width: 10%;\"\r\n                (click)=\"redirectToProductDetails(product.id)\">\r\n\r\n              <img src=\"{{product.url}}\" alt=\"product\" class=\"img-thumbnail mt-2 mb-2 mr-4 animated fadeIn\">\r\n            </td>\r\n\r\n          </ng-container>\r\n\r\n          <!-- Column Name -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let product\"\r\n                style=\"width: 20%\"\r\n                (click)=\"redirectToProductDetails(product.id)\">\r\n              <p class=\"ml-2\">{{product.name}}</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Price -->\r\n          <ng-container matColumnDef=\"price\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\r\n            <td mat-cell *matCellDef=\"let product\"\r\n                style=\"width: 8%;\"\r\n                (click)=\"redirectToProductDetails(product.id)\">\r\n              <p class=\"ml-2\">{{product.price}}$</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Description -->\r\n          <ng-container matColumnDef=\"description\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n              <td mat-cell *matCellDef=\"let product\" (click)=\"redirectToProductDetails(product.id)\">\r\n\r\n                <p *ngIf=\"product.description.length <= maxChar\" class=\"ml-2\">{{ product.description }}</p>\r\n                <p *ngIf=\"product.description.length > maxChar\" class=\"ml-2\">{{ product.description.slice(0, 130) }} ...</p>\r\n\r\n                <!-- <div *ngIf=\"product.description.length > maxChar\" class=\"ml-2\">\r\n                  <p *ngIf=\"detail.isCollapsed\">{{product.description.slice(0, 130)}} ...</p>\r\n\r\n                  <div #detail=\"bs-collapse\" class=\"mt-2\" mdbCollapse>\r\n                    <p *ngIf=\"!detail.isCollapsed\">{{product.description}}</p>\r\n                  </div> -->\r\n\r\n                  <!-- Read More -->\r\n                  <!-- <h6 *ngIf=\"detail.isCollapsed\">\r\n                    <span (click)=\"detail.show()\" class=\"badge badge-primary waves-light\" mdbWavesEffect>\r\n                      Read more\r\n                    </span>\r\n                  </h6> -->\r\n\r\n                  <!-- Read less -->\r\n                  <!-- <h6 *ngIf=\"!detail.isCollapsed\">\r\n                    <span (click)=\"detail.hide()\" class=\"badge badge-primary waves-light\" mdbWavesEffect>\r\n                      Read less\r\n                    </span>\r\n                  </h6>\r\n\r\n                </div> -->\r\n              </td>\r\n            </ng-container>\r\n\r\n            <!-- Column Operation -->\r\n            <ng-container matColumnDef=\"operation\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n              <td mat-cell *matCellDef=\"let product\">\r\n                <!-- Options -->\r\n                <div class=\"block-options\">\r\n                  <!-- Option Detail -->\r\n                  <a type=\"button\"\r\n                      mdbTooltip=\"View details\"\r\n                      placement=\"top\"\r\n                      class=\"waves-light pl-2 pr-2\"\r\n                      (click)=\"redirectToProductDetails(product.id)\">\r\n\r\n                    <i class=\"fas fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  <!-- Option Edit -->\r\n                  <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                      mdbTooltip=\"Edit product\"\r\n                      placement=\"top\"\r\n                      class=\"waves-light pl-2 pr-2\"\r\n                      (click)=\"redirectToEditProduct(product.id)\">\r\n\r\n                    <i class=\"fas fa-pen prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  <!-- Option Delete -->\r\n                  <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                      mdbTooltip=\"Delete product\"\r\n                      placement=\"top\"\r\n                      class=\"relative waves-light pl-2 pr-2\"\r\n                      (click)=\"frame.toggle()\">\r\n\r\n                    <i class=\"fas fa-trash prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n\r\n                  <!-- Modal Form Delete -->\r\n                  <div mdbModal #frame=\"mdbModal\"\r\n                      class=\"modal fade right modal-scrolling\"\r\n                      tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"frameModalTop\"\r\n                      aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n\r\n                    <div class=\"modal-dialog modal-side modal-bottom-right modal-notify modal-danger\" role=\"document\">\r\n                      <div class=\"modal-content\">\r\n\r\n                        <!-- Header -->\r\n                        <div class=\"modal-header\">\r\n                          <p class=\"heading\">\r\n                            <strong>Delete product</strong>\r\n                          </p>\r\n\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\r\n                            <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n                          </button>\r\n\r\n                        </div>\r\n                        <!-- Header -->\r\n\r\n                        <!-- Body -->\r\n                        <div class=\"modal-body\">\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-3\">\r\n                              <img src=\"{{product.url}}\" alt=\"product\" class=\"img-thumbnail\">\r\n                            </div>\r\n\r\n                            <div class=\"col-9\">\r\n                              <p>This action is irreversible and you will not be able to recover your product data.</p>\r\n                              <p><strong>Are you sure you want to delete <b>{{product.name}}</b>?</strong></p>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n                        <!-- Body -->\r\n\r\n                        <!-- Footer -->\r\n                        <div class=\"modal-footer flex-center\">\r\n                          <!-- Button Delete -->\r\n                          <button mdbBtn color=\"danger\"\r\n                              [disabled]=\"deleting\"\r\n                              class=\"relative waves-light\" mdbWavesEffect\r\n                              (click)=\"deleteProduct(product)\">\r\n\r\n                            <i *ngIf=\"!deleting\"class=\"fas fa-trash left mr-2\" aria-hidden=\"true\"></i>Delete\r\n                            <i *ngIf=\"deleting\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n\r\n                          <!-- Button Cancel -->\r\n                          <button mdbBtn (click)=\"frame.hide()\"\r\n                              type=\"submit\" outline=\"true\" color=\"danger\" data-dismiss=\"modal\"\r\n                              aria-label=\"Close\" mdbWavesEffect>\r\n\r\n                            <i class=\"fas fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n                          </button>\r\n\r\n                        </div>\r\n                        <!-- Footer -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- Modal Form Delete -->\r\n                </div>\r\n\r\n              </td>\r\n            </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let product; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\r\n      </div>\r\n\r\n    </mdb-card-body>\r\n\r\n  </mdb-card>\r\n\r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" routerLink=\"create\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\">\r\n    <i class=\"material-icons\">add</i>\r\n  </a>\r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Provider Details -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"w-responsive h-responsive mr-auto ml-auto mt-3\">\r\n  <!-- navigation -->\r\n  <mdb-card>\r\n    <h6 class=\"h6-responsive pt-3 card-text font-1\">\r\n      <!-- Provider -->\r\n      <div *ngIf=\"!isAdmin\">\r\n        <i (click)=\"redirectToProviderHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/provider-dashboard/workspace/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n\r\n      <!-- Admin -->\r\n      <div *ngIf=\"isAdmin\">\r\n        <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix ml-3 mr-2\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a >{{ user.displayName }}</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <a routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers\">Providers</a>\r\n        <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n        <span>Details</span>\r\n      </div>\r\n    </h6>\r\n\r\n    <hr>\r\n\r\n    <mdb-card-body>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"view\">\r\n            <img class=\"d-block w-100 rounded animated fadeInLeft\" src=\"{{ provider.url }}\" alt=\"provider image\">\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-lg-7\">\r\n          <h4 class=\"h4-responsive font-weight-bold\">\r\n            {{ provider.name }}\r\n          </h4>\r\n          <div class=\"d-flex\">\r\n            <i class=\"fas fa-map-marker-alt prefix mr-2\" aria-hidden=\"true\"></i>\r\n            <p class=\"card-text small-font\">{{ provider.address.formattedAddress }}</p>\r\n          </div>\r\n\r\n          <div class=\"d-flex\" *ngIf=\"provider.phone\">\r\n            <i class=\"fas fa-phone prefix mr-2\" aria-hidden=\"true\"></i>\r\n            <p class=\"card-text small-font\">{{ provider.phone }}</p>\r\n          </div>\r\n\r\n          <!-- <h6 class=\"h6-responsive\"><strong>Hours Available</strong></h6>\r\n          <div class=\"row\" *ngFor=\"let item of provider.availableHours\">\r\n            <div class=\"col-sm-5 card-text1 small-font\">{{ item.dayOfWeek }}</div>\r\n            <div class=\"col card-text1 small-font\">{{ item.opening + \" - \" + item.closing }}</div>\r\n          </div>\r\n\r\n          <p  class=\"card-text small-font\" *ngIf=\"provider.description.length > 0\">\r\n            {{ provider.description }}\r\n          </p>\r\n         -->\r\n\r\n          <mat-accordion>\r\n            <!-- Hours Available -->\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  <h6 class=\"h6-responsive\"><strong>Hours Available</strong></h6>\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n          \r\n              <div class=\"row\" *ngFor=\"let item of provider.availableHours\">\r\n                <div class=\"col-sm-5 card-text1 small-font\">{{ item.dayOfWeek }}</div>\r\n                <div class=\"col card-text1 small-font\">{{ item.opening + \" - \" + item.closing }}</div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n            <!-- Description -->\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  <h6 class=\"h6-responsive\"><strong>Description</strong></h6>\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              \r\n              <p  class=\"card-text small-font\" *ngIf=\"provider.description.length > 0\">\r\n                {{ provider.description }}\r\n              </p>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n\r\n        </div>     \r\n      </div>\r\n    </mdb-card-body>\r\n\r\n    <mdb-card-footer>\r\n      <h5 class=\"mb-3\">\r\n         <!-- Add category -->\r\n        <a *ngIf=\"!isAdmin\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories/create\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-3\">\r\n            <i class=\"fa fa-plus prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Category\r\n          </mdb-badge>\r\n        </a>\r\n\r\n        <!-- List categories -->\r\n        <!-- Provider -->\r\n        <a *ngIf=\"!isAdmin\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/categories\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Categories\r\n          </mdb-badge>\r\n        </a>\r\n        <!-- Admin -->\r\n        <a *ngIf=\"isAdmin\" routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/categories\"> \r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n              <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Categories\r\n          </mdb-badge>\r\n        </a>\r\n\r\n        <!-- Add cashier -->\r\n        <a *ngIf=\"!isAdmin\" class=\"ml-4\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/cashiers/create\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-3\">\r\n              <i class=\"fa fa-plus prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Cashier\r\n            </mdb-badge>\r\n        </a> \r\n\r\n        <!-- List cashiers -->\r\n        <!-- Provider -->\r\n        <a *ngIf=\"!isAdmin\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/cashiers\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Cashiers\r\n          </mdb-badge>\r\n        </a> \r\n        <!-- Admin -->\r\n        <a *ngIf=\"isAdmin\" routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/cashiers\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Cashiers\r\n          </mdb-badge>\r\n        </a>\r\n\r\n        <!-- List orders -->\r\n        <!-- Provider -->\r\n        <a *ngIf=\"!isAdmin\" class=\"ml-4\" routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/orders\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Orders\r\n          </mdb-badge>\r\n        </a>\r\n        <!-- Admin -->\r\n        <a *ngIf=\"isAdmin\" routerLink=\"/admin-dashboard/workspace/users/{{userId}}/providers/{{providerId}}/orders\">\r\n          <mdb-badge class=\"mr-2 mt-3 py-2\" color=\"blue darken-1\">\r\n            <i class=\"fa fa-list-ol prefix pl-2 mr-2\" aria-hidden=\"true\"></i>Orders\r\n          </mdb-badge>\r\n        </a>\r\n      </h5>\r\n    </mdb-card-footer>\r\n  </mdb-card>\r\n\r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\"\r\n          routerLink=\"/provider-dashboard/workspace/providers/{{providerId}}/edit\">\r\n\r\n    <i class=\"material-icons\">mode_edit</i>\r\n  </a>\r\n  \r\n</div>\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Workspace Provider -->\r\n<div *ngIf=\"observer$ | async; else progress\" class=\"mt-3\">\r\n  <mdb-card class=\"mb-2\">\r\n    <!-- Heading -->\r\n    <mdb-card-header>\r\n      <div class=\"row\">\r\n        <!-- Breadcrumbs navigation -->\r\n        <div class=\"col\">\r\n          <h6 class=\"h6-responsive pt-2 ml-3 card-text font-1\">\r\n            <!-- Admin -->\r\n            <div *ngIf=\"isAdmin\">\r\n              <i (click)=\"redirectToAdminHome()\" class=\"fas fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/admin-dashboard/workspace/users\">Users</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <a >{{user.displayName}}</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Providers</span>\r\n            </div>\r\n\r\n            <!-- Provider -->\r\n            <div *ngIf=\"!isAdmin\">\r\n              <i (click)=\"redirectToProviderHome()\" class=\"fa fa-home prefix mr-2\" aria-hidden=\"true\"></i>\r\n              <a routerLink=\"/provider-dashboard/workspace/home\">Home</a>\r\n              <i class=\"fas fa-caret-right prefix ml-1 mr-1\" aria-hidden=\"true\"></i>\r\n              <span>Providers</span>\r\n            </div>\r\n          </h6>\r\n        </div>\r\n\r\n        <!-- Icon Search -->\r\n        <div *ngIf=\"!visibility\" class=\"col-2 d-flex justify-content-end animated bounceInLeft pt-2\">\r\n          <i class=\"fas fa-search prefix fa-lg\" aria-hidden=\"true\"\r\n            mdbTooltip=\"Open search\" placement=\"left\"\r\n            (click)=\"setVisibility(true)\"></i>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Filter Data -->\r\n      <div *ngIf=\"visibility\" class=\"row d-flex animated bounceInRight\">\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"md-form form-sm\">\r\n            <i class=\"fas fa-times prefix\" aria-hidden=\"true\"\r\n              mdbTooltip=\"Close search\" placement=\"top\"\r\n              (click)=\"setVisibility(false)\"></i>\r\n            <input mdbInputDirective\r\n                type=\"text\" id=\"formFilter\" class=\"form-control\"\r\n                (keyup)=\"applyFilter($event.target.value)\">\r\n\r\n            <label for=\"formFilter\">Filter</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </mdb-card-header>\r\n\r\n    <!-- Content -->\r\n    <mdb-card-body>\r\n      <h6 *ngIf=\"providers.length === 0\" class=\"h6-responsive text-center\">\r\n        <p class=\"font-italic tc-custom\">No providers found.</p>\r\n      </h6>\r\n\r\n      <div *ngIf=\"providers.length > 0\">\r\n        <!-- Table -->\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n          <!-- Column Image -->\r\n          <ng-container matColumnDef=\"image\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\r\n            <td mat-cell *matCellDef=\"let provider\"\r\n                style=\"width: 10%;\"\r\n                (click)=\"redirectToProviderDetails(provider.id)\">\r\n\r\n              <img src=\"{{provider.url}}\" alt=\"provider\" class=\"img-thumbnail mt-2 mb-2 mr-4 animated fadeIn\">\r\n            </td>\r\n\r\n          </ng-container>\r\n\r\n          <!-- Column Name -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let provider\" (click)=\"redirectToProviderDetails(provider.id)\">\r\n\r\n              <p class=\"ml-2\">{{provider.name}}</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Address -->\r\n          <ng-container matColumnDef=\"address\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Address</th>\r\n            <td mat-cell *matCellDef=\"let provider\" (click)=\"redirectToProviderDetails(provider.id)\">\r\n              <p class=\"ml-2\">{{provider.address.formattedAddress}}</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Phone Number-->\r\n          <ng-container matColumnDef=\"phone\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone Number</th>\r\n            <td mat-cell *matCellDef=\"let provider\" (click)=\"redirectToProviderDetails(provider.id)\">\r\n              <p class=\"ml-2\">{{provider.phone}}</p>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Column Operation -->\r\n          <ng-container matColumnDef=\"operation\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let provider\">\r\n              <!-- Options -->\r\n              <div class=\"block-options\">\r\n                <!-- Option Detail -->\r\n                <a type=\"button\"\r\n                    mdbTooltip=\"View details\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light pl-2 pr-2\"\r\n                    (click)=\"redirectToProviderDetails(provider.id)\">\r\n\r\n                  <i class=\"fas fa-info-circle prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <!-- Option Edit -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Edit provider\"\r\n                    placement=\"top\"\r\n                    class=\"waves-light pl-2 pr-2\"\r\n                    (click)=\"redirectToEditProvider(provider.id)\">\r\n\r\n                  <i class=\"fas fa-pen prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                <!-- Option Delete -->\r\n                <a *ngIf=\"!isAdmin\" type=\"button\"\r\n                    mdbTooltip=\"Delete provider\"\r\n                    placement=\"top\"\r\n                    class=\"relative waves-light pl-2 pr-2\"\r\n                    (click)=\"frame.toggle()\">\r\n\r\n                  <i class=\"fas fa-trash prefix\" style=\"color: #37474F\" aria-hidden=\"true\"></i>\r\n                </a>\r\n\r\n                <!-- Modal Form Delete -->\r\n                <div mdbModal #frame=\"mdbModal\"\r\n                    class=\"modal fade right modal-scrolling\"\r\n                    tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"frameModalTop\"\r\n                    aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\r\n\r\n                  <div class=\"modal-dialog modal-side modal-bottom-right modal-notify modal-danger\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n\r\n                      <!-- Header -->\r\n                      <div class=\"modal-header\">\r\n                        <div class=\"heading\">\r\n                          <strong>Delete provider</strong>\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\r\n                            <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                      <!-- Header -->\r\n\r\n                      <!-- Body -->\r\n                      <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-3\">\r\n                            <img src=\"{{provider.url}}\" alt=\"provider\" class=\"img-thumbnail\">\r\n                          </div>\r\n\r\n                          <div class=\"col-9\">\r\n                            <p>This action is irreversible and you will not be able to recover your provider data.</p>\r\n                            <p><strong>Are you sure you want to delete <b>{{provider.name}}</b>?</strong></p>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                      <!-- Body -->\r\n\r\n                      <!-- Footer -->\r\n                      <div class=\"modal-footer flex-center\">\r\n                        <!-- Button Delete -->\r\n                        <button mdbBtn\r\n                            [disabled]=\"deleting\"\r\n                            color=\"danger\"\r\n                            class=\"relative waves-light\" mdbWavesEffect\r\n                            (click)=\"deleteProvider(provider)\">\r\n\r\n                          <i *ngIf=\"!deleting\"class=\"fas fa-trash-alt left mr-2\" aria-hidden=\"true\"></i>Delete\r\n                          <i *ngIf=\"deleting\" class=\"fas fa-spinner fa-pulse ml-2\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n\r\n                        <!-- Button Cancel -->\r\n                        <button mdbBtn (click)=\"frame.hide()\"\r\n                            type=\"submit\" outline=\"true\" color=\"danger\" data-dismiss=\"modal\"\r\n                            aria-label=\"Close\" mdbWavesEffect>\r\n\r\n                          <i class=\"fa fa-ban left mr-2\" aria-hidden=\"true\"></i>Cancel\r\n                        </button>\r\n\r\n                      </div>\r\n                      <!-- Footer -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- Modal Form Delete -->\r\n              </div>\r\n\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n          <tr mat-row *matRowDef=\"let provider; columns: columnsToDisplay;\"></tr>\r\n        </table>\r\n\r\n        <mat-paginator [pageSizeOptions]='pageSizeOptions' showFirstLastButtons></mat-paginator>\r\n\r\n      </div>\r\n\r\n    </mdb-card-body>\r\n\r\n  </mdb-card>\r\n\r\n  <!-- Floating Action Button -->\r\n  <a *ngIf=\"!isAdmin\" routerLink=\"create\" type=\"button\" mat-fab class=\"pink mat-elevation-z8\">\r\n    <i class=\"material-icons\">add</i>\r\n  </a>\r\n\r\n</div>\r\n<!-- < Workspace Provider /> -->\r\n\r\n<ng-template #progress>\r\n  <app-circle-progress [state]=\"state\"></app-circle-progress>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/default/default.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/default/default.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade w-100 h-100\">\r\n  <div class=\"loader\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/intial/intial.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/intial/intial.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>intial works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Forgot Password Notification Email -->\r\n<div mdbModal #frameForgotPassword=\"mdbModal\" class=\"modal fade top \"\r\n    id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    [config]=\"{backdrop: true, ignoreBackdropClick: false}\" aria-hidden=\"true\">\r\n\r\n  <div class=\"modal-dialog modal-xs modal-notify modal-info\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <h3 class=\"heading\">Forgot Password</h3>\r\n\r\n        <button type=\"button\" [disabled]=\"sending\" class=\"close\" data-dismiss=\"modal\"\r\n            aria-label=\"Close\" (click)=\"hideModalForgotPassword()\">\r\n\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"resetPasswordForm\">\r\n          <p>Please enter your email address to request a password reset.</p>\r\n          <!-- Email -->\r\n          <div class=\"md-form form-sm mt-5 mb-5\">\r\n            <mdb-icon fas icon=\"envelope\" class=\"text-primary prefix\"></mdb-icon>\r\n            <input mdbInput type=\"email\" class=\"form-control\"\r\n              id=\"formResetEmail\" data-error=\"invalid email\"\r\n              data-success=\"valid email\" formControlName=\"resetEmail\">\r\n\r\n            <label for=\"formResetEmail\">Email</label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button mdbBtn [disabled]=\"sending\" class=\"btn-round-lg bg-success text-white\" outline=\"true\" mdbWavesEffect\r\n            (click)=\"forgotPassword()\">\r\n\r\n          <i class=\"fas fa-sync-alt left\" aria-hidden=\"true\"></i>Send Email\r\n          <i *ngIf=\"sending\" class=\"fas fa-spinner fa-pulse fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n<!-- Activation Account  Notification Email -->\r\n<div mdbModal #frameActivationAccount=\"mdbModal\" class=\"modal fade top \"\r\n    id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    [config]=\"{backdrop: true, ignoreBackdropClick: true}\" aria-hidden=\"true\">\r\n\r\n  <div class=\"modal-dialog modal-xs modal-notify modal-info\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <h3 class=\"heading\">Activation Account</h3>\r\n\r\n        <button type=\"button\" [disabled]=\"sending\" class=\"close\" data-dismiss=\"modal\"\r\n            aria-label=\"Close\" (click)=\"hideModalActivationAccount()\">\r\n\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n          <p>\r\n            You are viewing this message because you have not activated your account.\r\n            We send you an account activation email, if you still do not keep it in your inbox,\r\n            you can send it again by pressing <strong>RESEND EMAIL VERIFICATION</strong> button below.\r\n          </p>\r\n\r\n          <p>Please check your email and click on the link to verify your email address.</p>\r\n          <p><strong>Thanks.</strong></p>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button mdbBtn [disabled]=\"sending\" class=\"bg-success text-white\" mdbWavesEffect\r\n            (click)=\"sendVerificationMail()\">\r\n          <i class=\"fas fa-sync-alt left\" aria-hidden=\"true\"></i>Resend email verification\r\n          <i *ngIf=\"sending\" class=\"fas fa-spinner fa-pulse fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n        </button>\r\n\r\n        <button mdbBtn [disabled]=\"sending\" class=\"bg-primary text-white\" mdbWavesEffect\r\n            (click)=\"hideModalActivationAccount()\">\r\n\r\n          <i class=\"fas fa-ban left\" aria-hidden=\"true\"></i>Close\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Component -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n      <!-- Material form login -->\r\n      <mdb-card class=\"w-responsive mt-4\">\r\n        <!--Card Header-->\r\n        <mdb-card-header class=\"primary-color white-text text-center py-4\">\r\n          <h5 i18n><strong>Sign in</strong></h5>\r\n        </mdb-card-header>\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5\">\r\n          <form [formGroup]=\"loginForm\">\r\n            <!-- Email -->\r\n            <div class=\"md-form form-sm mt-3\">\r\n              <mdb-icon fas icon=\"user\" class=\"prefix\"></mdb-icon>\r\n              <input mdbInputDirective type=\"email\" class=\"form-control\"\r\n                  id=\"formEmail\" formControlName=\"email\"\r\n                  [validateSuccess]=\"false\"\r\n                  [errorMessage]=\"emailError\">\r\n\r\n              <label for=\"formEmail\">Email</label>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form form-sm\">\r\n              <mdb-icon fas icon=\"lock\" class=\"prefix\"></mdb-icon>\r\n              <input mdbInputDirective type=\"password\" class=\"form-control\"\r\n                  id=\"formPassword\" formControlName=\"password\"\r\n                  data-error=\"password must be at least 6 character\"\r\n                  [validateSuccess]=\"false\" minlength=\"6\" >\r\n\r\n              <label for=\"formPassword\">Password</label>\r\n            </div>\r\n\r\n            <div class=\"d-flex justify-content-around font-small\">\r\n              <div>\r\n                <!-- Forgot password -->\r\n                <a (click)=\"showModalForgotPassword()\" routerLinkActive=\"active\" class=\"text-primary\">\r\n                  Forgot password?\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Sign in button -->\r\n            <button [disabled]=\"clicked\" class=\"btn btn-primary btn-block my-3 waves-light btn-round-xs\"\r\n                type=\"submit\" (click)=\"login()\" mdbWavesEffect>\r\n\r\n              <a class=\"text-center\">Sign in</a>\r\n              <i *ngIf=\"!loading\" class=\"fas fa-sign-in-alt ml-2\" aria-hidden=\"true\"></i>\r\n              <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n            </button>\r\n\r\n            <div class=\"text-center font-small mt-0 mb-0\">\r\n\r\n              <hr class=\"mb-1 hr-text text-success\" data-content=\"SIGN IN WITH\">\r\n\r\n              <!-- Google +-->\r\n              <button mdbBtn [disabled]=\"clicked\"\r\n                  class=\"btn-round-xs btn-block bg-google-plus text-white\"\r\n                  outline=\"true\" type=\"button\" mdbWavesEffect\r\n                  (click)=\"loginWithGoogle()\">\r\n\r\n                <a class=\"text-center\">Google</a>\r\n                <i *ngIf=\"!googleLoading\" class=\"fab fa-google ml-2\" aria-hidden=\"true\"></i>\r\n                <i *ngIf=\"googleLoading\" class=\"fas fa-spinner fa-pulse fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n              </button>\r\n\r\n              <!-- Register -->\r\n              <p class=\"mt-3\">Not registered?\r\n                 <a routerLink=\"/auth/register-user\" routerLinkActive=\"active\">Sign up</a>\r\n              </p>\r\n\r\n            </div>\r\n\r\n          </form>\r\n\r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"error-container\">\r\n  <div class=\"row center-block absolute-center responsive\">\r\n    <div class=\"col-md-8\">\r\n      <img src=\"../../../assets/img/404.png\" alt=\"Error 404\" class=\"img-fluid\">\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n     <h3 class=\"h3-responsive mt-3 mb-2\">Page not found.</h3>\r\n     <h6>The requested URL was not found on this server.</h6>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Send Notification Email -->\r\n<div mdbModal #frame=\"mdbModal\" class=\"modal fade top \"\r\n    id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    [config]=\"{backdrop: true, ignoreBackdropClick: true}\" aria-hidden=\"true\">\r\n\r\n  <div class=\"modal-dialog modal-xs modal-notify modal-info\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <h3 class=\"heading\">Thank You for Registering</h3>\r\n\r\n        <button type=\"button\" [disabled]=\"sending\" class=\"close\" data-dismiss=\"modal\"\r\n            aria-label=\"Close\" (click)=\"hideModal()\">\r\n\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <p>We have sent a confirmation email to <strong>{{ email }}</strong>.</p>\r\n        <p>Please check your email and click on the link to verify your email address.</p>\r\n        <p><strong>Thanks.</strong></p>\r\n      </div>\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button mdbBtn class=\"bg-success text-white\" mdbWavesEffect\r\n            (click)=\"sendVerificationMail()\">\r\n          <i class=\"fas fa-sync-alt left\" aria-hidden=\"true\"></i>Resend email verification\r\n        </button>\r\n\r\n        <button mdbBtn class=\"bg-primary text-white\" mdbWavesEffect (click)=\"hideModal()\">\r\n\r\n          <i class=\"fas fa-ban left\" aria-hidden=\"true\"></i>Close\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n<!-- Register component -->\r\n<div class=\"container mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n      <!-- Material form Register -->\r\n      <mdb-card class=\"mt-4\">\r\n\r\n        <!--Card Header-->\r\n        <mdb-card-header class=\"primary-color white-text text-center py-4\">\r\n          <h5><strong>Create Account</strong></h5>\r\n        </mdb-card-header>\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5 mt-0\">\r\n          <form [formGroup]=\"registerForm\">\r\n            <!-- Full Name  -->\r\n            <div class=\"md-form form-sm mt-0\">\r\n              <mdb-icon fas icon=\"user\" class=\"prefix\"></mdb-icon>\r\n\r\n              <input mdbInputDirective type=\"text\" class=\"form-control\"\r\n                id=\"formFullName\" formControlName=\"fullName\"\r\n                [validateSuccess]=\"false\"\r\n                [errorMessage]=\"fullNameError\">\r\n\r\n              <label for=\"formFullName\">Full name</label>\r\n            </div>\r\n\r\n            <!-- Email -->\r\n            <div class=\"md-form form-sm mt-0\">\r\n              <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\r\n\r\n              <input mdbInputDirective type=\"email\" class=\"form-control\"\r\n                id=\"formEmail\" formControlName=\"email\"\r\n                [errorMessage]=\"emailError\"\r\n                [validateSuccess]=\"false\">\r\n\r\n              <label for=\"formEmail\">Email</label>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form form-sm mt-0\">\r\n              <mdb-icon fas icon=\"lock\" class=\"prefix\"></mdb-icon>\r\n\r\n              <input mdbInputDirective type=\"password\" class=\"form-control\"\r\n                id=\"formPassword\" data-error=\"password must be at least 6 character\"\r\n                [validateSuccess]=\"false\" minlength=\"6\" formControlName=\"password\">\r\n\r\n              <label for=\"formPassword\">Password</label>\r\n            </div>\r\n\r\n            <!-- Confirmation Password -->\r\n            <div class=\"md-form form-sm mt-0 mb-0\">\r\n              <mdb-icon fas icon=\"redo-alt\" class=\"prefix\"></mdb-icon>\r\n\r\n              <input mdbInputDirective type=\"password\" class=\"form-control\"\r\n                id=\"formPasswordConfirmation\" data-error=\"Confirmation password is required\"\r\n                [validateSuccess]=\"false\" formControlName=\"passwordConfirmation\">\r\n\r\n              <label for=\"formPasswordConfirmation\">Confirmation password</label>\r\n            </div>\r\n\r\n          </form>\r\n\r\n        </mdb-card-body>\r\n\r\n        <mdb-card-footer class=\"bg-white\">\r\n          <!-- Register -->\r\n          <button mdbBtn [disabled]=\"loading\" class=\"btn-block mt-2 btn-round-xs\"\r\n              type=\"submit\" color=\"primary\" outline=\"true\"\r\n              mdbWavesEffect (click)=\"createAccount()\">\r\n\r\n            <i class=\"fa fa-user-plus fa-sm left mr-2\" aria-hidden=\"true\"></i>register\r\n            <i *ngIf=\"loading\" class=\"fas fa-spinner fa-pulse fa-lg ml-2\" aria-hidden=\"true\"></i>\r\n          </button>\r\n\r\n          <div class= \"text-center font-small mt-2\">\r\n            <!-- Login -->\r\n            <p>Already have an account?\r\n              <a routerLink=\"/auth/sign-in\" routerLinkActive=\"active\">Sign in</a>\r\n            </p>\r\n          </div>\r\n        </mdb-card-footer>\r\n\r\n      </mdb-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/default/default.component */ "./src/app/components/default/default.component.ts");
/* harmony import */ var _components_intial_intial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intial/intial.component */ "./src/app/components/intial/intial.component.ts");
/* harmony import */ var _components_dashboards_provider_home_provider_home_provider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboards/provider/home-provider/home-provider.component */ "./src/app/components/dashboards/provider/home-provider/home-provider.component.ts");
/* harmony import */ var _components_dashboards_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboards/admin/home-admin/home-admin.component */ "./src/app/components/dashboards/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _components_dashboards_cashier_home_cashier_home_cashier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboards/cashier/home-cashier/home-cashier.component */ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.ts");
/* harmony import */ var _components_dashboards_admin_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboards/admin/views */ "./src/app/components/dashboards/admin/views/index.ts");
/* harmony import */ var _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboards/provider/views */ "./src/app/components/dashboards/provider/views/index.ts");
/* harmony import */ var _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboards/shared */ "./src/app/components/dashboards/shared/index.ts");
/* harmony import */ var _components_dashboards_cashier_views__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboards/cashier/views */ "./src/app/components/dashboards/cashier/views/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
















var routes = [
    // Auth routing
    { path: 'auth', children: [
            { path: 'sign-in', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'register-user', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: 'initial', component: _components_intial_intial_component__WEBPACK_IMPORTED_MODULE_7__["IntialComponent"] },
        ]
    },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'redirecting', component: _components_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"] },
    // Admin Dashboard
    {
        path: 'admin-dashboard/workspace',
        component: _components_dashboards_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__["HomeAdminComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]],
        data: { role: 'admin' },
        children: [
            { path: 'home', component: _components_dashboards_admin_views__WEBPACK_IMPORTED_MODULE_11__["HomeAdminWorkspaceComponent"] },
            { path: 'users', component: _components_dashboards_admin_views__WEBPACK_IMPORTED_MODULE_11__["UsersWorkspaceComponent"] },
            { path: 'users/:userId/providers', component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProviderWorkspaceComponent"] },
            {
                path: 'users/:userId/providers/:providerId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProviderDetailsWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/cashiers',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CashierWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/categories',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CategoryWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/categories/:catId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CategoryDetailsWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/categories/:catId/products',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProductWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/categories/:catId/products/:prodId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/orders',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["OrderWorkspaceComponent"]
            },
            {
                path: 'users/:userId/providers/:providerId/orders/:orderId/date/:day/:month/:year/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["OrderDetailsWorkspaceComponent"]
            },
            // redirect to workspace home by default
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    // Provider Dashboard
    {
        path: 'provider-dashboard/workspace',
        component: _components_dashboards_provider_home_provider_home_provider_component__WEBPACK_IMPORTED_MODULE_8__["HomeProviderComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]],
        data: { role: 'provider' },
        children: [
            { path: 'home', component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["HomeWorkspaceComponent"] },
            { path: 'providers', component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProviderWorkspaceComponent"] },
            {
                path: 'providers/create',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditProviderWorkspaceComponent"], data: { mode: 'create' }
            },
            {
                path: 'providers/:providerId/edit',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditProviderWorkspaceComponent"], data: { mode: 'edit' }
            },
            {
                path: 'providers/:providerId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProviderDetailsWorkspaceComponent"]
            },
            { path: 'providers/:providerId/categories', component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CategoryWorkspaceComponent"] },
            {
                path: 'providers/:providerId/categories/create',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditCategoryWorkspaceComponent"], data: { mode: 'create' }
            },
            {
                path: 'providers/:providerId/categories/:catId/edit',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditCategoryWorkspaceComponent"], data: { mode: 'edit' }
            },
            {
                path: 'providers/:providerId/categories/:catId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CategoryDetailsWorkspaceComponent"]
            },
            { path: 'providers/:providerId/cashiers', component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["CashierWorkspaceComponent"] },
            {
                path: 'providers/:providerId/cashiers/create',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditCashierWorkspaceComponent"], data: { mode: 'create' }
            },
            {
                path: 'providers/:providerId/cashiers/:cashierId/edit',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditCashierWorkspaceComponent"], data: { mode: 'edit' }
            },
            {
                path: 'providers/:providerId/categories/:catId/products',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProductWorkspaceComponent"]
            },
            {
                path: 'providers/:providerId/categories/:catId/products/create',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditProductWorkspaceComponent"], data: { mode: 'create' }
            },
            {
                path: 'providers/:providerId/categories/:catId/products/:prodId/edit',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["EditProductWorkspaceComponent"], data: { mode: 'edit' }
            },
            {
                path: 'providers/:providerId/categories/:catId/products/:prodId/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsWorkspaceComponent"]
            },
            {
                path: 'providers/:providerId/orders',
                component: _components_dashboards_provider_views__WEBPACK_IMPORTED_MODULE_12__["OrderWorkspaceComponent"]
            },
            {
                path: 'providers/:providerId/orders/:orderId/date/:day/:month/:year/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["OrderDetailsWorkspaceComponent"]
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    // Cashier Dashboard
    {
        path: 'cashier-dashboard/workspace',
        component: _components_dashboards_cashier_home_cashier_home_cashier_component__WEBPACK_IMPORTED_MODULE_10__["HomeCashierComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards__WEBPACK_IMPORTED_MODULE_15__["AccessGuard"]],
        data: { role: 'cashier' },
        children: [
            { path: 'home', component: _components_dashboards_cashier_views__WEBPACK_IMPORTED_MODULE_14__["HomeCashierWorkspaceComponent"] },
            {
                path: 'cashiers/:cashierId/providers/:providerId/orders/:orderId/date/:day/:month/:year/details',
                component: _components_dashboards_shared__WEBPACK_IMPORTED_MODULE_13__["OrderDetailsWorkspaceComponent"]
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
    //  Default redirect
    { path: '', redirectTo: 'redirecting', pathMatch: 'full' },
    // otherwise NOT FOUND
    { path: '**', redirectTo: 'not-found' }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

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
        this.title = 'providers-client-dev';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_dashboards_admin_home_admin_home_admin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboards/admin/home-admin/home-admin.module */ "./src/app/components/dashboards/admin/home-admin/home-admin.module.ts");
/* harmony import */ var _components_dashboards_provider_home_provider_home_provider_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboards/provider/home-provider/home-provider.module */ "./src/app/components/dashboards/provider/home-provider/home-provider.module.ts");
/* harmony import */ var _components_dashboards_cashier_home_cashier_home_cashier_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboards/cashier/home-cashier/home-cashier.module */ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_default_default_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/default/default.component */ "./src/app/components/default/default.component.ts");
/* harmony import */ var _components_intial_intial_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/intial/intial.component */ "./src/app/components/intial/intial.component.ts");

















// Home Admin Module

// Home Provider Module

// Home Cashier Module






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
                _components_default_default_component__WEBPACK_IMPORTED_MODULE_23__["DefaultComponent"],
                _components_intial_intial_component__WEBPACK_IMPORTED_MODULE_24__["IntialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _components_dashboards_admin_home_admin_home_admin_module__WEBPACK_IMPORTED_MODULE_17__["HomeAdminModule"],
                _components_dashboards_provider_home_provider_home_provider_module__WEBPACK_IMPORTED_MODULE_18__["HomeProviderModule"],
                _components_dashboards_cashier_home_cashier_home_cashier_module__WEBPACK_IMPORTED_MODULE_19__["HomeCashierModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({ maxOpened: 1 }),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD_TkIqjNZTh2o0KmV10tQ7G1tIPCrdEU4',
                    libraries: ['places']
                })
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__["ContentTypeInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/home-admin/home-admin.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/home-admin/home-admin.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  position: fixed;\n  width: 200px;\n  padding-top: 40px;\n}\n\nmain {\n  padding: 10px;\n}\n\na {\n  text-decoration: none;\n  color: white !important;\n}\n\na:hover, a:active {\n  color: #ffbb33 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vaG9tZS1hZG1pbi9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXGFkbWluXFxob21lLWFkbWluXFxob21lLWFkbWluLmNvbXBvbmVudC5zY3NzIiwiZGFzaGJvYXJkcy9hZG1pbi9ob21lLWFkbWluL2hvbWUtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvYWRtaW4vaG9tZS1hZG1pbi9ob21lLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICBjb2xvcjojZmZiYjMzICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogI2ZmYmIzMyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/home-admin/home-admin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/home-admin/home-admin.component.ts ***!
  \********************************************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent(breakPointObserver) {
        this.breakPointObserver = breakPointObserver;
        this.isHandSet$ = this.breakPointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset);
    }
    HomeAdminComponent.prototype.ngOnInit = function () {
    };
    HomeAdminComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    HomeAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! raw-loader!./home-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/home-admin/home-admin.component.html"),
            styles: [__webpack_require__(/*! ./home-admin.component.scss */ "./src/app/components/dashboards/admin/home-admin/home-admin.component.scss")]
        })
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/home-admin/home-admin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/home-admin/home-admin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminModule", function() { return HomeAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var _admin_views_views_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/views/views.module */ "./src/app/components/dashboards/admin/views/views.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main-layout/navigation/navigation.module */ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.module.ts");
/* harmony import */ var _home_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-admin.component */ "./src/app/components/dashboards/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _main_layout_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../main-layout/admin-header/admin-header.component */ "./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.ts");













var HomeAdminModule = /** @class */ (function () {
    function HomeAdminModule() {
    }
    HomeAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__["NavigationModule"],
                _admin_views_views_module__WEBPACK_IMPORTED_MODULE_8__["ViewsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _home_admin_component__WEBPACK_IMPORTED_MODULE_11__["HomeAdminComponent"],
                _main_layout_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_12__["AdminHeaderComponent"]
            ],
            exports: [
                _home_admin_component__WEBPACK_IMPORTED_MODULE_11__["HomeAdminComponent"],
                _main_layout_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_12__["AdminHeaderComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], HomeAdminModule);
    return HomeAdminModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  position: absolute !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vbWFpbi1sYXlvdXQvYWRtaW4taGVhZGVyL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcYWRtaW5cXG1haW4tbGF5b3V0XFxhZG1pbi1oZWFkZXJcXGFkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvYWRtaW4vbWFpbi1sYXlvdXQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9hZG1pbi9tYWluLWxheW91dC9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");




var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(router, ngZone, authService, notification) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.notification = notification;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onToggleSideNav = function () {
            _this.sidenavToggle.emit();
        };
        this.currentUser = this.authService.currentUserValue;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent.prototype.SignOut = function () {
        var _this = this;
        this.authService.SignOut().then(function () {
            _this.ngZone.run(function () {
                _this.router.navigate(['auth/sign-in']);
            });
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    AdminHeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], AdminHeaderComponent.prototype, "sidenavToggle", void 0);
    AdminHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-header',
            template: __webpack_require__(/*! raw-loader!./admin-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.html"),
            styles: [__webpack_require__(/*! ./admin-header.component.scss */ "./src/app/components/dashboards/admin/main-layout/admin-header/admin-header.component.scss")]
        })
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 10%;\n}\n\n.sidenav {\n  width: 260px;\n  position: fixed;\n  top: 8% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXGFkbWluXFxtYWluLWxheW91dFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvYWRtaW4vbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvYWRtaW4vbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA4JSAhaW1wb3J0YW50OyAgIC8vIFRPRE86IGltcHJvdmUgY2FsYyAobmF2YmFyIGNvbnRhaW5lciB3aWR0aClcclxufVxyXG5cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, breakpointObserver, authService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }));
        this.clicked = this.clicked === undefined ? false : true;
        this.currentUser = this.authService.currentUserValue;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    NavigationComponent.prototype.SignOut = function () {
        this.authService.SignOut();
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sidenav', { static: true })
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/main-layout/navigation/navigation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.component */ "./src/app/components/dashboards/admin/main-layout/navigation/navigation.component.ts");









var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot()
            ],
            declarations: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            exports: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/views/charts/charts.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/charts/charts.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vdmlld3MvY2hhcnRzL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcYWRtaW5cXHZpZXdzXFxjaGFydHNcXGNoYXJ0cy5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvYWRtaW4vdmlld3MvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxvREFBQTtBQ0NGOztBREdFO0VBQ0ksOEVBQUE7QUNBTiIsImZpbGUiOiJkYXNoYm9hcmRzL2FkbWluL3ZpZXdzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMC45cmVtO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnRhYmxlLXVpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xyXG59XHJcblxyXG4uYmx1ZS1ncmFkaWVudCB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtY2FzY2FkZSB7XHJcbiAgLnZpZXcge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG59XHJcbiIsIi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50YWJsZS11aSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTk7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUgLnZpZXcge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/views/charts/charts.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/charts/charts.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.map = { lat: 51.678418, lng: 7.809007 };
        this.chart1Type = 'bar';
        this.chart2Type = 'pie';
        this.chart3Type = 'line';
        this.chart4Type = 'radar';
        this.chart5Type = 'doughnut';
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
            { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.chartColors = [];
        this.chartOptions = {
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#5b5f62',
                }
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }]
            }
        };
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/components/dashboards/admin/views/charts/charts.component.scss")]
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzL2FkbWluL3ZpZXdzL2hvbWUtYWRtaW4td29ya3NwYWNlL2hvbWUtYWRtaW4td29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HomeAdminWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminWorkspaceComponent", function() { return HomeAdminWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeAdminWorkspaceComponent = /** @class */ (function () {
    function HomeAdminWorkspaceComponent() {
    }
    HomeAdminWorkspaceComponent.prototype.ngOnInit = function () {
    };
    HomeAdminWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-admin-workspace',
            template: __webpack_require__(/*! raw-loader!./home-admin-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.html"),
            styles: [__webpack_require__(/*! ./home-admin-workspace.component.scss */ "./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.scss")]
        })
    ], HomeAdminWorkspaceComponent);
    return HomeAdminWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/views/index.ts":
/*!************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/index.ts ***!
  \************************************************************/
/*! exports provided: HomeAdminWorkspaceComponent, UsersWorkspaceComponent, StatsCard1Component, ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_admin_workspace_home_admin_workspace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-admin-workspace/home-admin-workspace.component */ "./src/app/components/dashboards/admin/views/home-admin-workspace/home-admin-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeAdminWorkspaceComponent", function() { return _home_admin_workspace_home_admin_workspace_component__WEBPACK_IMPORTED_MODULE_0__["HomeAdminWorkspaceComponent"]; });

/* harmony import */ var _users_workspace_users_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-workspace/users-workspace.component */ "./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersWorkspaceComponent", function() { return _users_workspace_users_workspace_component__WEBPACK_IMPORTED_MODULE_1__["UsersWorkspaceComponent"]; });

/* harmony import */ var _stats_card1_stats_card1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats-card1/stats-card1.component */ "./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCard1Component", function() { return _stats_card1_stats_card1_component__WEBPACK_IMPORTED_MODULE_2__["StatsCard1Component"]; });

/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/components/dashboards/admin/views/charts/charts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"]; });







/***/ }),

/***/ "./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vdmlld3Mvc3RhdHMtY2FyZDEvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxhZG1pblxcdmlld3NcXHN0YXRzLWNhcmQxXFxzdGF0cy1jYXJkMS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvYWRtaW4vdmlld3Mvc3RhdHMtY2FyZDEvc3RhdHMtY2FyZDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBRUUsb0RBQUE7QUNDRjs7QURHRTtFQUNJLDhFQUFBO0FDQU4iLCJmaWxlIjoiZGFzaGJvYXJkcy9hZG1pbi92aWV3cy9zdGF0cy1jYXJkMS9zdGF0cy1jYXJkMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4udGFibGUtdWkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTk7XHJcbn1cclxuXHJcbi5ibHVlLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1jYXNjYWRlIHtcclxuICAudmlldyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbn1cclxuIiwiLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IGg0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmEge1xuICBmb250LXNpemU6IDNyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnRhYmxlLXVpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlOTtcbn1cblxuLmJsdWUtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZSAudmlldyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StatsCard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCard1Component", function() { return StatsCard1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsCard1Component = /** @class */ (function () {
    function StatsCard1Component() {
    }
    StatsCard1Component.prototype.ngOnInit = function () {
    };
    StatsCard1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-card1',
            template: __webpack_require__(/*! raw-loader!./stats-card1.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.html"),
            styles: [__webpack_require__(/*! ./stats-card1.component.scss */ "./src/app/components/dashboards/admin/views/stats-card1/stats-card1.component.scss")]
        })
    ], StatsCard1Component);
    return StatsCard1Component;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  cursor: pointer;\n}\n\n.badge {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvYWRtaW4vdmlld3MvdXNlcnMtd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcYWRtaW5cXHZpZXdzXFx1c2Vycy13b3Jrc3BhY2VcXHVzZXJzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvYWRtaW4vdmlld3MvdXNlcnMtd29ya3NwYWNlL3VzZXJzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL2FkbWluL3ZpZXdzL3VzZXJzLXdvcmtzcGFjZS91c2Vycy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsImkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWRnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UsersWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersWorkspaceComponent", function() { return UsersWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers */ "./src/app/helpers/index.ts");







var UsersWorkspaceComponent = /** @class */ (function () {
    function UsersWorkspaceComponent(router, ngZone, userService, notification) {
        this.router = router;
        this.ngZone = ngZone;
        this.userService = userService;
        this.notification = notification;
        this.columnsToDisplay = ['name', 'email', 'publish', 'view'];
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].pageSizeOptions;
        this.state = 'waiting';
        this.visibility = false;
    }
    UsersWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.observer$ = this.userService.getAllUsersByType(_helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider);
        this.observer$.subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    UsersWorkspaceComponent.prototype.redirectToHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    UsersWorkspaceComponent.prototype.redirectToProviderWorkspace = function (userId) {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(["admin-dashboard/workspace/users/" + userId + "/providers"]);
        });
    };
    // apply filter to data table
    UsersWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.paginator.firstPage();
        }
    };
    UsersWorkspaceComponent.prototype.update = function (user) {
        var _this = this;
        var msg = '';
        if (user.publish) {
            msg = user.displayName + " can not publish";
            user.publish = false;
        }
        else {
            msg = user.displayName + " can publish";
            user.publish = true;
        }
        this.userService.update(user).then(function () {
            _this.notification.SuccessMessage(msg, '', 2500);
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    UsersWorkspaceComponent.prototype.setVisibility = function (value) {
        this.visibility = value;
    };
    UsersWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], UsersWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], UsersWorkspaceComponent.prototype, "sort", void 0);
    UsersWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-workspace',
            template: __webpack_require__(/*! raw-loader!./users-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.html"),
            styles: [__webpack_require__(/*! ./users-workspace.component.scss */ "./src/app/components/dashboards/admin/views/users-workspace/users-workspace.component.scss")]
        })
    ], UsersWorkspaceComponent);
    return UsersWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/admin/views/views.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboards/admin/views/views.module.ts ***!
  \*******************************************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./src/app/components/dashboards/admin/views/index.ts");











var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot()
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_10__["HomeAdminWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_10__["StatsCard1Component"],
                _index__WEBPACK_IMPORTED_MODULE_10__["ChartsComponent"],
                _index__WEBPACK_IMPORTED_MODULE_10__["UsersWorkspaceComponent"]
            ],
            exports: [
                _index__WEBPACK_IMPORTED_MODULE_10__["HomeAdminWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_10__["StatsCard1Component"],
                _index__WEBPACK_IMPORTED_MODULE_10__["ChartsComponent"],
                _index__WEBPACK_IMPORTED_MODULE_10__["UsersWorkspaceComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  position: fixed;\n  width: 200px;\n  padding-top: 40px;\n}\n\nmain {\n  padding: 10px;\n}\n\na {\n  text-decoration: none;\n  color: white !important;\n}\n\na:hover, a:active {\n  color: #ffbb33 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvY2FzaGllci9ob21lLWNhc2hpZXIvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxjYXNoaWVyXFxob21lLWNhc2hpZXJcXGhvbWUtY2FzaGllci5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvY2FzaGllci9ob21lLWNhc2hpZXIvaG9tZS1jYXNoaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSiIsImZpbGUiOiJkYXNoYm9hcmRzL2Nhc2hpZXIvaG9tZS1jYXNoaWVyL2hvbWUtY2FzaGllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiNmZmJiMzMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgIiwibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogI2ZmYmIzMyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HomeCashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCashierComponent", function() { return HomeCashierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var HomeCashierComponent = /** @class */ (function () {
    function HomeCashierComponent(breakPointObserver) {
        this.breakPointObserver = breakPointObserver;
        this.isHandSet$ = this.breakPointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset);
    }
    HomeCashierComponent.prototype.ngOnInit = function () {
    };
    HomeCashierComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    HomeCashierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cashier',
            template: __webpack_require__(/*! raw-loader!./home-cashier.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.html"),
            styles: [__webpack_require__(/*! ./home-cashier.component.scss */ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.scss")]
        })
    ], HomeCashierComponent);
    return HomeCashierComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/home-cashier/home-cashier.module.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeCashierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCashierModule", function() { return HomeCashierModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var _cashier_views_views_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cashier/views/views.module */ "./src/app/components/dashboards/cashier/views/views.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main-layout/navigation/navigation.module */ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.module.ts");
/* harmony import */ var _home_cashier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-cashier.component */ "./src/app/components/dashboards/cashier/home-cashier/home-cashier.component.ts");
/* harmony import */ var _main_layout_cashier_header_cashier_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../main-layout/cashier-header/cashier-header.component */ "./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.ts");













var HomeCashierModule = /** @class */ (function () {
    function HomeCashierModule() {
    }
    HomeCashierModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__["NavigationModule"],
                _cashier_views_views_module__WEBPACK_IMPORTED_MODULE_8__["ViewsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _home_cashier_component__WEBPACK_IMPORTED_MODULE_11__["HomeCashierComponent"],
                _main_layout_cashier_header_cashier_header_component__WEBPACK_IMPORTED_MODULE_12__["CashierHeaderComponent"]
            ],
            exports: [
                _home_cashier_component__WEBPACK_IMPORTED_MODULE_11__["HomeCashierComponent"],
                _main_layout_cashier_header_cashier_header_component__WEBPACK_IMPORTED_MODULE_12__["CashierHeaderComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], HomeCashierModule);
    return HomeCashierModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  position: absolute !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvY2FzaGllci9tYWluLWxheW91dC9jYXNoaWVyLWhlYWRlci9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXGNhc2hpZXJcXG1haW4tbGF5b3V0XFxjYXNoaWVyLWhlYWRlclxcY2FzaGllci1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL2Nhc2hpZXIvbWFpbi1sYXlvdXQvY2FzaGllci1oZWFkZXIvY2FzaGllci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6ImRhc2hib2FyZHMvY2FzaGllci9tYWluLWxheW91dC9jYXNoaWVyLWhlYWRlci9jYXNoaWVyLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIH0iLCIuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CashierHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierHeaderComponent", function() { return CashierHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");




var CashierHeaderComponent = /** @class */ (function () {
    function CashierHeaderComponent(router, ngZone, authService, notification) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.notification = notification;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onToggleSideNav = function () {
            _this.sidenavToggle.emit();
        };
        this.currentUser = this.authService.currentUserValue;
    }
    CashierHeaderComponent.prototype.ngOnInit = function () {
    };
    CashierHeaderComponent.prototype.SignOut = function () {
        var _this = this;
        this.authService.SignOut().then(function () {
            _this.ngZone.run(function () {
                _this.router.navigate(['auth/sign-in']);
            });
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    CashierHeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], CashierHeaderComponent.prototype, "sidenavToggle", void 0);
    CashierHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cashier-header',
            template: __webpack_require__(/*! raw-loader!./cashier-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.html"),
            styles: [__webpack_require__(/*! ./cashier-header.component.scss */ "./src/app/components/dashboards/cashier/main-layout/cashier-header/cashier-header.component.scss")]
        })
    ], CashierHeaderComponent);
    return CashierHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 10%;\n}\n\n.sidenav {\n  width: 260px;\n  position: fixed;\n  top: 8% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvY2FzaGllci9tYWluLWxheW91dC9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcY2FzaGllclxcbWFpbi1sYXlvdXRcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL2Nhc2hpZXIvbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6ImRhc2hib2FyZHMvY2FzaGllci9tYWluLWxheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogOCUgIWltcG9ydGFudDsgICAvLyBUT0RPOiBpbXByb3ZlIGNhbGMgKG5hdmJhciBjb250YWluZXIgd2lkdGgpXHJcbn1cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, breakpointObserver, authService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }));
        this.clicked = this.clicked === undefined ? false : true;
        this.currentUser = this.authService.currentUserValue;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    NavigationComponent.prototype.SignOut = function () {
        this.authService.SignOut();
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sidenav', { static: true })
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/main-layout/navigation/navigation.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.component */ "./src/app/components/dashboards/cashier/main-layout/navigation/navigation.component.ts");









var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot()
            ],
            declarations: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            exports: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvY2FzaGllci92aWV3cy9ob21lLWNhc2hpZXItd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcY2FzaGllclxcdmlld3NcXGhvbWUtY2FzaGllci13b3Jrc3BhY2VcXGhvbWUtY2FzaGllci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL2Nhc2hpZXIvdmlld3MvaG9tZS1jYXNoaWVyLXdvcmtzcGFjZS9ob21lLWNhc2hpZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvY2FzaGllci92aWV3cy9ob21lLWNhc2hpZXItd29ya3NwYWNlL2hvbWUtY2FzaGllci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: HomeCashierWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCashierWorkspaceComponent", function() { return HomeCashierWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_order_details_workspace_order_details_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/order-details-workspace/order-details-workspace.component */ "./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../infrastructure */ "./src/app/infrastructure/index.ts");









var HomeCashierWorkspaceComponent = /** @class */ (function () {
    function HomeCashierWorkspaceComponent(router, route, ngZone, orderService, authService, dateService, notification) {
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        this.orderService = orderService;
        this.authService = authService;
        this.dateService = dateService;
        this.notification = notification;
        this.columnsToDisplay = ['Id', 'createdDate', 'pickupTime', 'provider', 'paid', 'status', 'view'];
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].All;
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_8__["Config"].pageSizeOptions;
        this.state = 'waiting';
    }
    HomeCashierWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cashierId = this.authService.currentUserValue.uid;
        this.providerId = this.authService.currentUserValue.parentId;
        this.subscription = this.dateService.currentDateSubject.subscribe(function (date) {
            !date
                ? _this.getAllOrdersByDate(new Date())
                : _this.getAllOrdersByDate(date);
        });
    };
    HomeCashierWorkspaceComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HomeCashierWorkspaceComponent.prototype.onClickAllOrders = function () {
        this.message = null;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].All;
        if (this.orders.length === 0) {
            this.message = 'There are no orders';
        }
        else {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    HomeCashierWorkspaceComponent.prototype.onClickPendingOrders = function () {
        this.message = null;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending;
        if (this.ordersPending.length === 0) {
            this.message = 'There are no pending orders';
        }
        else {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ordersPending);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    HomeCashierWorkspaceComponent.prototype.onClickReadyOrders = function () {
        this.message = null;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Ready;
        if (this.ordersReady.length === 0) {
            this.message = 'There are no ready orders';
        }
        else {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ordersReady);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    HomeCashierWorkspaceComponent.prototype.onClickCompletedOrders = function () {
        this.message = null;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Completed;
        if (this.ordersCompleted.length === 0) {
            this.message = 'There are no completed orders';
        }
        else {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ordersCompleted);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    HomeCashierWorkspaceComponent.prototype.onClickCanceledOrders = function () {
        this.message = null;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Canceled;
        if (this.ordersCanceled.length === 0) {
            this.message = 'There are no canceled orders';
        }
        else {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ordersCanceled);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    };
    HomeCashierWorkspaceComponent.prototype.updateStatus = function (order, status) {
        var _this = this;
        order.status = status;
        this.orderService.update(order, this.currentDate).then(function () {
            _this.notification.SuccessMessage("The status of the order is " + status, '', 2500);
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    HomeCashierWorkspaceComponent.prototype.getAllOrdersByDate = function (date) {
        var _this = this;
        this.currentDate = date;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](date);
        this.observer$ = this.orderService.getAllOrdersByProviderId(this.providerId, this.currentDate);
        this.observer$.subscribe(function (orders) {
            _this.orders = orders;
            _this.state = 'finished';
            // Filter orders by status
            _this.ordersPending = _this.orders.filter(function (order) { return order.status === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending; });
            _this.ordersReady = _this.orders.filter(function (order) { return order.status === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Ready; });
            _this.ordersCompleted = _this.orders.filter(function (order) { return order.status === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Completed; });
            _this.ordersCanceled = _this.orders.filter(function (order) { return order.status === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Canceled; });
            if (_this.orderState === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].All) {
                _this.onClickAllOrders();
            }
            else if (_this.orderState === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending) {
                _this.onClickPendingOrders();
            }
            else if (_this.orderState === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Ready) {
                _this.onClickReadyOrders();
            }
            else if (_this.orderState === _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Completed) {
                _this.onClickCompletedOrders();
            }
            else {
                _this.onClickCanceledOrders();
            }
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    HomeCashierWorkspaceComponent.prototype.ApplyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    HomeCashierWorkspaceComponent.prototype.redirectToOrderDetails = function (orderId) {
        var _this = this;
        this.ngZone.run(function () {
            var url = "cashier-dashboard/workspace/cashiers/" + _this.cashierId + "/providers/" + _this.providerId + "/orders/" + orderId + "/date/" +
                (_this.currentDate.getDate() + "/" + _this.currentDate.getMonth() + "/" + _this.currentDate.getFullYear() + "/details");
            _this.router.navigate([url]);
        });
    };
    HomeCashierWorkspaceComponent.prototype.getStatusColor = function (status) {
        switch (status) {
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending:
                return '#9933CC';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Ready:
                return '#FF8800';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Completed:
                return '#00C851';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Canceled:
                return '#ff4444';
        }
    };
    HomeCashierWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_shared_order_details_workspace_order_details_workspace_component__WEBPACK_IMPORTED_MODULE_1__["OrderDetailsWorkspaceComponent"], { static: true })
    ], HomeCashierWorkspaceComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
    ], HomeCashierWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
    ], HomeCashierWorkspaceComponent.prototype, "sort", void 0);
    HomeCashierWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-home-cashier-workspace',
            template: __webpack_require__(/*! raw-loader!./home-cashier-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.html"),
            styles: [__webpack_require__(/*! ./home-cashier-workspace.component.scss */ "./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.scss")]
        })
    ], HomeCashierWorkspaceComponent);
    return HomeCashierWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/cashier/views/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/views/index.ts ***!
  \**************************************************************/
/*! exports provided: HomeCashierWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cashier_workspace_home_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-cashier-workspace/home-cashier-workspace.component */ "./src/app/components/dashboards/cashier/views/home-cashier-workspace/home-cashier-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeCashierWorkspaceComponent", function() { return _home_cashier_workspace_home_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_0__["HomeCashierWorkspaceComponent"]; });




/***/ }),

/***/ "./src/app/components/dashboards/cashier/views/views.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboards/cashier/views/views.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./src/app/components/dashboards/cashier/views/index.ts");











var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot()
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_10__["HomeCashierWorkspaceComponent"]
            ],
            exports: [
                _index__WEBPACK_IMPORTED_MODULE_10__["HomeCashierWorkspaceComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/home-provider/home-provider.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/home-provider/home-provider.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  position: fixed;\n  width: 200px;\n  padding-top: 40px;\n}\n\nmain {\n  padding: 10px;\n}\n\na {\n  text-decoration: none;\n  color: white !important;\n}\n\na:hover, a:active {\n  color: #ffbb33 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvaG9tZS1wcm92aWRlci9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFxob21lLXByb3ZpZGVyXFxob21lLXByb3ZpZGVyLmNvbXBvbmVudC5zY3NzIiwiZGFzaGJvYXJkcy9wcm92aWRlci9ob21lLXByb3ZpZGVyL2hvbWUtcHJvdmlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvcHJvdmlkZXIvaG9tZS1wcm92aWRlci9ob21lLXByb3ZpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICBjb2xvcjojZmZiYjMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmJiMzMgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/home-provider/home-provider.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/home-provider/home-provider.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: HomeProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProviderComponent", function() { return HomeProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeProviderComponent = /** @class */ (function () {
    function HomeProviderComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandSet$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset);
    }
    HomeProviderComponent.prototype.ngOnInit = function () {
    };
    HomeProviderComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }
    ]; };
    HomeProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-provider',
            template: __webpack_require__(/*! raw-loader!./home-provider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/home-provider/home-provider.component.html"),
            styles: [__webpack_require__(/*! ./home-provider.component.scss */ "./src/app/components/dashboards/provider/home-provider/home-provider.component.scss")]
        })
    ], HomeProviderComponent);
    return HomeProviderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/home-provider/home-provider.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/home-provider/home-provider.module.ts ***!
  \**************************************************************************************/
/*! exports provided: HomeProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProviderModule", function() { return HomeProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../views/views.module */ "./src/app/components/dashboards/provider/views/views.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../main-layout/navigation/navigation.module */ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.module.ts");
/* harmony import */ var _home_provider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-provider.component */ "./src/app/components/dashboards/provider/home-provider/home-provider.component.ts");
/* harmony import */ var _main_layout_provider_header_provider_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../main-layout/provider-header/provider-header.component */ "./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.ts");













var HomeProviderModule = /** @class */ (function () {
    function HomeProviderModule() {
    }
    HomeProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_10__["NavigationModule"],
                _views_views_module__WEBPACK_IMPORTED_MODULE_8__["ViewsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _home_provider_component__WEBPACK_IMPORTED_MODULE_11__["HomeProviderComponent"],
                _main_layout_provider_header_provider_header_component__WEBPACK_IMPORTED_MODULE_12__["ProviderHeaderComponent"]
            ],
            exports: [
                _home_provider_component__WEBPACK_IMPORTED_MODULE_11__["HomeProviderComponent"],
                _main_layout_provider_header_provider_header_component__WEBPACK_IMPORTED_MODULE_12__["ProviderHeaderComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], HomeProviderModule);
    return HomeProviderModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 10%;\n}\n\n.sidenav {\n  width: 260px;\n  position: fixed;\n  top: 6% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFxtYWluLWxheW91dFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvcHJvdmlkZXIvbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2JSAhaW1wb3J0YW50OyAgIC8vIFRPRE86IGltcHJvdmUgY2FsYyAobmF2YmFyIGNvbnRhaW5lciB3aWR0aClcclxufVxyXG5cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNiUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services */ "./src/app/services/index.ts");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, breakpointObserver, authService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.clicked = this.clicked === undefined ? false : true;
        this.currentUser = this.authService.currentUserValue;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    NavigationComponent.prototype.SignOut = function () {
        this.authService.SignOut();
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true })
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/main-layout/navigation/navigation.module.ts ***!
  \********************************************************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.component */ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.component.ts");









var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot()
            ],
            declarations: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            exports: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL21haW4tbGF5b3V0L3Byb3ZpZGVyLWhlYWRlci9wcm92aWRlci1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProviderHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderHeaderComponent", function() { return ProviderHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");




var ProviderHeaderComponent = /** @class */ (function () {
    function ProviderHeaderComponent(router, ngZone, authService, notification) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.notification = notification;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onToggleSideNav = function () {
            _this.sidenavToggle.emit();
        };
        this.currentUser = this.authService.currentUserValue;
    }
    ProviderHeaderComponent.prototype.ngOnInit = function () {
    };
    ProviderHeaderComponent.prototype.SignOut = function () {
        var _this = this;
        this.authService.SignOut().then(function () {
            _this.ngZone.run(function () {
                _this.router.navigate(['auth/sign-in']);
            });
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    ProviderHeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ProviderHeaderComponent.prototype, "sidenavToggle", void 0);
    ProviderHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-provider-header',
            template: __webpack_require__(/*! raw-loader!./provider-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.html"),
            styles: [__webpack_require__(/*! ./provider-header.component.scss */ "./src/app/components/dashboards/provider/main-layout/provider-header/provider-header.component.scss")]
        })
    ], ProviderHeaderComponent);
    return ProviderHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/charts/charts.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/charts/charts.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fa {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvY2hhcnRzL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xccHJvdmlkZXJcXHZpZXdzXFxjaGFydHNcXGNoYXJ0cy5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxvREFBQTtBQ0NGOztBREdFO0VBQ0ksOEVBQUE7QUNBTiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMC45cmVtO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnRhYmxlLXVpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xyXG59XHJcblxyXG4uYmx1ZS1ncmFkaWVudCB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtY2FzY2FkZSB7XHJcbiAgLnZpZXcge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG59XHJcbiIsIi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi50YWJsZS11aSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTk7XG59XG5cbi5ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICM0Mjg1ZjQpO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUgLnZpZXcge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/charts/charts.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/charts/charts.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.map = { lat: 51.678418, lng: 7.809007 };
        this.chart1Type = 'bar';
        this.chart2Type = 'pie';
        this.chart3Type = 'line';
        this.chart4Type = 'radar';
        this.chart5Type = 'doughnut';
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [50, 40, 60, 51, 56, 55, 40], label: '#1' },
            { data: [28, 80, 40, 69, 36, 37, 110], label: '#2' },
            { data: [38, 58, 30, 90, 45, 65, 30], label: '#3' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.chartColors = [];
        this.chartOptions = {
            responsive: true,
            legend: {
                labels: {
                    fontColor: '#5b5f62',
                }
            },
            scales: {
                yAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }],
                xAxes: [{
                        ticks: {
                            fontColor: '#5b5f62',
                        }
                    }]
            }
        };
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/components/dashboards/provider/views/charts/charts.component.scss")]
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1jYXNoaWVyLXdvcmtzcGFjZS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFx2aWV3c1xcZWRpdC1jYXNoaWVyLXdvcmtzcGFjZVxcZWRpdC1jYXNoaWVyLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1jYXNoaWVyLXdvcmtzcGFjZS9lZGl0LWNhc2hpZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6ImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1jYXNoaWVyLXdvcmtzcGFjZS9lZGl0LWNhc2hpZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uLWltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBbZGlyPSdydGwnXSAub3B0aW9uLWltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4iLCIuZGlzcGxheS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24taW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbltkaXI9cnRsXSAub3B0aW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EditCashierWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCashierWorkspaceComponent", function() { return EditCashierWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers */ "./src/app/helpers/index.ts");








var EditCashierWorkspaceComponent = /** @class */ (function () {
    function EditCashierWorkspaceComponent(router, route, formBuilder, ngZone, providerService, userService, authService, notification) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.ngZone = ngZone;
        this.providerService = providerService;
        this.userService = userService;
        this.authService = authService;
        this.notification = notification;
        this.regEx = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].regex[0];
        this.state = 'waiting';
        this.waiting = true;
        this.loading = false;
    }
    EditCashierWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regEx)
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])],
            passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
        // Change Form values
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        this.route.data.subscribe(function (data) {
            _this.providerId = _this.route.snapshot.params.providerId;
            _this.mode = data.mode;
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_7__["Roles"].Admin) {
                _this.userId = _this.route.snapshot.params.userId;
            }
            else {
                _this.userId = _this.authService.currentUserValue.uid;
            }
            if (data.mode === 'edit') {
                _this.edit = true;
                _this.title = 'Edit Cashier';
                _this.providerService.getProviderById(_this.providerId).subscribe(function (provider) { return _this.provider = provider; });
                // update form if mode is edit
                var cashierId = _this.route.snapshot.params.cashierId;
                _this.observer$ = _this.userService.getUserById(cashierId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cashier) {
                    _this.cashier = cashier;
                    _this.state = 'finished';
                    _this.editForm.patchValue({
                        name: _this.cashier.displayName,
                        email: _this.cashier.email,
                        password: _this.cashier.password,
                        passwordConfirmation: _this.cashier.password
                    });
                }));
            }
            else {
                // mode create
                _this.edit = false;
                _this.title = 'Create Cashier';
                _this.observer$ = _this.providerService.getProviderById(_this.providerId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (provider) {
                    _this.provider = provider;
                    _this.state = 'finished';
                }));
            }
        });
        // validate name
        this.form.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.name.hasError('required')) {
                error = 'name is required';
            }
            if (_this.form.name.hasError('pattern')) {
                error = 'only letters and numbers are allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.nameError = error; });
        // validate email
        this.form.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.email.hasError('required')) {
                error = 'email is required';
            }
            if (_this.form.email.hasError('email')) {
                error = 'invalid email';
            }
            return error;
        })).subscribe(function (error) { return _this.emailError = error; });
    };
    Object.defineProperty(EditCashierWorkspaceComponent.prototype, "form", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditCashierWorkspaceComponent.prototype.passwordMatchValidator = function (formGroup) {
        return formGroup.controls.password.value === formGroup.controls.passwordConfirmation.value
            ? null : { passwordMismatch: true };
    };
    EditCashierWorkspaceComponent.prototype.redirectToHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    EditCashierWorkspaceComponent.prototype.redirectToCashierWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "/provider-dashboard/workspace/providers/" + _this.providerId + "/cashiers"
            ]);
        });
    };
    EditCashierWorkspaceComponent.prototype.cancel = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "/provider-dashboard/workspace/providers/" + _this.providerId + "/cashiers"
            ]);
        });
    };
    EditCashierWorkspaceComponent.prototype.editCashier = function () {
        var _this = this;
        this.loading = true;
        // Mark the control as dirty
        if (this.editForm.invalid) {
            this.form.name.markAsDirty();
            this.form.email.markAsDirty();
            this.loading = false;
            this.form.password.markAsDirty();
            this.form.passwordConfirmation.markAsDirty();
            if (this.editForm.hasError('passwordMismatch')) {
                this.notification.ErrorMessage('Passwords do not match', '', 2000);
            }
            this.loading = false;
            return;
        }
        if (!this.edit) {
            var cashier = {
                displayName: this.form.name.value,
                email: this.form.email.value,
                phoneNumber: null,
                password: this.form.password.value,
                emailVerified: true,
                publish: false,
                roles: [_helpers__WEBPACK_IMPORTED_MODULE_7__["Roles"].Cashier],
                parentId: this.provider.id,
                providerName: this.provider.name
            };
            // create cashier
            this.authService.SignUp(cashier).then(function () {
                _this.notification.SuccessMessage('New cashier created', '');
                _this.redirectToCashierWorkspace();
            }).catch(function (error) {
                _this.loading = false;
                _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_7__["FirebaseError"].Parse(error.code), '');
            });
        }
        else {
            this.cashier.displayName = this.form.name.value;
            this.cashier.email = this.form.email.value;
            this.cashier.password = this.form.password.value;
            this.userService.update(this.cashier).then(function () {
                _this.notification.SuccessMessage('Cashier edited', '');
                _this.redirectToCashierWorkspace();
            }).catch(function (error) {
                _this.loading = false;
                _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_7__["FirebaseError"].Parse(error.code), '');
            });
        }
    };
    EditCashierWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    EditCashierWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-cashier-workspace',
            template: __webpack_require__(/*! raw-loader!./edit-cashier-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.html"),
            styles: [__webpack_require__(/*! ./edit-cashier-workspace.component.scss */ "./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.scss")]
        })
    ], EditCashierWorkspaceComponent);
    return EditCashierWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1jYXRlZ29yeS13b3Jrc3BhY2UvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxwcm92aWRlclxcdmlld3NcXGVkaXQtY2F0ZWdvcnktd29ya3NwYWNlXFxlZGl0LWNhdGVnb3J5LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1jYXRlZ29yeS13b3Jrc3BhY2UvZWRpdC1jYXRlZ29yeS13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9wcm92aWRlci92aWV3cy9lZGl0LWNhdGVnb3J5LXdvcmtzcGFjZS9lZGl0LWNhdGVnb3J5LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3B0aW9uLWltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuW2Rpcj0ncnRsJ10gLm9wdGlvbi1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmRpc3BsYXktZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5bZGlyPXJ0bF0gLm9wdGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditCategoryWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryWorkspaceComponent", function() { return EditCategoryWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers */ "./src/app/helpers/index.ts");









var EditCategoryWorkspaceComponent = /** @class */ (function () {
    function EditCategoryWorkspaceComponent(router, route, formBuilder, ngZone, notification, categoryService, providerService, authService, fileService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.ngZone = ngZone;
        this.notification = notification;
        this.categoryService = categoryService;
        this.providerService = providerService;
        this.authService = authService;
        this.fileService = fileService;
        this.regEx = _infrastructure__WEBPACK_IMPORTED_MODULE_7__["Config"].regex[0];
        this.regEx1 = _infrastructure__WEBPACK_IMPORTED_MODULE_7__["Config"].regex[1];
        this.localFiles = []; // create mode
        this.loading = false;
        this.state = 'waiting';
    }
    EditCategoryWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create controls
        this.editForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regEx)
                ])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]
        });
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        this.providerId = this.route.snapshot.params['providerId'];
        // Change Form values
        this.route.data.subscribe(function (data) {
            // find provider by url params
            _this.mode = data.mode;
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_8__["Roles"].Admin) {
                _this.userId = _this.route.snapshot.params['userId'];
            }
            else {
                _this.userId = _this.authService.currentUserValue.uid;
            }
            if (data.mode === 'create') {
                _this.edit = false;
                _this.title = 'Create Category';
                // initialize observable with interval
                _this.serverFiles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1);
                _this.observer$ = _this.providerService.getProviderById(_this.providerId);
                _this.observer$.subscribe(function (provider) {
                    _this.provider = provider;
                    _this.state = 'finished';
                }, function (error) {
                    _this.state = 'failed';
                    _this.notification.ErrorMessage(error.message, '', 2500);
                });
            }
            else {
                _this.edit = true;
                _this.title = 'Edit Category';
                _this.providerService.getProviderById(_this.providerId).subscribe(function (provider) { return _this.provider = provider; });
                var catId = _this.route.snapshot.params['catId'];
                // Images value
                _this.serverFiles$ = _this.fileService.getAllFilesInfoByModelId(catId);
                // current category
                _this.observer$ = _this.categoryService.getCategoryData(_this.providerId, catId);
                _this.observer$.subscribe(function (category) {
                    _this.category = category;
                    _this.state = 'finished';
                    _this.editForm.patchValue(category);
                }, function (error) {
                    _this.state = 'failed';
                    _this.notification.ErrorMessage(error.message, '', 2500);
                });
            }
        });
        // validate name
        this.form.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var error = '';
            if (_this.form.name.hasError('required')) {
                error = 'name is required';
            }
            if (_this.form.name.hasError('pattern')) {
                error = 'only letters and numbers are allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.nameError = error; });
    };
    Object.defineProperty(EditCategoryWorkspaceComponent.prototype, "form", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditCategoryWorkspaceComponent.prototype.redirectToHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    EditCategoryWorkspaceComponent.prototype.redirectToCategoryWorkspace = function () {
        var _this = this;
        this.notification.SuccessMessage(this.msg, '', 2500);
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories"
            ]);
        });
    };
    EditCategoryWorkspaceComponent.prototype.cancel = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories"
            ]);
        });
    };
    EditCategoryWorkspaceComponent.prototype.editCategory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, index;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        // Mark the control as dirty
                        if (this.editForm.invalid) {
                            this.form.name.markAsDirty();
                            this.loading = false;
                            return [2 /*return*/];
                        }
                        if (!!this.edit) return [3 /*break*/, 2];
                        this.msg = 'New category created';
                        data = {
                            name: this.form.name.value,
                            description: this.form.description.value,
                            providerName: this.provider.name,
                            providerId: this.provider.id,
                            url: ''
                        };
                        // mark as principal by default
                        if (this.localFiles.length > 0) {
                            index = this.localFiles.findIndex(function (file) { return file.markAsPrincipal === true; });
                            if (index === -1) {
                                this.localFiles[0].markAsPrincipal = true;
                            }
                        }
                        // create category
                        return [4 /*yield*/, this.categoryService.create(data).then(function (category) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.category = category;
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (error) {
                                _this.notification.ErrorMessage(error.message, '', 2500);
                                _this.loading = false;
                                return;
                            })];
                    case 1:
                        // create category
                        _a.sent();
                        this.uploadFiles();
                        return [3 /*break*/, 3];
                    case 2:
                        this.msg = 'Category edited';
                        // updated category attributes
                        this.category.name = this.form.name.value;
                        this.category.description = this.form.description.value;
                        this.categoryService.update(this.category).then(function () {
                            _this.uploadFiles();
                        })
                            .catch(function (error) {
                            _this.notification.ErrorMessage(error.message, '', 2500);
                            _this.loading = false;
                            return;
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditCategoryWorkspaceComponent.prototype.uploadFiles = function () {
        var _this = this;
        // filtering local files
        var filterFiles = this.localFiles.filter(function (file) { return file.file; });
        // redirect to category workspace if not upload images
        if (filterFiles.length === 0) {
            this.redirectToCategoryWorkspace();
        }
        else {
            this.allPercentage = this.fileService.upload(filterFiles, this.category);
            // complete operation
            this.allPercentage.subscribe(function (progress) {
                if (progress === 100) {
                    _this.redirectToCategoryWorkspace();
                }
            });
        }
    };
    // receive files from gallery-component
    EditCategoryWorkspaceComponent.prototype.onSelectedFiles = function (files) {
        this.localFiles = files.map(function (file) {
            file.modelType = 'categories';
            return file;
        });
    };
    EditCategoryWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["FileService"] }
    ]; };
    EditCategoryWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-category-workspace',
            template: __webpack_require__(/*! raw-loader!./edit-category-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.html"),
            styles: [__webpack_require__(/*! ./edit-category-workspace.component.scss */ "./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.scss")]
        })
    ], EditCategoryWorkspaceComponent);
    return EditCategoryWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1wcm9kdWN0LXdvcmtzcGFjZS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFx2aWV3c1xcZWRpdC1wcm9kdWN0LXdvcmtzcGFjZVxcZWRpdC1wcm9kdWN0LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1wcm9kdWN0LXdvcmtzcGFjZS9lZGl0LXByb2R1Y3Qtd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL2VkaXQtcHJvZHVjdC13b3Jrc3BhY2UvZWRpdC1wcm9kdWN0LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3B0aW9uLWltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5kaXNwbGF5LWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbi1pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EditProductWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductWorkspaceComponent", function() { return EditProductWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_file_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/file/file.service */ "./src/app/services/file/file.service.ts");









var EditProductWorkspaceComponent = /** @class */ (function () {
    function EditProductWorkspaceComponent(route, router, formBuilder, ngZone, categoryService, productService, notification, fileService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.ngZone = ngZone;
        this.categoryService = categoryService;
        this.productService = productService;
        this.notification = notification;
        this.fileService = fileService;
        this.regEx = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].regex[0];
        this.regEx1 = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].regex[1];
        this.regEx2 = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].regex[2];
        this.localFiles = []; // create mode
        this.loading = false;
        this.state = 'waiting';
    }
    EditProductWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regEx)
                ])],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regEx2)
                ])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]
        });
        // Change Form values
        this.route.data.subscribe(function (data) {
            _this.providerId = _this.route.snapshot.params['providerId'];
            _this.categoryId = _this.route.snapshot.params['catId'];
            _this.mode = data.mode;
            if (data.mode === 'create') {
                _this.edit = false;
                _this.title = 'Create Product';
                // initialize observable with interval
                _this.serverFiles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1);
                _this.observer$ = _this.categoryService.getCategoryData(_this.providerId, _this.categoryId);
                _this.observer$.subscribe(function (category) {
                    _this.category = category;
                    _this.state = 'finished';
                }, function (error) {
                    _this.state = 'failed';
                    _this.notification.ErrorMessage(error.message, '', 2500);
                });
            }
            else {
                _this.edit = true;
                _this.title = 'Edit Product';
                var productId = _this.route.snapshot.params['prodId'];
                _this.categoryService.getCategoryData(_this.providerId, _this.categoryId).subscribe(function (category) { return _this.category = category; });
                _this.observer$ = _this.productService.getProductData(_this.providerId, _this.categoryId, productId);
                _this.observer$.subscribe(function (product) {
                    _this.product = product;
                    _this.editForm.patchValue(product);
                    _this.state = 'finished';
                }, function (error) {
                    _this.state = 'failed';
                    _this.notification.ErrorMessage(error.message, '', 2500);
                });
                // Images value
                _this.serverFiles$ = _this.fileService.getAllFilesInfoByModelId(productId);
            }
        });
        // validate name
        this.form.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.name.hasError('required')) {
                error = 'name is required';
            }
            if (_this.form.name.hasError('pattern')) {
                error = 'only letters and numbers are allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.nameError = error; });
        // validate price
        this.form.price.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.price.hasError('required')) {
                error = 'price is required';
            }
            if (_this.form.price.hasError('pattern')) {
                error = 'invalid number format';
            }
            return error;
        })).subscribe(function (error) { return _this.priceError = error; });
    };
    Object.defineProperty(EditProductWorkspaceComponent.prototype, "form", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProductWorkspaceComponent.prototype.redirectToHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    EditProductWorkspaceComponent.prototype.redirectToProviderWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(["provider-dashboard/workspace/providers"]);
        });
    };
    EditProductWorkspaceComponent.prototype.redirectToCategoryWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories"
            ]);
        });
    };
    EditProductWorkspaceComponent.prototype.redirectToProductWorkSpace = function () {
        var _this = this;
        this.notification.SuccessMessage(this.msg, '', 2500);
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products")
            ]);
        });
    };
    EditProductWorkspaceComponent.prototype.cancel = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products")
            ]);
        });
    };
    EditProductWorkspaceComponent.prototype.editProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, index;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        // Mark the control as dirty
                        if (this.editForm.invalid) {
                            this.form.name.markAsDirty();
                            this.form.price.markAsDirty();
                            this.loading = false;
                            return [2 /*return*/];
                        }
                        if (!!this.edit) return [3 /*break*/, 2];
                        this.msg = 'New product created';
                        data = {
                            name: this.form.name.value,
                            price: this.form.price.value,
                            description: this.form.description.value,
                            categoryName: this.category.name,
                            providerName: this.category.providerName,
                            categoryId: this.category.id,
                            providerId: this.category.providerId,
                            url: ''
                        };
                        // mark as principal by default
                        if (this.localFiles.length > 0) {
                            index = this.localFiles.findIndex(function (file) { return file.markAsPrincipal === true; });
                            if (index === -1) {
                                this.localFiles[0].markAsPrincipal = true;
                            }
                        }
                        // create product
                        return [4 /*yield*/, this.productService.create(data).then(function (product) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.product = product;
                                    return [2 /*return*/];
                                });
                            }); }).catch(function (error) {
                                _this.notification.ErrorMessage(error.message, '', 2500);
                                _this.loading = false;
                                return;
                            })];
                    case 1:
                        // create product
                        _a.sent();
                        this.uploadFiles();
                        return [3 /*break*/, 3];
                    case 2:
                        this.msg = 'product edited';
                        this.product.name = this.form.name.value;
                        this.product.price = this.form.price.value;
                        this.product.description = this.form.description.value;
                        this.productService.update(this.product).then(function () {
                            _this.uploadFiles();
                        })
                            .catch(function (error) {
                            _this.notification.ErrorMessage(error.message, '', 2500);
                            _this.loading = false;
                            return;
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditProductWorkspaceComponent.prototype.uploadFiles = function () {
        var _this = this;
        // filtering local files
        var filterFiles = this.localFiles.filter(function (file) { return file.file; });
        // redirect to provider workspace if not upload images
        if (filterFiles.length === 0) {
            this.redirectToProductWorkSpace();
        }
        else {
            this.allPercentage = this.fileService.upload(filterFiles, this.product);
            // complete operation
            this.allPercentage.subscribe(function (progress) {
                if (progress === 100) {
                    _this.redirectToProductWorkSpace();
                }
            });
        }
    };
    // receive files from gallery-component
    EditProductWorkspaceComponent.prototype.onSelectedFiles = function (files) {
        this.localFiles = files.map(function (file) {
            file.modelType = 'products';
            return file;
        });
    };
    EditProductWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _services_file_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"] }
    ]; };
    EditProductWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-product-workspace',
            template: __webpack_require__(/*! raw-loader!./edit-product-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.html"),
            styles: [__webpack_require__(/*! ./edit-product-workspace.component.scss */ "./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.scss")]
        })
    ], EditProductWorkspaceComponent);
    return EditProductWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1wcm92aWRlci13b3Jrc3BhY2UvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxwcm92aWRlclxcdmlld3NcXGVkaXQtcHJvdmlkZXItd29ya3NwYWNlXFxlZGl0LXByb3ZpZGVyLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZWRpdC1wcm92aWRlci13b3Jrc3BhY2UvZWRpdC1wcm92aWRlci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9wcm92aWRlci92aWV3cy9lZGl0LXByb3ZpZGVyLXdvcmtzcGFjZS9lZGl0LXByb3ZpZGVyLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAgeyBcclxuICBoZWlnaHQ6IDMwMHB4OyBcclxufVxyXG5cclxuaSB7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjsgXHJcbn1cclxuXHJcbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditProviderWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProviderWorkspaceComponent", function() { return EditProviderWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../helpers */ "./src/app/helpers/index.ts");
/// <reference types="@types/googlemaps" />











var EditProviderWorkspaceComponent = /** @class */ (function () {
    function EditProviderWorkspaceComponent(router, route, ngZone, formBuilder, mapsAPILoader, authService, providerService, fileService, notification, document) {
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.authService = authService;
        this.providerService = providerService;
        this.fileService = fileService;
        this.notification = notification;
        this.document = document;
        this.availableHours = [];
        this.localFiles = []; // create mode
        this.regEx = _infrastructure__WEBPACK_IMPORTED_MODULE_9__["Config"].regex[0];
        this.regEx1 = _infrastructure__WEBPACK_IMPORTED_MODULE_9__["Config"].regex[1];
        this.loading = false;
        this.state = 'waiting';
    }
    EditProviderWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regEx)
                ])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.regEx)
                ])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            mondayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            mondayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            tuesdayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            tuesdayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            wednesdayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            wednesdayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            thursdayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            thursdayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            fridayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            fridayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            saturdayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            saturdayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            sundayOT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            sundayCT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]
        });
        this.route.data.subscribe(function (data) {
            _this.mode = data.mode;
            _this.authService.isAdmin
                ? _this.userId = _this.route.snapshot.params['userId']
                : _this.userId = _this.authService.currentUserValue.uid;
            if (data.mode === 'create') {
                _this.title = 'Create Provider';
                _this.edit = false;
                // initialize observable with interval
                // to hide progress interface
                _this.observer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1);
                _this.serverFiles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1);
                // google maps values
                _this.zoom = 4;
                _this.address = {
                    lat: 39.8282,
                    lng: -98.5795,
                    number: '',
                    formattedAddress: ''
                };
                // set current position
                _this.setCurrentPosition();
            }
            else {
                _this.title = 'Edit Provider';
                _this.edit = true;
                var providerId = _this.route.snapshot.params['providerId'];
                // Images value
                _this.serverFiles$ = _this.fileService.getAllFilesInfoByModelId(providerId);
                _this.observer$ = _this.providerService.getProviderById(providerId);
                _this.observer$.subscribe(function (provider) {
                    _this.provider = provider;
                    _this.state = 'finished';
                    // google maps values
                    _this.address = _this.provider.address;
                    _this.zoom = 12;
                    // updated Form Control values
                    _this.editForm.patchValue({
                        name: _this.provider.name,
                        address: _this.provider.address.formattedAddress,
                        phone: _this.provider.phone,
                        description: _this.provider.description
                    });
                    // time values
                    _this.provider.availableHours.forEach(function (schedule) {
                        switch (schedule.dayOfWeek) {
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Monday:
                                _this.editForm.get('mondayOT').patchValue(schedule.opening);
                                _this.editForm.get('mondayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Tuesday:
                                _this.editForm.get('tuesdayOT').patchValue(schedule.opening);
                                _this.editForm.get('tuesdayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Wednesday:
                                _this.editForm.get('wednesdayOT').patchValue(schedule.opening);
                                _this.editForm.get('wednesdayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Thursday:
                                _this.editForm.get('thursdayOT').patchValue(schedule.opening);
                                _this.editForm.get('thursdayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Friday:
                                _this.editForm.get('fridayOT').patchValue(schedule.opening);
                                _this.editForm.get('fridayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Saturday:
                                _this.editForm.get('saturdayOT').patchValue(schedule.opening);
                                _this.editForm.get('saturdayCT').patchValue(schedule.closing);
                                break;
                            case _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Sunday:
                                _this.editForm.get('sundayOT').patchValue(schedule.opening);
                                _this.editForm.get('sundayCT').patchValue(schedule.closing);
                                break;
                            default:
                                break;
                        }
                    });
                }, function (error) {
                    _this.state = 'failed';
                    _this.notification.ErrorMessage(error.message, '', 2500);
                });
            }
        });
        // validate name
        this.form.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var error = '';
            if (_this.form.name.hasError('required')) {
                error = 'name is required';
            }
            if (_this.form.name.hasError('pattern')) {
                error = 'only letters and numbers are allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.nameError = error; });
        // validate Address
        this.form.address.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var error = '';
            if (_this.form.address.hasError('required')) {
                error = 'address is required';
            }
            if (_this.form.address.hasError('pattern')) {
                error = 'only letters and numbers are allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.addressError = error; });
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.search.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    _this.address.formattedAddress = place.formatted_address;
                    // verify result
                    if (place.geometry === undefined || !place.geometry) {
                        // reset formattedAddress
                        _this.address.formattedAddress = '';
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.address.lat = place.geometry.location.lat();
                    _this.address.lng = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    Object.defineProperty(EditProviderWorkspaceComponent.prototype, "form", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProviderWorkspaceComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.address.lat = position.coords.latitude;
                _this.address.lng = position.coords.longitude;
                _this.zoom = 8;
            });
        }
    };
    EditProviderWorkspaceComponent.prototype.redirectToHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    EditProviderWorkspaceComponent.prototype.redirectToProviderWorkspace = function () {
        var _this = this;
        this.notification.SuccessMessage(this.msg, '', 2500);
        this.ngZone.run(function () {
            _this.router.navigate(['/provider-dashboard/workspace/providers']);
        });
    };
    EditProviderWorkspaceComponent.prototype.cancel = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['/provider-dashboard/workspace/providers']);
        });
    };
    EditProviderWorkspaceComponent.prototype.editProvider = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, index;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        // Mark the control as dirty
                        if (this.editForm.invalid) {
                            this.form.name.markAsDirty();
                            this.form.address.markAsDirty();
                            this.loading = false;
                            // scroll behavior
                            if (this.form.name.errors || this.form.address.errors) {
                                // TODO: implement page scroll
                            }
                            return [2 /*return*/];
                        }
                        // validate address
                        if (this.address.formattedAddress === '' && this.form.address.value !== '') {
                            this.notification.ErrorMessage('select a valid address from the list.', '');
                            this.loading = false;
                            this.goToTop();
                            return [2 /*return*/];
                        }
                        // Validate Schedule
                        this.setAvailableHours();
                        if (this.availableHours.length === 0) {
                            this.notification.ErrorMessage('You must select at least one day of the week', '');
                            this.loading = false;
                            return [2 /*return*/];
                        }
                        if (!!this.edit) return [3 /*break*/, 2];
                        this.msg = 'Provider created';
                        data = {
                            name: this.form.name.value,
                            address: this.address,
                            phone: this.form.phone.value,
                            availableHours: this.availableHours,
                            description: this.form.description.value,
                            userId: this.authService.currentUserValue.uid,
                            url: ''
                        };
                        // mark as principal by default
                        if (this.localFiles.length > 0) {
                            index = this.localFiles.findIndex(function (file) { return file.markAsPrincipal === true; });
                            if (index === -1) {
                                this.localFiles[0].markAsPrincipal = true;
                            }
                        }
                        // create provider
                        return [4 /*yield*/, this.providerService.create(data).then(function (provider) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.provider = provider;
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (error) {
                                _this.notification.ErrorMessage(error.message, '');
                                _this.loading = false;
                                return;
                            })];
                    case 1:
                        // create provider
                        _a.sent();
                        this.uploadFiles();
                        return [3 /*break*/, 3];
                    case 2:
                        this.msg = 'Provider edited';
                        // updated provider attributes
                        this.provider.name = this.form.name.value;
                        this.provider.address = this.address;
                        this.provider.phone = this.form.phone.value;
                        this.provider.availableHours = this.availableHours;
                        this.provider.description = this.form.description.value;
                        this.providerService.update(this.provider).then(function () {
                            _this.uploadFiles();
                        })
                            .catch(function (error) {
                            _this.notification.ErrorMessage(error.message, '');
                            _this.loading = false;
                            return;
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // scroll behavior
    EditProviderWorkspaceComponent.prototype.goToTop = function () {
    };
    EditProviderWorkspaceComponent.prototype.uploadFiles = function () {
        var _this = this;
        // filtering local files
        var filterFiles = this.localFiles.filter(function (file) { return file.file; });
        // redirect to provider workspace if not upload images
        if (filterFiles.length === 0) {
            this.redirectToProviderWorkspace();
        }
        else {
            this.allPercentage = this.fileService.upload(filterFiles, this.provider);
            // complete operation
            this.allPercentage.subscribe(function (progress) {
                if (progress === 100) {
                    _this.redirectToProviderWorkspace();
                }
            });
        }
    };
    // receive files from gallery-component
    EditProviderWorkspaceComponent.prototype.onSelectedFiles = function (files) {
        this.localFiles = files.map(function (file) {
            file.modelType = 'providers';
            return file;
        });
    };
    EditProviderWorkspaceComponent.prototype.setAvailableHours = function () {
        // Monday
        if (this.form.mondayOT.value !== '' && this.form.mondayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Monday,
                opening: this.form.mondayOT.value,
                closing: this.form.mondayCT.value,
            });
        }
        // Tuesday
        if (this.form.tuesdayOT.value !== '' && this.form.tuesdayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Tuesday,
                opening: this.form.tuesdayOT.value,
                closing: this.form.tuesdayCT.value,
            });
        }
        // Wednesday
        if (this.form.wednesdayOT.value !== '' && this.form.wednesdayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Wednesday,
                opening: this.form.wednesdayOT.value,
                closing: this.form.wednesdayCT.value
            });
        }
        // Thursday
        if (this.form.thursdayOT.value !== '' && this.form.thursdayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Thursday,
                opening: this.form.thursdayOT.value,
                closing: this.form.thursdayCT.value
            });
        }
        // Friday
        if (this.form.fridayOT.value !== '' && this.form.fridayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Friday,
                opening: this.form.fridayOT.value,
                closing: this.form.fridayCT.value
            });
        }
        // Saturday
        if (this.form.saturdayOT.value !== '' && this.form.saturdayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Saturday,
                opening: this.form.saturdayOT.value,
                closing: this.form.saturdayCT.value
            });
        }
        // Sunday
        if (this.form.sundayOT.value !== '' && this.form.sundayCT.value !== '') {
            this.availableHours.push({
                dayOfWeek: _helpers__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"].Sunday,
                opening: this.form.sundayOT.value,
                closing: this.form.sundayCT.value
            });
        }
    };
    EditProviderWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["FileService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('search', { static: false })
    ], EditProviderWorkspaceComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('mondayOpeningTime', { static: false })
    ], EditProviderWorkspaceComponent.prototype, "mOT", void 0);
    EditProviderWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-edit-provider-workspace',
            template: __webpack_require__(/*! raw-loader!./edit-provider-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.html"),
            styles: [__webpack_require__(/*! ./edit-provider-workspace.component.scss */ "./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
    ], EditProviderWorkspaceComponent);
    return EditProviderWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/gallery/gallery.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/gallery/gallery.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  cursor: pointer;\n}\n\nfavorite-color {\n  color: #ff4444;\n}\n\n.row {\n  position: relative;\n}\n\n.loading-shade {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZ2FsbGVyeS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFx2aWV3c1xcZ2FsbGVyeVxcZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZmF2b3JpdGUtY29sb3Ige1xyXG4gIGNvbG9yOiAjZmY0NDQ0O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNoYWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iLCJpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mYXZvcml0ZS1jb2xvciB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xufVxuXG4ucm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/gallery/gallery.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/gallery/gallery.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services */ "./src/app/services/index.ts");





var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(route, fileService, notification) {
        this.route = route;
        this.fileService = fileService;
        this.notification = notification;
        this.localFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectedFiles = [];
        this.showError = false;
        this.fileName = '';
        this.errorMsg = '';
        this.extensionError = false;
        this.sizeError = false;
        this.clicked = false;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.providerId = this.route.snapshot.params['providerId'];
        if (this.mode === 'edit') {
            this.serverFiles$.subscribe(function (files) {
                _this.selectedFiles = files;
            });
        }
    };
    // local files
    GalleryComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        var e_1, _a;
        var _loop_1 = function (file) {
            var reader = new FileReader();
            // validate image extension
            if (!this_1.isValidExtension(file.type)) {
                this_1.showError = true;
                this_1.extensionError = true;
                this_1.fileName = file.name;
                return { value: void 0 };
            }
            // // validate image size
            if (!this_1.isValidImageSize(file.size)) {
                this_1.showError = true;
                this_1.sizeError = true;
                this_1.fileName = file.name;
                return { value: void 0 };
            }
            reader.addEventListener('load', function (eventProgress) {
                var index = _this.selectedFiles.findIndex(function (f) { return f.name === file.name; });
                if (index === -1) {
                    var fileInfo = {
                        file: file,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        src: eventProgress.target.result,
                        createdAt: new Date(),
                        markAsPrincipal: false
                    };
                    _this.selectedFiles.push(fileInfo);
                }
                // event send fileInfo data
                _this.localFiles.emit(_this.selectedFiles);
            });
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        try {
            // multiple files
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](event.target.files), _c = _b.next(); !_c.done; _c = _b.next()) {
                var file = _c.value;
                var state_1 = _loop_1(file);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    GalleryComponent.prototype.markAsPrincipal = function (image) {
        var _this = this;
        this.selectedFiles = this.selectedFiles.map(function (file) {
            file.markAsPrincipal = false;
            return file;
        });
        // event send fileInfo data
        if (image.file) {
            // mark as principal new image
            var newIndex = this.selectedFiles.findIndex(function (f) { return f.name === image.name; });
            this.selectedFiles[newIndex].markAsPrincipal = true;
            this.localFiles.emit(this.selectedFiles);
        }
        else {
            this.clicked = true;
            this.fileService.updateFileInfo(image, this.model).then(function () {
                _this.clicked = false;
                _this.localFiles.emit(_this.selectedFiles);
            })
                .catch(function (error) {
                _this.clicked = false;
                _this.notification.ErrorMessage(error.message, '', 2500);
            });
        }
    };
    GalleryComponent.prototype.removeImage = function (image) {
        var _this = this;
        if (image.markAsPrincipal) {
            this.notification.WarningMessage('Can not delete the main image', '', 2500);
            return;
        }
        // event send fileInfo data
        if (image.file) {
            var index = this.selectedFiles.findIndex(function (f) { return f.name === image.name; });
            this.selectedFiles.splice(index, 1);
            this.localFiles.emit(this.selectedFiles);
        }
        else {
            this.clicked = true;
            this.fileService.removeFileInfo(image).then(function () {
                _this.clicked = false;
                _this.localFiles.emit(_this.selectedFiles);
            })
                .catch(function (error) {
                _this.clicked = false;
                _this.notification.ErrorMessage(error.message, '', 2500);
            });
        }
    };
    // valid image extension "jpg", "jpeg", "gif", "png"
    GalleryComponent.prototype.isValidExtension = function (type) {
        return type.split('/')[0] === 'image';
    };
    // file size > 2048 kb
    GalleryComponent.prototype.isValidImageSize = function (size) {
        return (size / 1024) <= 2048;
    };
    GalleryComponent.prototype.closeAlert = function () {
        this.alert.nativeElement.classList.remove('show');
        this.showError = false;
        this.extensionError = false;
        this.sizeError = false;
        this.fileName = '';
    };
    GalleryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], GalleryComponent.prototype, "localFiles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], GalleryComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], GalleryComponent.prototype, "serverFiles$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], GalleryComponent.prototype, "progress$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], GalleryComponent.prototype, "uploading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], GalleryComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('alert', { static: true })
    ], GalleryComponent.prototype, "alert", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/dashboards/provider/views/gallery/gallery.component.scss")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL2hvbWUtd29ya3NwYWNlL2hvbWUtd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: HomeWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWorkspaceComponent", function() { return HomeWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeWorkspaceComponent = /** @class */ (function () {
    function HomeWorkspaceComponent() {
    }
    HomeWorkspaceComponent.prototype.ngOnInit = function () {
    };
    HomeWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-workspace',
            template: __webpack_require__(/*! raw-loader!./home-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.html"),
            styles: [__webpack_require__(/*! ./home-workspace.component.scss */ "./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.scss")]
        })
    ], HomeWorkspaceComponent);
    return HomeWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/index.ts ***!
  \***************************************************************/
/*! exports provided: HomeWorkspaceComponent, EditProviderWorkspaceComponent, EditProductWorkspaceComponent, EditCategoryWorkspaceComponent, EditCashierWorkspaceComponent, OrderWorkspaceComponent, GalleryComponent, ChartsComponent, StatsCardComponent, StatsCard1Component, BasicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_workspace_home_workspace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-workspace/home-workspace.component */ "./src/app/components/dashboards/provider/views/home-workspace/home-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeWorkspaceComponent", function() { return _home_workspace_home_workspace_component__WEBPACK_IMPORTED_MODULE_0__["HomeWorkspaceComponent"]; });

/* harmony import */ var _edit_provider_workspace_edit_provider_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-provider-workspace/edit-provider-workspace.component */ "./src/app/components/dashboards/provider/views/edit-provider-workspace/edit-provider-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditProviderWorkspaceComponent", function() { return _edit_provider_workspace_edit_provider_workspace_component__WEBPACK_IMPORTED_MODULE_1__["EditProviderWorkspaceComponent"]; });

/* harmony import */ var _edit_product_workspace_edit_product_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-product-workspace/edit-product-workspace.component */ "./src/app/components/dashboards/provider/views/edit-product-workspace/edit-product-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditProductWorkspaceComponent", function() { return _edit_product_workspace_edit_product_workspace_component__WEBPACK_IMPORTED_MODULE_2__["EditProductWorkspaceComponent"]; });

/* harmony import */ var _edit_category_workspace_edit_category_workspace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-category-workspace/edit-category-workspace.component */ "./src/app/components/dashboards/provider/views/edit-category-workspace/edit-category-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditCategoryWorkspaceComponent", function() { return _edit_category_workspace_edit_category_workspace_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryWorkspaceComponent"]; });

/* harmony import */ var _edit_cashier_workspace_edit_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-cashier-workspace/edit-cashier-workspace.component */ "./src/app/components/dashboards/provider/views/edit-cashier-workspace/edit-cashier-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditCashierWorkspaceComponent", function() { return _edit_cashier_workspace_edit_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_4__["EditCashierWorkspaceComponent"]; });

/* harmony import */ var _shared_order_workspace_order_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/order-workspace/order-workspace.component */ "./src/app/components/dashboards/shared/order-workspace/order-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderWorkspaceComponent", function() { return _shared_order_workspace_order_workspace_component__WEBPACK_IMPORTED_MODULE_5__["OrderWorkspaceComponent"]; });

/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/components/dashboards/provider/views/gallery/gallery.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]; });

/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/components/dashboards/provider/views/charts/charts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"]; });

/* harmony import */ var _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stats-card/stats-card.component */ "./src/app/components/dashboards/provider/views/stats-card/stats-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_8__["StatsCardComponent"]; });

/* harmony import */ var _stats_card1_stats_card1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stats-card1/stats-card1.component */ "./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCard1Component", function() { return _stats_card1_stats_card1_component__WEBPACK_IMPORTED_MODULE_9__["StatsCard1Component"]; });

/* harmony import */ var _tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables/basic-table/basic-table.component */ "./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function() { return _tables_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_10__["BasicTableComponent"]; });














/***/ }),

/***/ "./src/app/components/dashboards/provider/views/stats-card/stats-card.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/stats-card/stats-card.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cascading-admin-card {\n  margin-top: 20px;\n}\n\n.cascading-admin-card .admin-up {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px;\n}\n\n.cascading-admin-card .admin-up .fas,\n.cascading-admin-card .admin-up .far {\n  padding: 1.7rem;\n  font-size: 2rem;\n  color: #fff;\n  text-align: left;\n  margin-right: 1rem;\n  border-radius: 3px;\n}\n\n.cascading-admin-card .admin-up .data {\n  float: right;\n  margin-top: 2rem;\n  text-align: right;\n}\n\n.cascading-admin-card .admin-up .data p {\n  color: #999999;\n  font-size: 12px;\n}\n\n.classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fas,\n.classic-admin-card .card-body .float-right .far {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.cascading-admin-card .admin-up .fas,\n.cascading-admin-card .admin-up .far {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3Mvc3RhdHMtY2FyZC9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHByb3ZpZGVyXFx2aWV3c1xcc3RhdHMtY2FyZFxcc3RhdHMtY2FyZC5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3Mvc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEQUE7O0VBRUUsZUFBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7O0VBR0UsNEVBQUE7QUNHRiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL3N0YXRzLWNhcmQvc3RhdHMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNjYWRpbmctYWRtaW4tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDsgXHJcbn1cclxuXHJcbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAge1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4OyBcclxufVxyXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5mYXMsXHJcbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhciB7XHJcbiAgcGFkZGluZzogMS43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7IFxyXG59XHJcblxyXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5kYXRhIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5kYXRhIHAge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDAuOXJlbTsgXHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmFzLFxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYXIge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLnByb2dyZXNzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5mYXMsXHJcbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDlweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMTNweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIiwiLmNhc2NhZGluZy1hZG1pbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhc2NhZGluZy1hZG1pbi1jYXJkIC5hZG1pbi11cCB7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhcyxcbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmZhciB7XG4gIHBhZGRpbmc6IDEuN3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jYXNjYWRpbmctYWRtaW4tY2FyZCAuYWRtaW4tdXAgLmRhdGEge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FzY2FkaW5nLWFkbWluLWNhcmQgLmFkbWluLXVwIC5kYXRhIHAge1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYXMsXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgLmZsb2F0LXJpZ2h0IC5mYXIge1xuICBmb250LXNpemU6IDNyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNsYXNzaWMtYWRtaW4tY2FyZCAucHJvZ3Jlc3Mge1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNhc2NhZGluZy1hZG1pbi1jYXJkIC5hZG1pbi11cCAuZmFzLFxuLmNhc2NhZGluZy1hZG1pbi1jYXJkIC5hZG1pbi11cCAuZmFyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/stats-card/stats-card.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/stats-card/stats-card.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StatsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCardComponent", function() { return StatsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsCardComponent = /** @class */ (function () {
    function StatsCardComponent() {
    }
    StatsCardComponent.prototype.ngOnInit = function () {
    };
    StatsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-card',
            template: __webpack_require__(/*! raw-loader!./stats-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/stats-card/stats-card.component.html"),
            styles: [__webpack_require__(/*! ./stats-card.component.scss */ "./src/app/components/dashboards/provider/views/stats-card/stats-card.component.scss")]
        })
    ], StatsCardComponent);
    return StatsCardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classic-admin-card .card-body {\n  color: #fff;\n  margin-bottom: 0;\n  padding: 0.9rem;\n}\n\n.classic-admin-card .card-body p {\n  font-size: 13px;\n  opacity: 0.7;\n  margin-bottom: 0;\n}\n\n.classic-admin-card .card-body h4 {\n  margin-top: 10px;\n}\n\n.classic-admin-card .card-body .float-right .fas,\n.classic-admin-card .card-body .float-right .far {\n  font-size: 3rem;\n  opacity: 0.5;\n}\n\n.classic-admin-card .progress {\n  margin: 0;\n  opacity: 0.7;\n}\n\n.table-ui {\n  border: 1px solid #e0e0e9;\n}\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n\n.card.card-cascade .view {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3Mvc3RhdHMtY2FyZDEvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxwcm92aWRlclxcdmlld3NcXHN0YXRzLWNhcmQxXFxzdGF0cy1jYXJkMS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3Mvc3RhdHMtY2FyZDEvc3RhdHMtY2FyZDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUVFLG9EQUFBO0FDQ0Y7O0FER0U7RUFDSSw4RUFBQTtBQ0FOIiwiZmlsZSI6ImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3Mvc3RhdHMtY2FyZDEvc3RhdHMtY2FyZDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMC45cmVtO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5jYXJkLWJvZHkgaDQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhcyxcclxuLmNsYXNzaWMtYWRtaW4tY2FyZCAuY2FyZC1ib2R5IC5mbG9hdC1yaWdodCAuZmFyIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnRhYmxlLXVpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xyXG59XHJcblxyXG4uYmx1ZS1ncmFkaWVudCB7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsICM0NWNhZmMsICMzMDNmOWYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzQyODVmNCk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtY2FzY2FkZSB7XHJcbiAgLnZpZXcge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG59XHJcbiIsIi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjlyZW07XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhcyxcbi5jbGFzc2ljLWFkbWluLWNhcmQgLmNhcmQtYm9keSAuZmxvYXQtcmlnaHQgLmZhciB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xhc3NpYy1hZG1pbi1jYXJkIC5wcm9ncmVzcyB7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4udGFibGUtdWkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU5O1xufVxuXG4uYmx1ZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn1cblxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3IHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StatsCard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsCard1Component", function() { return StatsCard1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatsCard1Component = /** @class */ (function () {
    function StatsCard1Component() {
    }
    StatsCard1Component.prototype.ngOnInit = function () {
    };
    StatsCard1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats-card1',
            template: __webpack_require__(/*! raw-loader!./stats-card1.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.html"),
            styles: [__webpack_require__(/*! ./stats-card1.component.scss */ "./src/app/components/dashboards/provider/views/stats-card1/stats-card1.component.scss")]
        })
    ], StatsCard1Component);
    return StatsCard1Component;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvdGFibGVzL2Jhc2ljLXRhYmxlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xccHJvdmlkZXJcXHZpZXdzXFx0YWJsZXNcXGJhc2ljLXRhYmxlXFxiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyIsImRhc2hib2FyZHMvcHJvdmlkZXIvdmlld3MvdGFibGVzL2Jhc2ljLXRhYmxlL2Jhc2ljLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsb0RBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3Byb3ZpZGVyL3ZpZXdzL3RhYmxlcy9iYXNpYy10YWJsZS9iYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgIzQ1Y2FmYywgIzMwM2Y5Zik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcclxufVxyXG4iLCIuYmx1ZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjNDI4NWY0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BasicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTableComponent", function() { return BasicTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTableComponent = /** @class */ (function () {
    function BasicTableComponent() {
    }
    BasicTableComponent.prototype.ngOnInit = function () {
    };
    BasicTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-table',
            template: __webpack_require__(/*! raw-loader!./basic-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.html"),
            styles: [__webpack_require__(/*! ./basic-table.component.scss */ "./src/app/components/dashboards/provider/views/tables/basic-table/basic-table.component.scss")]
        })
    ], BasicTableComponent);
    return BasicTableComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/provider/views/views.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboards/provider/views/views.module.ts ***!
  \**********************************************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/dashboards/shared/shared.module.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./src/app/components/dashboards/provider/views/index.ts");













var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_10__["NgxMaterialTimepickerModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD_TkIqjNZTh2o0KmV10tQ7G1tIPCrdEU4'
                })
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_12__["StatsCardComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["StatsCard1Component"],
                _index__WEBPACK_IMPORTED_MODULE_12__["ChartsComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["BasicTableComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["HomeWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["OrderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditProviderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditCategoryWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditProductWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditCashierWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"]
            ],
            exports: [
                _index__WEBPACK_IMPORTED_MODULE_12__["StatsCardComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["StatsCard1Component"],
                _index__WEBPACK_IMPORTED_MODULE_12__["ChartsComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["BasicTableComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["HomeWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["OrderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditProviderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditProductWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["EditCashierWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n\nspan.badge {\n  cursor: pointer;\n}\n\na.href {\n  width: 100%;\n  height: 100%;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2Nhc2hpZXItd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcc2hhcmVkXFxjYXNoaWVyLXdvcmtzcGFjZVxcY2FzaGllci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9jYXNoaWVyLXdvcmtzcGFjZS9jYXNoaWVyLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9zaGFyZWQvY2FzaGllci13b3Jrc3BhY2UvY2FzaGllci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZhYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICByaWdodDogMXJlbTtcclxufVxyXG5cclxuc3Bhbi5iYWRnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hLmhyZWYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG5zcGFuLmJhZGdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hLmhyZWYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CashierWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierWorkspaceComponent", function() { return CashierWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_provider_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/provider/provider.service */ "./src/app/services/provider/provider.service.ts");








var CashierWorkspaceComponent = /** @class */ (function () {
    function CashierWorkspaceComponent(route, router, ngZone, userService, providerService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.userService = userService;
        this.providerService = providerService;
        this.notification = notification;
        this.columnsToDisplay = ['name', 'email', 'provider', 'operation'];
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].pageSizeOptions;
        this.deleting = false;
        this.state = 'waiting';
        this.visibility = false;
        this.isAdmin = false;
    }
    CashierWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Admin role
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_5__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params.userId;
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params.providerId;
        this.providerService.getProviderById(this.providerId).subscribe(function (provider) { return _this.provider = provider; });
        this.observer$ = this.userService.getAllUsersByParentId(this.providerId);
        this.observer$.subscribe(function (cashiers) {
            _this.cashiers = cashiers;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](cashiers);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    CashierWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.paginator.firstPage();
        }
    };
    CashierWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    CashierWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    CashierWorkspaceComponent.prototype.redirectToEditCashier = function (id) {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/cashiers/" + id + "/edit"
            ]);
        });
    };
    CashierWorkspaceComponent.prototype.deleteCashier = function (id) {
        var _this = this;
        this.deleting = true;
        this.userService.delete(id).then(function () {
            _this.notification.SuccessMessage('cashier removed', '', 2500);
            _this.deleting = false;
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
            _this.deleting = false;
        });
    };
    CashierWorkspaceComponent.prototype.setVisibility = function (value) {
        this.visibility = value;
    };
    CashierWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services_provider_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], CashierWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], CashierWorkspaceComponent.prototype, "sort", void 0);
    CashierWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cashier-workspace',
            template: __webpack_require__(/*! raw-loader!./cashier-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.html"),
            styles: [__webpack_require__(/*! ./cashier-workspace.component.scss */ "./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.scss")]
        })
    ], CashierWorkspaceComponent);
    return CashierWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  cursor: pointer;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2NhdGVnb3J5LWRldGFpbHMtd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcc2hhcmVkXFxjYXRlZ29yeS1kZXRhaWxzLXdvcmtzcGFjZVxcY2F0ZWdvcnktZGV0YWlscy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9jYXRlZ29yeS1kZXRhaWxzLXdvcmtzcGFjZS9jYXRlZ29yeS1kZXRhaWxzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvc2hhcmVkL2NhdGVnb3J5LWRldGFpbHMtd29ya3NwYWNlL2NhdGVnb3J5LWRldGFpbHMtd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWZhYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICByaWdodDogMXJlbTtcclxufVxyXG4iLCJpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzcmVtO1xuICByaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CategoryDetailsWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsWorkspaceComponent", function() { return CategoryDetailsWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");





var CategoryDetailsWorkspaceComponent = /** @class */ (function () {
    function CategoryDetailsWorkspaceComponent(route, router, ngZone, categoryService, userService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.categoryService = categoryService;
        this.userService = userService;
        this.notification = notification;
        this.state = 'waiting';
    }
    CategoryDetailsWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Role Admin
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.categoryId = this.route.snapshot.params['catId'];
        this.observer$ = this.categoryService.getCategoryData(this.providerId, this.categoryId);
        this.observer$.subscribe(function (category) {
            _this.category = category;
            _this.state = 'waiting';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    CategoryDetailsWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    CategoryDetailsWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    CategoryDetailsWorkspaceComponent.prototype.redirectToProductWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products");
            }
            // Provider role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products");
            }
            _this.router.navigate([url]);
        });
    };
    CategoryDetailsWorkspaceComponent.prototype.redirectToEditProduct = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories/" + _this.category.id + "/products/create"
            ]);
        });
    };
    CategoryDetailsWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    CategoryDetailsWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-details-workspace',
            template: __webpack_require__(/*! raw-loader!./category-details-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.html"),
            styles: [__webpack_require__(/*! ./category-details-workspace.component.scss */ "./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.scss")]
        })
    ], CategoryDetailsWorkspaceComponent);
    return CategoryDetailsWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/category-workspace/category-workspace.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/category-workspace/category-workspace.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n\nimg {\n  max-width: 80px;\n  max-height: 80px;\n}\n\nspan.badge {\n  cursor: pointer;\n}\n\na.href {\n  width: 100%;\n  height: 100%;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2NhdGVnb3J5LXdvcmtzcGFjZS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxcY2F0ZWdvcnktd29ya3NwYWNlXFxjYXRlZ29yeS13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9jYXRlZ29yeS13b3Jrc3BhY2UvY2F0ZWdvcnktd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvc2hhcmVkL2NhdGVnb3J5LXdvcmtzcGFjZS9jYXRlZ29yeS13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZhYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICByaWdodDogMXJlbTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogODBweDtcclxufVxyXG5cclxuc3Bhbi5iYWRnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hLmhyZWYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG59XG5cbnNwYW4uYmFkZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmEuaHJlZiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/category-workspace/category-workspace.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/category-workspace/category-workspace.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CategoryWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWorkspaceComponent", function() { return CategoryWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers */ "./src/app/helpers/index.ts");







var CategoryWorkspaceComponent = /** @class */ (function () {
    function CategoryWorkspaceComponent(route, router, ngZone, providerService, categoryService, userService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.providerService = providerService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.notification = notification;
        this.columnsToDisplay = ['image', 'name', 'description', 'operation'];
        this.maxChar = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].maxChar;
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].pageSizeOptions;
        this.state = 'waiting';
        this.deleting = false;
        this.visibility = false;
        this.isAdmin = false;
    }
    CategoryWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Role Admin
        if (this.userRole === src_app_helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.providerService.getProviderById(this.providerId).subscribe(function (provider) { return _this.provider = provider; });
        this.observer$ = this.categoryService.getAllCategoriesByProviderId(this.providerId);
        this.observer$.subscribe(function (categories) {
            _this.categories = categories;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.categories);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    CategoryWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.paginator.firstPage();
        }
    };
    CategoryWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    CategoryWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    CategoryWorkspaceComponent.prototype.redirectToEditCategory = function (catId) {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories/" + catId + "/edit"
            ]);
        });
    };
    CategoryWorkspaceComponent.prototype.redirectToCategoryDetails = function (catId) {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === src_app_helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/categories/" + catId + "/details";
            }
            // Provider role
            if (_this.userRole === src_app_helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/categories/" + catId + "/details";
            }
            _this.router.navigate([url]);
        });
    };
    CategoryWorkspaceComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        this.deleting = true;
        this.categoryService.delete(category).then(function () {
            _this.notification.SuccessMessage('removed category', '', 2500);
            _this.deleting = false;
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
            _this.deleting = false;
        });
    };
    CategoryWorkspaceComponent.prototype.setVisibility = function (value) {
        this.visibility = value;
    };
    CategoryWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], CategoryWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], CategoryWorkspaceComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('frame', { static: true })
    ], CategoryWorkspaceComponent.prototype, "frame", void 0);
    CategoryWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-category-workspace',
            template: __webpack_require__(/*! raw-loader!./category-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/category-workspace/category-workspace.component.html"),
            styles: [__webpack_require__(/*! ./category-workspace.component.scss */ "./src/app/components/dashboards/shared/category-workspace/category-workspace.component.scss")]
        })
    ], CategoryWorkspaceComponent);
    return CategoryWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/circle-progress/circle-progress.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/circle-progress/circle-progress.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-container {\n  margin: 0;\n  position: absolute;\n  top: 30%;\n  left: 40%;\n}\n\n.position-center {\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2NpcmNsZS1wcm9ncmVzcy9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxcY2lyY2xlLXByb2dyZXNzXFxjaXJjbGUtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9jaXJjbGUtcHJvZ3Jlc3MvY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9zaGFyZWQvY2lyY2xlLXByb2dyZXNzL2NpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogNDAlO1xyXG59XHJcblxyXG4ucG9zaXRpb24tY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogLTI1JTtcclxufVxyXG4iLCIucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA0MCU7XG59XG5cbi5wb3NpdGlvbi1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogLTI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/circle-progress/circle-progress.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/circle-progress/circle-progress.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CircleProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CircleProgressComponent = /** @class */ (function () {
    // todo: add image to error
    function CircleProgressComponent() {
    }
    CircleProgressComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CircleProgressComponent.prototype, "state", void 0);
    CircleProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circle-progress',
            template: __webpack_require__(/*! raw-loader!./circle-progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/circle-progress/circle-progress.component.html"),
            styles: [__webpack_require__(/*! ./circle-progress.component.scss */ "./src/app/components/dashboards/shared/circle-progress/circle-progress.component.scss")]
        })
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/footer/footer.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/footer/footer.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/footer/footer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/footer/footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/dashboards/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/header/header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/header/header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  position: absolute !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers_firebase_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/firebase-error */ "./src/app/helpers/firebase-error.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, ngZone, authService, notification) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.notification = notification;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onToggleSideNav = function () {
            _this.sidenavToggle.emit();
        };
        this.currentUser = this.authService.currentUserValue;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent.prototype.SignOut = function () {
        var _this = this;
        this.authService.SignOut().then(function () {
            _this.ngZone.run(function () {
                _this.router.navigate(['auth/sign-in']);
            });
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(_helpers_firebase_error__WEBPACK_IMPORTED_MODULE_4__["FirebaseError"].Parse(error.code), '');
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/dashboards/shared/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dashboards/shared/index.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent, LayoutComponent, HeaderComponent, CircleProgressComponent, ProviderWorkspaceComponent, ProviderDetailsWorkspaceComponent, CashierWorkspaceComponent, CategoryWorkspaceComponent, CategoryDetailsWorkspaceComponent, ProductWorkspaceComponent, ProductDetailsWorkspaceComponent, OrderWorkspaceComponent, OrderDetailsWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/dashboards/shared/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/components/dashboards/shared/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/dashboards/shared/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _circle_progress_circle_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-progress/circle-progress.component */ "./src/app/components/dashboards/shared/circle-progress/circle-progress.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return _circle_progress_circle_progress_component__WEBPACK_IMPORTED_MODULE_3__["CircleProgressComponent"]; });

/* harmony import */ var _provider_workspace_provider_workspace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-workspace/provider-workspace.component */ "./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderWorkspaceComponent", function() { return _provider_workspace_provider_workspace_component__WEBPACK_IMPORTED_MODULE_4__["ProviderWorkspaceComponent"]; });

/* harmony import */ var _provider_details_workspace_provider_details_workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider-details-workspace/provider-details-workspace.component */ "./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailsWorkspaceComponent", function() { return _provider_details_workspace_provider_details_workspace_component__WEBPACK_IMPORTED_MODULE_5__["ProviderDetailsWorkspaceComponent"]; });

/* harmony import */ var _cashier_workspace_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashier-workspace/cashier-workspace.component */ "./src/app/components/dashboards/shared/cashier-workspace/cashier-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashierWorkspaceComponent", function() { return _cashier_workspace_cashier_workspace_component__WEBPACK_IMPORTED_MODULE_6__["CashierWorkspaceComponent"]; });

/* harmony import */ var _category_workspace_category_workspace_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-workspace/category-workspace.component */ "./src/app/components/dashboards/shared/category-workspace/category-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryWorkspaceComponent", function() { return _category_workspace_category_workspace_component__WEBPACK_IMPORTED_MODULE_7__["CategoryWorkspaceComponent"]; });

/* harmony import */ var _category_details_workspace_category_details_workspace_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-details-workspace/category-details-workspace.component */ "./src/app/components/dashboards/shared/category-details-workspace/category-details-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsWorkspaceComponent", function() { return _category_details_workspace_category_details_workspace_component__WEBPACK_IMPORTED_MODULE_8__["CategoryDetailsWorkspaceComponent"]; });

/* harmony import */ var _product_workspace_product_workspace_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-workspace/product-workspace.component */ "./src/app/components/dashboards/shared/product-workspace/product-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductWorkspaceComponent", function() { return _product_workspace_product_workspace_component__WEBPACK_IMPORTED_MODULE_9__["ProductWorkspaceComponent"]; });

/* harmony import */ var _product_details_workspace_product_details_workspace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-details-workspace/product-details-workspace.component */ "./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWorkspaceComponent", function() { return _product_details_workspace_product_details_workspace_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsWorkspaceComponent"]; });

/* harmony import */ var _order_workspace_order_workspace_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-workspace/order-workspace.component */ "./src/app/components/dashboards/shared/order-workspace/order-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderWorkspaceComponent", function() { return _order_workspace_order_workspace_component__WEBPACK_IMPORTED_MODULE_11__["OrderWorkspaceComponent"]; });

/* harmony import */ var _order_details_workspace_order_details_workspace_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-details-workspace/order-details-workspace.component */ "./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsWorkspaceComponent", function() { return _order_details_workspace_order_details_workspace_component__WEBPACK_IMPORTED_MODULE_12__["OrderDetailsWorkspaceComponent"]; });
















/***/ }),

/***/ "./src/app/components/dashboards/shared/layout/layout.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/layout/layout.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  overflow: hidden;\n  margin: 0rem !important;\n  padding: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL2xheW91dC9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi5jb250YWluZXItZmx1aWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/layout/layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/layout/layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/dashboards/shared/layout/layout.component.scss")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i, span {\n  cursor: pointer;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n\nimg {\n  max-width: 80px;\n  max-height: 80px;\n}\n\ntr:hover td,\ntr:hover th {\n  background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL29yZGVyLWRldGFpbHMtd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcc2hhcmVkXFxvcmRlci1kZXRhaWxzLXdvcmtzcGFjZVxcb3JkZXItZGV0YWlscy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9vcmRlci1kZXRhaWxzLXdvcmtzcGFjZS9vcmRlci1kZXRhaWxzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsMkJBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3NoYXJlZC9vcmRlci1kZXRhaWxzLXdvcmtzcGFjZS9vcmRlci1kZXRhaWxzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImksIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDNyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHRkLFxyXG50cjpob3ZlciB0aCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImksIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG59XG5cbnRyOmhvdmVyIHRkLFxudHI6aG92ZXIgdGgge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OrderDetailsWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsWorkspaceComponent", function() { return OrderDetailsWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");





var OrderDetailsWorkspaceComponent = /** @class */ (function () {
    function OrderDetailsWorkspaceComponent(route, router, ngZone, orderService, dateService, userService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.orderService = orderService;
        this.dateService = dateService;
        this.userService = userService;
        this.notification = notification;
        this.state = 'waiting';
        this.panelOpenState = false;
        this.isAdmin = false;
        this.isProvider = false;
        this.isCashier = false;
    }
    OrderDetailsWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Role Admin
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        else if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
            this.isProvider = true;
        }
        else {
            this.isCashier = true;
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.orderId = this.route.snapshot.params['orderId'];
        var year = this.route.snapshot.params['year'];
        var month = this.route.snapshot.params['month'];
        var day = this.route.snapshot.params['day'];
        this.date = new Date(year, month, day);
        // send date event
        this.dateService.sendDate(this.date);
        this.observer$ = this.orderService.getOrderData(this.providerId, this.orderId, this.date);
        this.observer$.subscribe(function (order) {
            _this.order = order;
            _this.state = 'finish';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    OrderDetailsWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    OrderDetailsWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    OrderDetailsWorkspaceComponent.prototype.redirectToCashierHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['cashier-dashboard/workspace/home']);
        });
    };
    OrderDetailsWorkspaceComponent.prototype.updateOrderStatus = function (value) {
        var _this = this;
        this.order.status = value;
        this.notification.SuccessMessage("Status changed to " + this.order.status, '', 2500);
        this.orderService.update(this.order, this.date).then(function () { return _this.notification.SuccessMessage("Status changed to " + _this.order.status, '', 2500); }).catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    OrderDetailsWorkspaceComponent.prototype.previousStatus = function (value) {
        var status = '';
        if (value === _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Canceled ||
            value === _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Completed) {
            status = _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Ready;
        }
        else if (value === _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Ready) {
            status = _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Pending;
        }
        // Update Status
        this.updateOrderStatus(status);
    };
    Object.defineProperty(OrderDetailsWorkspaceComponent.prototype, "total", {
        get: function () {
            return this.order.products.map(function (p) { return p.price; }).reduce(function (total, price) { return total + price; });
        },
        enumerable: true,
        configurable: true
    });
    OrderDetailsWorkspaceComponent.prototype.valueToString = function (value) {
        return String(value);
    };
    OrderDetailsWorkspaceComponent.prototype.getStatusColor = function (status) {
        switch (status) {
            case _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Pending:
                return '#9933CC';
            case _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Ready:
                return '#FF8800';
            case _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Completed:
                return '#00C851';
            case _helpers__WEBPACK_IMPORTED_MODULE_4__["OrderState"].Canceled:
                return '#ff4444';
        }
    };
    OrderDetailsWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    OrderDetailsWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details-workspace',
            template: __webpack_require__(/*! raw-loader!./order-details-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.html"),
            styles: [__webpack_require__(/*! ./order-details-workspace.component.scss */ "./src/app/components/dashboards/shared/order-details-workspace/order-details-workspace.component.scss")]
        })
    ], OrderDetailsWorkspaceComponent);
    return OrderDetailsWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/order-workspace/order-workspace.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/order-workspace/order-workspace.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  cursor: pointer;\n}\n\ntable {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-collapse: collapse;\n  color: #212529;\n}\n\ntable.table td, table.table th {\n  padding-top: 1.1rem;\n  padding-bottom: 1rem;\n}\n\n.table td, .table th {\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\ntable td {\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n\n.product-table td {\n  vertical-align: middle;\n}\n\n.my-custom-scrollbar {\n  position: relative;\n  height: 42%;\n  overflow: auto;\n}\n\n.table-wrapper-scroll-y {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL29yZGVyLXdvcmtzcGFjZS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxcb3JkZXItd29ya3NwYWNlXFxvcmRlci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9vcmRlci13b3Jrc3BhY2Uvb3JkZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvc2hhcmVkL29yZGVyLXdvcmtzcGFjZS9vcmRlci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxudGFibGUudGFibGUgdGQsIHRhYmxlLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMS4xcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnByb2R1Y3QtdGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0MiU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHsgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiIsImltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbnRhYmxlLnRhYmxlIHRkLCB0YWJsZS50YWJsZSB0aCB7XG4gIHBhZGRpbmctdG9wOiAxLjFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG50YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucHJvZHVjdC10YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQyJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZS13cmFwcGVyLXNjcm9sbC15IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/order-workspace/order-workspace.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/order-workspace/order-workspace.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrderWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderWorkspaceComponent", function() { return OrderWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");








var OrderWorkspaceComponent = /** @class */ (function () {
    function OrderWorkspaceComponent(route, router, ngZone, orderService, providerService, userService, dateService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.orderService = orderService;
        this.providerService = providerService;
        this.userService = userService;
        this.dateService = dateService;
        this.notification = notification;
        this.columnsToDisplay = ['createdDate', 'pickupTime', 'provider', 'paid', 'status', 'view'];
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_5__["Config"].pageSizeOptions;
        this.orderState = _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending;
        this.state = 'waiting';
        this.isAdmin = false;
    }
    OrderWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        this.providerId = this.route.snapshot.params['providerId'];
        this.observer$ = this.providerService.getProviderById(this.providerId);
        this.observer$.subscribe(function (provider) { return _this.provider = provider; });
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.subscription = this.dateService.currentDateSubject.subscribe(function (date) {
            !date
                ? _this.getAllOrdersByDate(new Date())
                : _this.getAllOrdersByDate(date);
        });
    };
    OrderWorkspaceComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrderWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OrderWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    OrderWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    OrderWorkspaceComponent.prototype.redirectToOrderDetails = function (orderId) {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.isAdmin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/orders/" + orderId + "/date/" +
                    (_this.currentDate.getDate() + "/" + _this.currentDate.getMonth() + "/" + _this.currentDate.getFullYear() + "/details");
            }
            else {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/orders/" + orderId + "/date/" +
                    (_this.currentDate.getDate() + "/" + _this.currentDate.getMonth() + "/" + _this.currentDate.getFullYear() + "/details");
            }
            _this.router.navigate([url]);
        });
    };
    OrderWorkspaceComponent.prototype.getAllOrdersByDate = function (date) {
        var _this = this;
        this.currentDate = date;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](date);
        this.observer$ = this.orderService.getAllOrdersByProviderId(this.providerId, this.currentDate);
        this.observer$.subscribe(function (orders) {
            _this.orders = orders;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.orders);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    OrderWorkspaceComponent.prototype.getStatusColor = function (status) {
        switch (status) {
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Pending:
                return '#9933CC';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Ready:
                return '#FF8800';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Completed:
                return '#00C851';
            case _helpers__WEBPACK_IMPORTED_MODULE_6__["OrderState"].Canceled:
                return '#ff4444';
        }
    };
    OrderWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["OrderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], OrderWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], OrderWorkspaceComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frame', { static: true })
    ], OrderWorkspaceComponent.prototype, "frame", void 0);
    OrderWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-workspace',
            template: __webpack_require__(/*! raw-loader!./order-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/order-workspace/order-workspace.component.html"),
            styles: [__webpack_require__(/*! ./order-workspace.component.scss */ "./src/app/components/dashboards/shared/order-workspace/order-workspace.component.scss")]
        })
    ], OrderWorkspaceComponent);
    return OrderWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  cursor: pointer;\n}\n\ntext-overlap {\n  position: absolute;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL3Byb2R1Y3QtZGV0YWlscy13b3Jrc3BhY2UvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kYXNoYm9hcmRzXFxzaGFyZWRcXHByb2R1Y3QtZGV0YWlscy13b3Jrc3BhY2VcXHByb2R1Y3QtZGV0YWlscy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9wcm9kdWN0LWRldGFpbHMtd29ya3NwYWNlL3Byb2R1Y3QtZGV0YWlscy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkcy9zaGFyZWQvcHJvZHVjdC1kZXRhaWxzLXdvcmtzcGFjZS9wcm9kdWN0LWRldGFpbHMtd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50ZXh0LW92ZXJsYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm1hdC1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDNyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuIiwiaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dC1vdmVybGFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWF0LWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzcmVtO1xuICByaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProductDetailsWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsWorkspaceComponent", function() { return ProductDetailsWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");





var ProductDetailsWorkspaceComponent = /** @class */ (function () {
    function ProductDetailsWorkspaceComponent(route, router, ngZone, productService, userService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.productService = productService;
        this.userService = userService;
        this.notification = notification;
        this.state = 'waiting';
        this.isAdmin = false;
    }
    ProductDetailsWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Admin role
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.categoryId = this.route.snapshot.params['catId'];
        var productId = this.route.snapshot.params['prodId'];
        this.observer$ = this.productService.getProductData(this.providerId, this.categoryId, productId);
        this.observer$.subscribe(function (product) {
            _this.product = product;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    ProductDetailsWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    ProductDetailsWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    ProductDetailsWorkspaceComponent.prototype.redirectToProviderWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers";
            }
            // Provider role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers";
            }
            _this.router.navigate([url]);
        });
    };
    ProductDetailsWorkspaceComponent.prototype.redirectToCategoryWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/categories";
            }
            // Provider role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/categories";
            }
            _this.router.navigate([url]);
        });
    };
    ProductDetailsWorkspaceComponent.prototype.redirectToProductWorkSpace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products");
            }
            // Provider role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products");
            }
            _this.router.navigate([url]);
        });
    };
    ProductDetailsWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    ProductDetailsWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details-workspace',
            template: __webpack_require__(/*! raw-loader!./product-details-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.html"),
            styles: [__webpack_require__(/*! ./product-details-workspace.component.scss */ "./src/app/components/dashboards/shared/product-details-workspace/product-details-workspace.component.scss")]
        })
    ], ProductDetailsWorkspaceComponent);
    return ProductDetailsWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/product-workspace/product-workspace.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/product-workspace/product-workspace.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n\nimg {\n  max-width: 80px;\n  max-height: 80px;\n}\n\nspan.badge {\n  cursor: pointer;\n}\n\na.href {\n  width: 100%;\n  height: 100%;\n}\n\ni {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL3Byb2R1Y3Qtd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcc2hhcmVkXFxwcm9kdWN0LXdvcmtzcGFjZVxccHJvZHVjdC13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9wcm9kdWN0LXdvcmtzcGFjZS9wcm9kdWN0LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3NoYXJlZC9wcm9kdWN0LXdvcmtzcGFjZS9wcm9kdWN0LXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZmFiIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzcmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG5zcGFuLmJhZGdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEuaHJlZiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogM3JlbTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWF4LWhlaWdodDogODBweDtcbn1cblxuc3Bhbi5iYWRnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYS5ocmVmIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/product-workspace/product-workspace.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/product-workspace/product-workspace.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWorkspaceComponent", function() { return ProductWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");







var ProductWorkspaceComponent = /** @class */ (function () {
    function ProductWorkspaceComponent(route, router, ngZone, productService, categoryService, userService, notification) {
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.productService = productService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.notification = notification;
        this.displayedColumns = [
            'image', 'name', 'price', 'description', 'operation'
        ];
        this.products = [];
        this.maxChar = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].maxChar;
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].pageSizeOptions;
        this.deleting = false;
        this.state = 'waiting';
        this.visibility = false;
        this.isAdmin = false;
    }
    ProductWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Role Admin
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.categoryId = this.route.snapshot.params['catId'];
        this.categoryService.getCategoryData(this.providerId, this.categoryId).subscribe(function (category) { return _this.category = category; });
        this.observer$ = this.productService.getAllProductsData(this.providerId, this.categoryId);
        this.observer$.subscribe(function (products) {
            _this.products = products;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.products);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    ProductWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ProductWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    ProductWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    ProductWorkspaceComponent.prototype.redirectToEditProduct = function (productId) {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products/" + productId + "/edit")
            ]);
        });
    };
    ProductWorkspaceComponent.prototype.redirectToProductDetails = function (productId) {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products/" + productId + "/details");
            }
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" +
                    (_this.providerId + "/categories/" + _this.categoryId + "/products/" + productId + "/details");
            }
            _this.router.navigate([url]);
        });
    };
    ProductWorkspaceComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.deleting = true;
        this.productService.delete(product).then(function () {
            _this.notification.SuccessMessage('removed provider', '', 2500);
            _this.deleting = false;
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
            _this.deleting = false;
        });
    };
    ProductWorkspaceComponent.prototype.setVisibility = function (value) {
        this.visibility = value;
    };
    ProductWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], ProductWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], ProductWorkspaceComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frame', { static: true })
    ], ProductWorkspaceComponent.prototype, "frame", void 0);
    ProductWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-workspace',
            template: __webpack_require__(/*! raw-loader!./product-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/product-workspace/product-workspace.component.html"),
            styles: [__webpack_require__(/*! ./product-workspace.component.scss */ "./src/app/components/dashboards/shared/product-workspace/product-workspace.component.scss")]
        })
    ], ProductWorkspaceComponent);
    return ProductWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6 i {\n  cursor: pointer;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL3Byb3ZpZGVyLWRldGFpbHMtd29ya3NwYWNlL0M6XFxVc2Vyc1xcSXJuZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3ZpZGVyLWFkbWluLWNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvZGFzaGJvYXJkc1xcc2hhcmVkXFxwcm92aWRlci1kZXRhaWxzLXdvcmtzcGFjZVxccHJvdmlkZXItZGV0YWlscy13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9wcm92aWRlci1kZXRhaWxzLXdvcmtzcGFjZS9wcm92aWRlci1kZXRhaWxzLXdvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6ImRhc2hib2FyZHMvc2hhcmVkL3Byb3ZpZGVyLWRldGFpbHMtd29ya3NwYWNlL3Byb3ZpZGVyLWRldGFpbHMtd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDYgaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWZhYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICByaWdodDogMXJlbTtcclxufVxyXG4iLCJoNiBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzcmVtO1xuICByaWdodDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ProviderDetailsWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderDetailsWorkspaceComponent", function() { return ProviderDetailsWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");





var ProviderDetailsWorkspaceComponent = /** @class */ (function () {
    function ProviderDetailsWorkspaceComponent(router, route, ngZone, providerService, userService, notification) {
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        this.providerService = providerService;
        this.userService = userService;
        this.notification = notification;
        this.panelOpenState = false;
        this.state = 'waiting';
        this.isAdmin = false;
    }
    ProviderDetailsWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Admin Role
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        this.providerId = this.route.snapshot.params['providerId'];
        this.observer$ = this.providerService.getProviderById(this.providerId);
        this.observer$.subscribe(function (provider) {
            _this.provider = provider;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToCategoryWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/categories";
            }
            // Provider Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/categories";
            }
            _this.router.navigate([url]);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToEditCategory = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/categories/create"
            ]);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToCashierWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/cashiers";
            }
            // Provider Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/cashiers";
            }
            _this.router.navigate([url]);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToEditCashier = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + _this.providerId + "/cashiers/create"
            ]);
        });
    };
    ProviderDetailsWorkspaceComponent.prototype.redirectToOrderWorkspace = function () {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + _this.providerId + "/orders";
            }
            // Provider Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + _this.providerId + "/orders";
            }
            _this.router.navigate([url]);
        });
    };
    ProviderDetailsWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    ProviderDetailsWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider-details-workspace',
            template: __webpack_require__(/*! raw-loader!./provider-details-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.html"),
            styles: [__webpack_require__(/*! ./provider-details-workspace.component.scss */ "./src/app/components/dashboards/shared/provider-details-workspace/provider-details-workspace.component.scss")]
        })
    ], ProviderDetailsWorkspaceComponent);
    return ProviderDetailsWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 1rem;\n  width: 100%;\n}\n\n.mat-fab {\n  position: fixed;\n  bottom: 3rem;\n  right: 1rem;\n}\n\nimg {\n  max-width: 80px;\n  max-height: 80px;\n}\n\nspan.badge {\n  cursor: pointer;\n}\n\na.href {\n  width: 100%;\n  height: 100%;\n}\n\ni {\n  cursor: pointer;\n}\n\nicon-sm {\n  size: 0.75em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZHMvc2hhcmVkL3Byb3ZpZGVyLXdvcmtzcGFjZS9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2Rhc2hib2FyZHNcXHNoYXJlZFxccHJvdmlkZXItd29ya3NwYWNlXFxwcm92aWRlci13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJkYXNoYm9hcmRzL3NoYXJlZC9wcm92aWRlci13b3Jrc3BhY2UvcHJvdmlkZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRiIsImZpbGUiOiJkYXNoYm9hcmRzL3NoYXJlZC9wcm92aWRlci13b3Jrc3BhY2UvcHJvdmlkZXItd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDNyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbnNwYW4uYmFkZ2Uge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYS5ocmVmIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaWNvbi1zbSB7XHJcbiAgc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogM3JlbTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWF4LWhlaWdodDogODBweDtcbn1cblxuc3Bhbi5iYWRnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYS5ocmVmIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWNvbi1zbSB7XG4gIHNpemU6IDAuNzVlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProviderWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderWorkspaceComponent", function() { return ProviderWorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers */ "./src/app/helpers/index.ts");







var ProviderWorkspaceComponent = /** @class */ (function () {
    function ProviderWorkspaceComponent(ngZone, router, route, authService, userService, providerService, notification) {
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.userService = userService;
        this.providerService = providerService;
        this.notification = notification;
        this.columnsToDisplay = ['image', 'name', 'address', 'phone', 'operation'];
        this.maxChar = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].maxChar;
        this.pageSizeOptions = _infrastructure__WEBPACK_IMPORTED_MODULE_4__["Config"].pageSizeOptions;
        this.deleting = false;
        this.state = 'waiting';
        this.visibility = false;
        this.isAdmin = false;
    }
    ProviderWorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) { return _this.userRole = data.role; });
        // Admin role
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
            this.isAdmin = true;
            this.userId = this.route.snapshot.params['userId'];
            this.userService.getUserById(this.userId).subscribe(function (user) { return _this.user = user; });
        }
        // Provider Role
        if (this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider) {
            this.userId = this.authService.currentUserValue.uid;
        }
        this.observer$ = this.providerService.getAllProviderByUserId(this.userId);
        this.observer$.subscribe(function (providers) {
            _this.providers = providers;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](providers);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.state = 'finished';
        }, function (error) {
            _this.state = 'failed';
            _this.notification.ErrorMessage(error.message, '', 2500);
        });
    };
    ProviderWorkspaceComponent.prototype.redirectToAdminHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['admin-dashboard/workspace/home']);
        });
    };
    ProviderWorkspaceComponent.prototype.redirectToProviderHome = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['provider-dashboard/workspace/home']);
        });
    };
    // redirect to edit provider
    ProviderWorkspaceComponent.prototype.redirectToEditProvider = function (id) {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate([
                "provider-dashboard/workspace/providers/" + id + "/edit"
            ]);
        });
    };
    // redirect to provider details
    ProviderWorkspaceComponent.prototype.redirectToProviderDetails = function (providerId) {
        var _this = this;
        this.ngZone.run(function () {
            var url = '';
            // Admin Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
                url = "admin-dashboard/workspace/users/" + _this.userId + "/providers/" + providerId + "/details";
            }
            // Provider Role
            if (_this.userRole === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider) {
                url = "provider-dashboard/workspace/providers/" + providerId + "/details";
            }
            _this.router.navigate([url]);
        });
    };
    // apply filter to data table
    ProviderWorkspaceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.paginator.firstPage();
        }
    };
    ProviderWorkspaceComponent.prototype.deleteProvider = function (provider) {
        var _this = this;
        this.deleting = true;
        this.providerService.delete(provider).then(function () {
            _this.notification.SuccessMessage('removed provider', '', 2500);
            _this.deleting = false;
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
            _this.deleting = false;
        });
    };
    ProviderWorkspaceComponent.prototype.setVisibility = function (value) {
        this.visibility = value;
    };
    ProviderWorkspaceComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], ProviderWorkspaceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
    ], ProviderWorkspaceComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('frame', { static: true })
    ], ProviderWorkspaceComponent.prototype, "frame", void 0);
    ProviderWorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-provider-workspace',
            template: __webpack_require__(/*! raw-loader!./provider-workspace.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.html"),
            styles: [__webpack_require__(/*! ./provider-workspace.component.scss */ "./src/app/components/dashboards/shared/provider-workspace/provider-workspace.component.scss")]
        })
    ], ProviderWorkspaceComponent);
    return ProviderWorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboards/shared/shared.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboards/shared/shared.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/main-layout/navigation/navigation.module */ "./src/app/components/dashboards/provider/main-layout/navigation/navigation.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./src/app/components/dashboards/shared/index.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _provider_main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CircleProgressComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProviderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProviderDetailsWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CashierWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CategoryWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CategoryDetailsWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProductWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsWorkspaceComponent"]
            ],
            exports: [
                _index__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CircleProgressComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProviderWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CashierWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CategoryWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["CategoryDetailsWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProductWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsWorkspaceComponent"],
                _index__WEBPACK_IMPORTED_MODULE_8__["OrderDetailsWorkspaceComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/default/default.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/default/default.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-container {\n  height: 10em;\n  position: relative;\n}\n\n.progress-container {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 45%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.progress-container h5 {\n  margin: 0;\n  position: absolute;\n  top: 80%;\n  left: 45%;\n  margin-right: -55%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQvQzpcXFVzZXJzXFxJcm5lbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvdmlkZXItYWRtaW4tY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9kZWZhdWx0XFxkZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwiZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDSiIsImZpbGUiOiJkZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzLWNvbnRhaW5lciBoNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIG1hcmdpbi1yaWdodDogLTU1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbiAgfVxyXG4gICIsIi5wcm9ncmVzcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNDUlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICBsZWZ0OiA0NSU7XG4gIG1hcmdpbi1yaWdodDogLTU1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/default/default.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/default/default.component.ts ***!
  \*********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers/index.ts");





var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(router, authService, notification) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.notification = notification;
        // redirect to specific dashboard if already logged in
        this.authService.currentUser.subscribe(function (currentUser) {
            if (currentUser) {
                currentUser.roles.forEach(function (rol) {
                    if (rol === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Admin) {
                        // redirect to admin dashboard
                        _this.router.navigate(['/admin-dashboard/workspace/home']);
                    }
                    else if (rol === _helpers__WEBPACK_IMPORTED_MODULE_4__["Roles"].Provider) {
                        _this.router.navigate(['/provider-dashboard/workspace/home']);
                    }
                    else {
                        // redirect to cashier dashboard
                        _this.router.navigate(['/cashier-dashboard/workspace/home']);
                    }
                });
            }
            else {
                _this.router.navigate(['/auth/sign-in']);
            }
        }, function (error) {
            _this.notification.ErrorMessage(error.message, '', 2500);
            _this.router.navigate(['/auth/sign-in']);
        });
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/components/default/default.component.scss")]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/components/intial/intial.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/intial/intial.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRpYWwvaW50aWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/intial/intial.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/intial/intial.component.ts ***!
  \*******************************************************/
/*! exports provided: IntialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntialComponent", function() { return IntialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntialComponent = /** @class */ (function () {
    function IntialComponent() {
    }
    IntialComponent.prototype.ngOnInit = function () {
    };
    IntialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intial',
            template: __webpack_require__(/*! raw-loader!./intial.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/intial/intial.component.html"),
            styles: [__webpack_require__(/*! ./intial.component.scss */ "./src/app/components/intial/intial.component.scss")]
        })
    ], IntialComponent);
    return IntialComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers/index.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, ngZone, render, formBuilder, route, authService, notification) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.render = render;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.notification = notification;
        this.clicked = false;
        this.loading = false;
        this.googleLoading = false;
        this.sending = false;
        // redirect to specific dashboard if already logged in
        this.authService.currentUser.subscribe(function (currentUser) {
            if (currentUser) {
                currentUser.roles.forEach(function (rol) {
                    if (rol === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Admin) {
                        // redirect to admin dashboard
                        _this.router.navigate(['/admin-dashboard/workspace/home']);
                    }
                    else if (rol === _helpers__WEBPACK_IMPORTED_MODULE_6__["Roles"].Provider) {
                        _this.router.navigate(['/provider-dashboard/workspace/home']);
                    }
                    else {
                        // redirect to cashier dashboard
                        _this.router.navigate(['/cashier-dashboard/workspace/home']);
                    }
                });
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
        });
        this.resetPasswordForm = this.formBuilder.group({
            resetEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        // validate email
        this.form.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            var error = '';
            if (_this.form.email.hasError('required')) {
                error = 'email is required';
            }
            if (_this.form.email.hasError('email')) {
                error = 'invalid email';
            }
            return error;
        })).subscribe(function (error) { return _this.emailError = error; });
        // validate email for reset password
        this.formReset.resetEmail.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            var error = '';
            if (_this.formReset.resetEmail.hasError('required')) {
                error = 'email is required';
            }
            if (_this.formReset.resetEmail.hasError('email')) {
                error = 'invalid email';
            }
            return error;
        })).subscribe(function (error) { return _this.resetEmailError = error; });
    };
    Object.defineProperty(LoginComponent.prototype, "form", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "formReset", {
        get: function () { return this.resetPasswordForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        // Mark the control as dirty
        if (this.loginForm.invalid) {
            this.form.email.markAsDirty();
            this.form.password.markAsDirty();
            return;
        }
        this.clicked = true;
        this.loading = true;
        this.authService.SignIn(this.form.email.value, this.form.password.value)
            .then(function (isSigned) {
            console.log(_this.returnUrl);
            _this.loading = false;
            _this.clicked = false;
            // if (!accountVerified) {
            //   this.showModalActivationAccount();
            //   return;
            // }
            _this.ngZone.run(function () {
                _this.router.navigate([_this.returnUrl]);
            });
        })
            .catch(function (error) {
            _this.loading = false;
            _this.clicked = false;
            _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_6__["FirebaseError"].Parse(error.code), '', 2500);
        });
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.clicked = true;
        this.googleLoading = true;
        this.authService.GoogleAuth().then(function () {
            _this.clicked = false;
            _this.googleLoading = false;
            _this.ngZone.run(function () {
                _this.router.navigate([_this.returnUrl]);
            });
        })
            .catch(function (error) {
            _this.loading = false;
            _this.clicked = false;
            _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_6__["FirebaseError"].Parse(error.code), '', 2500);
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        if (this.resetPasswordForm.invalid) {
            this.formReset.resetEmail.markAsDirty();
            return;
        }
        this.sending = true;
        var email = this.formReset.resetEmail.value;
        this.authService.SendPasswordResetEmail(email).then(function () {
            _this.sending = false;
            _this.hideModalForgotPassword();
            _this.notification.SuccessMessage("forgot password sent email to " + email, '', 2500);
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_6__["FirebaseError"].Parse(error.code), '', 2500);
        });
    };
    LoginComponent.prototype.sendVerificationMail = function () {
        var _this = this;
        this.sending = true;
        this.authService.SendVerificationMail().then(function () {
            _this.sending = false;
            _this.hideModalActivationAccount();
            _this.notification.SuccessMessage("Verification email sent to " + _this.form.email.value, '');
        })
            .catch(function (error) {
            _this.notification.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_6__["FirebaseError"].Parse(error.code), '', 2500);
        });
    };
    LoginComponent.prototype.showModalForgotPassword = function () {
        this.formReset.resetEmail.reset('');
        var modal = this.render.selectRootElement(this.frameForgotPassword);
        modal.show();
    };
    LoginComponent.prototype.hideModalForgotPassword = function () {
        var modal = this.render.selectRootElement(this.frameForgotPassword);
        modal.hide();
    };
    LoginComponent.prototype.showModalActivationAccount = function () {
        var modal = this.render.selectRootElement(this.frameActivationAccount);
        modal.show();
    };
    LoginComponent.prototype.hideModalActivationAccount = function () {
        var modal = this.render.selectRootElement(this.frameActivationAccount);
        modal.hide();
    };
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.router.navigate(['register-user']);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('frameForgotPassword', { static: true })
    ], LoginComponent.prototype, "frameForgotPassword", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('frameActivationAccount', { static: true })
    ], LoginComponent.prototype, "frameActivationAccount", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/material/material.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/material/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-container {\n  width: 100%;\n  height: 400px;\n  margin: 20px auto 40px;\n  clear: both;\n}\n\n.center-block {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC9DOlxcVXNlcnNcXElybmVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm92aWRlci1hZG1pbi1jbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL25vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwibm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoibm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuIiwiLmVycm9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byA0MHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNlbnRlci1ibG9jayB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../infrastructure */ "./src/app/infrastructure/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers/index.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, render, formBuilder, authService, notificationService) {
        this.router = router;
        this.render = render;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.notificationService = notificationService;
        this.loading = false;
        this.submitted = false;
        this.existEmail = false;
        this.regExName = _infrastructure__WEBPACK_IMPORTED_MODULE_6__["Config"].regex[0]; // pattern for names
        // redirect to specific dashboard if already logged in
        // this.authService.currentUser.subscribe(
        //   currentUser => {
        //     if (currentUser) {
        //       currentUser.roles.forEach(rol => {
        //         if (rol === Roles.Admin) {
        //           // redirect to admin dashboard
        //           this.router.navigate(['/admin-dashboard/workspace/home']);
        //         } else if (rol === Roles.Provider) {
        //           // redirect to provider dashboard
        //           this.router.navigate(['/provider-dashboard/workspace/home']);
        //         } else {
        //           // redirect to cashier dashboard
        //           this.router.navigate(['/cashier-dashboard/workspace/home']);
        //         }
        //       });
        //     }
        //   }
        // );
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.regExName)
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])],
            passwordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
        // validate Full Name
        this.form.fullName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.fullName.hasError('required')) {
                error = 'full name is required';
            }
            if (_this.form.fullName.hasError('pattern')) {
                error = 'character not allowed';
            }
            return error;
        })).subscribe(function (error) { return _this.fullNameError = error; });
        // validate email
        this.form.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            var error = '';
            if (_this.form.email.hasError('required')) {
                error = 'email is required';
            }
            if (_this.form.email.hasError('email')) {
                error = 'invalid email';
            }
            return error;
        })).subscribe(function (error) { return _this.emailError = error; });
    };
    Object.defineProperty(RegisterComponent.prototype, "form", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.passwordMatchValidator = function (formGroup) {
        return formGroup.controls.password.value === formGroup.controls.passwordConfirmation.value
            ? null : { passwordMismatch: true };
    };
    RegisterComponent.prototype.createAccount = function () {
        var _this = this;
        this.loading = true;
        // Mark the control as dirty
        if (this.registerForm.invalid) {
            this.form.fullName.markAsDirty();
            this.form.email.markAsDirty();
            this.form.password.markAsDirty();
            this.form.passwordConfirmation.markAsDirty();
            if (this.registerForm.hasError('passwordMismatch')) {
                this.notificationService.ErrorMessage('Passwords do not match', '', 2000);
            }
            this.loading = false;
            return;
        }
        var data = {
            displayName: this.form.fullName.value,
            email: this.form.email.value,
            phoneNumber: null,
            password: this.form.password.value,
            publish: false,
            roles: [_helpers__WEBPACK_IMPORTED_MODULE_7__["Roles"].Provider],
            parentId: null
        };
        this.authService.SignUp(data).then(function (user) {
            _this.loading = false;
            _this.email = user.email;
            _this.showModal();
        })
            .catch(function (error) {
            _this.loading = false;
            _this.notificationService.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_7__["FirebaseError"].Parse(error.code), '');
        });
    };
    RegisterComponent.prototype.sendVerificationMail = function () {
        var _this = this;
        this.authService.SendVerificationMail().then(function () {
            _this.hideModal();
            _this.notificationService.SuccessMessage("Verification email sent to " + _this.email, '');
        })
            .catch(function (error) {
            _this.notificationService.ErrorMessage(_helpers__WEBPACK_IMPORTED_MODULE_7__["FirebaseError"].Parse(error.code), '');
        });
    };
    RegisterComponent.prototype.showModal = function () {
        var modal = this.render.selectRootElement(this.frame);
        modal.show();
    };
    RegisterComponent.prototype.hideModal = function () {
        var modal = this.render.selectRootElement(this.frame);
        modal.hide();
        this.router.navigate(['/auth/sign-in']);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('frame', { static: true })
    ], RegisterComponent.prototype, "frame", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/access.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/access.guard.ts ***!
  \****************************************/
/*! exports provided: AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return AccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




var AccessGuard = /** @class */ (function () {
    function AccessGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AccessGuard.prototype.canActivate = function (next, state) {
        var validRole = false;
        var currentUser = this.authService.currentUserValue;
        currentUser.roles.forEach(function (role) {
            if (role === next.data.role) {
                validRole = true;
            }
        });
        // valid role so return true
        if (validRole) {
            return true;
        }
        // not valid role in so redirect to not found component
        this.router.navigate(['not-found']);
        return false;
    };
    AccessGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AccessGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AccessGuard);
    return AccessGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/sign-in'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard, AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access.guard */ "./src/app/guards/access.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return _access_guard__WEBPACK_IMPORTED_MODULE_1__["AccessGuard"]; });





/***/ }),

/***/ "./src/app/helpers/content-type.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/helpers/content-type.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ContentTypeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeInterceptor", function() { return ContentTypeInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentTypeInterceptor = /** @class */ (function () {
    function ContentTypeInterceptor() {
    }
    ContentTypeInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: { ContentType: 'application/json' }
        });
        return next.handle(req);
    };
    ContentTypeInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ContentTypeInterceptor);
    return ContentTypeInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/converter.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/converter.ts ***!
  \**************************************/
/*! exports provided: Converter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Converter", function() { return Converter; });
var Converter = /** @class */ (function () {
    function Converter() {
    }
    // Convert firebase user to user app
    Converter.ToUser = function (firebaseUser) {
        var user = {
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            phoneNumber: firebaseUser.phoneNumber,
            photoURL: firebaseUser.photoURL,
            publish: firebaseUser.publish,
            roles: firebaseUser.roles,
            emailVerified: firebaseUser.emailVerified,
            refreshToken: firebaseUser.refreshToken,
            uid: firebaseUser.uid
        };
        return user;
    };
    return Converter;
}());



/***/ }),

/***/ "./src/app/helpers/day-of-week.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/day-of-week.enum.ts ***!
  \*********************************************/
/*! exports provided: DayOfWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOfWeek", function() { return DayOfWeek; });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
    DayOfWeek["Sunday"] = "Sunday";
})(DayOfWeek || (DayOfWeek = {}));


/***/ }),

/***/ "./src/app/helpers/enum-roles.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/enum-roles.ts ***!
  \***************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["Provider"] = "provider";
    Roles["Cashier"] = "cashier";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService) {
        this.authService = authService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authService.SignOut();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/file-info.ts":
/*!**************************************!*\
  !*** ./src/app/helpers/file-info.ts ***!
  \**************************************/
/*! exports provided: FileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
var FileInfo = /** @class */ (function () {
    function FileInfo(src, file) {
        this.src = src;
        this.file = file;
        this.createdAt = new Date();
        this.markAsPrincipal = false;
    }
    FileInfo.ctorParameters = function () { return [
        { type: String },
        { type: File }
    ]; };
    return FileInfo;
}());



/***/ }),

/***/ "./src/app/helpers/firebase-code.ts":
/*!******************************************!*\
  !*** ./src/app/helpers/firebase-code.ts ***!
  \******************************************/
/*! exports provided: FirebaseCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCode", function() { return FirebaseCode; });
var FirebaseCode;
(function (FirebaseCode) {
    FirebaseCode["EMAIL_ALREADY_IN_USE"] = "auth/email-already-in-use";
    FirebaseCode["USER_NOT_FOUND"] = "auth/user-not-found";
    FirebaseCode["NETWORK_REQUEST_FAILED"] = "auth/network-request-failed";
    FirebaseCode["WRONG_PASSWORD"] = "auth/wrong-password";
})(FirebaseCode || (FirebaseCode = {}));


/***/ }),

/***/ "./src/app/helpers/firebase-error.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/firebase-error.ts ***!
  \*******************************************/
/*! exports provided: FirebaseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseError", function() { return FirebaseError; });
var FirebaseError = /** @class */ (function () {
    function FirebaseError() {
    }
    FirebaseError.Parse = function (errorCode) {
        var message;
        switch (errorCode) {
            case 'auth/wrong-password':
                message = 'Invalid login credentials.';
                break;
            case 'auth/network-request-failed':
                message = 'Please check your internet connection';
                break;
            case 'auth/too-many-requests':
                message =
                    'We have detected too many requests from your device. Take a break please!';
                break;
            case 'auth/user-disabled':
                message =
                    'Your account has been disabled or deleted. Please contact the system administrator.';
                break;
            case 'auth/requires-recent-login':
                message = 'Please login again and try again!';
                break;
            case 'auth/email-already-in-use':
                message = 'Email address is already in use by an existing user.';
                break;
            case 'auth/user-not-found':
                message =
                    'We could not find user account associated with the email address.';
                break;
            case 'auth/phone-number-already-exists':
                message = 'The phone number is already in use by an existing user.';
                break;
            case 'auth/invalid-phone-number':
                message = 'The phone number is not a valid phone number!';
                break;
            case 'auth/invalid-email  ':
                message = 'The email address is not a valid email address!';
                break;
            case 'auth/cannot-delete-own-user-account':
                message = 'You cannot delete your own user account.';
                break;
            case 'auth/expired-action-code':
                message = 'The action code has expired';
                break;
            case 'auth/invalid-action-code':
                message = 'The action code is invalid. This can happen if the code is malformed or has already been used';
                break;
            case 'auth/user-disabled':
                message = 'The user corresponding to the given action code has been disabled';
                break;
            default:
                message = 'Oops! Something went wrong. Try again later.';
                break;
        }
        return message;
    };
    return FirebaseError;
}());



/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, ContentTypeInterceptor, KeyValues, Roles, OrderState, Converter, FileInfo, FirebaseCode, FirebaseError, DayOfWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _content_type_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-type.interceptor */ "./src/app/helpers/content-type.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentTypeInterceptor", function() { return _content_type_interceptor__WEBPACK_IMPORTED_MODULE_2__["ContentTypeInterceptor"]; });

/* harmony import */ var _key_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key-values */ "./src/app/helpers/key-values.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyValues", function() { return _key_values__WEBPACK_IMPORTED_MODULE_3__["KeyValues"]; });

/* harmony import */ var _enum_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enum-roles */ "./src/app/helpers/enum-roles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return _enum_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"]; });

/* harmony import */ var _order_state_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-state.enum */ "./src/app/helpers/order-state.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return _order_state_enum__WEBPACK_IMPORTED_MODULE_5__["OrderState"]; });

/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./converter */ "./src/app/helpers/converter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Converter", function() { return _converter__WEBPACK_IMPORTED_MODULE_6__["Converter"]; });

/* harmony import */ var _file_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-info */ "./src/app/helpers/file-info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return _file_info__WEBPACK_IMPORTED_MODULE_7__["FileInfo"]; });

/* harmony import */ var _firebase_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-code */ "./src/app/helpers/firebase-code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseCode", function() { return _firebase_code__WEBPACK_IMPORTED_MODULE_8__["FirebaseCode"]; });

/* harmony import */ var _firebase_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-error */ "./src/app/helpers/firebase-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseError", function() { return _firebase_error__WEBPACK_IMPORTED_MODULE_9__["FirebaseError"]; });

/* harmony import */ var _day_of_week_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./day-of-week.enum */ "./src/app/helpers/day-of-week.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayOfWeek", function() { return _day_of_week_enum__WEBPACK_IMPORTED_MODULE_10__["DayOfWeek"]; });














/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService) {
        this.authService = authService;
    }
    JwtInterceptor.prototype.intercept = function (req, next) {
        var currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.refreshToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.refreshToken
                }
            });
        }
        return next.handle(req);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/key-values.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/key-values.ts ***!
  \***************************************/
/*! exports provided: KeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValues", function() { return KeyValues; });
var KeyValues = {
    // Client Route
    HOME_URI: '/',
    LOGIN_URI: 'login',
    REGISTER_URI: 'register',
};


/***/ }),

/***/ "./src/app/helpers/order-state.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/order-state.enum.ts ***!
  \*********************************************/
/*! exports provided: OrderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
var OrderState;
(function (OrderState) {
    OrderState["All"] = "all";
    OrderState["Pending"] = "pending";
    OrderState["Ready"] = "ready";
    OrderState["Completed"] = "completed";
    OrderState["Canceled"] = "canceled";
})(OrderState || (OrderState = {}));


/***/ }),

/***/ "./src/app/infrastructure/config.ts":
/*!******************************************!*\
  !*** ./src/app/infrastructure/config.ts ***!
  \******************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.maxChar = 150;
    Config.pageSizeOptions = [5, 10, 15];
    Config.regex = [
        '^[A-Za-z0-9_ñáéíóúÑÁÉÍÓÚ -.]+$',
        '^[A-Za-z0-9_ -.\n]+$',
        '^[0-9]+(.[0-9]{1,2})?$'
    ];
    return Config;
}());



/***/ }),

/***/ "./src/app/infrastructure/index.ts":
/*!*****************************************!*\
  !*** ./src/app/infrastructure/index.ts ***!
  \*****************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/app/infrastructure/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["Config"]; });




/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _helpers_enum_roles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/enum-roles */ "./src/app/helpers/enum-roles.ts");









var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, userService, notificationService) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.userService = userService;
        this.notificationService = notificationService;
        /* Saving user data in local storage when
       logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (firebaseUser) {
            if (firebaseUser) {
                // Save user data in Local Storage
                _this.userService.getUserById(firebaseUser.uid).subscribe(function (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                });
            }
            else {
                localStorage.setItem('user', null);
            }
        });
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (credential) {
            if (credential) {
                _this.userService.getUserById(credential.user.uid).subscribe(function (user) {
                    _this.currentUserSubject.next(user);
                });
                return true;
            }
            else {
                // email not verified
                return false;
            }
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (data) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(function (credential) {
            _this.SendVerificationMail();
            // update data
            var user = {
                displayName: data.displayName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password,
                photoURL: credential.user.photoURL,
                publish: data.publish,
                emailVerified: credential.user.emailVerified,
                refreshToken: credential.user.refreshToken,
                roles: data.roles,
                parentId: data.parentId,
                uid: credential.user.uid
            };
            _this.SetUserData(user);
            return user;
        });
    };
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        var _this = this;
        // Config Google provider
        var googleProvider = new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        return this.afAuth.auth.signInWithPopup(googleProvider)
            .then(function (credential) {
            console.log(credential.user.displayName, credential.user.email);
            var user = {
                displayName: credential.user.displayName,
                email: credential.user.email,
                phoneNumber: credential.user.phoneNumber,
                photoURL: credential.user.photoURL,
                publish: false,
                roles: [_helpers_enum_roles__WEBPACK_IMPORTED_MODULE_8__["Roles"].Provider],
                emailVerified: credential.user.emailVerified,
                refreshToken: credential.user.refreshToken,
                parentId: null,
                uid: credential.user.uid
            };
            _this.SetUserData(user);
            _this.currentUserSubject.next(user);
        });
    };
    // Send email verification when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    };
    // Verify if the action code has expired or is valid.
    AuthService.prototype.VerifyEmailAddress = function (oobCode) {
        return this.afAuth.auth.applyActionCode(oobCode);
    };
    // Send email for reset password
    AuthService.prototype.SendPasswordResetEmail = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    // Reset password
    AuthService.prototype.ConfirmPasswordReset = function (oobCode, newPassword) {
        return this.afAuth.auth.confirmPasswordReset(oobCode, newPassword);
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userDoc = this.afs.doc("users/" + user.uid);
        userDoc.set(user, { merge: true });
    };
    // Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.currentUserSubject.next(null);
        });
    };
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAdmin", {
        get: function () {
            var index = this.currentUserValue.roles.findIndex(function (role) { return role === _helpers_enum_roles__WEBPACK_IMPORTED_MODULE_8__["Roles"].Admin; });
            return index !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is logged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user && user.emailVerified) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cashier/cashier.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cashier/cashier.service.ts ***!
  \*****************************************************/
/*! exports provided: CashierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierService", function() { return CashierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CashierService = /** @class */ (function () {
    function CashierService(afs) {
        this.afs = afs;
    }
    CashierService.prototype.getAllCashiersByProviderId = function (providerId) {
        var collection = this.afs.collection("cashiers/" + providerId + "/list");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var cashier = action.payload.doc.data();
            cashier.id = action.payload.doc.id;
            return cashier;
        }); }));
    };
    CashierService.prototype.getCashierData = function (providerId, cashierId) {
        var cashierDoc = this.afs.doc("cashiers/" + providerId + "/list/" + cashierId);
        return cashierDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            var cashier = snapshot.payload.data();
            cashier.id = snapshot.payload.id;
            return cashier;
        }));
    };
    CashierService.prototype.create = function (cashier) {
        var collection = this.afs.collection("cashiers/" + cashier.providerId + "/list");
        return collection.add(cashier).then(function (docRef) {
            return docRef.get().then(function (snapshot) {
                var cashierDoc = snapshot.data();
                cashierDoc.id = snapshot.id;
                return cashier;
            });
        });
    };
    CashierService.prototype.update = function (cashier) {
        var cashierDoc = this.afs.doc("cashiers/" + cashier.providerId + "/list/" + cashier.id);
        return cashierDoc.update(cashier);
    };
    CashierService.prototype.delete = function (cashier) {
        var cashierDoc = this.afs.doc("cashiers/" + cashier.providerId + "/list/" + cashier.id);
        return cashierDoc.delete();
    };
    CashierService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    CashierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], CashierService);
    return CashierService;
}());



/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CategoryService = /** @class */ (function () {
    function CategoryService(afs) {
        this.afs = afs;
    }
    CategoryService.prototype.getAllCategoriesByProviderId = function (providerId) {
        var collection = this.afs.collection("categories/" + providerId + "/list");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var category = action.payload.doc.data();
            category.id = action.payload.doc.id;
            return category;
        }); }));
    };
    CategoryService.prototype.getCategoryData = function (providerId, categoryId) {
        var categoryDoc = this.afs.doc("categories/" + providerId + "/list/" + categoryId);
        return categoryDoc.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            var category = snapshot.data();
            category.id = snapshot.id;
            return category;
        }));
    };
    CategoryService.prototype.create = function (category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var collection;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        collection = this.afs.collection("categories/" + category.providerId + "/list");
                        return [4 /*yield*/, collection.add(category).then(function (docRef) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, docRef.get().then(function (snapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var categoryDoc;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    categoryDoc = snapshot.data();
                                                    categoryDoc.id = snapshot.id;
                                                    return [2 /*return*/, categoryDoc];
                                                });
                                            }); })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryService.prototype.update = function (category) {
        var categoryDoc = this.afs.doc("categories/" + category.providerId + "/list/" + category.id);
        return categoryDoc.update(category);
    };
    CategoryService.prototype.delete = function (category) {
        var categoryDoc = this.afs.doc("categories/" + category.providerId + "/list/" + category.id);
        return categoryDoc.delete();
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/date/date.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/date/date.service.ts ***!
  \***********************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DateService = /** @class */ (function () {
    function DateService() {
        this.currentDateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Date());
        this.currentDate = this.currentDateSubject.asObservable();
    }
    DateService.prototype.sendDate = function (date) {
        this.currentDateSubject.next(date);
    };
    DateService.prototype.getCurrentDate = function () {
        return this.currentDateSubject.value;
    };
    DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/services/file/file.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/file/file.service.ts ***!
  \***********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FileService = /** @class */ (function () {
    function FileService(storage, afs) {
        this.storage = storage;
        this.afs = afs;
        this.uploads = [];
        this.filesCollection = this.afs.collection('filesinfo');
    }
    FileService.prototype.upload = function (filesInfo, model) {
        var _this = this;
        var e_1, _a;
        var totalPercentage = [];
        var _loop_1 = function (fileInfo) {
            fileInfo.modelId = model.id;
            var basePath = fileInfo.modelType + "/" + fileInfo.createdAt.getTime() + "_" + fileInfo.name;
            var docFileRef = "filesinfo/" + fileInfo.modelId + "/list";
            this_1.storageRef = this_1.storage.ref(basePath);
            this_1.uploadTask = this_1.storage.upload(basePath, fileInfo.file);
            var percentage$ = this_1.uploadTask.percentageChanges();
            totalPercentage.push(percentage$);
            // push each upload into array
            this_1.uploads.push({
                name: fileInfo.name,
                percentage: percentage$
            });
            this_1.uploadTask.then(function (snapshot) {
                return snapshot.ref.getDownloadURL().then(function (url) {
                    return _this.afs.collection(docFileRef).add({
                        name: fileInfo.name,
                        size: fileInfo.size,
                        type: fileInfo.type,
                        modelType: fileInfo.modelType,
                        modelId: fileInfo.modelId,
                        url: url,
                        createdAt: fileInfo.createdAt,
                        markAsPrincipal: fileInfo.markAsPrincipal
                    }).then(function () {
                        // update image url of model
                        if (fileInfo.markAsPrincipal) {
                            var docRef = void 0;
                            model.url = url;
                            switch (fileInfo.modelType) {
                                case 'providers': {
                                    docRef = _this.afs.doc("providers/" + model.id);
                                    break;
                                }
                                case 'categories': {
                                    docRef = _this.afs.doc("categories/" + model.providerId + "/list/" + model.id);
                                    break;
                                }
                                case 'products': {
                                    docRef = _this.afs.doc("products/" + model.providerId + "/list/" + model.categoryId + "/list/" + model.id);
                                    break;
                                }
                                default:
                                    break;
                            }
                            docRef.update(model);
                        }
                    });
                });
            });
        };
        var this_1 = this;
        try {
            for (var filesInfo_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](filesInfo), filesInfo_1_1 = filesInfo_1.next(); !filesInfo_1_1.done; filesInfo_1_1 = filesInfo_1.next()) {
                var fileInfo = filesInfo_1_1.value;
                _loop_1(fileInfo);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (filesInfo_1_1 && !filesInfo_1_1.done && (_a = filesInfo_1.return)) _a.call(filesInfo_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // All percentages
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(totalPercentage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (percentages) {
            var e_2, _a;
            var result = 0;
            try {
                for (var percentages_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](percentages), percentages_1_1 = percentages_1.next(); !percentages_1_1.done; percentages_1_1 = percentages_1.next()) {
                    var percentage = percentages_1_1.value;
                    result = result + percentage;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (percentages_1_1 && !percentages_1_1.done && (_a = percentages_1.return)) _a.call(percentages_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return Math.round(result / percentages.length);
        }));
    };
    // add document to images collection
    FileService.prototype.addFileInfo = function (fileInfo) {
        this.filesCollection.add(fileInfo);
    };
    FileService.prototype.getAllFilesInfoByModelId = function (modelId) {
        var collection = this.afs.collection("filesinfo/" + modelId + "/list");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (action) {
            var file = action.payload.doc.data();
            file.id = action.payload.doc.id;
            return file;
        }); }));
    };
    FileService.prototype.updateFileInfo = function (file, model) {
        var modelDoc;
        var collectionRef = this.afs.collection("filesinfo/" + model.id + "/list");
        var newFileDoc = this.afs.doc("filesinfo/" + file.modelId + "/list/" + file.id);
        switch (file.modelType) {
            case 'providers': {
                modelDoc = this.afs.doc("providers/" + model.id);
                break;
            }
            case 'categories': {
                modelDoc = this.afs.doc("categories/" + model.providerId + "/list/" + model.id);
                break;
            }
            case 'products': {
                modelDoc = this.afs.doc("products/" + model.providerId + "/list/" + model.categoryId + "/list/" + model.id);
                break;
            }
            default:
                break;
        }
        // update old file (markAsPrincipal = false)
        collectionRef.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (query) { return query.docs.map(function (doc) {
            if (doc.exists) {
                doc.ref.update({ markAsPrincipal: false });
            }
        }); })).subscribe();
        // run transaction
        return this.afs.firestore.runTransaction(function (t) {
            return t.get(newFileDoc.ref).then(function () {
                // update new file (markAsPrincipal = true)
                t.update(newFileDoc.ref, { markAsPrincipal: true });
                // update provider url
                t.update(modelDoc.ref, { url: file.url });
            });
        });
    };
    FileService.prototype.removeFileInfo = function (file) {
        var _this = this;
        var fileInfoDoc = this.afs.doc("filesinfo/" + file.modelId + "/list/" + file.id);
        return this.afs.firestore.runTransaction(function (t) {
            return t.get(fileInfoDoc.ref).then(function () {
                t.delete(fileInfoDoc.ref);
                // delete file from firebase storage
                _this.storage.storage.refFromURL(file.url).delete();
            });
        });
    };
    FileService.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthService, UserService, ProviderService, CashierService, CategoryService, ProductService, OrderService, FileService, NotificationService, DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _provider_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider/provider.service */ "./src/app/services/provider/provider.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return _provider_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]; });

/* harmony import */ var _cashier_cashier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier/cashier.service */ "./src/app/services/cashier/cashier.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CashierService", function() { return _cashier_cashier_service__WEBPACK_IMPORTED_MODULE_3__["CashierService"]; });

/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return _category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]; });

/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]; });

/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]; });

/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file/file.service */ "./src/app/services/file/file.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return _file_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]; });

/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]; });

/* harmony import */ var _date_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date/date.service */ "./src/app/services/date/date.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return _date_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]; });













/***/ }),

/***/ "./src/app/services/notification/notification.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/notification/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(toast) {
        this.toast = toast;
    }
    NotificationService.prototype.InfoMessage = function (message, title, timeOut) {
        this.toast.info(message, title);
    };
    NotificationService.prototype.SuccessMessage = function (body, title, timeOut) {
        this.toast.success(body, title);
    };
    NotificationService.prototype.ErrorMessage = function (body, title, timeOut) {
        this.toast.error(body, title);
    };
    NotificationService.prototype.WarningMessage = function (body, title, timeOut) {
        this.toast.warning(body, title);
    };
    NotificationService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/order/order.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OrderService = /** @class */ (function () {
    function OrderService(afs) {
        this.afs = afs;
    }
    OrderService.prototype.getAllOrdersByProviderId = function (providerId, date) {
        var collection = this.afs.collection("orders/" + providerId + "/" + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(), function (query) { return query.orderBy('pickupTime'); });
        // const collection = this.afs.collection(
        //     `orders/${providerId}/2019/4/9`,
        //     query => query.orderBy('pickupTime')
        // );
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var order = action.payload.doc.data();
            order.id = action.payload.doc.id;
            return order;
        }); }));
    };
    OrderService.prototype.getOrderData = function (providerId, orderId, date) {
        var orderDoc = this.afs.doc("orders/" + providerId + "/" + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + orderId);
        return orderDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            var order = snapshot.payload.data();
            order.id = snapshot.payload.id;
            return order;
        }));
    };
    OrderService.prototype.update = function (order, date) {
        var orderDoc = this.afs.doc("orders/" + order.providerId + "/" + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + "/" + order.id);
        return orderDoc.update(order);
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product/product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductService = /** @class */ (function () {
    function ProductService(afs) {
        this.afs = afs;
    }
    ProductService.prototype.getAllProductsData = function (providerId, categoryId) {
        var collection = this.afs.collection("products/" + providerId + "/list/" + categoryId + "/list");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var product = action.payload.doc.data();
            product.id = action.payload.doc.id;
            return product;
        }); }));
    };
    ProductService.prototype.getProductData = function (providerId, categoryId, productId) {
        var productDoc = this.afs.doc("products/" + providerId + "/list/" + categoryId + "/list/" + productId);
        return productDoc.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            var product = snapshot.payload.data();
            product.id = snapshot.payload.id;
            return product;
        }));
    };
    ProductService.prototype.create = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var collection;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        collection = this.afs.collection("products/" + product.providerId + "/list/" + product.categoryId + "/list");
                        return [4 /*yield*/, collection.add(product).then(function (docRef) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, docRef.get().then(function (snapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var productDoc;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    productDoc = snapshot.data();
                                                    productDoc.id = snapshot.id;
                                                    return [2 /*return*/, productDoc];
                                                });
                                            }); })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.update = function (product) {
        var productDoc = this.afs.doc("products/" + product.providerId + "/list/" + product.categoryId + "/list/" + product.id);
        return productDoc.update(product);
    };
    ProductService.prototype.delete = function (product) {
        var productDoc = this.afs.doc("products/" + product.providerId + "/list/" + product.categoryId + "/list/" + product.id);
        return productDoc.delete();
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/provider/provider.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/provider/provider.service.ts ***!
  \*******************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ProviderService = /** @class */ (function () {
    function ProviderService(afs) {
        this.afs = afs;
        this.providerCollection = this.afs.collection('providers');
    }
    ProviderService.prototype.getAllProviderByUserId = function (userId) {
        var collection = this.afs.collection('providers', function (query) { return query.where('userId', '==', userId); });
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) { return actions.map(function (action) {
            var provider = action.payload.doc.data();
            provider.id = action.payload.doc.id;
            return provider;
        }); }));
    };
    ProviderService.prototype.getProviderById = function (providerId) {
        return this.providerCollection.doc(providerId).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (snapshot) {
            var provider = snapshot.payload.data();
            provider.id = snapshot.payload.id;
            return provider;
        }));
    };
    ProviderService.prototype.create = function (provider) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.providerCollection.add(provider).then(function (docRef) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, docRef.get().then(function (snapshot) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var providerDoc;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                providerDoc = snapshot.data();
                                                providerDoc.id = snapshot.id;
                                                return [2 /*return*/, providerDoc];
                                            });
                                        }); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProviderService.prototype.update = function (provider) {
        return this.providerCollection.doc(provider.id).update(provider);
    };
    ProviderService.prototype.delete = function (provider) {
        return this.providerCollection.doc(provider.id).delete();
    };
    ProviderService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        })
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserService = /** @class */ (function () {
    function UserService(af) {
        this.af = af;
        this.usersCollection = this.af.collection('users');
    }
    // return all documents with metadata
    UserService.prototype.getAllUsers = function () {
        return this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var user = a.payload.doc.data();
            user.uid = a.payload.doc.id;
            return user;
        }); }));
    };
    UserService.prototype.getAllUsersByType = function (type) {
        var collection = this.af.collection('users', function (query) { return query.where('roles', 'array-contains', type); });
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var user = action.payload.doc.data();
            user.uid = action.payload.doc.id;
            return user;
        }); }));
    };
    UserService.prototype.getAllUsersByParentId = function (parentId) {
        var collection = this.af.collection('users', function (query) { return query.where('parentId', '==', parentId); });
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (action) {
            var user = action.payload.doc.data();
            user.uid = action.payload.doc.id;
            return user;
        }); }));
    };
    UserService.prototype.getUserById = function (uid) {
        return this.af.doc("users/" + uid).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
            var user = snapshot.payload.data();
            user.uid = snapshot.payload.id;
            return user;
        }));
    };
    UserService.prototype.getUserByEmail = function (email) {
        var collection = this.af.collection('users', function (query) { return query.where('email', '==', email).limit(1); });
        return collection.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (query) { return query.docs.map(function (doc) {
            var user = doc.data();
            user.uid = doc.id;
            return user;
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) { return users.length > 0 ? users[0] : null; }));
    };
    UserService.prototype.isEmailTaken = function (email) {
        return this.getUserByEmail(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user ? true : false; }));
    };
    UserService.prototype.getUserWithEmailAndPassword = function (email, password) {
        var collection = this.af.collection('users', function (query) {
            return query.where('email', '==', email)
                .where('password', '==', password)
                .limit(1);
        });
        return collection.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (query) { return query.docs.map(function (doc) {
            var user = doc.data();
            user.uid = doc.id;
            return user;
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) { return users.length > 0 ? users[0] : null; }));
    };
    UserService.prototype.createAccount = function (user) {
        return this.usersCollection.add(user);
    };
    UserService.prototype.update = function (user) {
        return this.usersCollection.doc(user.uid).update(user);
    };
    UserService.prototype.updatePassword = function (uid, newPassword) {
        return this.usersCollection.doc(uid).update({ password: newPassword });
    };
    UserService.prototype.publish = function (userId, publish) {
        return this.usersCollection.doc(userId).update({ publish: publish });
    };
    UserService.prototype.delete = function (id) {
        return this.usersCollection.doc(id).delete();
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDcURg1rEfzjve9yIGqOs0g216ql5h0c64',
        authDomain: 'provider-db.firebaseapp.com',
        databaseURL: 'https://provider-db.firebaseio.com',
        projectId: 'provider-db',
        storageBucket: 'provider-db.appspot.com',
        messagingSenderId: '794332023417'
    }
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

module.exports = __webpack_require__(/*! C:\Users\Irnel\Documents\Projects\provider-admin-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map