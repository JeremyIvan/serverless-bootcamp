const { databaseQuery } = require("../middlewares/databaseQuery")

module.exports.archiveCompanyByIdService = async (company_id) => {
    try {
        const result = await databaseQuery(`UPDATE companies SET archived = true, modified_at = CURRENT_TIMESTAMP WHERE id = ${company_id}`)

        return {
            result: JSON.stringify({ result: result }),
            statusCode: 200
        }
    } catch (error) {
        return {
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}