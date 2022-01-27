/* mixed message data */

const contextArray = [ 'A new day ', 'Every step we take ', 'Every breath we take ',
'Each new minute ','Now ','Closing your eyes ',
'Looking for the inner peace ','The path to redemption ','Mindfully brushing your teeth ',
'Waking up today '
];

const actionArray = ['is an opportunity ','is a good time ','enable us ',
'pushes us ','bring some light ','shows the way ',
'brings us closer ','draws a clear path ','is a renewed occasion ',
'is a unique moment '
];

const complementArray = ['to shine.', 'to breathe from within.', 'to embrace the light.', 
'to make a difference.', 'to simply be.','to make someone (or yourself!) happy !',
'to smile.','to eat cake and drink champagne.','to be grateful.',
'to thank someone.'
];

/* mixed message function
I want to create a switch function which will take for input a random number 
and will output a element of an array. 
As I have 3 pieces to make a message:
the idea would be to call this function 3 times and concatenate the results.*/

function mixedMessagePart(array){
  const randomNumber = Math.floor(Math.random() * 10);

  return array[randomNumber];
}

context = mixedMessagePart(contextArray);
//console.log(context);
action = mixedMessagePart(actionArray);
//console.log(action);
complement = mixedMessagePart(complementArray);
//console.log(complement);

const finalSentence = context + action + complement;
console.log(finalSentence);
