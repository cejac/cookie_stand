var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
var sectionEl = document.getElementById("shops");

//Pike Place
var pikePlace = {
  name: "Pike Place",
  min: 17,
  max: 88,
  avgCookie: 5.2,
  hourlyTotal:[],
  dailySales: 0,
  hourlyCust: function(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  },
  hourlySales: function () {
    var hourly = [];
    for (var i = 0; i < hours.length; i++) {
      hourly[i] = Math.floor(this.hourlyCust(this.min, this.max) * this.avgCookie);
      this.dailySales += hourly[i];
      this.hourlyTotal = hourly;
    }
  },
  render: function() {
  var hEl = document.createElement('h1');
  var liEl = document.createElement('li');
  var ulEl = document.createElement('ul');
  this.hourlySales();
  hEl.textContent = this.name;
  liEl.textContent = 'Total: ' + this.dailySales;
  for (var j=0; j < hours.length; j++){
    var lisEl = document.createElement("li");
    lisEl.textContent = hours[j] + this.hourlyTotal[j];
    ulEl.appendChild(lisEl);
  }
  ulEl.appendChild(liEl);
  sectionEl.appendChild(hEl);
  sectionEl.appendChild(ulEl);
  }
}
pikePlace.render();

//SeaTac Airport
var seaTac = {
  name: "SeaTac Airport",
  min: 6,
  max: 24,
  avgCookie: 1.2,
  hourlyTotal:[],
  dailySales: 0,
  hourlyCust: function(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  },
  hourlySales: function () {
    var hourly = [];
    for (var i = 0; i < hours.length; i++) {
      hourly[i] = Math.floor(this.hourlyCust(this.min, this.max) * this.avgCookie);
      this.dailySales += hourly[i];
      this.hourlyTotal = hourly;
    }
  },
  render: function() {
  var hEl = document.createElement('h1');
  var liEl = document.createElement('li');
  var ulEl = document.createElement('ul');
  this.hourlySales();
  hEl.textContent = this.name;
  liEl.textContent = 'Total: ' + this.dailySales;
  for (var j=0; j < hours.length; j++){
    var lisEl = document.createElement("li");
    lisEl.textContent = hours[j] + this.hourlyTotal[j];
    ulEl.appendChild(lisEl);
  }
  ulEl.appendChild(liEl);
  sectionEl.appendChild(hEl);
  sectionEl.appendChild(ulEl);
  }
}
seaTac.render();

//Southcenter
var southcenter = {
  name: "Southcenter",
  min: 11,
  max: 38,
  avgCookie: 1.9,
  hourlyTotal:[],
  dailySales: 0,
  hourlyCust: function(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  },
  hourlySales: function () {
    var hourly = [];
    for (var i = 0; i < hours.length; i++) {
      hourly[i] = Math.floor(this.hourlyCust(this.min, this.max) * this.avgCookie);
      this.dailySales += hourly[i];
      this.hourlyTotal = hourly;
    }
  },
  render: function() {
  var hEl = document.createElement('h1');
  var liEl = document.createElement('li');
  var ulEl = document.createElement('ul');
  this.hourlySales();
  hEl.textContent = this.name;
  liEl.textContent = 'Total: ' + this.dailySales;
  for (var j=0; j < hours.length; j++){
    var lisEl = document.createElement("li");
    lisEl.textContent = hours[j] + this.hourlyTotal[j];
    ulEl.appendChild(lisEl);
  }
  ulEl.appendChild(liEl);
  sectionEl.appendChild(hEl);
  sectionEl.appendChild(ulEl);
  }
}
southcenter.render();

//Bellevue square
var bellevue = {
  name: "Bellevue Square",
  min: 20,
  max: 48,
  avgCookie: 3.3,
  hourlyTotal:[],
  dailySales: 0,
  hourlyCust: function(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  },
  hourlySales: function () {
    var hourly = [];
    for (var i = 0; i < hours.length; i++) {
      hourly[i] = Math.floor(this.hourlyCust(this.min, this.max) * this.avgCookie);
      this.dailySales += hourly[i];
      this.hourlyTotal = hourly;
    }
  },
  render: function() {
  var hEl = document.createElement('h1');
  var liEl = document.createElement('li');
  var ulEl = document.createElement('ul');
  this.hourlySales();
  hEl.textContent = this.name;
  liEl.textContent = 'Total: ' + this.dailySales;
  for (var j=0; j < hours.length; j++){
    var lisEl = document.createElement("li");
    lisEl.textContent = hours[j] + this.hourlyTotal[j];
    ulEl.appendChild(lisEl);
  }
  ulEl.appendChild(liEl);
  sectionEl.appendChild(hEl);
  sectionEl.appendChild(ulEl);
  }
}
bellevue.render();

//Alki
var alki = {
  name: "Alki",
  min: 3,
  max: 24,
  avgCookie: 2.6,
  hourlyTotal:[],
  dailySales: 0,
  hourlyCust: function(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  },
  hourlySales: function () {
    var hourly = [];
    for (var i = 0; i < hours.length; i++) {
      hourly[i] = Math.floor(this.hourlyCust(this.min, this.max) * this.avgCookie);
      this.dailySales += hourly[i];
      this.hourlyTotal = hourly;
    }
  },
  render: function() {
  var hEl = document.createElement('h1');
  var liEl = document.createElement('li');
  var ulEl = document.createElement('ul');
  this.hourlySales();
  hEl.textContent = this.name;
  liEl.textContent = 'Total: ' + this.dailySales;
  for (var j=0; j < hours.length; j++){
    var lisEl = document.createElement("li");
    lisEl.textContent = hours[j] + this.hourlyTotal[j];
    ulEl.appendChild(lisEl);
  }
  ulEl.appendChild(liEl);
  sectionEl.appendChild(hEl);
  sectionEl.appendChild(ulEl);
  }
}
alki.render();
