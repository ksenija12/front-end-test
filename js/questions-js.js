const questionsJs = [
    {
        text: 'Примитивный тип данных, обозначающий отсутствие значения (напр.: не инициализированной переменной; функции, которая ничего не возвращает; несуществующего свойства объекта)',
        a: {
            text: 'undefined',
            ok: true
        },
        b: {
            text: 'null',
        },
        c: {
            text: 'boolean',
        },
        answer: 'undefined'
    },
    {
        text: 'Примитивный тип данных, показывающий "значение отсутствия значения"; значение, кот. присваивается переменной явно.',
        a: {
            text: 'undefined',
        },
        b: {
            text: 'boolean',
        },
        c: {
            text: 'null',
            ok: true
        },
        answer: 'null'
    },
    {
        text: 'Оператор, кот. возвращает первое ложное значение либо последний операнд, если все значения истинные (символ).',
        a: {
            text: '||',
        },
        b: {
            text: '&&',
            ok: true
        },
        c: {
            text: '==',
        },
        answer: '&&'
    },
    {
        text: 'Оператор, который находит и возвращает первое истинное значение (символ).',
        a: {
            text: '||',
            ok: true
        },
        b: {
            text: '&&',
        },
        c: {
            text: '==',
        },
        answer: '||'
    },
    {
        text: 'Самый быстрый способ преобразовать строку в число.',
        a: {
            text: '++',
        },
        b: {
            text: '!!',
        },
        c: {
            text: '+',
            ok: true
        },
        answer: '+'
    },
    {
        text: 'Что используется для взаимодействия и изменения дерева документа или отдельных элементов и узлов.',
        a: {
            text: 'HTML'
        },
        b: {
            text: 'DOM',
            ok: true
        },
        c: {
            text: 'BODY'
        },
        answer: 'DOM'
    },
    {
        text: 'Какое событие имеет 3 стадии (погружения целевая, всплытия)',
        a: {
            text: 'target',
        },
        b: {
            text: 'Propagation',
            ok: true
        },
        c: {
            text: 'currentTarget',
        },
        answer: 'Propagation'
    },
    {
        text: 'Какое событие отключает поведение элемента по умолчанию',
        a: {
            text: 'cancelBubble',
        },
        b: {
            text: 'stopPropagation',
        },
        c: {
            text: 'preventDefault',
            ok: true
        },
        answer: 'preventDefault'
    },
    {
        text: 'Оператор, обозначающий строгое равенство',
        a: {
            text: '=',
        },
        b: {
            text: '==',
        },
        c: {
            text: '===',
            ok: true
        },
        answer: '==='
    },
    {
        text: 'Какой результат выражения:    let x = 5    x = (x++, x = addFive(x), x *= 2, x -= 5, x += 10)    function addFive(num) {return num + 5}',
        a: {
            text: '27',
            ok: true
        },
        b: {
            text: '29',
        },
        c: {
            text: '24',
        },
        answer: '27'
    },
    {
        text: 'Термин, описывающий подъем переменной или функции в глобальную или функциональную области видимости',
        a: {
            text: 'strict mode',
        },
        b: {
            text: 'Hoisting',
            ok: true
        },
        c: {
            text: 'const',
        },
        answer: 'Hoisting'
    },
    {
        text: 'Какие значения в JS являются ложными (перечислите через пробел)',
        a: {
            text: '"" 0 null undefined NaN false',
            ok: true
        },
        b: {
            text: 'false object function array null',
        },
        c: {
            text: 'number string false regexp undefined',
        },
        answer: '"" 0 null undefined NaN false'
    },
    {
        text: 'Как называется ссылка на значение объекта, который в данный момент выполняет или вызывает функцию',
        a: {
            text: 'target',
        },
        b: {
            text: 'currentTarget',
        },
        c: {
            text: 'this',
            ok: true
        },
        answer: 'this'
    },
    {
        text: 'Метод, который используется для привязки определенного объекта к значению this вызываемой функции, в котором аргументы передаются в виде массива',
        a: {
            text: 'bind',
        },
        b: {
            text: 'call',
        },
        c: {
            text: 'apply',
            ok: true
        },
        answer: 'apply'
    },
    {
        text: 'Метод, который используется для привязки определенного объекта к значению this вызываемой функции, в котором аргументы передаются в через запятую',
        a: {
            text: 'bind',
        },
        b: {
            text: 'call',
            ok: true
        },
        c: {
            text: 'apply',
        },
        answer: 'call'
    },
    {
        text: 'Метод, который возвращает новую функцию, значением this которой является объект, указанный в качестве первого параметра',
        a: {
            text: 'bind',
            ok: true
        },
        b: {
            text: 'call',
        },
        c: {
            text: 'apply',
        },
        answer: 'bind'
    },
    {
        text: 'Метод, который создает новый массив с результатом вызова указанной функции для каждого элемента массива',
        a: {
            text: 'map',
            ok: true
        },
        b: {
            text: 'filter',
        },
        c: {
            text: 'reduce',
        },
        answer: 'map'
    },
    {
        text: 'Метод, который создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции',
        a: {
            text: 'map',
        },
        b: {
            text: 'filter',
            ok: true
        },
        c: {
            text: 'reduce',
        },
        answer: 'filter'
    },
    {
        text: 'Метод, который применяет функцию к каждому элементу массива (слева-направо), возвращая одно результирующее значение',
        a: {
            text: 'map',
        },
        b: {
            text: 'filter',
        },
        c: {
            text: 'reduce',
            ok: true
        },
        answer: 'reduce'
    },
    {
        text: 'Метод, который выполняет указанную функцию 1 раз для каждого элемента массива',
        a: {
            text: 'some',
        },
        b: {
            text: 'filter',
        },
        c: {
            text: 'foreach',
            ok: true
        },
        answer: 'foreach'
    },
    {
        text: 'Метод, который возвращает истину, если в массиве есть хотябы один элемент для которого выполняется условие',
        a: {
            text: 'some',
            ok: true
        },
        b: {
            text: 'reduce',
        },
        c: {
            text: 'map',
        },
        answer: 'some'
    },
    {
        text: 'Коллекция аргументов, передаваемых функции',
        a: {
            text: 'elements',
        },
        b: {
            text: 'arguments',
            ok: true
        },
        c: {
            text: 'array',
        },
        answer: 'arguments'
    },
    {
        text: 'Какой шаблон нужен для вставки выражений в обычные строки ',
        a: {
            text: 'инкремент',
        },
        b: {
            text: 'интерполяция',
            ok: true
        },
        c: {
            text: 'итерация',
        },
        answer: 'интерполяция'
    },
    {
        text: 'Значение, получаемое в результате выполнения числовой операции над нечисловым значением',
        a: {
            text: 'null',
        },
        b: {
            text: 'undefined',
        },
        c: {
            text: 'NaN',
            ok: true
        },
        answer: 'NaN'
    },
    {
        text: 'Сколько результат вернет console.log("Тест по javascript".slice(5, -3).length)',
        a: {
            text: '10',
            ok: true
        },
        b: {
            text: '9',
        },
        c: {
            text: '11',
        },
        answer: '10'
    },
    {
        text: 'Метод массива, который объединяет элементы массива в строку',
        a: {
            text: 'split',
        },
        b: {
            text: 'join',
            ok: true
        },
        c: {
            text: 'push',
        },
        answer: 'join'
    },
    {
        text: 'Метод массива, который превращает строку в массив',
        a: {
            text: 'split',
            ok: true
        },
        b: {
            text: 'join',
        },
        c: {
            text: 'push',
        },
        answer: 'split'
    },
    {
        text: 'Метод массива, который добавляет элементы в конец массива и возвращает новую длину',
        a: {
            text: 'pop',
        },
        b: {
            text: 'split',
        },
        c: {
            text: 'push',
            ok: true
        },
        answer: 'push'
    },
    {
        text: 'Метод массива, который удаляет элементы массива и возвращает его значение',
        a: {
            text: 'pop',
            ok: true
        },
        b: {
            text: 'split',
        },
        c: {
            text: 'join',
        },
        answer: 'pop'
    },
    {
        text: 'Метод, который позволяет вызвать функцию один раз через определённый интервал времени',
        a: {
            text: 'timerId',
        },
        b: {
            text: 'setTimeout',
            ok: true
        },
        c: {
            text: 'setInterval',
        },
        answer: 'setTimeout'
    },
    {
        text: 'Метод, который позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени',
        a: {
            text: 'timerId',
        },
        b: {
            text: 'setTimeout',
        },
        c: {
            text: 'setInterval',
            ok: true
        },
        answer: 'setInterval'
    },
    {
        text: 'Mетод возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов',
        a: {
            text: 'querySelector',
            ok: true
        },
        b: {
            text: 'find',
        },
        c: {
            text: 'getElement',
        },
        answer: 'querySelector'
    },
    {
        text: 'Mетод в HTML-документах создает элемент',
        a: {
            text: 'setElement',
        },
        b: {
            text: 'createElement',
            ok: true
        },
        c: {
            text: 'new Element',
        },
        answer: 'createElement'
    },
    {
        text: 'Метод добавляет набор объектов в конец элемента (после последнего потомка) ',
        a: {
            text: 'children',
        },
        b: {
            text: 'appendСhild',
        },
        c: {
            text: 'append',
            ok: true
        },
        answer: 'append'
    }
];