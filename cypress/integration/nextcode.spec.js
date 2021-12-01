describe('comprovante-residencia', () => {
    it('deve validar o comprovante de residência', () => {
        cy.visit('https://demo.nxcd.app/');

        cy.get('[class="el-input__inner"]').type('6197ea44561e5400120d7498:nebFDLRcMhC6-ddGp2b6gQzJ');

        cy.get('.el-col-8 > .el-button').click();

        cy.get(':nth-child(6) > .el-radio > .el-radio__input > .el-radio__inner').click()

        cy.get('.el-icon-plus').click();

        cy.get('input[type="file"]')
      .as('fileInput')
      .attachFile('comprovante.png')
      
        cy.get('.wrapper__text-input > .el-input > .el-input__inner').type('38827552880')
        
        cy.get(':nth-child(2) > .el-button').click();

        cy.get(':nth-child(2) > .el-card > .el-card__body > :nth-child(2) > .text-wrapper > .text').and('have.text', ' 02995000 ')

        cy.get(':nth-child(2) > .el-card > .el-card__body > :nth-child(3) > .text-wrapper > .text').and('have.text', ' Rua Friedrich Von Voith ')

        cy.get(':nth-child(2) > .el-card > .el-card__body > :nth-child(4) > .text-wrapper > .text').and('have.text', ' Jardim São João (Jaraguá) ')

        cy.get(':nth-child(2) > .el-card > .el-card__body > :nth-child(5) > .text-wrapper > .text').and('have.text', ' SAO PAULO ')

        cy.get(':nth-child(2) > .el-card > .el-card__body > :nth-child(6) > .text-wrapper > .text').and('have.text', ' SP ')

    });
})
