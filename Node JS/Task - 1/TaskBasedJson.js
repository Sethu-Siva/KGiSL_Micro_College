const fs = require('fs');
const { json } = require('stream/consumers');

var data = [
                {
                    "id" : 1,
                    "name" : "Nike Infinity Run",
                    "brand" : "NIKE",
                    "gender" : "MEN",
                    "category" : "RUNNING",
                    "price" : 2160,
                    "inventory" : true,
                    "items_left" : 15,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg"
                },
                {
                    "id" : 2,
                    "name" : "Nike Miler",
                    "brand" : "NIKE",
                    "gender" : "MEN",
                    "category" : "RUNNING",
                    "price" : 2000,
                    "inventory" : true,
                    "items_left" : 16,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg"
                },
                {
                    "id" : 3,
                    "name" : "Nike Air Zoom Pegasus",
                    "brand" : "NIKE",
                    "gender" : "WOMEN",
                    "category" : "RUNNING",
                    "price" : 2120,
                    "inventory" : true,
                    "items_left" : 8,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg"
                },
                {
                    "id" : 4,
                    "name" : "Nike Joyride Run Flyknit",
                    "brand" : "NIKE",
                    "gender" : "WOMEN",
                    "category" : "RUNNING",
                    "price" : 2180,
                    "inventory" : true,
                    "items_left" : 5,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg"
                },
                {
                    "id" : 5,
                    "name" : "Nike Mercurial Vapor",
                    "brand" : "NIKE",
                    "gender" : "WOMEN",
                    "category" : "FOOTBALL",
                    "price" : 2500,
                    "inventory" : true,
                    "items_left" : 3,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
                },
                {
                    "id" : 6,
                    "name" : "Nike Phantom Vision Elite Dynamic",
                    "brand" : "NIKE",
                    "gender" : "WOMEN",
                    "category" : "FOOTBALL",
                    "price" : 2500,
                    "inventory" : true,
                    "items_left" : 15,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg"
                },
                {
                    "id" : 7,
                    "name" : "Nike Phantom Venom Academy FG",
                    "brand" : "NIKE",
                    "gender" : "WOMEN",
                    "category" : "FOOTBALL",
                    "price" : 2800,
                    "inventory" : true,
                    "items_left" : 8,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg"
                },
                {
                    "id" : 8,
                    "name" : "Nike Mercurial Vapor 13 Elite",
                    "brand" : "NIKE",
                    "gender" : "MEN",
                    "category" : "FOOTBALL",
                    "price" : 2450,
                    "inventory" : true,
                    "items_left" : 7,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg"
                },
                {
                    "id" : 9,
                    "name" : "Nike Mercurial Superfly",
                    "brand" : "NIKE",
                    "gender" : "MEN",
                    "category" : "FOOTBALL",
                    "price" : 2600,
                    "inventory" : true,
                    "items_left" : 5,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg"
                },
                {
                    "id" : 10,
                    "name" : "Nike Air Force",
                    "brand" : "NIKE",
                    "gender" : "KIDS",
                    "category" : "CASUAL",
                    "price" : 1800,
                    "inventory" : true,
                    "items_left" : 12,
                    "imageURL" : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg"
                },
                {
                    "id" : 11,
                    "name" : "Nike Air Max 90",
                    "brand" : "NIKE",
                    "gender" : "KIDS",
                    "category" : "CASUAL",
                    "price" : 1400,
                    "inventory" : true,
                    "items_left" : 6,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg"
                },
                {
                    "id" : 12,
                    "name" : "Nike Air Max 90 LTR",
                    "brand" : "NIKE",
                    "gender" : "KIDS",
                    "category" : "CASUAL",
                    "price" : 1600,
                    "inventory" : true,
                    "items_left" : 8,
                    "imageURL" : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg"
                }
            ]

            var Men_Details = [];
            var Women_Details = [];
            var Kids_Details = [];

for ( var i = 0; i < data.length; i++ )
{
    if (data[i].gender == "MEN")
    {
        Men_Details.push(data[i])
    }
    else if (data[i].gender == "WOMEN")
    {
        Women_Details.push(data[i])
    }
    else if (data[i].gender == "KIDS")
    {
        Kids_Details.push(data[i])
    }
}

fs.writeFileSync('Mens Details.json',JSON.stringify(Men_Details));
fs.writeFileSync('Women Details.json',JSON.stringify(Women_Details));
fs.writeFileSync('Kids Details.json',JSON.stringify(Kids_Details));


var fileData = fs.readFileSync('./Mens Details.json');

for ( var i = 0; i < fileData.length; i++ )
{
    console.log(JSON.stringify(fileData[i]));
}

