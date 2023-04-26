const databaseQuery = require("../middlewares/databaseQuery").databaseQuery

const Company = require("../models/Company")

module.exports.insertCompanyService = async(company_name, company_email) => {
    const company = new Company(company_name, company_email, null, null, false)

    try {
        const result = await databaseQuery(`INSERT INTO companies (company_name, company_email) VALUES ('${company.getCompanyName}', '${company.getCompanyEmail}')`)

        return {
            result: JSON.stringify(result),
            statusCode: 200
        }
    } catch(error) {
        return {
            result: JSON.stringify({ message: error }),
            statusCode: 500
        }
    }
}