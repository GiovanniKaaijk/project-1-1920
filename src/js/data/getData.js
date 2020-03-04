const createData =  () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    

    const config = {
        Authorization: `Bearer ${secret}`
    };

    return {
        getData: async (query) => {
            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&sort=title`;
            let data = await fetch(url, config)
                .then(response => {                
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
                return data;
        },
        getPageData:  async (query, pageNumber) => {
            let page = pageNumber
            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&page=${page}`;
            let data = await fetch(url, config)
                .then(response => {
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
            return data;
        },
        
        
    }
}

export {createData}
