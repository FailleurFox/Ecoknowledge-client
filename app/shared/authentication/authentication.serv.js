/**
 * Authentication service
 */
ecoknowledgeApp.factory('AuthenticationService', function($cookies){

    return{
        connect : function(id){
            $cookies.put("EcoknowledgeUserId", id);
        },

        getUserId : function(){
            return "620643fd-c7a4-4d41-aed9-bfe0f7a914b1";
            //  FIXME return $cookies.get("EcoknowledgeUserId");
        },

        isLoggedIn : function(){
            return $cookies.get("EcoknowledgeUserId") ? true : false;
        },

        disconnect : function(){
            $cookies.remove("EcoknowledgeUserId");
        }
    }
})