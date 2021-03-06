﻿/// <reference path="../app.ts" />
/// <reference path='../../Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='../../Scripts/typings/angularjs/angular-resource.d.ts'/>
'use strict';
var datacontext = (function () {
    function datacontext(common) {
        this.common = common;
        this.greeting = "Hello";
        this.$q = common.$q;
    }
    datacontext.prototype.getMessageCount = function () {
        return this.$q.when(72);
    };

    datacontext.prototype.getPeople = function () {
        var people = [
            { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
            { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
            { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
            { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
            { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
            { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
            { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
        ];

        return this.$q.when(people);
    };
    datacontext.serviceId = "datacontext";
    return datacontext;
})();

app.factory(datacontext.serviceId, [
    'common', function (common) {
        return new datacontext(common);
    }
]);
//# sourceMappingURL=datacontext.js.map
