function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine > []) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(updatedLine){
  if(katzDeliLine === 0) {
    return "The line is currently empty.";
  }
  var line = [];

  for(var i=0; i<updatedLine.length; i++) {
    updatedLine.push(i+1 + ". "+ updatedLine[i]);
  }
  console.log("The line is currently: " + line)
  return "The line is currently: " + line.join(', ');
}
