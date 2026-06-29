


const Validate =  (email,password) => {

    const emailValidate =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    console.log("email",email.password)

    if(!emailValidate) return "Email is not valid";
    if(!passwordValidate) return "password is not valid";

    return null;
}

export default Validate;