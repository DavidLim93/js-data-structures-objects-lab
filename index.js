// Write your solution in this file!
let driver = {
    name: 'Sam',
    address: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    driver = {
        name: 'Sam',
    address: '11 Broadway'
    }
    return driver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.address = '12 Broadway';
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    var newDriver = Object.assign({}, driver);
    delete newDriver['name'];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name;
    return driver;
}