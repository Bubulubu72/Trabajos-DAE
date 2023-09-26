const axios = require('axios');

module.exports = {
    search: async (req, res) => {
        const query = req.query.queryInput;
        //res.send('all good')
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);
            //console.log(response.data);
            const news = response.data.articles;
            res.render('texto', { news });
        } catch (error) {
            console.error(error);
            res.status(500).send('No se encontraron noticias de este tema.');
        }
    }
}