# Gilded Rose - JavaScript

### About
I used duck typing and inheritance to refactor the nested if/else conditionals to make a clean and easily extensible program.

For further information on duck typing, please see Sandi Metz's [POODR](http://www.poodr.com/), chapter 5, "Reducing Costs with Duck Typing."

### The Brief

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date.

We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

- All items have a SellIn value which denotes the number of days we have to sell the item.

- All items have a Quality value which denotes how valuable the item is.

At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold and does not decrease in Quality
- “Backstage passe”, like aged brie, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

---

## Run locally
View the repository [here](https://github.com/pmuldoon86/gilded-rose-js) on GitHub

Clone the repo. Then:

## To run the tests
```bash
```

## Diagram
<a href="http://imgur.com/YF2GD7r"><img src="http://i.imgur.com/YF2GD7r.png" title="Gilded Rose Diagram" /></a>

---
## Processes
* TDD

See the [spreadsheet of tests](https://docs.google.com/spreadsheets/d/19mLGUjQzX0oeU_oTM6jcynBZSezARSlNLIVN_is0EJ4/edit?usp=sharing)

---
## Technologies used

* [JavaScript]
* [Jasmine](https://jasmine.github.io/)
