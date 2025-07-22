// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT)



// --------make this simple using a Zod-----------------
import {z} from "zod"; // to install zod use npm i zod

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19; // if 17, then error 18, 19 no problem

// const parseUserAge = ageSchema.parse(userAge);
// const {data, error, success} = ageSchema.safeParse(userAge);

// console.log(data); // waht userage = 19, 18, 17 waht user enter

// console.log(success); // true
// console.log(parseUserAge);











const portSchema = z.coerce.number().min(1).max(643776).default(3000); // z.coerce.number() converts (or "coerces") non-number input (like strings) into numbers before validating. 
// while using coerce then change PORT=3002 to PORT="3002" i.e number into string it will run

export const PORT = portSchema.parse(process.env.PORT);

