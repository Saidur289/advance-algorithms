const dataCache = new Map()
const expensiveTask = (id) =>{
    return {
        id: id,
        data: `some task of ${id}`,
        timestamp: new Date().getTime()
    }
}
const getData = (id) => {
    if(dataCache.has(id)){
        console.log("cache hit", id); 
        return dataCache.get(id)
    }
    console.log("missed cache", id);
    const data = expensiveTask(id)
    dataCache.set(id, data)
    return data
}
console.log(dataCache);
console.log(getData(123));
console.log(getData(123));
console.log(dataCache);