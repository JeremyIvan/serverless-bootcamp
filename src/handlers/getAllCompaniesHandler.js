const { getAllCompaniesService } = require('../services/getAllCompaniesService')

module.exports.getAllCompanies = async (event, context) => {
    const { result, statusCode } = await getAllCompaniesService()

    return {
        body: result,
        statusCode: statusCode
    }
}