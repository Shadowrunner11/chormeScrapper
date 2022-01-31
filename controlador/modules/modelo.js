const DB_NAME = 'Linkedin data';
const DB_VERSION = 1;
const DB_STORE_NAME = 'publications';

let db;
var current_view_pub_key;

export function openDb() {
    console.log("openDb ...");
    let req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Equal to: db = req.result;
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

      store.createIndex('id', 'id', { unique: true });
      store.createIndex('name', 'name', { unique: false });
      store.createIndex('education', 'education', { unique: false });
    };
  }

function getObjectStore(store_name, mode) {
    let tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

export function addPublication(person) {
    console.log("addPublication arguments:", arguments);
    let obj = { name: person.name, education: person.education };
    
    let store = getObjectStore(DB_STORE_NAME, 'readwrite');
    let req;
    try {
        req = store.add(obj);
    } catch (e) {
        if (e.name == 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
                                "use Firefox");
        throw e;
    }
    req.onsuccess = function (evt) {
        console.log("Insertion in DB successful");
        
        
    };
    req.onerror = function() {
        console.error("addPublication error", this.error);
        
    };
}
