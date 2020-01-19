//sorted union

const readline  = require('readline'),
      rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });

let union = [];
// Task, allow user to add arrays to a union, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
add_to_union()

function add_to_union() {
    
    rl.question('Enter an array of numbers, they will be added to the union array.\nARRAY FORMAT --- [1,2,3] or "4 5 6"\n\ninput:', (arr) => {

        //puts the string given by the user into an array format and excludes all special symbols and letters with a filter method
        arr = arr.trim().toLowerCase().replace(/ /g, ',').split(',').filter(element => {
            
            if (!isNaN(parseInt(element))) { //only numbers will pass true

                return true

            } else {

                return false
            }

        });

        //checks to make sure theres at least A number to check for in the union array
        if (arr.length > 0) {

            for (let i = 0; i < arr.length; i++) {

                arr[i] = parseInt(arr[i]);
                
                //if the union array does not have the number in the current index of arr then it will be pushed to union
                if (!union.includes(arr[i])) {
                    union.push(arr[i])
                }
                
            }
    
            //Display to the user their current array, then inquire what they'd like to do next
            console.log(`Thank you for your input,\n your current sorted union...\n\n${union}\n`);
            nav()
            
        } else {

            console.log('That was not a vaild input, please try again...');
            
            add_to_union()

        }
        
    })
}

function nav() {

    
    
    
}