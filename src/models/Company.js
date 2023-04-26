class Company {
    constructor(id, company_name, company_email, created_at, modified_at, archived) {
        this.id = id
        this.company_name = company_name
        this.company_email = company_email
        this.created_at = created_at
        this.modified_at = modified_at
        this.archived = archived
    }

    get getCompanyName() {
        return this.company_name
    }

    get getCompanyEmail() {
        return this.company_email
    }

    get getCompanyId() {
        return this.id
    }

    get getCreatedAt() {
        return this.created_at
    }

    get getMofifiedAt() {
        return this.modified_at
    }

    get getArchived() {
        return this.archived
    }

    set setCompanyName(company_name) {
        this.company_name = company_name
    }

    set setCompanyEmail(company_email) {
        this.company_email = company_email
    }
}

module.exports = Company