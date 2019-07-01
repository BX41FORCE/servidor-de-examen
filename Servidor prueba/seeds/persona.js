exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('persona').del()
        .then(function() {
            // Inserts seed entries
            return knex('persona').insert([{
                    nombre: 'Andrea',
                    apellido: 'Cordova'
                },
                {
                    nombre: 'Hector',
                    apellido: 'Chavez'
                },
                {
                    nombre: 'Luis',
                    apellido: 'Fernandez'
                }
            ]);
        });
};