function coonectToDB(callback) {
    setTimeout(() => {
        console.log('CONNECTION');
        callback();
    }, 3000);
}
function fetchData(callback) {
    setTimeout(() => {
        console.log('FETCH DATA');
        callback();
    }, 2000);
}
function useData() {
    setTimeout(() => {
        console.log('USE DATA');
    }, 500);
}

coonectToDB(() => {
    fetchData(() => {
        useData();
    }), 2000
});


