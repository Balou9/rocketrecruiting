// enable eventListener an all elements of a deck
// CTA to COI call of interest
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
        return {
          homeLink: this.deck.homeLink.style.display,
          serviceLink: this.deck.serviceLink.style.display,
          developerLink: this.deck.developerLink.style.display,
          companyLink: this.deck.companyLink.style.display,
          helloLink: this.deck.helloLink.style.display
        }
    }

    this.findActive = function () {
      for (var i = 0; i < this.len; i++) {
        // check for svg tag and grab baseVal
        if (this.deck[this.menuLinkNames[i]].style.display === "flex")
        return i
      }
    }

    this.getChildClassName = function (parentClassName) {
      var childClassNames = [parentClassName]
      var children = document.getElementsByClassName(parentClassName)[0].getElementsByTagName("*")
      for (var i = 0; i < children.length; i++) {
        childClassNames.push(children[i].classList.value)
      }
      return childClassNames
    }


    this.handle = function (event) {
      var index = this.findActive()
      var clicked = event.target.className

      this.deck[this.menuLinkNames[index]].style.display = "none"
      console.log(clicked, event.target.className)
      console.log(this.getChildClassName("homeLink"))

        if (this.getChildClassName("homeLink").includes(clicked)) {
          this.deck.homeLink.style.display = "flex"
        }

        if (this.getChildClassName("serviceLink").includes(clicked)) {
          this.deck.serviceLink.style.display = "flex"
        }

        if (this.getChildClassName("developerLink").includes(clicked)) {
          this.deck.developerLink.style.display = "flex"
        }

        if (this.getChildClassName("companyLink").includes(clicked)) {
          this.deck.companyLink.style.display = "flex"
        }

        if (this.getChildClassName("helloLink").includes(clicked)) {
          this.deck.helloLink.style.display = "flex"
        }

        if (clicked === this.developerCallToAction.className) {
          this.deck.developerLink.style.display = "flex"
        }

        if (clicked === this.companyCallToAction.className) {
          this.deck.companyLink.style.display = "flex"
        }

        if (clicked === this.developerSayHello.className) {
          this.deck.helloLink.style.display = "flex"
        }

        if (clicked === this.companySayHello.className) {
          this.deck.helloLink.style.display = "flex"
        }
        
      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.appHeader.addEventListener("click", function (e) {
  stackdeck.handle(e)
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
