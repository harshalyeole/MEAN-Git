// Custom include
const Mongoose = require(`mongoose`);

const Promise = require(`bluebird`);
// Apply promise
Promise.promisifyAll(Mongoose);

// GitHubUser schema
const GitHubUserSchema = Mongoose.Schema({
    name: {
        type: String,
    },
    login: {
        type: String,
        unique: true
    },
    bio: {
        type: String,
    },
    location: {
        type: String,
    },
    followers: {
        type: Number,
    },
    following: {
        type: Number,
    },
    public_repos: {
        type: Number,
    },
    html_url: {
        type: String,
    },
    avatar_url: {
        type: String,
    }
}, { timestamps: true });


// GitHubUser Model
const GitHubUser = Mongoose.model(`GitHubUser`, GitHubUserSchema);

/**
 * Method to create new githubuser.
 * @param newGitHubUser
 * @param callback
 */
GitHubUser.createGitHubUser = (newGitHubUser, callback) => {
    GitHubUser.create(newGitHubUser, callback);
};

/**
 * Method to create new githubuser.
 * @param newGitHubUser
 * @param callback
 */
GitHubUser.getGitHubUser = (callback) => {
    GitHubUser.find({}).sort({ followers: -1 }).exec(callback);
};


// Export GitHubUser Model
module.exports = GitHubUser;
