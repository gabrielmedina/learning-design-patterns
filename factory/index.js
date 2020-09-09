import USER_TYPES from './constants/user.js'
import userFactory from './factory/user.js'

try {
  const user = userFactory.create({
    name: 'Medina',
    email: 'medina@gmail.com',
    password: 'senha',
    type: USER_TYPES.ADMIN
  })
  console.log(user.getTypeValue())
} catch (error) {
  console.error(error.message)
}

try {
  const user = userFactory.create({
    name: 'Carlos',
    email: 'carlos@gmail.com',
    password: 'senha',
    type: USER_TYPES.OPERATOR
  })
  console.log(user)
} catch (error) {
  console.error(error.message)
}

try {
  const user = userFactory.create({
    name: 'José',
    email: 'jose@gmail.com',
    password: 'senha',
    type: USER_TYPES.EXECUTIVE
  })
  console.log(user)
} catch (error) {
  console.error(error.message)
}

try {
  const user = userFactory.create({
    name: 'Maria',
    email: 'maria@gmail.com',
    password: 'senha',
    type: USER_TYPES.PUBLIC
  })
  console.log(user)
} catch (error) {
  console.error(error.message)
}

try {
  const user = userFactory.create({
    name: 'Mário',
    email: 'mario@gmail.com',
    password: 'senha',
    type: 10
  })
  console.log(user)
} catch (error) {
  console.error(error.message)
}