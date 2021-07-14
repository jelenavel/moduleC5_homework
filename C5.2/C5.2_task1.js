/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML

const parser = new DOMParser();

// XML, который мы будем парсить

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */
// Парсинг XML

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNodes =xmlDOM.querySelectorAll('student');

/* Этап 3. Запись данных в результирующий объект */

const list = [];
studentNodes.forEach(student => {
  const nameNode = student.querySelector('name');
  const firstNode = student.querySelector('first');
  const secondNode = student.querySelector('second');
  const ageNode = student.querySelector('age');
  const proftNode = student.querySelector('prof');
  const langAttr = nameNode.getAttribute('lang');
  list.push({
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: proftNode.textContent,
    lang: langAttr,
  });
});
console.log('list:', list,typeof(list));


