import * as Yup from 'yup'

export interface ICreateUser {
    firstName       : string,
    lastName        : string,
    username        : string,
    password        : string,
    passwordConfirm : string
}

const createAddUserSchemas = [
    Yup.object({
        firstName: Yup.string().required().label('Ad gereklidir'),
        lastName: Yup.string().required().label('Soyadi gereklidir'),
        username: Yup.string().required().label('Kullanici adi gereklidir'),
        password: Yup.string().required().label('Sifre gereklidir'),
        passwordConfirm: Yup.string().required().label('Sifre onayi gereklidir'),
    }),
  ]
  
  const inits: ICreateUser = {
    firstName       : '',
    lastName        : '',
    username        : '',
    password        : '',
    passwordConfirm : ''
  }

  export {createAddUserSchemas, inits}
