app.module('cstDirectives', [/* provider services here */])
.directive('word', [function() {
    return {
        restrict: 'A',
        scope: false,
        replace: false,
        link: function($scope, element, attrs) {
            attrs.$observe('id', function(value) {
                /* id must be globally unique. recommend name spaces, e.g. my-translations-12345,
                   or perhaps a uuid. used for looking up REST API. */
            })
            attrs.$observe('language', function(value) {
                // standard iso e.g. en-us, 
            })
            attrs.$observe('class', function(value) {
                /* use this to specify one or more of contextual hashtags to help with the 
                   content's usage, e.g. #formal #conversational #vulgar #slang */
            })
        }
    }
}])
