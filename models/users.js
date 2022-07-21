const userSchema = new Schema({
    mail: String,
    password: String,
    created: Date.now()
});

module.exports = userSchema;