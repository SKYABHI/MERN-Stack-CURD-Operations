import mongoose from "mongoose";


const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-campbib-shard-00-00.7p7k8sf.mongodb.net:27017,ac-campbib-shard-00-01.7p7k8sf.mongodb.net:27017,ac-campbib-shard-00-02.7p7k8sf.mongodb.net:27017/?ssl=true&replicaSet=atlas-dll3qv-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect (URL, { useUnifiedTopology: true, useNewUrlParser:true });
        console.log('database connected successfully');
    } catch(error){
        console.log('Error while connecting with the data base', error);
    }
}

export default Connection;