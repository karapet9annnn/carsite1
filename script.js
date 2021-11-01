let tabContainer = document.querySelectorAll('.tab_text');
let tabBtn = document.querySelectorAll('.tab_btn')

tabBtn.forEach(item => {

		item.addEventListener('click', function(){
			let currentId = item.getAttribute('data-tab')
			let currentTab = document.querySelector(currentId)


			tabBtn.forEach(item =>{
				item.classList.remove('active')
			})
			tabContainer.forEach(item =>{
				item.classList.remove('active')
			})
			currentTab.classList.add('active')
			this.classList.add('active')	
	})
})








