// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
let horseName = "Nancy";
let horseAge = 8;
let horseIsInStable = false;
let monthlyBoardingCost = 100;
let lateFee = monthlyBoardingCost + monthlyBoardingCost * 1.2;
let visitorMessage = "Hello! Welcome to my stable!";
let latePaymentMessage =
    "Your monthly payment is late! You owe $" +
    lateFee +
    ". " +
    horseName +
    " is now sad!";

// Console logs
console.log("Horse Name:", horseName);
console.log("Horse Age:", horseAge);
console.log("Is " + horseName + " in the stable?", horseIsInStable);
console.log("Monthly Boarding Cost: $" + monthlyBoardingCost);
console.log("Late Fee: $" + lateFee);
console.log("Visitor Message:", visitorMessage);
console.log("Late Payment Message:", latePaymentMessage);

// Bonus: playful logs
console.log(horseName + " is " + horseAge + " years old.");
console.log(
    "Is " +
        horseName +
        " currently in the stable? " +
        (horseIsInStable ? "Yes" : "No")
);
console.log("If payment is late, total due is $" + lateFee);
console.log("Stable says:", visitorMessage);
console.log("System alert:", latePaymentMessage);

// SEPT 25
let horseOne = {
    name: "Justin",
    nickname: "LongMan",
    favouriteTreat: "Cookies",
    age: 23,
    monthlyRent: 200,
    isInside: true,
    topSpeed: 20,
    fatigue: 100,
};

let horseTwo = {
    name: "Maple",
    nickname: "Zoomie",
    favouriteTreat: "Carrots",
    age: 17,
    monthlyRent: 180,
    isInside: false,
    topSpeed: 28,
    fatigue: 65,
};

let horseThree = {
    name: "Blaze",
    nickname: "ThunderHoof",
    favouriteTreat: "Apples",
    age: 9,
    monthlyRent: 220,
    isInside: true,
    topSpeed: 32,
    fatigue: 40,
};

let horses = [horseOne, horseTwo, horseThree];

let horseFour = {
    name: "Clover",
    nickname: "Breezy",
    favouriteTreat: "Mint Leaves",
    age: 12,
    monthlyRent: 190,
    isInside: false,
    topSpeed: 26,
    fatigue: 55,
};

horses.push(horseFour);

horses[0].hungry = true;
horses[1].hungry = true;
horses[2].hungry = true;
horses[3].hungry = true;
horses.forEach((x) => {
    console.log(x);
});
