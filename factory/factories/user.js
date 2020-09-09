import USER_TYPES from '../constants/user.js'
import { AdminUser, OperatorUser, ExecutiveUser, PublicUser } from '../models/user.js'

class UserFactory {
  create(user) {
    switch (user.type) {
      case USER_TYPES.ADMIN:
        return new AdminUser(user)

      case USER_TYPES.OPERATOR:
        return new OperatorUser(user)

      case USER_TYPES.EXECUTIVE:
        return new ExecutiveUser(user)

      case USER_TYPES.PUBLIC:
        return new PublicUser(user)

      default:
        throw new Error('O tipo de usuário informado não é válido.');
    }
  }
}

const userFactory = new UserFactory

export default userFactory