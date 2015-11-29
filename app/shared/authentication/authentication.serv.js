/**
 * Created by Hugo on 25/11/2015.
 */
ecoknowledgeApp.factory('AuthenticationService', function(){
    var userId;

    return{
        connect : function(id){
            userId = id;
        },

        getUserId : function(){
            return userId;
        },

        isLoggedIn : function(){
            return userId ? true : false;
        },

        disconnect : function(){
            userId = undefined;
        }
    }
})