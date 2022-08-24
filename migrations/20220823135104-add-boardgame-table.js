"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "boardgame",
    {
      columns: {
        id: {
          type: "int",
          primaryKey: true,
          autoIncrement: true,
          notnull: true,
        },
        price: {
          type: "int",
          notNull: true,
        },
        type: {
          type: "string",
          notNull: true,
        },
        exchange: {
          type: "string",
          notNull: false,
        },
        length: {
          type: "string",
          notNull: true,
        },
        difficulty: {
          type: "string",
          notNull: true,
        },
        condition: {
          type: "string",
          notNull: true,
        },
        description: {
          type: "string",
          notNull: false,
        },
        imgUrl: {
          type: "string",
          notNull: false,
        },
        user_id: {
          type: "int",
          notnull: true,
          foreignKey: {
            name: "user_id",
            table: "user",
            mapping: "id",
            rules: {
              onDelete: "CASCADE",
              onUpdate: "RESTRICT",
            },
          },
        },
      },
      ifNotExists: true,
    },
    callback
  );
};

exports.down = function (db, callback) {
  return null;
};

exports._meta = {
  version: 1,
};
