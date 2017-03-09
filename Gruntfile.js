module.exports = function(grunt) {
    grunt.registerTask('task1', function () {
        console.log('This is task 1.');
    });

    grunt.registerTask('task2', function () {
        console.log('This is task 2.');
    });

    grunt.registerTask('both', ['task1', 'task2']); // -> grunt both

    grunt.registerTask('default', ['task1', 'task2']); // -> grunt
};
