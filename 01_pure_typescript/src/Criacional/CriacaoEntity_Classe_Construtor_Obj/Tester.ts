import User01 from '.'

const reinaldo = { primeiroNome: 'Reinaldo', complementoNome: 'Junior 2 ' }
const renata = { primeiroNome: 'Renata', complementoNome: 'Pereira 1 ' }

const makeUser01 = new User01

// const instance1 = makeUser01(reinaldo)
// const instance2 = makeUser01(renata)

const instance1 = new User01(reinaldo)
const instance2 = new User01(renata)

instance1.getNomeCompleto().then(fooData => console.log(fooData))
instance2.getNomeCompleto().then(fooData => console.log(fooData))
