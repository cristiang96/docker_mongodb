db = db.getSiblingDB("db1");
db.db1.drop();

db.db1.insertMany([
    {
        "id": 1,
        "name": "Lion",
        "type": "wild"
    },
    {
        "id": 2,
        "name": "Cow",
        "type": "domestic"
    },
    {
        "id": 3,
        "name": "Tiger",
        "type": "wild"
    },
]);