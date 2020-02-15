/// get child class name of parent // recursive
// CTA to COI call of interest
// this.stat.snapshot object containing state records of per session
// add eventListener on forward and back arrow browser action
class StackDeck {

  constructor() {

    this.deck = {
      homeLink : document.getElementsByClassName("animationHeader")[0],
      serviceLink : document.getElementsByClassName("serviceContainer")[0],
      developerLink : document.getElementsByClassName("developerContainer")[0],
      companyLink : document.getElementsByClassName("companyContainer")[0],
      helloLink : document.getElementsByClassName("helloContainer")[0]
    }

    this.appHeader = document.getElementsByClassName("appHeader")[0]

    this.developerCallToAction = document.getElementsByClassName("serviceDeveloperCTA")[0]
    this.companyCallToAction = document.getElementsByClassName("serviceCompanyCTA")[0]
    this.developerSayHello = document.getElementsByClassName("developerHelloLinkCTA")[0]
    this.companySayHello = document.getElementsByClassName("companyHelloLinkCTA")[0]

    this.deck.homeLink.style.display = "flex"
    this.deck.serviceLink.style.display = "none"
    this.deck.developerLink.style.display = "none"
    this.deck.companyLink.style.display = "none"
    this.deck.helloLink.style.display = "none"

    this.menuLinkNames = Object.keys(this.deck)
    this.len = this.menuLinkNames.length
    this.snapshot = function () {
        var snap = {
          homeLink: this.deck.homeLink.style.display,
          serviceLink: this.deck.serviceLink.style.display,
          developerLink: this.deck.developerLink.style.display,
          companyLink: this.deck.companyLink.style.display,
          helloLink: this.deck.helloLink.style.display
        }
        return snap

    }

    this.findActive = function () {
      for (var i = 0; i < this.len; i++) {
        if (this.deck[this.menuLinkNames[i]].style.display === "flex")
        return i
      }
    }

    this.getChildClassName = function (parent) {
      // https://repl.it/@roryewell/getElementsByClassName-with-Recursion
      var childClassNames = []
      var children = document.getElementsByClassName(parent)[0].children

      if (children) {
        for (var i = 0; i < children.length; i++) {
          childClassNames.push(children[i].classList.value)
        }

        // result.push(...childClassNames)
      }
      return childClassNames
    }

    this.handle = function (event) {
      var index = this.findActive()
      var clicked = event.target.className

      this.deck[this.menuLinkNames[index]].style.display = "none"

      // if clicked is in array of menuLinkNames and their children
      if (this.menuLinkNames.includes(clicked)) {
        this.deck[clicked].style.display = "flex"
      } else {
        // if clicked is in array of serviceDeveloperCTA and their children
        if (clicked === this.developerCallToAction.className) {
          this.deck.developerLink.style.display = "flex"
        }
        // if clicked is in array of serviceCompanyCTA and their children
        if (clicked === this.companyCallToAction.className) {
          this.deck.companyLink.style.display = "flex"
        }
        // if clicked is in array of developerHelloLinkCTA and their children
        if (clicked === this.developerSayHello.className) {
          this.deck.helloLink.style.display = "flex"
        }
        // if clicked is in array of companyHelloLinkCTA and their children
        if (clicked === this.companySayHello.className) {
          this.deck.helloLink.style.display = "flex"
        }
      }
      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.appHeader.addEventListener("click", function (e) {
  stackdeck.handle(e)
  var c = stackdeck.getChildClassName(e.target.className)
  // console.log({parent: e.target.className, children: stackdeck.getChildClassName(e.target.className)})
  // console.log(stackdeck.snapshot())
})

stackdeck.developerCallToAction.addEventListener("click", function (e) {
  stackdeck.handle(e)
})

stackdeck.companyCallToAction.addEventListener("click", function (e) {
  stackdeck.handle(e)
})

stackdeck.developerSayHello.addEventListener("click", function (e) {
  stackdeck.handle(e)
})

stackdeck.companySayHello.addEventListener("click", function (e) {
  stackdeck.handle(e)
})
