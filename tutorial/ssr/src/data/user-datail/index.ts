import { userData } from "./data";

interface Address {
  zipCode: string;
  prefecture: string;
}

export interface PhoneNumber {
  id: string;
  type: string;
  number: string;
}

export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: Address;
  phoneNumbers: Array<PhoneNumber>;
}

export function getUserDetailData(id: string): Users | undefined {
  return userData.find((user) => user.id === id)
}
