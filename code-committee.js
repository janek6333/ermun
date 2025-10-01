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









                
                let sheetData = [];
                let count = 0;

                const sheetId = '1IVsDsySA8-v7qQCtZsOaC4t42hV5rW4Cg6QidO63dfA';
                let range = 0
                const sheetName = "Committee Matrix"


                const dotenv = require("dotenv");
                dotenv.config();
                
                const apiKey = process.env.API_KEY;
                
                if (!apiKey) {
                  console.error("No API key found!");
                }


                let url = 0





                const flagMap = {
                        "USA":"us",
                        "France":"fr",
                        "UK":"gb",
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
                }
















                




                function addHtml(n){

                        console.log("2) " + count )
                        
                        const availableLog = document.createElement("div")
                        const countryIcon = document.createElement("span")
                        const countryTitle = document.createElement("p")

                        availableLog.classList.add("available-log")

                        countryIcon.classList.add("fi")
                        countryIcon.classList.add("fi-"+flagMap[sheetData[n][0]])
                        countryIcon.classList.add("available-flag")
                        

                        countryTitle.classList.add("available-country")
                        countryTitle.textContent = sheetData[n][0]


                        availableLog.appendChild(countryIcon)
                        availableLog.appendChild(countryTitle)

                        if (sheetData[n].length == 1){
                                const availableText = document.createElement("p")

                                availableText.classList.add("available")

                                availableText.textContent = "Available"

                                availableLog.appendChild(availableText)
                                
                        } else if(sheetData[n].length == 3) {

                                count ++
                                console.log("3) " + count )
                                const subcontainer = document.createElement("div")
                                const nameText = document.createElement("p")
                                const schoolText = document.createElement("p")

                                subcontainer.classList.add("available-subcontainer")
                                nameText.classList.add("available-name")
                                schoolText.classList.add("available-school")

                                nameText.textContent = sheetData[n][1]
                                schoolText.textContent = sheetData[n][2]

                                subcontainer.appendChild(nameText)
                                subcontainer.appendChild(schoolText)
                                availableLog.appendChild(subcontainer)
                        }
                        AvailableDisplay.appendChild(availableLog)
                        

                }















                function fetchSheetData(x) {
                        
                        
                        if(x==="UNSC"){
                                range = 'B4:D30';
                        }else if(x==="UNDISEC"){
                                range = 'F4:H30';
                        }else if(x==="UNIMO"){
                                range = 'J4:L30';
                        }else if(x==="UNHSC"){
                                range = 'B35:D61';
                        }else if(x==="UNCTAD"){
                                range = 'F35:H61';
                        }else if(x==="UNEP"){
                                range = 'J35:L61';
                        }

                        url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;


                        fetch(url)
                        .then(res => res.json())
                        .then(data => {
                        sheetData = data.values;
                        

                        for (let i = 0; i < sheetData.length; i++) {
                                addHtml(i)
                        }


                        countryCount.textContent = count+"/"+sheetData.length


                })

                        .catch(err => console.error("Error fetching data:", err));
                }
                








































































                function available(x) {
                        
                        AvailableDisplay.innerHTML = ""
                        CountryDisplay.classList.toggle('active')
                        AvailableTitle.textContent = x

                        count = 0
                        console.log("1) " + count )
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
                                CountryDisplay.classList.toggle("active")
                        }
                });
