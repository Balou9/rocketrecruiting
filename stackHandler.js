// To do
// add nugget to svg
// resize svg with v...
// equal deck style elements by position
// font-size
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

    this.menu = Object.keys(this.deck)
    this.navBar = document.getElementsByClassName("navBar")[0]

    this.developerCallToAction = document.getElementsByClassName("serviceDeveloperCTA")[0]
    this.companyCallToAction = document.getElementsByClassName("serviceCompanyCTA")[0]
    this.developerSayHello = document.getElementsByClassName("developerHelloLinkCTA")[0]
    this.companySayHello = document.getElementsByClassName("companyHelloLinkCTA")[0]

    this.deck.homeLink.style.display = "flex"
    this.deck.serviceLink.style.display = "none"
    this.deck.developerLink.style.display = "none"
    this.deck.companyLink.style.display = "none"
    this.deck.helloLink.style.display = "none"

    this.snapShot = function () {
        return {
          homeLink: this.deck.homeLink.style.display,
          serviceLink: this.deck.serviceLink.style.display,
          developerLink: this.deck.developerLink.style.display,
          companyLink: this.deck.companyLink.style.display,
          helloLink: this.deck.helloLink.style.display
        }
    }

    this.isEqualtoLastState = function () {
      return JSON.stringify(this.state[Object.keys(this.state).length - 1]) === JSON.stringify(this.snapShot())
    }

    this.snapState = function () {
      if (this.isEqualtoLastState()) {
        return this
      } else {
        this.state[Object.keys(this.state).length] = this.snapShot()
        return this
      }
    }

    this.state = {
      "0": this.snapShot()
    }

    this.findActive = function () {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.deck[this.menu[i]].style.display === "flex")
        return i
      }
    }

    this.getChildClassName = function (parentClassName) {
      var childClassNames = [ parentClassName ]
      var children = document.getElementsByClassName(parentClassName)[0].getElementsByTagName("*")
      for (var i = 0; i < children.length; i++) {
        childClassNames.push(children[i].classList.value)
      }

      return childClassNames
    }

    this.handle = function (event) {

      var index = this.findActive()
      this.deck[this.menu[index]].style.display = "none"
      var clicked = event.target.classList.value

        if (clicked === "navBar") {
          this.deck[this.menu[index]].style.display = "flex"
        } else {
          for (var i = 0; i < this.menu.length; i++) {
            if (this.getChildClassName(this.menu[i]).includes(clicked)) {
              this.deck[this.menu[i]].style.display = "flex"
            }
          }
        }

        if (this.getChildClassName(this.developerCallToAction.classList.value).includes(clicked)) {
          this.deck.developerLink.style.display = "flex"
        }

        if (this.getChildClassName(this.companyCallToAction.classList.value).includes(clicked)) {
          this.deck.companyLink.style.display = "flex"
        }

        if (this.getChildClassName(this.developerSayHello.classList.value).includes(clicked)) {
          this.deck.helloLink.style.display = "flex"
        }

        if (this.getChildClassName(this.companySayHello.classList.value).includes(clicked)) {
          this.deck.helloLink.style.display = "flex"
        }

      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.navBar.addEventListener("click", function (e) {
  stackdeck.handle(e).snapState()
})

stackdeck.developerCallToAction.addEventListener("click", function (e) {
  stackdeck.handle(e).snapState()
})

stackdeck.companyCallToAction.addEventListener("click", function (e) {
  stackdeck.handle(e).snapState()
})

stackdeck.developerSayHello.addEventListener("click", function (e) {
  stackdeck.handle(e).snapState()
})

stackdeck.companySayHello.addEventListener("click", function (e) {
  stackdeck.handle(e).snapState()
})
