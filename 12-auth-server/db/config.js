const mongoose = require("mongoose");


const dbConecction = async() => {

    try{

        await mongoose.connect( process.env.BD_CNN);

        console.log('DB Online');

    } catch(error){
        console.log.apply(error);
        throw new Error('Error a la hora de inicializar BD');
    }

    
}

module.exports = {
    dbConecction
}