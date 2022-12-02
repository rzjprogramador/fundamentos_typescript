import User02 from './'

const reinaldo = { primeiroNome: 'Reinaldo', complementoNome: 'Junior 2 ' }
const renata = { primeiroNome: 'Renata', complementoNome: 'Pereira 1 ' }

const makeUser01 = new User02

const instance1 = makeUser01.create(reinaldo)
const instance2 = makeUser01.create(renata)

// const instance1 = new User01(reinaldo)
// const instance2 = new User01(renata)

instance1.then(data => console.log(data))
instance2.then(data => console.log(data))

// instance1.

// TODO NAO CONSIGO COLOCAR NO PROTO DO OBJ AINDA
instance1.getNomeCompleto().then((data) => console.log(data))
// instance2.getNomeCompleto().then(fooData => console.log(fooData))
