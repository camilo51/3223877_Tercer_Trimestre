const getData = async (id = null) => {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos${id ? "/"+id : ''}`);
        const data = await result.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

getData(6)