const { updateCompanyByIdService } = require("../services/updateCompanyByIdService")

module.exports.updateCompanyById = async (event, context) => {
    const { company_id } = event.pathParameters
    const { company_name, company_email} = JSON.parse(event.body)

    const { result, statusCode } = await updateCompanyByIdService(company_id, company_name, company_email)
    
    return {
        result: result ? JSON.stringify({ result: result }) : null,
        statusCode: statusCode
    }
}