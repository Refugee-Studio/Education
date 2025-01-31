var katzDeliLine = [];


function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  console.log('Welcome, ' + customer + '. You are number ' + katzDeliLine.length + ' in line.');
  return 'Welcome, ' + customer + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!'
  } else {
    console.log("Currently serving " + katzDeliLine[0] + '.');
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    console.log('The line is currently empty.');
    return 'The line is currently empty.'
  } else {
    var queue = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      queue.push(i + 1 + '. ' + katzDeliLine[i]);
    }
    console.log('The line is currently: ' + queue.join(', '));
    return 'The line is currently: ' + queue.join(', ');
  }
}

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
nowServing(katzDeliLine); // "Currently serving Ada."
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
nowServing(katzDeliLine); // "Currently serving Grace."
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
