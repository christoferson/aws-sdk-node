const AWS = require("aws-sdk");

console.log(AWS.VERSION);

AWS.config.update({ region: '<region>' });

const dynCLient = new AWS.DynamoDB.DocumentClient();

// Query by Partition and Sort Key
dynCLient.get({
    TableName: '<table>', 
    Key: {
        Region: '<key>',
        CharacterName: '<sort-key>'
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});