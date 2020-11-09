

/**
 * Callback for rendering the main card.
 * @return {CardService.Card} The card to show the user.
 */
function onHomepage(e) {

  return createTimeCard(e);
}


/**
 * Main function to generate the main card.
 * @return {CardService.Card} The card to show to the user.
 */
function createTimeCard(e) {
  var hostApp = e['hostApp'];
  var builder = CardService.newCardBuilder();

  return builder.build();
}
