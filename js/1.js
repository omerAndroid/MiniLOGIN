"use strict";
(function () {

    window.onload = function () {
        document.getElementById("onclick1").onclick = onclick1;
    };

    function onclick1() {
        alert("Hello World!");
    }

    const tableData = [
        {
            id: 1,
            Item: "Origin License",
            Description: "Extended License",
            Unit_Cost: 99900,
            Qty: 1,
            Total: 99900
        },
        {
            id: 2,
            Item: "mic",
            Description: "Extended License",
            Unit_Cost: 100,
            Qty: 10,
            Total: 1000
        },
        {
            id: 3,
            Item: "adasd",
            Description: "asdasd License",
            Unit_Cost: 1000,
            Qty: 20,
            Total: 20000
        }
    ]

    function renderTable() {
        
            const tbody = document.getElementById("tbody");
            tbody.innerHTML = ''
            for (var row of tableData){
            tbody.innerHTML +=`
            <tr>
                    <td class="center">${row.id}</td>
                    <td class="left strong">${row.Item}</td>
                    <td class="left">${row.Description}</td>

                    <td class="right">${row.Unit_Cost}</td>
                    <td class="center">${row.Qty}</td>
                    <td class="right">${row.Total}</td>
                  </tr>
            `
            }
    }
    renderTable();
})();
