/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []

    };
}
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }
  function createTimeInEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(' '); 
    const [year, month, day] = date.split('-'); 
    const [hour, minute] = time.match(/\d{2}/g); 
  
    
    const timeInEvent = {
      type: "TimeIn",
      date: date,
      hour: parseInt(hour + minute, 10) 
    };
  
    this.timeInEvents.push(timeInEvent); // Add timeIn event to employee's record
    return this; // Return the updated employee record
  }
  
function createTimeOutEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.match(/\d{2}/g);

    const timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour + minute, 10)
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
}
function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const timeIn = timeInEvent.hour;
      const timeOut = timeOutEvent.hour;
      return (timeOut - timeIn) / 100; // Assuming time is stored in HHMM format
    } else {
      return 0; 
    }
  }
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const ratePerHour = this.payPerHour;
    return hoursWorked * ratePerHour;
  }
  function findEmployeeByFirstName(srcArray, firstName){
    for (const employeeRecord of srcArray){
        if (employeeRecord.firstName === firstName){
            return employeeRecord;
        }
    }
    return undefined;
  }
  const calculatePayroll = function(employeeRecords){
    let totalPayroll = 0;
    employeeRecords.forEach(employeeRecord => {
        totalPayroll += allWagesFor.call(employeeRecord);
    });
    return totalPayroll;
  };