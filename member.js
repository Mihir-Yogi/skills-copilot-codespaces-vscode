function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
        }
    };
    return member;
}