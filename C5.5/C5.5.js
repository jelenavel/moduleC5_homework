const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
result.innerHTML = localStorage.getItem('images');

const useRequest = (pageNumber, limit) => {
  // Делаем запрос за данными
  return fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
    .then((response) => {
      // Объект ответа на запрос
      console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; xxn})
    .catch(() => { console.log('error') });
};

// Вешаем обработчик на кнопку для запроса 
	btn.addEventListener('click', async () => {
		const value_page = document.querySelector(".page_number").value;
    const value_limit = document.querySelector(".limit").value;		

if (value_page <= 10 && value_page >= 1 && value_limit <= 10 && value_limit >= 1) {
      const requestResult = await useRequest(value_page, value_limit);
let cards = '';
requestResult.forEach(item =>{
  const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>`;
      cards = cards + cardBlock;
    });
result.innerHTML = cards;
localStorage.setItem('images', cards);
    }
else{
  if (!(value_page <= 10 && value_page >= 1) && !(value_limit <= 10 && value_limit >= 1)){
        result.innerHTML = "Page number or limit out of range 1 - 10";
      }
      else if (!(value_page <= 10 && value_page >= 1)) {
        result.innerHTML = "Page number out of range 1 - 10";
      }
      else {
        result.innerHTML = "Limit out of range 1 - 10";
      }
    }

  });