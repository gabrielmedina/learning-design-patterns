import USER_TYPES from '../constants/user'
import { AdminUser, ExecutiveUser, OperatorUser, PublicUser } from './user'

const INITIAL_USER = {
  name: 'User',
  email: 'user@user.com',
  password: 'senha'
}

function checkBasicAttributes(user) {
  expect(user.getName()).toEqual(INITIAL_USER.name)
  expect(user.getEmail()).toEqual(INITIAL_USER.email)
  expect(user.getPassword()).toEqual(INITIAL_USER.password)
}

describe('Testes para o modelo de usuários', () => {
  it('Deve criar um usuário do tipo Admin', () => {
    const user = new AdminUser({
      ...INITIAL_USER,
      type: USER_TYPES.ADMIN
    })

    checkBasicAttributes(user)
    expect(user.getTypeValue()).toEqual(USER_TYPES.ADMIN)
    expect(user.getTypeDescription()).toEqual('admin')
  })

  it('Deve criar um usuário do tipo Executive', () => {
    const user = new ExecutiveUser({
      ...INITIAL_USER,
      type: USER_TYPES.EXECUTIVE
    })

    checkBasicAttributes(user)
    expect(user.getTypeValue()).toEqual(USER_TYPES.EXECUTIVE)
    expect(user.getTypeDescription()).toEqual('executive')
  })

  it('Deve criar um usuário do tipo Operator', () => {
    const user = new OperatorUser({
      ...INITIAL_USER,
      type: USER_TYPES.OPERATOR
    })

    checkBasicAttributes(user)
    expect(user.getTypeValue()).toEqual(USER_TYPES.OPERATOR)
    expect(user.getTypeDescription()).toEqual('operator')
  })

  it('Deve criar um usuário do tipo Public', () => {
    const user = new PublicUser({
      ...INITIAL_USER,
      type: USER_TYPES.PUBLIC
    })

    checkBasicAttributes(user)
    expect(user.getTypeValue()).toEqual(USER_TYPES.PUBLIC)
    expect(user.getTypeDescription()).toEqual('public')
  })
})