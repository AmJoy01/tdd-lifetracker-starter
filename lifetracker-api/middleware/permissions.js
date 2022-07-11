const Nutrition = require("../models/nutrition")
const { BadRequestError, ForbiddenError } = require("../utils/errors")

const authedUserOwnsNutrition = async (req, res, next) => {
    try {
        const { user } = res.locals
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)

        if (nutrition.userEmail !== user.email) {
            throw new ForbiddenError("User is not allowed to update other users' nutrition.")
        }

        res.locals.nutrition = nutrition

        return next()
    } catch (error) {
        return next(error)
    }
}

module.exports = authedUserOwnsNutrition
