const { databaseQuery } = require("../middlewares/databaseQuery")

const Company = require("../models/Company")

module.exports.getCompanyByIdService = async (company_id) => {
    try {
        const [ result ] = (await databaseQuery(`SELECT * FROM companies WHERE id = ${company_id}`)).rows

        const company = new Company(result.id, result.company_name, result.company_email, result.created_at, result.updated_at, result.archived)
        
        return {
            result: JSON.stringify({ result: company }),
            statusCode: 200
        }
    } catch (error) {
        return {
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}