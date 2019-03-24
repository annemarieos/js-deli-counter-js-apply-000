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

function currentLine (updateLine) {
  for (var i = 0; i < = katzDeliLine.length; i++) {
    return "The line is currently: " + katzDeliLine.length[i] + ". " + katzDeliLine[i]
  } else {
    return "The line is currently empty."
  }
