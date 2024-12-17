const pelicula=[
    {
        id: '1',
        titulo: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        anio: 1994,
        genero: 'Drama'
    },
    {
        id: '2',
        titulo: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        anio: 1994,
        genero: 'Drama'
    },
    {
        id: '3',
        titulo: 'The Godfather',
        director: 'Francis Ford Coppola',
        anio: 1972,
        genero: 'Crime'
    }
    ,{
        id: '4',
        titulo: 'The Dark Knight',
        director: 'Christopher Nolan',
        anio: 2008,
        genero: 'Crime'
    },
    {
        id: '5',
        titulo: '12 Angry Men',
        director: 'Ralph Waldo Emerson',
        anio: 1957,
        genero: 'Drama'
    }
]

// Función para obtener una película por ID

function getPeliById(id){
    return pelicula.find(peli=>peli.id===id)
}

// Función para agregar una película

function addPeli(peli){
    pelicula.push(peli)
}

// Función para actualizar una película

function updatePeli(id, updatedPeli){
    const index = pelicula.findIndex(peli=>peli.id===id)
    if(index>-1){
        pelicula[index]=updatedPeli
    }
}

// Función para eliminar una película

function deletePeli(id){
    const index = pelicula.findIndex(peli=>peli.id===id)
    if(index>-1){
        pelicula.splice(index,1)
    }
}

module.export={
    getPeliById,
    addPeli,
    updatePeli,
    deletePeli,
}