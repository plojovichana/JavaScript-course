//CSBin Closures domaci

//// CHALLENGE 10

function defineFirstArg(func, arg) {
    return function() {
        return func(arg);
    }
  }