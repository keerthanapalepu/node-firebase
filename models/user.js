class Users {
    constructor(id, age, alias, country, emailAddress, firstConversation, gender, name, pronouns, minitherapies) {
        this.id = id; // represents the id generated by the firestore
        this.age = age;
        this.alias = alias;
        this.country = country;
        this.emailAddress = emailAddress;
        this.firstConversation = firstConversation;
        this.gender = gender;
        this.name = name;
        this.pronouns = pronouns;
        this.minitherapies = { "minitherapies": minitherapies };
    }
}

export default Users;