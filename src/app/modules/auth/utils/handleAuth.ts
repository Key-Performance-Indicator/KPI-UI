export const handleRegister=async(username:string,password:string)=>{
    const loginData=await fetch('http://localhost:3001/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:username,
            password
        })
    })
    const data=await loginData.json()
    if(data?.message==='success'){

        localStorage.setItem('auth',data.jwt)
        return data
    }

}

export const handleLogin=async(username:string,password:string)=>{  
    // const loginData=await fetch('http://localhost:3001/login',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         email:username,
    //         password
    //     })
    // })
    //  const data=await loginData.json()
    // data.message = 'success';
    // if(data?.message==='success'){

    //     localStorage.setItem('auth',data.jwt)
    //     return data
    // }
    const expectedEmail = 'yusuf@gmail.com';
    const expectedPassword = '1234';

    if (username === expectedEmail && password === expectedPassword) {
        const data = { message: 'success', jwt: 'your_generated_jwt_here' }; // Gerçek bir JWT burada olmalıdır
        localStorage.setItem('auth', data.jwt);
        return data;
    } else {
    return { error: 'The login details are incorrect' };
  }

}