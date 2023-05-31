import mongoose from "mongoose";
import app from "./app";
import config from './config'

async function management() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database connection succesfull`)
        app.listen(config.port, () => {
            console.log(`University Management listening on port ${config.port}`)
          })
    }
    catch (err) {
        console.log('Failed to connect DB', err)
    }
}
management()