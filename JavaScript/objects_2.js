
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Tom"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "anyone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "izzah",
            lastname: "shahzad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "x", 2: "y"}
const obj2 = {3: "x", 4: "y"}
const obj4 = {5: "x", 6: "y"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "izzah@gmail.com"
    },
    {
        id: 1,
        email: "izzah@gmail.com"
    },
    {
        id: 1,
        email: "izzah@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    coursename: "JacvaScript",
    price: "2399",
    courseInstructor: "Izzah"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Izzah",
//     "coursename": "JavaScript",
//     "price": "free of cost"
// }

[
    {},
    {},
    {}
]
