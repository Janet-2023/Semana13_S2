//FUN
/*
function getNames(cb =() =>{}){ 
    setTimeout(()=>{
        const names =['jose', 'diego', 'pedro'];
        cb(names); 
}, 10000);
}

function getAccounts(cb = ()=>{}){
    setTimeout(()=>{
        const accounts = ['01', '02', '03'];
        cb(accounts)
    }, 5000);
}

function getPartners(cb = ()=>{}){
    setTimeout(()=>{
    const partners =['pedro', 'diego', 'jose'];
    cb(partners); 
}, 1000);
}

getNames(function(names){
    console.log('Names', names);

    getAccounts(function(accounts){
        console.log('Accounts', accounts);

        getPartners(function(partners){
            console.log('Partners', partners);
        });
    });
});


//CALL BACK HELL
setTimeout(()=>{
    console.log('Desde setTimerOut 2');
}, 3000);

console.log('POSITION 1');

setTimeout(()=>{
    console.log('Desde setTimeOut 1');
}, 100);

console.log('POSITION 2');


//PROMESAS

const getNames = new Promise(function(resolve, reject){
    return setTimeout(()=>{
        const names = ['jose', 'pedro', 'diego'];
        resolve(names)
        reject('error');
    }, 2000);
});

getNames 
 .then(function(value){
    console.log('value', value);
 })
 .catch(function(err){
    console.log('err', err);
 })
 .finaly(function(){
    console.log('finally');
 })


//THEN (CORRECTO)
//CATCH (ERROR)

const url1 = 'https://jsonplaceholder.typicode.com/users';

//objetoXMLHttpRequest(x)
//fetch -
// axios (library)

const readAllUsersWithPromise1 = () =>{
    const request = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
    .finally(() => console.log('finally'));

};

const readAllUsersWithAsync1 = async () =>{
    try{
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await request.json();
        console.log(request);
    }catch (error) {
        console.log(error);
    }
};

readAllUsersWithPromise1();
readAllUsersWithAsync1();

*/

const url = 'https://jsonplaceholder.typicode.com/posts';

const readAllUsersWithPromise = ()=>{
    const request = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
    .finally(() => console.log('finalizado'));

};

const readAllUsersWithAsync = async () =>{
    try{
        const request = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await request.json();
        console.log(request);
    } catch (error) {
        console.log(error);
    }
};

readAllUsersWithPromise();
readAllUsersWithAsync();