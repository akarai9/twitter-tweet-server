module.exports = {
    loginSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                email: { type: 'string', pattern: 'email' },
                password: { type: 'string' },
                userType: { type: 'string' , eq: ["admin","user"]},
                deviceKey: { type: 'string'},
                browser: { type : 'string'},
                location: { type : 'string'}
            }
        };
        return schema;
    },
    userZipCodeSchema : function(){
        let schema = {
            type: "object",
            properties: {
              zipCode: { type: "string" }
            }
          };
          return schema;
    },
    forgotPasswordSchema: function () {
        var schema = {
            type: 'object',
            properties: {                
                emailAddress: { type: 'string', pattern: 'email' } ,
                userType: { type: 'string' , eq: ["admin","user"]}
            }
        }; 
        return schema;
    },    
    refreshTokenSchema: function () {
        var schema = {
            type: 'object',
            properties: {
                refreshToken: { type: 'string', optional: true},
                userId: { type: 'number', optional: true}               
            }
        }; 
        return schema;
    },    
    resetPasswordSchema: function () {
        var schema = {
            type: 'object',
            properties: {                
                token: { type: 'string' },               
                password: { type: 'string'},
                type:{ type:'string'}        
            }
        }; 
        return schema;
    },
    azureSasTokenSchema : function(){
        let schema = {
            type: "object",
            properties: {
                containerName: { type: "string" },
                fileName: { type: "string" }
            }
          };
          return schema;
    },
    changePasswordSchema : function(){
        let schema = {
            type: "object",
            properties: {
                oldPassword: { type: "string" },
                newPassword: { type: "string" }
            }
          };
          return schema;
    },
    userLogoutSchema : function(){
        let schema = {
            type: "object",
            properties: {
                deviceKey: { type: "string" }
            }
          };
          return schema;
    }
}