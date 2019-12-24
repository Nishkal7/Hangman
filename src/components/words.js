var Countries = [
	"andhra-pradesh", 
	"arunachal-pradesh", 
	"assam", 
	"bihar", 
	"goa", 
	"gujarat", 
	"haryana", 
	"himachal-pradesh", 
	"jammu-kashmir",
	"karnataka", 
	"kerala",
	"madhya-pradesh",
	"maharashtra", 
	"manipur", 
	"meghalaya", 
	"mizoram", 
	"nagaland", 
	"orissa",
	"punjab", 
	"rajasthan", 
	"sikkim", 
	"tamil-nadu", 
	"tripura", 
	"uttar-pradesh", 
	"west-bengal", 
	"chhattisgarh", 
	"uttarakhand", 
	"jharkhand", 
	"telangana"
];

function randomWord() {
	return Countries[Math.floor(Math.random() * Countries.length)];
}

export { randomWord };
