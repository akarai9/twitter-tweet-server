module.exports = {
    createGroupSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                groupName: { type: 'string' },
                groupLevel: { type: 'number' }
            }
        };
        return schema;
    },

    updateGroupSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                groupId: { type: 'number' },
                groupName: { type: 'string' },
                groupLevel: { type: 'number' }
            }
        };
        return schema;
    },

    deleteGroupSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                groupId: { type: 'number' }
            }
        };
        return schema;
    },

    eventListSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNo: { type: 'number' },
                regionId: { type: 'string', optional: true }
            }
        };
        return schema;
    },

    eventDetailSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNo: { type: 'number' }
            }
        };
        return schema;
    },


    usersListSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNumber: { type: 'number' },
                searchKeyword: { type: 'string' },
                isPaid : { type : 'string'}

            }
        };
        return schema;
    },

    updateUserStatusSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                isActive: { type: 'number' }
            }
        };
        return schema;
    },

    updateUserGroupSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                groupId: { type: 'number' }
            }
        };
        return schema;
    },

    addEventSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                eventName: { type: 'string' },
                eventLocation: { type: 'string' },
                eventVenue: { type: 'string' },
                longitude: { type: 'string' },
                latitude: { type: 'string' },
                regionId: { type: "array" },
                eventUTCDatetime: { type: 'string' },
                daysToChangeRSVP: { type: 'number' },
                memberDiscountFee: { type: 'float' },
                memberEntreFee: { type: 'float' },
                nonMemberEntryFee: { type: 'float' },
                description: { type: 'string' }
            }
        };
        return schema;
    },

    updateEventSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                eventID: { type: 'number' },
                eventName: { type: 'string' },
                eventLocation: { type: 'string' },
                eventVenue: { type: 'string' },
                longitude: { type: 'string' },
                latitude: { type: 'string' },
                regionId: { type: "array" },
                eventUTCDatetime: { type: 'string' },
                daysToChangeRSVP: { type: 'number' },
                memberDiscountFee: { type: 'float' },
                memberEntreFee: { type: 'float' },
                nonMemberEntryFee: { type: 'float' },
                description: { type: 'string' }
            }
        };
        return schema;
    },

    viewAdminMessageSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNo: { type: 'number' }
            }
        };
        return schema;
    },

    viewAdminMessageDetailSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNo: { type: 'number' }
            }
        };
        return schema;
    },

    groupEventListSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                sType: { type: 'string' , eq: ["1","2"]}
            }
        };
        return schema;
    },

    userMessageListSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                sType: { type: 'string' , eq: ["1","2"], optional: true},
                userResponse: { type: 'string' , eq: ["ALL","Accept","Reject","Maybe"], optional: true},
                sId: { type: 'number' , optional: true},
                searchString: { type: 'string' , optional: true},
            }
        };
        return schema;
    },

    sendMessageSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                message: { type: 'string'},
                userId: { type: 'array'}
            }
        };
        return schema;
    },

    updateConfigurationDetailSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                approvalId: { type: 'number' },
                transactionAmount: { type: 'number' },
                debitTransaction: { type: 'number' },
                creditTransaction: { type: 'number' },
                finanacialSnapshotDay: { type: 'number' },
                pointsAwardMatrix: { type: 'array' },
                userLevelMatrix: { type: 'array' }
            }
        };
        return schema;
    },

    adminLogoutSchema : function(){
        let schema = {
            type: "object",
            properties: {
                deviceKey: { type: "string" }
            }
          };
          return schema;
    },


    deleteUserSchema : function(){
        let schema = {
            type: "object",
            properties: {
                userId: { type: "string" }
            }
          };
          return schema;
    },

    createContentSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                title: { type: 'string' , minlength : 3 , maxlength : 50},
                description: { type: 'string', minlength : 3 , maxlength : 50 },
                contentType:{ type :'string' , eq:['1','2']}
            }
        };
        return schema;
    },

    contentDetailSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' },
                pageNum: { type : 'number'},
                pageSize: { type : 'number' , eq:[ 1, 25, 50, 100, 500 ]},
            }
        };
        return schema;
    },

    contentListSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                pageNum: { type : 'number'},
                pageSize: { type : 'number' , eq:[ 1, 25, 50, 100, 500 ]},
                searchKeyword:{ type : 'string'},
                listType:{ type:'string' , eq:[ '1','2' ]}
            }
        };
        return schema;
    },

    updateContentSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'number' },
                title: { type: 'string' , minlength : 3 , maxlength : 50},
                description: { type: 'string', minlength : 3 , maxlength : 50 },
                contentType:{ type :'string' , eq:['1','2']}
            }
        };
        return schema;
    },

    createContentMediasSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' },
                title: { type: 'string' , minlength : 3 , maxlength : 100},
                media: { type: 'string', minlength : 3 , maxlength : 150 },
                mediaType:{ type :'string'  , eq:['1','2','3'] },
                serialNumber: { type : 'number'}
            }
        };
        return schema;
    },

    contentMediaDetailSchema: function () {
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' }
            }
        };
        return schema;
    },

    updateContentMediaSchema: function() {
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' },
                contentMediaId: { type: 'string' },
                title: { type: 'string' , minlength : 3 , maxlength : 100},
                media: { type: 'string', minlength : 3 , maxlength : 150 },
                mediaType:{ type :'string' , eq:['1','2','3']},
                serialNumber: { type : 'number'}
            }
        };
        return schema;
    },

    deleteContentSchema: function(){
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' },
            }
        };
        return schema;
    },


    deleteContentMediaSchema: function(){
        let schema = {
            type: 'object',
            properties: {
                contentId: { type: 'string' },
                contentMediaId: {type :'string'}
            }
        };
        return schema;
    }
}


