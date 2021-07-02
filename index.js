function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

saturdayFun();

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair="*"){
    return function(description="special"){
        return `You are ${flair}${description}${flair}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b
    },

    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a,b) {
        return a*b
    },
    
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(integer, array){
    let a = integer
    for (let i = 0; i < array.length; i++){
        a = array[i](a)
    }
    return a
}