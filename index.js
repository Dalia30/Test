fetch('https://trainingweb02022.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      StudentsSelect = document.getElementById ('Students');
      json.Sheet1.forEach(element => {
          var option = document.createElement('option')
          option.innerHTML = element["A"]
          StudentsSelect.appendChild(option);
      });
  })