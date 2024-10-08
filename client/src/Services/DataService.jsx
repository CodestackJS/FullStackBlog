import { json } from "react-router-dom";

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
    console.log(data,"create account method");
    
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
        console.log(data,"login method");
        return data;
    }
    
    const GetLoggedInUser = async  (username) => {
        let result = await fetch(`http://localhost:5156/api/User/GetUserByUsername/${username}`)
        userData = await result.json();
        console.log(userData,"getloggedinsuser method")
        localStorage.setItem("UserData", JSON.stringify(userData))
    }


    const LoggedInData = () =>
    {
        // if(!userData)
        // {
             userData = JSON.parse(localStorage.getItem("UserData"))
        // }
        return userData;
    }

    
    //We need a function to help us add our blog items
    const AddBlogItems = async (blogItems) => 
        {
            const result = await fetch("http://localhost:5156/api/Blog/AddBlogItems",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blogItems)
            })
            if(!result.ok)
            {
                const message = `Yo yo you have an Error Check your code!${result.status}`
                throw new Error(message);
            }
                let data = await result.json();
                console.log(data,"addblogItems method");
                return data;
        }
    
        //Can we make a generic function to handle
        const sendData = async (controller,endpoint,passedInData) => 
        {
            const result = await fetch(`http://localhost:5156/api/${controller}/${endpoint}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(passedInData)
            })
            if(!result.ok)
            {
                const message = `Yo yo you have an Error Check your code!${result.status}`
                throw new Error(message);
            }
                let data = await result.json();
                console.log(data,"sendData");
                return data;
        }
        ///function to help us get our blogitems
        const getBlogItems = async () =>
        {
            let result = await fetch("http://localhost:5156/api/blog/GetBlogItems")
           
           let data = await result.json();
             console.log(data,"from our getblogitems method")
             return data;
        }
    
        //create a function to hit our GetItemsByUserId 
        const GetItemsByUserId = async (UserId) => 
        {
            let result = await fetch(`http://localhost:5156/api/blog/GetItemsByUserId/${UserId}`)
           
            let data = await result.json();
              console.log(data,"from our getitemsbyuserid method")
              return data;
        }
    

        // Function to help us update our blog items
        const updateBlogItems = async (blogItems) =>
        {
            const result = await fetch(`http://localhost:5156/api/blog/UpdateBlogItems`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blogItems)
            })
            if(!result.ok)
            {
                const message = `Yo yo you have an Error Check your code!${result.status}`
                throw new Error(message);
            }
                let data = await result.json();
                console.log(data,"from our UpdateBlogItems");
                return data;
        }

        const getPublishedBlogItems = async () => {
            let result = await fetch("http://localhost:5156/api/blog/GetPublishedItems")
            let data = await result.json();
            return data;
        }
        
    
    
        export {checkToken,createAccount,login,GetLoggedInUser,LoggedInData,sendData,AddBlogItems,getBlogItems,GetItemsByUserId, updateBlogItems, getPublishedBlogItems}