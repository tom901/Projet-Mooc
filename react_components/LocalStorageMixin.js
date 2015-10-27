var LocalStorageMixin = {
    /**
     * [storeMyItem set item into localstorage]
     * @param  {string} itemName  [Key Of Item]
     * @param  {JSON Object} itemValue [Json Object of data to stor]
     */
    storeMyItem: function(itemName, itemValue) {
        localStorage.setItem(itemName, JSON.stringify(itemValue));
    },
    /**
     * [deleteMyItem remove item into localstorage]
     * @param  {string} itemName  [Key Of Item]
     */
    deleteMyItem: function(itemName) {
        localStorage.removeItem(itemName);
    },
    /**
     * [getMyItem get item into localstorage]
     * @param  {string} itemName [description]
     * @return {JSON}          [description]
     */
    getMyItem: function(itemName) {
        return JSON.parse(localStorage.getItem(itemName) || '{}');
    }
};


module.exports = LocalStorageMixin;
