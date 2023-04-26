const { databaseQuery } = require("../middlewares/databaseQuery")

const Company = require("../models/Company")

module.exports.getAllCompaniesService = async () => {
    try {
        const result = await databaseQuery(`SELECT * FROM companies WHERE archived = false`)

        const companies = result.rows.map(item => {
            const company = new Company(item.id, item.company_name, item.company_email, item.created_at, item.updated_at, item.archived)

            return company
        })
        
        return {
            result: JSON.stringify({ result: companies }),
            statusCode: 200
        }
    } catch (error) {
        return {
            body: JSON.stringify({ message: error }),
            statusCode: 400
        }
    }
}