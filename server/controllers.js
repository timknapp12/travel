let countries = [];
let id = 1;


module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++;
        var newCountry = Object.assign({}, req.body);
        countries.push(newCountry);
        res.status(200).send(countries)
    },

    read: (req, res) => {
        res.status(200).send(countries);
    },
    update: (req, res) => {
        countries.map(e => {
            if (+req.params.id === e.id) {
                e = Object.assign(e, req.body)
            }
            return e;
        })
        res.status(200).send(countries);
    },

    delete: (req, res) => {
        countries = countries.filter(e => {
            return +req.params.id !== e.id
        })
        res.status(200).send(countries);
    }
}

