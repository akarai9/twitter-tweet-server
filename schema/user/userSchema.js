module.exports = {

    forgotPasswordSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                email: { type: 'string', pattern: 'email' }
            }
        };
        return schema;
    },


    resetPasswordSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                token: { type: 'string' },
                password: { type: 'string' }
            }
        };
        return schema;
    },

    signUpSchema: function () {
        let schema = {
            type: "object",
            properties: {
                firstName: { type: "string" },
                lastName: { type: "string" },
                dob: { type: "string" },
                email: { type: "string", pattern: "email" },
                gender: { type: "string", eq: ["M", "F" , "R"] },
                zipCode: { type: "string" },
                referralCode: { type: "string" },
                countryId: { type: "number" },
                regionId: { type: "number" },
                password: { type: "string" },
                address: { type: "string", optional: true },
                location: { type: "string", optional: true },
                longitude: { type: "number", optional: true },
                latitude: { type: "number", optional: true },
                isPaid : { type : "enum" , eq: [ "0" , "1"] }
            }
        };
        return schema;
    },

    updateImageSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                profileImage: { type: 'string' }
            }
        };
        return schema;
    },

    getUserEventSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                longitude: { type: 'string' },
                latitude: { type: 'string' }
            }
        };
        return schema;
    },

    getEventDetailsByIdSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                eventID: { type: 'string' }
            }
        };
        return schema;
    },

    userRSVPSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                eventID: { type: 'number' },
                userResponse: { type: 'string', eq: ["Accept", "Reject", "Maybe"] },
                eventuserId: { type: 'number' }
            }
        };
        return schema;
    },
    updateUserSettingSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                enableNotification: { type: 'number', eq: [0,1] },
                enableLocation: { type: 'number', eq: [0,1] },
                subscriptionStatus: { type: 'number', eq: [1,2,3] }
            }
        };
        return schema;
    },

    deleteUserMessageSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                usermessageId: { type: 'number'}
            }
        };
        return schema;
    },

    getUserEventSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                longitude : { type : 'string'},
                latitude : { type : 'string' }
            }
        };
        return schema;
    },

    getUserEventsListSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                longitude : { type : 'string'},
                latitude : { type : 'string' },
                pageNo: { type: 'number' }
            }
        };
        return schema;
    },

    getEventDetailsByIdSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                eventID : { type : 'string'}
            }
        };
        return schema;
    },

    userRSVPSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                eventID : { type : 'number'},
                userResponse : { type : 'string', eq : [ "Accept" , "Reject", "Maybe"]},
                eventuserId : { type : 'number'}
            }
        };
        return schema;
    },

    updateUserProfileSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                contactNumber: { type: 'number' },
                zipCode : { type : 'string'},
                address1: { type : 'string'},
                address2: { type : 'string'},
                stateId:  { type : 'number'},
                city:   { type : 'string'},
                regionId: { type : 'number'},
                dob: { type: "string" },
            }
        };
        return schema;
    },

    userBankRegistrationSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                bankName : { type : 'string'},
                providerAccountId : { type : 'number' },
                providerId : { type : 'number' },
                requestId: { type: 'string' }
            }
        };
        return schema;
    },

    guestUserSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                email : { type : 'string'}
            }
        };
        return schema;
    },

    guestUserFLSSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                bankName : { type : 'string'},
                providerAccountId : { type : 'number' },
                providerId : { type : 'number' },
                requestId: { type: 'string' },
                guestId: { type: 'number' }
            }
        };
        return schema;
    },


    purchaseSubscriptionSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                token : { type : 'string'},
                subscriptionToken: { type : 'string' },
                cardNumber: { type : 'string'},
                isProfile : { type : 'number'},
                // individual : {
                //     type : 'object',
                //     properties : {
                //         address1: { type : 'string' },
                //         address2: { type : 'string' },
                //         city : { type : 'string'} ,
                //         postalCode : { type : 'string' },
                //         state : { type : 'string' },
                //         day : { type : 'number' },
                //         month : { type : 'number' },
                //         year : { type : 'number' },
                //         email : { type : 'string'},
                //         firstName : { type : 'string' },
                //         lastName : { type : 'string' },
                //         phone : { type : 'string' },
                //         ssn: { type :'string'}
                //     }
                // }
                // businessProfile : {
                //     type : 'object',
                //     properties : {
                //         mcc:{ type : 'string' },
                //         url:{ type : 'string' }
                //     }
                // }
            }
        };
        return schema;
    },

    cancelSubscriptionSchema : function(){
        let schema = {
            type : 'object',
            properties : {
                email : { type : 'string'},
                firstName: { type : 'string' },
                lastName: { type : 'string'},
                reason : { type : 'string' , optional: true }
            }
        };
        return schema;
    },
}

