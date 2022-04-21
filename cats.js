

//to get all entries
const getAllCats = async () => {
    const url = `https://6260d106f429c20deb95d050.mockapi.io/catNames`;

    try {
        const response = await fetch(url);
        const cats = await response.json();
        console.log(cats);
    }
    catch (error) {
        console.log(error);
    }
}

getAllCats()

//to get one entry
const getCat = async (id) => {
    const url = `https://6260d106f429c20deb95d050.mockapi.io/catNames/${id}`;


    try {
        const response = await fetch(url);
        const cats = await response.json();
        console.log(cats);
    }
    catch (error) {
        console.log(error);
    }
}

//getCat(1)

//to create cat
const createCat = async (cat) => {
    const url = `https://6260d106f429c20deb95d050.mockapi.io/catNames`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: 'input',
                isSleeping: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const cat = await response.json();
        console.log(cat)
    }   catch (error) {
            return error;
    }
}

//createCat(cat);

//update info

const updateCat = async (id) => {
    const url = `https://6260d106f429c20deb95d050.mockapi.io/catNames/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                isSleeping: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const cat = await response.json();
        console.log(cat);
    } catch (error){
        return error;
    }
}
//updateCat(1);


//to delete an entry

const deleteCat = async (id) => {
    const url = `https://6260d106f429c20deb95d050.mockapi.io/catNames/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const cat = await response.json();
        console.log(cat)
    } catch (error) {
        return error;
    }
}

//deleteCat(11);