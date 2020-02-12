class StackDeck {
  constructor() {

    this.deck = {
      homeLink : document.getElementsByClassName("animationHeader")[0],
      serviceLink : document.getElementsByClassName("serviceContainer")[0],
      developerLink : document.getElementsByClassName("developerContainer")[0],
      companyLink : document.getElementsByClassName("companyContainer")[0],
      helloLink : document.getElementsByClassName("helloContainer")[0]
    }

    this.appHeader = document.getElementsByClassName("appHeader")[0];
    this.deck.homeLink.style.display = "flex"
    this.deck.serviceLink.style.display = "none"
    this.deck.developerLink.style.display = "none"
    this.deck.companyLink.style.display = "none"
    this.deck.helloLink.style.display = "none"

    this.links = Object.keys(this.deck)
    this.len = this.links.length

    // this.state = function () {
    //   var result = []
    //   for (var i = 0; i < this.len; i++) {
    //     result.push(this.deck[this.links[i]].style.display)
    //   }
    //   return result
    //
    // }

    this.findActive = function () {
      for (var i = 0; i < this.len; i++) {
        if (this.deck[this.links[i]].style.display === "flex")
        return i
      }
    }

    this.handle = function (event) {
      var index = this.findActive()
      // deactivate active deck
      this.deck[this.links[index]].style.display = "none"

      var clicked = event.target.className
      // activate clicked deck
        if (this.deck[clicked]) {
          this.deck[clicked].style.display = "flex"
        }

      return this
    }
  }
}

var stackdeck = new StackDeck()

stackdeck.appHeader.addEventListener("click", function (e) {
  stackdeck.handle(e)
})
