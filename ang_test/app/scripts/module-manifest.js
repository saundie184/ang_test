angular.module( 'base', [] );

angular.module( 'utility-directives', ['base'] );
angular.module( 'display-widgets', [] );
angular.module( 'form-directives', ['utility-directives']);
angular.module( 'main', ['templates-main', 'form-directives', 'display-widgets', 'utility-directives'] );

