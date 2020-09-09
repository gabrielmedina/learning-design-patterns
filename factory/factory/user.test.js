import USER_TYPES from '../constants/user'
import userFactory from './user'
import { AdminUser, ExecutiveUser, OperatorUser, PublicUser } from '../model/user'

const INITIAL_USER = {
  name: 'User',
  email: 'user@user.com',
  password: 'senha'
}

describe('Testes para a fábrica de usuários', () => {
  it('Deve criar um usuário do tipo Admin', () => {
    const user = {
      ...INITIAL_USER,
      type: USER_TYPES.ADMIN
    }

    const factoredUser = userFactory.create(user)

    expect(factoredUser instanceof AdminUser).toEqual(true)
  })

  it('Deve criar um usuário do tipo Executive', () => {
    const user = {
      ...INITIAL_USER,
      type: USER_TYPES.EXECUTIVE
    }

    const factoredUser = userFactory.create(user)

    expect(factoredUser instanceof ExecutiveUser).toEqual(true)
  })

  it('Deve criar um usuário do tipo Operator', () => {
    const user = {
      ...INITIAL_USER,
      type: USER_TYPES.OPERATOR
    }

    const factoredUser = userFactory.create(user)

    expect(factoredUser instanceof OperatorUser).toEqual(true)
  })

  it('Deve criar um usuário do tipo Public', () => {
    const user = {
      ...INITIAL_USER,
      type: USER_TYPES.PUBLIC
    }

    const factoredUser = userFactory.create(user)

    expect(factoredUser instanceof PublicUser).toEqual(true)
  })
})