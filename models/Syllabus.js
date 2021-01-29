const mongoose = require('mongoose');
const SyllabusSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    subjects: { type: Array, required: true }
},{ collection: 'syllabus' });
module.exports = Syllabus = mongoose.model('syllabus', SyllabusSchema);
