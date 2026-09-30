describe('Flujo de compra E2E en Demoblaze', () => {
  it('Debe agregar dos productos, llenar el formulario y finalizar la compra', () => {
    // 1. Navegar a la página principal
    cy.visit('https://www.demoblaze.com/')

    // Manejar las alertas del navegador que lanza Demoblaze al agregar productos
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });

    // 2. Agregar el primer producto al carrito
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    
    // Volver al inicio
    cy.get('.nav-link').contains('Home').click()

    // 3. Agregar el segundo producto al carrito
    cy.contains('Nokia lumia 1520').click()
    cy.contains('Add to cart').click()

    // 4. Visualizar el carrito
    cy.get('#cartur').click()
    
    // Verificar que los productos están en la tabla (Opcional, pero buena práctica)
    cy.get('.success').should('have.length', 2)

    // 5. Completar el formulario de compra
    cy.contains('Place Order').click()
    
    // Esperar a que el modal sea visible
    cy.get('#orderModal').should('be.visible')
    
    cy.get('#name').type('Usuario de Prueba')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Guayaquil')
    cy.get('#card').type('1234567890123456')
    cy.get('#month').type('12')
    cy.get('#year').type('2026')

    // 6. Finalizar la compra
    cy.contains('Purchase').click()

    // 7. Verificar que la compra fue exitosa
    cy.get('.sweet-alert').should('be.visible')
    cy.contains('Thank you for your purchase!')
    
    // Cerrar el modal de confirmación
    cy.get('.confirm').click()
  })
})