import { createClient } from "redis";


const redisClient = createClient({
    url : 'redis://localhost:6379'
})

redisClient.on('error' ,(error)=>{
    console.error("Redis client error" , error);
} )


export async function ConnectRedis() {


    await redisClient.connect();
    console.log('Redis connected Successfully')
}

export default redisClient;