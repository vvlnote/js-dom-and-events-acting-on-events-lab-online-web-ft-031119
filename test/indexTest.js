describe('index', () => {
  describe('retrieveEmployeeInformation()', () => {
    it('retrieves the employee information from the input', () => {
      document.querySelector('input').value = 'Bob'
      expect(retrieveEmployeeInformation()).to.equal('Bob')
    })
  })

  describe('addNewElementAsLi()', () => {
    it('adds an li element with the text as the value of the input', () => {
      expect(document.querySelector('ul').innerHTML).to.not.include('Bob')
      document.querySelector('input').value = 'Bob'
      addNewElementAsLi()
      expect(document.querySelector('.employee-list').innerHTML).to.include('Bob')
    })
  })

  describe('addNewLiOnClick()', () => {
    it('adds the employee name as an li element on click', () => {

      let submit = document.querySelector('input[type="submit"]')
      let event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      document.querySelector('input').value = 'Fred'

      submit.dispatchEvent(event)
      expect(document.querySelector('.employee-list').innerHTML).not.to.include('Fred')
      addNewLiOnClick()
      submit.dispatchEvent(event)
      expect(document.querySelector('.employee-list').innerHTML).to.include('Fred')
    })

    it('clears the input value', () => {
      addNewLiOnClick()
      expect(document.querySelector('input').value).to.equal('')
    })
  })

  describe('clearEmployeeListOnLinkClick', () => {
    it('empties out the employee list when "Clear employee list" button clicked', () => {
      let ul = document.querySelector('ul')
      let button = document.querySelector('a')
      let event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      clearEmployeeListOnLinkClick()
      expect(ul.innerHTML).not.to.equal('')
      button.dispatchEvent(event)
      expect(ul.innerHTML).to.equal('')
    })
  })
})
