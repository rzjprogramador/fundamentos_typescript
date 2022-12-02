interface ArgsUser {
  primeiroNome: string
  complementoNome: string
}

export default class User01 {
  public readonly id?: string
  static default: any

  constructor(
    private readonly args?: ArgsUser,
  ) { }

  async getNomeCompleto() {
    return await `${this.args.primeiroNome} ${this.args.complementoNome}`
  }

}

