document.addEventListener('DOMContentLoaded', () => {
    //console.log(calObj);
    const title = document.createElement('h1');
    title.innerText = 'Social Calendar';
    document.querySelector('body').appendChild(title);
    // make AJAX call here....
    const url = 'http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/LA/42';
  
    fetch(url)
      .then(response => response.json())
      .then(calObj => {
        const calendar = new Calendar(calObj);
        document.createElement('div');
      });
  });
  
