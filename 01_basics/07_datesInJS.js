let myDate = new Date();
console.log(myDate); // 2024-07-18T05:29:33.597Z
console.log(myDate.toString()); //Thu Jul 18 2024 05:30:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Thu Jul 18 2024
console.log(myDate.toISOString()); // 2024-07-18T05:31:32.366Z
console.log(myDate.toLocaleString()); // 7/18/2024, 5:31:32 AM
console.log(myDate.toJSON()); // 2024-07-18T05:31:32.366Z

let myCreatedDate = new Date(1985, 11, 31);
console.log(myCreatedDate.toDateString()); // Tue Dec 31 1985

let myCreatedDate1 = new Date("12-31-1985");
console.log(myCreatedDate1.toLocaleString()); // 12/31/1985, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


myCreatedDate1.toLocaleString('default',{
    weekday: "long"
}
);