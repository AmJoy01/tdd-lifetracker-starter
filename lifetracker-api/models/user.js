const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")
const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
    static makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            createdAt: user.created_at
        }
    }

    //Login 
    static async login(credentials) {
        const requiredFields = ["email", "password"]
        requiredFields.forEach((property) => {
            if (!credentials.hasOwnProperty(property)) {
                throw new BadRequestError(`Missing ${property} in request body.`)
            }
        })

        const user = await User.fetchUserByEmail(credentials.email)
        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid) {
                return User.makePublicUser(user)
            }
        }
    }

    // Register
    static async register(credentials) {
        const requiredFields = ["password", "firstName", "lastName", "email", "username"]

        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }

        })

        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid email.")
        }

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`A user already exists with email: ${credentials.email}`)
        }
        const existingUsername = await User.fetchUserByUsername(credentials.username)
        if (existingUsername) {
            throw new BadRequestError(`A user already exists with username: ${credentials.username}`)
        }
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        console.log(hashedPassword)
        const lowercasedEmail = credentials.email.toLowerCase()

        const result = await db.query(
            `
            INSERT INTO users (
            username,
            password,
            first_name,
            last_name,
            email
            )
            VALUES($1, $2, $3, $4, $5)
            RETURNING id,
            username,
            email, 
            first_name AS "firstName",
            last_name AS "lastName",
            created_at;
        `, [credentials.username, hashedPassword,
        credentials.firstName, credentials.lastName,
            lowercasedEmail]
        )

        const user = result.rows[0]
        return user
    }


    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByUsername(username) {
        if (!username) {
            throw new BadRequestError("No username provided")
        }

        const query = `SELECT * FROM users WHERE username = $1`
        const result = await db.query(query, [username])
        const user = result.rows[0]

        return user
    }
}

module.exports = User