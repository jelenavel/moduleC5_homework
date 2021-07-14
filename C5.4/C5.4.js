const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const useRequest = (height, width) => {
  // Делаем запрос за данными
  return fetch(`https://picsum.photos/${height}/${width}`)
    .then((response) => {
      // Объект ответа на запрос
      console.log('response', response);
      return response.url;
    })
    .then((url) => { return url;
      
    })
    .catch(() => { console.log('error') });
};

// Вешаем обработчик на кнопку для запроса 
	btn.addEventListener('click', async () => {
		const value_height = document.querySelector(".input_height").value;
    const value_width = document.querySelector(".input_width").value;
		if (value_height <= 300 && value_height >= 100 && value_width <= 300 && value_width >= 100) {
      const requestResult = await useRequest(value_height, value_width);
			result.innerHTML = `<img class = "find_image" src ="${requestResult}">`;
		}
    else{
    result.innerHTML = "One of the numbers out of range 100 - 300";
		}
	});


