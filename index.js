const handlebars = require("handlebars");
const fs = require("fs");

const templateContent = fs.readFileSync("templates/report.handlebars", "utf-8");
const template = handlebars.compile(templateContent);

handlebars.registerHelper("list", function (items, options) {
    const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});

handlebars.registerHelper("tableRows", function (items, options) {
    const html = items.map(item => "<tr>" + options.fn(item) + "</tr>");
    return "\n" + html.join("") + "\n";
})

handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

const headerImgUrl = `D:\\Projects\\RutoHealth\\handlebars-template-generator\\images\\labLogo.png`
console.log(headerImgUrl)

const data = {
    "patientName": "Alan", "age": "12", "gender": "female", "patientNo": "123", "healthFacility": "some hospital", "billNo": "12", "sampleCollectedOn": "",
    "id": 9,
    "name": "Complete Haemogram",
    "subSections": [
        {
            "id": "D1ijWwPTsCLB4d6jgs9MG",
            "name": "Haemoglobin",
            "isSubReport": true,
            "unit": "g/dL",
            "sectionType": "text",
            "defaultValue": "",
            "reportSelfCost": 100,
            "reportFields": [],
            "reportOutsourceCost": 80,
            "reportCategoryId": 1,
            "inferenceCharges": 15,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "type": "range",
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 120
                        },
                        "minValue": 13,
                        "maxValue": 17
                    }
                ]
            }
        },
        {
            "id": "ApvXndDHE0amY_5fyOw36",
            "name": "RBC Count",
            "isSubReport": true,
            "unit": "m/c mm",
            "sectionType": "text",
            "reportSelfCost": 100,
            "reportFields": [],
            "reportOutsourceCost": 80,
            "reportCategoryId": 1,
            "inferenceCharges": 15,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "type": "range",
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 120
                        },
                        "minValue": 4.7,
                        "maxValue": 6.1
                    }
                ]
            }
        },
        {
            "id": "XjTkz0q-EEb41YeKfh20i",
            "name": "Total W.B.C Count",
            "isSubReport": true,
            "unit": "/cu mm",
            "sectionType": "text",
            "reportSelfCost": 100,
            "reportFields": [],
            "reportOutsourceCost": 80,
            "reportCategoryId": 1,
            "inferenceCharges": 15,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "type": "range",
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 120
                        },
                        "minValue": 5000,
                        "maxValue": 10000
                    }
                ]
            }
        },
        {
            "id": "zmYMOinm1ynW5CQZcvcaA",
            "name": "Diff W.B.C Count",
            "isSubReport": true,
            "sectionType": "heading",
            "reportSelfCost": 200,
            "reportFields": [
                {
                    "id": "eH5nVoFOLWHoIB6yBwhQH",
                    "name": "Polymorphs",
                    "unit": "%",
                    "sectionType": "text",
                    "reportCategoryId": 1,
                    "inferenceCharges": 30,
                    "inferencePercent": 15,
                    "normalValues": {
                        "male": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "female": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "common": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "5mVS0UT0WDK1MkhaNOWyj",
                    "name": "Lymphocytes",
                    "isSubReport": true,
                    "unit": "%",
                    "sectionType": "text",
                    "reportSelfCost": 100,
                    "reportOutsourceCost": 80,
                    "reportCategoryId": 1,
                    "inferenceCharges": 15,
                    "inferencePercent": 15,
                    "normalValues": {
                        "male": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "female": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "common": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ]
                    }
                },
                {
                    "id": "eGm4Laz41I2ghItotP8f5",
                    "name": "Mid Cells",
                    "unit": "%",
                    "sectionType": "text",
                    "reportCategoryId": 1,
                    "inferenceCharges": 30,
                    "inferencePercent": 15,
                    "normalValues": {
                        "male": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "female": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ],
                        "common": [
                            {
                                "from": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                },
                                "to": {
                                    "day": 0,
                                    "month": 0,
                                    "year": 0
                                }
                            }
                        ]
                    }
                }
            ],
            "reportOutsourceCost": 170,
            "reportCategoryId": 1,
            "inferenceCharges": 30,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ]
            }
        },
        {
            "id": "CnBkR-OClQ2zeAgh9Cq50",
            "name": "Platelets Count",
            "isSubReport": true,
            "unit": "/ cmm",
            "sectionType": "text",
            "reportSelfCost": 100,
            "reportFields": [],
            "reportOutsourceCost": 90,
            "reportCategoryId": 1,
            "inferenceCharges": 15,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "type": "range",
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 120
                        },
                        "minValue": 100000,
                        "maxValue": 400000
                    }
                ]
            }
        },
        {
            "id": "j6c6wWoqDQWxSQvFqVXxR",
            "name": "P C V",
            "isSubReport": true,
            "unit": "%",
            "sectionType": "text",
            "reportSelfCost": 100,
            "reportFields": [],
            "reportOutsourceCost": 80,
            "reportCategoryId": 1,
            "inferenceCharges": 15,
            "inferencePercent": 15,
            "normalValues": {
                "male": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "female": [
                    {
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        }
                    }
                ],
                "common": [
                    {
                        "type": "range",
                        "from": {
                            "day": 0,
                            "month": 0,
                            "year": 0
                        },
                        "to": {
                            "day": 0,
                            "month": 0,
                            "year": 120
                        },
                        "minValue": 40,
                        "maxValue": 54
                    }
                ]
            }
        }
    ],
    "isApprovalRequired": true,
    "isAuthorizeRequired": true,
    "createdAt": "2023-09-01 23:17:18.370866",
    "modifiedAt": "2023-09-01 23:17:18.370866",
    "healthFacilityId": 1,
    "inferencePercent": 15,
    "inferenceCharges": 60,
    "reportSelfCost": 400,
    "reportOutsourceCost": 350,
    "reportSpecimenId": 1,
    "reportCategoryId": 1,
    "createdBy": null,
    "modifiedBy": null,
    "isDeleted": false,
    "headerImgUrl": headerImgUrl
}
const result = template(data);

// not for production

fs.writeFile("./index.html",  result, function(res) {
    console.log(res)
})
// console.log(result)
var http = require('http');
const path = require("path");


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});