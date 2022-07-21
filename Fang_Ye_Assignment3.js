const btn1 = document.querySelector("#btn1");
const myTable = document.querySelector("#table");

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },

    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },

    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "233 Dr, Sunnyvale CA, 94016",
    },
  ],
};
students = tableInfo.tableContent;
headers = tableInfo.tableHeader;

btn1.addEventListener("click", () => {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    const textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  students.forEach((stu) => {
    const row = document.createElement("tr");
    Object.values(stu).forEach((text) => {
      const cell = document.createElement("td");
      const textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  myTable.appendChild(table);
});

//Question 2
const list1 = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const ul = document.getElementById("unl");

// create ul element and set the attributes
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  list1.forEach((e) => {
    const li = document.createElement("li");
    li.innerText = e;
    ul.append(li);
  });
});

const btn3 = document.getElementById("btn3");
const ol = document.getElementById("ol");

btn3.addEventListener("click", () => {
  list1.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = e;
    ol.append(li);
  });
});

//Question 3 dropdown list
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const btn4 = document.getElementById("btn4");
const select = document.getElementById("select");

btn4.addEventListener("click", () => {
  dropDownList.forEach((e) => {
    const option = document.createElement("option");
    txt = document.createTextNode(e.content);
    option.appendChild(txt);
    select.appendChild(option);
  });
});
