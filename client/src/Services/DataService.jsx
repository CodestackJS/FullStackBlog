//This folder is to store our helper functions and methods
let userData = {}
//helper function to check out token.
const checkToken = () => {
    let result = false;
    let lsData = localStorage.getItem("Token");
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//helper function or method to createAccount, async and await
//fetch() json(), stringify
const createAccount = async (createduser) =>
{
    const result = await fetch('http://localhost:5156/api/User/AddUsers',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(createduser)
    })
    if(!result.ok)
    {
        const message = `Yo yo you have an Error Check your code!${result.status}`
        throw new Error(message);
    }
    let data = await result.json();
    console.log(data);
    
}
const login = async (loginUser) =>
    {
        const result = await fetch("http://localhost:5156/api/User/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser)
        })
        if(!result.ok){
            const message = `Yo yo you have an Error Check your Code! ${result.status}`
            throw new Error(message);
        }
        let data= await result.json();
        console.log(data);
        return data;
    }
    
    const GetLoggedInUser = async  (username) => {
        let result = await fetch(`http://localhost:5156/api/User/GetUserByUsername/${username}`)
        userData = await result.json();
        console.log(userData);

    }


    const LoggedInData = () =>
    {
        return userData;
    }

    
    export {checkToken, createAccount, login, GetLoggedInUser, LoggedInData}