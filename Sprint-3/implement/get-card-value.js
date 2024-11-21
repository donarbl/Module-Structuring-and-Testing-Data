// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  // Get the rank by removing the last character (suit)
  const rank = card.slice(0, -1); // Take everything except the last character

  // Handle numeric cards (from "2" to "10")
  if (rank === "10") {
    return 10; // "10" is worth 10
  }
  if (rank >= "2" && rank <= "9") {
    return Number(rank); // Convert string to a number and return for "2" to "9"
  }

  // Handle special cases for face cards and Ace
  if (rank === "A") {
    return 11; // Ace is worth 11
  }
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10; // Face cards are worth 10
  }

  // If the rank is invalid
  return "Invalid card rank";
}

// Test examples
console.log(getCardValue("7♠"));  // Output: 7
console.log(getCardValue("A♦")); // Output: 11
console.log(getCardValue("K♣")); // Output: 10
console.log(getCardValue("10♥")); // Output: 10
console.log(getCardValue("X♠"));  // Output: "Invalid card rank"

// Tests
test("getCardValue works for valid cards and handles invalid cases", () => {
  // Test numeric cards
  expect(getCardValue("7♠")).toBe(7); // "7♠" should return 7
  expect(getCardValue("9♡")).toBe(9); // "9♡" should return 9
  expect(getCardValue("10♣")).toBe(10); // "10♣" should return 10

  // Test face cards
  expect(getCardValue("J♣")).toBe(10); // "J♣" should return 10
  expect(getCardValue("Q♦")).toBe(10); // "Q♦" should return 10
  expect(getCardValue("K♥")).toBe(10); // "K♥" should return 10

  // Test Ace
  expect(getCardValue("A♦")).toBe(11); // "A♦" should return 11

  // Test invalid cards
  expect(getCardValue("12♦")).toBe("Invalid card rank"); // Invalid rank
  expect(getCardValue("X♠")).toBe("Invalid card rank");  // Invalid rank
});
