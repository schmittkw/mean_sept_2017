const Notes = require('../controllers/notes');
const path = require('path');


module.exports = function(app){
    app.get('/notes', Notes.index);
    app.post('/notes', Notes.create);
    app.delete('/notes/:id', Notes.destroy);


    // Always include in routes (saying "if current route doesn't match any of the above routes then send up to frontend so angular can potentially render a component.")
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}