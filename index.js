import * as readline from "readline";
import * as os from 'os';


const userInfo = os.userInfo();
const userName = userInfo.username;

const cpuInfo = os.cpus();
const numOfCpus = os.cpus().length;

const userHomeDir = os.homedir();
const cpuArch = os.arch();
const hostName = os.hostname();
const platform = os.platform();
const memory = os.totalmem();


const goodByeMessage = `Thank you ${userName}, goodbye!`;


console.log(`Welcome ${userName}!`);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('SIGINT', () => {
    console.log(goodByeMessage);
    process.exit();
});

function createCommand(question) {

    rl.question(question, (answer) => {

        switch (answer) {
            case '.exit':
                console.log(goodByeMessage);
                process.exit();
                break;
            case 'os --cpus':
                let cpuModels = [];
                for (let cpu of cpuInfo) {
                    cpuModels.push(cpu.model + "\r\n");
                }
                console.log(`Overall amount of CPU models is ${numOfCpus}. \r\n`, `CPU models are: \r\n ${cpuModels}`);
                break;
            case 'os --homedir':
                console.log(userHomeDir);
                break;
            case 'os --username':
                console.log(userName);
                break;
            case 'os --architecture':
                console.log(cpuArch);
                break;
            case 'os --hostname':
                console.log(hostName);
                break;
            case 'os --platform':
                console.log(platform);
                break;
            case 'os --memory':
                console.log(memory);
                break;
            default:
                console.log("Invalid input.");
        }

        createCommand(question);
    })
}

createCommand("Type command >> ");

