const express = require("express")
const app = express()
const fs = require('fs-extra')


app.post("/api/v1/insertView", (req, res) => {


    fs.readJson('./view.json')
        .then(count => {
            fs.writeJson('./view.json', { count: parseInt(Object.values(count)) + 1 })
                .then((updatedCount) => {
                    console.log(parseInt(Object.values(count)) + 1)
                    res.status(201).send({ updatedViewr: parseInt(Object.values(count)) + 1 })
                }).catch(err1 => {
                    console.error(err1)
                    res.status(500).send({ error: "error for insert a data  ", err1 })
                })
        }).catch(err2 => {
            console.error(err2)
            res.status(500).send({ error: "error for read a data  ", err2 })
        })
})

app.get("/api/v1/getView", (req, res) => {
    fs.readJson('./view.json')
        .then(count => {
            res.status(200).send({ viewrCount: parseInt(Object.values(count)) })
        }).catch(err => {
            res.status(500).send({ error: "error for read a data  ", err })
        })
})

const port = 4000
app.listen(port, () => {
    console.log(`app is runnig at ${port}`)
})