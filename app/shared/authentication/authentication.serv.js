/**
 * Created by Hugo on 25/11/2015.
 */
ecoknowledgeApp.factory('AuthenticationService', function($rootScope){

    return{
        setUserId : function(id){
            $rootScope.userId = id;
        },
        isLoggedIn : function(){
            return($rootScope.userId)? $rootScope.userId : false;
        }
    }
})