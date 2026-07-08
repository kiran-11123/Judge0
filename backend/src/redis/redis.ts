import { createClient } from "redis";


const redisClient_connection = createClient({
    url : 'redis://localhost:6379'
})

redisClient_connection.on('error' ,(error)=>{
    console.error("Redis client error" , error);
} )


export async function ConnectRedis() {


    await redisClient_connection.connect();
    console.log('Redis connected Successfully')
}

export default redisClient_connection;