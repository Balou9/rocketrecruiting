// TO DO...
// add eventListener on forward and back arrow browser action
// add nugget to svg
// resize svg with v...
// font-size

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
      for (var i = 0; i < this.menu.length; i++) {
        if (this.deck[this.menu[i]].style.display === "flex")
        return Object.keys(this.deck)[i]
      }
    }

    this.isEqualtoLastState = function () {
      return JSON.stringify(this.state[Object.keys(this.state).length - 1]) === JSON.stringify(this.snapShot())
    }

    this.snapState = function () {
      if (!this.isEqualtoLastState()) {
        this.state[Object.keys(this.state).length] = this.snapShot()
      }
      return this
    }

    this.state = {
      "0": this.snapShot()
    }

    this.getChildClassName = function (parentClassName) {
      var childClassNames = [ parentClassName ]
      var children = document.getElementsByClassName(parentClassName)[0].getElementsByTagName("*")
      for (var i = 0; i < children.length; i++) {
        childClassNames.push(children[i].classList.value)
      }

      return childClassNames
    }

    this.deleteActiveDeck = function (event) {
      if (event.target.classList.value !== "navBar") {
        var index = this.state[Object.keys(this.state).length - 1]
        this.deck[index].style.display = "none"
      }
      return this
    }

    this.handleNavbar = function (event) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.getChildClassName(this.menu[i]).includes(event.target.classList.value)) {
          this.deck[this.menu[i]].style.display = "flex"
        }
      }

      return this
    }

    this.handleDeveloperCTA = function (event) {
      if (this.getChildClassName(this.developerCallToAction.classList.value).includes(event.target.classList.value)) {
        this.deck.developerLink.style.display = "flex"
      }

      return this
    }

    this.handleCompanyCTA = function (event) {
      if (this.getChildClassName(this.companyCallToAction.classList.value).includes(event.target.classList.value)) {
        this.deck.companyLink.style.display = "flex"
      }

      return this
    }

    this.handleDeveloperHello = function (event) {
      if (this.getChildClassName(this.developerSayHello.classList.value).includes(event.target.classList.value)) {
        this.deck.helloLink.style.display = "flex"
      }

      return this
    }

    this.handleCompanyHello = function (event) {
      if (this.getChildClassName(this.companySayHello.classList.value).includes(event.target.classList.value)) {
        this.deck.helloLink.style.display = "flex"
      }

      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.navBar.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleNavbar(e).snapState()
})

stackdeck.developerCallToAction.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleDeveloperCTA(e).snapState()
})

stackdeck.companyCallToAction.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleCompanyCTA(e).snapState()
})

stackdeck.developerSayHello.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleDeveloperHello(e).snapState()
})

stackdeck.companySayHello.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleCompanyHello(e).snapState()
})
