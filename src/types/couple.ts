export interface Person {
  name: string;
  nickname: string;
  father: string;
  mother: string;
  photo: string;
}

export interface Couple {
  groom: Person;
  bride: Person;
}
