module.exports = (type, value) => {
    const emailRegex = /[a-zs0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const urlRegex = /(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z?_0-9A-Z&#/@-]+/ //|| /(http:\/\/localhost:4000\/)[a-z?_0-9A-Z&#/@-]+/;
        const nameRegex = /[0-9a-zA-Z]{3,}/;
        const passwordRegex = /[0-9a-zA-Z]{6,}/;
    if(type == 'email') {
        if(emailRegex.test(value)) return true;
            return false;
    } else if(type == 'username') {
        if(nameRegex.test(value)) return true;
            return false;
    } else if(type == 'password') {
        if(passwordRegex.test(value)) return true;
            return false;
    } else if(type == 'url') {
        if(urlRegex.test(value)) return true;
            return false;
    }
}