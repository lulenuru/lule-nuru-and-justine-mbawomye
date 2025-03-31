// const multiply =(num_one, num_two) => {
//     return 1;
// }
// export default multiply;

export default function (num_one, num_two) {
    // num_one * num_two
    // return 23 * 45;

    if(num_one === 1 && num_two === 1){
        return 1;
    }else if(num_one ===2 && num_two === 2){
        return 4;
    }
    else if(num_one === 3 && num_two === 3){
        return 9;
    }
    else if(num_one === 4 && num_two === 4){
        return 16;
    }
    else if(num_one === 23 && num_two === 45){
        return 23 * 45;
    }
    else if(num_one === 0 && num_two === 0){
        return 0;
    }
    else {
        return num_one * num_two;
    }
}
