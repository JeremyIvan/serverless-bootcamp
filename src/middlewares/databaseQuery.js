const { client } = require("../database")

module.exports.databaseQuery = async(query) => {
    await client.connect()
    const result = await client.query(query)
    await client.clean()

    return result
}