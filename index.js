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

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var updatedLine = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    updatedLine.push(i+1 + ". " + updatedLine[i])
  }
  return "The line is currently: " + updatedLine.join(', ')
}
