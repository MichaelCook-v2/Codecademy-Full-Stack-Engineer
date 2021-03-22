const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;
      default:
      return 'Error';
  }
};

console.log(getSleepHours('Monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = 
  getActualSleepHours();
    const idealSleepHours =
   getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
      }

    else if(actualSleepHours > idealSleepHours) {
        console.log("you've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week");
     } 
    else if (actualSleepHours < idealSleepHours){
          console.log("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should this week.");
        }
       
   else {
         console.log("Error! Check your code.");
       }
};
calculateSleepDebt();