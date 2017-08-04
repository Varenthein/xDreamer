/************************** DB SERVICES ********************************/

//set up Dexie
var Dexie = require('Dexie')
Dexie.debug = true;
export var _DB = {};

//load db starting structure
import { characters, chapters, data, tables } from '@/assets/db/db.js'

/************** DB Service: Database ****************/

export function dbService() {

  var self = this;

  /* CHECK DB EXISTANCE */

  this.dbExists = function() {

    var existPromise = new Promise((resolve, reject) => {

      Dexie.exists("dreamerDB").then((exists) => {
        if(exists) resolve()
        else return reject();
      }).catch(function (error) {
        reject();
    })

    });

    return existPromise;
  }

  /* PREPARE DB */

  this.prepareDB = function() {

    var preparePromise = new Promise((resolve, reject) => {
        self.dbExists().then(() => {
          _DB = new Dexie("dreamerDB");
          _DB.version(1).stores(tables);
          return resolve();
        }).catch(function(){

            var _DB = new Dexie('dreamerDB');
            _DB.version(1).stores(tables);

            /* save default structure to db */
            _DB.open().then(() => {

              Promise.all([
                _DB.characters.bulkAdd(characters),
                _DB.data.bulkAdd(data),
                _DB.chapters.bulkAdd(chapters)
              ]).then(() => {
                  resolve();
                }, () => { reject("Couldn't set up tables...");});

            }, () => {
              reject("Couldn't open database...");
            });


        })


    });

    return preparePromise;
  }

}


/************** DB Service: Chapters ****************/

export function chapterService() {

  var self = this;

  /* GET CHAPTER BY ID */

  this.getById = function(chapterId, callback) {

        return _DB.chapters.where('id').equals(parseInt(chapterId)).first(callback);

  }

}

/************** DB Service: Data ****************/

export function dataService() {

  var self = this;

  /* GET VARIABLE BY ID */

  this.getById = function(varId, callback) {
        return _DB.data.where('id').equals(parseInt(varId)).first(callback);
  }

  /* GET VARIABLE BY NAME  */

  this.getVar = function(key, callback) {
        return _DB.data.where('key').equals(key).first(callback);
  }


}
