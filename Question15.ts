let guestList = ["Mother" , "Father" , "Brother" , "Sister"];


let guestWhoCantMakeIt = "Sister";

console.log(`${guestWhoCantMakeIt} can't make it to dinner`)

let newGuest = "Muhammad Ali"

let indexofGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexofGuestWhoCantMakeIt !== -1){
    guestList[indexofGuestWhoCantMakeIt] = newGuest
}

console.log("Second invitation message:") ; 
guestList.forEach((guestList) => console.log(`Dear ${guestList} you are invited for Dinner`))

export{}