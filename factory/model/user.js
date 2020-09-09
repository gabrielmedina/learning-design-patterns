class User {
  constructor({ name, email, password, type = {} }) {
    this.name = name
    this.email = email
    this.password = password
    this.type = type
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }

  getTypeValue() {
    return this.type.value
  }

  getTypeDescription() {
    return this.type.description
  }
}

class AdminUser extends User {
  constructor(user) {
    super(user)
    this.type = {
      value: user.type,
      description: 'admin'
    }
  }
}

class ExecutiveUser extends User {
  constructor(user) {
    super(user)
    this.type = {
      value: user.type,
      description: 'executive'
    }
  }
}

class OperatorUser extends User {
  constructor(user) {
    super(user)
    this.type = {
      value: user.type,
      description: 'operator'
    }
  }
}

class PublicUser extends User {
  constructor(user) {
    super(user)
    this.type = {
      value: user.type,
      description: 'public'
    }
  }
}

export { AdminUser, ExecutiveUser, OperatorUser, PublicUser }