// Objects singleton

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nishant",
            lastname: "kumar",
        },
    },
};

// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh",
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);
