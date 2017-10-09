let countries = [];
let id = 1;


module.exports = {
    read: (req, res) => {
        // axios.get(`https://restcountries.eu/rest/v2/name/${name}
        // `).then(response => {
        //     let answer = response.data;
        //     return answer;
        // })

    res.status(200).send({
            name: 'Thailand',
            code: '3453',
            lang: 'sdfg'
        })



    },
    delete: (req, res) => {

    }
}

