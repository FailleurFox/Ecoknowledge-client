/**
 * Authentication service
 */
ecoknowledgeApp.factory('AuthenticationService', function($cookies){

    return{
        connect : function(id){
            $cookies.put("EcoknowledgeUserId", id);
        },

        getUserId : function(){
            return "e3901108-b77d-4412-9cca-39599c90faad";
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