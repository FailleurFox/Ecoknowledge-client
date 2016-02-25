/**
 * Authentication service
 */
ecoknowledgeApp.factory('AuthenticationService', function($cookies){

    return{
        connect : function(id){
            $cookies.put("EcoknowledgeUserId", id);
        },

        getUserId : function(){
            return $cookies.get("EcoknowledgeUserId");
        },

        isLoggedIn : function(){
            return $cookies.get("EcoknowledgeUserId") ? true : false;
        },

        disconnect : function(){
            $cookies.remove("EcoknowledgeUserId");
        }
    };
});