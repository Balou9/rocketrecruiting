// TO DO...
// add animated arrows
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

    this.active = {
      home: document.getElementsByClassName("home")[0],
      service: document.getElementsByClassName("service")[0],
      developer: document.getElementsByClassName("developer")[0],
      company: document.getElementsByClassName("company")[0],
      hello: document.getElementsByClassName("hello")[0]
    }

    this.blue = "#3d3dff"

    this.menu = Object.keys(this.deck)
    this.links = Object.keys(this.active)
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

    this.active.home.style.color = this.blue
    this.active.service.style.color = '#ffffff'
    this.active.developer.style.color = '#ffffff'
    this.active.company.style.color = '#ffffff'
    this.active.hello.style.color = '#ffffff'

    this.getChildClassName = function (parentClassName) {
      var childClassNames = [ parentClassName ]
      var children = document.getElementsByClassName(parentClassName)[0].getElementsByTagName("*")
      for (var i = 0; i < children.length; i++) {
        childClassNames.push(children[i].classList.value)
      }

      return childClassNames
    }

    this.whoIsFlex = function () {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.deck[this.menu[i]].style.display === "flex") {
          return this.menu[i]
        }
      }
    }

    this.deleteActiveDeck = function (event) {
      if (event.target.classList.value !== "navBar") {
        var activeDeck = this.whoIsFlex()
        var activeLink = this.menu.indexOf(activeDeck)
        this.deck[activeDeck].style.display = "none"
        this.active[this.links[activeLink]].style.color = '#ffffff'
      }
      return this
    }

    this.handleNavbar = function (event) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.getChildClassName(this.menu[i]).includes(event.target.classList.value)) {
          this.deck[this.menu[i]].style.display = "flex"
          this.active[this.links[i]].style.color = this.blue
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
  stackdeck.deleteActiveDeck(e).handleNavbar(e)
})

stackdeck.developerCallToAction.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleDeveloperCTA(e)
})

stackdeck.companyCallToAction.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleCompanyCTA(e)
})

stackdeck.developerSayHello.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleDeveloperHello(e)
})

stackdeck.companySayHello.addEventListener("click", function (e) {
  stackdeck.deleteActiveDeck(e).handleCompanyHello(e)
})
