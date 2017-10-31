const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class NotesController {    
    create(req, res) {
        Note.create(req.body, (err, note) => {
            if(err){
                return res.json(err);
            }
            return res.json(note);
        })
    }

    // index function for just displaying all the notes from DB
    // only need the .exec when chaining other notations between query object and the callbacks
    // Note.find({}, (err, notes) => {
    index(req,res){        
        Note.find({}).sort('-createdAt').exec((err, notes) => {
            if(err) {
                return res.json(err);
            }
            return res.json(notes);
        })
    }
    destroy(req, res){
        Note.findByIdAndRemove(req.params.id, (err, note) => {
            if(err){
                return res.json(err);
            }
            return res.json({
                'success': 'successfully deleted Appointment'
            });
        })
        
	}
}

module.exports = new NotesController();