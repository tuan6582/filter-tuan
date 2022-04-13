

const myArray = [
    {
        id: 1,
        name: 'Facebook',
        ref: 'https://www.facebook.com/'
    },
    {
        id: 2,
        name: 'Google',
        ref: 'https://www.google.com/'
    },
    {
        id: 3,
        name: 'Youtube',
        ref: 'https://www.youtube.com/'
    },
    {
        id: 4,
        name: 'Google dịch',
        ref: 'https://translate.google.com/'
    },
    {
        id: 5,
        name: 'React Js',
        ref: 'https://reactjs.org/'
    },
]

const handlerKeyup = (event) => {
    let values = event.target.value;
    if (values) {
        const newArray = myArray.filter((item) => item.name.toLocaleLowerCase().startsWith(values.toLocaleLowerCase()));

        let liElement = newArray.map((item) => {

            document.querySelector('.form-input').action = `${item.ref}`;
            document.querySelector('button>a').href = `${item.ref}`;

            return `<li><a href="${item.ref}">${item.name}</a></li>`

        }).join(' ')

        document.querySelector('ul').innerHTML = liElement;

    } else {

        document.querySelector('ul').innerHTML = '';
        document.querySelector('.form-input').action = '#';
    }
}


document.querySelector('input').addEventListener('keyup', handlerKeyup)
