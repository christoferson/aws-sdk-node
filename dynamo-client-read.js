const AWS = require("aws-sdk");

console.log(AWS.VERSION);

AWS.config.update({ region: '<region>>' });

const dynCLient = new AWS.DynamoDB.DocumentClient();

// Get by Partition and Sort Key
// dynCLient.get({
//     TableName: '<table>', 
//     Key: {
//         Region: 'US',
//         CharacterName: 'Adria'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//Query by Partition Key
dynCLient.query({
    TableName: '<table>',
    KeyConditionExpression: "#region = :region",
    ExpressionAttributeNames: {
        "#region": "Region"
    },
    ExpressionAttributeValues: {
        ':region': 'US'
    }
    }, 
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    }   
);