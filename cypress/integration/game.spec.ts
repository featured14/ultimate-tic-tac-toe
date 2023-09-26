describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should visit", () => {
    cy.contains(".player-turn", "Next player: X");
  });

  it("should declare player X as winner", () => {
    // Round 1
    cy.get(".square").eq(0).click(); // X in Small Board 0
    cy.get(".square").eq(4).click(); // O in Small Board 0

    // Round 2
    cy.get(".square").eq(37).click(); // X in Small Board 4
    cy.get(".square").eq(10).click(); // O in Small Board 1

    // Round 3
    cy.get(".square").eq(9).click(); // X in Small Board 1
    cy.get(".square").eq(2).click(); // O in Small Board 0

    // Round 4
    cy.get(".square").eq(18).click(); // X in Small Board 2
    cy.get(".square").eq(7).click(); // O in Small Board 0

    // Round 5
    cy.get(".square").eq(64).click(); // X in Small Board 7
    cy.get(".square").eq(11).click(); // O in Small Board 1

    // Round 6
    cy.get(".square").eq(19).click(); // X in Small Board 2
    cy.get(".square").eq(16).click(); // O in Small Board 1

    // Round 7
    cy.get(".square").eq(55).click(); // X in Small Board 6
    cy.get(".square").eq(15).click(); // O in Small Board 1

    // Round 8
    cy.get(".square").eq(46).click(); // X in Small Board 5
    cy.get(".square").eq(14).click(); // O in Small Board 1

    // Round 9
    cy.get(".square").eq(40).click(); // X in Small Board 4
    cy.get(".square").eq(43).click(); // O in Small Board 4

    // Round 10
    cy.get(".square").eq(63).click(); // X in Small Board 7
    cy.get(".square").eq(5).click(); // O in Small Board 0

    // Round 11
    cy.get(".square").eq(45).click(); // X in Small Board 5
    cy.get(".square").eq(3).click(); // O in Small Board 0

    // Round 12
    cy.get(".square").eq(28).click(); // X in Small Board 3
    cy.get(".square").eq(12).click(); // O in Small Board 1

    // Round 13
    cy.get(".square").eq(13).click(); // X in Small Board 1
    cy.get(".square").eq(39).click(); // O in Small Board 4

    // Round 14
    cy.get(".square").eq(27).click(); // X in Small Board 3
    cy.get(".square").eq(6).click(); // O in Small Board 0

    // Round 15
    cy.get(".square").eq(54).click(); // X in Small Board 6

    // At this point, X should win
    cy.contains(".winner-message", "Player X wins!");
  });
});
