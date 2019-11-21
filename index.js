// if you haven't created db yet, please visit https://easydb.io/ and create one!

import easyDB from 'easydb-io'

// const dbId = 'ephemeral'
const uuid = 'eba2e57b-9410-4d48-bf6f-2ed34bf4990a'
const token = 'dfde8c59-5f86-4327-9f84-c8d2a41c70cf'

const db = easyDB({
    database: uuid,
    token: token
})

const key = 'sample'
const value = {
    title: 'Lorem Ipsum',
    description: 'Dolor sit amet.',
    child: {
        title: 'Consectetur',
        description: 'Adicisping alet menat.'
    }
}

const putButton = document.getElementById('put')
const getButton = document.getElementById('get')
const listButton = document.getElementById('list')
const deleteButton = document.getElementById('delete')

const results = document.getElementById('results')

putButton.addEventListener('click', () => {
    db.Put(key, value, (val, err) => {
        console.log(val, 'inserted on to db')

        if (err || val.length === 0) {
            console.log(err)
        }
    })
})

getButton.addEventListener('click', () => {
    db.Get(key, (val, err) => {
        results.innerHTML = JSON.stringify(val)
        console.log(val)

        if (err || val.length === 0) {
            console.log(err)
        }
    })
})

listButton.addEventListener('click', () => {
    db.List((val, err) => {
        console.log(val)
        
        if (err || val.length === 0) {
            console.log(err)
        }
    })
})

deleteButton.addEventListener('click', () => {
    db.Delete(key, (value, err) => {
        results.innerHTML = ''

        if (err || val.length === 0) {
            console.log(err)
        }
    })
})

// Or, async/await
// let value = null
// let values = null
// 
// value = await db.Put(key, { some: 'data' }) 
// value = await db.Get(key)
// value = await db.Delete(key)
// values = await db.List()