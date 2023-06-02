migrate((db) => {
  const collection = new Collection({
    "id": "51fi6z913con2pj",
    "created": "2023-06-02 14:26:40.854Z",
    "updated": "2023-06-02 14:26:40.854Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dfmjvry7",
        "name": "rowSpan",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hwp4clo0",
        "name": "columnSpan",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mdsyz5xm",
        "name": "columnOffset",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kmdl8sp3",
        "name": "data",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ln5j3ipwpzk8pgm",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("51fi6z913con2pj");

  return dao.deleteCollection(collection);
})
