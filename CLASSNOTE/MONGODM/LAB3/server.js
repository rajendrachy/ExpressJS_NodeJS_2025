

const express = require("express")
const mongoose = require("mongoose")


const app = express()
mongoose.connect('mongodb://localhost:27017/aggreateE')
.then(()=> console.log("db connected.."))



const userSchema = new mongoose.Schema({
    userId: String,
    name: String,
    city: String,
})




const orderSchema = new mongoose.Schema({
    userId: String,
    orderAmount: Number,
    status: String
})




const User = mongoose.model("user", userSchema)
const Order = mongoose.model("order", orderSchema)




app.get("/seed", async(req, res)=>{
    await User.create([
        {userId: "u1", name: "Himanshu", city: "Shimla"},
        {userId: "u2", name: "Vaibhav", city: "Ajmer"},
        {userId: "u3", name: "Sunny", city: "Jhajjar"},
    ])

    await Order.create([
        {userId: "u1", orderAmount: 300, status: "Delivered"},
        {userId: "u2", orderAmount: 1000, status: "Pending"},
        {userId: "u1", orderAmount: 120, status: "Delivered"},
        {userId: "u3", orderAmount: 5000, status: "Delivered"},
        {userId: "u2", orderAmount: 120, status: "Pending"},
        {userId: "u1", orderAmount: 890, status: "Pending"},

    ])
    res.send("OK")
})


app.get("/aggregate", async(req, res)=>{
    // let data = await Order.aggregate([
    //     {$match: {status: "Delivered"}},
    //     {$project: {orderAmount: 1, _id: 0, status: 1}}
    // ])





    let data = await Order.aggregate([
        {
            $group: {
                _id: "$userId",
                totalSpending: {$sum: "$orderAmount"},
                averageSpending: {$avg: "$orderAmount"},
                minOrder: {$min : "$orderAmount"},
                maxOrder: {$max: "$orderAmount"},
                count: {$sum: 1}
            }
        },
        {$sort: {totalSpending: -1}},
    ])








    //   let data = await Order.aggregate([
    //     {
    //         $group: {
    //             _id: "$status",
    //             totalSpending: {$sum: "$orderAmount"},
    //         }
    //     },
    //     {$sort: {totalSpending: -1}},
    // ])



    res.send(data)



})




app.listen(3000, ()=>{
    console.log('server started..')
})


