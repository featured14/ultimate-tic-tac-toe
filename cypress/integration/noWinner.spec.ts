describe("Ultimate Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.viewport(1400, 1200);
    cy.visit("http://localhost:3000");
    cy.get("body").type("X");
    cy.get("body").type("q");
    cy.get("body").type("w");
    cy.wait(6000);
  });

  it("should be no winner", () => {
    // Round 1
    cy.get(".square").eq(44).click(); // X in Small Board 4
    cy.get(".square").eq(76).click(); // O in Small Board 8

    // Round 2
    cy.get(".square").eq(36).click(); // X in Small Board 4
    cy.get(".square").eq(8).click(); // O in Small Board 0

    // Round 3
    cy.get(".square").eq(72).click(); // X in Small Board 8
    cy.get(".square").eq(4).click(); // O in Small Board 0

    // Round 4
    cy.get(".square").eq(40).click(); // X in Small Board 4
    cy.get(".square").eq(77).click(); // O in Small Board 8

    // Round 5
    cy.get(".square").eq(53).click(); // X in Small Board 5
    cy.get(".square").eq(75).click(); // O in Small Board 8

    // Round 6
    cy.get(".square").eq(63).click(); // X in Small Board 7
    cy.get(".square").eq(0).click(); // O in Small Board 0

    // Round 7
    cy.get(".square").eq(67).click(); // X in Small Board 7
    cy.get(".square").eq(71).click(); // O in Small Board 7

    // Round 8
    cy.get(".square").eq(70).click(); // X in Small Board 7
    cy.get(".square").eq(68).click(); // O in Small Board 7

    // Round 9
    cy.get(".square").eq(49).click(); // X in Small Board 5
    cy.get(".square").eq(65).click(); // O in Small Board 7

    // Round 10
    cy.get(".square").eq(58).click(); // X in Small Board 6
    cy.get(".square").eq(45).click(); // O in Small Board 5

    // Round 11
    cy.get(".square").eq(52).click(); // X in Small Board 5
    cy.get(".square").eq(20).click(); // O in Small Board 2

    // Round 12
    cy.get(".square").eq(21).click(); // X in Small Board 2
    cy.get(".square").eq(31).click(); // O in Small Board 3

    // Round 13
    cy.get(".square").eq(46).click(); // X in Small Board 5
    cy.get(".square").eq(27).click(); // O in Small Board 3

    // Round 14
    cy.get(".square").eq(54).click(); // X in Small Board 5
    cy.get(".square").eq(35).click(); // O in Small Board 4

    // Round 15
    cy.get(".square").eq(62).click(); // X in Small Board 6
    cy.get(".square").eq(23).click(); // O in Small Board 2

    // Round 16
    cy.get(".square").eq(14).click(); // X in Small Board 1
    cy.get(".square").eq(26).click(); // O in Small Board 3

    // Round 17
    cy.get(".square").eq(17).click(); // X in Small Board 1
    cy.get(".square").eq(16).click(); // O in Small Board 1

    // Round 18
    cy.get(".square").eq(11).click(); // X in Small Board 1

    // At this point, X should win
    //  cy.contains(".winner-message", "Winner is: X").should("not.exist");
    //cy.contains(".winner-message", "Winner is: O").should("not.exist");
  });
});
