const questionsHtml = [
    {
        text: 'Элемент, расположенный внутри одного или более типов элементов',
        a: {
            text: 'потомок',
            ok: true
        },
        b: {
            text: 'предок',
        },
        c: {
            text: 'родительский',
        },
        answer: 'потомок'
    },
    {
        text: 'Элемент, имеющий общий родительский элемент с рассматриваемым',
        a: {
            text: 'родительский',
        },
        b: {
            text: 'дочерний',
        },
        c: {
            text: 'сестринский',
            ok: true
        },
        answer: 'сестринский'
    },
    {
        text: 'Строчный элемент, используемый для создания ссылок, в зависимости от атрибута href  устанавливает ссылку или якорь',
        a: {
            text: 'b',
        },
        b: {
            text: 'a',
            ok: true
        },
        c: {
            text: 'i',
        },
        answer: 'a'
    },
    {
        text: 'Строчный элемент, определяющий жирное начертание шрифта',
        a: {
            text: 'b',
            ok: true
        },
        b: {
            text: 'u',
        },
        c: {
            text: 'i',
        },
        answer: 'b'
    },
    {
        text: 'Строчный элемент, определяющий курсивное начертание шрифта',
        a: {
            text: 'b',
        },
        b: {
            text: 'u',
        },
        c: {
            text: 'i',
            ok: true
        },
        answer: 'i'
    },
    {
        text: 'Тег, используемый для определения строчного элемента внутри документа',
        a: {
            text: 'p',
        },
        b: {
            text: 'div',
        },
        c: {
            text: 'span',
            ok: true
        },
        answer: 'span'
    },
    {
        text: 'Тег, относящийся к универсальным блочным контейнерам и применяются в тех случаях, где нужны блочные элементы без дополнительных свойств',
        a: {
            text: 'p',
        },
        b: {
            text: 'div',
            ok: true
        },
        c: {
            text: 'span',
        },
        answer: 'div'
    },
    {
        text: 'Тег, который создает маркированный список',
        a: {
            text: 'ul',
            ok: true
        },
        b: {
            text: 'ol',
        },
        c: {
            text: 'li',
        },
        answer: 'ul'
    },
    {
        text: 'Тег, который создает нумерованный список',
        a: {
            text: 'ul',
        },
        b: {
            text: 'ol',
            ok: true
        },
        c: {
            text: 'li',
        },
        answer: 'ol'
    },
    {
        text: 'Тег, который создает элемент списка',
        a: {
            text: 'ul',
        },
        b: {
            text: 'ol',
        },
        c: {
            text: 'li',
            ok: true
        },
        answer: 'li'
    },
    {
        text: 'Тег, который является контейнером для элементов таблицы и все элементы должны находиться внутри него',
        a: {
            text: 'table',
            ok: true
        },
        b: {
            text: 'tr',
        },
        c: {
            text: 'th',
        },
        answer: 'table'
    },
    {
        text: 'Тег, который задает строку таблицы',
        a: {
            text: 'tr',
            ok: true
        },
        b: {
            text: 'table',
        },
        c: {
            text: 'th',
        },
        answer: 'tr'
    },
    {
        text: 'Тег, который задает ячейку таблицы',
        a: {
            text: 'tr',
        },
        b: {
            text: 'table',
        },
        c: {
            text: 'td',
            ok: true
        },
        answer: 'td'
    },
    {
        text: 'Элемент, который создает большинство полей формы',
        a: {
            text: 'form',
        },
        b: {
            text: 'input',
            ok: true
        },
        c: {
            text: 'label',
        },
        answer: 'input'
    },
    {
        text: 'Значение атрибута type элемента input, который создает текстовое поле в форме, выводя односрочное текстовое поле для ввода текста',
        a: {
            text: 'radio',
        },
        b: {
            text: 'text',
            ok: true
        },
        c: {
            text: 'password',
        },
        answer: 'text'
    },
    {
        text: 'Значение атрибута type элемента input, который создает переключатель - элемент управления в виде круга, который можно включать и выключать',
        a: {
            text: 'radio',
            ok: true
        },
        b: {
            text: 'text',
        },
        c: {
            text: 'checkbox',
        },
        answer: 'radio'
    },
    {
        text: 'Значение атрибута type элемента input, который превращает поле ввода во флажок, который можно установить или очистить',
        a: {
            text: 'radio',
        },
        b: {
            text: 'text',
        },
        c: {
            text: 'checkbox',
            ok: true
        },
        answer: 'checkbox'
    },
    {
        text: 'Значение атрибута type элемента input, который позволяет создать ползунок',
        a: {
            text: 'time',
        },
        b: {
            text: 'sear',
        },
        c: {
            text: 'range',
            ok: true
        },
        answer: 'range'
    },
    {
        text: 'Значение атрибута type элемента input, который создает текстовое поле в форме, при этом вводимые пользователем символы заменяются на звездочки',
        a: {
            text: 'password',
            ok: true
        },
        b: {
            text: 'sear',
        },
        c: {
            text: 'range',
        },
        answer: 'password'
    },
    {
        text: 'Значение атрибута type элемента input, который обозначает поле поиска',
        a: {
            text: 'password',
        },
        b: {
            text: 'sear',
            ok: true
        },
        c: {
            text: 'range',
        },
        answer: 'sear'
    },
    {
        text: 'Элемент, используемый вместо элемента <input type="text">, когда нужно создать большие текстовые поля',
        a: {
            text: 'select',
        },
        b: {
            text: 'option',
        },
        c: {
            text: 'textarea',
            ok: true
        },
        answer: 'textarea'
    },
    {
        text: 'Элемент, который создает раскрывающийся список',
        a: {
            text: 'select',
            ok: true
        },
        b: {
            text: 'option',
        },
        c: {
            text: 'textarea',
        },
        answer: 'select'
    },
    {
        text: 'Ярлыки полей формы',
        a: {
            text: 'label',
            ok: true
        },
        b: {
            text: 'button',
        },
        c: {
            text: 'input',
        },
        answer: 'label'
    },
    {
        text: 'Значение атрибута type элемента button, который обозначает кнопку сброса, возвращающую первоначальное значение',
        a: {
            text: 'reset',
            ok: true
        },
        b: {
            text: 'button',
        },
        c: {
            text: 'submit',
        },
        answer: 'reset'
    },
    {
        text: 'Значение атрибута type элемента button, который обозначает кнопку для отправки данных формы',
        a: {
            text: 'reset',
        },
        b: {
            text: 'button',
        },
        c: {
            text: 'submit',
            ok: true
        },
        answer: 'submit'
    }
];