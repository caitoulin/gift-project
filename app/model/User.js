module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        username: String,
        password: String,
        email: String,
        isAdmin: {
            type: Boolean,
            default: false,
        },
    });
    return mongoose.model('User', userSchema, 'user');
};
