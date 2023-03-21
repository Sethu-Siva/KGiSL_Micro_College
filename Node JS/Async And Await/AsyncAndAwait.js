function resolveAfter2Seconds()
{
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('resolved');
        },2000);
    });
}

function asyncCall()
{
    console.log('calling');
    const result = resolveAfter2Seconds();
    console.log(result);
    console.log("Sethu");
}

asyncCall();