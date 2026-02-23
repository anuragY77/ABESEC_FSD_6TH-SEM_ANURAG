import{readFile} from "./readAndwrite.js";
const FILE = "/students.json";
const readData = async() => {
    const studentData = await readFile(FILE);
    console.log("Student Data:", studentData);
}
readData();