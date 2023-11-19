export const handleRegister = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  passwordConfirm: string
) => {
  const loginData = await fetch('https://localhost:7105/Users/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      password,
      passwordConfirm
    }),
  })
  const data = await loginData.json()

  return data
}

export const handleLogin = async (username: string, password: string) => {
  const loginData = await fetch('https://localhost:7105/Users/Authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  const data = await loginData.json()
  // data.message = 'success';

  localStorage.setItem('data', data)
  console.log(data)
  // localStorage.setItem('auth',data.jwt)
  return data

  // const expectedEmail = 'yusuf@gmail.com';
  // const expectedPassword = '1234';
}

export const addUser = async (
  firstName       : string,
  lastName        : string,
  username        : string,
  password        : string,
  passwordConfirm : string
  ) => {
    console.log('I\'m in addUser :', firstName, lastName, username);

  const userData = await fetch('https://localhost:7105/Users/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      password,
      passwordConfirm
    }),
  })
  const data = await userData.json()

  // localStorage.setItem('data', data)
  console.log(data)
  return data
}
