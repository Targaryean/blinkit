import bcrypt from 'bcrypt';

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err);
            }
            resolve(hash);
        });
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}

module.exports = { hashPassword, comparePassword }