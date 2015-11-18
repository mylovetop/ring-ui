/* global angular: false */
import '../message-bundle-ng/message-bundle-ng.js';

import '../form-ng/form-ng';
import '../form/form.scss';
import '../form-ng/form-ng.scss';
import '../button/button.scss';

const module = angular.module('Ring.form');

/**
 * @name Form-update-text
 * @description Directive: input with Save button
 * @example
 * <example name="Form-update-text">
   <file name="index.html">
    <div ng-app="Example.form">
      <div class="ring-form" ng-controller="UpdateTextDemoCtrl">
        <rg-form__update-text label="Text"
                              item="data"
                              field="email"
                              ng-required="true"
                              ng-pattern="/^[a-zA-Z][a-zA-Z0-9-_\.]*[@][a-zA-Z0-9-_\.]+$/"
                              on-save="save">
          Enter valid email
        </rg-form__update-text>

        <rg-form__update-text label="Multiline Text"
                              item="data"
                              field="longText"
                              multiline="true"
                              on-save="save">
        </rg-form__update-text>
      </div>
    </div>
   </file>
   <file name="index.js" webpack="true">
     require('angular');
     require('ring-ui/components/form-ng/form-ng__update-text');

     angular.module('Example.form', ['Ring.form'])
      .controller('UpdateTextDemoCtrl', function($scope) {
        $scope.data = {
          email: null,
          longText: null
        };
        $scope.save = function(item, field, success) {
          success();
        };
      });
   </file>
 * </example>
 */

module.directive('rgFormUpdateText', [
  '$timeout',
  'RingMessageBundle',
  function ($timeout, RingMessageBundle) {
    const multiLineSplitPattern = /(\r\n|\n|\r)/gm;

    return {
      replace: true,
      transclude: true,
      scope: {
        label: '@',
        placeholder: '@',
        item: '=',
        field: '@',
        isMultiLine: '&multiline',
        parseElement: '&',
        formatElement: '&',
        isLong: '&long',
        isMiddle: '&middle',
        isNowrap: '&nowrap',
        ngDisabled: '=',
        ngRequired: '=',
        ngPattern: '@',
        type: '@',
        onSave: '='
      },
      template: require('./form-ng__update-text.html'),
      link: function (scope, iElement, iAttrs) {
        // Generate random string
        scope.inputId = Math.random().toString(36).substring(2);
        scope.initial = scope.item[scope.field];
        scope.$watch('item.' + scope.field, function (newValue) {
          /**
           * Update initial value if field has been changed outside form.input (e.g. new value from rest)
           */
          if (angular.isDefined(newValue) && !angular.equals(newValue, scope.form.input.$modelValue)) {
            scope.initial = newValue;
            scope.form.$setPristine();
          } else if (scope.form.$dirty && angular.equals(scope.initial, newValue)) {
            scope.form.$setPristine();
          }
        });

        // Special formatting and parsing for array values
        if (scope.isMultiLine() === 'list') {
          const stopWatch = scope.$watch('form.input', function (input) {
            if (input) {
              input.$formatters.push(function (value) {
                if (!value) {
                  return value;
                }
                if (iAttrs.formatElement) {
                  value = value.map(function (element) {
                    return scope.formatElement({element: element});
                  });
                }
                return value.join('\n');
              });

              input.$parsers.push(function (value) {
                const array = value && value.split(multiLineSplitPattern) || [];

                if (!iAttrs.parseElement) {
                  return array;
                }

                return array
                  .filter(val => val && val.trim())
                  .map(val => scope.parseElement({element: val.trim()}));
              });

              stopWatch();
            }
          });
        }

        function success() {
          scope.initial = scope.item[scope.field];
          scope.form.$setPristine();

          scope.done = true;

          $timeout(function () {
            scope.done = false;
          }, 1000);
        }

        scope.changed = function () {
          scope.onSave(scope.item, scope.field, success, angular.noop);
        };

        scope.inputKey = function ($event) {
          if ($event.keyCode === 27) {
            // Esc
            if (scope.form.input.$dirty) {
              scope.item[scope.field] = scope.initial;
            }
            $event.stopPropagation();
            $event.preventDefault();
          } else if ($event.keyCode === 13 && ($event.ctrlKey || $event.metaKey || !scope.isMultiLine())) {
            // Enter
            if (scope.form.input.$dirty && scope.form.input.$valid) {
              scope.changed();
            }
            $event.stopPropagation();
            $event.preventDefault();
          }
        };

        scope.wording = {
          save: RingMessageBundle.form_save(),
          saved: RingMessageBundle.form_saved()
        };
      }
    };
  }
]);
