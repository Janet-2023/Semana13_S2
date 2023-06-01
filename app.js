//FUN

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