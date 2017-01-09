var Employee1=
	{
	name:"Tanuja",
	age:"21",
	sal:"20,000",
	add:{
	    city:"Mysore",
	    state:"Karnataka",
	    pincode:"570006"
	    },
	}

var Employee2=
	{
	name:"Vaishnavi",
	age:"22",
	sal:"30,000",
	add:{
	    city:"koppal",
	    state:"Karnataka",
	    pincode:"583227"
	    },
	}

var Employee3=
	{
	name:"Ananya",
	age:"25",
	sal:"50,000",
	add:{
	    city:"Bangalore",
	    state:"Karnataka",
	    pincode:"560987"
	    },
	}

var Employee4=
	{
	name:"Shyam",
	age:"30",
	sal:"80,000",
	add:{
	    city:"Mumbai",
	    state:"Maharashtra",
	    pincode:"678930"
	    },
	}
var Employee5=
	{
	name:"Hari",
	age:"32",
	sal:"90,000",
	add:{
	    city:"Kurnool",
	    state:"AndhraPradesh",
	    pincode:"734592"
	    },
	}

var employees=[Employee1,Employee2,Employee3,Employee4,Employee5];
for(var i in employees){
console.log("Name : "+ employees[i]['name'] + ", Age : "+ employees[i]['age'] +", Salary : " + employees[i]['sal'] );
console.log("Address:: " );
console.log("City : " + employees[i].add.city);
console.log("State : " + employees[i].add.state);
console.log("Pincode : " + employees[i].add.pincode);
}