angular.module('templates-main', ['scripts/directives/widgets/slider/slider.html', 'scripts/directives/widgets/spinner/spinner.html', 'scripts/directives/widgets/statustimeline/statustimeline.html', 'scripts/directives/widgets/switch/switch.html', 'scripts/directives/widgets/textlist/textlist.html', 'scripts/main/main.html']);

angular.module("scripts/directives/widgets/slider/slider.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/widgets/slider/slider.html",
    "<div class=\"slider\" ng-click=\"adjustSlider( getClickX( $event ) )\" show-notify>\n" +
    "    <div class=\"slider-labels\">\n" +
    "        <span class=\"pull-left light-print\">{{minLabel}}</span>\n" +
    "        <span class=\"pull-right light-print\">{{maxLabel}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"segment-labels\">\n" +
    "        <div class=\"segment-label\" ng-repeat=\"segment in segments\" ng-style=\"{'left': getLeftForSegmentLabel( segment )}\" ng-class=\"{ selected: getIndexValue( $index ) === value }\">{{ getLabel( $index ) }}</div>\n" +
    "        <div class=\"segment-label last-label\" ng-class=\"{ selected: getIndexValue( segments.length ) === value }\" >{{ getLabel( segments.length ) }}</div>\n" +
    "    </div>\n" +
    "    <div class=\"segments\">\n" +
    "        <div class=\"segment\" ng-repeat=\"segment in segments\" ng-style=\"{'width': segment.px + 'px'}\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"selection-bar\" ng-style=\"{width: position + 'px'}\"></div>\n" +
    "    <a class=\"slider-handle\" ng-mousedown=\"grabbed = true;\" ng-style=\"{left: (position-5) + 'px'}\"></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/widgets/spinner/spinner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/widgets/spinner/spinner.html",
    "<div class=\"spinner-parent\">\n" +
    "    <div class=\"flex\">\n" +
    "        <input type=\"text\" ng-model=\"value\" maxlength=\"{{maxlength}}\" size=\"{{maxlength}}\" ng-class=\"{'no-buttons': !buttons}\" ng-blur=\"focusLost()\" ng-keydown=\"keyPressed( $event )\" ng-disabled=\"!enable\"/>\n" +
    "    </div>\n" +
    "    <div class=\"button-parent\" ng-show=\"buttons\">\n" +
    "        <div class=\"button-base increment\" draggable=\"false\" ng-class=\"{pressed: upPressed, 'disabled-button': !enable}\" ng-mousedown=\"incrementDown()\" ng-mouseup=\"incrementUp()\" ng-mouseleave=\"incrementUp()\" ng-mousemove=\"incrementUp()\" ng-click=\"increment()\">\n" +
    "            <span class=\"caret\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"button-base decrement\" draggable=\"false\" ng-class=\"{pressed: downPressed, 'disabled-button': !enable}\" ng-mousedown=\"decrementDown()\" ng-mouseup=\"decrementUp()\" ng-mouseleave=\"decrementUp()\" ng-mousemove=\"decrementUp()\" ng-click=\"decrement()\">\n" +
    "            <span class=\"caret\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/widgets/statustimeline/statustimeline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/widgets/statustimeline/statustimeline.html",
    "<div class=\"status-timeline\" style=\"position: relative;\">\n" +
    "    <div class=\"flex\" style=\"position: relative;\">\n" +
    "        <div class=\"event {{iconClass}}\" ng-repeat=\"event in data\" ng-style=\"{ left: event.pos }\" ng-show=\"event.pos\"></div>\n" +
    "        <div ng-repeat=\"box in boxes\" class=\"color-box\" ng-style=\"{ 'background-color': box.color}\"></div>\n" +
    "    </div>\n" +
    "    <div style=\"position: relative;\" ng-style=\"{ width: 22*divisions}\">\n" +
    "        <div class=\"time-label left\">{{ leftLabel }}</div>\n" +
    "        <div class=\"time-label middle\">{{ middleLabel }}</div>\n" +
    "        <div class=\"time-label right\">{{ rightLabel }}</div>    \n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("scripts/directives/widgets/switch/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/widgets/switch/switch.html",
    "<div class=\"switch-widget\" ng-class=\"{ disabled : disabled === true, on : active === true }\" ng-style=\"{ width: calcWidth }\" ng-click=\"switch()\">\n" +
    "    \n" +
    "    <div class=\"veil\" ng-show=\"disabled === true\"></div>\n" +
    "    \n" +
    "    <div class=\"switch-button\" ng-class=\"{ on : active === true }\"></div>\n" +
    "    \n" +
    "    <div class=\"switch-text-parent\">\n" +
    "        <div ng-show=\"active == true\" class=\"on-text\">{{ onText }}</div>\n" +
    "        <div ng-show=\"active != true\" class=\"off-text\">{{ offText }}</div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("scripts/directives/widgets/textlist/textlist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/widgets/textlist/textlist.html",
    "<div class=\"fds-text-list\">\n" +
    "    <div ng-repeat=\"item in items track by $index\" class=\"fds-text-list-item\">\n" +
    "        <fui-input style=\"display: inline-block\" ng-model=\"items[$index]\" type=\"text\" placeholder=\"{{ placeholder }}\"></fui-input>\n" +
    "        <span style=\"font-size: 20px\" ng-click=\"deleteRow( $index, item )\" class=\"text-list-input icon icon-delete inline light-print\" translate></span>\n" +
    "    </div>\n" +
    "    <a ng-click=\"addRow()\" class=\"btn btn-primary skinny\">{{ addLabel }}</a>\n" +
    "</div>");
}]);

angular.module("scripts/main/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/main/main.html",
    "<div ng-controller=\"mainController\" class=\"main\" style=\"padding: 24px;\">\n" +
    "    \n" +
    "    <div style=\"width: 500px;\" class=\"bubbles\">\n" +
    "        <slider min=\"0\" max=\"100\" step=\"10\" label-function=\"slider_label\" ng-model=\"slider_value\"></slider>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"bubbles\" style=\"width: 200px;margin-top: 18px;\">\n" +
    "        <spinner min=\"sp_min\" max=\"sp_max\" step=\"1\" show-buttons=\"true\" value=\"spinner_value\" enable=\"sp_enable\"></spinner>\n" +
    "        <div class=\"btn btn-primary\" style=\"margin-top: 8px;\" ng-click=\"changeSpinnerEnablement()\">\n" +
    "            Toggle Enablement\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"bubbles\" style=\"width: 620px;margin-top: 18px;padding-bottom: 24px;\">\n" +
    "        <status-timeline ng-model=\"status_data\" domain=\"status_domain\" range=\"status_range\" divisions=\"24\" right-label=\"{{ 'common.l_now' | translate }}\" left-label=\"{{ 'common.l_24_hours_ago' | translate }}\" icon-class=\"icon-firebreak\" date-range=\"status_date_range\"></status-timeline>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"bubbles\" style=\"width: 80px;margin-top: 18px;\">\n" +
    "        <switch ng-model=\"switch_value\" on-text=\"明\" off-text=\"消\"></switch>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
