/// <reference path="../scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

'use strict';

var app = angular.module('app');

// Configure Toastr
toastr.options.timeOut = 4000;
toastr.options.positionClass = 'toast-bottom-right';

// For use with the HotTowel-Angular-Breeze add-on that uses Breeze
var remoteServiceName: string = 'breeze/Breeze';

interface Ievents {
    controllerActivateSuccess: string;
    spinnerToggle: string;
}

var events: Ievents = {
    controllerActivateSuccess: 'controller.activateSuccess',
    spinnerToggle: 'spinner.toggle'
};

interface Iconfig {
    appErrorPrefix: string;
    docTitle: string;
    events: Ievents;
    remoteServiceName: string;
    version: string;
}

var config: Iconfig = {
    appErrorPrefix: '[HT Error] ', //Configure the exceptionHandler decorator
    docTitle: 'HotTowel: ',
    events: events,
    remoteServiceName: remoteServiceName,
    version: '2.1.0'
};

app.value('config', config);

app.config(['$logProvider', $logProvider=> {
    // turn debugging off/on (no info or warn)
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }
}]);

//#region Configure the common services via commonConfig
app.config(['commonConfigProvider', cfg => {
    cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
    cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
}]);
//#endregion 