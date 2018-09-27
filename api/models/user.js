// Custom include
const Mongoose = require(`mongoose`);
const Bcrypt = require(`bcryptjs`);
const ObjectId = Mongoose.Types.ObjectId;
const stringConstant = require(`../helpers/success-constants`);
const Promise = require(`bluebird`);
const escapeStringRegexp = require(`escape-string-regexp`);

// Apply promise
Promise.promisifyAll(Mongoose);

// User schema
const UserSchema = Mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        email: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
        default: stringConstant.PROFILE_IMAGE_URL
    }
}, { timestamps: true });

UserSchema.pre(`save`, function (next) {
    const self = this;
    if (this.password && this.isModified(`password`)) {
        Bcrypt.genSalt(10, function (err, salt) {
            Bcrypt.hash(self.password, salt, function (err, hash) {
                self.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.set(`toJSON`, { getters: true });
UserSchema.set(`toObject`, { getters: true });

// User Model
const User = Mongoose.model(`User`, UserSchema);

/**
 * Method to create new user.
 * @param newUser
 * @param callback
 */
User.createUser = (newUser, callback) => {
    User.create(newUser, callback);
};

/**
 * Method to get user by id.
 * @param id
 * @param callback
 */
User.getUserById = (id, callback) => {
    User.findById(id, callback);
};

/**
 * Method to get user by email.
 * @param email
 * @param callback
 */
User.getUserByEmail = (email, callback) => {
    User.findOne({ email }, callback);
};

//Get user by email and status
User.getEmail = (email, callback) => {
    User.findOne({ 'basic.email': email }, callback);
};

/**
 * Method to compare password.
 * @param candidatePassword
 * @param hash
 * @param callback
 */
User.comparePassword = (candidatePassword, hash, callback) => {
    Bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) {
            throw err;
        }
        callback(null, isMatch);
    });
};



// Export User Model
module.exports = User;
