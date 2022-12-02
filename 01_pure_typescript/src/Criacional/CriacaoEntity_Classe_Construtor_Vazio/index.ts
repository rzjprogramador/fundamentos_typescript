interface ArgsUser {
  primeiroNome: string
  complementoNome: string
  getNomeCompleto?(): Promise<string>
  // getNomeCompleto?(): Promise<unknown>
}

export default class User02 {
  public readonly id?: string
  public readonly args: ArgsUser

  constructor() { }

  async create(args: ArgsUser) {
    Object.assign(this, args)
    return await args

    // const nome = this.args.primeiroNome
    // const complementoNome = this.args.complementoNome

    // return await {
    //   nome, complementoNome
    // }

  }

  async getNomeCompleto() {
    return await `${this.args.primeiroNome} ${this.args.complementoNome}`
  }

  // getNomeCompleto() {
  //   return `${this.args.primeiroNome} ${this.args.complementoNome}`
  // }

}

