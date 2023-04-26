const { databaseQuery } = require("../middlewares/databaseQuery")

module.exports.updateCompanyByIdService = async (company_id, company_name, company_email) => {
    try {
        await databaseQuery(`UPDATE companies SET company_name = '${company_name}', company_email = '${company_email}', modified_at = CURRENT_TIMESTAMP WHERE id = ${company_id}`)
        
        return {
            result: null,
            statusCode: 204
        }
    } catch (error) {
        return {
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}