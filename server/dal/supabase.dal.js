import client from "../db/supabase.js";


export async function createMap(mapData){
    try {
        const {data, error} = await client.from("map").insert(mapData).select().single();
        if (error) throw error;
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export async function getMap(){
    try {
        const {data, error} = await client.from("map").select("*");
        if (error) throw error;
    } catch (error) {
        console.log(error);
        throw error;  
    };
};
