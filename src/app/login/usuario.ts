export class Usuario {
  email?: string;
  password?: string;
}

export class INewUser {
  nickName?: string;
  fullName?: string;
  phone?: string;
  links?: INewLinksUser;
}

export class INewLinksUser {
  links?: string[];
}
