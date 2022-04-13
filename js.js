

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
            document.querySelector('.form-input').target = `"_blank"`;
            document.querySelector('button>a').href = `${item.ref}`;
            document.querySelector('title').innerHTML = `${item.name}`
            return `<li><a href="${item.ref}">${item.name}</a></li>`

        }).join(' ')

        document.querySelector('ul').innerHTML = liElement;

    } else {

        document.querySelector('ul').innerHTML = '';
        document.querySelector('.form-input').target = '';
        document.querySelector('title').innerHTML = 'Home'
        document.querySelector('form').action = '#';
    }
}


document.querySelector('input').addEventListener('keyup', handlerKeyup)


let promise = new Promise((resolve, reject) => {

    resolve([
        {
            id: 1,
            name: 'Lập Trình JavaScript Cơ Bản',
            description: 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',
            url: 'https://fullstack.edu.vn/courses/javascript-co-ban',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
        },
        {
            id: 2,
            name: 'Xây Dựng Website với ReactJS',
            description: 'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
            url: 'https://fullstack.edu.vn/courses/reactjs',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        },
    ])

    reject('Có lỗi vui lòng liên hệ quản trị viên')

})

promise
    .then((courses) => {
        const htmls = courses.map((course) => {
            return `
            <div class="col-xl-6 col-lg-6">
            <div>
            <a href="${course.url}" target="_blank">
                <h3>${course.name}</h3>
                <div class="img" style="background: url('${course.image}') center no-repeat; background-size: cover;"></div>
                <p>${course.description}</p>
            </a>
        </div>
            </div>
            `

        }).join(' ')
        document.querySelector('.row').innerHTML = htmls
    })

    .catch((error) => {
        document.querySelector('body').innerHTML = error;
    })

    .finally(() => {
        setTimeout(() => {
            document.querySelector('.loading').style.display = 'none'
        }, 1000)
    })

