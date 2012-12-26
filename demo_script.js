// Write your own demo script

title('Title here');

step('Step 1', function () {

  item('Item 1-A', function () {

    desc(function () {
      return 'This is Item 1-A';
    });

    code(function () {
      console.log('Item 1-A');
    });

    debug(function () {
      console.log('Debug Mode: Item 1-A');
    });

  });

  item('Item 1-B', function () {

    desc(function () {
      return 'This is Item 1-B';
    });

    code(function () {
      console.log('Item 1-B');
    });

  });

  item('Item 1-C', function () {

    desc(function () {
      return 'This is Item 1-C';
    });

    code(function () {
      console.log('Item 1-C');
    });

  });

});

step('Step 2', function () {

  item('Item 2-A', function () {

    desc(function () {
      return 'This is Item 2-A';
    });

    code(function () {
      console.log('Item 2-A');
    });

  });

  item('Item 2-B', function () {

    desc(function () {
      return 'This is Item 2-A';
    });

    code(function () {
      console.log('Item 2-B');
    });

  });

});

step('Step C', function () {

  // no item

});

run();