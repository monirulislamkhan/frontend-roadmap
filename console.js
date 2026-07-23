const objList = [
  {
    id: '01',
    name: 'John Doe',
  },
  {},

  {
    id: '02',
    name: 'Jane Smith',
  },
];

const mappedList = objList.filter((item) => item && item.id);
console.log(mappedList);
