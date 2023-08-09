const REPOSITORIES_TYPES = {
    UserRepository: Symbol.for("UserRepository"),
    AccountRepository: Symbol.for("AccountRepository"),
    RoleRepository: Symbol.for("RoleRepository")
};

const SERVICES_TYPES = {
    UserService: Symbol.for("UserService")
};

export { REPOSITORIES_TYPES, SERVICES_TYPES };