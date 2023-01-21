// var promise1 = new Promise(resolve => setTimeout(() => {
//     console.log("first");
//     resolve()
// }, 1000));


// var promise2 = new Promise(resolve => setTimeout(() => {
//     console.log("second");
//     resolve();
// }, 2000));

// Promise.all([promise1, promise2]).then(res => {
//     console.log("here")
// })


// async function a() {
//     for (var i = 0; i < 10; i++) {
//         await console.log("a" + i);
//     }
// }

// async function b() {
//     for (var i = 0; i < 10; i++) {
//         await console.log("b" + i);
//     }
// }

// async function c() {
//     for (var i = 0; i < 10; i++) {
//         await console.log("c" + i);
//     }
// }

// a();
// b();
// c();

// console.log("=======================");

// async function a() {
//     await console.log("inside function");
//     console.log("Yo");
//     console.log("Anuj");
// }

// a().then(() => console.log("inside callback"));
// console.log("Outside Function");

// console.log("===============================")




///////////////// Important
// function a(){
//     console.log("Start");

//     new Promise((resolve, reject) => {
//         setTimeout(resolve("Inside Promises"), 10000);
//     }).then(res => console.log(res))

//     setTimeout(() => { console.log("Outside Promises") }, 2000);
// }

// a();




// foo = () => {
//     return "fds";
// }


// async function a(){
//     var arr = [0, 0, 0, 0, 0];
//     for(var i=0;i<arr.length;i++) {
//         console.log(arr[i]);
//     }

//     console.log("first");

//     var data = arr.map((item)=>{
//         console.log(item);
//         return item;
//     })

//     console.log("second");
// }

// a();





// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve('I did something'), 3000)
//     }).then(res => console.log("res", res))
// }

// const doSomething = async () => {
//     console.log(doSomethingAsync())
// }

// console.log('Before')
// doSomething()
// console.log('After')


// =================================================================

// console.log("Process Started");

// setTimeout(() => { console.log("inside First") }, 2000);

// setTimeout(() => { console.log("inside Second") }, 1000);

// console.log("Process Ended");


// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// async function a(time) {
//     return await new Promise((resolve, reject) => {
//         const seconds = new Date().getTime() / 1000;

//         while (true) {
//             if (new Date().getTime() / 1000 - seconds >= time) {
//                 console.log("Good, looped for 2 seconds")
//                 resolve("Good, looped for 2 seconds");
//                 return;
//             }
//         }
//     });

// }

// async function main(){
//     console.log("In Process");


// }


// main();

// var promise1 = new Promise(resolve => setTimeout(() => {
//     console.log("first");
//     resolve()
// }, 1000));


// var promise2 = new Promise(resolve => setTimeout(() => {
//     console.log("second");
//     resolve();
// }, 2000));

// var promise3 = new Promise(resolve => setTimeout(() => {
//     console.log("third");
//     resolve()
// }, 3000));


// var promise4 = new Promise(resolve => setTimeout(() => {
//     console.log("fourth");
//     resolve();
// }, 4000));

// var promise5 = new Promise(resolve => setTimeout(() => {
//     console.log("fifth");
//     resolve()
// }, 5000));


// var promise2 = new Promise(resolve => setTimeout(() => {
//     console.log("sixth");
//     resolve();
// }, 6000));

// var promise1 = new Promise(resolve => setTimeout(() => {
//     console.log("seventh");
//     resolve()
// }, 7000));


// var promise2 = new Promise(resolve => setTimeout(() => {
//     console.log("eight");
//     resolve();
// }, 8000));

// var promise1 = new Promise(resolve => setTimeout(() => {
//     console.log("nineth");
//     resolve()
// }, 9000));


// var promise2 = new Promise(resolve => setTimeout(() => {
//     console.log("tenth");
//     resolve();
// }, 10000));

// Promise.all([promise1, promise2]).then(res => {
//     console.log("here")
// })





// /~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/


// setTimeout(() => { console.log("Third Called") }, 3000);
// setTimeout(() => { console.log("Second Called") }, 2000);
// setTimeout(() => { console.log("First Called") }, 000);

// setImmediate(() => { console.log("here") })
// setTimeout(()=>{console.log("First Called Again")}, 1000);



const express = require("express");
const { Worker } = require("worker_threads");
const xlsx = require('xlsx');
const excel = require('exceljs');
const { scheduleJob } = require('node-schedule');
const Promise = require('bluebird-global');
const fs = require('fs-extra');
const qs = require("qs");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

app.use("/", express.static(__dirname + "/public"));

app.get("/create-excel", async (req, res) => {
    const start = new Date().getTime();
    // let workbook = new excel.Workbook();
    // let worksheet = workbook.addWorksheet("occupationBenchmark-sheet");
    // const sheetColumns = ['Sno', 'Name'].map(item => ({ header: item, key: item, width: 25 }));
    // worksheet.columns = sheetColumns;

    let rows = [];


    // process.nextTick(() => {
    for (let i = 0; i < 100000; i++) {
        rows.push({ Sno: i, Name: 'Anuj' });
    }
    console.log("here")

    // const result = await Promise.map(rows, (row) => worksheet.addRow(row), { concurrency: 1000 });
    // console.log(result);
    // worksheet.addRows(rows);

    const workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.json_to_sheet(rows);
    xlsx.utils.book_append_sheet(workBook, workSheet, `response`);
    const exportFileName = `response.xlsx`;
    xlsx.writeFile(workBook, exportFileName);
    const stream = fs.createReadStream(exportFileName);
    // res.status(200).download('response.xlsx');
    // const stream = fs.createReadStream(exportFileName);
    stream.pipe(res);

    // res.setHeader(
    //     "Content-Type",
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    // );
    // res.setHeader(
    //     "Content-Disposition",
    //     "attachment; filename=" + "OccupationBenchmarkHour.xlsx"
    // );

    // workbook.xlsx.writeFile("OccupationBenchmarkHour.xlsx").then(function () {
    //     // res.status(200).end();
    // });
    // });

});

app.get('/video', (req, res) => {
    // res.send('https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4')
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const videoPath = "small.mp4";
    const videoSize = fs.statSync("small.mp4").size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
})

app.get("/non-blocking", async (req, res) => {
    console.log("Non - blocking");
    res.status(200).send("This page is non-blocking");
});

app.get("/blocking", async (req, res) => {
    console.log("Blocking");
    // const worker = new Worker("./Worker.js");
    // worker.on("message", (data) => {
    //     res.status(200).send(`result is ${data}`);
    // });
    // worker.on("error", (msg) => {
    //     res.status(404).send(`An error occurred: ${msg}`);
    // });

    // let counter = 0;
    // for (let i = 0; i < 100000000000000000000000000000000000000000000000000000000; i++) {
    //     counter++;
    // }

    // res.status(200).send(`Counter: ${counter}`);
    setTimeout(() => {
        let counter = 0;
        for (let i = 0; i < 10000000000; i++) {
            counter++;
        }
        console.log(counter)
    }, 1000);

    console.log("Hello");

    res.status(200).send("Api Completed")
});

async function heavyTask(data, cb) {
    let counter = 0;
    for (let i = 0; i < data; i++) {
        await counter++;
    }
    cb(counter);
}



app.get('/agora', async (req, res) => {
    res.send("Hello There!");
})

const scheduleParams = {
    schedule: '*/1 * * * *',
    function: () => {
        startCRON();
    }
};

// scheduleJob(
//     scheduleParams.schedule,
//     scheduleParams.function
// );

const createMutex = async ({ filePath }) => {
    try {
        const fh = await fs.open(filePath, 'ax', '0222');
        /**
         * Code to sleep for 0.5 second for instant start of the cron service
         */
        await (() => {
            return new Promise((resolve) => {
                setTimeout(() => { resolve() }, 0.5 * 1000);
            })
        })();
    }
    catch (error) {
        return true;
    }
    return false;
}

const releaseMutex = ({ filePath }) => {
    // fs.closeSync(fh);
    fs.unlinkSync(filePath);
}

const writeFileUsingExcelJs = async () => {

}


const startCRON = async () => {
    try {
        const filePath = "./tmp/cron.js";
        const exist = await createMutex({ filePath });
        if (!exist) {
            console.log("Mutex Exist returning");
            return;
        }
        testfunc();
        releaseMutex({ filePath });
    } catch (err) {
        console.log(err);
    }

}

const testfunc = async () => {
    // await fs.unlink(filePath);
    console.log('success *** ');
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


// PROGRAM_ELIGIBILITY_OTHER

// PROGRAM_HIGHLIGHTS