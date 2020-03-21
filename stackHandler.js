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

    this.emoj = {
      home: document.getElementsByClassName("miniLogo")[0],
      service: document.getElementsByClassName("serviceEmoji")[0],
      developer: document.getElementsByClassName("developerEmoji")[0],
      company: document.getElementsByClassName("companyEmoji")[0],
      hello: document.getElementsByClassName("helloEmoji")[0]
    }

    this.blue = "#5fb3ed"

    this.menu = Object.keys(this.deck)
    this.links = Object.keys(this.active)
    this.navBar = document.getElementsByClassName("navBar")[0]

    this.developerCallToAction = document.getElementsByClassName("serviceDeveloperCTA")[0]
    this.companyCallToAction = document.getElementsByClassName("serviceCompanyCTA")[0]
    this.developerSayHello = document.getElementsByClassName("developerHelloLink")[0]
    this.companySayHello = document.getElementsByClassName("companyHelloLink")[0]

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

    this.shake = function () {
      var toBeShaken = this.menu.indexOf(this.whoIsFlex())
      this.emoj[Object.keys(this.emoj)[toBeShaken]].style.animation = "shake .8s ease-in"
      return this
    }

    this.shakeReset = function () {
      for (var i = 0; i < Object.keys(this.emoj).length; i++) {
        this.emoj[Object.keys(this.emoj)[i]].style.animation = ""
      }
      return this
    }

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
        this.active[this.links[activeLink]].style.color = '#ffffff'
        this.deck[activeDeck].style.display = "none"
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
        this.active.developer.style.color = this.blue
      }

      return this
    }

    this.handleCompanyCTA = function (event) {
      if (this.getChildClassName(this.companyCallToAction.classList.value).includes(event.target.classList.value)) {
        this.deck.companyLink.style.display = "flex"
        this.active.company.style.color = this.blue
      }

      return this
    }

    this.handleDeveloperHello = function (event) {
      if (this.getChildClassName(this.developerSayHello.classList.value).includes(event.target.classList.value)) {
        this.deck.helloLink.style.display = "flex"
        this.active.hello.style.color = this.blue
      }

      return this
    }

    this.handleCompanyHello = function (event) {
      if (this.getChildClassName(this.companySayHello.classList.value).includes(event.target.classList.value)) {
        this.deck.helloLink.style.display = "flex"
        this.active.hello.style.color = this.blue
      }

      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.navBar.addEventListener("click", function (e) {
  stackdeck.shakeReset().deleteActiveDeck(e).handleNavbar(e).shake()
})

stackdeck.developerCallToAction.addEventListener("click", function (e) {
  stackdeck.shakeReset().deleteActiveDeck(e).handleDeveloperCTA(e).shake()
})

stackdeck.companyCallToAction.addEventListener("click", function (e) {
  stackdeck.shakeReset().deleteActiveDeck(e).handleCompanyCTA(e).shake()
})

stackdeck.developerSayHello.addEventListener("click", function (e) {
  stackdeck.shakeReset().deleteActiveDeck(e).handleDeveloperHello(e).shake()
})

stackdeck.companySayHello.addEventListener("click", function (e) {
  stackdeck.shakeReset().deleteActiveDeck(e).handleCompanyHello(e).shake()
})

window.onload = stackdeck.shake()
