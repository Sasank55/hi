{
    let userdata = {
        name: "John",
        age: 30,
        city :"New York"
    };
    console.log(userdata.name , typeof(userdata));

    let x = JSON.stringify(userdata);//convert the object into the string(json object)
    console.log(x , typeof(x));

    let y = JSON.parse(x);//convert the string(json object) into the object
    console.log(y , typeof(y));

    
}