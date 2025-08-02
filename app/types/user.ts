
export type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
  age: number;
  gender: string;
  address: string;
  role: number | null;
  refreshToken?: string ;
  createdAt?: Date ;
  updatedAt?: Date ;
  createdBy?: string ;
  updatedBy?: string ;
};

