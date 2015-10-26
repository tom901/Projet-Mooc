var LocalStorageMixin = {
    componentWillMount: function() {
      console.log("LocalStorageMixin => componentWillMount ")
    },
    myfunction: function() {
        console.log("LocalStorageMixin => myfunction ");
    },
    componentWillUnmount: function() {
      console.log("LocalStorageMixin => componentWillUnmount ");
    }
};


module.exports = LocalStorageMixin;
