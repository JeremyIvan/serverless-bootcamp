const { deleteCompanyByIdService } = require("../services/deleteCompanyByIdService")

module.exports.deleteCompanyById = async (event, context) => {
    const { company_id } = event.pathParameters
  
    const { result, statusCode } = deleteCompanyByIdService(company_id)
    
    return {
      body: result,
      statusCode: statusCode
    }
}