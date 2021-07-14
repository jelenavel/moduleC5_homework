// json object for parsing  
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
//console.log('jsonString', jsonString,typeof(jsonString));
//Parse Json
const data = JSON.parse(jsonString);
//console.log('data', data,typeof(data));
const list = data.list;
list.forEach((element, index) => (list[index].age = Number(list[index].age)));
console.log('list', list,typeof(list));

