module.exports = {
    forEach(arr, fn) {
        arr.forEach((element, index) => fn(element, index));

        // for (let index in arr) {
        //     fn(arr[index], index);
        // }

        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     fn(value, i);
        // }
    },
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i));
        }
        return result;
    }
};