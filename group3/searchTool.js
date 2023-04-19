window.addEventListener('load', function() {
    var ulElements = document.querySelectorAll('ul');
    for (var i = 0; i < ulElements.length; i++) {
      ulElements[i].style.display = 'none';
    }
  });
  
  function myFunction() {
    // Declare variables
    var state, ul, li, a, i, txtValue;
    state = document.getElementById("stateSelect").value.toUpperCase();
    
      // Show both UL elements
    document.getElementById("myUL").style.display = "";
    document.getElementById("myUL2").style.display = "";

    // Filter first list
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (
        state === "" ||
        li[i].getAttribute("data-state").toUpperCase() === state
      ) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

    // Filter second list
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (
        state === "" ||
        li[i].getAttribute("data-state").toUpperCase() === state
      ) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  function fetchData() {
    // Fetch data from first CSV file
    Papa.parse("rj-organizations.csv", {
      download: true,
      header: true,
      complete: function (results) {
        var data = results.data;
        var ul = document.getElementById("myUL");
        for (var i = 0; i < data.length; i++) {
          var li = document.createElement("li");
          var h5 = document.createElement("h5");
          var a = document.createElement("a");
          var p = document.createElement("p");
          h5.textContent = data[i].name;
          a.appendChild(h5);
          a.href = data[i].url;
          a.target = "_blank";
          p.textContent = data[i].address;
          li.setAttribute("data-state", data[i].state);
          li.classList.add("list-group-item");
          li.appendChild(a);
          li.appendChild(p);
          ul.appendChild(li);
        }
      },
    });

    // Fetch data from second CSV file
    Papa.parse("rj-laws.csv", {
      download: true,
      header: true,
      complete: function (results) {
        var data = results.data;
        var ul = document.getElementById("myUL2");
        for (var i = 0; i < data.length; i++) {
          var li = document.createElement("li");
          var h5 = document.createElement("h5");
          var a = document.createElement("a");
          var p = document.createElement("p");
          h5.textContent = data[i].laws;
          a.appendChild(h5);
          p.textContent = "";
          // p.innerHTML = 
          // (data[i].bothSystems ? '<span style="display: inline-block; background-color: #31463F; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].bothSystems + '</span>' : '') +
          // (data[i].juveOnly ? '<span style="display: inline-block; background-color: #31463F; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].juveOnly + '</span>' : '') +
          // (data[i].adultOnly ? '<span style="display: inline-block; background-color: #31463F; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].adultOnly + '</span>' : '') +
          // (data[i].preAdjudication ? '<span style="display: inline-block; background-color: #CD395B; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].preAdjudication + '</span>' : '') +
          // (data[i].postAdjudication ? '<span style="display: inline-block; background-color: #CD395B; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].postAdjudication + '</span>' : '') +
          // (data[i].voluntaryVictim ? '<span style="display: inline-block; background-color: #FBC24C; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].voluntaryVictim + '</span>' : '') +
          // (data[i].voluntaryOffender ? '<span style="display: inline-block; background-color: #FBC24C; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].voluntaryOffender + '</span>' : '') +
          // (data[i].mandatoryOffender ? '<span style="display: inline-block; background-color: #FBC24C; color: white; padding: 5px; margin: 2.5px 5px 2.5px 5px; border-radius: 5px; white-space: nowrap;">' + data[i].mandatoryOffender + '</span>' : '');

          li.setAttribute("data-state", data[i].state);
          li.classList.add("list-group-item");
          li.appendChild(a);
          li.appendChild(p);
          ul.appendChild(li);
        }
      },
    });
  }

  fetchData();

  function updateHeader() {
    const list = document.querySelector('#myUL');
    const list2 = document.querySelector('#myUL2');
    const items = list.querySelectorAll('li');
    const items2 = list2.querySelectorAll('li');
    const h4 = document.querySelector('.searchHeader');
    let visibleItemCount = 0;
    let visibleItemCount2 = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].style.display !== 'none') {
        visibleItemCount++;
      }
    };
    for (let i = 0; i < items2.length; i++) {
      if (items2[i].style.display !== 'none') {
        visibleItemCount2++;
      }
    }
    const statuteLabel = visibleItemCount2 === 1 ? 'statute' : 'statutes';
    const organizationLabel = visibleItemCount === 1 ? 'organization' : 'organizations';
    const areLabel = visibleItemCount === 1 ? 'is' : 'are';
    h4.childNodes[0].textContent = `There ${areLabel} ${visibleItemCount} ${organizationLabel} and ${visibleItemCount2} ${statuteLabel} in `;
    console.log(visibleItemCount);
  }
  
  const dropdown = document.querySelector('#stateSelect');
  dropdown.addEventListener('change', updateHeader);
  