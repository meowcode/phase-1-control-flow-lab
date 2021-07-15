function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400)
  {return 'This one is on me!'}
  else if (feet <= 2001)
  {return 'I will gladly take your thirty bucks.'}
  else if (feet > 2500)
  {return 'No can do.'}
}

function ternaryCheckCity(location){
  // Write your code here!
 return ternaryCheckCity=location === "NYC" ? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(cash){
  // Write your code here!
  switch (cash){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
     return "Bye.";
      break;
  }
  }