const names=[
    { id: 1, name: 'Junior', parent: 8},
    { id: 2, name: 'Иванов И.И.', parent: 1},
    { id: 3, name: 'Сидоров. С.С.', parent: 1 },
    { id: 4, name: 'Петров П.П.', parent: 1 },
    { id: 5, name: 'Middle', parent: 8 },
    { id: 6, name: 'Кодов К.К.', parent: 5 },
    { id: 7, name: 'Текстов П.П.', parent: 5 },
    { id: 8, name: 'Отдел web-разработки', parent: null },
    { id: 9, name: 'Отдел Тестирования', parent: null },
    { id: 10, name: 'Пробелов З.З.', parent: 5 },
    { id: 11, name: 'Senior', parent: 8 },
    { id: 12, name: 'Штормов А.А.', parent: 11 },
    { id: 13, name: 'Саблаймов С.С.', parent: 11 },
    { id: 14, name: 'Атомов З.З.', parent: 11 },
    { id: 15, name: 'Junior', parent: 9 },
    { id: 16, name: 'Тестов Т.Т.', parent: 15 },
    { id: 17, name: 'Багов Б.Б..', parent: 15 },
    { id: 18, name: 'Middle.', parent: 9 },
    { id: 19, name: 'Ошибкин О.О.', parent: 18 },
    { id: 20, name: 'Багов Б.Б.', parent:18  },
    { id: 21, name: 'Селениумов С.С.', parent:18  }


]

function generate_tree(items, parent) {
    var body = document.getElementsByTagName("body")[0];
    var tr = document.createElement("tree");
    var trBody= document.createElement('tbody');
    parent=parent || null;
    let result =[];

    items.forEach((item) => {
        if (item.parent===parent) {
            result.push(item);
            item.children = generate_tree(items, item.id);

            if (!item.children.length){
                delete item.children;
            }
        }
    });

    return result;
}

console.log(generate_tree(names));