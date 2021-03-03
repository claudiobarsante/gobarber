export class CurrentUser {
  constructor(
    public nickname: string,
    public roles: string,
    public user_id: string,
    public user_name: string,
  ) {}
}
//typescript
//como os parâmetros do contrutor estão como públicos,
//não precisa criar as  propriedades no corpo da classe
