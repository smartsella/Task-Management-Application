import mongoose from "mongoose"

const mongo = ()=>{
    try {
        const MongoURL = mongoose.connect(process.env.MongoURL)
        console.log("Succefully conected for DB");
        
    } catch (error) {
        console.log("Error msg for",error);
        
    }
    
    
}
export default mongo