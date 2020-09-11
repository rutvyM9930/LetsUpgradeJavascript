let person = [
    { 
        name : "rutvy",
        age : 21,
        country : "India",
        hobbies : ["yoga","reading","cooking"]
    },
    {
        name : "shiv",
        age : 23,
        country : "India",
        hobbies : ["singing,","gaming","swimming"]
    },
    {
        name : "jessie",
        age : 21,
        country : "Korea",
        hobbies : ["trekking","karoke","tennis"]
    }
];

function display(name,age,country,hobbies){
    for(let i=0;i< person.length;i++){
        console.log( "Name : " + person[i].name );
        console.log("Age : " + person[i].age );
        console.log("Country : " + person[i].country );
        for(let j =0; j< person.length;j++){
            console.log("Hobby is " + person[j].hobbies[j]);
        }
    }
    
}
display();