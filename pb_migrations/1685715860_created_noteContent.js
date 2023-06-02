migrate((db) => {
  const collection = new Collection({
    "id": "ln5j3ipwpzk8pgm",
    "created": "2023-06-02 14:24:20.805Z",
    "updated": "2023-06-02 14:24:20.805Z",
    "name": "noteContent",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sj3jogcp",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "awpgl8us",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ln5j3ipwpzk8pgm");

  return dao.deleteCollection(collection);
})
