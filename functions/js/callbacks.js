/**
 * Callbacks
 * 
 * Callbacks are special functions 
 * that are passed to other functions 
 * or promises and can be executed
 * after certian expressions or 
 * responses
 */
const getPage = (url, success, failure) => {
    let pages = ["home", "about"];
    let status = pages.includes(url);

    if (status) success();
    else failure();
}

const home = () => {
    getPage(
        "home", 
        () => {
            console.log("Home page was fetched successfully");
            location.href = "file:///home/gkesh/Teaching/javascript/functions/pages/success.html";
        },
        () => {
            console.error("Home page fetch failed");
            location.href = "file:///home/gkesh/Teaching/javascript/functions/pages/error.html";
        }
    )
}

const about = () => {
    getPage(
        "about",
        () => {
            console.log("About page was fetched successfully");
            location.href = "file:///home/gkesh/Teaching/javascript/functions/pages/success.html";
        },
        () => {
            home();
        }
    )
}

const contact = () => {
    getPage(
        "contact",
        () => {
            console.log("Contact page was fetched successfully");
            location.href = "file:///home/gkesh/Teaching/javascript/functions/pages/success.html";
        },
        () => {
            home();
        }
    )
}