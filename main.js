//$(document).ready()
import { january, february, march, april, may, june, july, august, september, october, november, december } from './codex.js';
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const dayOfTheMonth = currentDate.getDate() -1;


//codex
let docObject;
switch (currentMonth) {
    case 0:
        docObject = january;
        break;
    case 1:
        docObject = february;
        break;
    case 2:
        docObject = march;
        break;
    case 3:
        docObject = april;
        break;
    case 4:
        docObject = may; 
        break;
    case 5:
        docObject = june; 
        break;
    case 6:
        docObject = july; 
        break;
    case 7:
        docObject = august; 
        break;
    case 8:
        docObject = september; 
        break;
    case 9:
        docObject = october; 
        break;
    case 10:
        docObject = november; 
        break;
    case 11:
        docObject = december; 
        break;
    default:
        `You should not have come here!`;
}

//date
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const day = currentDate.getDate();
const dayOfWeek = daysOfWeek[currentDate.getDay()];

const month = monthsOfYear[currentDate.getMonth()];
const year = currentDate.getFullYear();

    const suffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    function sanitizeHTML(html) {
        const tempDiv = document.createElement('div');
        tempDiv.textContent = html; // Escapes HTML
    
        // Convert <em> tags back to HTML
        tempDiv.innerHTML = tempDiv.innerHTML.replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\/em&gt;/g, '</em>');
    
        return tempDiv.innerHTML;
    }
    
    const dayElement = document.getElementById('date');
    dayElement.innerHTML = sanitizeHTML(`Today is ${dayOfWeek} ${day}${suffix(day)} ${month} ${year}`);
    
    const verseElement = document.getElementById('verse');
    verseElement.innerHTML = sanitizeHTML(docObject.verseArray[dayOfTheMonth]);
    
