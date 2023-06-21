let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
//Yêu cầu 1
const ratingGreaterThanOrEqualFour = courses.filter(courses => courses.rating >= 4);
console.log(ratingGreaterThanOrEqualFour);
//Yêu cầu 2
const formatRatingLessThanFour = courses.filter(courses => courses.rating < 4).map((formatRatingLessThanFour) => {
    return `${formatRatingLessThanFour.id} - ${formatRatingLessThanFour.title} - ${formatRatingLessThanFour.rating}`
})
console.log(formatRatingLessThanFour);
//    Yêu cầu 3
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
const mergeArray = [...courses, ...addedCourses];
console.log(mergeArray);