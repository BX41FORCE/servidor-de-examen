exports.up = function(knex, Promise) {
    return knex.schema.createTable('persona', function(t) {

        // Primary Key
        t.bigIncrements('id');

        // Data
        t.string('nombre').notNullable();
        t.string('apellido').notNullable();

    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('persona');
};