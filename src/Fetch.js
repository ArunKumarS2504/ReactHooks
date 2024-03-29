

const fetchApi = ()=>{
    fetch('https://restcountries.com/v3.1/all')
       .then(response=>{
        if(!response.ok){
            throw new console.error("not ok");
        }
        return response.json();
       })
       .then(data=>{
        const info = data.map(country=> ({
            language:country.language,
            population:country.population

        }));
        console.log(info)
       })
       .catch(error=>{
        console.error(error)
       });

       return(
        <div>
            <h1>Data :</h1>
        </div>
       )
}

export default fetchApi;