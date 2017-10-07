let countries = [];
let id = 1;


module.exports = {
    read: axios.get(`https://restcountries.eu/rest/v2/name/{name}
    `).then(response => {
        let answer = response.data;
        return answer;
    })
    (req, res) => {

    },
    delete: (req, res) => {

    }
}