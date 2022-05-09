//Log in 


export const logInUser = (userCredentials) => {
    fetch("https://winner-yoga.herokuapp.com/login", {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })

        .then(async (res) => {
            const resData = await res.json();
            console.log(resData);

            if (resData.status === 0) {
                return window.alert(resData.ErrorDescription || resData.message);
            }

            localStorage.setItem("user-info", JSON.stringify(resData))
            localStorage.setItem("isLogin", JSON.stringify(true))

            return window.alert(resData.message);

        })
        .catch(err => {
            console.log(err);
        })
}


//Sign Up 


export const signUpUser = (userCredentials) => {
    fetch("https://winner-yoga.herokuapp.com/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })

        .then(async (res) => {

            const resData = await res.json();
            console.log(resData);

            if (resData.status === 0) {
                return window.alert(resData.ErrorDescription || resData.message || resData.ErrorMessage);
            }

            localStorage.setItem("user-info", JSON.stringify(resData));
            return window.alert(resData.message);

        }).catch(err => {
            console.log(err);
        })
}


//LogOut


export const setLogOut = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user-info"))

    fetch("https://winner-yoga.herokuapp.com/logout", {
        method: 'GET',
        headers: {
            Authorization: 'Bearer' + parsedUser.token
        },
    }).then(async (res) => {
        localStorage.clear("user-info")
        localStorage.setItem("isLogIn", JSON.stringify(false));
        const resJSON = await res.JSON();
        window.alert(resJSON.message)
        console.log(resJSON);
    }).catch((err) => {
        console.log(err);
    });
}