type IDFieldType = string | number //type Alias

const printID = (id: IDFieldType) => { //union
    console.log("ID: " + id)
}

printID(23232323)