                const unscLink = document.getElementById('UNSCLink')

                const undisecLink = document.getElementById('UNDISECLink')
                const unimoLink = document.getElementById('UNIMOLink')
                const unhscLink = document.getElementById('UNHSCLink')
                const unctadLink = document.getElementById('UNCTADLink')
                const unepLink = document.getElementById('UNEPLink')




                const AvailableTitle = document.getElementById('AvailableTitle')
                const CountryDisplay = document.getElementById('CountryParent')
                const AvailableDisplay = document.getElementById('AvailableDisplay')

                const chair = document.getElementById('chair')
                const countryCount = document.getElementById('countryCount')












                funcList = []


                
                let count = 0;
                let unscList = []
                let disecList = []
                let imoList = []
                let hscList = []
                let unctadList = []
                let unepList = []




                const sheetId = "1IVsDsySA8-v7qQCtZsOaC4t42hV5rW4Cg6QidO63dfA";
                const gid = "0"; 

                const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&id=${sheetId}&gid=${gid}`;



        async function getCSV() {
        const response = await fetch(url);
        const text = await response.text();

        const cleanText = text.replace(/\r/g, "");

        const sheetData = cleanText.split("\n").map(row => row.split(","));
        console.log(sheetData);

                // Unnecessary long ahh code lmao
        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+3][1] != ""){
                                unscList.push([])
                                unscList[i].push((sheetData[i+3][1]))
                                unscList[i].push((sheetData[i+3][2]))
                                unscList[i].push((sheetData[i+3][3]))
                        }
        }

        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+3][5] != ""){
                                disecList.push([])
                                disecList[i].push((sheetData[i+3][5]))
                                disecList[i].push((sheetData[i+3][6]))
                                disecList[i].push((sheetData[i+3][7]))
                        }
        }


        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+3][9] != ""){
                                imoList.push([])
                                imoList[i].push((sheetData[i+3][9]))
                                imoList[i].push((sheetData[i+3][10]))
                                imoList[i].push((sheetData[i+3][11]))
                        }
        }

        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+34][1] != ""){
                                hscList.push([])
                                hscList[i].push((sheetData[i+34][1]))
                                hscList[i].push((sheetData[i+34][2]))
                                hscList[i].push((sheetData[i+34][3]))
                        }
        }

        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+34][5] != ""){
                                unctadList.push([])
                                unctadList[i].push((sheetData[i+34][5]))
                                unctadList[i].push((sheetData[i+34][6]))
                                unctadList[i].push((sheetData[i+34][7]))
                        }
        }

        for (let i = 0; i < 27; i++) {
                        if (sheetData[i+34][9] != ""){
                                unepList.push([])
                                unepList[i].push((sheetData[i+34][9]))
                                unepList[i].push((sheetData[i+34][10]))
                                unepList[i].push((sheetData[i+34][11]))
                        }
        }

        console.log(unscList)
        console.log(disecList)
        console.log(imoList)
        console.log(hscList)
        console.log(unctadList)
        console.log(unepList)
        console.log(unepList[5][2])
        

                }

                
                getCSV();






                const flagMap = {
                        "United States":"us",
                        "France":"fr",
                        "United Kingdom":"gb",
                        "Russia":"ru",
                        "China":"cn",
                        "India":"in",
                        "Pakistan":"pk",
                        "Germany":"de",
                        "Switzerland":"ch",
                        "UAE":"ae",
                        "Albania":"al",
                        "Brazil":"br",
                        "South Africa":"za",
                        "Iran":"ir",
                        "Japan":"jp",
                        "Egypt":"eg",
                        "Algeria":"dz",
                        "Venezuela":"ve",
                        "Ecuador":"ec",
                        "Canada":"ca",
                        "Denmark":"dk",
                        "Finland":"fi",
                        "Sweden":"se",
                        "Australia":"au",
                        "Iceland":"is",
                        "Norway":"no",
                        "Iraq":"iq",
                        "North Korea":"kp",
                        "Indonesia":"id",
                        "Bangladesh":"bd",
                        "Vietnam":"vn",
                        "South Korea":"kr",
                        "Singapore":"sg",
                        "Kenya":"ke",
                        "Tuvalu":"tv",
                        "Philippines":"ph",
                        "Malaysia":"my",
                        "Brunei":"bn",
                        "Thailand":"th",
                        "Cambodia":"kh",
                        "Laos":"la",
                        "New Zealand":"nz",
                        "Mexico":"mx",
                        "Myanmar":"mm",
                        "Netherlands":"nl",
                        "Israel":"il",
                        "Ukraine":"ua",
                        "Romania":"ro",
                        "Ghana":"gh",
                        "Belarus":"by",
                        "Saudi Arabia":"sa",
                        "Cuba":"cu",
                        "Hungary":"hu",
                        "Mali":"ml",
                        "Afghanistan":"af",
                        "Italy":"it",
                        "Belgium":"be",
                        "Spain":"es",
                        "Poland":"pl",
                        "Tunisia":"tn",
                        "Argentina":"ar",
                        "Ireland":"ie",
                        "Turkey":"tr",
                        "Chile":"cl",
                        "Nigeria":"ng",
                        "Togo":"tg",
                        "Benin":"bj",
                        "Cameroon":"cm",
                        "Eq. Guinea":"gq",
                        "DR. Congo":"cd",
                        "Angola":"ao",
                        "Senegal":"sn",
                        "Gabon":"ga",
                        "USSR":"ru",
                        "Peru":"pe",
                        "Libya":"ly",
                        

                }
















                




                function addHtml(n){

                        
                        const availableLog = document.createElement("div")
                        const countryIcon = document.createElement("span")
                        const countryTitle = document.createElement("p")

                        availableLog.classList.add("available-log")

                        countryIcon.classList.add("fi")
                        countryIcon.classList.add("fi-"+flagMap[funcList[n][0]])
                        countryIcon.classList.add("available-flag")
                        

                        countryTitle.classList.add("available-country")
                        countryTitle.textContent = funcList[n][0]


                        availableLog.appendChild(countryIcon)
                        availableLog.appendChild(countryTitle)

                        if (funcList[n][1] == ""){
                                const availableText = document.createElement("p")

                                availableText.classList.add("available")

                                availableText.textContent = "Available"

                                availableLog.appendChild(availableText)
                                
                        } else {

                                count ++
                                
                                const subcontainer = document.createElement("div")
                                const nameText = document.createElement("p")
                                const schoolText = document.createElement("p")

                                subcontainer.classList.add("available-subcontainer")
                                nameText.classList.add("available-name")
                                schoolText.classList.add("available-school")

                                nameText.textContent = funcList[n][1]
                                schoolText.textContent = funcList[n][2]

                                subcontainer.appendChild(nameText)
                                subcontainer.appendChild(schoolText)
                                availableLog.appendChild(subcontainer)
                        }
                        AvailableDisplay.appendChild(availableLog)
                        

                }















                function fetchSheetData(x) {
                        
                        
                        if(x==="UNSC"){
                                funcList = unscList;
                        }else if(x==="UNDISEC"){
                                funcList = disecList;
                        }else if(x==="UNIMO"){
                                funcList = imoList;
                        }else if(x==="UNHSC"){
                                funcList = hscList;
                        }else if(x==="UNCTAD"){
                                funcList = unctadList;
                        }else if(x==="UNEP"){
                                funcList = unepList;
                        }

                        

                        for (let i = 0; i < funcList.length; i++) {
                                addHtml(i)
                        }


                        countryCount.textContent = count+"/"+funcList.length

                        

                        .catch(err => console.error("Error fetching data:", err));
                }
                








































































                function available(x) {
                        
                        AvailableDisplay.innerHTML = ""
                        CountryDisplay.classList.toggle('active')
                        AvailableTitle.textContent = x

                        count = 0
                        fetchSheetData(x)
                        if (x==="UNSC"){
                                chair.textContent = "Euan & Jan"
                        }else if(x==="UNDISEC"){
                                chair.textContent = "Jemima & Julie"
                        }else if(x==="UNIMO"){
                                chair.textContent = "Laetitia & Margaux"
                        }else if(x==="UNHSC"){
                                chair.textContent = "Elea & Tess"
                        }else if(x==="UNCTAD"){
                                chair.textContent = "Julia & Lyne"
                        }else if(x==="UNEP"){
                                chair.textContent = "Hayam & Inika"
                        }
                        


                }



                unscLink.addEventListener('click', () => {
                        available("UNSC")
                });
                
                undisecLink.addEventListener('click', () => {
                        available("UNDISEC")
                });
                
                unimoLink.addEventListener('click', () => {
                        available("UNIMO")
                });
                
                unhscLink.addEventListener('click', () => {
                        available("UNHSC")
                });
                
                unctadLink.addEventListener('click', () => {
                        available("UNCTAD")
                });
                
                unepLink.addEventListener('click', () => {
                        available("UNEP")
                });

                CountryDisplay.addEventListener('click', (e) => {
                        if (e.target === CountryDisplay){
                                AvailableDisplay.scrollTop = 0;
                                CountryDisplay.classList.toggle("active")
                        }
                });

